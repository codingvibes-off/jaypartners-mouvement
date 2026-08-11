import {
  SeanceService
} from "./chunk-XSRQNOH6.js";
import {
  RouterLink
} from "./chunk-LPH4TNPV.js";
import {
  IconComponent
} from "./chunk-XXXCYALE.js";
import {
  CommonModule,
  TitleCasePipe
} from "./chunk-I4QZ5BRR.js";
import {
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N2MMUZ74.js";

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

export {
  SeanceCardComponent
};
//# sourceMappingURL=chunk-EHPISQRD.js.map
