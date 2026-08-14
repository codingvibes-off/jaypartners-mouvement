// Attribue un coach (FEMME / HOMME / DUO) à chaque séance.
//
// Il n'existe aujourd'hui aucune donnée réelle distinguant les séances par coach
// (le site n'a qu'une seule coach documentée, Jay — voir la page About). Ce script
// pose donc une répartition PLACEHOLDER, déterministe et réversible à tout moment
// (édition directe en base ou future interface d'admin) :
//   - Toutes les séances de catégorie "Pilates" -> FEMME (cohérent avec l'accueil
//     féminin déjà mis en avant sur le Pilates).
//   - Les séances "Bas du Corps Élastique N" (build-bas-du-corps-femme.js) -> FEMME :
//     donnée RÉELLE fournie par la coach (colonne "COACH" de sa maquette), pas un
//     placeholder — ne doit jamais être réassignée par le tourniquet.
//   - Le reste réparti en tourniquet FEMME / HOMME / DUO, par ordre alphabétique de
//     titre (reproductible, pas aléatoire).
//
// Idempotent et associé par `titre` (pas par `id`, qui change à chaque reseed).

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const TOURNIQUET = ["FEMME", "HOMME", "DUO"];

function estCoachFemmeCure(s) {
  return s.categorie === "Pilates" || s.titre.startsWith("Bas du Corps Élastique");
}

async function main() {
  const seances = await prisma.seance.findMany({
    select: { id: true, titre: true, categorie: true },
    orderBy: { titre: "asc" },
  });

  let index = 0;
  let miseAJour = 0;

  for (const s of seances) {
    const coach = estCoachFemmeCure(s) ? "FEMME" : TOURNIQUET[index++ % TOURNIQUET.length];
    await prisma.seance.update({ where: { id: s.id }, data: { coach } });
    miseAJour++;
  }

  console.log(`  ${miseAJour}/${seances.length} séances associées à un coach.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
