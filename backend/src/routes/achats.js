const express = require("express");
const prisma = require("../lib/prisma");
const { auteurOptionnel, requireAuth } = require("../middleware/auth");
const { obtenirStripe } = require("../lib/stripe");
const { signerJetonProgramme } = require("../lib/jetonProgramme");

const router = express.Router();

// POST /api/achats/checkout -> crée une session Stripe Checkout pour débloquer le programme
// PDF d'une séance payante (achat à l'unité). Aucun compte requis : auteurOptionnel attache
// req.user si l'acheteur est connecté (achat rattaché à son compte, visible sur tous ses
// appareils), sinon l'achat reste "invité" (débloqué via jeton, voir /verifier-session).
router.post("/checkout", auteurOptionnel, async (req, res) => {
  const { seanceId } = req.body;
  if (!seanceId) return res.status(400).json({ message: "seanceId requis" });

  const seance = await prisma.seance.findUnique({ where: { id: seanceId } });
  if (!seance) return res.status(404).json({ message: "Séance introuvable" });
  if (!seance.prixCentimes) {
    return res.status(400).json({ message: "Cette séance est gratuite, aucun achat nécessaire" });
  }

  if (req.user) {
    const dejaAchete = await prisma.achat.findFirst({
      where: { userId: req.user.id, seanceId, statut: "PAYE" },
    });
    if (dejaAchete) return res.status(409).json({ message: "Programme déjà acheté" });
  }

  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:4200";

  let session;
  try {
    const stripe = obtenirStripe();
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: req.user?.email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: seance.prixCentimes,
            product_data: { name: `Programme PDF — ${seance.titre}` },
          },
          quantity: 1,
        },
      ],
      success_url: `${frontendUrl}/seance/${seanceId}?achat=succes&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/seance/${seanceId}?achat=annule`,
      metadata: { userId: req.user?.id || "", seanceId },
    });
  } catch (err) {
    return res.status(502).json({ message: "Paiement indisponible pour le moment (Stripe non configuré)", detail: err.message });
  }

  await prisma.achat.create({
    data: {
      userId: req.user?.id ?? null,
      seanceId,
      montantCentimes: seance.prixCentimes,
      stripeSessionId: session.id,
      statut: "EN_ATTENTE",
    },
  });

  res.json({ url: session.url });
});

// GET /api/achats/verifier-session/:sessionId -> vérifie une session Stripe Checkout après
// retour sur le site (succès invité ou connecté) et délivre un jeton d'accès si payée.
// Publique (pas de compte requis) : la session Stripe elle-même fait office de preuve.
router.get("/verifier-session/:sessionId", async (req, res) => {
  const { sessionId } = req.params;

  let achat = await prisma.achat.findUnique({ where: { stripeSessionId: sessionId } });
  if (!achat) return res.status(404).json({ deverrouille: false });

  if (achat.statut !== "PAYE") {
    // Filet de sécurité si le webhook n'est pas (encore) joignable en dev : on revérifie
    // directement auprès de Stripe avant d'abandonner.
    try {
      const stripe = obtenirStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.payment_status === "paid") {
        achat = await prisma.achat.update({
          where: { id: achat.id },
          data: { statut: "PAYE", email: session.customer_details?.email || achat.email },
        });
      }
    } catch (err) {
      // Stripe indisponible (clé placeholder) : on ne peut pas confirmer, on répond "non débloqué".
    }
  }

  if (achat.statut !== "PAYE") return res.json({ deverrouille: false });

  res.json({ deverrouille: true, seanceId: achat.seanceId, jeton: signerJetonProgramme(achat.seanceId) });
});

// GET /api/achats/:seanceId -> statut d'achat de l'utilisateur connecté pour cette séance
// (vérification multi-appareils pour les achats rattachés à un compte).
router.get("/:seanceId", requireAuth, async (req, res) => {
  const achat = await prisma.achat.findFirst({
    where: { userId: req.user.id, seanceId: req.params.seanceId, statut: "PAYE" },
  });
  res.json({ achete: !!achat });
});

module.exports = router;
