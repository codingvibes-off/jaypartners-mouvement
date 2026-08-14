import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EngagementHebdomadaire, JourSemaine } from '../models/models';

@Injectable({ providedIn: 'root' })
export class EngagementService {
  private baseUrl = `${environment.apiUrl}/engagements`;

  constructor(private http: HttpClient) {}

  creerEngagement(seanceId: string, jour: JourSemaine): Observable<EngagementHebdomadaire> {
    return this.http.post<EngagementHebdomadaire>(this.baseUrl, { seanceId, jour });
  }

  obtenirEngagement(seanceId: string): Observable<EngagementHebdomadaire | null> {
    return this.http.get<EngagementHebdomadaire | null>(`${this.baseUrl}/${seanceId}`);
  }

  supprimerEngagement(seanceId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${seanceId}`);
  }
}
