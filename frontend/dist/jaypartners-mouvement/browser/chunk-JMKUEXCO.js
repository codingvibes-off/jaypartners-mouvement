import {
  RouterLink
} from "./chunk-LPH4TNPV.js";
import {
  IconComponent
} from "./chunk-XXXCYALE.js";
import "./chunk-I4QZ5BRR.js";
import {
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N2MMUZ74.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/faq/faq.component.ts
var _forTrack0 = ($index, $item) => $item.question;
function FaqComponent_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.reponse);
  }
}
function FaqComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275listener("click", function FaqComponent_For_12_Template_button_click_1_listener() {
      const \u0275$index_19_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.basculer(\u0275$index_19_r2));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275element(5, "app-icon", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, FaqComponent_For_12_Conditional_6_Template, 2, 1, "p", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_19_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ouvert", ctx_r2.ouvertIndex() === \u0275$index_19_r2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r2.ouvertIndex() === \u0275$index_19_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.question);
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 18);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.ouvertIndex() === \u0275$index_19_r2 ? 6 : -1);
  }
}
var FaqComponent = class _FaqComponent {
  ouvertIndex = signal(0);
  questions = [
    {
      question: "Comment fonctionne le site JayPartner's ?",
      reponse: "La page d'accueil te pr\xE9sente un catalogue de s\xE9ances organis\xE9 par cat\xE9gorie, un peu comme un catalogue de streaming. Tu parcoures les rang\xE9es, tu cliques sur une s\xE9ance pour voir son d\xE9tail, puis tu lances l'entra\xEEnement quand tu es pr\xEAt(e)."
    },
    {
      question: "Dois-je cr\xE9er un compte pour m'entra\xEEner ?",
      reponse: "Tu peux consulter le catalogue, la rubrique D\xE9couvrir et les Programmes sans compte. En revanche, pour valider tes s\xE9ances, gagner de l'XP et retrouver ton historique dans le Calendrier, il faut t'inscrire (bouton \xAB S'inscrire \xBB dans le menu) puis te connecter."
    },
    {
      question: "\xC0 quoi sert la page \xAB D\xE9couvrir \xBB ?",
      reponse: "C'est la biblioth\xE8que de tous les mouvements disponibles. Tu peux rechercher un mouvement par nom, filtrer par niveau (d\xE9butant, interm\xE9diaire, avanc\xE9) ou par muscle cibl\xE9 pour comprendre un exercice avant de le pratiquer."
    },
    {
      question: "\xC0 quoi sert la page \xAB Programmes \xBB ?",
      reponse: "Elle regroupe les s\xE9ances par univers (Force, Pilates, Hyrox, Athl\xE9tisme...). Choisis l'onglet de l'univers qui t'int\xE9resse pour voir toutes les s\xE9ances associ\xE9es."
    },
    {
      question: "Comment se d\xE9roule un entra\xEEnement ?",
      reponse: "Depuis le d\xE9tail d'une s\xE9ance, clique sur \xAB Commencer l'entra\xEEnement \xBB. Le site passe alors en mode plein \xE9cran, sans menu, pour te concentrer sur les mouvements. Une fois la s\xE9ance termin\xE9e, elle est enregistr\xE9e dans ton historique et tu gagnes de l'XP."
    },
    {
      question: "O\xF9 voir les s\xE9ances que j'ai d\xE9j\xE0 faites ?",
      reponse: "Dans \xAB Calendrier \xBB (visible une fois connect\xE9(e)). Il affiche un calendrier mensuel : les jours marqu\xE9s d'un point correspondent \xE0 des s\xE9ances valid\xE9es. Clique sur un jour pour voir le r\xE9capitulatif et l'XP gagn\xE9."
    },
    {
      question: "Comment contacter Jay ou suivre l'actu sur les r\xE9seaux ?",
      reponse: "Rends-toi sur la page Contact, ou utilise le bouton flottant en bas \xE0 droite de l'\xE9cran : tu y trouveras WhatsApp, Instagram, TikTok, YouTube, LinkedIn et Calendly pour r\xE9server un coaching."
    },
    {
      question: "J'ai oubli\xE9 mon mot de passe, ou un souci technique : que faire ?",
      reponse: "Le plus simple est de me contacter directement via WhatsApp ou Instagram depuis la page Contact : je te r\xE9ponds au plus vite pour d\xE9bloquer la situation."
    }
  ];
  basculer(index) {
    this.ouvertIndex.set(this.ouvertIndex() === index ? null : index);
  }
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 0, consts: [[1, "entete-faq"], [1, "badge"], [1, "accent-gold"], [1, "sous-titre"], [1, "liste-faq"], [1, "item-faq", 3, "ouvert"], [1, "cta-faq"], ["routerLink", "/contact", 1, "btn-primaire"], [1, "item-faq"], [1, "question-faq", 3, "click"], [1, "chevron-faq"], ["nom", "chevron-down", 3, "taille"], [1, "reponse-faq"]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "span", 1);
      \u0275\u0275text(2, "FAQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h1");
      \u0275\u0275text(4, "Comment utiliser");
      \u0275\u0275element(5, "br");
      \u0275\u0275elementStart(6, "span", 2);
      \u0275\u0275text(7, "le site ?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 3);
      \u0275\u0275text(9, " Toutes les r\xE9ponses pour t'y retrouver : catalogue, entra\xEEnements, compte et contact. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section", 4);
      \u0275\u0275repeaterCreate(11, FaqComponent_For_12_Template, 7, 6, "div", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "section", 6)(14, "p");
      \u0275\u0275text(15, "Une autre question ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 7);
      \u0275\u0275text(17, "Contacter Jay");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.questions);
    }
  }, dependencies: [RouterLink, IconComponent], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(var(--accent-rgb), 0.15);\n  color: var(--accent-primary);\n  border: 1px solid rgba(var(--accent-rgb), 0.3);\n  margin-bottom: 16px;\n}\n.accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n}\n.entete-faq[_ngcontent-%COMP%] {\n  padding: 96px 48px 48px;\n  background: var(--bg);\n  max-width: 640px;\n}\n.entete-faq[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(36px, 5vw, 64px);\n  line-height: 1.05;\n  margin-bottom: 20px;\n}\n.sous-titre[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  line-height: 1.6;\n}\n@media (max-width: 720px) {\n  .entete-faq[_ngcontent-%COMP%] {\n    padding: 48px 20px 32px;\n  }\n}\n.liste-faq[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 800px;\n  padding: 0 48px;\n  margin: 0 auto;\n}\n@media (max-width: 720px) {\n  .liste-faq[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n.item-faq[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  overflow: hidden;\n  transition: border-color var(--transition);\n}\n.item-faq.ouvert[_ngcontent-%COMP%] {\n  border-color: var(--accent-primary);\n}\n.question-faq[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  background: none;\n  border: none;\n  padding: 22px 24px;\n  color: var(--text-primary);\n  font-family: var(--font-body);\n  font-weight: 700;\n  font-size: 15px;\n  text-align: left;\n}\n.chevron-faq[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--text-tertiary);\n  transition: transform var(--transition), color var(--transition);\n  flex-shrink: 0;\n}\n.item-faq.ouvert[_ngcontent-%COMP%]   .chevron-faq[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: var(--accent-primary);\n}\n.reponse-faq[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  color: var(--text-secondary);\n  font-size: 15px;\n  line-height: 1.7;\n}\n.cta-faq[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 48px 100px;\n}\n.cta-faq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 720px) {\n  .cta-faq[_ngcontent-%COMP%] {\n    padding: 56px 20px 72px;\n  }\n}\n/*# sourceMappingURL=faq.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent" });
})();
export {
  FaqComponent
};
//# sourceMappingURL=chunk-JMKUEXCO.js.map
