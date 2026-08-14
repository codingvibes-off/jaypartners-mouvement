import {
  SeanceCardComponent
} from "./chunk-JDFPRYER.js";
import "./chunk-ERMIDGPZ.js";
import {
  gsapWithCSS
} from "./chunk-VNIDSO3Z.js";
import {
  SeanceService
} from "./chunk-4FTD4IR3.js";
import "./chunk-YPSBE6FA.js";
import "./chunk-LT5XQBJD.js";
import "./chunk-EZLIDOO3.js";
import "./chunk-Q4RUTCVR.js";
import "./chunk-YD45A6VG.js";
import "./chunk-MHOTHGQB.js";
import {
  CommonModule
} from "./chunk-U75DGTTD.js";
import {
  TranslatePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-M2LWS2MJ.js";
import "./chunk-SNAKS5WD.js";

// src/app/features/programmes/programmes.component.ts
var _c0 = ["voile"];
var _c1 = ["sentinelle"];
var _forTrack0 = ($index, $item) => $item.id;
var _c2 = (a0) => ({ univers: a0 });
function ProgrammesComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ProgrammesComponent_For_15_Template_button_click_0_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changerUnivers(u_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--u-accent", u_r2.accent);
    \u0275\u0275classProp("actif", ctx_r2.universActif().id === u_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "univers." + u_r2.id + ".label"), " ");
  }
}
function ProgrammesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 3, "programmes.chargement", \u0275\u0275pureFunction1(6, _c2, \u0275\u0275pipeBind1(3, 1, "univers." + ctx_r2.universActif().id + ".label"))));
  }
}
function ProgrammesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "programmes.aucunProgramme"));
  }
}
function ProgrammesComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seance-card", 16);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("seance", item_r4.seance);
  }
}
function ProgrammesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ProgrammesComponent_Conditional_19_For_2_Template, 1, 1, "app-seance-card", 16, \u0275\u0275componentInstance().trackByCle, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.visibles());
  }
}
var TAILLE_LOT = 10;
var MARGE_CHARGEMENT_PX = 500;
var UNIVERS = [
  {
    id: "pilates",
    label: "Pilates",
    categorie: "Pilates",
    accent: "#e879f9",
    accentRgb: "232, 121, 249",
    fond: "#130a17",
    tagline: "Contr\xF4le, gainage, pr\xE9cision."
  },
  {
    id: "mobilite",
    label: "Mobilit\xE9",
    categorie: "Mobilit\xE9",
    accent: "#2dd4bf",
    accentRgb: "45, 212, 191",
    fond: "#051413",
    tagline: "Amplitude, souplesse, r\xE9cup\xE9ration."
  },
  {
    id: "force",
    label: "Force",
    categorie: "Renforcement",
    accent: "#ff4d4d",
    accentRgb: "255, 77, 77",
    fond: "#150505",
    tagline: "Construis ta puissance brute."
  },
  {
    id: "athletisme",
    label: "Athl\xE9tisme",
    categorie: "Athl\xE9tisme",
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    fond: "#050e15",
    tagline: "Vitesse, cardio, foul\xE9e."
  },
  {
    id: "hyrox",
    label: "Hyrox",
    categorie: "Hyrox",
    accent: "#f97316",
    accentRgb: "249, 115, 22",
    fond: "#170b02",
    tagline: "La course fonctionnelle ultime."
  },
  {
    id: "explosivite",
    label: "Explosivit\xE9",
    categorie: "Plyom\xE9trie",
    accent: "#fde047",
    accentRgb: "253, 224, 71",
    fond: "#151304",
    tagline: "Puissance et d\xE9tente verticale."
  }
];
var ProgrammesComponent = class _ProgrammesComponent {
  seanceService;
  voileRef;
  sentinelleRef;
  univers = UNIVERS;
  universActif = signal(UNIVERS[0]);
  visibles = signal([]);
  chargement = signal(true);
  aucunProgramme = signal(false);
  base = [];
  pool = [];
  curseur = 0;
  observateur;
  constructor(seanceService) {
    this.seanceService = seanceService;
  }
  ngOnInit() {
    this.chargerUnivers(this.universActif());
  }
  ngAfterViewInit() {
    if (!this.sentinelleRef)
      return;
    this.observateur = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting)
        this.chargerSiVisible();
    }, { rootMargin: `${MARGE_CHARGEMENT_PX}px` });
    this.observateur.observe(this.sentinelleRef.nativeElement);
  }
  ngOnDestroy() {
    this.observateur?.disconnect();
  }
  trackByCle(_index, item) {
    return item.cle;
  }
  changerUnivers(u) {
    if (this.universActif().id === u.id)
      return;
    this.jouerTransitionCouleur(u);
    this.universActif.set(u);
    this.chargerUnivers(u);
  }
  chargerUnivers(u) {
    this.chargement.set(true);
    this.aucunProgramme.set(false);
    this.visibles.set([]);
    this.base = [];
    this.pool = [];
    this.curseur = 0;
    this.seanceService.obtenirParCategorie(u.categorie).subscribe({
      next: (seances) => {
        this.base = seances;
        this.chargement.set(false);
        if (seances.length === 0) {
          this.aucunProgramme.set(true);
          return;
        }
        requestAnimationFrame(() => this.chargerSiVisible());
      },
      error: () => {
        this.chargement.set(false);
        this.aucunProgramme.set(true);
      }
    });
  }
  /** L'IntersectionObserver ne se redéclenche que sur un changement d'état : si le sentinel
   *  reste dans la marge de chargement après un ajout (petit univers, grand écran), aucun nouvel
   *  événement ne partirait. On vérifie donc sa position réelle et on boucle nous-mêmes tant
   *  qu'il est visible, ce qui donne l'impression d'un flux de programmes infini et continu. */
  chargerSiVisible() {
    if (this.chargement() || this.base.length === 0)
      return;
    const el = this.sentinelleRef?.nativeElement;
    if (!el)
      return;
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight + MARGE_CHARGEMENT_PX)
      return;
    this.ajouterLot();
    requestAnimationFrame(() => this.chargerSiVisible());
  }
  /** Pioche le prochain lot dans un pool mélangé, en le renouvelant (mélangé à nouveau) à
   *  chaque tour complet — donne l'impression d'un flux continu plutôt qu'une répétition brute. */
  ajouterLot() {
    if (this.base.length === 0)
      return;
    const nouveaux = [];
    const departIndex = this.visibles().length;
    for (let i = 0; i < TAILLE_LOT; i++) {
      if (this.curseur >= this.pool.length) {
        this.pool = this.melanger(this.base);
        this.curseur = 0;
      }
      const seance = this.pool[this.curseur];
      nouveaux.push({ seance, cle: `${seance.id}--${departIndex + i}` });
      this.curseur++;
    }
    this.visibles.update((v) => [...v, ...nouveaux]);
  }
  melanger(items) {
    const copie = [...items];
    for (let i = copie.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copie[i], copie[j]] = [copie[j], copie[i]];
    }
    return copie;
  }
  jouerTransitionCouleur(u) {
    const voile = this.voileRef?.nativeElement;
    if (!voile)
      return;
    gsapWithCSS.killTweensOf(voile);
    gsapWithCSS.set(voile, { background: u.accent, opacity: 0 });
    gsapWithCSS.to(voile, {
      opacity: 0.4,
      duration: 0.28,
      ease: "power2.out",
      onComplete: () => {
        gsapWithCSS.to(voile, { opacity: 0, duration: 0.6, ease: "power2.in" });
      }
    });
  }
  static \u0275fac = function ProgrammesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgrammesComponent)(\u0275\u0275directiveInject(SeanceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgrammesComponent, selectors: [["app-programmes"]], viewQuery: function ProgrammesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.voileRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sentinelleRef = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 18, consts: [["voile", ""], ["sentinelle", ""], [1, "scene"], [1, "voile-transition"], [1, "entete"], [1, "eyebrow"], [1, "tagline"], [1, "onglets-univers"], [1, "onglet-univers", 3, "actif", "--u-accent"], [1, "matrice-conteneur"], [1, "etat-conteneur"], [1, "matrice"], ["aria-hidden", "true", 1, "sentinelle"], [1, "point"], [1, "onglet-univers", 3, "click"], [1, "etat"], [3, "seance"]], template: function ProgrammesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2);
      \u0275\u0275element(1, "div", 3, 0);
      \u0275\u0275elementStart(3, "header", 4)(4, "p", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275repeaterCreate(14, ProgrammesComponent_For_15_Template, 3, 7, "button", 8, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "main", 9);
      \u0275\u0275template(17, ProgrammesComponent_Conditional_17_Template, 5, 8, "div", 10)(18, ProgrammesComponent_Conditional_18_Template, 4, 3, "div", 10)(19, ProgrammesComponent_Conditional_19_Template, 3, 0, "div", 11);
      \u0275\u0275elementStart(20, "div", 12, 1);
      \u0275\u0275element(22, "span", 13)(23, "span", 13)(24, "span", 13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("--accent-primary", ctx.universActif().accent)("--accent-rgb", ctx.universActif().accentRgb)("--scene-bg", ctx.universActif().fond);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "programmes.eyebrow"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "univers." + ctx.universActif().id + ".label"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 16, "univers." + ctx.universActif().id + ".tagline"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.univers);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.chargement() ? 17 : ctx.aucunProgramme() ? 18 : 19);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invisible", ctx.chargement() || ctx.aucunProgramme());
    }
  }, dependencies: [CommonModule, SeanceCardComponent, TranslatePipe], styles: ["\n\n.scene[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  padding: 64px 48px 120px;\n  background:\n    radial-gradient(\n      circle at 12% -10%,\n      rgba(var(--accent-rgb), 0.16) 0%,\n      transparent 45%),\n    var(--scene-bg, var(--bg));\n  transition: background 0.7s ease;\n  overflow: hidden;\n}\n.voile-transition[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  pointer-events: none;\n  opacity: 0;\n}\n.entete[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 720px;\n  margin: 0 auto 56px;\n  text-align: center;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--accent-primary);\n  margin-bottom: 12px;\n  transition: color 0.5s ease;\n}\n.entete[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(48px, 7vw, 92px);\n  line-height: 0.95;\n  color: var(--text-primary);\n  letter-spacing: 1px;\n}\n.tagline[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 16px;\n  color: var(--text-secondary);\n}\n.onglets-univers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 32px;\n}\n.onglet-univers[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  border-radius: 999px;\n  border: 1.5px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  color: var(--text-secondary);\n  font-family: var(--font-body);\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.onglet-univers[_ngcontent-%COMP%]:hover {\n  border-color: var(--u-accent);\n  color: var(--text-primary);\n}\n.onglet-univers.actif[_ngcontent-%COMP%] {\n  background: var(--u-accent);\n  border-color: var(--u-accent);\n  color: #0a0a0a;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n}\n.matrice-conteneur[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.matrice[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 150px);\n  justify-content: center;\n  gap: 28px 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n@media (max-width: 1024px) {\n  .matrice[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, 130px);\n  }\n}\n@media (max-width: 720px) {\n  .scene[_ngcontent-%COMP%] {\n    padding: 48px 20px 100px;\n  }\n  .matrice[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, 110px);\n    gap: 22px 14px;\n  }\n}\n.etat-conteneur[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px 0;\n}\n.etat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n}\n.sentinelle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 56px 0 8px;\n}\n.sentinelle.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.point[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--accent-primary);\n  opacity: 0.5;\n  animation: _ngcontent-%COMP%_rebond 1.1s ease-in-out infinite;\n}\n.point[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.point[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n@keyframes _ngcontent-%COMP%_rebond {\n  0%, 80%, 100% {\n    transform: translateY(0);\n    opacity: 0.35;\n  }\n  40% {\n    transform: translateY(-8px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=programmes.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgrammesComponent, { className: "ProgrammesComponent" });
})();
export {
  ProgrammesComponent,
  UNIVERS
};
//# sourceMappingURL=chunk-26KUQRMQ.js.map
