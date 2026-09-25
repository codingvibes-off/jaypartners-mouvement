import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard';
import { fonctionnaliteGuard } from './core/guards/fonctionnalite.guard';

export const routes: Routes = [
  {
    path: '',
    title: "Pilates et renforcement en douceur, séances en vidéo",
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'seance/:id',
    title: "Détail de la séance",
    loadComponent: () =>
      import('./features/seance-detail/seance-detail.component').then(
        (m) => m.SeanceDetailComponent
      ),
  },
  {
    path: 'seance/:id/entrainement',
    title: "Entraînement guidé",
    loadComponent: () =>
      import('./features/entrainement/entrainement.component').then(
        (m) => m.EntrainementComponent
      ),
  },
  {
    path: 'calendrier',
    title: "Mon calendrier d'entraînement",
    loadComponent: () =>
      import('./features/calendrier/calendrier.component').then((m) => m.CalendrierComponent),
  },
  {
    path: 'decouvrir',
    title: "Découvrir les séances",
    canMatch: [fonctionnaliteGuard('decouvrir')],
    loadComponent: () =>
      import('./features/decouvrir/decouvrir.component').then((m) => m.DecouvrirComponent),
  },
  {
    path: 'duo',
    title: "Séances en duo",
    canMatch: [fonctionnaliteGuard('duo')],
    loadComponent: () =>
      import('./features/duo/duo.component').then((m) => m.DuoComponent),
  },
  {
    path: 'programmes',
    title: "Programmes d'entraînement",
    canMatch: [fonctionnaliteGuard('programmes')],
    loadComponent: () =>
      import('./features/programmes/programmes.component').then((m) => m.ProgrammesComponent),
  },
  {
    path: 'about',
    title: "À propos de votre coach",
    loadComponent: () =>
      import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    title: "Contact",
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'faq',
    title: "Questions fréquentes",
    loadComponent: () =>
      import('./features/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'admin/videos',
    title: "Administration des vidéos",
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./features/admin-videos/admin-videos.component').then(
        (m) => m.AdminVideosComponent
      ),
  },
  {
    path: 'connexion',
    title: "Connexion à votre espace",
    loadComponent: () =>
      import('./features/auth/connexion.component').then((m) => m.ConnexionComponent),
  },
  {
    path: 'inscription',
    title: "Créer votre compte",
    loadComponent: () =>
      import('./features/auth/inscription.component').then((m) => m.InscriptionComponent),
  },
  { path: '**', redirectTo: '' },
];
