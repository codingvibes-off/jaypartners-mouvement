import {
  LocalisePipe
} from "./chunk-YPSBE6FA.js";
import {
  DomSanitizer
} from "./chunk-EZLIDOO3.js";
import {
  IconComponent
} from "./chunk-Q4RUTCVR.js";
import {
  LangService
} from "./chunk-YD45A6VG.js";
import {
  environment
} from "./chunk-MHOTHGQB.js";
import {
  CommonModule
} from "./chunk-U75DGTTD.js";
import {
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M2LWS2MJ.js";

// src/app/shared/pipes/localise-liste.pipe.ts
var LocaliseListePipe = class _LocaliseListePipe {
  transform(fr, en, langueCourante) {
    if (langueCourante === "en" && en && en.length > 0)
      return en;
    return fr || [];
  }
  static \u0275fac = function LocaliseListePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocaliseListePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "localiseListe", type: _LocaliseListePipe, pure: true, standalone: true });
};

// src/app/shared/components/movement-card/movement-card.component.ts
function MovementCardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.series, " s\xE9ries ");
  }
}
function MovementCardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.repetitions, " ");
  }
}
function MovementCardComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "iframe", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.urlIframeCloudflare, \u0275\u0275sanitizeResourceUrl);
  }
}
function MovementCardComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.mouvement.videoUrl, \u0275\u0275sanitizeUrl);
  }
}
function MovementCardComponent_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "localise");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, ctx_r0.mouvement.description, ctx_r0.mouvement.descriptionEn, ctx_r0.lang.langue()));
  }
}
function MovementCardComponent_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "localiseListe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "movementCard.musclesSecondaires"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 4, ctx_r0.mouvement.musclesSecondaires, ctx_r0.mouvement.musclesSecondairesEn, ctx_r0.lang.langue()).join(", "));
  }
}
function MovementCardComponent_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "localiseListe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "movementCard.materiel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 4, ctx_r0.mouvement.materiel, ctx_r0.mouvement.materielEn, ctx_r0.lang.langue()).join(", "));
  }
}
function MovementCardComponent_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "localise");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "movementCard.regression"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 4, ctx_r0.mouvement.regression, ctx_r0.mouvement.regressionEn, ctx_r0.lang.langue()));
  }
}
function MovementCardComponent_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "localise");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "movementCard.progression"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 4, ctx_r0.mouvement.progression, ctx_r0.mouvement.progressionEn, ctx_r0.lang.langue()));
  }
}
function MovementCardComponent_Conditional_15_Conditional_9_For_6_Template(rf, ctx) {
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
function MovementCardComponent_Conditional_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul");
    \u0275\u0275repeaterCreate(5, MovementCardComponent_Conditional_15_Conditional_9_For_6_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(7, "localiseListe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "movementCard.erreursFrequentes"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(7, 3, ctx_r0.mouvement.erreursFrequentes, ctx_r0.mouvement.erreursFrequentesEn, ctx_r0.lang.langue()));
  }
}
function MovementCardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, MovementCardComponent_Conditional_15_Conditional_1_Template, 2, 1, "div", 8)(2, MovementCardComponent_Conditional_15_Conditional_2_Template, 1, 1, "video", 9)(3, MovementCardComponent_Conditional_15_Conditional_3_Template, 3, 5, "p", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275template(5, MovementCardComponent_Conditional_15_Conditional_5_Template, 7, 8, "div")(6, MovementCardComponent_Conditional_15_Conditional_6_Template, 7, 8, "div")(7, MovementCardComponent_Conditional_15_Conditional_7_Template, 7, 8, "div")(8, MovementCardComponent_Conditional_15_Conditional_8_Template, 7, 8, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MovementCardComponent_Conditional_15_Conditional_9_Template, 8, 7, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.videoCloudflarePrete ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.mouvement.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.mouvement.musclesSecondaires == null ? null : ctx_r0.mouvement.musclesSecondaires.length) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.mouvement.materiel == null ? null : ctx_r0.mouvement.materiel.length) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mouvement.regression ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mouvement.progression ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.mouvement.erreursFrequentes == null ? null : ctx_r0.mouvement.erreursFrequentes.length) ? 9 : -1);
  }
}
var MovementCardComponent = class _MovementCardComponent {
  sanitizer;
  lang;
  mouvement;
  ordre = 0;
  repetitions;
  series;
  detailsOuverts = false;
  constructor(sanitizer, lang) {
    this.sanitizer = sanitizer;
    this.lang = lang;
  }
  basculerDetails() {
    this.detailsOuverts = !this.detailsOuverts;
  }
  get videoCloudflarePrete() {
    return !!this.mouvement.cfStreamUid && this.mouvement.cfStreamStatus === "ready";
  }
  get urlIframeCloudflare() {
    const url = `https://${environment.cfStreamCustomerCode}.cloudflarestream.com/${this.mouvement.cfStreamUid}/iframe`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static \u0275fac = function MovementCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovementCardComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementCardComponent, selectors: [["app-movement-card"]], inputs: { mouvement: "mouvement", ordre: "ordre", repetitions: "repetitions", series: "series" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 17, consts: [[1, "carte-mouvement"], [1, "entete", 3, "click"], [1, "numero"], [1, "infos"], [1, "meta"], [1, "chevron"], ["nom", "chevron-down", 3, "taille"], [1, "details"], [1, "conteneur-video"], ["controls", "", "preload", "none", 1, "lecteur-video", 3, "src"], [1, "description"], [1, "grille-infos"], [1, "erreurs"], ["loading", "lazy", "allow", "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;", "allowfullscreen", "", 1, "lecteur-video-cf", 3, "src"], [1, "label"]], template: function MovementCardComponent_Template(rf, ctx) {
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
      \u0275\u0275pipe(7, "localise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "localise");
      \u0275\u0275template(11, MovementCardComponent_Conditional_11_Template, 1, 1)(12, MovementCardComponent_Conditional_12_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "span", 5);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, MovementCardComponent_Conditional_15_Template, 10, 7, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.ordre);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(7, 9, ctx.mouvement.nom, ctx.mouvement.nomEn, ctx.lang.langue()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(10, 13, ctx.mouvement.muscleprincipal, ctx.mouvement.muscleprincipalEn, ctx.lang.langue()), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.series ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.repetitions ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("ouvert", ctx.detailsOuverts);
      \u0275\u0275advance();
      \u0275\u0275property("taille", 16);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.detailsOuverts ? 15 : -1);
    }
  }, dependencies: [CommonModule, IconComponent, TranslatePipe, LocalisePipe, LocaliseListePipe], styles: ["\n\n.carte-mouvement[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.entete[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: transparent;\n  border: none;\n  color: var(--text-primary);\n  text-align: left;\n}\n.numero[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  color: var(--teal);\n  width: 28px;\n}\n.infos[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.infos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 15px;\n  font-weight: 700;\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  transition: transform 0.2s ease;\n}\n.chevron.ouvert[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.details[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n  border-top: 1px solid var(--border);\n}\n.lecteur-video[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 300px;\n  aspect-ratio: 9 / 16;\n  object-fit: cover;\n  border-radius: 8px;\n  margin: 14px auto;\n  background: #000;\n}\n.conteneur-video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 300px;\n  aspect-ratio: 9 / 16;\n  border-radius: 8px;\n  margin: 14px auto;\n  overflow: hidden;\n  background: #000;\n}\n.lecteur-video-cf[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.grille-infos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  margin-top: 12px;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gold);\n  font-weight: 700;\n}\n.erreurs[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.erreurs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  padding-left: 18px;\n  color: var(--text-secondary);\n  font-size: 13px;\n}\n/*# sourceMappingURL=movement-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementCardComponent, { className: "MovementCardComponent" });
})();

export {
  MovementCardComponent
};
//# sourceMappingURL=chunk-KDEX25QI.js.map
