const prisma = require("../lib/prisma");
const { obtenirStripe } = require("../lib/stripe");

// Nécessite le corps BRUT de la requête (non parsé en JSON) pour vérifier la signature
// Stripe — monté séparément dans server.js, avant express.json().
async function webhookAchats(req, res) {
  const signature = req.headers["stripe-signature"];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    const stripe = obtenirStripe();
    event = stripe.webhooks.constructEvent(req.body, signature, secret);
  } catch (err) {
    return res.status(400).send(`Webhook invalide: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    if (session.id) {
      await prisma.achat
        .update({
          where: { stripeSessionId: session.id },
          data: { statut: "PAYE", email: session.customer_details?.email || undefined },
        })
        .catch(() => null);
    }
  }

  res.json({ received: true });
}

module.exports = { webhookAchats };
