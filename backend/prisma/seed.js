const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const VIDEO_TEST = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"; // vidéo de test temporaire

async function main() {
  console.log("Nettoyage de la base...");
  await prisma.seanceMouvement.deleteMany();
  await prisma.seance.deleteMany();
  await prisma.mouvement.deleteMany();

  console.log("Création des mouvements...");
  const mouvements = await Promise.all([
    prisma.mouvement.create({
      data: {
        nom: "Squat",
        description: "Mouvement fondamental de flexion-extension des membres inférieurs.",
        videoUrl: VIDEO_TEST,
        muscleprincipal: "Quadriceps",
        musclesSecondaires: ["Fessiers", "Ischio-jambiers", "Sangle abdominale"],
        niveau: "DEBUTANT",
        materiel: ["Aucun"],
        erreursFrequentes: ["Genoux qui rentrent", "Dos arrondi", "Talons qui décollent"],
        regression: "Squat sur box",
        progression: "Goblet Squat",
        dureeConseillee: 45,
      },
    }),
    prisma.mouvement.create({
      data: {
        nom: "Pompes inclinées",
        description: "Version accessible de la pompe classique.",
        videoUrl: VIDEO_TEST,
        muscleprincipal: "Pectoraux",
        musclesSecondaires: ["Triceps", "Épaules"],
        niveau: "DEBUTANT",
        materiel: ["Aucun"],
        regression: "Pompes au mur",
        progression: "Pompes classiques",
        dureeConseillee: 30,
      },
    }),
    prisma.mouvement.create({
      data: {
        nom: "Hip Thrust",
        description: "Renforcement des fessiers en extension de hanche.",
        videoUrl: VIDEO_TEST,
        muscleprincipal: "Fessiers",
        musclesSecondaires: ["Ischio-jambiers"],
        niveau: "INTERMEDIAIRE",
        materiel: ["Banc", "Haltère"],
        regression: "Glute Bridge",
        progression: "Single Leg Hip Thrust",
        dureeConseillee: 45,
      },
    }),
    prisma.mouvement.create({
      data: {
        nom: "Dead Bug",
        description: "Exercice de gainage et de contrôle du core.",
        videoUrl: VIDEO_TEST,
        muscleprincipal: "Abdominaux",
        niveau: "DEBUTANT",
        materiel: ["Aucun"],
        dureeConseillee: 40,
      },
    }),
    prisma.mouvement.create({
      data: {
        nom: "90/90",
        description: "Mobilité des hanches en rotation interne/externe.",
        videoUrl: VIDEO_TEST,
        muscleprincipal: "Hanches",
        niveau: "DEBUTANT",
        materiel: ["Aucun"],
        regression: "90/90 avec support",
        progression: "90/90 avancé",
        dureeConseillee: 60,
      },
    }),
    prisma.mouvement.create({
      data: {
        nom: "Cat Cow",
        description: "Mobilisation douce de la colonne vertébrale.",
        videoUrl: VIDEO_TEST,
        muscleprincipal: "Colonne vertébrale",
        niveau: "DEBUTANT",
        materiel: ["Tapis"],
        dureeConseillee: 40,
      },
    }),
  ]);

  const [squat, pompes, hipThrust, deadBug, nonanteNonante, catCow] = mouvements;

  console.log("Création des séances...");

  const seanceForceHomme = await prisma.seance.create({
    data: {
      titre: "Force Fondations - Homme",
      description: "Séance de renforcement complet pour construire des bases solides.",
      genre: "HOMME",
      niveau: "DEBUTANT",
      dureeMin: 25,
      categorie: "Renforcement",
      ordre: 1,
      mouvements: {
        create: [
          { mouvementId: squat.id, ordre: 1, series: 4, repetitions: "12" },
          { mouvementId: pompes.id, ordre: 2, series: 3, repetitions: "15" },
        ],
      },
    },
  });

  const seanceGlutesFemme = await prisma.seance.create({
    data: {
      titre: "Fessiers & Stabilité - Femme",
      description: "Séance ciblée fessiers et gainage pour renforcer le bas du corps.",
      genre: "FEMME",
      niveau: "INTERMEDIAIRE",
      dureeMin: 30,
      categorie: "Renforcement",
      ordre: 1,
      mouvements: {
        create: [
          { mouvementId: hipThrust.id, ordre: 1, series: 4, repetitions: "15" },
          { mouvementId: deadBug.id, ordre: 2, series: 3, repetitions: "30 sec" },
        ],
      },
    },
  });

  const seanceMobiliteMixte = await prisma.seance.create({
    data: {
      titre: "Réveil Articulaire",
      description: "Routine de mobilité douce accessible à tous, idéale le matin.",
      genre: "MIXTE",
      niveau: "DEBUTANT",
      dureeMin: 15,
      categorie: "Mobilité",
      ordre: 1,
      mouvements: {
        create: [
          { mouvementId: catCow.id, ordre: 1, repetitions: "10 rép." },
          { mouvementId: nonanteNonante.id, ordre: 2, repetitions: "8 par côté" },
        ],
      },
    },
  });

  console.log("Seed terminé:", {
    seances: [seanceForceHomme.titre, seanceGlutesFemme.titre, seanceMobiliteMixte.titre],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
