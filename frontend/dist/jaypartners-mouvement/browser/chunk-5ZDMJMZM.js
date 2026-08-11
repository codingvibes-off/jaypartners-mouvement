import {
  ScrollTrigger
} from "./chunk-CEUFYD57.js";
import {
  gsapWithCSS
} from "./chunk-VNIDSO3Z.js";
import {
  SeanceService
} from "./chunk-GSNOB2C4.js";
import {
  NavigationEnd,
  Router,
  RouterLink
} from "./chunk-I253Q7U2.js";
import {
  IconComponent
} from "./chunk-JNSSE4B5.js";
import {
  CommonModule,
  TitleCasePipe,
  computed,
  filter,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z3NPIKQV.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/components/seance-card/seance-card.component.ts
var _c0 = (a0) => ["/seance", a0];
function SeanceCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.rang);
  }
}
function SeanceCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.seance.titre.charAt(0));
  }
}
function SeanceCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "video", 21);
    \u0275\u0275listener("error", function SeanceCardComponent_Conditional_5_Template_video_error_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onErreurVideo());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.videoApercu(), \u0275\u0275sanitizeUrl);
  }
}
function SeanceCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Top 10");
    \u0275\u0275elementEnd();
  }
}
function SeanceCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Nouveau");
    \u0275\u0275elementEnd();
  }
}
function SeanceCardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.seance.categorie);
  }
}
function SeanceCardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "circle", 23)(3, "path", 24);
    \u0275\u0275elementEnd()();
  }
}
function SeanceCardComponent_Conditional_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.seance.categorie);
  }
}
function SeanceCardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 25)(2, "span", 26);
    \u0275\u0275element(3, "app-icon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275element(5, "app-icon", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SeanceCardComponent_Conditional_23_Conditional_11_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("taille", 13);
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 13);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.seance.genre == null ? null : ctx_r0.seance.genre.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.seance.genre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.seance.dureeMin, " min");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.seance.categorie ? 11 : -1);
  }
}
function SeanceCardComponent_Conditional_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.seance.description);
  }
}
function SeanceCardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SeanceCardComponent_Conditional_24_Conditional_0_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(1, "div", 20)(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.seance.description ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.seance.genre == null ? null : ctx_r0.seance.genre.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.seance.genre);
  }
}
var DELAI_SURVOL_MS = 500;
var JOURS_NOUVEAU = 30;
var SeanceCardComponent = class _SeanceCardComponent {
  seanceService;
  seance;
  rang;
  estTop10 = false;
  survole = signal(false);
  videoApercu = signal(null);
  videoEnErreur = signal(false);
  minuteur;
  constructor(seanceService) {
    this.seanceService = seanceService;
  }
  get estNouveau() {
    if (!this.seance.createdAt)
      return false;
    const age = Date.now() - new Date(this.seance.createdAt).getTime();
    return age <= JOURS_NOUVEAU * 24 * 60 * 60 * 1e3;
  }
  onSurvolEntree() {
    clearTimeout(this.minuteur);
    this.minuteur = setTimeout(() => {
      this.survole.set(true);
      this.chargerApercuVideo();
    }, DELAI_SURVOL_MS);
  }
  onSurvolSortie() {
    clearTimeout(this.minuteur);
    this.survole.set(false);
  }
  onErreurVideo() {
    this.videoEnErreur.set(true);
  }
  ngOnDestroy() {
    clearTimeout(this.minuteur);
  }
  chargerApercuVideo() {
    if (this.videoApercu() || this.videoEnErreur())
      return;
    this.seanceService.obtenirDetail(this.seance.id).subscribe({
      next: (detail) => {
        const premiereVideo = detail.mouvements?.[0]?.mouvement?.videoUrl;
        if (premiereVideo)
          this.videoApercu.set(premiereVideo);
      },
      error: () => this.videoEnErreur.set(true)
    });
  }
  static \u0275fac = function SeanceCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeanceCardComponent)(\u0275\u0275directiveInject(SeanceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SeanceCardComponent, selectors: [["app-seance-card"]], inputs: { seance: "seance", rang: "rang", estTop10: "estTop10" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 24, consts: [[1, "carte-conteneur", 3, "mouseenter", "mouseleave"], ["aria-hidden", "true", 1, "rang-numero"], [1, "carte", 3, "routerLink"], [1, "vignette"], ["aria-hidden", "true", 1, "vignette-monogramme"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", 1, "video-apercu", 3, "src"], [1, "gradient-overlay"], [1, "badge-ruban", "badge-top10"], [1, "badge-ruban", "badge-nouveau"], [1, "overlay"], [1, "badges-gauche"], [1, "niveau-badge"], [1, "categorie-badge"], [1, "badges-droite"], [1, "duree-badge"], ["nom", "clock", 3, "taille"], [1, "play-btn"], [1, "contenu"], [1, "titre"], [1, "apercu-etendu"], [1, "meta"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", 1, "video-apercu", 3, "error", "src"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none"], ["cx", "16", "cy", "16", "r", "15", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 10l10 6-10 6z", "fill", "currentColor"], [1, "apercu-actions"], ["title", "Voir la s\xE9ance", 1, "btn-rond", "btn-rond-primaire"], ["nom", "play", 3, "taille"], ["title", "Plus d'infos", 1, "btn-rond"], ["nom", "info", 3, "taille"], [1, "apercu-meta"], [1, "genre"], [1, "apercu-duree"], [1, "apercu-categorie"], [1, "description"]], template: function SeanceCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("mouseenter", function SeanceCardComponent_Template_div_mouseenter_0_listener() {
        return ctx.onSurvolEntree();
      })("mouseleave", function SeanceCardComponent_Template_div_mouseleave_0_listener() {
        return ctx.onSurvolSortie();
      });
      \u0275\u0275template(1, SeanceCardComponent_Conditional_1_Template, 2, 1, "span", 1);
      \u0275\u0275elementStart(2, "a", 2)(3, "div", 3);
      \u0275\u0275template(4, SeanceCardComponent_Conditional_4_Template, 2, 1, "span", 4)(5, SeanceCardComponent_Conditional_5_Template, 1, 1, "video", 5);
      \u0275\u0275element(6, "div", 6);
      \u0275\u0275template(7, SeanceCardComponent_Conditional_7_Template, 2, 0, "span", 7)(8, SeanceCardComponent_Conditional_8_Template, 2, 0, "span", 8);
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "span", 11);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "titlecase");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, SeanceCardComponent_Conditional_14_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13)(16, "span", 14);
      \u0275\u0275element(17, "app-icon", 15);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(19, SeanceCardComponent_Conditional_19_Template, 4, 0, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 17)(21, "h3", 18);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, SeanceCardComponent_Conditional_23_Template, 12, 7, "div", 19)(24, SeanceCardComponent_Conditional_24_Template, 4, 4, "div", 20);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("agrandie", ctx.survole());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.rang ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, ctx.seance.id));
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-image", ctx.seance.imageUrl ? "url(" + ctx.seance.imageUrl + ")" : null);
      \u0275\u0275classProp("vignette-defaut", !ctx.seance.imageUrl);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.seance.imageUrl ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.survole() && ctx.videoApercu() && !ctx.videoEnErreur() ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.estTop10 ? 7 : ctx.estNouveau ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("decale", ctx.estTop10 || ctx.estNouveau);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, ctx.seance.niveau));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.seance.categorie ? 14 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("taille", 12);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.seance.dureeMin, " min ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.survole() ? 19 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.seance.titre);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.survole() ? 23 : 24);
    }
  }, dependencies: [CommonModule, TitleCasePipe, RouterLink, IconComponent], styles: ['\n\n.carte-conteneur[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  scroll-snap-align: start;\n  z-index: 1;\n  transform-origin: 50% 50%;\n  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.35s step-end;\n}\n.carte-conteneur.agrandie[_ngcontent-%COMP%] {\n  transform: scale(1.22);\n  z-index: 40;\n  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), z-index 0s;\n}\n.carte[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n  text-decoration: none;\n}\n@media (max-width: 1024px) {\n  .carte[_ngcontent-%COMP%] {\n    width: 130px;\n  }\n}\n@media (max-width: 720px) {\n  .carte[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n}\n.carte-conteneur.agrandie[_ngcontent-%COMP%]   .vignette[_ngcontent-%COMP%] {\n  border-color: var(--accent-primary);\n  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.6);\n}\n.carte-conteneur.agrandie[_ngcontent-%COMP%]   .gradient-overlay[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.carte-conteneur.agrandie[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.carte-conteneur.agrandie[_ngcontent-%COMP%]   .titre[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n}\n.carte-conteneur[_ngcontent-%COMP%]:hover   .vignette[_ngcontent-%COMP%] {\n  border-color: var(--accent-primary);\n}\n.carte-conteneur[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.carte-conteneur[_ngcontent-%COMP%]:hover   .play-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1);\n}\n.rang-numero[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n  align-self: flex-start;\n  flex: 0 0 auto;\n  font-size: 80px;\n  font-weight: 400;\n  line-height: 1;\n  font-family: var(--font-display);\n  color: #000;\n  -webkit-text-stroke: 2px var(--accent-primary);\n  text-stroke: 2px var(--accent-primary);\n  margin-right: -23px;\n  margin-top: 185px;\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n@media (max-width: 1024px) {\n  .rang-numero[_ngcontent-%COMP%] {\n    font-size: 64px;\n    margin-right: -18px;\n    margin-top: 165px;\n  }\n}\n@media (max-width: 720px) {\n  .rang-numero[_ngcontent-%COMP%] {\n    font-size: 50px;\n    margin-right: -14px;\n    margin-top: 145px;\n    margin-top: 40px;\n    -webkit-text-stroke: 1.5px var(--accent-primary);\n  }\n}\n.badge-ruban[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  z-index: 4;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\n}\n.badge-top10[_ngcontent-%COMP%] {\n  background: #e50914;\n}\n.badge-nouveau[_ngcontent-%COMP%] {\n  background: #e50914;\n}\n.video-apercu[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 1;\n}\n.vignette[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 9 / 16;\n  border-radius: 12px;\n  background-color: var(--bg-card);\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  border: 2px solid var(--border);\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.vignette-defaut[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      rgba(var(--accent-rgb), 0.22),\n      rgba(var(--accent-rgb), 0.06) 55%,\n      rgba(10, 10, 10, 0.9));\n}\n.vignette-monogramme[_ngcontent-%COMP%] {\n  font-size: 72px;\n  font-weight: 900;\n  font-family: var(--font-body);\n  color: rgba(255, 255, 255, 0.12);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.gradient-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(10, 10, 10, 0.9) 0%,\n      rgba(10, 10, 10, 0.3) 40%,\n      rgba(10, 10, 10, 0));\n  opacity: 0.7;\n  transition: opacity 0.3s;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 12px;\n  opacity: 0.85;\n  transition: opacity 0.3s;\n  z-index: 2;\n}\n.badges-gauche[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  transition: margin-top 0.2s;\n}\n.badges-gauche.decale[_ngcontent-%COMP%] {\n  margin-top: 26px;\n}\n.badges-droite[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n.niveau-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 10px;\n  font-weight: 800;\n  color: #0a0a0a;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--accent-primary);\n  padding: 4px 10px;\n  border-radius: 4px;\n  width: fit-content;\n}\n.categorie-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--accent-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: rgba(var(--accent-rgb), 0.18);\n  padding: 4px 10px;\n  border-radius: 4px;\n  border: 1px solid rgba(var(--accent-rgb), 0.4);\n  width: fit-content;\n}\n.duree-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-primary);\n  background: rgba(0, 0, 0, 0.5);\n  padding: 6px 12px;\n  border-radius: 6px;\n  backdrop-filter: blur(8px);\n}\n.play-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n  width: 56px;\n  height: 56px;\n  background: var(--accent-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #0a0a0a;\n  opacity: 0;\n  transition: all 0.3s;\n  z-index: 3;\n  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.3);\n}\n.contenu[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.titre[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.3;\n  transition: color 0.3s;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: auto;\n}\n.apercu-etendu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  animation: _ngcontent-%COMP%_apparition 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_apparition {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.apercu-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-rond[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--text-primary);\n  font-size: 12px;\n  transition: all 0.2s;\n}\n.btn-rond-primaire[_ngcontent-%COMP%] {\n  background: var(--text-primary);\n  border-color: var(--text-primary);\n  color: #0a0a0a;\n}\n.carte[_ngcontent-%COMP%]:hover   .btn-rond[_ngcontent-%COMP%] {\n  border-color: var(--text-primary);\n}\n.carte[_ngcontent-%COMP%]:hover   .btn-rond-primaire[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  border-color: var(--accent-primary);\n}\n.apercu-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n.apercu-duree[_ngcontent-%COMP%], \n.apercu-categorie[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.apercu-categorie[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  margin-right: 8px;\n  color: var(--text-tertiary);\n}\n.genre[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--text-secondary);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.genre.homme[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.1);\n  color: var(--teal);\n  border-color: var(--teal);\n}\n.genre.femme[_ngcontent-%COMP%] {\n  background: rgba(219, 39, 119, 0.1);\n  color: #db2777;\n  border-color: #db2777;\n}\n.genre.mixte[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.1);\n  color: var(--accent-primary);\n  border-color: var(--accent-primary);\n}\n/*# sourceMappingURL=seance-card.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeanceCardComponent, { className: "SeanceCardComponent" });
})();

