import {
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M2LWS2MJ.js";
import "./chunk-SNAKS5WD.js";

// src/app/features/contact/contact.component.ts
var _forTrack0 = ($index, $item) => $item.nom;
function ContactComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 11);
    \u0275\u0275text(13, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reseau_r1 = ctx.$implicit;
    \u0275\u0275property("href", reseau_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reseau_r1.icone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reseau_r1.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reseau_r1.handle || \u0275\u0275pipeBind1(8, 5, reseau_r1.handleKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, reseau_r1.descriptionKey));
  }
}
var ContactComponent = class _ContactComponent {
  reseaux = [
    {
      nom: "WhatsApp",
      handleKey: "contact.whatsappHandle",
      descriptionKey: "contact.whatsappDescription",
      href: "https://chat.whatsapp.com/JjnHgQQxVQMF5olJZFvjlc?s=cl&p=i&ilr=4&amv=2",
      icone: "\u{1F4AC}"
    },
    {
      nom: "Instagram",
      handle: "@jaypartner.s",
      descriptionKey: "contact.instagramDescription",
      href: "https://www.instagram.com/jaypartner.s/",
      icone: "\u{1F4F8}"
    },
    {
      nom: "TikTok",
      handle: "@jaypartner.s",
      descriptionKey: "contact.tiktokDescription",
      href: "https://www.tiktok.com/@jaypartner.s",
      icone: "\u{1F3B5}"
    },
    {
      nom: "YouTube",
      handle: "@JAYPARTNERS",
      descriptionKey: "contact.youtubeDescription",
      href: "https://www.youtube.com/@JAYPARTNERS",
      icone: "\u25B6\uFE0F"
    },
    {
      nom: "LinkedIn",
      handle: "Justine Pegas",
      descriptionKey: "contact.linkedinDescription",
      href: "https://www.linkedin.com/in/justine-pegas-3028461b7/",
      icone: "\u{1F4BC}"
    },
    {
      nom: "Calendly",
      handleKey: "contact.calendlyHandle",
      descriptionKey: "contact.calendlyDescription",
      href: "https://calendly.com/jaypartners-coach",
      icone: "\u{1F4C5}"
    }
  ];
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 9, consts: [[1, "entete-contact"], [1, "badge"], [3, "innerHTML"], [1, "sous-titre"], [1, "grille-reseaux"], ["target", "_blank", "rel", "noopener", 1, "carte-reseau", 3, "href"], [1, "icone-reseau"], [1, "infos-reseau"], [1, "nom-reseau"], [1, "handle-reseau"], [1, "description-reseau"], [1, "fleche-reseau"]], template: function ContactComponent_Template(rf, ctx) {
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
      \u0275\u0275repeaterCreate(10, ContactComponent_For_11_Template, 14, 9, "a", 5, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "contact.badge"));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 5, "contact.titre"), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "contact.sousTitre"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.reseaux);
    }
  }, dependencies: [TranslatePipe], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(var(--accent-rgb), 0.15);\n  color: var(--accent-primary);\n  border: 1px solid rgba(var(--accent-rgb), 0.3);\n  margin-bottom: 16px;\n}\n.accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n}\n.entete-contact[_ngcontent-%COMP%] {\n  padding: 96px 48px 48px;\n  background: var(--bg);\n  max-width: 640px;\n}\n.entete-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(36px, 5vw, 64px);\n  line-height: 1.05;\n  margin-bottom: 20px;\n}\n.sous-titre[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  line-height: 1.6;\n}\n@media (max-width: 720px) {\n  .entete-contact[_ngcontent-%COMP%] {\n    padding: 48px 20px 32px;\n  }\n}\n.grille-reseaux[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  padding: 0 48px 100px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n@media (max-width: 900px) {\n  .grille-reseaux[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 20px 72px;\n  }\n}\n.carte-reseau[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 28px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  transition: all var(--transition);\n}\n.carte-reseau[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: var(--accent-primary);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);\n}\n.icone-reseau[_ngcontent-%COMP%] {\n  font-size: 34px;\n  flex-shrink: 0;\n}\n.infos-reseau[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nom-reseau[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 20px;\n  letter-spacing: 0.5px;\n  color: var(--text-primary);\n}\n.handle-reseau[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: var(--accent-primary);\n  font-weight: 700;\n  margin-top: 2px;\n}\n.description-reseau[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin-top: 10px;\n  line-height: 1.5;\n}\n.fleche-reseau[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-tertiary);\n  transition: transform var(--transition), color var(--transition);\n  flex-shrink: 0;\n}\n.carte-reseau[_ngcontent-%COMP%]:hover   .fleche-reseau[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  color: var(--accent-primary);\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent" });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-AGWDR6OW.js.map
