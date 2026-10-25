const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");
const { JWT_SECRET, OPTIONS_VERIFICATION } = require("../lib/jwtSecret");

function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Non authentifié" });
  }
  const token = header.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET, OPTIONS_VERIFICATION);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Session invalide ou expirée" });
  }
}

// Le rôle est relu en base plutôt que lu dans le jeton : un admin rétrogradé perd l'accès
// immédiatement, sans attendre l'expiration de sa session.
async function requireAdmin(req, res, next) {
  const user = req.user?.id
    ? await prisma.user.findUnique({ where: { id: req.user.id }, select: { role: true } })
    : null;
  if (user?.role !== "ADMIN") {
    return res.status(403).json({ message: "Accès réservé aux administrateurs" });
  }
  next();
}

// Peuple req.user si un jeton valide est fourni, mais ne bloque jamais la requête —
// utile pour les routes publiques dont le contenu varie selon que l'utilisateur est
// connecté (ex: programmes payants, cf. GET /api/seances/:id).
function auteurOptionnel(req, res, next) {
  const header = req.headers.authorization;
  if (header && header.startsWith("Bearer ")) {
    try {
      req.user = jwt.verify(header.split(" ")[1], JWT_SECRET, OPTIONS_VERIFICATION);
    } catch (err) {
      // Jeton invalide/expiré : on continue simplement sans utilisateur authentifié.
    }
  }
  next();
}

module.exports = { requireAuth, requireAdmin, auteurOptionnel };
