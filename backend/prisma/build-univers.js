const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const VIDEO_TEST = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const TAILLE_ATHLETISME = 11;
const GENRES = ["MIXTE", "HOMME", "FEMME"];

// -----------------------------
// HYROX — stations officielles adaptées
// -----------------------------
const MOUVEMENTS_HYROX = [
  {
    nom: "Course Hyrox (1km)",
    description: "Segment de course entre chaque station, rythme constant à tenir sur toute la course.",
    muscleprincipal: "cardio",
    musclesSecondaires: ["mollets", "ischio-jambiers"],
    niveau: "DEBUTANT",
    materiel: ["Aucun"],
    erreursFrequentes: ["Partir trop vite sur le premier kilomètre", "Foulée qui s'effondre en fin de course"],
    repetitions: "1 km",
  },
  {
    nom: "SkiErg",
    description: "Tirage vertical alterné sur ergomètre de ski, gainage et poussée des hanches.",
    muscleprincipal: "dorsaux",
    musclesSecondaires: ["triceps", "sangle abdominale"],
    niveau: "INTERMEDIAIRE",
    materiel: ["SkiErg"],
    erreursFrequentes: ["Tirer uniquement avec les bras sans engager les hanches"],
    repetitions: "1000 m",
  },
  {
    nom: "Sled Push",
    description: "Poussée de traîneau chargé, appuis bas et poussée puissante des jambes.",
    muscleprincipal: "quadriceps",
    musclesSecondaires: ["fessiers", "mollets"],
    niveau: "AVANCE",
    materiel: ["Traîneau", "Disques"],
    erreursFrequentes: ["Dos rond au lieu de rester gainé", "Petits pas inefficaces"],
    repetitions: "50 m",
  },
  {
    nom: "Sled Pull",
    description: "Traction de traîneau à la corde, tirage explosif bras-jambes en rétropédalage.",
    muscleprincipal: "dorsaux",
    musclesSecondaires: ["biceps", "fessiers"],
    niveau: "AVANCE",
    materiel: ["Traîneau", "Corde"],
    erreursFrequentes: ["Tirer uniquement des bras sans reculer avec les jambes"],
    repetitions: "50 m",
  },
  {
    nom: "Burpee Broad Jump",
    description: "Burpee enchaîné avec un saut en longueur, puissance et cardio combinés.",
    muscleprincipal: "sangle abdominale",
    musclesSecondaires: ["quadriceps", "epaules"],
    niveau: "AVANCE",
    materiel: ["Aucun"],
    erreursFrequentes: ["Réception du saut genoux verrouillés", "Poitrine qui ne touche pas le sol"],
    regression: "Pas en arrière au lieu du saut à la poitrine au sol",
    repetitions: "80 m",
  },
  {
    nom: "Rowing (Row Machine)",
    description: "Rameur à intensité soutenue, enchaînement jambes-dos-bras.",
    muscleprincipal: "dorsaux",
    musclesSecondaires: ["ischio-jambiers", "biceps"],
    niveau: "INTERMEDIAIRE",
    materiel: ["Rameur"],
    erreursFrequentes: ["Tirer avec les bras avant d'avoir poussé avec les jambes"],
    repetitions: "1000 m",
  },
  {
    nom: "Farmers Carry",
    description: "Port de charges lourdes en marche rapide, gainage et poigne sollicités.",
    muscleprincipal: "avant-bras",
    musclesSecondaires: ["trapèzes", "sangle abdominale"],
    niveau: "INTERMEDIAIRE",
    materiel: ["Kettlebells", "Haltères"],
    erreursFrequentes: ["Épaules qui remontent vers les oreilles", "Dos qui s'arrondit"],
    repetitions: "200 m",
  },
  {
    nom: "Sandbag Lunges",
    description: "Fentes marchées avec sac de sable sur les épaules.",
    muscleprincipal: "quadriceps",
    musclesSecondaires: ["fessiers", "sangle abdominale"],
    niveau: "AVANCE",
    materiel: ["Sac de sable"],
    erreursFrequentes: ["Genou avant qui dépasse largement la pointe du pied", "Buste penché en avant"],
    regression: "Sans charge additionnelle",
    repetitions: "100 m",
  },
  {
    nom: "Wall Balls",
    description: "Squat suivi d'un lancer de medecine ball sur cible, cardio et jambes.",
    muscleprincipal: "quadriceps",
    musclesSecondaires: ["epaules", "sangle abdominale"],
    niveau: "AVANCE",
    materiel: ["Medecine ball"],
    erreursFrequentes: ["Squat pas assez profond", "Ne pas utiliser l'élan des jambes pour le lancer"],
    repetitions: "100 répétitions",
  },
];

