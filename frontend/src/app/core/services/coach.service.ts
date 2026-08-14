import { Injectable, computed, signal } from '@angular/core';

export type ChoixCoach = 'FEMME' | 'HOMME';

const CLE_COACH = 'nm_coach';
/** Doit rester alignée avec la durée de transition clip-path dans app.component.ts. */
const DUREE_CONTENU_MS = 260;
const DUREE_AFFICHAGE_MS = 750;

@Injectable({ providedIn: 'root' })
export class CoachService {
  /** `null` tant qu'aucun choix n'a été fait — bloque l'accès au site (voir app.component). */
  coach = signal<ChoixCoach | null>(this.recupererCoachStocke());

  /** Classe de thème global à appliquer ('femme' | 'homme'), voir styles.css `.theme-*`. */
  themeClasse = computed<string | null>(() => {
    const c = this.coach();
    return c ? c.toLowerCase() : null;
  });

  /** Vrai pendant la sélection : pilote la révélation circulaire (même effet que le changement de langue). */
  transitionEnCours = signal(false);
  /** Coach vers lequel on bascule, pour la couleur/le contenu de la modale pendant la transition. */
  coachCible = signal<ChoixCoach | null>(null);

  /** `event` sert à faire naître la révélation depuis le panneau cliqué. */
  choisir(coach: ChoixCoach, event?: MouseEvent): void {
    if (this.transitionEnCours()) return;

    if (event) {
      document.documentElement.style.setProperty('--coach-origin-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--coach-origin-y', `${event.clientY}px`);
    }

    this.coachCible.set(coach);
    this.transitionEnCours.set(true);

    setTimeout(() => {
      localStorage.setItem(CLE_COACH, coach);
      this.coach.set(coach);
    }, DUREE_CONTENU_MS);

    setTimeout(() => {
      this.transitionEnCours.set(false);
      // Ne pas remettre coachCible à null ici : la modale met ~480ms à se refermer
      // (clip-path) après ce point, et son contenu doit rester correct pendant ce
      // temps. `coachCible` sera de toute façon écrasé au prochain choisir().
    }, DUREE_AFFICHAGE_MS);
  }

  /** Efface le choix pour rouvrir la porte de sélection (bouton dans la navbar). */
  reinitialiser(): void {
    localStorage.removeItem(CLE_COACH);
    this.coach.set(null);
  }

  private recupererCoachStocke(): ChoixCoach | null {
    const stocke = localStorage.getItem(CLE_COACH);
    return stocke === 'FEMME' || stocke === 'HOMME' ? stocke : null;
  }
}
