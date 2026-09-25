const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Non authentifié" });
  }
  const token = header.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "dev_secret_change_me");
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Session invalide ou expirée" });
  }
}

function requireAdmin(req, res, next) {
  if (req.user?.role !== "ADMIN") {
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
      req.user = jwt.verify(header.split(" ")[1], process.env.JWT_SECRET || "dev_secret_change_me");
    } catch (err) {
      // Jeton invalide/expiré : on continue simplement sans utilisateur authentifié.
    }
  }
  next();
}

module.exports = { requireAuth, requireAdmin, auteurOptionnel };
