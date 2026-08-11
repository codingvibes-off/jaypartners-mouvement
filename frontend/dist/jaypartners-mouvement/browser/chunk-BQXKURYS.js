import {
  AuthService
} from "./chunk-FDY6N2GF.js";
import {
  gsapWithCSS
} from "./chunk-VNIDSO3Z.js";
import {
  SeanceService
} from "./chunk-GSNOB2C4.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-I253Q7U2.js";
import {
  HistoriqueService
} from "./chunk-SFZB4EW6.js";
import {
  IconComponent
} from "./chunk-JNSSE4B5.js";
import {
  CommonModule,
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-Z3NPIKQV.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/entrainement/citations.ts
var CITATIONS_DERNIERE_SERIE = [
  "Derni\xE8re s\xE9rie : c'est l\xE0 que tu deviens plus fort.",
  "Encore un effort, ton corps te remerciera demain.",
  "La discipline bat la motivation. Termine fort.",
  "Personne ne regrette une derni\xE8re s\xE9rie bien faite.",
  "Ton seul adversaire aujourd'hui, c'est toi d'hier.",
  "Donne tout, il ne reste que \xE7a.",
  "Chaque r\xE9p\xE9tition compte. Finis en beaut\xE9.",
  "Le d\xE9passement de soi commence maintenant.",
  "Tu es plus proche de ton objectif qu'hier.",
  "La derni\xE8re s\xE9rie est celle qui change tout.",
  "C'est maintenant que se construit la diff\xE9rence.",
  "Une derni\xE8re s\xE9rie, z\xE9ro regret."
];

// src/app/features/entrainement/entrainement.component.ts
var _c0 = (a0) => ["/seance", a0];
function EntrainementComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p");
    \u0275\u0275text(2, "Chargement de la s\xE9ance...");
    \u0275\u0275elementEnd()();
  }
}
function EntrainementComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p");
    \u0275\u0275text(2, "S\xE9ance introuvable ou sans exercices.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 4);
    \u0275\u0275text(4, "Retour au catalogue");
    \u0275\u0275elementEnd()();
  }
}
function EntrainementComponent_Conditional_2_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erreurValidation());
  }
}
function EntrainementComponent_Conditional_2_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_2_Conditional_2_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.validerSeance());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.enCoursValidation());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.enCoursValidation() ? "Validation..." : "Valider ma s\xE9ance du jour", " ");
  }
}
function EntrainementComponent_Conditional_2_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9)(1, "a", 11);
    \u0275\u0275text(2, "Connecte-toi");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " pour valider cette s\xE9ance et suivre ta progression. ");
    \u0275\u0275elementEnd();
  }
}
function EntrainementComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "S\xE9ance termin\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EntrainementComponent_Conditional_2_Conditional_2_Conditional_6_Template, 2, 1, "p", 7)(7, EntrainementComponent_Conditional_2_Conditional_2_Conditional_7_Template, 2, 2, "button", 8)(8, EntrainementComponent_Conditional_2_Conditional_2_Conditional_8_Template, 4, 0, "p", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Bravo, ", ctx_r0.seance().titre, " termin\xE9e \u{1F4AA}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Tu as compl\xE9t\xE9 ", ctx_r0.mouvements().length, " exercices.");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.erreurValidation() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth.estConnecte() ? 7 : 8);
  }
}
function EntrainementComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "\u2713 S\xE9ance valid\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "S\xE9ance enregistr\xE9e dans ton historique.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "a", 14);
    \u0275\u0275text(8, "Voir mon calendrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 4);
    \u0275\u0275text(10, "Retour au catalogue");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", ctx_r0.validation().xpGagne, " XP");
  }
}
function EntrainementComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5);
    \u0275\u0275template(2, EntrainementComponent_Conditional_2_Conditional_2_Template, 9, 4)(3, EntrainementComponent_Conditional_2_Conditional_3_Template, 11, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.validation() ? 2 : 3);
  }
}
function EntrainementComponent_Conditional_3_Conditional_21_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 16);
  }
  if (rf & 2) {
    \u0275\u0275property("taille", 15);
  }
}
function EntrainementComponent_Conditional_3_Conditional_21_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const numero_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", numero_r5, " ");
  }
}
function EntrainementComponent_Conditional_3_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_3_Conditional_21_For_2_Template_button_click_0_listener() {
      const numero_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cocherSerie(numero_r5, ctx_r0.plageSeries().length));
    });
    \u0275\u0275template(1, EntrainementComponent_Conditional_3_Conditional_21_For_2_Conditional_1_Template, 1, 1, "app-icon", 16)(2, EntrainementComponent_Conditional_3_Conditional_21_For_2_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const numero_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cochee", ctx_r0.seriesCochees().has(numero_r5));
    \u0275\u0275attribute("aria-pressed", ctx_r0.seriesCochees().has(numero_r5))("aria-label", "S\xE9rie " + numero_r5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.seriesCochees().has(numero_r5) ? 1 : 2);
  }
}
function EntrainementComponent_Conditional_3_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.exerciceActuel().repetitions);
  }
}
function EntrainementComponent_Conditional_3_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, EntrainementComponent_Conditional_3_Conditional_21_For_2_Template, 3, 5, "button", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EntrainementComponent_Conditional_3_Conditional_21_Conditional_3_Template, 2, 1, "p", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.plageSeries());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.exerciceActuel().repetitions ? 3 : -1);
  }
}
function EntrainementComponent_Conditional_3_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.exerciceActuel().repetitions, " ");
  }
}
function EntrainementComponent_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275template(1, EntrainementComponent_Conditional_3_Conditional_22_Conditional_1_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.exerciceActuel().repetitions ? 1 : -1);
  }
}
function EntrainementComponent_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.tempsRestant(), "s");
  }
}
function EntrainementComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 15);
    \u0275\u0275element(2, "app-icon", 16);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerEncouragement());
    });
    \u0275\u0275element(6, "app-icon", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "a", 20);
    \u0275\u0275element(9, "app-icon", 18);
    \u0275\u0275text(10, " Quitter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 21);
    \u0275\u0275element(12, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24);
    \u0275\u0275element(16, "video", 25, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 26)(19, "h1");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, EntrainementComponent_Conditional_3_Conditional_21_Template, 4, 1)(22, EntrainementComponent_Conditional_3_Conditional_22_Template, 2, 1, "p", 27)(23, EntrainementComponent_Conditional_3_Conditional_23_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(24, "div", 29)(25, "button", 30);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_3_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const videoRef_r6 = \u0275\u0275reference(17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.basculerPause(videoRef_r6));
    });
    \u0275\u0275element(26, "app-icon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 32);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exerciceSuivant());
    });
    \u0275\u0275text(28, " Exercice termin\xE9 ");
    \u0275\u0275element(29, "app-icon", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.citationActuelle());
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, ctx_r0.seance().id));
    \u0275\u0275advance();
    \u0275\u0275property("taille", 14);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.progression(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.indexActuel() + 1, " / ", ctx_r0.mouvements().length, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.exerciceActuel().mouvement.videoUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.exerciceActuel().mouvement.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.plageSeries().length > 0 ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.tempsRestant() !== null ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r0.enPause() ? "Reprendre" : "Mettre en pause");
    \u0275\u0275advance();
    \u0275\u0275property("nom", ctx_r0.enPause() ? "play" : "pause")("taille", 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("taille", 16);
  }
}
var DELAI_FERMETURE_AUTO_MS = 6e3;
var EntrainementComponent = class _EntrainementComponent {
  route;
  seanceService;
  historiqueService;
  auth;
  seance = signal(null);
  chargement = signal(true);
  indexActuel = signal(0);
  enPause = signal(false);
  tempsRestant = signal(null);
  terminee = signal(false);
  validation = signal(null);
  erreurValidation = signal(null);
  enCoursValidation = signal(false);
  seriesCochees = signal(/* @__PURE__ */ new Set());
  encouragementVisible = signal(false);
  citationActuelle = signal("");
  encouragementDejaAffichePourExercice = false;
  intervalId;
  fermetureAutoId;
  mouvements = computed(() => this.seance()?.mouvements ?? []);
  exerciceActuel = computed(() => this.mouvements()[this.indexActuel()] ?? null);
  progression = computed(() => {
    const total = this.mouvements().length;
    return total ? Math.round((this.indexActuel() + 1) / total * 100) : 0;
  });
  plageSeries = computed(() => {
    const total = this.exerciceActuel()?.series ?? 0;
    return Array.from({ length: total }, (_, i) => i + 1);
  });
  constructor(route, seanceService, historiqueService, auth) {
    this.route = route;
    this.seanceService = seanceService;
    this.historiqueService = historiqueService;
    this.auth = auth;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id)
      return;
    this.seanceService.obtenirDetail(id).subscribe({
      next: (seance) => {
        this.seance.set(seance);
        this.chargement.set(false);
        this.demarrerMinuteur();
      },
      error: () => this.chargement.set(false)
    });
  }
  ngOnDestroy() {
    this.arreterMinuteur();
    if (this.fermetureAutoId)
      clearTimeout(this.fermetureAutoId);
  }
  basculerPause(video) {
    const enPause = !this.enPause();
    this.enPause.set(enPause);
    if (enPause) {
      video.pause();
      this.arreterMinuteur();
    } else {
      video.play().catch(() => {
      });
      this.demarrerMinuteur();
    }
  }
  exerciceSuivant() {
    this.arreterMinuteur();
    this.reinitialiserSeries();
    const suivant = this.indexActuel() + 1;
    if (suivant < this.mouvements().length) {
      this.indexActuel.set(suivant);
      this.enPause.set(false);
      this.demarrerMinuteur();
    } else {
      this.terminee.set(true);
    }
  }
  /** Coche/décoche une série de l'exercice courant. Sur l'avant-dernière case cochée
   *  (il ne reste alors plus qu'une série non cochée), affiche le bandeau d'encouragement. */
  cocherSerie(numero, total) {
    const cochees = new Set(this.seriesCochees());
    const etaitCochee = cochees.has(numero);
    if (etaitCochee) {
      cochees.delete(numero);
    } else {
      cochees.add(numero);
    }
    this.seriesCochees.set(cochees);
    const restantes = total - cochees.size;
    if (!etaitCochee && restantes === 1 && !this.encouragementDejaAffichePourExercice) {
      this.encouragementDejaAffichePourExercice = true;
      this.afficherEncouragement();
    }
  }
  fermerEncouragement() {
    if (!this.encouragementVisible())
      return;
    if (this.fermetureAutoId)
      clearTimeout(this.fermetureAutoId);
    this.encouragementVisible.set(false);
    this.animerBandeau();
  }
  validerSeance() {
    const seance = this.seance();
    if (!seance)
      return;
    this.enCoursValidation.set(true);
    this.erreurValidation.set(null);
    this.historiqueService.validerSeance(seance.id).subscribe({
      next: (res) => {
        this.validation.set({ xpGagne: res.historique.xpGagne });
        this.enCoursValidation.set(false);
      },
      error: () => {
        this.erreurValidation.set("Impossible de valider la s\xE9ance pour le moment.");
        this.enCoursValidation.set(false);
      }
    });
  }
  reinitialiserSeries() {
    this.seriesCochees.set(/* @__PURE__ */ new Set());
    this.encouragementDejaAffichePourExercice = false;
    if (this.fermetureAutoId)
      clearTimeout(this.fermetureAutoId);
    this.encouragementVisible.set(false);
  }
  afficherEncouragement() {
    const citations = CITATIONS_DERNIERE_SERIE;
    this.citationActuelle.set(citations[Math.floor(Math.random() * citations.length)]);
    this.encouragementVisible.set(true);
    this.animerBandeau();
    this.fermetureAutoId = setTimeout(() => this.fermerEncouragement(), DELAI_FERMETURE_AUTO_MS);
  }
  /** Le bandeau glisse depuis le haut avec un effet de rebond à l'atterrissage. */
  animerBandeau() {
    setTimeout(() => {
      const bandeau = document.querySelector(".bandeau-encouragement");
      if (!bandeau)
        return;
      gsapWithCSS.killTweensOf(bandeau);
      if (this.encouragementVisible()) {
        gsapWithCSS.fromTo(bandeau, { y: "-120%" }, { y: "0%", duration: 0.9, ease: "bounce.out" });
      } else {
        gsapWithCSS.to(bandeau, { y: "-120%", duration: 0.3, ease: "power2.in" });
      }
    }, 0);
  }
  demarrerMinuteur() {
    this.arreterMinuteur();
    const duree = this.exerciceActuel()?.mouvement.dureeConseillee;
    if (!duree) {
      this.tempsRestant.set(null);
      return;
    }
    this.tempsRestant.set(duree);
    this.intervalId = setInterval(() => {
      const restant = this.tempsRestant();
      if (restant === null)
        return;
      if (restant <= 1) {
        this.arreterMinuteur();
        this.exerciceSuivant();
        return;
      }
      this.tempsRestant.set(restant - 1);
    }, 1e3);
  }
  arreterMinuteur() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = void 0;
    }
  }
  static \u0275fac = function EntrainementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntrainementComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(HistoriqueService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrainementComponent, selectors: [["app-entrainement"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [["videoRef", ""], [1, "etat-entrainement"], [1, "ecran-fin"], [1, "entrainement"], ["routerLink", "/", 1, "btn-secondaire"], [1, "fin-contenu"], [1, "fin-badge"], [1, "erreur"], [1, "btn-primaire", "btn-large", 3, "disabled"], [1, "connexion-requise"], [1, "btn-primaire", "btn-large", 3, "click", "disabled"], ["routerLink", "/connexion"], [1, "fin-badge", "fin-badge-succes"], [1, "fin-actions"], ["routerLink", "/calendrier", 1, "btn-primaire", "btn-large"], ["role", "status", 1, "bandeau-encouragement"], ["nom", "check", 3, "taille"], ["aria-label", "Fermer", 3, "click"], ["nom", "close", 3, "taille"], [1, "entrainement-header"], [1, "quitter", 3, "routerLink"], [1, "barre-progression"], [1, "barre-remplie"], [1, "compteur"], [1, "video-conteneur"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", 1, "video-exercice", 3, "src"], [1, "exercice-infos"], [1, "exercice-meta"], [1, "minuteur"], [1, "controles"], [1, "btn-rond-controle", 3, "click"], [3, "nom", "taille"], [1, "btn-primaire", "btn-large", 3, "click"], ["nom", "arrow-right", 3, "taille"], ["role", "group", "aria-label", "S\xE9ries de l'exercice", 1, "series-liste"], [1, "serie-case", 3, "cochee"], [1, "serie-case", 3, "click"]], template: function EntrainementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EntrainementComponent_Conditional_0_Template, 3, 0, "div", 1)(1, EntrainementComponent_Conditional_1_Template, 5, 0, "div", 1)(2, EntrainementComponent_Conditional_2_Template, 4, 1, "div", 2)(3, EntrainementComponent_Conditional_3_Template, 30, 19, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.chargement() ? 0 : !ctx.seance() || ctx.mouvements().length === 0 ? 1 : ctx.terminee() ? 2 : 3);
    }
  }, dependencies: [CommonModule, RouterLink, IconComponent], styles: ["\n\n.etat-entrainement[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  color: var(--text-secondary);\n  background: #000;\n}\n.entrainement[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #000;\n  padding: 32px 24px 64px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 28px;\n}\n@media (max-width: 720px) {\n  .entrainement[_ngcontent-%COMP%] {\n    padding: 20px 16px 48px;\n    gap: 20px;\n  }\n}\n.bandeau-encouragement[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background: var(--accent-primary);\n  color: #000;\n  box-shadow: 0 8px 30px rgba(var(--accent-rgb), 0.35);\n  transform: translateY(-120%);\n}\n.bandeau-encouragement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  font-weight: 800;\n  font-size: 15px;\n}\n.bandeau-encouragement[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.1);\n  border: none;\n  color: #000;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.bandeau-encouragement[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 720px) {\n  .bandeau-encouragement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.series-liste[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.serie-case[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1.5px solid rgba(255, 255, 255, 0.18);\n  color: var(--text-primary);\n  font-weight: 700;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.serie-case[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n}\n.serie-case.cochee[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  border-color: var(--accent-primary);\n  color: #000;\n  transform: scale(1.08);\n}\n.entrainement-header[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 900px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.quitter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.quitter[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.barre-progression[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n}\n.barre-remplie[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent-primary);\n  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.6);\n  transition: width 0.3s ease;\n}\n.compteur[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.video-conteneur[_ngcontent-%COMP%] {\n  width: auto;\n  height: min(62vh, 620px);\n  max-width: 100%;\n  aspect-ratio: 9 / 16;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: 0 0 80px rgba(var(--accent-rgb), 0.14);\n  background: var(--bg-card);\n}\n@media (max-width: 720px) {\n  .video-conteneur[_ngcontent-%COMP%] {\n    height: min(58vh, 460px);\n  }\n}\n.video-exercice[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.exercice-infos[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  text-align: center;\n}\n.exercice-infos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 4vw, 44px);\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.exercice-meta[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n}\n.minuteur[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 48px;\n  font-weight: 800;\n  color: var(--accent-primary);\n  margin-top: 16px;\n}\n.controles[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 28px;\n  flex-wrap: wrap;\n}\n.btn-rond-controle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: var(--text-primary);\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-rond-controle[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.ecran-fin[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 24px;\n  background:\n    radial-gradient(\n      circle at 50% 30%,\n      rgba(var(--accent-rgb), 0.14),\n      transparent 60%),\n    #000;\n}\n.fin-contenu[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.fin-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: rgba(var(--accent-rgb), 0.15);\n  border: 1px solid var(--accent-primary);\n  color: var(--accent-primary);\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 24px;\n}\n.fin-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 5vw, 56px);\n  color: var(--text-primary);\n  margin-bottom: 16px;\n}\n.fin-contenu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 24px;\n  line-height: 1.6;\n}\n.erreur[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.connexion-requise[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-weight: 700;\n}\n.fin-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=entrainement.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrainementComponent, { className: "EntrainementComponent" });
})();
export {
  EntrainementComponent
};
//# sourceMappingURL=chunk-BQXKURYS.js.map
