import {
  SeanceCardComponent
} from "./chunk-EHPISQRD.js";
import {
  ScrollTrigger
} from "./chunk-CEUFYD57.js";
import {
  gsapWithCSS
} from "./chunk-VNIDSO3Z.js";
import {
  SeanceService
} from "./chunk-XSRQNOH6.js";
import {
  RouterLink
} from "./chunk-LPH4TNPV.js";
import {
  IconComponent
} from "./chunk-XXXCYALE.js";
import "./chunk-Z2S5QJHA.js";
import {
  CommonModule
} from "./chunk-I4QZ5BRR.js";
import {
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N2MMUZ74.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.categorie;
var _forTrack1 = ($index, $item) => $item.id;
function HomeComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function HomeComponent_Conditional_55_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermerSelectionProfil());
    });
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275listener("click", function HomeComponent_Conditional_55_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275listener("click", function HomeComponent_Conditional_55_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermerSelectionProfil());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Qui s'entra\xEEne aujourd'hui ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 39);
    \u0275\u0275text(7, "Choisis ton profil pour des s\xE9ances adapt\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 40)(9, "button", 41);
    \u0275\u0275listener("click", function HomeComponent_Conditional_55_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.choisirProfil("HOMME"));
    });
    \u0275\u0275elementStart(10, "span", 42);
    \u0275\u0275text(11, "\u{1F468}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 43);
    \u0275\u0275text(13, "Homme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 41);
    \u0275\u0275listener("click", function HomeComponent_Conditional_55_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.choisirProfil("FEMME"));
    });
    \u0275\u0275elementStart(15, "span", 44);
    \u0275\u0275text(16, "\u{1F469}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 43);
    \u0275\u0275text(18, "Femme");
    \u0275\u0275elementEnd()()()()();
  }
}
function HomeComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p", 45);
    \u0275\u0275text(2, "\u23F3 Chargement du catalogue...");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p", 45);
    \u0275\u0275text(2, "\u{1F4ED} Aucune s\xE9ance disponible pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_69_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seance-card", 52);
  }
  if (rf & 2) {
    const seance_r5 = ctx.$implicit;
    const \u0275$index_170_r6 = ctx.$index;
    \u0275\u0275property("seance", seance_r5)("rang", \u0275$index_170_r6 + 1);
  }
}
function HomeComponent_Conditional_69_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 46)(1, "div", 48)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 49)(5, "button", 50);
    \u0275\u0275listener("click", function HomeComponent_Conditional_69_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const defilementTop10_r4 = \u0275\u0275reference(8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.faireDefiler(defilementTop10_r4, -1));
    });
    \u0275\u0275text(6, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 51, 0);
    \u0275\u0275listener("scroll", function HomeComponent_Conditional_69_Conditional_0_Template_div_scroll_7_listener() {
      \u0275\u0275restoreView(_r3);
      const defilementTop10_r4 = \u0275\u0275reference(8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.majFleches(defilementTop10_r4));
    });
    \u0275\u0275repeaterCreate(9, HomeComponent_Conditional_69_Conditional_0_For_10_Template, 1, 2, "app-seance-card", 52, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 53);
    \u0275\u0275listener("click", function HomeComponent_Conditional_69_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const defilementTop10_r4 = \u0275\u0275reference(8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.faireDefiler(defilementTop10_r4, 1));
    });
    \u0275\u0275text(12, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Top ", ctx_r1.top10().length, " des s\xE9ances cette semaine");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.top10());
  }
}
function HomeComponent_Conditional_69_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seance-card", 55);
  }
  if (rf & 2) {
    const seance_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("seance", seance_r9)("estTop10", ctx_r1.top10Ids().has(seance_r9.id));
  }
}
function HomeComponent_Conditional_69_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 47)(1, "div", 48)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 54);
    \u0275\u0275text(5, "Voir tout \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 49)(7, "button", 50);
    \u0275\u0275listener("click", function HomeComponent_Conditional_69_For_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const defilementRef_r8 = \u0275\u0275reference(10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.faireDefiler(defilementRef_r8, -1));
    });
    \u0275\u0275text(8, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 51, 1);
    \u0275\u0275listener("scroll", function HomeComponent_Conditional_69_For_2_Template_div_scroll_9_listener() {
      \u0275\u0275restoreView(_r7);
      const defilementRef_r8 = \u0275\u0275reference(10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.majFleches(defilementRef_r8));
    });
    \u0275\u0275repeaterCreate(11, HomeComponent_Conditional_69_For_2_For_12_Template, 1, 2, "app-seance-card", 55, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 53);
    \u0275\u0275listener("click", function HomeComponent_Conditional_69_For_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const defilementRef_r8 = \u0275\u0275reference(10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.faireDefiler(defilementRef_r8, 1));
    });
    \u0275\u0275text(14, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rangee_r10 = ctx.$implicit;
    \u0275\u0275attribute("data-categorie", rangee_r10.categorie);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rangee_r10.categorie);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(rangee_r10.seances);
  }
}
function HomeComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_Conditional_69_Conditional_0_Template, 13, 1, "section", 46);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_69_For_2_Template, 15, 2, "section", 47, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.top10().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.rangees());
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger);
var TAILLE_TOP10 = 10;
var HomeComponent = class _HomeComponent {
  seanceService;
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
  constructor(seanceService) {
    this.seanceService = seanceService;
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
    const cibleTransitionCss = gsapWithCSS.utils.toArray(".hero-actions > *, .hero-carte");
    gsapWithCSS.set(cibleTransitionCss, { transition: "none" });
    const tl = gsapWithCSS.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => gsapWithCSS.set(cibleTransitionCss, { clearProps: "transition" })
    });
    tl.from(".hero-cluster", { opacity: 0, y: -20, scale: 0.85, duration: 0.6 }).from(".hero-contenu h1", { opacity: 0, y: 70, scale: 1.06, duration: 0.9 }, "-=0.35").from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.6 }, "-=0.55").from(".hero-actions > *", { opacity: 0, y: 24, scale: 0.8, stagger: 0.12, duration: 0.6, ease: "back.out(2)" }, "-=0.3").from(".hero-carte", { opacity: 0, y: 30, scale: 0.92, stagger: 0.15, duration: 0.65, ease: "back.out(1.8)" }, "-=0.3");
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
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(SeanceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 78, vars: 12, consts: [["defilementTop10", ""], ["defilementRef", ""], [1, "hero"], ["aria-hidden", "true", 1, "hero-fond"], [1, "hero-voile"], [1, "hero-contenu"], [1, "hero-cluster"], [1, "avatars"], [1, "avatar-mini", "avatar-1"], [1, "avatar-mini", "avatar-2"], [1, "avatar-mini", "avatar-3"], [1, "avatar-mini", "avatar-4"], [1, "cluster-texte"], [1, "accent-gold"], [1, "hero-subtitle"], [1, "hero-actions"], [1, "btn-primaire", "btn-pilule", 3, "click"], [1, "pilule-fleche"], ["nom", "arrow-right", 3, "taille"], [1, "btn-info"], ["nom", "info", 3, "taille"], ["routerLink", "/programmes", 1, "hero-carte", "hero-carte-univers"], [1, "hero-carte-vignette"], [1, "hero-carte-texte"], [1, "hero-carte-lien"], ["routerLink", "/programmes", 1, "hero-carte", "hero-carte-nouveau"], [1, "hero-carte-vignette", "hero-carte-vignette-sombre"], [1, "voile-profil"], [1, "filtres-section"], [1, "onglets"], [1, "onglet", 3, "click"], [1, "catalogue"], [1, "etat-conteneur"], [1, "cta-section"], [1, "cta-contenu"], [1, "btn-primaire", "btn-large"], [1, "voile-profil", 3, "click"], [1, "panneau-profil", 3, "click"], ["aria-label", "Fermer", 1, "fermer-profil", 3, "click"], [1, "sous-titre-profil"], [1, "profils"], [1, "profil", 3, "click"], [1, "profil-avatar", "profil-avatar-homme"], [1, "profil-label"], [1, "profil-avatar", "profil-avatar-femme"], [1, "etat"], [1, "rangee", "rangee-top10"], [1, "rangee"], [1, "rangee-header"], [1, "defilement-conteneur"], ["aria-label", "Pr\xE9c\xE9dent", 1, "fleche", "fleche-gauche", "fleche-masquee", 3, "click"], [1, "defilement", 3, "scroll"], [3, "seance", "rang"], ["aria-label", "Suivant", 1, "fleche", "fleche-droite", 3, "click"], ["href", "#", 1, "voir-tout"], [3, "seance", "estTop10"]], template: function HomeComponent_Template(rf, ctx) {
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
      \u0275\u0275text(18, "athl\xE8tes nous font confiance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "h1");
      \u0275\u0275text(20, "L\xC0 O\xD9 TON ");
      \u0275\u0275elementStart(21, "span", 13);
      \u0275\u0275text(22, "CORPS SE TRANSFORME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p", 14);
      \u0275\u0275text(24, " S\xE9ances, mouvements et programmes con\xE7us pour progresser \xE0 ton rythme. Tout ce qu'il te faut pour \xE9lever ton niveau. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15)(26, "button", 16);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_26_listener() {
        return ctx.ouvrirSelectionProfil();
      });
      \u0275\u0275text(27, " Commencer maintenant ");
      \u0275\u0275elementStart(28, "span", 17);
      \u0275\u0275element(29, "app-icon", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 19);
      \u0275\u0275element(31, "app-icon", 20);
      \u0275\u0275text(32, " Plus d'infos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "a", 21)(34, "div", 22);
      \u0275\u0275text(35, "\u{1F525}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 23)(37, "h3");
      \u0275\u0275text(38, "Univers de programmes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "Force, Pilates, Hyrox, Athl\xE9tisme... entre dans un univers taill\xE9 pour ton objectif.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 24);
      \u0275\u0275text(42, "Voir les univers ");
      \u0275\u0275element(43, "app-icon", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "a", 25)(45, "div", 26);
      \u0275\u0275text(46, "\u26A1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 23)(48, "h3");
      \u0275\u0275text(49, "Nouveau : Hyrox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51, "La course fonctionnelle ultime d\xE9barque dans le catalogue.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 24);
      \u0275\u0275text(53, "D\xE9couvrir ");
      \u0275\u0275element(54, "app-icon", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(55, HomeComponent_Conditional_55_Template, 19, 0, "div", 27);
      \u0275\u0275elementStart(56, "section", 28)(57, "h2");
      \u0275\u0275text(58, "Explorer par cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 29)(60, "button", 30);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_60_listener() {
        return ctx.changerOnglet("HOMME");
      });
      \u0275\u0275text(61, " Homme ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 30);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_62_listener() {
        return ctx.changerOnglet("FEMME");
      });
      \u0275\u0275text(63, " Femme ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 30);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_64_listener() {
        return ctx.changerOnglet("MIXTE");
      });
      \u0275\u0275text(65, " Mixte ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "main", 31);
      \u0275\u0275template(67, HomeComponent_Conditional_67_Template, 3, 0, "div", 32)(68, HomeComponent_Conditional_68_Template, 3, 0, "div", 32)(69, HomeComponent_Conditional_69_Template, 3, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "section", 33)(71, "div", 34)(72, "h2");
      \u0275\u0275text(73, "Pr\xEAt \xE0 transformer ton corps?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p");
      \u0275\u0275text(75, "Rejoins des milliers d'athl\xE8tes et progresse avec les meilleurs mouvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "button", 35);
      \u0275\u0275text(77, "Commencer gratuitement");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275property("taille", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("taille", 16);
      \u0275\u0275advance(12);
      \u0275\u0275property("taille", 12);
      \u0275\u0275advance(11);
      \u0275\u0275property("taille", 12);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.afficherSelectionProfil() ? 55 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("actif", ctx.ongletActif() === "HOMME");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("actif", ctx.ongletActif() === "FEMME");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("actif", ctx.ongletActif() === "MIXTE");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.chargement() ? 67 : ctx.rangees().length === 0 ? 68 : 69);
    }
  }, dependencies: [CommonModule, RouterLink, SeanceCardComponent, IconComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 88vh;\n  display: flex;\n  align-items: center;\n  padding: 120px 64px 100px;\n  overflow: hidden;\n  margin-top: -84px;\n  isolation: isolate;\n}\n.hero-fond[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  background-image: url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=75);\n  background-size: cover;\n  background-position: center 30%;\n  filter: saturate(0.9) contrast(1.05);\n}\n.hero-voile[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  background:\n    radial-gradient(\n      circle at 82% 18%,\n      rgba(var(--accent-rgb), 0.22) 0%,\n      transparent 42%),\n    linear-gradient(\n      100deg,\n      rgba(6, 6, 6, 0.96) 0%,\n      rgba(6, 6, 6, 0.82) 32%,\n      rgba(6, 6, 6, 0.45) 58%,\n      rgba(6, 6, 6, 0.25) 100%);\n}\n@media (max-width: 1024px) {\n  .hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    margin-top: 0;\n    padding: 64px 32px 56px;\n    min-height: auto;\n  }\n  .hero-voile[_ngcontent-%COMP%] {\n    background:\n      radial-gradient(\n        circle at 50% 0%,\n        rgba(var(--accent-rgb), 0.18) 0%,\n        transparent 50%),\n      linear-gradient(\n        180deg,\n        rgba(6, 6, 6, 0.9) 0%,\n        rgba(6, 6, 6, 0.88) 55%,\n        rgba(6, 6, 6, 0.96) 100%);\n  }\n}\n@media (max-width: 720px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 48px 20px 40px;\n  }\n}\n.hero-cluster[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.avatars[_ngcontent-%COMP%] {\n  display: flex;\n}\n.avatar-mini[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  background:\n    linear-gradient(\n      150deg,\n      rgba(var(--accent-rgb), 0.35),\n      rgba(var(--accent-rgb), 0.1));\n  border: 2px solid #0a0a0a;\n  margin-left: -12px;\n}\n.avatar-mini[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.cluster-texte[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.25;\n}\n.cluster-texte[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--text-primary);\n}\n.cluster-texte[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.hero-contenu[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 620px;\n}\n.hero-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(42px, 6vw, 82px);\n  line-height: 0.98;\n  text-transform: uppercase;\n  color: var(--text-primary);\n  margin-bottom: 22px;\n  letter-spacing: 0.5px;\n}\n.hero-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  display: inline;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 17px;\n  max-width: 480px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 36px;\n  font-weight: 400;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media (max-width: 720px) {\n  .hero-actions[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n.btn-pilule[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  padding: 8px 8px 8px 26px;\n  border-radius: 999px;\n}\n.pilule-fleche[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #0a0a0a;\n  color: var(--accent-primary);\n}\n.hero-carte[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  max-width: 300px;\n  padding: 16px;\n  background: rgba(10, 10, 10, 0.55);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  backdrop-filter: blur(14px);\n  text-decoration: none;\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4);\n  transition: all var(--transition);\n}\n.hero-carte[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  transform: translateY(-4px);\n}\n.hero-carte-univers[_ngcontent-%COMP%] {\n  top: 20%;\n  right: 6%;\n}\n.hero-carte-nouveau[_ngcontent-%COMP%] {\n  bottom: 14%;\n  right: 14%;\n}\n.hero-carte-vignette[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  background:\n    linear-gradient(\n      150deg,\n      rgba(var(--accent-rgb), 0.35),\n      rgba(var(--accent-rgb), 0.08));\n}\n.hero-carte-vignette-sombre[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      rgba(255, 255, 255, 0.14),\n      rgba(255, 255, 255, 0.03));\n}\n.hero-carte-texte[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.hero-carte-texte[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  line-height: 1.4;\n  margin-bottom: 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.hero-carte-lien[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--accent-primary);\n}\n@media (max-width: 1024px) {\n  .hero-carte[_ngcontent-%COMP%] {\n    position: static;\n    max-width: none;\n    margin-top: 16px;\n  }\n  .hero-carte-univers[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n.voile-profil[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  background: rgba(5, 5, 8, 0.92);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_apparitionVoile 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_apparitionVoile {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.panneau-profil[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  max-width: 640px;\n  padding: 0 24px;\n}\n.fermer-profil[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -48px;\n  right: 0;\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 22px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.fermer-profil[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.panneau-profil[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n@media (max-width: 720px) {\n  .panneau-profil[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.sous-titre-profil[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n  margin-bottom: 40px;\n}\n.profils[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  justify-content: center;\n}\n.profil[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  cursor: pointer;\n  padding: 0;\n}\n.profil-avatar[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 64px;\n  border: 3px solid transparent;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.profil-avatar-homme[_ngcontent-%COMP%], \n.profil-avatar-femme[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      rgba(var(--accent-rgb), 0.3),\n      rgba(var(--accent-rgb), 0.06));\n}\n.profil[_ngcontent-%COMP%]:hover   .profil-avatar[_ngcontent-%COMP%], \n.profil[_ngcontent-%COMP%]:focus-visible   .profil-avatar[_ngcontent-%COMP%] {\n  transform: translateY(-6px) scale(1.05);\n  border-color: var(--text-primary);\n}\n.profil-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  font-weight: 700;\n  transition: color 0.2s;\n}\n.profil[_ngcontent-%COMP%]:hover   .profil-label[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n@media (max-width: 720px) {\n  .profils[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .profil-avatar[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n    font-size: 48px;\n  }\n}\n.filtres-section[_ngcontent-%COMP%] {\n  padding: 48px 48px 0;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .filtres-section[_ngcontent-%COMP%] {\n    padding: 32px 20px 0;\n  }\n}\n.filtres-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 24px;\n  color: var(--text-primary);\n}\n.onglets[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 0 48px 24px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  margin-bottom: 24px;\n}\n@media (max-width: 720px) {\n  .onglets[_ngcontent-%COMP%] {\n    padding: 0 20px 24px;\n    gap: 8px;\n  }\n}\n.onglets[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.onglets[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 3px;\n}\n.onglet[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 2px solid var(--border);\n  color: var(--text-secondary);\n  padding: 12px 28px;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 14px;\n  transition: all var(--transition);\n  white-space: nowrap;\n  cursor: pointer;\n  scroll-snap-align: start;\n}\n.onglet[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.onglet.actif[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  color: #0a0a0a;\n  border-color: var(--accent-primary);\n  font-weight: 800;\n  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.25);\n}\n.catalogue[_ngcontent-%COMP%] {\n  padding: 24px 48px 80px;\n  background: var(--bg);\n}\n@media (max-width: 720px) {\n  .catalogue[_ngcontent-%COMP%] {\n    padding: 20px 20px 60px;\n  }\n}\n.etat-conteneur[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n}\n.etat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 18px;\n  text-align: center;\n}\n.rangee[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.rangee-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.rangee-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 0.5px;\n}\n.voir-tout[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-size: 14px;\n  font-weight: 700;\n  transition: all var(--transition);\n}\n.voir-tout[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  transform: translateX(4px);\n}\n.defilement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-snap-type: x mandatory;\n  padding: 44px 4px 88px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n@media (max-width: 720px) {\n  .defilement[_ngcontent-%COMP%] {\n    gap: 10px;\n    padding: 28px 4px 56px;\n  }\n}\n.defilement[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.defilement-conteneur[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fleche[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 44px;\n  bottom: 88px;\n  width: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(10, 10, 10, 0.55);\n  border: none;\n  color: var(--text-primary);\n  font-size: 30px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 20;\n  opacity: 0;\n  transition: opacity 0.2s, background 0.2s;\n}\n.defilement-conteneur[_ngcontent-%COMP%]:hover   .fleche[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.defilement-conteneur[_ngcontent-%COMP%]:hover   .fleche.fleche-masquee[_ngcontent-%COMP%], \n.fleche.fleche-masquee[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.fleche[_ngcontent-%COMP%]:hover {\n  background: rgba(10, 10, 10, 0.85);\n  color: var(--accent-primary);\n}\n.fleche-gauche[_ngcontent-%COMP%] {\n  left: 0;\n  border-radius: 0 6px 6px 0;\n}\n.fleche-droite[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 6px 0 0 6px;\n}\n@media (max-width: 720px) {\n  .fleche[_ngcontent-%COMP%] {\n    top: 28px;\n    bottom: 56px;\n    width: 36px;\n    font-size: 22px;\n  }\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 80px 48px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-elevated) 0%,\n      rgba(var(--accent-rgb), 0.1) 100%);\n  border-top: 1px solid var(--border);\n  text-align: center;\n  margin-top: 40px;\n}\n@media (max-width: 720px) {\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 48px 20px;\n  }\n}\n.cta-contenu[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 42px;\n  margin-bottom: 16px;\n  color: var(--text-primary);\n}\n@media (max-width: 720px) {\n  .cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin-bottom: 32px;\n  line-height: 1.6;\n}\n.btn-large[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  font-size: 16px;\n}\n.btn-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  color: var(--text-primary);\n  padding: 12px 28px;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 15px;\n  transition: all var(--transition);\n  cursor: pointer;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.accent-gold[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-AL36ETZP.js.map