// src/app/features/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.classe;
var _forTrack1 = ($index, $item) => $item.categorie;
var _forTrack2 = ($index, $item) => $item.id;
function HomeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "rect", 34)(2, "rect", 35)(3, "rect", 36)(4, "rect", 37)(5, "rect", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r1 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("haltere ", h_r1.classe, "");
    \u0275\u0275styleProp("animation-delay", h_r1.delai, "s");
  }
}
function HomeComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function HomeComponent_Conditional_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fermerSelectionProfil());
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275listener("click", function HomeComponent_Conditional_44_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 41);
    \u0275\u0275listener("click", function HomeComponent_Conditional_44_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fermerSelectionProfil());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Qui s'entra\xEEne aujourd'hui ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 42);
    \u0275\u0275text(7, "Choisis ton profil pour des s\xE9ances adapt\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43)(9, "button", 44);
    \u0275\u0275listener("click", function HomeComponent_Conditional_44_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.choisirProfil("HOMME"));
    });
    \u0275\u0275elementStart(10, "span", 45);
    \u0275\u0275text(11, "\u{1F468}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 46);
    \u0275\u0275text(13, "Homme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 44);
    \u0275\u0275listener("click", function HomeComponent_Conditional_44_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.choisirProfil("FEMME"));
    });
    \u0275\u0275elementStart(15, "span", 47);
    \u0275\u0275text(16, "\u{1F469}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 46);
    \u0275\u0275text(18, "Femme");
    \u0275\u0275elementEnd()()()()();
  }
}
function HomeComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 48);
    \u0275\u0275text(2, "\u23F3 Chargement du catalogue...");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 48);
    \u0275\u0275text(2, "\u{1F4ED} Aucune s\xE9ance disponible pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_58_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seance-card", 55);
  }
  if (rf & 2) {
    const seance_r6 = ctx.$implicit;
    const \u0275$index_162_r7 = ctx.$index;
    \u0275\u0275property("seance", seance_r6)("rang", \u0275$index_162_r7 + 1);
  }
}
function HomeComponent_Conditional_58_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 51)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 52)(5, "button", 53);
    \u0275\u0275listener("click", function HomeComponent_Conditional_58_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const defilementTop10_r5 = \u0275\u0275reference(8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.faireDefiler(defilementTop10_r5, -1));
    });
    \u0275\u0275text(6, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 54, 0);
    \u0275\u0275listener("scroll", function HomeComponent_Conditional_58_Conditional_0_Template_div_scroll_7_listener() {
      \u0275\u0275restoreView(_r4);
      const defilementTop10_r5 = \u0275\u0275reference(8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.majFleches(defilementTop10_r5));
    });
    \u0275\u0275repeaterCreate(9, HomeComponent_Conditional_58_Conditional_0_For_10_Template, 1, 2, "app-seance-card", 55, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 56);
    \u0275\u0275listener("click", function HomeComponent_Conditional_58_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const defilementTop10_r5 = \u0275\u0275reference(8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.faireDefiler(defilementTop10_r5, 1));
    });
    \u0275\u0275text(12, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Top ", ctx_r2.top10().length, " des s\xE9ances cette semaine");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.top10());
  }
}
function HomeComponent_Conditional_58_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seance-card", 58);
  }
  if (rf & 2) {
    const seance_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("seance", seance_r10)("estTop10", ctx_r2.top10Ids().has(seance_r10.id));
  }
}
function HomeComponent_Conditional_58_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 50)(1, "div", 51)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 57);
    \u0275\u0275text(5, "Voir tout \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 52)(7, "button", 53);
    \u0275\u0275listener("click", function HomeComponent_Conditional_58_For_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const defilementRef_r9 = \u0275\u0275reference(10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.faireDefiler(defilementRef_r9, -1));
    });
    \u0275\u0275text(8, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 54, 1);
    \u0275\u0275listener("scroll", function HomeComponent_Conditional_58_For_2_Template_div_scroll_9_listener() {
      \u0275\u0275restoreView(_r8);
      const defilementRef_r9 = \u0275\u0275reference(10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.majFleches(defilementRef_r9));
    });
    \u0275\u0275repeaterCreate(11, HomeComponent_Conditional_58_For_2_For_12_Template, 1, 2, "app-seance-card", 58, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 56);
    \u0275\u0275listener("click", function HomeComponent_Conditional_58_For_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const defilementRef_r9 = \u0275\u0275reference(10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.faireDefiler(defilementRef_r9, 1));
    });
    \u0275\u0275text(14, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rangee_r11 = ctx.$implicit;
    \u0275\u0275attribute("data-categorie", rangee_r11.categorie);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rangee_r11.categorie);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(rangee_r11.seances);
  }
}
function HomeComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_Conditional_58_Conditional_0_Template, 13, 1, "section", 49);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_58_For_2_Template, 15, 2, "section", 50, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.top10().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.rangees());
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger);
var TAILLE_TOP10 = 10;
var HomeComponent = class _HomeComponent {
  seanceService;
  router;
  halteres = [
    { classe: "haltere-1", delai: 0 },
    { classe: "haltere-2", delai: 0.6 },
    { classe: "haltere-3", delai: 1.2 },
    { classe: "haltere-4", delai: 0.3 },
    { classe: "haltere-5", delai: 0.9 }
  ];
  ongletActif = signal("HOMME");
  rangees = signal([]);
  chargement = signal(true);
  afficherSelectionProfil = signal(false);
  top10 = computed(() => {
    const vues = /* @__PURE__ */ new Set();
    const seances = [];
    for (const rangee of this.rangees()) {
      for (const seance of rangee.seances) {
        if (vues.has(seance.id))
          continue;
        vues.add(seance.id);
        seances.push(seance);
        if (seances.length >= TAILLE_TOP10)
          return seances;
      }
    }
    return seances;
  });
  top10Ids = computed(() => new Set(this.top10().map((s) => s.id)));
  constructor(seanceService, router) {
    this.seanceService = seanceService;
    this.router = router;
  }
  ngOnInit() {
    this.chargerCatalogue();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.chargerCatalogue();
    });
    window.addEventListener("resize", this.majToutesLesFleches);
  }
  ngAfterViewInit() {
    this.animerHero();
  }
  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    window.removeEventListener("resize", this.majToutesLesFleches);
  }
  changerOnglet(genre) {
    if (this.ongletActif() === genre)
      return;
    this.ongletActif.set(genre);
    this.chargerCatalogue();
  }
  ouvrirSelectionProfil() {
    this.afficherSelectionProfil.set(true);
  }
  fermerSelectionProfil() {
    this.afficherSelectionProfil.set(false);
  }
  choisirProfil(genre) {
    this.changerOnglet(genre);
    this.afficherSelectionProfil.set(false);
    setTimeout(() => {
      document.querySelector(".filtres-section")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
  faireDefiler(conteneur, direction) {
    const distance = conteneur.clientWidth * 0.85 * direction;
    conteneur.scrollBy({ left: distance, behavior: "smooth" });
  }
  /** Masque la flèche gauche/droite quand il n'y a rien à faire défiler dans cette direction (comme Netflix). */
  majFleches(conteneur) {
    const wrapper = conteneur.closest(".defilement-conteneur");
    if (!wrapper)
      return;
    const flecheGauche = wrapper.querySelector(".fleche-gauche");
    const flecheDroite = wrapper.querySelector(".fleche-droite");
    const { scrollLeft, scrollWidth, clientWidth } = conteneur;
    const debordement = scrollWidth > clientWidth + 4;
    flecheGauche?.classList.toggle("fleche-masquee", !debordement || scrollLeft <= 4);
    flecheDroite?.classList.toggle("fleche-masquee", !debordement || scrollLeft >= scrollWidth - clientWidth - 4);
  }
  majToutesLesFleches = () => {
    document.querySelectorAll(".defilement").forEach((el) => this.majFleches(el));
  };
  chargerCatalogue() {
    this.chargement.set(true);
    this.seanceService.obtenirCatalogue(this.ongletActif()).subscribe({
      next: (rangees) => {
        this.rangees.set(rangees);
        this.chargement.set(false);
        setTimeout(() => {
          this.animerCatalogue();
          this.majToutesLesFleches();
        }, 0);
      },
      error: () => this.chargement.set(false)
    });
  }
  /** Timeline d'entrée du hero — volontairement percutante (scale + back.out) */
  animerHero() {
    const cibleTransitionCss = gsapWithCSS.utils.toArray(".hero-actions > *, .hero-stats .stat");
    gsapWithCSS.set(cibleTransitionCss, { transition: "none" });
    const tl = gsapWithCSS.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => gsapWithCSS.set(cibleTransitionCss, { clearProps: "transition" })
    });
    tl.from(".hero-badge", { opacity: 0, y: -24, scale: 0.7, duration: 0.6 }).from(".hero-contenu h1", { opacity: 0, y: 70, scale: 1.06, duration: 0.9 }, "-=0.4").from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.6 }, "-=0.55").from(".hero-tags .hero-tag", { opacity: 0, y: 16, scale: 0.7, stagger: 0.12, duration: 0.5, ease: "back.out(2.4)" }, "-=0.35").from(".hero-actions > *", { opacity: 0, y: 24, scale: 0.8, stagger: 0.12, duration: 0.6, ease: "back.out(2)" }, "-=0.3").from(".hero-stats .stat", { opacity: 0, y: 44, scale: 0.75, stagger: 0.1, duration: 0.65, ease: "back.out(2.2)" }, "-=0.45");
    gsapWithCSS.to(".hero-contenu h1 .accent-gold", {
      textShadow: "0 0 24px rgba(52, 211, 153, 0.85)",
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });
  }
  /** Révélations au scroll pour le catalogue — refaites à chaque changement d'onglet */
  animerCatalogue() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsapWithCSS.utils.toArray(".rangee").forEach((rangee, i) => {
      gsapWithCSS.from(rangee, {
        opacity: 0,
        y: 70,
        scale: 0.97,
        duration: 0.7,
        ease: "power3.out",
        delay: i === 0 ? 0.05 : 0,
        scrollTrigger: {
          trigger: rangee,
          start: "top 88%",
          once: true
        }
      });
    });
    gsapWithCSS.from(".cta-section", {
      opacity: 0,
      y: 60,
      scale: 0.96,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 90%",
        once: true
      }
    });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 10, consts: [["defilementTop10", ""], ["defilementRef", ""], [1, "hero"], [1, "hero-glow", "hero-glow-1"], [1, "hero-glow", "hero-glow-2"], ["aria-hidden", "true", 1, "halteres"], ["viewBox", "0 0 100 40", "xmlns", "http://www.w3.org/2000/svg", 3, "class", "animation-delay"], [1, "hero-contenu"], [1, "hero-badge"], [1, "accent-gold"], [1, "hero-subtitle"], [1, "hero-tags"], [1, "hero-tag", "hero-tag-1"], [1, "hero-tag", "hero-tag-2"], [1, "hero-actions"], [1, "btn-primaire", 3, "click"], ["nom", "play", 3, "taille"], [1, "btn-info"], ["nom", "info", 3, "taille"], [1, "hero-visual"], [1, "hero-stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "voile-profil"], [1, "filtres-section"], [1, "onglets"], [1, "onglet", 3, "click"], [1, "catalogue"], [1, "etat-conteneur"], [1, "cta-section"], [1, "cta-contenu"], [1, "btn-primaire", "btn-large"], ["viewBox", "0 0 100 40", "xmlns", "http://www.w3.org/2000/svg"], ["x", "2", "y", "4", "width", "10", "height", "32", "rx", "3", "fill", "currentColor"], ["x", "14", "y", "10", "width", "8", "height", "20", "rx", "2", "fill", "currentColor"], ["x", "22", "y", "17", "width", "56", "height", "6", "rx", "3", "fill", "currentColor"], ["x", "78", "y", "10", "width", "8", "height", "20", "rx", "2", "fill", "currentColor"], ["x", "88", "y", "4", "width", "10", "height", "32", "rx", "3", "fill", "currentColor"], [1, "voile-profil", 3, "click"], [1, "panneau-profil", 3, "click"], ["aria-label", "Fermer", 1, "fermer-profil", 3, "click"], [1, "sous-titre-profil"], [1, "profils"], [1, "profil", 3, "click"], [1, "profil-avatar", "profil-avatar-homme"], [1, "profil-label"], [1, "profil-avatar", "profil-avatar-femme"], [1, "etat"], [1, "rangee", "rangee-top10"], [1, "rangee"], [1, "rangee-header"], [1, "defilement-conteneur"], ["aria-label", "Pr\xE9c\xE9dent", 1, "fleche", "fleche-gauche", "fleche-masquee", 3, "click"], [1, "defilement", 3, "scroll"], [3, "seance", "rang"], ["aria-label", "Suivant", 1, "fleche", "fleche-droite", 3, "click"], ["href", "#", 1, "voir-tout"], [3, "seance", "estTop10"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2);
      \u0275\u0275element(1, "div", 3)(2, "div", 4);
      \u0275\u0275elementStart(3, "div", 5);
      \u0275\u0275repeaterCreate(4, HomeComponent_For_5_Template, 6, 5, ":svg:svg", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 7)(7, "div", 8);
      \u0275\u0275text(8, "\u{1F3CB} Jay Partner's Streaming Fitness");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1");
      \u0275\u0275text(10, "JAY ");
      \u0275\u0275elementStart(11, "span", 9);
      \u0275\u0275text(12, "PARTNER'S");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14, "Apprends ton corps \u2022 D\xE9bloque chaque mouvement \u2022 Progresse \xE0 ton rythme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
      \u0275\u0275text(17, "La discipline construit la libert\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "Pas d'excuses, juste des r\xE9sultats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14)(21, "button", 15);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_21_listener() {
        return ctx.ouvrirSelectionProfil();
      });
      \u0275\u0275element(22, "app-icon", 16);
      \u0275\u0275text(23, " Commencer maintenant ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275element(25, "app-icon", 18);
      \u0275\u0275text(26, " Plus d'infos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "div", 22);
      \u0275\u0275text(31, "500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 23);
      \u0275\u0275text(33, "Mouvements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 21)(35, "div", 22);
      \u0275\u0275text(36, "100+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 23);
      \u0275\u0275text(38, "S\xE9ances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 21)(40, "div", 22);
      \u0275\u0275text(41, "24/7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 23);
      \u0275\u0275text(43, "Acc\xE8s");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(44, HomeComponent_Conditional_44_Template, 19, 0, "div", 24);
      \u0275\u0275elementStart(45, "section", 25)(46, "h2");
      \u0275\u0275text(47, "Explorer par cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 26)(49, "button", 27);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_49_listener() {
        return ctx.changerOnglet("HOMME");
      });
      \u0275\u0275text(50, " Homme ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 27);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_51_listener() {
        return ctx.changerOnglet("FEMME");
      });
      \u0275\u0275text(52, " Femme ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 27);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_53_listener() {
        return ctx.changerOnglet("MIXTE");
      });
      \u0275\u0275text(54, " Mixte ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "main", 28);
      \u0275\u0275template(56, HomeComponent_Conditional_56_Template, 3, 0, "div", 29)(57, HomeComponent_Conditional_57_Template, 3, 0, "div", 29)(58, HomeComponent_Conditional_58_Template, 3, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "section", 30)(60, "div", 31)(61, "h2");
      \u0275\u0275text(62, "Pr\xEAt \xE0 transformer ton corps?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "Rejoins des milliers d'athl\xE8tes et progresse avec les meilleurs mouvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 32);
      \u0275\u0275text(66, "Commencer gratuitement");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.halteres);
      \u0275\u0275advance(18);
      \u0275\u0275property("taille", 16);
      \u0275\u0275advance(3);
      \u0275\u0275property("taille", 16);
      \u0275\u0275advance(19);
      \u0275\u0275conditional(ctx.afficherSelectionProfil() ? 44 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("actif", ctx.ongletActif() === "HOMME");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("actif", ctx.ongletActif() === "FEMME");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("actif", ctx.ongletActif() === "MIXTE");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.chargement() ? 56 : ctx.rangees().length === 0 ? 57 : 58);
    }
  }, dependencies: [CommonModule, SeanceCardComponent, IconComponent], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  height: 70vh;\n  min-height: 500px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  align-items: center;\n  padding: 80px 48px;\n  background: var(--bg);\n  position: relative;\n  overflow: hidden;\n  margin-top: -84px;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(90px);\n  pointer-events: none;\n  z-index: 0;\n}\n.hero-glow-1[_ngcontent-%COMP%] {\n  top: -10%;\n  right: -5%;\n  width: 480px;\n  height: 480px;\n  background: rgba(var(--accent-rgb), 0.16);\n}\n.hero-glow-2[_ngcontent-%COMP%] {\n  bottom: -20%;\n  left: 10%;\n  width: 360px;\n  height: 360px;\n  background: rgba(var(--accent-rgb), 0.1);\n}\n.halteres[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n}\n.haltere[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--accent-primary);\n  filter: drop-shadow(0 0 16px rgba(var(--accent-rgb), 0.55));\n  animation: _ngcontent-%COMP%_flotter 6s ease-in-out infinite;\n}\n.haltere-1[_ngcontent-%COMP%] {\n  top: 8%;\n  left: 4%;\n  width: 130px;\n  opacity: 0.55;\n  transform: rotate(-28deg);\n}\n.haltere-2[_ngcontent-%COMP%] {\n  top: 14%;\n  right: 6%;\n  width: 100px;\n  opacity: 0.4;\n  transform: rotate(18deg);\n}\n.haltere-3[_ngcontent-%COMP%] {\n  bottom: 10%;\n  left: 12%;\n  width: 90px;\n  opacity: 0.35;\n  transform: rotate(35deg);\n}\n.haltere-4[_ngcontent-%COMP%] {\n  bottom: 20%;\n  right: 14%;\n  width: 150px;\n  opacity: 0.45;\n  transform: rotate(-15deg);\n}\n.haltere-5[_ngcontent-%COMP%] {\n  top: 46%;\n  left: -2%;\n  width: 80px;\n  opacity: 0.3;\n  transform: rotate(8deg);\n}\n@media (max-width: 1024px) {\n  .haltere-1[_ngcontent-%COMP%], \n   .haltere-2[_ngcontent-%COMP%], \n   .haltere-3[_ngcontent-%COMP%], \n   .haltere-4[_ngcontent-%COMP%], \n   .haltere-5[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n@media (max-width: 720px) {\n  .halteres[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_flotter {\n  0%, 100% {\n    translate: 0 0;\n  }\n  50% {\n    translate: 0 -20px;\n  }\n}\n@media (max-width: 1024px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin-top: 0;\n    padding: 60px 32px;\n    height: auto;\n    background-attachment: scroll;\n  }\n}\n@media (max-width: 720px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n    gap: 24px;\n  }\n}\n.hero-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-bottom: 32px;\n}\n.hero-tag[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.1);\n  border: 1px solid rgba(var(--accent-rgb), 0.4);\n  color: var(--accent-primary);\n  padding: 10px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 700;\n  box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.12);\n}\n.hero-tag-1[_ngcontent-%COMP%] {\n  transform: rotate(-3deg);\n}\n.hero-tag-2[_ngcontent-%COMP%] {\n  transform: rotate(2deg);\n}\n.hero-contenu[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 600px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(var(--accent-rgb), 0.15);\n  border: 1px solid var(--accent-primary);\n  color: var(--accent-primary);\n  padding: 10px 16px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_pulse-glow 2s ease-in-out infinite;\n}\n.hero-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(44px, 5vw, 72px);\n  line-height: 1.1;\n  color: var(--text-primary);\n  margin-bottom: 20px;\n  letter-spacing: -1px;\n}\n.hero-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  display: inline-block;\n  position: relative;\n}\n.hero-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .accent-gold[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: var(--accent-primary);\n  border-radius: 2px;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 32px;\n  font-weight: 400;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media (max-width: 720px) {\n  .hero-actions[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .hero-visual[_ngcontent-%COMP%] {\n    grid-column: 1;\n    order: -1;\n  }\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px;\n  width: 100%;\n  max-width: 400px;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  transition: all var(--transition);\n}\n.stat[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  background: rgba(var(--accent-rgb), 0.08);\n  transform: translateY(-4px);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: var(--accent-primary);\n  margin-bottom: 8px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n@keyframes _ngcontent-%COMP%_pulse-glow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(var(--accent-rgb), 0);\n  }\n}\n.voile-profil[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  background: rgba(5, 5, 8, 0.92);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_apparitionVoile 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_apparitionVoile {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.panneau-profil[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  max-width: 640px;\n  padding: 0 24px;\n}\n.fermer-profil[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -48px;\n  right: 0;\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 22px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.fermer-profil[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.panneau-profil[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n@media (max-width: 720px) {\n  .panneau-profil[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.sous-titre-profil[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n  margin-bottom: 40px;\n}\n.profils[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  justify-content: center;\n}\n.profil[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  cursor: pointer;\n  padding: 0;\n}\n.profil-avatar[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 64px;\n  border: 3px solid transparent;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.profil-avatar-homme[_ngcontent-%COMP%], \n.profil-avatar-femme[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      rgba(var(--accent-rgb), 0.3),\n      rgba(var(--accent-rgb), 0.06));\n}\n.profil[_ngcontent-%COMP%]:hover   .profil-avatar[_ngcontent-%COMP%], \n.profil[_ngcontent-%COMP%]:focus-visible   .profil-avatar[_ngcontent-%COMP%] {\n  transform: translateY(-6px) scale(1.05);\n  border-color: var(--text-primary);\n}\n.profil-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  font-weight: 700;\n  transition: color 0.2s;\n}\n.profil[_ngcontent-%COMP%]:hover   .profil-label[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n@media (max-width: 720px) {\n  .profils[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .profil-avatar[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n    font-size: 48px;\n  }\n}\n.filtres-section[_ngcontent-%COMP%] {\n  padding: 48px 48px 0;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .filtres-section[_ngcontent-%COMP%] {\n    padding: 32px 20px 0;\n  }\n}\n.filtres-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 24px;\n  color: var(--text-primary);\n}\n.onglets[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 0 48px 24px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  margin-bottom: 24px;\n}\n@media (max-width: 720px) {\n  .onglets[_ngcontent-%COMP%] {\n    padding: 0 20px 24px;\n    gap: 8px;\n  }\n}\n.onglets[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.onglets[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 3px;\n}\n.onglet[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 2px solid var(--border);\n  color: var(--text-secondary);\n  padding: 12px 28px;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 14px;\n  transition: all var(--transition);\n  white-space: nowrap;\n  cursor: pointer;\n  scroll-snap-align: start;\n}\n.onglet[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.onglet.actif[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  color: #0a0a0a;\n  border-color: var(--accent-primary);\n  font-weight: 800;\n  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.25);\n}\n.catalogue[_ngcontent-%COMP%] {\n  padding: 24px 48px 80px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .catalogue[_ngcontent-%COMP%] {\n    padding: 20px 20px 60px;\n  }\n}\n.etat-conteneur[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n}\n.etat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 18px;\n  text-align: center;\n}\n.rangee[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.rangee-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.rangee-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 0.5px;\n}\n.voir-tout[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-size: 14px;\n  font-weight: 700;\n  transition: all var(--transition);\n}\n.voir-tout[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  transform: translateX(4px);\n}\n.defilement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-snap-type: x mandatory;\n  padding: 44px 4px 88px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n@media (max-width: 720px) {\n  .defilement[_ngcontent-%COMP%] {\n    gap: 10px;\n    padding: 28px 4px 56px;\n  }\n}\n.defilement[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.defilement-conteneur[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fleche[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 44px;\n  bottom: 88px;\n  width: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(10, 10, 10, 0.55);\n  border: none;\n  color: var(--text-primary);\n  font-size: 30px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 20;\n  opacity: 0;\n  transition: opacity 0.2s, background 0.2s;\n}\n.defilement-conteneur[_ngcontent-%COMP%]:hover   .fleche[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.defilement-conteneur[_ngcontent-%COMP%]:hover   .fleche.fleche-masquee[_ngcontent-%COMP%], \n.fleche.fleche-masquee[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.fleche[_ngcontent-%COMP%]:hover {\n  background: rgba(10, 10, 10, 0.85);\n  color: var(--accent-primary);\n}\n.fleche-gauche[_ngcontent-%COMP%] {\n  left: 0;\n  border-radius: 0 6px 6px 0;\n}\n.fleche-droite[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 6px 0 0 6px;\n}\n@media (max-width: 720px) {\n  .fleche[_ngcontent-%COMP%] {\n    top: 28px;\n    bottom: 56px;\n    width: 36px;\n    font-size: 22px;\n  }\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 80px 48px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-elevated) 0%,\n      rgba(var(--accent-rgb), 0.1) 100%);\n  border-top: 1px solid var(--border);\n  text-align: center;\n  margin-top: 40px;\n}\n@media (max-width: 720px) {\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 48px 20px;\n  }\n}\n.cta-contenu[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 42px;\n  margin-bottom: 16px;\n  color: var(--text-primary);\n}\n@media (max-width: 720px) {\n  .cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin-bottom: 32px;\n  line-height: 1.6;\n}\n.btn-large[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  font-size: 16px;\n}\n.btn-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  color: var(--text-primary);\n  padding: 12px 28px;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 15px;\n  transition: all var(--transition);\n  cursor: pointer;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-5ZDMJMZM.js.map
