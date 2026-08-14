import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Langue = 'fr' | 'en';

const CLE_LANGUE = 'nm_lang';
const DUREE_CONTENU_MS = 260;
const DUREE_AFFICHAGE_MS = 750;

@Injectable({ providedIn: 'root' })
export class LangService {
  langue = signal<Langue>(this.recupererLangueStockee());
  /** Vrai pendant le changement de langue : pilote la révélation circulaire de la modale (voir app.component). */
  transitionEnCours = signal(false);
  /** Langue vers laquelle on bascule, pour le message de la modale. */
  langueCible = signal<Langue | null>(null);

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.use(this.langue());
  }

  /** `event` sert à faire naître l'effet de révélation depuis le bouton cliqué. */
  changer(langue: Langue, event?: MouseEvent): void {
    if (this.langue() === langue || this.transitionEnCours()) return;

    if (event) {
      document.documentElement.style.setProperty('--lang-origin-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--lang-origin-y', `${event.clientY}px`);
    }

    this.langueCible.set(langue);
    this.transitionEnCours.set(true);

    setTimeout(() => {
      localStorage.setItem(CLE_LANGUE, langue);
      this.langue.set(langue);
      this.translate.use(langue);
    }, DUREE_CONTENU_MS);

    setTimeout(() => {
      this.transitionEnCours.set(false);
    }, DUREE_AFFICHAGE_MS);
  }

  private recupererLangueStockee(): Langue {
    const stockee = localStorage.getItem(CLE_LANGUE);
    return stockee === 'en' ? 'en' : 'fr';
  }
}
