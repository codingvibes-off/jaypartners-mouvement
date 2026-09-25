export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  // Code client Cloudflare Stream (ex: 'customer-abc123'), trouvable dans le dashboard Cloudflare > Stream
  cfStreamCustomerCode: 'customer-pkysq1xgvna4ekn3',
  googleClientId: '907615936165-bf4qooc1mfk7k0318nehvgp7lg74llq3.apps.googleusercontent.com',
  // Développement : tout reste visible pour pouvoir continuer à travailler dessus.
  // Rien n'est supprimé : ces interrupteurs cachent seulement l'accès (liens + routes).
  fonctionnalites: {
    coachHomme: true,
    duo: true,
    programmes: true,
    decouvrir: true,
    changerCoach: true,
    boutonCommencer: true,
    // Footer : Calendrier, Créer un compte, Pour les coachs, Articles.
    liensFooter: true,
    boutonsConnexion: true,
  },
  // true : l'accueil n'affiche que les séances ayant des vidéos réelles, et les mouvements
  // sans vidéo sont retirés des séances.
  seulementAvecVideo: true,
};
