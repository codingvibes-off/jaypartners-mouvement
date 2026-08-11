import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Genre, RangeeSeances, Seance } from '../models/models';

@Injectable({ providedIn: 'root' })
export class SeanceService {
  private baseUrl = `${environment.apiUrl}/seances`;

  constructor(private http: HttpClient) {}

  obtenirCatalogue(genre?: Genre): Observable<RangeeSeances[]> {
    const params: { genre?: Genre } = genre ? { genre } : {};
    return this.http.get<RangeeSeances[]>(this.baseUrl, { params });
  }

  obtenirParCategorie(categorie: string): Observable<Seance[]> {
    return this.http
      .get<RangeeSeances[]>(this.baseUrl, { params: { categorie } })
      .pipe(map((rangees) => rangees.flatMap((r) => r.seances)));
  }

  obtenirDetail(id: string): Observable<Seance> {
    return this.http
      .get<Seance>(`${this.baseUrl}/${id}`)
      .pipe(map((seance) => ({ ...seance, mouvements: seance.mouvements ?? [] })));
  }
}
