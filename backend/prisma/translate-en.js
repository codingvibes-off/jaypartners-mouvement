// Remplit les champs *En (Mouvement, Seance) avec une traduction anglaise.
// - Mouvements importés du catalogue (import-exercises.js) : régénérés par gabarit
//   + dictionnaire (pas de traduction manuelle nécessaire, le nom est déjà en anglais).
// - Mouvements rédigés à la main (seed.js, build-pilates.js, build-univers.js) :
//   traduction manuelle ci-dessous.
// - Séances : titres générés par catégorie régénérés par gabarit ; les quelques
//   séances rédigées à la main sont traduites explicitement.
//
// Idempotent, ré-exécutable après un `prisma:seed` (association par nom/titre,
// pas par id, car les ids sont régénérés à chaque reset de la base).

const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { traduireTerme, traduireListe, CATEGORIE_LISIBLE_EN, CATEGORIE_GROUPE_EN } = require("./i18n/dictionnaire");

function chargerCatalogue() {
  const cheminFichier = path.join(__dirname, "data", "fitness_exercises_database.json");
  const brut = fs.readFileSync(cheminFichier, "utf8");
  const corrige = Buffer.from(brut, "latin1").toString("utf8");
  return JSON.parse(corrige);
}

function construireDescriptionEn(exercice) {
  const categorie = CATEGORIE_LISIBLE_EN[exercice.category] || exercice.category;
  const zone = traduireTerme(exercice.body_area.replace(/_/g, " "));
  const muscles = (exercice.primary_muscles || []).map(traduireTerme).join(", ");
  return `${categorie[0].toUpperCase()}${categorie.slice(1)} exercise (${zone}) targeting ${muscles}.`;
}

