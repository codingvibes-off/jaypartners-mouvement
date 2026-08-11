import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Mouvement } from '../models/models';

@Injectable({ providedIn: 'root' })
export class MouvementService {
  private baseUrl = `${environment.apiUrl}/mouvements`;

  constructor(private http: HttpClient) {}

  obtenirTous(): Observable<Mouvement[]> {
    return this.http.get<Mouvement[]>(this.baseUrl);
  }
}
