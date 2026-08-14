const express = require("express");
const prisma = require("../lib/prisma");
const { requireAuth, requireAdmin } = require("../middleware/auth");
const cloudflareStream = require("../lib/cloudflareStream");

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

// POST /api/mouvements/:id/video-upload-url (admin) - démarre un upload direct Cloudflare Stream
router.post("/:id/video-upload-url", requireAuth, requireAdmin, async (req, res) => {
  const mouvement = await prisma.mouvement.findUnique({ where: { id: req.params.id } });
  if (!mouvement) return res.status(404).json({ message: "Mouvement introuvable" });

  try {
    const { uploadURL, uid } = await cloudflareStream.creerUploadDirect();
    await prisma.mouvement.update({
      where: { id: mouvement.id },
      data: { cfStreamUid: uid, cfStreamStatus: "uploading" },
    });
    res.json({ uploadURL, uid });
  } catch (err) {
    res.status(502).json({ message: err.message });
  }
});

// GET /api/mouvements/:id/video-status (admin) - interroge le statut d'encodage Cloudflare
router.get("/:id/video-status", requireAuth, requireAdmin, async (req, res) => {
  const mouvement = await prisma.mouvement.findUnique({ where: { id: req.params.id } });
  if (!mouvement) return res.status(404).json({ message: "Mouvement introuvable" });
  if (!mouvement.cfStreamUid) {
    return res.status(400).json({ message: "Aucun upload en cours pour ce mouvement" });
  }

  try {
    const { statut } = await cloudflareStream.obtenirStatut(mouvement.cfStreamUid);
    await prisma.mouvement.update({
      where: { id: mouvement.id },
      data: { cfStreamStatus: statut },
    });
    res.json({ cfStreamStatus: statut });
  } catch (err) {
    res.status(502).json({ message: err.message });
  }
});

module.exports = router;
