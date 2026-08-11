import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'seance/:id',
    loadComponent: () =>
      import('./features/seance-detail/seance-detail.component').then(
        (m) => m.SeanceDetailComponent
      ),
  },
  {
    path: 'seance/:id/entrainement',
    loadComponent: () =>
      import('./features/entrainement/entrainement.component').then(
        (m) => m.EntrainementComponent
      ),
  },
  {
    path: 'calendrier',
    loadComponent: () =>
      import('./features/calendrier/calendrier.component').then((m) => m.CalendrierComponent),
  },
  {
    path: 'decouvrir',
    loadComponent: () =>
      import('./features/decouvrir/decouvrir.component').then((m) => m.DecouvrirComponent),
  },
  {
    path: 'programmes',
    loadComponent: () =>
      import('./features/programmes/programmes.component').then((m) => m.ProgrammesComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./features/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'connexion',
    loadComponent: () =>
      import('./features/auth/connexion.component').then((m) => m.ConnexionComponent),
  },
  {
    path: 'inscription',
    loadComponent: () =>
      import('./features/auth/inscription.component').then((m) => m.InscriptionComponent),
  },
  { path: '**', redirectTo: '' },
];
