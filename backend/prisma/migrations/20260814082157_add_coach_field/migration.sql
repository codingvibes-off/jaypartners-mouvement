-- CreateEnum
CREATE TYPE "Coach" AS ENUM ('FEMME', 'HOMME', 'DUO');

-- AlterTable
ALTER TABLE "Seance" ADD COLUMN     "coach" "Coach" NOT NULL DEFAULT 'DUO';
