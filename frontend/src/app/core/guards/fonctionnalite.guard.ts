import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export type Fonctionnalite = keyof typeof environment.fonctionnalites;

export function estActive(nom: Fonctionnalite): boolean {
  return environment.fonctionnalites[nom];
}

/** Route masquée (voir environment.fonctionnalites) : renvoie vers l'accueil, même via l'URL directe. */
export function fonctionnaliteGuard(nom: Fonctionnalite): CanMatchFn {
  return () => estActive(nom) || inject(Router).parseUrl('/');
}
