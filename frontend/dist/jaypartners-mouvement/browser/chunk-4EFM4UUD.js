import {
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-M2LWS2MJ.js";

// src/app/core/services/coach.service.ts
var CLE_COACH = "nm_coach";
var DUREE_CONTENU_MS = 260;
var DUREE_AFFICHAGE_MS = 750;
var CoachService = class _CoachService {
  /** `null` tant qu'aucun choix n'a été fait — bloque l'accès au site (voir app.component). */
  coach = signal(this.recupererCoachStocke());
  /** Classe de thème global à appliquer ('femme' | 'homme'), voir styles.css `.theme-*`. */
  themeClasse = computed(() => {
    const c = this.coach();
    return c ? c.toLowerCase() : null;
  });
  /** Vrai pendant la sélection : pilote la révélation circulaire (même effet que le changement de langue). */
  transitionEnCours = signal(false);
  /** Coach vers lequel on bascule, pour la couleur/le contenu de la modale pendant la transition. */
  coachCible = signal(null);
  /** `event` sert à faire naître la révélation depuis le panneau cliqué. */
  choisir(coach, event) {
    if (this.transitionEnCours())
      return;
    if (event) {
      document.documentElement.style.setProperty("--coach-origin-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--coach-origin-y", `${event.clientY}px`);
    }
    this.coachCible.set(coach);
    this.transitionEnCours.set(true);
    setTimeout(() => {
      localStorage.setItem(CLE_COACH, coach);
      this.coach.set(coach);
    }, DUREE_CONTENU_MS);
    setTimeout(() => {
      this.transitionEnCours.set(false);
    }, DUREE_AFFICHAGE_MS);
  }
  /** Efface le choix pour rouvrir la porte de sélection (bouton dans la navbar). */
  reinitialiser() {
    localStorage.removeItem(CLE_COACH);
    this.coach.set(null);
  }
  recupererCoachStocke() {
    const stocke = localStorage.getItem(CLE_COACH);
    return stocke === "FEMME" || stocke === "HOMME" ? stocke : null;
  }
  static \u0275fac = function CoachService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoachService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CoachService, factory: _CoachService.\u0275fac, providedIn: "root" });
};

export {
  CoachService
};
//# sourceMappingURL=chunk-4EFM4UUD.js.map
