import {
  environment
} from "./chunk-MHOTHGQB.js";
import {
  HttpClient
} from "./chunk-U75DGTTD.js";
import {
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-M2LWS2MJ.js";

// src/app/core/services/auth.service.ts
var CLE_TOKEN = "nm_token";
var CLE_USER = "nm_user";
var AuthService = class _AuthService {
  http;
  baseUrl = `${environment.apiUrl}/auth`;
  utilisateurCourant = signal(this.recupererUserStocke());
  constructor(http) {
    this.http = http;
  }
  inscription(email, password, prenom) {
    return this.http.post(`${this.baseUrl}/inscription`, { email, password, prenom }).pipe(tap((res) => this.stockerSession(res)));
  }
  connexion(email, password) {
    return this.http.post(`${this.baseUrl}/connexion`, { email, password }).pipe(tap((res) => this.stockerSession(res)));
  }
  connexionGoogle(accessToken) {
    return this.http.post(`${this.baseUrl}/google`, { accessToken }).pipe(tap((res) => this.stockerSession(res)));
  }
  deconnexion() {
    localStorage.removeItem(CLE_TOKEN);
    localStorage.removeItem(CLE_USER);
    this.utilisateurCourant.set(null);
  }
  obtenirToken() {
    return localStorage.getItem(CLE_TOKEN);
  }
  estConnecte() {
    return !!this.obtenirToken();
  }
  stockerSession(res) {
    localStorage.setItem(CLE_TOKEN, res.token);
    localStorage.setItem(CLE_USER, JSON.stringify(res.user));
    this.utilisateurCourant.set(res.user);
  }
  recupererUserStocke() {
    const raw = localStorage.getItem(CLE_USER);
    return raw ? JSON.parse(raw) : null;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-LKFKFO2I.js.map
