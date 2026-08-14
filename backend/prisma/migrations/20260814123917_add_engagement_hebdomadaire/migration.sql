-- CreateEnum
CREATE TYPE "JourSemaine" AS ENUM ('LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE');

-- CreateTable
CREATE TABLE "EngagementHebdomadaire" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "seanceId" TEXT NOT NULL,
    "jour" "JourSemaine" NOT NULL,
    "dureeSemaines" INTEGER NOT NULL DEFAULT 4,
    "dateDebut" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EngagementHebdomadaire_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EngagementHebdomadaire_userId_seanceId_key" ON "EngagementHebdomadaire"("userId", "seanceId");

-- AddForeignKey
ALTER TABLE "EngagementHebdomadaire" ADD CONSTRAINT "EngagementHebdomadaire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EngagementHebdomadaire" ADD CONSTRAINT "EngagementHebdomadaire_seanceId_fkey" FOREIGN KEY ("seanceId") REFERENCES "Seance"("id") ON DELETE CASCADE ON UPDATE CASCADE;
