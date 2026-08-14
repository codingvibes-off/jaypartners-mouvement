// Dictionnaire FR -> EN pour le vocabulaire fermé du catalogue (zones du corps,
// muscles, matériel, catégories). Permet de régénérer l'anglais sans traduire
// chaque mouvement importé un par un : la plupart des mouvements du catalogue
// sont construits par gabarit à partir de ce vocabulaire (voir import-exercises.js).

const TERMES = {
  // zones du corps / body_area
  jambes: "legs",
  chaine_posterieure: "posterior chain",
  full_body: "full body",
  fessiers: "glutes",
  mollets: "calves",
  pectoraux: "chest",
  dos: "back",
  epaules: "shoulders",
  "épaules": "shoulders",
  bras: "arms",
  avant_bras: "forearms",
  "avant-bras": "forearms",
  abdominaux: "abs",
  cardio: "cardio",
  mobilite: "mobility",
  "mobilité": "mobility",
  plyometrie: "plyometrics",
  "plyométrie": "plyometrics",

  // muscles
  quadriceps: "quadriceps",
  "ischio-jambiers": "hamstrings",
  adducteurs: "adductors",
  erecteurs_du_rachis: "spinal erectors",
  "trapèzes": "traps",
  trapezes: "traps",
  gastrocnemius: "gastrocnemius",
  soleus: "soleus",
  triceps: "triceps",
  deltoides_anterieurs: "front delts",
  pectoraux_superieurs: "upper chest",
  grand_dorsal: "lats",
  dorsaux: "lats",
  biceps: "biceps",
  grand_rond: "teres major",
  rhomboides: "rhomboids",
  deltoides_posterieurs: "rear delts",
  deltoides: "delts",
  deltoides_lateraux: "side delts",
  brachial: "brachialis",
  brachio_radial: "brachioradialis",
  flexeurs_des_poignets: "wrist flexors",
  extenseurs_des_poignets: "wrist extensors",
  grand_droit: "rectus abdominis",
  flecheurs_de_hanche: "hip flexors",
  transverse: "transverse abdominis",
  obliques: "obliques",
  grand_fessier: "gluteus maximus",
  moyen_fessier: "gluteus medius",
  petit_fessier: "gluteus minimus",
  rachis: "spine",
  "colonne vertébrale": "spine",
  hanches: "hips",
  chevilles: "ankles",
  cheville: "ankle",
  rachis_thoracique: "thoracic spine",
  "sangle abdominale": "core",

  // matériel / equipment
  barbell: "barbell",
  dumbbell: "dumbbell",
  bodyweight: "bodyweight",
  machine: "machine",
  cable: "cable",
  ab_wheel: "ab wheel",
  kettlebell: "kettlebell",
  kettlebells: "kettlebells",
  "haltère": "dumbbell",
  "haltères": "dumbbells",
  "élastique": "resistance band",
  medicine_ball: "medicine ball",
  "medecine ball": "medicine ball",
  box: "box",
  rope: "rope",
  corde: "rope",
  jump_rope: "jump rope",
  sandbag: "sandbag",
  "sac de sable": "sandbag",
  treadmill: "treadmill",
  bike: "bike",
  air_bike: "air bike",
  rower: "rower",
  rameur: "rower",
  ski_erg: "ski erg",
  skierg: "ski erg",
  stair_machine: "stair machine",
  elliptical: "elliptical",
  pool: "pool",
  band: "resistance band",
  banc: "bench",
  tapis: "mat",
  "traîneau": "sled",
  disques: "plates",
  aucun: "none",

  // catégories (vocabulaire de import-exercises.js)
  musculation: "strength training",
  crossfit: "crossfit",
  fitness_general: "general fitness",
  bandes_elastiques: "resistance bands",
};

function traduireTerme(fr) {
  if (!fr) return fr;
  const trouve = TERMES[fr.toLowerCase().trim()];
  if (!trouve) return fr;
  // Respecte la casse d'origine (majuscule initiale) pour un affichage propre.
  if (/^[A-ZÀ-Ý]/.test(fr)) {
    return trouve.charAt(0).toUpperCase() + trouve.slice(1);
  }
  return trouve;
}

function traduireListe(liste) {
  return (liste || []).map(traduireTerme);
}

// Libellés de catégorie utilisés dans import-exercises.js (CATEGORIE_LISIBLE),
// pour reconstruire la description anglaise avec le même gabarit.
const CATEGORIE_LISIBLE_EN = {
  musculation: "strength training",
  crossfit: "CrossFit",
  fitness_general: "general fitness",
  cardio: "cardio",
  kettlebell: "kettlebell",
  mobilite: "mobility",
  plyometrie: "plyometrics",
  bandes_elastiques: "resistance bands",
};

// Titres de séances générées par catégorie (TITRE_PAR_CATEGORIE dans build-seances.js).
const TITRE_PAR_CATEGORIE_EN = {
  musculation: "Strength Training",
  crossfit: "CrossFit",
  fitness_general: "General Fitness",
  cardio: "Intense Cardio",
  kettlebell: "Full Kettlebell",
  mobilite: "Total Mobility",
  plyometrie: "Explosiveness & Plyometrics",
  bandes_elastiques: "Resistance Bands Full Body",
};

// Catégorie "groupe" affichée en rangée sur la page d'accueil
// (CATEGORIE_LISIBLE_PAR_CATEGORIE dans build-seances.js + valeurs Pilates/Hyrox/Athlétisme).
const CATEGORIE_GROUPE_EN = {
  Renforcement: "Strength",
  CrossFit: "CrossFit",
  "Fitness Général": "General Fitness",
  Cardio: "Cardio",
  Kettlebell: "Kettlebell",
  "Mobilité": "Mobility",
  "Plyométrie": "Plyometrics",
  "Bandes Élastiques": "Resistance Bands",
  Pilates: "Pilates",
  Hyrox: "Hyrox",
  "Athlétisme": "Athletics",
};

module.exports = {
  traduireTerme,
  traduireListe,
  CATEGORIE_LISIBLE_EN,
  TITRE_PAR_CATEGORIE_EN,
  CATEGORIE_GROUPE_EN,
};