// -----------------------------
// Traductions manuelles : mouvements rédigés à la main (non issus du catalogue importé)
// -----------------------------
const TRADUCTIONS_MOUVEMENTS = {
  // seed.js
  Squat: {
    descriptionEn: "Fundamental bending-extension movement of the lower body.",
    erreursFrequentesEn: ["Knees caving in", "Rounded back", "Heels lifting off the ground"],
    regressionEn: "Box squat",
    progressionEn: "Goblet Squat",
  },
  "Pompes inclinées": {
    descriptionEn: "Accessible version of the classic push-up.",
    regressionEn: "Wall push-up",
    progressionEn: "Classic push-up",
  },
  "Hip Thrust": {
    descriptionEn: "Glute strengthening through hip extension.",
    regressionEn: "Glute Bridge",
    progressionEn: "Single Leg Hip Thrust",
  },
  "Dead Bug": {
    descriptionEn: "Core bracing and control exercise.",
  },
  "90/90": {
    descriptionEn: "Hip mobility in internal/external rotation.",
    regressionEn: "90/90 with support",
    progressionEn: "Advanced 90/90",
  },
  "Cat Cow": {
    descriptionEn: "Gentle mobilization of the spine.",
  },

  // Renommé manuellement en base pendant la session (à l'origine "Band Biceps Curl",
  // un mouvement importé du catalogue) : on force nomEn puisqu'il ne matche plus
  // exercice.name dans le JSON source.
  "Curl Biceps Élastique": {
    nomEn: "Band Biceps Curl",
    descriptionEn: "Resistance band exercise (arms) targeting biceps.",
  },

  // build-bas-du-corps-femme.js
  "Squat Élastique": { nomEn: "Band Squat" },
  "Squat Jump Élastique": { nomEn: "Band Squat Jump" },
  "Squat Jump Élastique (Option)": { nomEn: "Band Squat Jump (Option)" },
  "Squat Jump Élastique (Variante)": { nomEn: "Band Squat Jump (Variant)" },
  "Squat Déplacé Élastique": { nomEn: "Band Lateral Squat Walk" },
  "Fentes Pulls Élastique": { nomEn: "Band Pulse Lunges" },
  "Fentes Alternées Élastique": { nomEn: "Band Alternating Lunges" },
  "Fentes Unilatérales Haltères": { nomEn: "Dumbbell Single-Leg Lunges" },
  "Fentes Arrière Haltères": { nomEn: "Dumbbell Reverse Lunges" },
  "RDL Haltères": { nomEn: "Dumbbell Romanian Deadlift" },
  "Squat Pulls Haltères": { nomEn: "Dumbbell Pulse Squat" },
  "Montée de Genoux Haltères": { nomEn: "Dumbbell High Knees" },
  "Abdos Haltères": { nomEn: "Dumbbell Core Work" },
  "Burpees Haltères": { nomEn: "Dumbbell Burpees" },
  "Rowing Haltères": { nomEn: "Dumbbell Row" },

  // build-pilates.js (noms déjà en anglais)
  "The Hundred": {
    descriptionEn:
      "Iconic Pilates warm-up movement: pumping arms while holding a full body brace.",
    erreursFrequentesEn: ["Neck straining forward", "Lower back lifting off the mat"],
    regressionEn: "Keep knees bent at 90°",
    progressionEn: "Legs straight at 45°",
  },
  "Roll Up": {
    descriptionEn: "Vertebra-by-vertebra roll-up of the torso, from lying down to seated.",
    erreursFrequentesEn: ["Using momentum instead of rolling through the spine", "Holding the breath"],
    regressionEn: "Knees slightly bent",
    progressionEn: "Roll Up with arms extended overhead",
  },
  "Single Leg Circle": {
    descriptionEn: "Controlled circles with one straight leg in the air, pelvis stable.",
    erreursFrequentesEn: ["Pelvis tilting with the leg"],
    regressionEn: "Smaller circles",
    progressionEn: "Wider circles, opposite leg extended on the mat",
  },
  "Single Leg Stretch": {
    descriptionEn: "Alternating leg pulls toward the chest, torso curled up.",
    erreursFrequentesEn: ["Head resting on the mat instead of curled up", "Pace too fast"],
    progressionEn: "Extended leg held lower",
  },
  "Double Leg Stretch": {
    descriptionEn: "Simultaneous extension of arms and legs, then return to curled position.",
    erreursFrequentesEn: ["Arching the lower back on the extension"],
    regressionEn: "Reduced leg range of motion",
    progressionEn: "Legs extended lower and slower",
  },
  "Spine Stretch Forward": {
    descriptionEn: "Seated forward fold, spine rounding toward the feet.",
    erreursFrequentesEn: ["Back staying flat instead of rounding"],
  },
  "Shoulder Bridge": {
    descriptionEn: "Dynamic Pilates bridge: pelvic tilt followed by single-leg extension.",
    erreursFrequentesEn: ["Pushing through the neck instead of the feet"],
    regressionEn: "Hold a static bridge",
    progressionEn: "Leg extension and flexion at the top of the bridge",
  },
  Swimming: {
    descriptionEn: "Alternating opposite arm/leg beats in back extension, swimming-style.",
    erreursFrequentesEn: ["Neck hyperextension"],
  },
  Saw: {
    descriptionEn: "Seated torso rotation with forward flexion, 'sawing' toward the opposite foot.",
    erreursFrequentesEn: ["Pelvis rotating along with the torso"],
  },
  "Rolling Like a Ball": {
    descriptionEn: "Controlled rolling on the spine in a ball shape, balancing on the sacrum.",
    erreursFrequentesEn: ["Rolling onto the neck instead of the upper back", "Losing the curled position"],
  },
  "Roll Over": {
    descriptionEn: "Straight legs swing overhead then lower back down vertebra by vertebra.",
    erreursFrequentesEn: ["Jerky motion instead of a controlled movement", "Too much weight on the neck"],
  },
  "Open Leg Rocker": {
    descriptionEn: "Balance on the sacrum with straight legs in a V, rocking backward and forward.",
    erreursFrequentesEn: ["Rolling onto the neck"],
    regressionEn: "Knees slightly bent",
  },
  Corkscrew: {
    descriptionEn: "Large circles with straight legs in the air, pelvis stable, corkscrew-style.",
    erreursFrequentesEn: ["Pelvis lifting and rocking"],
  },
  "Swan Dive": {
    descriptionEn: "Dynamic arched back extension, swan-dive style.",
    erreursFrequentesEn: ["Compressing the lower back instead of lengthening the whole spine"],
  },
  "Single Leg Kick": {
    descriptionEn: "Supported on the forearms, quick alternating knee bends.",
    erreursFrequentesEn: ["Pelvis tilting with each bend"],
  },
  "Double Leg Kick": {
    descriptionEn: "Bending both knees then fully extending the body into an arch.",
    erreursFrequentesEn: ["Shoulders creeping up toward the ears"],
  },
  "Neck Pull": {
    descriptionEn: "Advanced Roll Up, hands behind the neck, spine curling and uncurling.",
    erreursFrequentesEn: ["Pulling on the neck with the hands"],
  },
  "Side Kick Series": {
    descriptionEn: "Series of leg kicks in a side-lying position, core held braced.",
    erreursFrequentesEn: ["Torso tipping backward during the kicks"],
  },
  Teaser: {
    descriptionEn: "V-balance on the pelvis, arms and legs extended, Pilates' signature movement.",
    erreursFrequentesEn: ["Using arm momentum instead of a controlled torso curl"],
    regressionEn: "Bent knees for an assisted Teaser",
  },
  Seal: {
    descriptionEn: "Ball-shaped roll, seal-style, feet clapping together at the top of the balance.",
    erreursFrequentesEn: ["Losing balance from insufficient core bracing"],
  },

  // build-univers.js — Hyrox
  "Course Hyrox (1km)": {
    nomEn: "Hyrox Run (1km)",
    descriptionEn: "Running segment between each station, a steady pace to hold throughout the race.",
    erreursFrequentesEn: ["Starting too fast on the first kilometer", "Stride collapsing toward the end of the race"],
  },
  SkiErg: {
    descriptionEn: "Alternating vertical pull on the ski ergometer, core braced and hips driving the pull.",
    erreursFrequentesEn: ["Pulling with the arms only without engaging the hips"],
  },
  "Sled Push": {
    descriptionEn: "Pushing a loaded sled, low stance and powerful leg drive.",
    erreursFrequentesEn: ["Rounded back instead of staying braced", "Small, inefficient steps"],
  },
  "Sled Pull": {
    descriptionEn: "Pulling a sled by rope, explosive arm-leg pull while walking backward.",
    erreursFrequentesEn: ["Pulling with the arms only without stepping back with the legs"],
  },
  "Burpee Broad Jump": {
    descriptionEn: "Burpee chained into a broad jump, combining power and cardio.",
    erreursFrequentesEn: ["Landing the jump with locked knees", "Chest not touching the ground"],
    regressionEn: "Step back instead of jumping to a chest-to-ground position",
  },
  "Rowing (Row Machine)": {
    descriptionEn: "Sustained-intensity rowing, leg-back-arm sequence.",
    erreursFrequentesEn: ["Pulling with the arms before driving with the legs"],
  },
  "Farmers Carry": {
    descriptionEn: "Carrying heavy loads at a brisk walk, challenging grip and core bracing.",
    erreursFrequentesEn: ["Shoulders creeping up toward the ears", "Back rounding"],
  },
  "Sandbag Lunges": {
    descriptionEn: "Walking lunges with a sandbag on the shoulders.",
    erreursFrequentesEn: ["Front knee tracking far past the toes", "Torso leaning too far forward"],
    regressionEn: "No additional load",
  },
  "Wall Balls": {
    descriptionEn: "Squat followed by a medicine ball throw at a target, cardio and legs.",
    erreursFrequentesEn: ["Squat not deep enough", "Not using leg drive to power the throw"],
  },
};

