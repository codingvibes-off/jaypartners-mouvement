require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/auth");
const seancesRoutes = require("./routes/seances");
const mouvementsRoutes = require("./routes/mouvements");
const historiqueRoutes = require("./routes/historique");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/seances", seancesRoutes);
app.use("/api/mouvements", mouvementsRoutes);
app.use("/api/historique", historiqueRoutes);

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Erreur serveur" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Netflix du Mouvement démarrée sur http://localhost:${PORT}`);
});
