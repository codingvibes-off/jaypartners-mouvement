const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const TAILLE_MIN_SEANCE = 10;

const NIVEAU_PAR_DIFFICULTE = {
  debutant: "DEBUTANT",
  intermediaire: "INTERMEDIAIRE",
  avance: "AVANCE",
};

const TITRE_PAR_CATEGORIE = {
  musculation: "Musculation",
  crossfit: "CrossFit",
  fitness_general: "Fitness Général",
  cardio: "Cardio Intense",
  kettlebell: "Kettlebell Complet",
  mobilite: "Mobilité Totale",
  plyometrie: "Explosivité & Pliométrie",
  bandes_elastiques: "Bandes Élastiques Full Body",
};

const CATEGORIE_LISIBLE_PAR_CATEGORIE = {
  musculation: "Renforcement",
  crossfit: "CrossFit",
  fitness_general: "Fitness Général",
  cardio: "Cardio",
  kettlebell: "Kettlebell",
  mobilite: "Mobilité",
  plyometrie: "Plyométrie",
  bandes_elastiques: "Bandes Élastiques",
};

const GENRES = ["MIXTE", "HOMME", "FEMME"];

function chargerCatalogue() {
  const cheminFichier = path.join(__dirname, "data", "fitness_exercises_database.json");
  const brut = fs.readFileSync(cheminFichier, "utf8");
  const corrige = Buffer.from(brut, "latin1").toString("utf8");
  return JSON.parse(corrige);
}

function decouperEnGroupes(items, taille) {
  const groupes = [];
  for (let i = 0; i < items.length; i += taille) {
    groupes.push(items.slice(i, i + taille));
  }
  // Fusionne le dernier groupe s'il est trop petit, pour garantir >= TAILLE_MIN_SEANCE
  if (groupes.length > 1 && groupes[groupes.length - 1].length < taille) {
    const dernier = groupes.pop();
    groupes[groupes.length - 1].push(...dernier);
  }
  return groupes;
}

function niveauMajoritaire(exercices) {
  const compte = {};
  for (const ex of exercices) compte[ex.difficulty] = (compte[ex.difficulty] || 0) + 1;
  const difficulte = Object.entries(compte).sort((a, b) => b[1] - a[1])[0][0];
  return NIVEAU_PAR_DIFFICULTE[difficulte];
}

async function creerSeancesParCategorie(exercices, idParNom) {
  const parCategorie = {};
  for (const ex of exercices) {
    if (!parCategorie[ex.category]) parCategorie[ex.category] = [];
    parCategorie[ex.category].push(ex);
  }

  let compteurGenre = 0;
  let seancesCreees = 0;

  for (const [categorie, items] of Object.entries(parCategorie)) {
    const groupes = decouperEnGroupes(items, TAILLE_MIN_SEANCE);
    const nomBase = TITRE_PAR_CATEGORIE[categorie] || categorie;
    const categorieLisible = CATEGORIE_LISIBLE_PAR_CATEGORIE[categorie] || categorie;

    for (let i = 0; i < groupes.length; i++) {
      const groupe = groupes[i];
      const titre = groupes.length > 1 ? `${nomBase} ${i + 1}` : nomBase;

      const existe = await prisma.seance.findFirst({ where: { titre } });
      if (existe) continue;

      const genre = GENRES[compteurGenre % GENRES.length];
      compteurGenre++;

      await prisma.seance.create({
        data: {
          titre,
          description: `Programme ${nomBase.toLowerCase()} regroupant ${groupe.length} mouvements variés.`,
          genre,
          niveau: niveauMajoritaire(groupe),
          dureeMin: Math.max(20, groupe.length * 4),
          categorie: categorieLisible,
          ordre: i + 1,
          mouvements: {
            create: groupe
              .map((ex, idx) => {
                const mouvementId = idParNom.get(ex.name);
                if (!mouvementId) return null;
                return { mouvementId, ordre: idx + 1, series: 3, repetitions: "12" };
              })
              .filter(Boolean),
          },
        },
      });
      seancesCreees++;
    }
  }

  return seancesCreees;
}

async function completerSeance(titreSeance, exercicesCandidats, idParNom) {
  const seance = await prisma.seance.findFirst({
    where: { titre: titreSeance },
    include: { mouvements: true },
  });
  if (!seance) return 0;
  if (seance.mouvements.length >= TAILLE_MIN_SEANCE) return 0;

  const idsDejaLies = new Set(seance.mouvements.map((sm) => sm.mouvementId));
  const manquant = TAILLE_MIN_SEANCE - seance.mouvements.length;
  let ordre = Math.max(0, ...seance.mouvements.map((sm) => sm.ordre)) + 1;
  let ajoutes = 0;

  for (const ex of exercicesCandidats) {
    if (ajoutes >= manquant) break;
    const mouvementId = idParNom.get(ex.name);
    if (!mouvementId || idsDejaLies.has(mouvementId)) continue;

    await prisma.seanceMouvement.create({
      data: { seanceId: seance.id, mouvementId, ordre, series: 3, repetitions: "12" },
    });
    idsDejaLies.add(mouvementId);
    ordre++;
    ajoutes++;
  }

  return ajoutes;
}

async function main() {
  const catalogue = chargerCatalogue();
  const exercices = catalogue.exercises;

  const mouvements = await prisma.mouvement.findMany();
  const idParNom = new Map(mouvements.map((m) => [m.nom, m.id]));

  console.log("Complément des séances existantes...");
  const musculation = exercices.filter((e) => e.category === "musculation");
  const fessiersAbdos = exercices.filter((e) =>
    ["fessiers", "abdominaux"].includes(e.body_area)
  );
  const mobilite = exercices.filter((e) => e.category === "mobilite");

  const ajoutsForce = await completerSeance("Force Fondations - Homme", musculation, idParNom);
  const ajoutsFessiers = await completerSeance("Fessiers & Stabilité - Femme", fessiersAbdos, idParNom);
  const ajoutsMobilite = await completerSeance("Réveil Articulaire", mobilite, idParNom);
  console.log(
    `  Force Fondations +${ajoutsForce}, Fessiers & Stabilité +${ajoutsFessiers}, Réveil Articulaire +${ajoutsMobilite}`
  );

  console.log("Création des nouvelles séances par catégorie...");
  const total = await creerSeancesParCategorie(exercices, idParNom);
  console.log(`  ${total} nouvelles séances créées.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