async function creerMouvementsHyrox() {
  const idParNom = new Map();
  for (const m of MOUVEMENTS_HYROX) {
    let existant = await prisma.mouvement.findFirst({ where: { nom: m.nom } });
    if (!existant) {
      existant = await prisma.mouvement.create({
        data: {
          nom: m.nom,
          description: m.description,
          videoUrl: VIDEO_TEST,
          muscleprincipal: m.muscleprincipal,
          musclesSecondaires: m.musclesSecondaires,
          niveau: m.niveau,
          materiel: m.materiel,
          erreursFrequentes: m.erreursFrequentes,
          regression: m.regression || null,
          progression: m.progression || null,
        },
      });
    }
    idParNom.set(m.nom, existant.id);
  }
  return idParNom;
}

async function creerSeanceHyrox(titre, niveau, dureeMin, idParNom) {
  const existe = await prisma.seance.findFirst({ where: { titre } });
  if (existe) {
    console.log(`  "${titre}" existe déjà, ignorée.`);
    return;
  }
  await prisma.seance.create({
    data: {
      titre,
      description: `Simulation d'une course Hyrox : ${MOUVEMENTS_HYROX.length} stations fonctionnelles entrecoupées de course.`,
      genre: "MIXTE",
      niveau,
      dureeMin,
      categorie: "Hyrox",
      ordre: 1,
      mouvements: {
        create: MOUVEMENTS_HYROX.map((m, idx) => ({
          mouvementId: idParNom.get(m.nom),
          ordre: idx + 1,
          series: 1,
          repetitions: m.repetitions,
        })),
      },
    },
  });
  console.log(`  "${titre}" créée avec ${MOUVEMENTS_HYROX.length} stations.`);
}

// -----------------------------
// ATHLÉTISME — à partir du catalogue cardio + fitness_general
// -----------------------------
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
  if (groupes.length > 1 && groupes[groupes.length - 1].length < taille) {
    const dernier = groupes.pop();
    groupes[groupes.length - 1].push(...dernier);
  }
  return groupes;
}

const NIVEAU_PAR_DIFFICULTE = {
  debutant: "DEBUTANT",
  intermediaire: "INTERMEDIAIRE",
  avance: "AVANCE",
};

function niveauMajoritaire(exercices) {
  const compte = {};
  for (const ex of exercices) compte[ex.difficulty] = (compte[ex.difficulty] || 0) + 1;
  const difficulte = Object.entries(compte).sort((a, b) => b[1] - a[1])[0][0];
  return NIVEAU_PAR_DIFFICULTE[difficulte];
}

async function creerSeancesAthletisme(catalogue) {
  const mouvements = await prisma.mouvement.findMany();
  const idParNom = new Map(mouvements.map((m) => [m.nom, m.id]));

  const pool = catalogue.exercises.filter(
    (e) => e.category === "cardio" || e.category === "fitness_general"
  );
  const groupes = decouperEnGroupes(pool, TAILLE_ATHLETISME);

  let compteurGenre = 0;
  let creees = 0;

  for (let i = 0; i < groupes.length; i++) {
    const groupe = groupes[i];
    const titre = groupes.length > 1 ? `Athlétisme ${i + 1}` : "Athlétisme";

    const existe = await prisma.seance.findFirst({ where: { titre } });
    if (existe) continue;

    const genre = GENRES[compteurGenre % GENRES.length];
    compteurGenre++;

    await prisma.seance.create({
      data: {
        titre,
        description: `Programme athlétisme regroupant ${groupe.length} mouvements de course et de préparation physique générale.`,
        genre,
        niveau: niveauMajoritaire(groupe),
        dureeMin: Math.max(20, groupe.length * 4),
        categorie: "Athlétisme",
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
    creees++;
  }

  return creees;
}

async function main() {
  console.log("Création des mouvements Hyrox...");
  const idParNom = await creerMouvementsHyrox();
  console.log(`  ${MOUVEMENTS_HYROX.length} mouvements Hyrox disponibles.`);

  console.log("Création des séances Hyrox...");
  await creerSeanceHyrox("Hyrox Race Prep", "INTERMEDIAIRE", 55, idParNom);
  await creerSeanceHyrox("Hyrox Elite", "AVANCE", 65, idParNom);
  await creerSeanceHyrox("Hyrox Sprint", "DEBUTANT", 40, idParNom);
  await creerSeanceHyrox("Hyrox Endurance", "INTERMEDIAIRE", 70, idParNom);

  console.log("Création des séances Athlétisme...");
  const catalogue = chargerCatalogue();
  const total = await creerSeancesAthletisme(catalogue);
  console.log(`  ${total} nouvelles séances Athlétisme créées.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
