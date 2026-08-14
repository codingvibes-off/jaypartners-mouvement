import {
  HistoriqueService
} from "./chunk-O6JDJYHL.js";
import {
  IconComponent
} from "./chunk-Q4RUTCVR.js";
import {
  LangService
} from "./chunk-YD45A6VG.js";
import "./chunk-MHOTHGQB.js";
import {
  CommonModule
} from "./chunk-U75DGTTD.js";
import {
  TranslatePipe,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M2LWS2MJ.js";
import "./chunk-SNAKS5WD.js";

// src/app/features/calendrier/calendrier.component.ts
var _forTrack0 = ($index, $item) => $item.cleJour;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = (a0) => ({ jour: a0 });
function CalendrierComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "calendrier.chargement"));
  }
}
function CalendrierComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "calendrier.vide"), " ");
  }
}
function CalendrierComponent_Conditional_8_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jour_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(jour_r3);
  }
}
function CalendrierComponent_Conditional_8_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function CalendrierComponent_Conditional_8_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function CalendrierComponent_Conditional_8_For_18_Template_button_click_0_listener() {
      const jour_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectionnerJour(jour_r5));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendrierComponent_Conditional_8_For_18_Conditional_3_Template, 1, 0, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const jour_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hors-mois", !jour_r5.dansLeMois)("aujourdhui", ctx_r1.estAujourdhui(jour_r5.date))("selectionne", jour_r5.cleJour === ((tmp_13_0 = ctx_r1.jourSelectionne()) == null ? null : tmp_13_0.cleJour));
    \u0275\u0275property("disabled", jour_r5.entrees.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(jour_r5.date.getDate());
    \u0275\u0275advance();
    \u0275\u0275conditional(jour_r5.entrees.length > 0 ? 3 : -1);
  }
}
function CalendrierComponent_Conditional_8_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entree_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((entree_r6.seance == null ? null : entree_r6.seance.titre) || \u0275\u0275pipeBind1(3, 2, "calendrier.seanceParDefaut"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", entree_r6.xpGagne, " XP");
  }
}
function CalendrierComponent_Conditional_8_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 17);
    \u0275\u0275repeaterCreate(4, CalendrierComponent_Conditional_8_Conditional_20_For_5_Template, 6, 4, "li", null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "calendrier.seancesDu", \u0275\u0275pureFunction1(4, _c0, ctx_r1.libelleJourSelectionne())));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.entreesJourSelectionne());
  }
}
function CalendrierComponent_Conditional_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "calendrier.recapVide"));
  }
}
function CalendrierComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, CalendrierComponent_Conditional_8_Conditional_0_Template, 3, 3, "p", 2);
    \u0275\u0275elementStart(1, "section", 3)(2, "div", 4)(3, "div", 5)(4, "button", 6);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function CalendrierComponent_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moisPrecedent());
    });
    \u0275\u0275element(6, "app-icon", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function CalendrierComponent_Conditional_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moisSuivant());
    });
    \u0275\u0275element(11, "app-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275repeaterCreate(13, CalendrierComponent_Conditional_8_For_14_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275repeaterCreate(17, CalendrierComponent_Conditional_8_For_18_Template, 4, 9, "button", 11, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275template(20, CalendrierComponent_Conditional_8_Conditional_20_Template, 6, 6)(21, CalendrierComponent_Conditional_8_Conditional_21_Template, 3, 3, "p", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.historique().length === 0 ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 7, "calendrier.moisPrecedent"));
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.libelleMois());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 9, "calendrier.moisSuivant"));
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 16);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(15, 11, "calendrier.jours"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.joursGrille());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.entreesJourSelectionne().length > 0 ? 20 : 21);
  }
}
var CalendrierComponent = class _CalendrierComponent {
  historiqueService;
  lang;
  chargement = signal(true);
  historique = signal([]);
  moisAffiche = signal(this.premierJourDuMois(/* @__PURE__ */ new Date()));
  jourSelectionne = signal(null);
  entreesParJour = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const entree of this.historique()) {
      const cle = this.cleJour(new Date(entree.createdAt));
      if (!map.has(cle))
        map.set(cle, []);
      map.get(cle).push(entree);
    }
    return map;
  });
  joursGrille = computed(() => {
    const mois = this.moisAffiche();
    const annee = mois.getFullYear();
    const moisIndex = mois.getMonth();
    const premierJourSemaine = (new Date(annee, moisIndex, 1).getDay() + 6) % 7;
    const nbJoursMois = new Date(annee, moisIndex + 1, 0).getDate();
    const map = this.entreesParJour();
    const jours = [];
    for (let i = 0; i < premierJourSemaine; i++) {
      const date = new Date(annee, moisIndex, 1 - (premierJourSemaine - i));
      jours.push({ date, dansLeMois: false, cleJour: this.cleJour(date), entrees: [] });
    }
    for (let jour = 1; jour <= nbJoursMois; jour++) {
      const date = new Date(annee, moisIndex, jour);
      const cle = this.cleJour(date);
      jours.push({ date, dansLeMois: true, cleJour: cle, entrees: map.get(cle) ?? [] });
    }
    while (jours.length % 7 !== 0) {
      const derniere = jours[jours.length - 1].date;
      const date = new Date(derniere);
      date.setDate(date.getDate() + 1);
      jours.push({ date, dansLeMois: false, cleJour: this.cleJour(date), entrees: [] });
    }
    return jours;
  });
  entreesJourSelectionne = computed(() => this.jourSelectionne()?.entrees ?? []);
  libelleJourSelectionne = computed(() => {
    const jour = this.jourSelectionne();
    if (!jour)
      return "";
    const locale = this.lang.langue() === "en" ? "en-US" : "fr-FR";
    return jour.date.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" });
  });
  libelleMois = computed(() => {
    const locale = this.lang.langue() === "en" ? "en-US" : "fr-FR";
    return this.moisAffiche().toLocaleDateString(locale, { month: "long", year: "numeric" });
  });
  constructor(historiqueService, lang) {
    this.historiqueService = historiqueService;
    this.lang = lang;
  }
  ngOnInit() {
    this.historiqueService.obtenirHistorique().subscribe({
      next: (entries) => {
        this.historique.set(entries);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false)
    });
  }
  moisPrecedent() {
    const mois = this.moisAffiche();
    this.moisAffiche.set(new Date(mois.getFullYear(), mois.getMonth() - 1, 1));
  }
  moisSuivant() {
    const mois = this.moisAffiche();
    this.moisAffiche.set(new Date(mois.getFullYear(), mois.getMonth() + 1, 1));
  }
  selectionnerJour(jour) {
    if (jour.entrees.length === 0)
      return;
    this.jourSelectionne.set(this.jourSelectionne()?.cleJour === jour.cleJour ? null : jour);
  }
  estAujourdhui(date) {
    return this.cleJour(date) === this.cleJour(/* @__PURE__ */ new Date());
  }
  premierJourDuMois(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
  cleJour(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }
  static \u0275fac = function CalendrierComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendrierComponent)(\u0275\u0275directiveInject(HistoriqueService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendrierComponent, selectors: [["app-calendrier"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 7, consts: [[1, "entete-calendrier"], [1, "sous-titre"], [1, "etat"], [1, "calendrier-conteneur"], [1, "calendrier"], [1, "calendrier-nav"], [1, "btn-nav", 3, "click"], ["nom", "chevron-left", 3, "taille"], ["nom", "chevron-right", 3, "taille"], [1, "jours-semaine"], [1, "grille-jours"], [1, "jour", 3, "hors-mois", "aujourdhui", "selectionne", "disabled"], [1, "recap"], [1, "recap-vide"], [1, "jour", 3, "click", "disabled"], [1, "jour-numero"], [1, "point-valide"], [1, "recap-liste"], [1, "recap-titre"], [1, "recap-xp"]], template: function CalendrierComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 1);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, CalendrierComponent_Conditional_7_Template, 3, 3, "p", 2)(8, CalendrierComponent_Conditional_8_Template, 22, 13, "section", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "calendrier.titre"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "calendrier.sousTitre"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.chargement() ? 7 : 8);
    }
  }, dependencies: [CommonModule, IconComponent, TranslatePipe], styles: ["\n\n.entete-calendrier[_ngcontent-%COMP%] {\n  padding: 64px 48px 32px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .entete-calendrier[_ngcontent-%COMP%] {\n    padding: 40px 20px 24px;\n  }\n}\n.entete-calendrier[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 4vw, 48px);\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.sous-titre[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n}\n.etat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n  padding: 0 48px 24px;\n}\n@media (max-width: 720px) {\n  .etat[_ngcontent-%COMP%] {\n    padding: 0 20px 24px;\n  }\n}\n.calendrier-conteneur[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(320px, 480px) 1fr;\n  gap: 32px;\n  padding: 0 48px 80px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .calendrier-conteneur[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .calendrier-conteneur[_ngcontent-%COMP%] {\n    padding: 0 20px 60px;\n  }\n}\n.calendrier[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 24px;\n}\n.calendrier-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.calendrier-nav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-transform: capitalize;\n}\n.btn-nav[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.btn-nav[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.jours-semaine[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n  font-size: 11px;\n  color: var(--text-tertiary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.grille-jours[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.jour[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--text-primary);\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.jour[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  color: var(--text-tertiary);\n}\n.jour.hors-mois[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  opacity: 0.4;\n}\n.jour[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.jour.aujourdhui[_ngcontent-%COMP%]   .jour-numero[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-weight: 800;\n}\n.jour.selectionne[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.15);\n  border-color: var(--accent-primary);\n}\n.point-valide[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--accent-primary);\n  box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.7);\n}\n.recap[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 24px;\n  min-height: 160px;\n}\n.recap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-primary);\n  margin-bottom: 16px;\n  text-transform: capitalize;\n}\n.recap-liste[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.recap-liste[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n}\n.recap-titre[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n  font-size: 14px;\n}\n.recap-xp[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-weight: 700;\n  font-size: 13px;\n}\n.recap-vide[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=calendrier.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendrierComponent, { className: "CalendrierComponent" });
})();
export {
  CalendrierComponent
};
//# sourceMappingURL=chunk-PQRZWNN4.js.map
