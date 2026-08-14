import {
  RouterLink
} from "./chunk-LT5XQBJD.js";
import "./chunk-EZLIDOO3.js";
import {
  IconComponent
} from "./chunk-Q4RUTCVR.js";
import "./chunk-U75DGTTD.js";
import {
  TranslatePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M2LWS2MJ.js";
import "./chunk-SNAKS5WD.js";

// src/app/features/faq/faq.component.ts
var _forTrack0 = ($index, $item) => $item.question;
function FaqComponent_For_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r4.reponse));
  }
}
function FaqComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275listener("click", function FaqComponent_For_11_Template_button_click_1_listener() {
      const \u0275$index_16_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.basculer(\u0275$index_16_r2));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275element(6, "app-icon", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, FaqComponent_For_11_Conditional_7_Template, 3, 3, "p", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_16_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ouvert", ctx_r2.ouvertIndex() === \u0275$index_16_r2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r2.ouvertIndex() === \u0275$index_16_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, item_r4.question));
    \u0275\u0275advance(3);
    \u0275\u0275property("taille", 18);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.ouvertIndex() === \u0275$index_16_r2 ? 7 : -1);
  }
}
var FaqComponent = class _FaqComponent {
  ouvertIndex = signal(0);
  questions = [
    { question: "faq.q1.question", reponse: "faq.q1.reponse" },
    { question: "faq.q2.question", reponse: "faq.q2.reponse" },
    { question: "faq.q3.question", reponse: "faq.q3.reponse" },
    { question: "faq.q4.question", reponse: "faq.q4.reponse" },
    { question: "faq.q5.question", reponse: "faq.q5.reponse" },
    { question: "faq.q6.question", reponse: "faq.q6.reponse" },
    { question: "faq.q7.question", reponse: "faq.q7.reponse" },
    { question: "faq.q8.question", reponse: "faq.q8.reponse" }
  ];
  basculer(index) {
    this.ouvertIndex.set(this.ouvertIndex() === index ? null : index);
  }
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 15, consts: [[1, "entete-faq"], [1, "badge"], [3, "innerHTML"], [1, "sous-titre"], [1, "liste-faq"], [1, "item-faq", 3, "ouvert"], [1, "cta-faq"], ["routerLink", "/contact", 1, "btn-primaire"], [1, "item-faq"], [1, "question-faq", 3, "click"], [1, "chevron-faq"], ["nom", "chevron-down", 3, "taille"], [1, "reponse-faq"]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "h1", 2);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 4);
      \u0275\u0275repeaterCreate(10, FaqComponent_For_11_Template, 8, 8, "div", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "section", 6)(13, "p");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 7);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "faq.badge"));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 7, "faq.titre"), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, "faq.sousTitre"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.questions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, "faq.autreQuestion"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, "faq.contacterJay"));
    }
  }, dependencies: [RouterLink, IconComponent, TranslatePipe], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(var(--accent-rgb), 0.15);\n  color: var(--accent-primary);\n  border: 1px solid rgba(var(--accent-rgb), 0.3);\n  margin-bottom: 16px;\n}\n.accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n}\n.entete-faq[_ngcontent-%COMP%] {\n  padding: 96px 48px 48px;\n  background: var(--bg);\n  max-width: 640px;\n}\n.entete-faq[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(36px, 5vw, 64px);\n  line-height: 1.05;\n  margin-bottom: 20px;\n}\n.sous-titre[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  line-height: 1.6;\n}\n@media (max-width: 720px) {\n  .entete-faq[_ngcontent-%COMP%] {\n    padding: 48px 20px 32px;\n  }\n}\n.liste-faq[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 800px;\n  padding: 0 48px;\n  margin: 0 auto;\n}\n@media (max-width: 720px) {\n  .liste-faq[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n.item-faq[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  overflow: hidden;\n  transition: border-color var(--transition);\n}\n.item-faq.ouvert[_ngcontent-%COMP%] {\n  border-color: var(--accent-primary);\n}\n.question-faq[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  background: none;\n  border: none;\n  padding: 22px 24px;\n  color: var(--text-primary);\n  font-family: var(--font-body);\n  font-weight: 700;\n  font-size: 15px;\n  text-align: left;\n}\n.chevron-faq[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--text-tertiary);\n  transition: transform var(--transition), color var(--transition);\n  flex-shrink: 0;\n}\n.item-faq.ouvert[_ngcontent-%COMP%]   .chevron-faq[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: var(--accent-primary);\n}\n.reponse-faq[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  color: var(--text-secondary);\n  font-size: 15px;\n  line-height: 1.7;\n}\n.cta-faq[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 48px 100px;\n}\n.cta-faq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 720px) {\n  .cta-faq[_ngcontent-%COMP%] {\n    padding: 56px 20px 72px;\n  }\n}\n/*# sourceMappingURL=faq.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent" });
})();
export {
  FaqComponent
};
//# sourceMappingURL=chunk-F46S47JQ.js.map
