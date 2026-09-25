const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "dev_secret_change_me";

// Jeton d'accès à un programme payant, indépendant d'un compte utilisateur — permet à un
// acheteur invité (sans connexion) de débloquer sa séance simplement en conservant ce jeton
// (stocké côté client). Longue durée : c'est un reçu d'achat, pas une session de connexion.
function signerJetonProgramme(seanceId) {
  return jwt.sign({ seanceId, but: "programme" }, SECRET, { expiresIn: "3650d" });
}

function verifierJetonProgramme(jeton, seanceId) {
  if (!jeton) return false;
  try {
    const payload = jwt.verify(jeton, SECRET);
    return payload.but === "programme" && payload.seanceId === seanceId;
  } catch (err) {
    return false;
  }
}

module.exports = { signerJetonProgramme, verifierJetonProgramme };
