import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  obtenirDetail(id: string): Observable<Seance> {
    return this.http.get<Seance>(`${this.baseUrl}/${id}`);
  }
}
