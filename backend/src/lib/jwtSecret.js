// Secret de signature des JWT (sessions et reçus d'achat). Aucun secret par défaut : avec une
// valeur de secours connue, n'importe qui pourrait fabriquer des jetons valides (y compris admin).
// Générer avec : openssl rand -base64 48
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET || JWT_SECRET.length < 32) {
  throw new Error("JWT_SECRET doit être défini dans .env (32 caractères minimum)");
}

const OPTIONS_VERIFICATION = { algorithms: ["HS256"] };

module.exports = { JWT_SECRET, OPTIONS_VERIFICATION };
