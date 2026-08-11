import {
  HistoriqueService
} from "./chunk-SFZB4EW6.js";
import {
  IconComponent
} from "./chunk-JNSSE4B5.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z3NPIKQV.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/calendrier/calendrier.component.ts
var _forTrack0 = ($index, $item) => $item.cleJour;
var _forTrack1 = ($index, $item) => $item.id;
function CalendrierComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Chargement de ton historique...");
    \u0275\u0275elementEnd();
  }
}
function CalendrierComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, " Tu n'as pas encore valid\xE9 de s\xE9ance. Lance un entra\xEEnement pour commencer ! ");
    \u0275\u0275elementEnd();
  }
}
function CalendrierComponent_Conditional_6_For_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
}
function CalendrierComponent_Conditional_6_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function CalendrierComponent_Conditional_6_For_27_Template_button_click_0_listener() {
      const jour_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectionnerJour(jour_r4));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendrierComponent_Conditional_6_For_27_Conditional_3_Template, 1, 0, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const jour_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hors-mois", !jour_r4.dansLeMois)("aujourdhui", ctx_r1.estAujourdhui(jour_r4.date))("selectionne", jour_r4.cleJour === ((tmp_13_0 = ctx_r1.jourSelectionne()) == null ? null : tmp_13_0.cleJour));
    \u0275\u0275property("disabled", jour_r4.entrees.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(jour_r4.date.getDate());
    \u0275\u0275advance();
    \u0275\u0275conditional(jour_r4.entrees.length > 0 ? 3 : -1);
  }
}
function CalendrierComponent_Conditional_6_Conditional_29_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entree_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((entree_r5.seance == null ? null : entree_r5.seance.titre) || "S\xE9ance");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", entree_r5.xpGagne, " XP");
  }
}
function CalendrierComponent_Conditional_6_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 18);
    \u0275\u0275repeaterCreate(3, CalendrierComponent_Conditional_6_Conditional_29_For_4_Template, 5, 2, "li", null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("S\xE9ances du ", ctx_r1.libelleJourSelectionne(), "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.entreesJourSelectionne());
  }
}
function CalendrierComponent_Conditional_6_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Clique sur un jour marqu\xE9 d'un point pour voir le r\xE9cap des s\xE9ances faites.");
    \u0275\u0275elementEnd();
  }
}
function CalendrierComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, CalendrierComponent_Conditional_6_Conditional_0_Template, 2, 0, "p", 2);
    \u0275\u0275elementStart(1, "section", 3)(2, "div", 4)(3, "div", 5)(4, "button", 6);
    \u0275\u0275listener("click", function CalendrierComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moisPrecedent());
    });
    \u0275\u0275element(5, "app-icon", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 8);
    \u0275\u0275listener("click", function CalendrierComponent_Conditional_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moisSuivant());
    });
    \u0275\u0275element(9, "app-icon", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "span");
    \u0275\u0275text(12, "Lun");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Mar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Mer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Jeu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Ven");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Sam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Dim");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 11);
    \u0275\u0275repeaterCreate(26, CalendrierComponent_Conditional_6_For_27_Template, 4, 9, "button", 12, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 13);
    \u0275\u0275template(29, CalendrierComponent_Conditional_6_Conditional_29_Template, 5, 1)(30, CalendrierComponent_Conditional_6_Conditional_30_Template, 2, 0, "p", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.historique().length === 0 ? 0 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("taille", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.libelleMois());
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 16);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.joursGrille());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.entreesJourSelectionne().length > 0 ? 29 : 30);
  }
}
var CalendrierComponent = class _CalendrierComponent {
  historiqueService;
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
    return jour.date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  });
  libelleMois = computed(() => this.moisAffiche().toLocaleDateString("fr-FR", { month: "long", year: "numeric" }));
  constructor(historiqueService) {
    this.historiqueService = historiqueService;
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
    return new (__ngFactoryType__ || _CalendrierComponent)(\u0275\u0275directiveInject(HistoriqueService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendrierComponent, selectors: [["app-calendrier"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "entete-calendrier"], [1, "sous-titre"], [1, "etat"], [1, "calendrier-conteneur"], [1, "calendrier"], [1, "calendrier-nav"], ["aria-label", "Mois pr\xE9c\xE9dent", 1, "btn-nav", 3, "click"], ["nom", "chevron-left", 3, "taille"], ["aria-label", "Mois suivant", 1, "btn-nav", 3, "click"], ["nom", "chevron-right", 3, "taille"], [1, "jours-semaine"], [1, "grille-jours"], [1, "jour", 3, "hors-mois", "aujourdhui", "selectionne", "disabled"], [1, "recap"], [1, "recap-vide"], [1, "jour", 3, "click", "disabled"], [1, "jour-numero"], [1, "point-valide"], [1, "recap-liste"], [1, "recap-titre"], [1, "recap-xp"]], template: function CalendrierComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Mon calendrier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275text(4, "Retrouve toutes les s\xE9ances que tu as valid\xE9es.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, CalendrierComponent_Conditional_5_Template, 2, 0, "p", 2)(6, CalendrierComponent_Conditional_6_Template, 31, 5, "section", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.chargement() ? 5 : 6);
    }
  }, dependencies: [CommonModule, IconComponent], styles: ["\n\n.entete-calendrier[_ngcontent-%COMP%] {\n  padding: 64px 48px 32px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .entete-calendrier[_ngcontent-%COMP%] {\n    padding: 40px 20px 24px;\n  }\n}\n.entete-calendrier[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 4vw, 48px);\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.sous-titre[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n}\n.etat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n  padding: 0 48px 24px;\n}\n@media (max-width: 720px) {\n  .etat[_ngcontent-%COMP%] {\n    padding: 0 20px 24px;\n  }\n}\n.calendrier-conteneur[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(320px, 480px) 1fr;\n  gap: 32px;\n  padding: 0 48px 80px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .calendrier-conteneur[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .calendrier-conteneur[_ngcontent-%COMP%] {\n    padding: 0 20px 60px;\n  }\n}\n.calendrier[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 24px;\n}\n.calendrier-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.calendrier-nav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-transform: capitalize;\n}\n.btn-nav[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.btn-nav[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.jours-semaine[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n  font-size: 11px;\n  color: var(--text-tertiary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.grille-jours[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.jour[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--text-primary);\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.jour[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  color: var(--text-tertiary);\n}\n.jour.hors-mois[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  opacity: 0.4;\n}\n.jour[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.jour.aujourdhui[_ngcontent-%COMP%]   .jour-numero[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-weight: 800;\n}\n.jour.selectionne[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.15);\n  border-color: var(--accent-primary);\n}\n.point-valide[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--accent-primary);\n  box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.7);\n}\n.recap[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 24px;\n  min-height: 160px;\n}\n.recap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-primary);\n  margin-bottom: 16px;\n  text-transform: capitalize;\n}\n.recap-liste[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.recap-liste[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n}\n.recap-titre[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n  font-size: 14px;\n}\n.recap-xp[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-weight: 700;\n  font-size: 13px;\n}\n.recap-vide[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=calendrier.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendrierComponent, { className: "CalendrierComponent" });
})();
export {
  CalendrierComponent
};
//# sourceMappingURL=chunk-RFQNWY3M.js.map
