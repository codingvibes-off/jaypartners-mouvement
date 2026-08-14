import {
  MouvementService
} from "./chunk-MUWTGGQF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-C2L7D3CQ.js";
import {
  MovementCardComponent
} from "./chunk-KDEX25QI.js";
import "./chunk-YPSBE6FA.js";
import "./chunk-EZLIDOO3.js";
import "./chunk-Q4RUTCVR.js";
import "./chunk-YD45A6VG.js";
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M2LWS2MJ.js";
import "./chunk-SNAKS5WD.js";

// src/app/features/decouvrir/decouvrir.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ({ n: a0 });
function DecouvrirComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const muscle_r1 = ctx.$implicit;
    \u0275\u0275property("value", muscle_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(muscle_r1);
  }
}
function DecouvrirComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DecouvrirComponent_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reinitialiserFiltres());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "decouvrir.reinitialiser"));
  }
}
function DecouvrirComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "decouvrir.chargement"));
  }
}
function DecouvrirComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "decouvrir.aucunResultat"));
  }
}
function DecouvrirComponent_Conditional_33_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-movement-card", 15);
  }
  if (rf & 2) {
    const mouvement_r4 = ctx.$implicit;
    const \u0275$index_66_r5 = ctx.$index;
    \u0275\u0275property("mouvement", mouvement_r4)("ordre", \u0275$index_66_r5 + 1);
  }
}
function DecouvrirComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, DecouvrirComponent_Conditional_33_For_4_Template, 1, 2, "app-movement-card", 15, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "decouvrir.resultats", \u0275\u0275pureFunction1(4, _c0, ctx_r2.mouvementsFiltres().length)));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.mouvementsFiltres());
  }
}
var DecouvrirComponent = class _DecouvrirComponent {
  mouvementService;
  mouvements = signal([]);
  chargement = signal(true);
  recherche = signal("");
  niveauFiltre = signal("");
  muscleFiltre = signal("");
  musclesDisponibles = computed(() => {
    const muscles = /* @__PURE__ */ new Set();
    for (const m of this.mouvements()) {
      if (m.muscleprincipal)
        muscles.add(m.muscleprincipal);
    }
    return Array.from(muscles).sort((a, b) => a.localeCompare(b));
  });
  mouvementsFiltres = computed(() => {
    const recherche = this.recherche().trim().toLowerCase();
    const niveau = this.niveauFiltre();
    const muscle = this.muscleFiltre();
    return this.mouvements().filter((m) => {
      if (recherche && !m.nom.toLowerCase().includes(recherche))
        return false;
      if (niveau && m.niveau !== niveau)
        return false;
      if (muscle && m.muscleprincipal !== muscle)
        return false;
      return true;
    });
  });
  constructor(mouvementService) {
    this.mouvementService = mouvementService;
  }
  ngOnInit() {
    this.chargerMouvements();
  }
  chargerMouvements() {
    this.chargement.set(true);
    this.mouvementService.obtenirTous().subscribe({
      next: (mouvements) => {
        this.mouvements.set(mouvements);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false)
    });
  }
  reinitialiserFiltres() {
    this.recherche.set("");
    this.niveauFiltre.set("");
    this.muscleFiltre.set("");
  }
  static \u0275fac = function DecouvrirComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DecouvrirComponent)(\u0275\u0275directiveInject(MouvementService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DecouvrirComponent, selectors: [["app-decouvrir"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 32, consts: [[1, "entete-decouvrir"], [1, "sous-titre"], [1, "filtres-decouvrir"], ["type", "search", 1, "champ-recherche", 3, "ngModelChange", "placeholder", "ngModel"], [1, "select-filtre", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "DEBUTANT"], ["value", "INTERMEDIAIRE"], ["value", "AVANCE"], [3, "value"], [1, "btn-secondaire"], [1, "liste-decouvrir"], [1, "etat"], [1, "btn-secondaire", 3, "click"], [1, "compteur-resultats"], [3, "mouvement", "ordre"]], template: function DecouvrirComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 1);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "section", 2)(8, "input", 3);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("ngModelChange", function DecouvrirComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.recherche.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 4);
      \u0275\u0275listener("ngModelChange", function DecouvrirComponent_Template_select_ngModelChange_10_listener($event) {
        return ctx.niveauFiltre.set($event);
      });
      \u0275\u0275elementStart(11, "option", 5);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 6);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 7);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 8);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "select", 4);
      \u0275\u0275listener("ngModelChange", function DecouvrirComponent_Template_select_ngModelChange_23_listener($event) {
        return ctx.muscleFiltre.set($event);
      });
      \u0275\u0275elementStart(24, "option", 5);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(27, DecouvrirComponent_For_28_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, DecouvrirComponent_Conditional_29_Template, 3, 3, "button", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "main", 11);
      \u0275\u0275template(31, DecouvrirComponent_Conditional_31_Template, 3, 3, "p", 12)(32, DecouvrirComponent_Conditional_32_Template, 3, 3, "p", 12)(33, DecouvrirComponent_Conditional_33_Template, 5, 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 13, "decouvrir.titre"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 15, "decouvrir.sousTitre", \u0275\u0275pureFunction1(30, _c0, ctx.mouvements().length)), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 18, "decouvrir.recherche"))("ngModel", ctx.recherche());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.niveauFiltre());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, "decouvrir.tousLesNiveaux"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 22, "niveau.DEBUTANT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "niveau.INTERMEDIAIRE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 26, "niveau.AVANCE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.muscleFiltre());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "decouvrir.tousLesMuscles"));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.musclesDisponibles());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.recherche() || ctx.niveauFiltre() || ctx.muscleFiltre() ? 29 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.chargement() ? 31 : ctx.mouvementsFiltres().length === 0 ? 32 : 33);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MovementCardComponent, TranslatePipe], styles: ["\n\n.entete-decouvrir[_ngcontent-%COMP%] {\n  padding: 64px 48px 32px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .entete-decouvrir[_ngcontent-%COMP%] {\n    padding: 40px 20px 24px;\n  }\n}\n.entete-decouvrir[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 4vw, 48px);\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.sous-titre[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n}\n.filtres-decouvrir[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 0 48px 32px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .filtres-decouvrir[_ngcontent-%COMP%] {\n    padding: 0 20px 24px;\n  }\n}\n.champ-recherche[_ngcontent-%COMP%] {\n  flex: 1 1 260px;\n  background: var(--bg-elevated);\n  border: 2px solid var(--border);\n  color: var(--text-primary);\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: var(--font-body);\n}\n.champ-recherche[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-primary);\n}\n.select-filtre[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 2px solid var(--border);\n  color: var(--text-primary);\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: var(--font-body);\n  cursor: pointer;\n}\n.select-filtre[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-secondary);\n}\n.liste-decouvrir[_ngcontent-%COMP%] {\n  max-width: 900px;\n  padding: 0 48px 80px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .liste-decouvrir[_ngcontent-%COMP%] {\n    padding: 0 20px 60px;\n  }\n}\n.etat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  text-align: center;\n  padding: 60px 0;\n}\n.compteur-resultats[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  font-size: 13px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=decouvrir.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DecouvrirComponent, { className: "DecouvrirComponent" });
})();
export {
  DecouvrirComponent
};
//# sourceMappingURL=chunk-7E6TBPAW.js.map
