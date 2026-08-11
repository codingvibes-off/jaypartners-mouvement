const express = require("express");
const prisma = require("../lib/prisma");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

// POST /api/historique -> valide une séance pour aujourd'hui
router.post("/", requireAuth, async (req, res) => {
  const { seanceId } = req.body;
  if (!seanceId) return res.status(400).json({ message: "seanceId requis" });

  const seance = await prisma.seance.findUnique({ where: { id: seanceId } });
  if (!seance) return res.status(404).json({ message: "Séance introuvable" });

  const xpGagne = seance.dureeMin ?? 20;

  const historique = await prisma.seanceHistorique.create({
    data: { userId: req.user.id, seanceId, terminee: true, xpGagne },
  });

  const user = await prisma.user.update({
    where: { id: req.user.id },
    data: { xp: { increment: xpGagne }, dernierPassage: new Date() },
  });

  const { password, ...userSansMotDePasse } = user;
  res.status(201).json({ historique, user: userSansMotDePasse });
});

// GET /api/historique -> liste des séances validées par l'utilisateur connecté
router.get("/", requireAuth, async (req, res) => {
  const historique = await prisma.seanceHistorique.findMany({
    where: { userId: req.user.id },
    include: { seance: { select: { titre: true, categorie: true } } },
    orderBy: { createdAt: "desc" },
  });
  res.json(historique);
});

module.exports = router;
