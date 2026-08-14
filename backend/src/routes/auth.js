const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const prisma = require("../lib/prisma");

const router = express.Router();

const inscriptionSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  prenom: z.string().min(1),
});

router.post("/inscription", async (req, res) => {
  const parse = inscriptionSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ message: "Données invalides", errors: parse.error.flatten() });
  }
  const { email, password, prenom } = parse.data;

  const existant = await prisma.user.findUnique({ where: { email } });
  if (existant) {
    return res.status(409).json({ message: "Un compte existe déjà avec cet email" });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hash, prenom },
  });

  const token = signToken(user);
  res.status(201).json({ token, user: sansMotDePasse(user) });
});

const connexionSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

router.post("/connexion", async (req, res) => {
  const parse = connexionSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ message: "Données invalides" });
  }
  const { email, password } = parse.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: "Identifiants incorrects" });

  if (!user.password) {
    return res.status(401).json({ message: "Ce compte utilise la connexion Google. Connecte-toi avec Google." });
  }

  const valide = await bcrypt.compare(password, user.password);
  if (!valide) return res.status(401).json({ message: "Identifiants incorrects" });

  const token = signToken(user);
  res.json({ token, user: sansMotDePasse(user) });
});

// POST /api/auth/google -> connexion/inscription via un access token OAuth2 Google
// (obtenu côté client par GoogleAuthService avec google.accounts.oauth2.initTokenClient).
router.post("/google", async (req, res) => {
  const { accessToken } = req.body;
  if (!accessToken) return res.status(400).json({ message: "accessToken requis" });

  // 1) Vérifie que le jeton a bien été émis pour NOTRE client Google (empêche un jeton
  //    obtenu par une autre application d'être utilisé pour se connecter ici).
  const infoRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?access_token=${encodeURIComponent(accessToken)}`);
  if (!infoRes.ok) return res.status(401).json({ message: "Jeton Google invalide" });
  const info = await infoRes.json();
  if (info.aud !== process.env.GOOGLE_CLIENT_ID) {
    return res.status(401).json({ message: "Jeton Google invalide" });
  }

  // 2) Récupère le profil (email, prénom) directement depuis Google, jamais depuis le client.
  const profilRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!profilRes.ok) return res.status(401).json({ message: "Jeton Google invalide" });
  const profil = await profilRes.json();

  if (!profil.email || !(profil.email_verified === true || profil.email_verified === "true")) {
    return res.status(401).json({ message: "Email Google non vérifié" });
  }

  let user = await prisma.user.findFirst({
    where: { OR: [{ googleId: profil.sub }, { email: profil.email }] },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: profil.email,
        prenom: profil.given_name || profil.name || "Utilisateur",
        googleId: profil.sub,
      },
    });
  } else if (!user.googleId) {
    user = await prisma.user.update({ where: { id: user.id }, data: { googleId: profil.sub } });
  }

  const token = signToken(user);
  res.json({ token, user: sansMotDePasse(user) });
});

function signToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || "dev_secret_change_me",
    { expiresIn: "7d" }
  );
}

function sansMotDePasse(user) {
  const { password, ...rest } = user;
  return rest;
}

module.exports = router;
