import {
  TranslateService,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-M2LWS2MJ.js";

// src/app/core/services/lang.service.ts
var CLE_LANGUE = "nm_lang";
var DUREE_CONTENU_MS = 260;
var DUREE_AFFICHAGE_MS = 750;
var LangService = class _LangService {
  translate;
  langue = signal(this.recupererLangueStockee());
  /** Vrai pendant le changement de langue : pilote la révélation circulaire de la modale (voir app.component). */
  transitionEnCours = signal(false);
  /** Langue vers laquelle on bascule, pour le message de la modale. */
  langueCible = signal(null);
  constructor(translate) {
    this.translate = translate;
    this.translate.addLangs(["fr", "en"]);
    this.translate.use(this.langue());
  }
  /** `event` sert à faire naître l'effet de révélation depuis le bouton cliqué. */
  changer(langue, event) {
    if (this.langue() === langue || this.transitionEnCours())
      return;
    if (event) {
      document.documentElement.style.setProperty("--lang-origin-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--lang-origin-y", `${event.clientY}px`);
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
  recupererLangueStockee() {
    const stockee = localStorage.getItem(CLE_LANGUE);
    return stockee === "en" ? "en" : "fr";
  }
  static \u0275fac = function LangService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LangService)(\u0275\u0275inject(TranslateService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LangService, factory: _LangService.\u0275fac, providedIn: "root" });
};

export {
  LangService
};
//# sourceMappingURL=chunk-YD45A6VG.js.map
