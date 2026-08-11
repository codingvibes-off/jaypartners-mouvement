import {
  IconComponent
} from "./chunk-XXXCYALE.js";
import {
  CommonModule
} from "./chunk-I4QZ5BRR.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N2MMUZ74.js";

// src/app/shared/components/movement-card/movement-card.component.ts
function MovementCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.series, " s\xE9ries ");
  }
}
function MovementCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.repetitions, " ");
  }
}
function MovementCardComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mouvement.description);
  }
}
function MovementCardComponent_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 12);
    \u0275\u0275text(2, "Muscles secondaires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.mouvement.musclesSecondaires.join(", "));
  }
}
function MovementCardComponent_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 12);
    \u0275\u0275text(2, "Mat\xE9riel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.mouvement.materiel.join(", "));
  }
}
function MovementCardComponent_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 12);
    \u0275\u0275text(2, "R\xE9gression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.mouvement.regression);
  }
}
function MovementCardComponent_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 12);
    \u0275\u0275text(2, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.mouvement.progression);
  }
}
function MovementCardComponent_Conditional_13_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const erreur_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(erreur_r2);
  }
}
function MovementCardComponent_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Erreurs fr\xE9quentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, MovementCardComponent_Conditional_13_Conditional_8_For_5_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.mouvement.erreursFrequentes);
  }
}
function MovementCardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "video", 8);
    \u0275\u0275template(2, MovementCardComponent_Conditional_13_Conditional_2_Template, 2, 1, "p", 9);
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275template(4, MovementCardComponent_Conditional_13_Conditional_4_Template, 5, 1, "div")(5, MovementCardComponent_Conditional_13_Conditional_5_Template, 5, 1, "div")(6, MovementCardComponent_Conditional_13_Conditional_6_Template, 5, 1, "div")(7, MovementCardComponent_Conditional_13_Conditional_7_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MovementCardComponent_Conditional_13_Conditional_8_Template, 6, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.mouvement.videoUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mouvement.description ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.mouvement.musclesSecondaires == null ? null : ctx_r0.mouvement.musclesSecondaires.length) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.mouvement.materiel == null ? null : ctx_r0.mouvement.materiel.length) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mouvement.regression ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mouvement.progression ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.mouvement.erreursFrequentes == null ? null : ctx_r0.mouvement.erreursFrequentes.length) ? 8 : -1);
  }
}
var MovementCardComponent = class _MovementCardComponent {
  mouvement;
  ordre = 0;
  repetitions;
  series;
  detailsOuverts = false;
  basculerDetails() {
    this.detailsOuverts = !this.detailsOuverts;
  }
  static \u0275fac = function MovementCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovementCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementCardComponent, selectors: [["app-movement-card"]], inputs: { mouvement: "mouvement", ordre: "ordre", repetitions: "repetitions", series: "series" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 9, consts: [[1, "carte-mouvement"], [1, "entete", 3, "click"], [1, "numero"], [1, "infos"], [1, "meta"], [1, "chevron"], ["nom", "chevron-down", 3, "taille"], [1, "details"], ["controls", "", "preload", "none", 1, "lecteur-video", 3, "src"], [1, "description"], [1, "grille-infos"], [1, "erreurs"], [1, "label"]], template: function MovementCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function MovementCardComponent_Template_button_click_1_listener() {
        return ctx.basculerDetails();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "h4");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8);
      \u0275\u0275template(9, MovementCardComponent_Conditional_9_Template, 1, 1)(10, MovementCardComponent_Conditional_10_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "span", 5);
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, MovementCardComponent_Conditional_13_Template, 9, 7, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.ordre);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.mouvement.nom);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.mouvement.muscleprincipal, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.series ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.repetitions ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("ouvert", ctx.detailsOuverts);
      \u0275\u0275advance();
      \u0275\u0275property("taille", 16);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.detailsOuverts ? 13 : -1);
    }
  }, dependencies: [CommonModule, IconComponent], styles: ["\n\n.carte-mouvement[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.entete[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: transparent;\n  border: none;\n  color: var(--text-primary);\n  text-align: left;\n}\n.numero[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  color: var(--teal);\n  width: 28px;\n}\n.infos[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.infos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 15px;\n  font-weight: 700;\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  transition: transform 0.2s ease;\n}\n.chevron.ouvert[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.details[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n  border-top: 1px solid var(--border);\n}\n.lecteur-video[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 300px;\n  aspect-ratio: 9 / 16;\n  object-fit: cover;\n  border-radius: 8px;\n  margin: 14px auto;\n  background: #000;\n}\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.grille-infos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  margin-top: 12px;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gold);\n  font-weight: 700;\n}\n.erreurs[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.erreurs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  padding-left: 18px;\n  color: var(--text-secondary);\n  font-size: 13px;\n}\n/*# sourceMappingURL=movement-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementCardComponent, { className: "MovementCardComponent" });
})();

export {
  MovementCardComponent
};
//# sourceMappingURL=chunk-SBH2C2W7.js.map
