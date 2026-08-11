const express = require("express");
const prisma = require("../lib/prisma");

const router = express.Router();

// GET /api/mouvements?niveau=DEBUTANT&muscle=Fessiers&q=squat
router.get("/", async (req, res) => {
  const { niveau, muscle, q } = req.query;

  const where = {
    AND: [
      niveau ? { niveau } : {},
      muscle ? { muscleprincipal: { equals: muscle, mode: "insensitive" } } : {},
      q ? { nom: { contains: q, mode: "insensitive" } } : {},
    ],
  };

  const mouvements = await prisma.mouvement.findMany({ where, orderBy: { nom: "asc" } });
  res.json(mouvements);
});

router.get("/:id", async (req, res) => {
  const mouvement = await prisma.mouvement.findUnique({ where: { id: req.params.id } });
  if (!mouvement) return res.status(404).json({ message: "Mouvement introuvable" });
  res.json(mouvement);
});

module.exports = router;
