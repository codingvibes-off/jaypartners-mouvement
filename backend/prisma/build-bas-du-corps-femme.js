// Séances "Bas du Corps" (élastique, coach Femme) + bibliothèque de mouvements associée,
// fournies par la coach avec leurs vidéos Cloudflare Stream déjà encodées.
//
// NOTE MATÉRIEL : aucune vidéo élastique n'a été fournie pour "Squat" (plan), "Fentes
// Arrières" et "RDL" — ces deux derniers réutilisent donc la vidéo haltères la plus proche
// par nom (le mouvement s'exécute très similairement), et "Squat Élastique" reste sans
// vidéo (repli automatique sur la vidéo de démonstration générique de l'app). À remplacer
// dès qu'un tournage élastique dédié est disponible.
//
// NOTE TEMPS DE RÉCUPÉRATION : la maquette fournie précise un temps de repos par mouvement
// (1', 1'30, 2'...), mais le minuteur de repos de l'app est actuellement une constante
// globale (1m30, cf. entrainement.component.ts) et n'est pas pilotable par mouvement — ces
// valeurs ne sont donc pas encore reflétées dans les données.

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const MOUVEMENTS = [
  {
    nom: "Squat Élastique",
    muscleprincipal: "Quadriceps",
    materiel: ["Élastique"],
    cfStreamUid: null,
  },
  {
    nom: "Squat Jump Élastique",
    muscleprincipal: "Quadriceps",
    materiel: ["Élastique"],
    cfStreamUid: "de046d223f7cbcc0d54910431469210c",
  },
  {
    nom: "Squat Jump Élastique (Option)",
    muscleprincipal: "Quadriceps",
    materiel: ["Élastique"],
    cfStreamUid: "f765ae85615027ebdaf3c9c476ef72c1",
  },
  {
    nom: "Squat Jump Élastique (Variante)",
    muscleprincipal: "Quadriceps",
    materiel: ["Élastique"],
    cfStreamUid: "f9d8967b3c9b390181510393edc3ea84",
  },
  {
    nom: "Squat Déplacé Élastique",
    muscleprincipal: "Fessiers",
    materiel: ["Élastique"],
    cfStreamUid: "01fcbb9712baf7686f2378b7b8987a64",
  },
  {
    nom: "Fentes Pulls Élastique",
    muscleprincipal: "Fessiers",
    materiel: ["Élastique"],
    cfStreamUid: "6ea1fb88cade2d5ece89122eaed97dcf",
  },
  {
    nom: "Fentes Alternées Élastique",
    muscleprincipal: "Quadriceps",
    materiel: ["Élastique"],
    cfStreamUid: "7be023d2d9ba86a6375d1d924aedb365",
  },
  {
    nom: "Curl Biceps Élastique",
    muscleprincipal: "Biceps",
    materiel: ["Élastique"],
    cfStreamUid: "2d0cfedf01b94db3a00e5708853fddb7",
  },
  {
    nom: "Fentes Unilatérales Haltères",
    muscleprincipal: "Quadriceps",
    materiel: ["Haltères"],
    cfStreamUid: "b5befaeb57c0829bc99086ac6da81858",
  },
  {
    nom: "Fentes Arrière Haltères",
    muscleprincipal: "Fessiers",
    materiel: ["Haltères"],
    cfStreamUid: "3947e85653c66121ce8585d69ee09387",
  },
  {
    nom: "RDL Haltères",
    muscleprincipal: "Ischio-jambiers",
    materiel: ["Haltères"],
    cfStreamUid: "10ba49109405b9b2e60842774dbc6047",
  },
  {
    nom: "Squat Pulls Haltères",
    muscleprincipal: "Fessiers",
    materiel: ["Haltères"],
    cfStreamUid: "711343f87f2ccba2b67709c4a21e2eb7",
  },
  {
    nom: "Montée de Genoux Haltères",
    muscleprincipal: "Cardio",
    materiel: ["Haltères"],
    cfStreamUid: "09750b1c8d03b961b8fe123053146c07",
  },
  {
    nom: "Abdos Haltères",
    muscleprincipal: "Abdominaux",
    materiel: ["Haltères"],
    cfStreamUid: "487e6b2132dcad45d8162e36d5a623e5",
  },
  {
    nom: "Burpees Haltères",
    muscleprincipal: "Full Body",
    materiel: ["Haltères"],
    cfStreamUid: "14407467289000496c8010c16d21e34f",
  },
  {
    nom: "Rowing Haltères",
    muscleprincipal: "Dos",
    materiel: ["Haltères"],
    cfStreamUid: "0561908e0b77fe8ece9f8f651164e83f",
  },
];

