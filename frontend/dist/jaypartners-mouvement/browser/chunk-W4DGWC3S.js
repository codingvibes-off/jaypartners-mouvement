import {
  MouvementService
} from "./chunk-MUWTGGQF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-C2L7D3CQ.js";
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
  TranslateService,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M2LWS2MJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-SNAKS5WD.js";

// src/app/features/admin-videos/admin-videos.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminVideosComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "admin.chargement"));
  }
}
function AdminVideosComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "admin.aucunResultat"));
  }
}
function AdminVideosComponent_Conditional_15_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const mouvement_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", (tmp_12_0 = ctx_r2.etatPour(mouvement_r2.id)) == null ? null : tmp_12_0.progression, "%");
  }
}
function AdminVideosComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "localise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "localise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminVideosComponent_Conditional_15_For_2_Conditional_10_Template, 2, 2, "div", 11);
    \u0275\u0275elementStart(11, "label", 12);
    \u0275\u0275element(12, "app-icon", 13);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "input", 14);
    \u0275\u0275listener("change", function AdminVideosComponent_Conditional_15_For_2_Template_input_change_15_listener($event) {
      const mouvement_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.surChangementFichier($event, mouvement_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const mouvement_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(4, 8, mouvement_r2.nom, mouvement_r2.nomEn, ctx_r2.lang.langue()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(7, 12, mouvement_r2.muscleprincipal, mouvement_r2.muscleprincipalEn, ctx_r2.lang.langue()));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statutBadge(mouvement_r2).classe);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statutBadge(mouvement_r2).texte, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_15_0 = ctx_r2.etatPour(mouvement_r2.id)) == null ? null : tmp_15_0.phase) === "envoi" ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("taille", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "admin.choisirVideo"), " ");
  }
}
function AdminVideosComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, AdminVideosComponent_Conditional_15_For_2_Template, 16, 18, "div", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.mouvementsFiltres);
  }
}
var INTERVALLE_POLLING_MS = 3e3;
var TENTATIVES_MAX = 40;
var AdminVideosComponent = class _AdminVideosComponent {
  mouvementService;
  translate;
  lang;
  mouvements = signal([]);
  chargement = signal(true);
  filtre = signal("");
  etatsUpload = signal({});
  intervallesActifs = [];
  constructor(mouvementService, translate, lang) {
    this.mouvementService = mouvementService;
    this.translate = translate;
    this.lang = lang;
  }
  ngOnInit() {
    this.mouvementService.obtenirTous().subscribe({
      next: (mouvements) => {
        this.mouvements.set(mouvements);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false)
    });
  }
  ngOnDestroy() {
    this.intervallesActifs.forEach((id) => clearInterval(id));
  }
  get mouvementsFiltres() {
    const filtre = this.filtre().trim().toLowerCase();
    if (!filtre)
      return this.mouvements();
    return this.mouvements().filter((m) => m.nom.toLowerCase().includes(filtre));
  }
  etatPour(mouvementId) {
    return this.etatsUpload()[mouvementId];
  }
  statutBadge(mouvement) {
    const etat = this.etatPour(mouvement.id);
    if (etat) {
      if (etat.phase === "envoi") {
        return {
          texte: this.translate.instant("admin.statutEnvoi", { n: etat.progression }),
          classe: "badge-attente"
        };
      }
      if (etat.phase === "encodage") {
        return { texte: this.translate.instant("admin.statutEncodage"), classe: "badge-attente" };
      }
      if (etat.phase === "erreur") {
        return { texte: etat.message || this.translate.instant("admin.statutErreur"), classe: "badge-erreur" };
      }
      if (etat.phase === "pret") {
        return { texte: this.translate.instant("admin.statutPrete"), classe: "badge-pret" };
      }
    }
    if (mouvement.cfStreamStatus === "ready") {
      return { texte: this.translate.instant("admin.statutPrete"), classe: "badge-pret" };
    }
    if (mouvement.cfStreamStatus === "uploading") {
      return { texte: this.translate.instant("admin.statutEnCours"), classe: "badge-attente" };
    }
    if (mouvement.cfStreamStatus === "error") {
      return { texte: this.translate.instant("admin.statutErreur"), classe: "badge-erreur" };
    }
    return { texte: this.translate.instant("admin.statutVideoParDefaut"), classe: "badge-neutre" };
  }
  surChangementFichier(event, mouvement) {
    const input = event.target;
    const fichier = input.files?.[0];
    if (!fichier)
      return;
    this.demarrerUpload(mouvement, fichier);
    input.value = "";
  }
  demarrerUpload(mouvement, fichier) {
    this.mettreAJourEtat(mouvement.id, { phase: "envoi", progression: 0 });
    this.mouvementService.creerUploadVideo(mouvement.id).subscribe({
      next: ({ uploadURL }) => this.envoyerFichier(uploadURL, fichier, mouvement.id),
      error: () => this.mettreAJourEtat(mouvement.id, {
        phase: "erreur",
        progression: 0,
        message: this.translate.instant("admin.erreurDemarrageUpload")
      })
    });
  }
  envoyerFichier(uploadURL, fichier, mouvementId) {
    const formData = new FormData();
    formData.append("file", fichier);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", uploadURL);
    xhr.upload.onprogress = (evt) => {
      if (!evt.lengthComputable)
        return;
      const progression = Math.round(evt.loaded / evt.total * 100);
      this.mettreAJourEtat(mouvementId, { phase: "envoi", progression });
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        this.mettreAJourEtat(mouvementId, { phase: "encodage", progression: 100 });
        this.demarrerPolling(mouvementId);
      } else {
        this.mettreAJourEtat(mouvementId, {
          phase: "erreur",
          progression: 0,
          message: this.translate.instant("admin.erreurEnvoi")
        });
      }
    };
    xhr.onerror = () => {
      this.mettreAJourEtat(mouvementId, {
        phase: "erreur",
        progression: 0,
        message: this.translate.instant("admin.erreurEnvoi")
      });
    };
    xhr.send(formData);
  }
  demarrerPolling(mouvementId) {
    let tentatives = 0;
    const intervalle = setInterval(() => {
      tentatives++;
      this.mouvementService.obtenirStatutVideo(mouvementId).subscribe({
        next: ({ cfStreamStatus }) => {
          if (cfStreamStatus === "ready") {
            this.mettreAJourEtat(mouvementId, { phase: "pret", progression: 100 });
            this.mettreAJourMouvementLocal(mouvementId, "ready");
            clearInterval(intervalle);
          } else if (cfStreamStatus === "error") {
            this.mettreAJourEtat(mouvementId, {
              phase: "erreur",
              progression: 0,
              message: this.translate.instant("admin.erreurEncodage")
            });
            this.mettreAJourMouvementLocal(mouvementId, "error");
            clearInterval(intervalle);
          } else if (tentatives >= TENTATIVES_MAX) {
            this.mettreAJourEtat(mouvementId, {
              phase: "erreur",
              progression: 0,
              message: this.translate.instant("admin.erreurEncodageLong")
            });
            clearInterval(intervalle);
          }
        },
        error: () => {
          if (tentatives >= TENTATIVES_MAX)
            clearInterval(intervalle);
        }
      });
    }, INTERVALLE_POLLING_MS);
    this.intervallesActifs.push(intervalle);
  }
  mettreAJourEtat(mouvementId, etat) {
    this.etatsUpload.update((etats) => __spreadProps(__spreadValues({}, etats), { [mouvementId]: etat }));
  }
  mettreAJourMouvementLocal(mouvementId, statut) {
    this.mouvements.update((mouvements) => mouvements.map((m) => m.id === mouvementId ? __spreadProps(__spreadValues({}, m), { cfStreamStatus: statut }) : m));
  }
  static \u0275fac = function AdminVideosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminVideosComponent)(\u0275\u0275directiveInject(MouvementService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminVideosComponent, selectors: [["app-admin-videos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 15, consts: [[1, "page-admin-videos"], ["routerLink", "/", 1, "retour"], ["nom", "arrow-left", 3, "taille"], [1, "sous-titre"], ["type", "text", 1, "recherche", 3, "ngModelChange", "placeholder", "ngModel"], [1, "etat"], [1, "liste-mouvements"], [1, "ligne-mouvement"], [1, "infos"], [1, "muscle"], [1, "badge"], [1, "barre-progression"], [1, "btn-secondaire", "btn-upload"], ["nom", "upload", 3, "taille"], ["type", "file", "accept", "video/*", 1, "input-fichier", 3, "change"], [1, "remplissage"]], template: function AdminVideosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "a", 1);
      \u0275\u0275element(2, "app-icon", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 3);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 4);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275listener("ngModelChange", function AdminVideosComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.filtre.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, AdminVideosComponent_Conditional_13_Template, 3, 3, "p", 5)(14, AdminVideosComponent_Conditional_14_Template, 3, 3, "p", 5)(15, AdminVideosComponent_Conditional_15_Template, 3, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("taille", 14);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "commun.retourCatalogue"), "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "admin.titre"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "admin.sousTitre"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 13, "admin.recherche"))("ngModel", ctx.filtre());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.chargement() ? 13 : !ctx.mouvementsFiltres.length ? 14 : 15);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, IconComponent, TranslatePipe, LocalisePipe], styles: ["\n\n.page-admin-videos[_ngcontent-%COMP%] {\n  padding: 40px 48px 60px;\n  max-width: 820px;\n}\n@media (max-width: 720px) {\n  .page-admin-videos[_ngcontent-%COMP%] {\n    padding: 24px 20px 40px;\n  }\n}\n.retour[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-secondary);\n  font-size: 13px;\n  margin-bottom: 18px;\n}\n.retour[_ngcontent-%COMP%]:hover {\n  color: var(--teal);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--text-primary);\n}\n.sous-titre[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  line-height: 1.6;\n  max-width: 560px;\n}\n.recherche[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  margin-top: 24px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.etat[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  color: var(--text-secondary);\n  text-align: center;\n}\n.liste-mouvements[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ligne-mouvement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 14px 16px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n}\n.infos[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 160px;\n}\n.infos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.muscle[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 5px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.badge-neutre[_ngcontent-%COMP%] {\n  background: var(--border);\n  color: var(--text-secondary);\n}\n.badge-attente[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--gold);\n}\n.badge-pret[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.15);\n  color: var(--teal);\n}\n.badge-erreur[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n}\n.barre-progression[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 140px;\n  height: 6px;\n  border-radius: 999px;\n  background: var(--border);\n  overflow: hidden;\n}\n.remplissage[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--teal);\n  transition: width 0.2s ease;\n}\n.btn-upload[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.input-fichier[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=admin-videos.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminVideosComponent, { className: "AdminVideosComponent" });
})();
export {
  AdminVideosComponent
};
//# sourceMappingURL=chunk-W4DGWC3S.js.map
