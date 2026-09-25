require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/auth");
const seancesRoutes = require("./routes/seances");
const mouvementsRoutes = require("./routes/mouvements");
const historiqueRoutes = require("./routes/historique");
const engagementsRoutes = require("./routes/engagements");
const achatsRoutes = require("./routes/achats");
const { webhookAchats } = require("./routes/stripeWebhook");

const app = express();

app.use(cors());

// Le webhook Stripe a besoin du corps BRUT (non parsé) pour vérifier la signature —
// monté AVANT express.json(), qui parserait sinon le body en objet JSON.
app.post("/api/achats/webhook", express.raw({ type: "application/json" }), webhookAchats);

app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/seances", seancesRoutes);
app.use("/api/mouvements", mouvementsRoutes);
app.use("/api/historique", historiqueRoutes);
app.use("/api/engagements", engagementsRoutes);
app.use("/api/achats", achatsRoutes);

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Erreur serveur" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Jaypartner's Mouvement démarrée sur http://localhost:${PORT}`);
});
