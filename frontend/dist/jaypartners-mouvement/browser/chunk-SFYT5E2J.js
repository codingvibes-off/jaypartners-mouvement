import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JIRDEA54.js";
import {
  MovementCardComponent
} from "./chunk-YCXPR2AA.js";
import {
  NavigationEnd,
  Router
} from "./chunk-I253Q7U2.js";
import "./chunk-JNSSE4B5.js";
import {
  CommonModule,
  HttpClient,
  computed,
  environment,
  filter,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z3NPIKQV.js";
import "./chunk-TXDUYLVM.js";

// src/app/core/services/mouvement.service.ts
var MouvementService = class _MouvementService {
  http;
  baseUrl = `${environment.apiUrl}/mouvements`;
  constructor(http) {
    this.http = http;
  }
  obtenirTous() {
    return this.http.get(this.baseUrl);
  }
  static \u0275fac = function MouvementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MouvementService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MouvementService, factory: _MouvementService.\u0275fac, providedIn: "root" });
};

// src/app/features/decouvrir/decouvrir.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DecouvrirComponent_For_20_Template(rf, ctx) {
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
function DecouvrirComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DecouvrirComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reinitialiserFiltres());
    });
    \u0275\u0275text(1, "R\xE9initialiser");
    \u0275\u0275elementEnd();
  }
}
function DecouvrirComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "\u23F3 Chargement du catalogue...");
    \u0275\u0275elementEnd();
  }
}
function DecouvrirComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "\u{1F4ED} Aucun mouvement ne correspond \xE0 ces filtres.");
    \u0275\u0275elementEnd();
  }
}
function DecouvrirComponent_Conditional_25_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-movement-card", 15);
  }
  if (rf & 2) {
    const mouvement_r4 = ctx.$implicit;
    const \u0275$index_54_r5 = ctx.$index;
    \u0275\u0275property("mouvement", mouvement_r4)("ordre", \u0275$index_54_r5 + 1);
  }
}
function DecouvrirComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, DecouvrirComponent_Conditional_25_For_3_Template, 1, 2, "app-movement-card", 15, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.mouvementsFiltres().length, " r\xE9sultat(s)");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.mouvementsFiltres());
  }
}
var DecouvrirComponent = class _DecouvrirComponent {
  mouvementService;
  router;
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
  constructor(mouvementService, router) {
    this.mouvementService = mouvementService;
    this.router = router;
  }
  ngOnInit() {
    this.chargerMouvements();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.chargerMouvements();
    });
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
    return new (__ngFactoryType__ || _DecouvrirComponent)(\u0275\u0275directiveInject(MouvementService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DecouvrirComponent, selectors: [["app-decouvrir"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 6, consts: [[1, "entete-decouvrir"], [1, "sous-titre"], [1, "filtres-decouvrir"], ["type", "search", "placeholder", "Rechercher un mouvement...", 1, "champ-recherche", 3, "ngModelChange", "ngModel"], [1, "select-filtre", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "DEBUTANT"], ["value", "INTERMEDIAIRE"], ["value", "AVANCE"], [3, "value"], [1, "btn-secondaire"], [1, "liste-decouvrir"], [1, "etat"], [1, "btn-secondaire", 3, "click"], [1, "compteur-resultats"], [3, "mouvement", "ordre"]], template: function DecouvrirComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "D\xE9couvrir les mouvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "section", 2)(6, "input", 3);
      \u0275\u0275listener("ngModelChange", function DecouvrirComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.recherche.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "select", 4);
      \u0275\u0275listener("ngModelChange", function DecouvrirComponent_Template_select_ngModelChange_7_listener($event) {
        return ctx.niveauFiltre.set($event);
      });
      \u0275\u0275elementStart(8, "option", 5);
      \u0275\u0275text(9, "Tous les niveaux");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 6);
      \u0275\u0275text(11, "D\xE9butant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "Interm\xE9diaire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Avanc\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "select", 4);
      \u0275\u0275listener("ngModelChange", function DecouvrirComponent_Template_select_ngModelChange_16_listener($event) {
        return ctx.muscleFiltre.set($event);
      });
      \u0275\u0275elementStart(17, "option", 5);
      \u0275\u0275text(18, "Tous les muscles");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(19, DecouvrirComponent_For_20_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, DecouvrirComponent_Conditional_21_Template, 2, 0, "button", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "main", 11);
      \u0275\u0275template(23, DecouvrirComponent_Conditional_23_Template, 2, 0, "p", 12)(24, DecouvrirComponent_Conditional_24_Template, 2, 0, "p", 12)(25, DecouvrirComponent_Conditional_25_Template, 4, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.mouvements().length, " mouvements au catalogue \u2014 filtre par niveau, muscle ou recherche un nom. ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.recherche());
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.niveauFiltre());
      \u0275\u0275advance(9);
      \u0275\u0275property("ngModel", ctx.muscleFiltre());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.musclesDisponibles());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.recherche() || ctx.niveauFiltre() || ctx.muscleFiltre() ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.chargement() ? 23 : ctx.mouvementsFiltres().length === 0 ? 24 : 25);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MovementCardComponent], styles: ["\n\n.entete-decouvrir[_ngcontent-%COMP%] {\n  padding: 64px 48px 32px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .entete-decouvrir[_ngcontent-%COMP%] {\n    padding: 40px 20px 24px;\n  }\n}\n.entete-decouvrir[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 4vw, 48px);\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.sous-titre[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n}\n.filtres-decouvrir[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 0 48px 32px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .filtres-decouvrir[_ngcontent-%COMP%] {\n    padding: 0 20px 24px;\n  }\n}\n.champ-recherche[_ngcontent-%COMP%] {\n  flex: 1 1 260px;\n  background: var(--bg-elevated);\n  border: 2px solid var(--border);\n  color: var(--text-primary);\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: var(--font-body);\n}\n.champ-recherche[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-primary);\n}\n.select-filtre[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 2px solid var(--border);\n  color: var(--text-primary);\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: var(--font-body);\n  cursor: pointer;\n}\n.select-filtre[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-secondary);\n}\n.liste-decouvrir[_ngcontent-%COMP%] {\n  max-width: 900px;\n  padding: 0 48px 80px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .liste-decouvrir[_ngcontent-%COMP%] {\n    padding: 0 20px 60px;\n  }\n}\n.etat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  text-align: center;\n  padding: 60px 0;\n}\n.compteur-resultats[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  font-size: 13px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=decouvrir.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DecouvrirComponent, { className: "DecouvrirComponent" });
})();
export {
  DecouvrirComponent
};
//# sourceMappingURL=chunk-SFYT5E2J.js.map
