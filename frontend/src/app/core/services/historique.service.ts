import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HistoriqueEntry, ReponseValidation } from '../models/models';

@Injectable({ providedIn: 'root' })
export class HistoriqueService {
  private baseUrl = `${environment.apiUrl}/historique`;

  constructor(private http: HttpClient) {}

  validerSeance(seanceId: string): Observable<ReponseValidation> {
    return this.http.post<ReponseValidation>(this.baseUrl, { seanceId });
  }

  obtenirHistorique(): Observable<HistoriqueEntry[]> {
    return this.http.get<HistoriqueEntry[]>(this.baseUrl);
  }
}
