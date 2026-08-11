import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Z3NPIKQV.js";

// src/app/core/services/historique.service.ts
var HistoriqueService = class _HistoriqueService {
  http;
  baseUrl = `${environment.apiUrl}/historique`;
  constructor(http) {
    this.http = http;
  }
  validerSeance(seanceId) {
    return this.http.post(this.baseUrl, { seanceId });
  }
  obtenirHistorique() {
    return this.http.get(this.baseUrl);
  }
  static \u0275fac = function HistoriqueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoriqueService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HistoriqueService, factory: _HistoriqueService.\u0275fac, providedIn: "root" });
};

export {
  HistoriqueService
};
//# sourceMappingURL=chunk-SFZB4EW6.js.map
