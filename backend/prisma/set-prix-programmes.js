// Tarification des programmes PDF (Programmes) : dans chaque univers, la première séance
// (même ordre d'affichage que la page Programmes : `ordre asc` puis `titre asc` pour
// départager) reste gratuite (prixCentimes: null) ; toutes les autres deviennent payantes
// à l'unité. Prix PLACEHOLDER (9,99€) — à ajuster séance par séance une fois les vrais
// tarifs communiqués.
//
// Idempotent, associé par `categorie` + `titre` (jamais par id, qui change à chaque reseed).

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const CATEGORIES_PROGRAMMES = ["Mobilité", "Renforcement", "Athlétisme", "Hyrox", "Plyométrie"];
const PRIX_PLACEHOLDER_CENTIMES = 999;

async function main() {
  let miseAJour = 0;

  for (const categorie of CATEGORIES_PROGRAMMES) {
    const seances = await prisma.seance.findMany({
      where: { categorie },
      orderBy: [{ ordre: "asc" }, { titre: "asc" }],
    });

    if (seances.length === 0) {
      console.log(`  ⚠ Aucune séance trouvée pour la catégorie "${categorie}", ignorée.`);
      continue;
    }

    for (let i = 0; i < seances.length; i++) {
      const s = seances[i];
      const prixCentimes = i === 0 ? null : PRIX_PLACEHOLDER_CENTIMES;
      if (s.prixCentimes !== prixCentimes) {
        await prisma.seance.update({ where: { id: s.id }, data: { prixCentimes } });
        miseAJour++;
      }
    }

    console.log(`  ${categorie} : "${seances[0].titre}" gratuite, ${seances.length - 1} séance(s) à ${(PRIX_PLACEHOLDER_CENTIMES / 100).toFixed(2)}€.`);
  }

  console.log(`  ${miseAJour} séance(s) mise(s) à jour.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
