const express = require("express");
const prisma = require("../lib/prisma");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

const JOURS_VALIDES = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"];

// POST /api/engagements -> prend (ou met à jour) l'engagement hebdomadaire de l'utilisateur pour une séance
router.post("/", requireAuth, async (req, res) => {
  const { seanceId, jour } = req.body;
  if (!seanceId) return res.status(400).json({ message: "seanceId requis" });
  if (!JOURS_VALIDES.includes(jour)) return res.status(400).json({ message: "jour invalide" });

  const seance = await prisma.seance.findUnique({ where: { id: seanceId } });
  if (!seance) return res.status(404).json({ message: "Séance introuvable" });

  const engagement = await prisma.engagementHebdomadaire.upsert({
    where: { userId_seanceId: { userId: req.user.id, seanceId } },
    create: { userId: req.user.id, seanceId, jour },
    update: { jour, dateDebut: new Date() },
  });

  res.status(201).json(engagement);
});

// GET /api/engagements/:seanceId -> engagement de l'utilisateur connecté pour cette séance (ou null)
router.get("/:seanceId", requireAuth, async (req, res) => {
  const engagement = await prisma.engagementHebdomadaire.findUnique({
    where: { userId_seanceId: { userId: req.user.id, seanceId: req.params.seanceId } },
  });
  res.json(engagement);
});

// DELETE /api/engagements/:seanceId -> annule l'engagement de l'utilisateur pour cette séance
router.delete("/:seanceId", requireAuth, async (req, res) => {
  await prisma.engagementHebdomadaire
    .delete({
      where: { userId_seanceId: { userId: req.user.id, seanceId: req.params.seanceId } },
    })
    .catch(() => null);

  res.status(204).send();
});

module.exports = router;