// -----------------------------
// Traductions manuelles : séances rédigées à la main
// -----------------------------
const TRADUCTIONS_SEANCES = {
  "Force Fondations - Homme": {
    titreEn: "Foundations Strength - Men",
    descriptionEn: "Full-body strength session to build solid foundations.",
  },
  "Fessiers & Stabilité - Femme": {
    titreEn: "Glutes & Stability - Women",
    descriptionEn: "Targeted glutes and core session to strengthen the lower body.",
  },
  "Réveil Articulaire": {
    titreEn: "Joint Wake-Up",
    descriptionEn: "Gentle mobility routine accessible to everyone, ideal in the morning.",
  },
  "Bas du Corps Élastique 1": {
    titreEn: "Lower Body Resistance Band 1",
    descriptionEn: "Lower body resistance band program with 5 movements.",
  },
  "Bas du Corps Élastique 2": {
    titreEn: "Lower Body Resistance Band 2",
    descriptionEn: "Lower body resistance band program with 5 movements.",
  },
  "Bas du Corps Élastique 3": {
    titreEn: "Lower Body Resistance Band 3",
    descriptionEn: "Lower body resistance band program with 6 movements.",
  },
  "Bas du Corps Élastique 4": {
    titreEn: "Lower Body Resistance Band 4",
    descriptionEn: "Lower body resistance band program with 2 movements.",
  },
};

