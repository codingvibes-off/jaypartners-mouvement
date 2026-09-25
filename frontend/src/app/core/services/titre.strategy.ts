import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

export const NOM_SITE = 'Justine Pegas';

/** Formate un titre d'onglet (SEO) : "Justine Pegas | <objectif de la page>". */
export function titrePage(objectif?: string): string {
  return objectif ? `${NOM_SITE} | ${objectif}` : NOM_SITE;
}

/** Applique `title` des routes (app.routes.ts) préfixé du nom du site. */
@Injectable({ providedIn: 'root' })
export class TitreStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.title.setTitle(titrePage(this.buildTitle(snapshot)));
  }
}
