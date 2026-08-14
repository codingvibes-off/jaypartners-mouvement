-- AlterTable
ALTER TABLE "Mouvement" ADD COLUMN     "descriptionEn" TEXT,
ADD COLUMN     "erreursFrequentesEn" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "materielEn" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "muscleprincipalEn" TEXT,
ADD COLUMN     "musclesSecondairesEn" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "nomEn" TEXT,
ADD COLUMN     "progressionEn" TEXT,
ADD COLUMN     "regressionEn" TEXT;

-- AlterTable
ALTER TABLE "Seance" ADD COLUMN     "descriptionEn" TEXT,
ADD COLUMN     "titreEn" TEXT;
