import {
  gsapWithCSS
} from "./chunk-VNIDSO3Z.js";
import {
  AuthService
} from "./chunk-LKFKFO2I.js";
import {
  SeanceService
} from "./chunk-4FTD4IR3.js";
import {
  LocalisePipe
} from "./chunk-YPSBE6FA.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-LT5XQBJD.js";
import {
  DomSanitizer
} from "./chunk-EZLIDOO3.js";
import {
  HistoriqueService
} from "./chunk-O6JDJYHL.js";
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-M2LWS2MJ.js";
import "./chunk-SNAKS5WD.js";

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
var CITATIONS_DERNIERE_SERIE_EN = [
  "Last set: this is where you get stronger.",
  "One more effort, your body will thank you tomorrow.",
  "Discipline beats motivation. Finish strong.",
  "No one ever regrets a last set well done.",
  "Today, your only opponent is yesterday's you.",
  "Give it everything, there's nothing left to save.",
  "Every rep counts. Finish in style.",
  "Pushing past your limits starts now.",
  "You're closer to your goal than yesterday.",
  "The last set is the one that changes everything.",
  "The difference is built right now.",
  "One last set, zero regrets."
];

// src/app/features/entrainement/entrainement.component.ts
var _c0 = ["videoRef"];
var _c1 = (a0) => ({ titre: a0 });
var _c2 = (a0) => ({ n: a0 });
var _c3 = (a0, a1) => ({ actuelle: a0, total: a1 });
var _c4 = (a0) => ["/seance", a0];
var _c5 = (a0) => ({ suivant: a0 });
function EntrainementComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "entrainement.chargement"));
  }
}
function EntrainementComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "entrainement.introuvable"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "commun.retourCatalogue"));
  }
}
function EntrainementComponent_Conditional_2_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erreurValidation());
  }
}
function EntrainementComponent_Conditional_2_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_2_Conditional_2_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.validerSeance());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.enCoursValidation());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.enCoursValidation() ? \u0275\u0275pipeBind1(2, 2, "entrainement.validation") : \u0275\u0275pipeBind1(3, 4, "entrainement.valider"), " ");
  }
}
function EntrainementComponent_Conditional_2_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10)(1, "a", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "entrainement.connecteToi"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "entrainement.connexionRequise"), " ");
  }
}
function EntrainementComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "localise");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EntrainementComponent_Conditional_2_Conditional_2_Conditional_10_Template, 2, 1, "p", 8)(11, EntrainementComponent_Conditional_2_Conditional_2_Conditional_11_Template, 4, 6, "button", 9)(12, EntrainementComponent_Conditional_2_Conditional_2_Conditional_12_Template, 6, 6, "p", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "entrainement.seanceTerminee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 11, "entrainement.bravo", \u0275\u0275pureFunction1(17, _c1, \u0275\u0275pipeBind3(5, 7, ctx_r0.seance().titre, ctx_r0.seance().titreEn, ctx_r0.lang.langue()))));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 14, "entrainement.complete", \u0275\u0275pureFunction1(19, _c2, ctx_r0.mouvements().length)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.erreurValidation() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth.estConnecte() ? 11 : 12);
  }
}
function EntrainementComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "a", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 5);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "entrainement.seanceValidee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", ctx_r0.validation().xpGagne, " XP");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "entrainement.enregistree"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "entrainement.voirCalendrier"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "commun.retourCatalogue"));
  }
}
function EntrainementComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 6);
    \u0275\u0275template(2, EntrainementComponent_Conditional_2_Conditional_2_Template, 13, 21)(3, EntrainementComponent_Conditional_2_Conditional_3_Template, 15, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.validation() ? 2 : 3);
  }
}
function EntrainementComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "entrainement.seriePosition", \u0275\u0275pureFunction2(4, _c3, ctx_r0.serieActuelle() + 1, ctx_r0.totalSeries())));
  }
}
function EntrainementComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, EntrainementComponent_Conditional_3_Conditional_9_Template, 3, 7, "p", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "entrainement.pause"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("repos-chrono-alerte", ctx_r0.tempsRepos() <= 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.libelleTempsRepos());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "entrainement.reposTexte"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalSeries() > 1 ? 9 : -1);
  }
}
function EntrainementComponent_Conditional_4_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "entrainement.seriePosition", \u0275\u0275pureFunction2(4, _c3, ctx_r0.serieActuelle(), ctx_r0.totalSeries())));
  }
}
function EntrainementComponent_Conditional_4_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("donnee-chiffre-xl", ctx_r0.donneePrincipaleTaille() === "xl")("donnee-chiffre-lg", ctx_r0.donneePrincipaleTaille() === "lg")("donnee-chiffre-md", ctx_r0.donneePrincipaleTaille() === "md");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.donneePrincipaleLabel());
  }
}
function EntrainementComponent_Conditional_4_Conditional_22_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
  }
  if (rf & 2) {
    const numero_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("trait-fait", numero_r4 < ctx_r0.serieActuelle());
  }
}
function EntrainementComponent_Conditional_4_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
    \u0275\u0275template(1, EntrainementComponent_Conditional_4_Conditional_22_For_2_Conditional_1_Template, 1, 2, "span", 45);
  }
  if (rf & 2) {
    const numero_r4 = ctx.$implicit;
    const \u0275$index_150_r5 = ctx.$index;
    const \u0275$count_150_r6 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("point-fait", numero_r4 < ctx_r0.serieActuelle())("point-actuel", numero_r4 === ctx_r0.serieActuelle());
    \u0275\u0275attribute("aria-label", "S\xE9rie " + numero_r4)("aria-current", numero_r4 === ctx_r0.serieActuelle() ? "step" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_150_r5 === \u0275$count_150_r6 - 1) ? 1 : -1);
  }
}
function EntrainementComponent_Conditional_4_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, EntrainementComponent_Conditional_4_Conditional_22_For_2_Template, 2, 7, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.plageSeries());
  }
}
function EntrainementComponent_Conditional_4_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.urlIframeCloudflare(), \u0275\u0275sanitizeResourceUrl);
  }
}
function EntrainementComponent_Conditional_4_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 35, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.exerciceActuel().mouvement.videoUrl, \u0275\u0275sanitizeUrl);
  }
}
function EntrainementComponent_Conditional_4_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_4_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.basculerPause());
    });
    \u0275\u0275element(1, "app-icon", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r0.enPause() ? "Reprendre" : "Mettre en pause");
    \u0275\u0275advance();
    \u0275\u0275property("nom", ctx_r0.enPause() ? "play" : "pause")("taille", 18);
  }
}
function EntrainementComponent_Conditional_4_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "localise");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suivant_r8 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, "entrainement.ensuite", \u0275\u0275pureFunction1(8, _c5, \u0275\u0275pipeBind3(2, 1, suivant_r8.mouvement.nom, suivant_r8.mouvement.nomEn, ctx_r0.lang.langue()))));
  }
}
function EntrainementComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 20);
    \u0275\u0275element(2, "app-icon", 21);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerEncouragement());
    });
    \u0275\u0275element(6, "app-icon", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "a", 25);
    \u0275\u0275element(9, "app-icon", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 26);
    \u0275\u0275element(13, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 29)(17, "h1");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "localise");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, EntrainementComponent_Conditional_4_Conditional_20_Template, 3, 7, "p", 30)(21, EntrainementComponent_Conditional_4_Conditional_21_Template, 5, 8, "div", 31)(22, EntrainementComponent_Conditional_4_Conditional_22_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 33);
    \u0275\u0275template(24, EntrainementComponent_Conditional_4_Conditional_24_Template, 1, 1, "iframe", 34)(25, EntrainementComponent_Conditional_4_Conditional_25_Template, 2, 1, "video", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 36)(27, "div", 37);
    \u0275\u0275template(28, EntrainementComponent_Conditional_4_Conditional_28_Template, 2, 3, "button", 38);
    \u0275\u0275elementStart(29, "button", 39);
    \u0275\u0275listener("click", function EntrainementComponent_Conditional_4_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validerEtape());
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275element(33, "app-icon", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, EntrainementComponent_Conditional_4_Conditional_34_Template, 4, 10, "p", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_17_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.citationActuelle());
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c4, ctx_r0.seance().id));
    \u0275\u0275advance();
    \u0275\u0275property("taille", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 19, "entrainement.quitter"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.progression(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.indexActuel() + 1, " / ", ctx_r0.mouvements().length, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(19, 21, ctx_r0.exerciceActuel().mouvement.nom, ctx_r0.exerciceActuel().mouvement.nomEn, ctx_r0.lang.langue()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalSeries() > 1 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r0.donneePrincipaleTexte()) ? 21 : -1, tmp_11_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.totalSeries() > 1 ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.videoCloudflarePrete() ? 24 : 25);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r0.videoCloudflarePrete() ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.estDerniereSerie() ? \u0275\u0275pipeBind1(31, 25, "entrainement.exerciceTermine") : \u0275\u0275pipeBind1(32, 27, "entrainement.serieTerminee"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("taille", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = ctx_r0.prochainExercice()) ? 34 : -1, tmp_17_0);
  }
}
var DELAI_FERMETURE_AUTO_MS = 6e3;
var DUREE_REPOS_S = 90;
var EntrainementComponent = class _EntrainementComponent {
  route;
  seanceService;
  historiqueService;
  auth;
  lang;
  sanitizer;
  videoElRef;
  seance = signal(null);
  chargement = signal(true);
  indexActuel = signal(0);
  enPause = signal(false);
  tempsRestant = signal(null);
  terminee = signal(false);
  validation = signal(null);
  erreurValidation = signal(null);
  enCoursValidation = signal(false);
  serieActuelle = signal(1);
  encouragementVisible = signal(false);
  citationActuelle = signal("");
  /** Repos chronométré entre deux séries d'un même exercice (voir demarrerRepos). */
  enRepos = signal(false);
  tempsRepos = signal(DUREE_REPOS_S);
  encouragementDejaAffichePourExercice = false;
  intervalId;
  reposIntervalId;
  fermetureAutoId;
  audioContext;
  mouvements = computed(() => this.seance()?.mouvements ?? []);
  exerciceActuel = computed(() => this.mouvements()[this.indexActuel()] ?? null);
  prochainExercice = computed(() => this.mouvements()[this.indexActuel() + 1] ?? null);
  videoCloudflarePrete = computed(() => {
    const mouvement = this.exerciceActuel()?.mouvement;
    return !!mouvement?.cfStreamUid && mouvement.cfStreamStatus === "ready";
  });
  urlIframeCloudflare = computed(() => {
    const uid = this.exerciceActuel()?.mouvement.cfStreamUid;
    if (!uid)
      return null;
    const url = `https://${environment.cfStreamCustomerCode}.cloudflarestream.com/${uid}/iframe?autoplay=true&muted=true&loop=true&controls=true`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
  progression = computed(() => {
    const total = this.mouvements().length;
    return total ? Math.round((this.indexActuel() + 1) / total * 100) : 0;
  });
  totalSeries = computed(() => this.exerciceActuel()?.series ?? 0);
  plageSeries = computed(() => Array.from({ length: this.totalSeries() }, (_, i) => i + 1));
  /** Vrai s'il s'agit de la dernière série (ou d'un exercice sans découpage en séries). */
  estDerniereSerie = computed(() => {
    const total = this.totalSeries();
    return total <= 1 || this.serieActuelle() >= total;
  });
  libelleTempsRepos = computed(() => {
    const s = Math.max(0, this.tempsRepos());
    const minutes = Math.floor(s / 60);
    const secondes = s % 60;
    return `${minutes}:${String(secondes).padStart(2, "0")}`;
  });
  /** Donnée principale de l'exercice : le temps s'il y en a un, sinon les répétitions. Jamais les deux à la fois. */
  donneePrincipaleTexte = computed(() => {
    const temps = this.tempsRestant();
    if (temps !== null)
      return String(temps);
    return this.exerciceActuel()?.repetitions?.trim() || null;
  });
  donneePrincipaleLabel = computed(() => {
    if (this.tempsRestant() !== null)
      return this.tempsRestant() === 1 ? "Seconde" : "Secondes";
    return this.exerciceActuel()?.repetitions ? "R\xE9p\xE9titions" : null;
  });
  /** Les répétitions saisies vont d'un simple "12" à une phrase entière ("100 pompages (10x10)") :
   *  on réduit la taille du chiffre selon sa longueur pour ne jamais casser la mise en page. */
  donneePrincipaleTaille = computed(() => {
    const longueur = (this.donneePrincipaleTexte() ?? "").length;
    if (longueur <= 4)
      return "xl";
    if (longueur <= 14)
      return "lg";
    return "md";
  });
  constructor(route, seanceService, historiqueService, auth, lang, sanitizer) {
    this.route = route;
    this.seanceService = seanceService;
    this.historiqueService = historiqueService;
    this.auth = auth;
    this.lang = lang;
    this.sanitizer = sanitizer;
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
    if (this.reposIntervalId)
      clearInterval(this.reposIntervalId);
    if (this.fermetureAutoId)
      clearTimeout(this.fermetureAutoId);
    this.audioContext?.close();
  }
  basculerPause() {
    const video = this.videoElRef?.nativeElement;
    if (!video)
      return;
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
  /** Action du bouton principal : passe en repos chronométré avant la série suivante,
   *  ou directement à l'exercice suivant sur la dernière série. */
  validerEtape() {
    if (this.estDerniereSerie()) {
      this.exerciceSuivant();
    } else {
      this.demarrerRepos();
    }
  }
  exerciceSuivant() {
    this.arreterRepos();
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
  /** Passe à la série suivante du même exercice. Sur l'avant-dernière série validée
   *  (on entre alors dans la dernière), affiche le bandeau d'encouragement. */
  serieSuivante() {
    const prochaine = this.serieActuelle() + 1;
    this.serieActuelle.set(prochaine);
    if (prochaine === this.totalSeries() && !this.encouragementDejaAffichePourExercice) {
      this.encouragementDejaAffichePourExercice = true;
      this.afficherEncouragement();
    }
    this.enPause.set(false);
    this.demarrerMinuteur();
  }
  /** Ouvre l'écran de repos plein écran (1 min 30) avant la série suivante ; reprend seul à zéro. */
  demarrerRepos() {
    this.arreterMinuteur();
    this.enRepos.set(true);
    this.tempsRepos.set(DUREE_REPOS_S);
    this.reposIntervalId = setInterval(() => {
      const restant = this.tempsRepos();
      if (restant <= 1) {
        this.arreterRepos();
        this.serieSuivante();
        return;
      }
      const nouveauTemps = restant - 1;
      this.tempsRepos.set(nouveauTemps);
      if (nouveauTemps <= 3 && nouveauTemps >= 1) {
        this.jouerBip();
      }
    }, 1e3);
  }
  arreterRepos() {
    if (this.reposIntervalId) {
      clearInterval(this.reposIntervalId);
      this.reposIntervalId = void 0;
    }
    this.enRepos.set(false);
  }
  /** Bip du décompte 3-2-1 avant la reprise. Créé au clic (geste utilisateur) pour éviter
   *  le blocage autoplay des navigateurs sur l'audio déclenché par un minuteur. */
  obtenirAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
    return this.audioContext;
  }
  jouerBip() {
    const ctx = this.obtenirAudioContext();
    const oscillateur = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillateur.type = "sine";
    oscillateur.frequency.value = 880;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.15);
    oscillateur.connect(gain).connect(ctx.destination);
    oscillateur.start();
    oscillateur.stop(ctx.currentTime + 0.15);
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
    this.serieActuelle.set(1);
    this.encouragementDejaAffichePourExercice = false;
    if (this.fermetureAutoId)
      clearTimeout(this.fermetureAutoId);
    const etaitVisible = this.encouragementVisible();
    this.encouragementVisible.set(false);
    if (etaitVisible)
      this.animerBandeau();
  }
  afficherEncouragement() {
    const citations = this.lang.langue() === "en" ? CITATIONS_DERNIERE_SERIE_EN : CITATIONS_DERNIERE_SERIE;
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
        this.validerEtape();
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
    return new (__ngFactoryType__ || _EntrainementComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(HistoriqueService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrainementComponent, selectors: [["app-entrainement"]], viewQuery: function EntrainementComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoElRef = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [["videoRef", ""], [1, "etat-entrainement"], [1, "ecran-fin"], [1, "ecran-repos"], [1, "entrainement"], ["routerLink", "/", 1, "btn-secondaire"], [1, "fin-contenu"], [1, "fin-badge"], [1, "erreur"], [1, "btn-primaire", "btn-large", 3, "disabled"], [1, "connexion-requise"], [1, "btn-primaire", "btn-large", 3, "click", "disabled"], ["routerLink", "/connexion"], [1, "fin-badge", "fin-badge-succes"], [1, "fin-actions"], ["routerLink", "/calendrier", 1, "btn-primaire", "btn-large"], [1, "repos-badge"], [1, "repos-chrono"], [1, "repos-texte"], [1, "repos-suivant"], ["role", "status", 1, "bandeau-encouragement"], ["nom", "check", 3, "taille"], ["aria-label", "Fermer", 3, "click"], ["nom", "close", 3, "taille"], [1, "entrainement-header"], [1, "quitter", 3, "routerLink"], [1, "barre-progression"], [1, "barre-remplie"], [1, "compteur"], [1, "exercice-infos"], [1, "serie-position"], [1, "donnee-principale"], ["role", "group", "aria-label", "Progression des s\xE9ries", 1, "indicateur-series"], [1, "video-conteneur"], ["allow", "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;", "allowfullscreen", "", 1, "video-exercice", 3, "src"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", 1, "video-exercice", 3, "src"], [1, "zone-controles"], [1, "controles"], [1, "btn-rond-controle"], [1, "btn-primaire", "btn-large", 3, "click"], ["nom", "arrow-right", 3, "taille"], [1, "exercice-suivant"], [1, "donnee-chiffre"], [1, "donnee-label"], [1, "point-serie"], [1, "trait-serie", 3, "trait-fait"], [1, "trait-serie"], [1, "btn-rond-controle", 3, "click"], [3, "nom", "taille"]], template: function EntrainementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EntrainementComponent_Conditional_0_Template, 4, 3, "div", 1)(1, EntrainementComponent_Conditional_1_Template, 7, 6, "div", 1)(2, EntrainementComponent_Conditional_2_Template, 4, 1, "div", 2)(3, EntrainementComponent_Conditional_3_Template, 10, 10, "div", 3)(4, EntrainementComponent_Conditional_4_Template, 35, 31, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.chargement() ? 0 : !ctx.seance() || ctx.mouvements().length === 0 ? 1 : ctx.terminee() ? 2 : ctx.enRepos() ? 3 : 4);
    }
  }, dependencies: [CommonModule, RouterLink, IconComponent, TranslatePipe, LocalisePipe], styles: ["\n\n.etat-entrainement[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  color: var(--text-secondary);\n  background: #000;\n}\n.entrainement[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #000;\n  padding: 32px 24px 64px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 28px;\n}\n@media (max-width: 720px) {\n  .entrainement[_ngcontent-%COMP%] {\n    padding: 20px 16px 48px;\n    gap: 20px;\n  }\n}\n.bandeau-encouragement[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background: var(--accent-primary);\n  color: #000;\n  box-shadow: 0 8px 30px rgba(var(--accent-rgb), 0.35);\n  transform: translateY(-120%);\n}\n.bandeau-encouragement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  font-weight: 800;\n  font-size: 15px;\n}\n.bandeau-encouragement[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.1);\n  border: none;\n  color: #000;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.bandeau-encouragement[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 720px) {\n  .bandeau-encouragement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.entrainement-header[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 900px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.quitter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.quitter[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.barre-progression[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n}\n.barre-remplie[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent-primary);\n  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.6);\n  transition: width 0.3s ease;\n}\n.compteur[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.video-conteneur[_ngcontent-%COMP%] {\n  width: auto;\n  height: min(42vh, 420px);\n  max-width: 100%;\n  aspect-ratio: 9 / 16;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: 0 0 80px rgba(var(--accent-rgb), 0.14);\n  background: var(--bg-card);\n}\n@media (max-width: 720px) {\n  .video-conteneur[_ngcontent-%COMP%] {\n    height: min(34vh, 340px);\n  }\n}\n.video-exercice[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.exercice-infos[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  text-align: center;\n}\n.exercice-infos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3.4vw, 36px);\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  letter-spacing: 0.2px;\n}\n.serie-position[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin-bottom: 20px;\n}\n.donnee-principale[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 420px;\n  margin: 0 auto 24px;\n  padding: 0 12px;\n}\n.donnee-chiffre[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 800;\n  line-height: 1.1;\n  color: var(--accent-primary);\n  text-shadow: 0 0 40px rgba(var(--accent-rgb), 0.35);\n}\n.donnee-chiffre-xl[_ngcontent-%COMP%] {\n  font-size: clamp(64px, 14vw, 96px);\n}\n.donnee-chiffre-lg[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 7vw, 48px);\n}\n.donnee-chiffre-md[_ngcontent-%COMP%] {\n  font-size: clamp(22px, 5vw, 30px);\n}\n.donnee-label[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n.indicateur-series[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.point-serie[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1.5px solid rgba(255, 255, 255, 0.24);\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.point-serie.point-fait[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.4);\n  border-color: rgba(var(--accent-rgb), 0.4);\n}\n.point-serie.point-actuel[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background: var(--accent-primary);\n  border-color: var(--accent-primary);\n  box-shadow: 0 0 14px rgba(var(--accent-rgb), 0.6);\n}\n.trait-serie[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 2px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.14);\n  transition: background 0.25s ease;\n}\n.trait-serie.trait-fait[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.4);\n}\n.zone-controles[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n}\n.controles[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.controles[_ngcontent-%COMP%]   .btn-primaire[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n.btn-rond-controle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: var(--text-primary);\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-rond-controle[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-primary);\n  color: var(--accent-primary);\n}\n.exercice-suivant[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n}\n.ecran-repos[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 24px;\n  background:\n    radial-gradient(\n      circle at 50% 30%,\n      rgba(var(--accent-rgb), 0.14),\n      transparent 60%),\n    #000;\n}\n.repos-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: rgba(var(--accent-rgb), 0.15);\n  border: 1px solid var(--accent-primary);\n  color: var(--accent-primary);\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 28px;\n}\n.repos-chrono[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 800;\n  font-size: clamp(80px, 20vw, 160px);\n  line-height: 1;\n  color: var(--text-primary);\n  text-shadow: 0 0 60px rgba(var(--accent-rgb), 0.35);\n  font-variant-numeric: tabular-nums;\n  transition: color 0.2s ease, text-shadow 0.2s ease;\n}\n.repos-chrono-alerte[_ngcontent-%COMP%] {\n  color: var(--danger);\n  text-shadow: 0 0 60px rgba(239, 68, 68, 0.45);\n}\n.repos-texte[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: var(--text-secondary);\n  font-size: 15px;\n  font-weight: 600;\n}\n.repos-suivant[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  opacity: 0.7;\n}\n.ecran-fin[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 24px;\n  background:\n    radial-gradient(\n      circle at 50% 30%,\n      rgba(var(--accent-rgb), 0.14),\n      transparent 60%),\n    #000;\n}\n.fin-contenu[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.fin-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: rgba(var(--accent-rgb), 0.15);\n  border: 1px solid var(--accent-primary);\n  color: var(--accent-primary);\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 24px;\n}\n.fin-contenu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 5vw, 56px);\n  color: var(--text-primary);\n  margin-bottom: 16px;\n}\n.fin-contenu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 24px;\n  line-height: 1.6;\n}\n.erreur[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.connexion-requise[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-weight: 700;\n}\n.fin-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=entrainement.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrainementComponent, { className: "EntrainementComponent" });
})();
export {
  EntrainementComponent
};
//# sourceMappingURL=chunk-YOGGUD5V.js.map
