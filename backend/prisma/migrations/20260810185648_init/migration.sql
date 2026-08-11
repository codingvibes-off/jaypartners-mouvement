-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('HOMME', 'FEMME', 'MIXTE');

-- CreateEnum
CREATE TYPE "Niveau" AS ENUM ('DEBUTANT', 'INTERMEDIAIRE', 'AVANCE');

-- CreateEnum
CREATE TYPE "RoleUtilisateur" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "role" "RoleUtilisateur" NOT NULL DEFAULT 'USER',
    "xp" INTEGER NOT NULL DEFAULT 0,
    "streak" INTEGER NOT NULL DEFAULT 0,
    "dernierPassage" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seance" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "genre" "Genre" NOT NULL DEFAULT 'MIXTE',
    "niveau" "Niveau" NOT NULL DEFAULT 'DEBUTANT',
    "dureeMin" INTEGER NOT NULL DEFAULT 20,
    "imageUrl" TEXT,
    "categorie" TEXT,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Seance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mouvement" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "videoUrl" TEXT NOT NULL DEFAULT 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
    "muscleprincipal" TEXT,
    "musclesSecondaires" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "niveau" "Niveau" NOT NULL DEFAULT 'DEBUTANT',
    "materiel" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "erreursFrequentes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "regression" TEXT,
    "progression" TEXT,
    "dureeConseillee" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mouvement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeanceMouvement" (
    "id" TEXT NOT NULL,
    "seanceId" TEXT NOT NULL,
    "mouvementId" TEXT NOT NULL,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "series" INTEGER,
    "repetitions" TEXT,

    CONSTRAINT "SeanceMouvement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeanceHistorique" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "seanceId" TEXT NOT NULL,
    "terminee" BOOLEAN NOT NULL DEFAULT false,
    "xpGagne" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeanceHistorique_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "scoreMobilite" INTEGER NOT NULL DEFAULT 0,
    "scoreForce" INTEGER NOT NULL DEFAULT 0,
    "scorePosture" INTEGER NOT NULL DEFAULT 0,
    "poids" DOUBLE PRECISION,
    "tourDeTaille" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "test" TEXT NOT NULL,
    "resultat" TEXT NOT NULL,
    "recommandation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favori" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mouvementId" TEXT NOT NULL,

    CONSTRAINT "Favori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "icone" TEXT,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBadge" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "badgeId" TEXT NOT NULL,
    "obtenuLe" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserBadge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SeanceMouvement_seanceId_mouvementId_key" ON "SeanceMouvement"("seanceId", "mouvementId");

-- CreateIndex
CREATE UNIQUE INDEX "Favori_userId_mouvementId_key" ON "Favori"("userId", "mouvementId");

-- CreateIndex
CREATE UNIQUE INDEX "UserBadge_userId_badgeId_key" ON "UserBadge"("userId", "badgeId");

-- AddForeignKey
ALTER TABLE "SeanceMouvement" ADD CONSTRAINT "SeanceMouvement_seanceId_fkey" FOREIGN KEY ("seanceId") REFERENCES "Seance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeanceMouvement" ADD CONSTRAINT "SeanceMouvement_mouvementId_fkey" FOREIGN KEY ("mouvementId") REFERENCES "Mouvement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeanceHistorique" ADD CONSTRAINT "SeanceHistorique_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeanceHistorique" ADD CONSTRAINT "SeanceHistorique_seanceId_fkey" FOREIGN KEY ("seanceId") REFERENCES "Seance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_mouvementId_fkey" FOREIGN KEY ("mouvementId") REFERENCES "Mouvement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadge" ADD CONSTRAINT "UserBadge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadge" ADD CONSTRAINT "UserBadge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;
