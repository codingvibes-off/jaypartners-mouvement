export const environment = {
  production: true,
  apiUrl: 'https://api.tondomaine.com/api',
  cfStreamCustomerCode: 'customer-pkysq1xgvna4ekn3',
  googleClientId: '907615936165-bf4qooc1mfk7k0318nehvgp7lg74llq3.apps.googleusercontent.com',
  // Production : sections masquées pour le lancement (Femme uniquement). Passer à true pour les réactiver.
  // Rien n'est supprimé : ces interrupteurs cachent seulement l'accès (liens + routes).
  fonctionnalites: {
    coachHomme: false,
    duo: false,
    programmes: false,
    decouvrir: false,
    changerCoach: false,
    boutonCommencer: false,
    // Footer : Calendrier, Créer un compte, Pour les coachs, Articles.
    liensFooter: false,
    boutonsConnexion: false,
  },
  // true : l'accueil n'affiche que les séances ayant des vidéos réelles, et les mouvements
  // sans vidéo sont retirés des séances.
  seulementAvecVideo: true,
};
