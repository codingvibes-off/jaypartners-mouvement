require("dotenv").config();
const express = require("express");
// Transmet les erreurs des routes async au gestionnaire d'erreurs au lieu de laisser une
// promesse rejetée faire planter tout le serveur.
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
require("./lib/jwtSecret"); // refuse de démarrer sans JWT_SECRET

const authRoutes = require("./routes/auth");
const seancesRoutes = require("./routes/seances");
const mouvementsRoutes = require("./routes/mouvements");
const historiqueRoutes = require("./routes/historique");
const engagementsRoutes = require("./routes/engagements");
const achatsRoutes = require("./routes/achats");
const { webhookAchats } = require("./routes/stripeWebhook");

const app = express();

// Railway place l'API derrière un proxy : nécessaire pour lire la vraie IP du client
// (limitation de débit) au lieu de celle du proxy.
app.set("trust proxy", 1);
// Parseur de query sans objets imbriqués : ?niveau[not]=x reste une simple chaîne.
app.set("query parser", "simple");
app.disable("x-powered-by");

app.use(helmet());

// Seul le site lui-même peut appeler l'API depuis un navigateur. FRONTEND_URL = domaine
// principal ; CORS_ORIGINS = domaines supplémentaires séparés par des virgules (ex: www).
const originesAutorisees = [process.env.FRONTEND_URL, ...(process.env.CORS_ORIGINS || "").split(",")]
  .map((o) => o && o.trim().replace(/\/$/, ""))
  .filter(Boolean)
  // jaypartners.fr et www.jaypartners.fr
  .flatMap((o) => [o, o.includes("://www.") ? o.replace("://www.", "://") : o.replace("://", "://www.")]);
if (process.env.NODE_ENV !== "production") originesAutorisees.push("http://localhost:4200");
app.use(cors({ origin: originesAutorisees }));

const limiteGlobale = rateLimit({ windowMs: 60 * 1000, limit: 300, standardHeaders: "draft-7", legacyHeaders: false });
const limiteConnexion = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { message: "Trop de tentatives, réessaie dans quelques minutes." },
});
const limitePaiement = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: "draft-7", legacyHeaders: false });
app.use("/api", limiteGlobale);

// Le webhook Stripe a besoin du corps BRUT (non parsé) pour vérifier la signature —
// monté AVANT express.json(), qui parserait sinon le body en objet JSON.
app.post("/api/achats/webhook", express.raw({ type: "application/json" }), webhookAchats);

app.use(express.json({ limit: "20kb" }));
// N'écrit pas la query string dans les logs : elle peut contenir un reçu d'achat (?jeton=).
morgan.token("url", (req) => req.originalUrl.split("?")[0]);
app.use(morgan("dev"));

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", limiteConnexion, authRoutes);
app.use("/api/seances", seancesRoutes);
app.use("/api/mouvements", mouvementsRoutes);
app.use("/api/historique", historiqueRoutes);
app.use("/api/engagements", engagementsRoutes);
app.use("/api/achats", limitePaiement, achatsRoutes);

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Erreur serveur" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Jaypartner's Mouvement démarrée sur http://localhost:${PORT}`);
});
