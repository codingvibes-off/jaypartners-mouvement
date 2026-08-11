const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const VIDEO_TEST = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"; // vidéo de test temporaire

// Répertoire Pilates au sol classique, du plus accessible au plus exigeant.
const MOUVEMENTS_PILATES = [
  // --- Fondamentaux ---
  {
    nom: "The Hundred",
    description: "Mouvement d'échauffement emblématique du Pilates : pompage des bras en gainage complet.",
    muscleprincipal: "transverse",
    musclesSecondaires: ["grand_droit", "epaules"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Nuque qui tire vers l'avant", "Bas du dos qui décolle du tapis"],
    regression: "Garder les genoux pliés à 90°",
    progression: "Jambes tendues à 45°",
    ordre: 1,
    repetitions: "100 pompages (10x10)",
  },
  {
    nom: "Roll Up",
    description: "Enroulement vertèbre par vertèbre du buste, du sol vers la position assise.",
    muscleprincipal: "grand_droit",
    musclesSecondaires: ["ischio-jambiers", "transverse"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Utiliser l'élan au lieu de dérouler la colonne", "Bloquer la respiration"],
    regression: "Genoux légèrement pliés",
    progression: "Roll Up bras tendus au-dessus de la tête",
    ordre: 2,
    repetitions: "6-8 répétitions",
  },
  {
    nom: "Single Leg Circle",
    description: "Cercles contrôlés d'une jambe tendue en l'air, bassin stable.",
    muscleprincipal: "hanches",
    musclesSecondaires: ["abdominaux", "adducteurs"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Bassin qui bascule avec la jambe"],
    regression: "Cercles plus petits",
    progression: "Cercles plus amples, jambe opposée tendue au sol",
    ordre: 3,
    repetitions: "5 cercles par sens et par jambe",
  },
  {
    nom: "Single Leg Stretch",
    description: "Alternance de jambes en flexion vers la poitrine, buste enroulé.",
    muscleprincipal: "grand_droit",
    musclesSecondaires: ["flecheurs_de_hanche", "obliques"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Tête reposée sur le sol au lieu d'être enroulée", "Rythme trop rapide"],
    progression: "Jambe tendue plus basse",
    ordre: 4,
    repetitions: "10 répétitions par jambe",
  },
  {
    nom: "Double Leg Stretch",
    description: "Extension simultanée des bras et des jambes puis retour enroulé.",
    muscleprincipal: "transverse",
    musclesSecondaires: ["grand_droit", "epaules"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Cambrer le bas du dos à l'extension"],
    regression: "Amplitude réduite des jambes",
    progression: "Jambes tendues plus basses et plus lentement",
    ordre: 5,
    repetitions: "8-10 répétitions",
  },
  {
    nom: "Spine Stretch Forward",
    description: "Flexion avant assise, colonne arrondie vers les pieds.",
    muscleprincipal: "ischio-jambiers",
    musclesSecondaires: ["dos", "grand_droit"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Dos qui reste plat au lieu de s'arrondir"],
    ordre: 6,
    repetitions: "6 répétitions",
  },
  {
    nom: "Shoulder Bridge",
    description: "Pont dynamique en Pilates : bascule du bassin puis extension d'une jambe.",
    muscleprincipal: "fessiers",
    musclesSecondaires: ["ischio-jambiers", "transverse"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Pousser sur la nuque plutôt que sur les pieds"],
    regression: "Rester en pont statique",
    progression: "Extension et flexion de jambe en haut du pont",
    ordre: 7,
    repetitions: "8 répétitions par jambe",
  },
  {
    nom: "Swimming",
    description: "Battements alternés bras/jambes opposés en extension du dos, façon natation.",
    muscleprincipal: "erecteurs_du_rachis",
    musclesSecondaires: ["fessiers", "epaules"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Hyperextension de la nuque"],
    ordre: 8,
    repetitions: "20-30 sec",
  },
  {
    nom: "Saw",
    description: "Rotation du buste assis avec flexion avant, façon 'scie' vers le pied opposé.",
    muscleprincipal: "obliques",
    musclesSecondaires: ["ischio-jambiers", "dos"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Bassin qui tourne avec le buste"],
    ordre: 9,
    repetitions: "5 répétitions par côté",
  },
  {
    nom: "Rolling Like a Ball",
    description: "Roulement contrôlé sur la colonne en boule, équilibre sur le sacrum.",
    muscleprincipal: "transverse",
    musclesSecondaires: ["grand_droit", "obliques"],
    niveau: "DEBUTANT",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Rouler sur la nuque au lieu du haut du dos", "Perdre la position enroulée"],
    ordre: 10,
    repetitions: "6-8 répétitions",
  },
  // --- Intermédiaire / Avancé ---
  {
    nom: "Roll Over",
    description: "Les jambes tendues basculent par-dessus la tête puis redescendent vertèbre par vertèbre.",
    muscleprincipal: "grand_droit",
    musclesSecondaires: ["ischio-jambiers", "dos"],
    niveau: "INTERMEDIAIRE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Àà-coups au lieu d'un mouvement contrôlé", "Trop de poids sur la nuque"],
    ordre: 11,
    repetitions: "5 répétitions",
  },
  {
    nom: "Open Leg Rocker",
    description: "Équilibre sur le sacrum jambes tendues en V, puis bascule arrière-avant.",
    muscleprincipal: "transverse",
    musclesSecondaires: ["ischio-jambiers", "abdominaux"],
    niveau: "INTERMEDIAIRE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Rouler sur la nuque"],
    regression: "Genoux légèrement pliés",
    ordre: 12,
    repetitions: "6-8 répétitions",
  },
  {
    nom: "Corkscrew",
    description: "Grands cercles des jambes tendues en l'air, bassin stable, façon tire-bouchon.",
    muscleprincipal: "obliques",
    musclesSecondaires: ["transverse", "hanches"],
    niveau: "INTERMEDIAIRE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Bassin qui décolle et tangue"],
    ordre: 13,
    repetitions: "5 cercles par sens",
  },
  {
    nom: "Swan Dive",
    description: "Extension dynamique du dos en cambré, façon plongeon de cygne.",
    muscleprincipal: "erecteurs_du_rachis",
    musclesSecondaires: ["fessiers", "epaules"],
    niveau: "INTERMEDIAIRE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Compression du bas du dos au lieu d'un étirement de la colonne entière"],
    ordre: 14,
    repetitions: "5-6 répétitions",
  },
  {
    nom: "Single Leg Kick",
    description: "En appui sur les avant-bras, flexions rapides du genou en alternance.",
    muscleprincipal: "ischio-jambiers",
    musclesSecondaires: ["fessiers", "dos"],
    niveau: "INTERMEDIAIRE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Bassin qui bascule à chaque flexion"],
    ordre: 15,
    repetitions: "8 répétitions par jambe",
  },
  {
    nom: "Double Leg Kick",
    description: "Flexion des deux genoux puis extension complète du corps en cambré.",
    muscleprincipal: "fessiers",
    musclesSecondaires: ["ischio-jambiers", "dos"],
    niveau: "INTERMEDIAIRE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Épaules qui remontent vers les oreilles"],
    ordre: 16,
    repetitions: "6 répétitions",
  },
  {
    nom: "Neck Pull",
    description: "Roll Up avancé, mains derrière la nuque, dos qui s'enroule et se déroule.",
    muscleprincipal: "grand_droit",
    musclesSecondaires: ["dos", "ischio-jambiers"],
    niveau: "AVANCE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Tirer sur la nuque avec les mains"],
    ordre: 17,
    repetitions: "5-6 répétitions",
  },
  {
    nom: "Side Kick Series",
    description: "Série de battements de jambe en appui latéral, gainage du tronc maintenu.",
    muscleprincipal: "fessiers",
    musclesSecondaires: ["hanches", "obliques"],
    niveau: "INTERMEDIAIRE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Buste qui bascule en arrière pendant les battements"],
    ordre: 18,
    repetitions: "10 répétitions par jambe",
  },
  {
    nom: "Teaser",
    description: "Équilibre en V sur le bassin, bras et jambes tendus, mouvement signature du Pilates.",
    muscleprincipal: "transverse",
    musclesSecondaires: ["flecheurs_de_hanche", "grand_droit"],
    niveau: "AVANCE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Élan des bras au lieu d'un enroulement contrôlé du buste"],
    regression: "Genoux pliés en Teaser assisté",
    ordre: 19,
    repetitions: "5 répétitions",
  },
  {
    nom: "Seal",
    description: "Roulement en boule façon phoque, pieds tapés l'un contre l'autre en équilibre.",
    muscleprincipal: "transverse",
    musclesSecondaires: ["grand_droit", "adducteurs"],
    niveau: "AVANCE",
    materiel: ["bodyweight"],
    erreursFrequentes: ["Perdre l'équilibre par manque de gainage"],
    ordre: 20,
    repetitions: "6-8 répétitions",
  },
];

