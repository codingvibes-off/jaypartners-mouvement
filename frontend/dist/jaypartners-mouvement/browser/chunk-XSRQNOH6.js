import {
  environment
} from "./chunk-Z2S5QJHA.js";
import {
  HttpClient
} from "./chunk-I4QZ5BRR.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-N2MMUZ74.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/seance.service.ts
var SeanceService = class _SeanceService {
  http;
  baseUrl = `${environment.apiUrl}/seances`;
  constructor(http) {
    this.http = http;
  }
  obtenirCatalogue(genre) {
    const params = genre ? { genre } : {};
    return this.http.get(this.baseUrl, { params });
  }
  obtenirParCategorie(categorie) {
    return this.http.get(this.baseUrl, { params: { categorie } }).pipe(map((rangees) => rangees.flatMap((r) => r.seances)));
  }
  obtenirDetail(id) {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(map((seance) => __spreadProps(__spreadValues({}, seance), { mouvements: seance.mouvements ?? [] })));
  }
  static \u0275fac = function SeanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeanceService, factory: _SeanceService.\u0275fac, providedIn: "root" });
};

export {
  SeanceService
};
//# sourceMappingURL=chunk-XSRQNOH6.js.map