// Titres de séances générées par gabarit (build-seances.js / build-univers.js Athlétisme).
const BASE_TITRES_EN = {
  "Musculation": "Strength Training",
  "CrossFit": "CrossFit",
  "Fitness Général": "General Fitness",
  "Cardio Intense": "Intense Cardio",
  "Kettlebell Complet": "Full Kettlebell",
  "Mobilité Totale": "Total Mobility",
  "Explosivité & Pliométrie": "Explosiveness & Plyometrics",
  "Bandes Élastiques Full Body": "Resistance Bands Full Body",
  "Athlétisme": "Athletics",
};

function traduireTitreGenere(titre) {
  const bases = Object.keys(BASE_TITRES_EN).sort((a, b) => b.length - a.length);
  for (const base of bases) {
    if (titre === base) return { base, titreEn: BASE_TITRES_EN[base] };
    if (titre.startsWith(base + " ")) {
      return { base, titreEn: BASE_TITRES_EN[base] + titre.slice(base.length) };
    }
  }
  return null;
}

async function traduireMouvements() {
  const catalogue = chargerCatalogue();
  const exercicesParNom = new Map(catalogue.exercises.map((e) => [e.name, e]));

  const mouvements = await prisma.mouvement.findMany();
  let miseAJour = 0;

  for (const m of mouvements) {
    let data;

    const manuel = TRADUCTIONS_MOUVEMENTS[m.nom];
    const exercice = exercicesParNom.get(m.nom);

    if (manuel) {
      data = {
        nomEn: manuel.nomEn || m.nom,
        descriptionEn: manuel.descriptionEn || null,
        muscleprincipalEn: traduireTerme(m.muscleprincipal),
        musclesSecondairesEn: traduireListe(m.musclesSecondaires),
        materielEn: traduireListe(m.materiel),
        erreursFrequentesEn: manuel.erreursFrequentesEn || traduireListe(m.erreursFrequentes),
        regressionEn: manuel.regressionEn || null,
        progressionEn: manuel.progressionEn || null,
      };
    } else if (exercice) {
      data = {
        nomEn: exercice.name,
        descriptionEn: construireDescriptionEn(exercice),
        muscleprincipalEn: traduireTerme(m.muscleprincipal),
        musclesSecondairesEn: traduireListe(m.musclesSecondaires),
        materielEn: traduireListe(m.materiel),
        erreursFrequentesEn: traduireListe(m.erreursFrequentes),
        regressionEn: null,
        progressionEn: null,
      };
    } else {
      console.warn(`  ⚠ Pas de traduction trouvée pour le mouvement "${m.nom}", ignoré.`);
      continue;
    }

    await prisma.mouvement.update({ where: { id: m.id }, data });
    miseAJour++;
  }

  console.log(`  ${miseAJour}/${mouvements.length} mouvements traduits.`);
}

async function traduireSeances() {
  const seances = await prisma.seance.findMany({
    include: { _count: { select: { mouvements: true } } },
  });
  let miseAJour = 0;

  for (const s of seances) {
    const n = s._count.mouvements;
    let titreEn;
    let descriptionEn;

    const manuel = TRADUCTIONS_SEANCES[s.titre];
    const genere = traduireTitreGenere(s.titre);

    if (manuel) {
      titreEn = manuel.titreEn;
      descriptionEn = manuel.descriptionEn;
    } else if (s.categorie === "Pilates") {
      titreEn = s.titre === "Pilates Intense" ? "Pilates Intense" : "Pilates Fundamentals";
      descriptionEn = `Mat Pilates session, ${n} movements to gently strengthen and improve stability.`;
    } else if (s.categorie === "Hyrox") {
      titreEn = s.titre; // déjà en anglais
      descriptionEn = `Simulation of a Hyrox race: ${n} functional stations interspersed with running.`;
    } else if (genere) {
      titreEn = genere.titreEn;
      descriptionEn =
        genere.base === "Athlétisme"
          ? `Athletics program featuring ${n} running and general fitness movements.`
          : `${BASE_TITRES_EN[genere.base]} program with ${n} varied movements.`;
    } else {
      console.warn(`  ⚠ Pas de traduction trouvée pour la séance "${s.titre}", ignorée.`);
      continue;
    }

    const categorieEn = CATEGORIE_GROUPE_EN[s.categorie] || s.categorie || null;

    await prisma.seance.update({
      where: { id: s.id },
      data: { titreEn, descriptionEn, categorieEn },
    });
    miseAJour++;
  }

  console.log(`  ${miseAJour}/${seances.length} séances traduites.`);
}

async function main() {
  console.log("Traduction des mouvements...");
  await traduireMouvements();

  console.log("Traduction des séances...");
  await traduireSeances();
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
