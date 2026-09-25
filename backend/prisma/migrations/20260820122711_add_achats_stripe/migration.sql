-- CreateEnum
CREATE TYPE "StatutAchat" AS ENUM ('EN_ATTENTE', 'PAYE', 'ECHOUE');

-- AlterTable
ALTER TABLE "Seance" ADD COLUMN "prixCentimes" INTEGER;

-- CreateTable
CREATE TABLE "Achat" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "seanceId" TEXT NOT NULL,
    "montantCentimes" INTEGER NOT NULL,
    "devise" TEXT NOT NULL DEFAULT 'eur',
    "statut" "StatutAchat" NOT NULL DEFAULT 'EN_ATTENTE',
    "stripeSessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Achat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Achat_stripeSessionId_key" ON "Achat"("stripeSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Achat_userId_seanceId_key" ON "Achat"("userId", "seanceId");

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_seanceId_fkey" FOREIGN KEY ("seanceId") REFERENCES "Seance"("id") ON DELETE CASCADE ON UPDATE CASCADE;
