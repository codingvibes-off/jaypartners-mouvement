const Stripe = require("stripe");

let client;

// Instancié à la demande (pas au chargement du module) : permet à l'app de démarrer même
// sans clé Stripe encore configurée (scaffold en attendant les vraies clés de production).
function obtenirStripe() {
  if (!client) {
    const cle = process.env.STRIPE_SECRET_KEY;
    if (!cle) {
      throw new Error("STRIPE_SECRET_KEY n'est pas défini dans .env");
    }
    client = new Stripe(cle);
  }
  return client;
}

module.exports = { obtenirStripe };
