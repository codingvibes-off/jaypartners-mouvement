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

  const valide = await bcrypt.compare(password, user.password);
  if (!valide) return res.status(401).json({ message: "Identifiants incorrects" });

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
