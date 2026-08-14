import {
  SeanceCardComponent
} from "./chunk-JDFPRYER.js";
import {
  ScrollTrigger
} from "./chunk-CEUFYD57.js";
import {
  MotivationService
} from "./chunk-ERMIDGPZ.js";
import {
  gsapWithCSS
} from "./chunk-VNIDSO3Z.js";
import {
  SeanceService
} from "./chunk-4FTD4IR3.js";
import {
  LocalisePipe
} from "./chunk-YPSBE6FA.js";
import {
  RouterLink
} from "./chunk-LT5XQBJD.js";
import "./chunk-EZLIDOO3.js";
import {
  IconComponent
} from "./chunk-Q4RUTCVR.js";
import {
  LangService
} from "./chunk-YD45A6VG.js";
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
  ɵɵattribute,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
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

// src/app/features/duo/duo.component.ts
var _forTrack0 = ($index, $item) => $item.categorie;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = (a0) => ({ n: a0 });
function DuoComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "duo.chargementCatalogue"));
  }
}
function DuoComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "duo.aucuneSeance"));
  }
}
function DuoComponent_Conditional_48_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seance-card", 35);
  }
  if (rf & 2) {
    const seance_r4 = ctx.$implicit;
    const \u0275$index_105_r5 = ctx.$index;
    \u0275\u0275property("seance", seance_r4)("rang", \u0275$index_105_r5 + 1);
  }
}
function DuoComponent_Conditional_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 29)(1, "div", 31)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32)(6, "button", 33);
    \u0275\u0275listener("click", function DuoComponent_Conditional_48_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const defilementTop10_r2 = \u0275\u0275reference(9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.faireDefiler(defilementTop10_r2, -1));
    });
    \u0275\u0275text(7, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34, 0);
    \u0275\u0275listener("scroll", function DuoComponent_Conditional_48_Conditional_0_Template_div_scroll_8_listener() {
      \u0275\u0275restoreView(_r1);
      const defilementTop10_r2 = \u0275\u0275reference(9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.majFleches(defilementTop10_r2));
    });
    \u0275\u0275repeaterCreate(10, DuoComponent_Conditional_48_Conditional_0_For_11_Template, 1, 2, "app-seance-card", 35, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 36);
    \u0275\u0275listener("click", function DuoComponent_Conditional_48_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const defilementTop10_r2 = \u0275\u0275reference(9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.faireDefiler(defilementTop10_r2, 1));
    });
    \u0275\u0275text(13, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, "duo.top10", \u0275\u0275pureFunction1(4, _c0, ctx_r2.top10().length)));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.top10());
  }
}
function DuoComponent_Conditional_48_For_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seance-card", 38);
  }
  if (rf & 2) {
    const seance_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("seance", seance_r8)("estTop10", ctx_r2.top10Ids().has(seance_r8.id));
  }
}
function DuoComponent_Conditional_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 30)(1, "div", 31)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "localise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "button", 33);
    \u0275\u0275listener("click", function DuoComponent_Conditional_48_For_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const defilementRef_r7 = \u0275\u0275reference(12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.faireDefiler(defilementRef_r7, -1));
    });
    \u0275\u0275text(10, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 34, 1);
    \u0275\u0275listener("scroll", function DuoComponent_Conditional_48_For_2_Template_div_scroll_11_listener() {
      \u0275\u0275restoreView(_r6);
      const defilementRef_r7 = \u0275\u0275reference(12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.majFleches(defilementRef_r7));
    });
    \u0275\u0275repeaterCreate(13, DuoComponent_Conditional_48_For_2_For_14_Template, 1, 2, "app-seance-card", 38, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 36);
    \u0275\u0275listener("click", function DuoComponent_Conditional_48_For_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const defilementRef_r7 = \u0275\u0275reference(12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.faireDefiler(defilementRef_r7, 1));
    });
    \u0275\u0275text(16, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rangee_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-categorie", rangee_r9.categorie);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(4, 3, rangee_r9.categorie, rangee_r9.categorieEn, ctx_r2.lang.langue()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "duo.voirTout"));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(rangee_r9.seances);
  }
}
function DuoComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DuoComponent_Conditional_48_Conditional_0_Template, 14, 6, "section", 29);
    \u0275\u0275repeaterCreate(1, DuoComponent_Conditional_48_For_2_Template, 17, 9, "section", 30, _forTrack0);
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
var DuoComponent = class _DuoComponent {
  seanceService;
  motivation;
  lang;
  rangees = signal([]);
  chargement = signal(true);
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
  constructor(seanceService, motivation, lang) {
    this.seanceService = seanceService;
    this.motivation = motivation;
    this.lang = lang;
  }
  ngOnInit() {
    this.chargerCatalogue();
    window.addEventListener("resize", this.majToutesLesFleches);
  }
  ngAfterViewInit() {
    this.animerHero();
  }
  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    window.removeEventListener("resize", this.majToutesLesFleches);
  }
  ouvrirSelectionProfil() {
    this.motivation.declencher(["/programmes"]);
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
    this.seanceService.obtenirCatalogue(void 0, void 0, "DUO").subscribe({
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
    const cibleTransitionCss = gsapWithCSS.utils.toArray(".hero-actions > *, .hero-carte");
    gsapWithCSS.set(cibleTransitionCss, { transition: "none" });
    const tl = gsapWithCSS.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => gsapWithCSS.set(cibleTransitionCss, { clearProps: "transition" })
    });
    tl.from(".hero-cluster", { opacity: 0, y: -20, scale: 0.85, duration: 0.6 }).from(".hero-contenu h1", { opacity: 0, y: 70, scale: 1.06, duration: 0.9 }, "-=0.35").from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.6 }, "-=0.55").from(".hero-actions > *", { opacity: 0, y: 24, scale: 0.8, stagger: 0.12, duration: 0.6, ease: "back.out(2)" }, "-=0.3").from(".hero-carte", { opacity: 0, y: 30, scale: 0.92, stagger: 0.15, duration: 0.65, ease: "back.out(1.8)" }, "-=0.3");
    gsapWithCSS.to(".hero-contenu h1 .accent-gold", {
      textShadow: "0 0 24px rgba(125, 211, 252, 0.85)",
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });
  }
  /** Révélations au scroll pour le catalogue */
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
  static \u0275fac = function DuoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DuoComponent)(\u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(MotivationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DuoComponent, selectors: [["app-duo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 33, consts: [["defilementTop10", ""], ["defilementRef", ""], [1, "hero"], ["aria-hidden", "true", 1, "hero-fond"], [1, "hero-voile"], [1, "hero-contenu"], [1, "hero-cluster"], [1, "avatars"], [1, "avatar-mini", "avatar-1"], [1, "avatar-mini", "avatar-2"], [1, "avatar-mini", "avatar-3"], [1, "avatar-mini", "avatar-4"], [1, "cluster-texte"], [3, "innerHTML"], [1, "hero-subtitle"], [1, "hero-actions"], [1, "btn-primaire", "btn-pilule", 3, "click"], [1, "pilule-fleche"], ["nom", "arrow-right", 3, "taille"], ["routerLink", "/programmes", 1, "hero-carte", "hero-carte-univers"], [1, "hero-carte-vignette"], [1, "hero-carte-texte"], [1, "hero-carte-lien"], [1, "catalogue"], [1, "etat-conteneur"], [1, "cta-section"], [1, "cta-contenu"], [1, "btn-primaire", "btn-large"], [1, "etat"], [1, "rangee", "rangee-top10"], [1, "rangee"], [1, "rangee-header"], [1, "defilement-conteneur"], ["aria-label", "Pr\xE9c\xE9dent", 1, "fleche", "fleche-gauche", "fleche-masquee", 3, "click"], [1, "defilement", 3, "scroll"], [3, "seance", "rang"], ["aria-label", "Suivant", 1, "fleche", "fleche-droite", 3, "click"], ["href", "#", 1, "voir-tout"], [3, "seance", "estTop10"]], template: function DuoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2);
      \u0275\u0275element(1, "div", 3)(2, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "span", 8);
      \u0275\u0275text(7, "\u{1F3CB}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 9);
      \u0275\u0275text(9, "\u{1F938}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 10);
      \u0275\u0275text(11, "\u{1F3C3}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275text(13, "\u{1F9D8}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12)(15, "strong");
      \u0275\u0275text(16, "9 256+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(20, "h1", 13);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementStart(22, "p", 14);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15)(26, "button", 16);
      \u0275\u0275listener("click", function DuoComponent_Template_button_click_26_listener() {
        return ctx.ouvrirSelectionProfil();
      });
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275element(30, "app-icon", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "a", 19)(32, "div", 20);
      \u0275\u0275text(33, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 21)(35, "h3");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 22);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275element(44, "app-icon", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "main", 23);
      \u0275\u0275template(46, DuoComponent_Conditional_46_Template, 4, 3, "div", 24)(47, DuoComponent_Conditional_47_Template, 4, 3, "div", 24)(48, DuoComponent_Conditional_48_Template, 3, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "section", 25)(50, "div", 26)(51, "h2");
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p");
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 27);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "duo.clusterTexte"));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(21, 15, "duo.titre"), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 17, "duo.sousTitre"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 19, "duo.commencer"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("taille", 16);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 21, "duo.carteUnivers"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 23, "duo.carteUniversTexte"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(43, 25, "duo.voirUnivers"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("taille", 12);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.chargement() ? 46 : ctx.rangees().length === 0 ? 47 : 48);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 27, "duo.ctaTitre"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 29, "duo.ctaTexte"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 31, "duo.ctaBouton"));
    }
  }, dependencies: [CommonModule, RouterLink, SeanceCardComponent, IconComponent, TranslatePipe, LocalisePipe], styles: ["\n\n[_nghost-%COMP%] {\n  --accent-primary: #7dd3fc;\n  --accent-secondary: #a5e2fd;\n  --accent-rgb:\n    125,\n    211,\n    252;\n  --teal: #7dd3fc;\n  --gold: #7dd3fc;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 88vh;\n  display: flex;\n  align-items: center;\n  padding: 120px 64px 100px;\n  overflow: hidden;\n  margin-top: -84px;\n  isolation: isolate;\n}\n.hero-fond[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  background-image: url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=75);\n  background-size: cover;\n  background-position: center 30%;\n  filter: saturate(0.9) contrast(1.05);\n}\n.hero-voile[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  background:\n    radial-gradient(\n      circle at 82% 18%,\n      rgba(var(--accent-rgb), 0.22) 0%,\n      transparent 42%),\n    linear-gradient(\n      100deg,\n      rgba(6, 6, 6, 0.96) 0%,\n      rgba(6, 6, 6, 0.82) 32%,\n      rgba(6, 6, 6, 0.45) 58%,\n      rgba(6, 6, 6, 0.25) 100%);\n}\n@media (max-width: 1024px) {\n  .hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    margin-top: 0;\n    padding: 64px 32px 56px;\n    min-height: auto;\n  }\n  .hero-voile[_ngcontent-%COMP%] {\n    background:\n      radial-gradient(\n        circle at 50% 0%,\n        rgba(var(--accent-rgb), 0.18) 0%,\n        transparent 50%),\n      linear-gradient(\n        180deg,\n        rgba(6, 6, 6, 0.9) 0%,\n        rgba(6, 6, 6, 0.88) 55%,\n        rgba(6, 6, 6, 0.96) 100%);\n  }\n}\n@media (max-width: 720px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 48px 20px 40px;\n  }\n}\n.hero-cluster[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.avatars[_ngcontent-%COMP%] {\n  display: flex;\n}\n.avatar-mini[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  background:\n    linear-gradient(\n      150deg,\n      rgba(var(--accent-rgb), 0.35),\n      rgba(var(--accent-rgb), 0.1));\n  border: 2px solid #0a0a0a;\n  margin-left: -12px;\n}\n.avatar-mini[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.cluster-texte[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.25;\n}\n.cluster-texte[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--text-primary);\n}\n.cluster-texte[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.hero-contenu[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 620px;\n}\n.hero-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(42px, 6vw, 82px);\n  line-height: 0.98;\n  text-transform: uppercase;\n  color: var(--text-primary);\n  margin-bottom: 22px;\n  letter-spacing: 0.5px;\n}\n.hero-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  display: inline;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 17px;\n  max-width: 480px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 36px;\n  font-weight: 400;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media (max-width: 720px) {\n  .hero-actions[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n.btn-pilule[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  padding: 8px 8px 8px 26px;\n  border-radius: 999px;\n}\n.pilule-fleche[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #0a0a0a;\n  color: var(--accent-primary);\n}\n.hero-carte[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  max-width: 300px;\n  padding: 16px;\n  background: rgba(10, 10, 10, 0.55);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  backdrop-filter: blur(14px);\n  text-decoration: none;\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4);\n  transition: all var(--transition);\n}\n.hero-carte[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  transform: translateY(-4px);\n}\n.hero-carte-univers[_ngcontent-%COMP%] {\n  top: 20%;\n  right: 6%;\n}\n.hero-carte-nouveau[_ngcontent-%COMP%] {\n  bottom: 14%;\n  right: 14%;\n}\n.hero-carte-vignette[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  background:\n    linear-gradient(\n      150deg,\n      rgba(var(--accent-rgb), 0.35),\n      rgba(var(--accent-rgb), 0.08));\n}\n.hero-carte-vignette-sombre[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      rgba(255, 255, 255, 0.14),\n      rgba(255, 255, 255, 0.03));\n}\n.hero-carte-texte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.hero-carte-texte[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  line-height: 1.4;\n  margin-bottom: 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.hero-carte-lien[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--accent-primary);\n}\n@media (max-width: 1024px) {\n  .hero-carte[_ngcontent-%COMP%] {\n    position: static;\n    max-width: none;\n    margin-top: 16px;\n  }\n  .hero-carte-univers[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n.filtres-section[_ngcontent-%COMP%] {\n  padding: 48px 48px 0;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .filtres-section[_ngcontent-%COMP%] {\n    padding: 32px 20px 0;\n  }\n}\n.filtres-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 24px;\n  color: var(--text-primary);\n}\n.onglets[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 0 48px 24px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  margin-bottom: 24px;\n}\n@media (max-width: 720px) {\n  .onglets[_ngcontent-%COMP%] {\n    padding: 0 20px 24px;\n    gap: 8px;\n  }\n}\n.onglets[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.onglets[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 3px;\n}\n.onglet[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 2px solid var(--border);\n  color: var(--text-secondary);\n  padding: 12px 28px;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 14px;\n  transition: all var(--transition);\n  white-space: nowrap;\n  cursor: pointer;\n  scroll-snap-align: start;\n}\n.onglet[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.onglet.actif[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  color: #0a0a0a;\n  border-color: var(--accent-primary);\n  font-weight: 800;\n  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.25);\n}\n.catalogue[_ngcontent-%COMP%] {\n  padding: 24px 48px 80px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .catalogue[_ngcontent-%COMP%] {\n    padding: 20px 20px 60px;\n  }\n}\n.etat-conteneur[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n}\n.etat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 18px;\n  text-align: center;\n}\n.rangee[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.rangee-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.rangee-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 0.5px;\n}\n.voir-tout[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-size: 14px;\n  font-weight: 700;\n  transition: all var(--transition);\n}\n.voir-tout[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  transform: translateX(4px);\n}\n.defilement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-snap-type: x mandatory;\n  padding: 44px 4px 88px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n@media (max-width: 720px) {\n  .defilement[_ngcontent-%COMP%] {\n    gap: 10px;\n    padding: 28px 4px 56px;\n  }\n}\n.defilement[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.defilement-conteneur[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fleche[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 44px;\n  bottom: 88px;\n  width: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(10, 10, 10, 0.55);\n  border: none;\n  color: var(--text-primary);\n  font-size: 30px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 20;\n  opacity: 0;\n  transition: opacity 0.2s, background 0.2s;\n}\n.defilement-conteneur[_ngcontent-%COMP%]:hover   .fleche[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.defilement-conteneur[_ngcontent-%COMP%]:hover   .fleche.fleche-masquee[_ngcontent-%COMP%], \n.fleche.fleche-masquee[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.fleche[_ngcontent-%COMP%]:hover {\n  background: rgba(10, 10, 10, 0.85);\n  color: var(--accent-primary);\n}\n.fleche-gauche[_ngcontent-%COMP%] {\n  left: 0;\n  border-radius: 0 6px 6px 0;\n}\n.fleche-droite[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 6px 0 0 6px;\n}\n@media (max-width: 720px) {\n  .fleche[_ngcontent-%COMP%] {\n    top: 28px;\n    bottom: 56px;\n    width: 36px;\n    font-size: 22px;\n  }\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 80px 48px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-elevated) 0%,\n      rgba(var(--accent-rgb), 0.1) 100%);\n  border-top: 1px solid var(--border);\n  text-align: center;\n  margin-top: 40px;\n}\n@media (max-width: 720px) {\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 48px 20px;\n  }\n}\n.cta-contenu[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 42px;\n  margin-bottom: 16px;\n  color: var(--text-primary);\n}\n@media (max-width: 720px) {\n  .cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin-bottom: 32px;\n  line-height: 1.6;\n}\n.btn-large[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  font-size: 16px;\n}\n.accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n}\n/*# sourceMappingURL=duo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DuoComponent, { className: "DuoComponent" });
})();
export {
  DuoComponent
};
//# sourceMappingURL=chunk-LDLEVLPX.js.map
