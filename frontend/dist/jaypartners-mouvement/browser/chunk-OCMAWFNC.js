import {
  environment
} from "./chunk-MHOTHGQB.js";
import {
  Subject,
  ɵɵdefineInjectable
} from "./chunk-M2LWS2MJ.js";

// src/app/core/services/google-auth.service.ts
var SCRIPT_ID = "google-identity-script";
var GoogleAuthService = class _GoogleAuthService {
  tokenClient;
  chargementPromesse;
  resultatSubject = new Subject();
  /** Émet l'access token à chaque connexion Google réussie. */
  resultat$ = this.resultatSubject.asObservable();
  erreurSubject = new Subject();
  erreur$ = this.erreurSubject.asObservable();
  /** Préchauffe le script + le client dès que possible (ex: à l'ouverture de la page de
   *  connexion), pour que declencherConnexion() puisse ouvrir la popup de façon synchrone
   *  avec le clic utilisateur — indispensable pour éviter le blocage popup des navigateurs. */
  precharger() {
    this.initialiserClient().catch(() => {
    });
  }
  declencherConnexion() {
    if (this.tokenClient) {
      this.tokenClient.requestAccessToken();
      return;
    }
    this.initialiserClient().then(() => this.tokenClient?.requestAccessToken()).catch(() => this.erreurSubject.next());
  }
  initialiserClient() {
    if (this.tokenClient)
      return Promise.resolve();
    if (!this.chargementPromesse) {
      this.chargementPromesse = this.chargerScript().then(() => {
        this.tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: environment.googleClientId,
          scope: "openid email profile",
          callback: (reponse) => {
            if (reponse?.access_token) {
              this.resultatSubject.next(reponse.access_token);
            } else {
              this.erreurSubject.next();
            }
          }
        });
      });
    }
    return this.chargementPromesse;
  }
  chargerScript() {
    if (window.google?.accounts?.oauth2)
      return Promise.resolve();
    return new Promise((resolve, reject) => {
      const existant = document.getElementById(SCRIPT_ID);
      if (existant) {
        existant.addEventListener("load", () => resolve());
        existant.addEventListener("error", () => reject());
        return;
      }
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }
  static \u0275fac = function GoogleAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoogleAuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleAuthService, factory: _GoogleAuthService.\u0275fac, providedIn: "root" });
};

export {
  GoogleAuthService
};
//# sourceMappingURL=chunk-OCMAWFNC.js.map
