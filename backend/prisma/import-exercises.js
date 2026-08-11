const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const VIDEO_TEST = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"; // vidéo de test temporaire

const NIVEAU_PAR_DIFFICULTE = {
  debutant: "DEBUTANT",
  intermediaire: "INTERMEDIAIRE",
  avance: "AVANCE",
};

const CATEGORIE_LISIBLE = {
  musculation: "musculation",
  crossfit: "CrossFit",
  fitness_general: "fitness général",
  cardio: "cardio",
  kettlebell: "kettlebell",
  mobilite: "mobilité",
  plyometrie: "plyométrie",
  bandes_elastiques: "bandes élastiques",
};

function chargerCatalogue() {
  const cheminFichier = path.join(__dirname, "data", "fitness_exercises_database.json");
  const brut = fs.readFileSync(cheminFichier, "utf8");
  // Le fichier source a été mal ré-encodé (UTF-8 lu comme Latin-1) : "é" -> "Ã©".
  const corrige = Buffer.from(brut, "latin1").toString("utf8");
  return JSON.parse(corrige);
}

function construireDescription(exercice) {
  const categorie = CATEGORIE_LISIBLE[exercice.category] || exercice.category;
  const zone = exercice.body_area.replace(/_/g, " ");
  const muscles = exercice.primary_muscles.join(", ");
  return `Exercice de ${categorie} (${zone}) ciblant ${muscles}.`;
}

async function main() {
  const catalogue = chargerCatalogue();

  const premierNom = catalogue.exercises[0].name;
  const dejaImporte = await prisma.mouvement.findFirst({ where: { nom: premierNom } });
  if (dejaImporte) {
    console.log("Le catalogue d'exercices semble déjà importé (trouvé:", premierNom, "). Arrêt sans rien modifier.");
    return;
  }

  const donnees = catalogue.exercises.map((exercice) => ({
    nom: exercice.name,
    description: construireDescription(exercice),
    videoUrl: VIDEO_TEST,
    muscleprincipal: exercice.primary_muscles[0] || null,
    musclesSecondaires: exercice.secondary_muscles,
    niveau: NIVEAU_PAR_DIFFICULTE[exercice.difficulty],
    materiel: exercice.equipment,
    erreursFrequentes: exercice.common_mistakes,
  }));

  const resultat = await prisma.mouvement.createMany({ data: donnees });
  console.log(`Import terminé : ${resultat.count} mouvements créés.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