async function creerMouvements() {
  const idParNom = new Map();

  for (const m of MOUVEMENTS_PILATES) {
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

async function creerSeance(titre, niveau, dureeMin, sousEnsemble, idParNom) {
  const existe = await prisma.seance.findFirst({ where: { titre } });
  if (existe) {
    console.log(`  "${titre}" existe déjà, ignorée.`);
    return;
  }

  await prisma.seance.create({
    data: {
      titre,
      description: `Séance Pilates au sol, ${sousEnsemble.length} mouvements pour renforcer en douceur et gagner en stabilité.`,
      genre: "FEMME",
      niveau,
      dureeMin,
      categorie: "Pilates",
      ordre: 1,
      mouvements: {
        create: sousEnsemble.map((m, idx) => ({
          mouvementId: idParNom.get(m.nom),
          ordre: idx + 1,
          series: 1,
          repetitions: m.repetitions,
        })),
      },
    },
  });
  console.log(`  "${titre}" créée avec ${sousEnsemble.length} mouvements.`);
}

async function main() {
  console.log("Création des mouvements Pilates...");
  const idParNom = await creerMouvements();
  console.log(`  ${MOUVEMENTS_PILATES.length} mouvements Pilates disponibles.`);

  console.log("Création des séances Pilates...");
  const fondamentaux = MOUVEMENTS_PILATES.slice(0, 10);
  const intense = MOUVEMENTS_PILATES.slice(10, 20);

  await creerSeance("Pilates Fondamentaux", "DEBUTANT", 40, fondamentaux, idParNom);
  await creerSeance("Pilates Intense", "INTERMEDIAIRE", 45, intense, idParNom);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
