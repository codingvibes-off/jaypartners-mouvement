const express = require("express");
const prisma = require("../lib/prisma");
const { auteurOptionnel } = require("../middleware/auth");
const { verifierJetonProgramme } = require("../lib/jetonProgramme");

const router = express.Router();

// Vidéo réellement disponible = encodée par Cloudflare Stream. Les `videoUrl` d'origine sont
// des vidéos de démonstration, pas le contenu de la coach.
const AVEC_VIDEO = { cfStreamStatus: "ready" };

// GET /api/seances?genre=HOMME&categorie=Hyrox -> catalogue façon "rangées Netflix" groupées par catégorie
// genre=FEMME&strict=true -> uniquement FEMME (pas de repli MIXTE)
// coach=FEMME|HOMME|DUO -> filtre par coach (indépendant de genre), utilisé par l'accueil et /duo
// avecVideo=true -> uniquement les séances contenant au moins un mouvement avec une vraie vidéo
router.get("/", async (req, res) => {
  const { genre, categorie, strict, coach, avecVideo } = req.query; // genre: HOMME | FEMME | MIXTE ; coach: FEMME | HOMME | DUO

  const conditions = [];
  if (genre) conditions.push(strict === "true" ? { genre } : { OR: [{ genre }, { genre: "MIXTE" }] });
  if (categorie) conditions.push({ categorie: { equals: categorie, mode: "insensitive" } });
  if (coach) conditions.push({ coach });
  if (avecVideo === "true") conditions.push({ mouvements: { some: { mouvement: AVEC_VIDEO } } });
  const where = conditions.length ? { AND: conditions } : {};

  const seances = await prisma.seance.findMany({
    where,
    orderBy: [{ categorie: "asc" }, { ordre: "asc" }],
  });

  // Regroupement par catégorie pour affichage en rangées (comme des rangées Netflix)
  const rangees = {};
  for (const s of seances) {
    const cat = s.categorie || "Autres séances";
    if (!rangees[cat]) rangees[cat] = [];
    rangees[cat].push(s);
  }

  res.json(
    Object.entries(rangees).map(([categorie, items]) => ({
      categorie,
      categorieEn: items[0].categorieEn || null,
      seances: items,
    }))
  );
});

// GET /api/seances/:id?jeton=... -> détail d'une séance avec ses mouvements ordonnés
// auteurOptionnel : ne bloque jamais la requête (la fiche séance reste publique), mais
// peuple req.user si un jeton (session) valide est fourni, pour vérifier l'achat ci-dessous.
// `jeton` (query) : reçu d'achat invité délivré par /api/achats/verifier-session, permet de
// débloquer sans compte — voir lib/jetonProgramme.
// `avecVideo=true` : retire les mouvements qui n'ont pas encore de vraie vidéo.
router.get("/:id", auteurOptionnel, async (req, res) => {
  const seance = await prisma.seance.findUnique({
    where: { id: req.params.id },
    include: {
      mouvements: {
        where: req.query.avecVideo === "true" ? { mouvement: AVEC_VIDEO } : undefined,
        orderBy: { ordre: "asc" },
        include: { mouvement: true },
      },
    },
  });

  if (!seance) return res.status(404).json({ message: "Séance introuvable" });

  if (seance.prixCentimes) {
    const jetonValide = verifierJetonProgramme(req.query.jeton, seance.id);

    const achat = !jetonValide && req.user
      ? await prisma.achat.findFirst({
          where: { userId: req.user.id, seanceId: seance.id, statut: "PAYE" },
        })
      : null;

    if (!jetonValide && !achat) {
      // Programme payant non débloqué : la fiche (titre, description, badges) reste
      // visible pour donner envie d'acheter, mais le contenu réel (mouvements) est retiré
      // côté serveur — un utilisateur ne peut pas le récupérer en lisant juste la requête réseau.
      return res.json({ ...seance, mouvements: [] });
    }
  }

  res.json(seance);
});

module.exports = router;
