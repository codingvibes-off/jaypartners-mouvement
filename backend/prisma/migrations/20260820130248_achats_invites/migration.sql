-- DropIndex (achat "invité" : plusieurs achats sans compte doivent pouvoir coexister)
DROP INDEX "Achat_userId_seanceId_key";

-- AlterTable (userId devient optionnel, email ajouté pour identifier les achats invités)
ALTER TABLE "Achat" ALTER COLUMN "userId" DROP NOT NULL;
ALTER TABLE "Achat" ADD COLUMN "email" TEXT;