// { titre, niveau, dureeMin, mouvements: [{ nom, series, repetitions }] }
const SEANCES = [
  {
    titre: "Bas du Corps Élastique 1",
    titreEn: "Lower Body Resistance Band 1",
    niveau: "DEBUTANT",
    dureeMin: 25,
    mouvements: [
      { nom: "Squat Élastique", series: 4, repetitions: "20" },
      { nom: "Squat Jump Élastique", series: 3, repetitions: "10" },
      { nom: "Squat Déplacé Élastique", series: 3, repetitions: "10" },
      { nom: "Fentes Arrière Haltères", series: 4, repetitions: "20/jambe" },
      { nom: "RDL Haltères", series: 3, repetitions: "15" },
    ],
  },
  {
    titre: "Bas du Corps Élastique 2",
    titreEn: "Lower Body Resistance Band 2",
    niveau: "DEBUTANT",
    dureeMin: 28,
    mouvements: [
      { nom: "Squat Élastique", series: 4, repetitions: "10" },
      { nom: "Fentes Arrière Haltères", series: 4, repetitions: "15/jambe" },
      { nom: "Squat Déplacé Élastique", series: 4, repetitions: "10" },
      { nom: "RDL Haltères", series: 4, repetitions: "10" },
      { nom: "Squat Jump Élastique", series: 4, repetitions: "10" },
    ],
  },
  {
    titre: "Bas du Corps Élastique 3",
    titreEn: "Lower Body Resistance Band 3",
    niveau: "INTERMEDIAIRE",
    dureeMin: 32,
    mouvements: [
      { nom: "Squat Déplacé Élastique", series: 3, repetitions: "20" },
      { nom: "RDL Haltères", series: 3, repetitions: "20" },
      { nom: "Squat Élastique", series: 4, repetitions: "20" },
      { nom: "Squat Jump Élastique", series: 3, repetitions: "20" },
      { nom: "Fentes Pulls Élastique", series: 2, repetitions: "20/jambe" },
      { nom: "Fentes Arrière Haltères", series: 3, repetitions: "20" },
    ],
  },
  {
    titre: "Bas du Corps Élastique 4",
    titreEn: "Lower Body Resistance Band 4",
    niveau: "INTERMEDIAIRE",
    dureeMin: 15,
    // Maquette d'origine : circuit alterné Squat/Squat Jump répété 3 fois. La contrainte
    // d'unicité (une ligne par mouvement et par séance) impose de regrouper les 3 tours en
    // une série de 3 par mouvement plutôt qu'en 6 lignes alternées.
    mouvements: [
      { nom: "Squat Élastique", series: 3, repetitions: "20" },
      { nom: "Squat Jump Élastique", series: 3, repetitions: "10" },
    ],
  },
];

async function creerOuMajMouvements() {
  const idParNom = new Map();

  for (const m of MOUVEMENTS) {
    const data = {
      nom: m.nom,
      muscleprincipal: m.muscleprincipal,
      niveau: "DEBUTANT",
      materiel: m.materiel,
      ...(m.cfStreamUid ? { cfStreamUid: m.cfStreamUid, cfStreamStatus: "ready" } : {}),
    };

    let mouvement = await prisma.mouvement.findFirst({ where: { nom: m.nom } });
    if (!mouvement) {
      mouvement = await prisma.mouvement.create({ data });
      console.log(`  + mouvement créé : ${m.nom}`);
    } else if (m.cfStreamUid && mouvement.cfStreamUid !== m.cfStreamUid) {
      mouvement = await prisma.mouvement.update({ where: { id: mouvement.id }, data });
      console.log(`  ~ mouvement mis à jour (vidéo) : ${m.nom}`);
    }
    idParNom.set(m.nom, mouvement.id);
  }

  return idParNom;
}

async function creerSeances(idParNom) {
  for (const s of SEANCES) {
    const existante = await prisma.seance.findFirst({ where: { titre: s.titre } });
    if (existante) {
      console.log(`  "${s.titre}" existe déjà, ignorée.`);
      continue;
    }

    await prisma.seance.create({
      data: {
        titre: s.titre,
        titreEn: s.titreEn,
        description: `Programme bas du corps élastique regroupant ${s.mouvements.length} mouvements.`,
        descriptionEn: `Lower body resistance band program with ${s.mouvements.length} movements.`,
        genre: "FEMME",
        coach: "FEMME",
        niveau: s.niveau,
        dureeMin: s.dureeMin,
        categorie: "Bandes Élastiques",
        categorieEn: "Resistance Bands",
        ordre: 1,
        mouvements: {
          create: s.mouvements.map((m, idx) => ({
            mouvementId: idParNom.get(m.nom),
            ordre: idx + 1,
            series: m.series,
            repetitions: m.repetitions,
          })),
        },
      },
    });
    console.log(`  "${s.titre}" créée avec ${s.mouvements.length} mouvements.`);
  }
}

async function main() {
  console.log("Mouvements bas du corps (élastique / haltères, coach femme)...");
  const idParNom = await creerOuMajMouvements();

  console.log("Séances Bas du Corps Élastique...");
  await creerSeances(idParNom);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
