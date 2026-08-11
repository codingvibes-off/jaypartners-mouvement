const express = require("express");
const prisma = require("../lib/prisma");

const router = express.Router();

// GET /api/seances?genre=HOMME&categorie=Hyrox -> catalogue façon "rangées Netflix" groupées par catégorie
router.get("/", async (req, res) => {
  const { genre, categorie } = req.query; // genre: HOMME | FEMME | MIXTE

  const conditions = [];
  if (genre) conditions.push({ OR: [{ genre }, { genre: "MIXTE" }] });
  if (categorie) conditions.push({ categorie: { equals: categorie, mode: "insensitive" } });
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
    Object.entries(rangees).map(([categorie, items]) => ({ categorie, seances: items }))
  );
});

// GET /api/seances/:id -> détail d'une séance avec ses mouvements ordonnés
router.get("/:id", async (req, res) => {
  const seance = await prisma.seance.findUnique({
    where: { id: req.params.id },
    include: {
      mouvements: {
        orderBy: { ordre: "asc" },
        include: { mouvement: true },
      },
    },
  });

  if (!seance) return res.status(404).json({ message: "Séance introuvable" });
  res.json(seance);
});

module.exports = router;
