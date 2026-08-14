import {
  GoogleAuthService
} from "./chunk-OCMAWFNC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-C2L7D3CQ.js";
import {
  AuthService
} from "./chunk-LKFKFO2I.js";
import {
  Router,
  RouterLink
} from "./chunk-LT5XQBJD.js";
import "./chunk-EZLIDOO3.js";
import "./chunk-MHOTHGQB.js";
import {
  CommonModule
} from "./chunk-U75DGTTD.js";
import {
  DestroyRef,
  TranslatePipe,
  TranslateService,
  signal,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-M2LWS2MJ.js";
import "./chunk-SNAKS5WD.js";

// src/app/features/auth/connexion.component.ts
function ConnexionComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.oauthMessage());
  }
}
function ConnexionComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ConnexionComponent_Conditional_26_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.prenom, $event) || (ctx_r0.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "auth.prenom"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.prenom);
  }
}
function ConnexionComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erreur());
  }
}
function ConnexionComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "a", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, "auth.dejaCompte"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "auth.seConnecter"));
  }
}
function ConnexionComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "a", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, "auth.pasDeCompte"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "auth.sInscrire"));
  }
}
var ConnexionComponent = class _ConnexionComponent {
  auth;
  router;
  translate;
  googleAuth;
  destroyRef;
  titreKey = "nav.connexion";
  prenom = "";
  email = "";
  password = "";
  erreur = signal(null);
  enCours = signal(false);
  estInscription = false;
  oauthMessage = signal(null);
  constructor(auth, router, translate, googleAuth, destroyRef) {
    this.auth = auth;
    this.router = router;
    this.translate = translate;
    this.googleAuth = googleAuth;
    this.destroyRef = destroyRef;
    this.googleAuth.resultat$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((accessToken) => this.connecterAvecGoogle(accessToken));
    this.googleAuth.erreur$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.erreur.set(this.translate.instant("auth.oauthErreur")));
    this.googleAuth.precharger();
  }
  soumettre() {
    this.erreur.set(null);
    this.enCours.set(true);
    this.auth.connexion(this.email, this.password).subscribe({
      next: () => this.router.navigateByUrl("/"),
      error: (err) => {
        this.erreur.set(err?.error?.message || "Une erreur est survenue");
        this.enCours.set(false);
      }
    });
  }
  connexionOAuth(fournisseur) {
    if (fournisseur === "google") {
      this.erreur.set(null);
      this.googleAuth.declencherConnexion();
      return;
    }
    this.oauthMessage.set(this.translate.instant("auth.oauthBientot", { fournisseur: "Apple" }));
    setTimeout(() => this.oauthMessage.set(null), 3e3);
  }
  connecterAvecGoogle(accessToken) {
    this.erreur.set(null);
    this.enCours.set(true);
    this.auth.connexionGoogle(accessToken).subscribe({
      next: () => this.router.navigateByUrl("/"),
      error: (err) => {
        this.erreur.set(err?.error?.message || "Une erreur est survenue");
        this.enCours.set(false);
      }
    });
  }
  static \u0275fac = function ConnexionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnexionComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(GoogleAuthService), \u0275\u0275directiveInject(DestroyRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnexionComponent, selectors: [["app-connexion"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 30, consts: [[1, "conteneur-auth"], [1, "carte-auth"], [1, "boutons-oauth"], ["type", "button", 1, "btn-oauth", "btn-oauth-google", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "aria-hidden", "true"], ["d", "M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62Z", "fill", "#4285F4"], ["d", "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18Z", "fill", "#34A853"], ["d", "M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.03l3-2.33Z", "fill", "#FBBC05"], ["d", "M9 3.58c1.32 0 2.5.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .95 4.97l3 2.33C4.66 5.17 6.65 3.58 9 3.58Z", "fill", "#EA4335"], ["type", "button", 1, "btn-oauth", "btn-oauth-apple", 3, "click"], ["width", "16", "height", "18", "viewBox", "0 0 16 18", "fill", "currentColor", "aria-hidden", "true"], ["d", "M13.1 9.53c-.02-2.02 1.65-2.99 1.72-3.04-.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.43.73-3.06.73-.63 0-1.6-.71-2.63-.7-1.35.02-2.6.79-3.3 1.99-1.4 2.44-.36 6.05 1.02 8.03.67.96 1.47 2.05 2.51 2.01 1.01-.04 1.39-.65 2.61-.65 1.21 0 1.56.65 2.62.63 1.08-.02 1.77-.98 2.43-1.95a8.6 8.6 0 0 0 1.09-2.26 3.72 3.72 0 0 1-2.09-3.21Z"], ["d", "M11.06 3.5c.55-.67.92-1.6.82-2.5-.79.03-1.75.53-2.32 1.18-.51.58-.96 1.53-.84 2.44.88.06 1.79-.44 2.34-1.12Z"], [1, "oauth-message"], [1, "separateur"], [3, "ngSubmit"], ["type", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "6", 3, "ngModelChange", "ngModel"], [1, "erreur"], ["type", "submit", 1, "btn-primaire", 3, "disabled"], [1, "lien-alt"], ["routerLink", "/connexion"], ["routerLink", "/inscription"], ["type", "text", "name", "prenom", "required", "", 3, "ngModelChange", "ngModel"]], template: function ConnexionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
      \u0275\u0275listener("click", function ConnexionComponent_Template_button_click_6_listener() {
        return ctx.connexionOAuth("google");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 4);
      \u0275\u0275element(8, "path", 5)(9, "path", 6)(10, "path", 7)(11, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function ConnexionComponent_Template_button_click_14_listener() {
        return ctx.connexionOAuth("apple");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 10);
      \u0275\u0275element(16, "path", 11)(17, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, ConnexionComponent_Conditional_20_Template, 2, 1, "p", 13);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 14)(22, "span");
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "form", 15);
      \u0275\u0275listener("ngSubmit", function ConnexionComponent_Template_form_ngSubmit_25_listener() {
        return ctx.soumettre();
      });
      \u0275\u0275template(26, ConnexionComponent_Conditional_26_Template, 4, 4, "label");
      \u0275\u0275elementStart(27, "label");
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementStart(30, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ConnexionComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "label");
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementStart(34, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ConnexionComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, ConnexionComponent_Conditional_35_Template, 2, 1, "p", 18);
      \u0275\u0275elementStart(36, "button", 19);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 20);
      \u0275\u0275template(41, ConnexionComponent_Conditional_41_Template, 5, 6, "a", 21)(42, ConnexionComponent_Conditional_42_Template, 5, 6, "a", 22);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, ctx.titreKey));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "auth.continuerGoogle"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 18, "auth.continuerApple"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.oauthMessage() ? 20 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 20, "auth.ou"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.estInscription ? 26 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 22, "auth.email"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 24, "auth.motDePasse"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erreur() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.enCours());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.enCours() ? \u0275\u0275pipeBind1(38, 26, "auth.patiente") : \u0275\u0275pipeBind1(39, 28, ctx.titreKey), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.estInscription ? 41 : 42);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterLink, TranslatePipe], styles: ['\n\n.conteneur-auth[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 84px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.carte-auth[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 36px;\n}\n.carte-auth[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 24px;\n}\n.boutons-oauth[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.btn-oauth[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 11px 16px;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all var(--transition);\n  margin-top: 0;\n}\n.btn-oauth-google[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1f1f1f;\n  border: 1px solid var(--border);\n}\n.btn-oauth-google[_ngcontent-%COMP%]:hover {\n  background: #f4f4f4;\n}\n.btn-oauth-apple[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  border: 1px solid #000;\n}\n.btn-oauth-apple[_ngcontent-%COMP%]:hover {\n  background: #1a1a1a;\n}\n.oauth-message[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 12.5px;\n  color: var(--accent-primary);\n  text-align: center;\n}\n.separateur[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 22px 0;\n  color: var(--text-tertiary);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.separateur[_ngcontent-%COMP%]::before, \n.separateur[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border);\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\ninput[_ngcontent-%COMP%] {\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 12px 14px;\n  color: var(--text-primary);\n  font-size: 15px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--teal);\n}\n.erreur[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 13px;\n  margin: 0;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.lien-alt[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.lien-alt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--teal);\n  font-weight: 600;\n}\n/*# sourceMappingURL=auth-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnexionComponent, { className: "ConnexionComponent" });
})();
export {
  ConnexionComponent
};
//# sourceMappingURL=chunk-MUS2AVNO.js.map
