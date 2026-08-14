import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HistoriqueService } from '../../core/services/historique.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LangService } from '../../core/services/lang.service';
import { HistoriqueEntry } from '../../core/models/models';

interface JourCalendrier {
  date: Date;
  dansLeMois: boolean;
  cleJour: string;
  entrees: HistoriqueEntry[];
}

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [CommonModule, IconComponent, TranslatePipe],
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
})
export class CalendrierComponent implements OnInit {
  chargement = signal(true);
  historique = signal<HistoriqueEntry[]>([]);
  moisAffiche = signal<Date>(this.premierJourDuMois(new Date()));
  jourSelectionne = signal<JourCalendrier | null>(null);

  entreesParJour = computed<Map<string, HistoriqueEntry[]>>(() => {
    const map = new Map<string, HistoriqueEntry[]>();
    for (const entree of this.historique()) {
      const cle = this.cleJour(new Date(entree.createdAt));
      if (!map.has(cle)) map.set(cle, []);
      map.get(cle)!.push(entree);
    }
    return map;
  });

  joursGrille = computed<JourCalendrier[]>(() => {
    const mois = this.moisAffiche();
    const annee = mois.getFullYear();
    const moisIndex = mois.getMonth();
    const premierJourSemaine = (new Date(annee, moisIndex, 1).getDay() + 6) % 7; // lundi = 0
    const nbJoursMois = new Date(annee, moisIndex + 1, 0).getDate();
    const map = this.entreesParJour();

    const jours: JourCalendrier[] = [];

    for (let i = 0; i < premierJourSemaine; i++) {
      const date = new Date(annee, moisIndex, 1 - (premierJourSemaine - i));
      jours.push({ date, dansLeMois: false, cleJour: this.cleJour(date), entrees: [] });
    }

    for (let jour = 1; jour <= nbJoursMois; jour++) {
      const date = new Date(annee, moisIndex, jour);
      const cle = this.cleJour(date);
      jours.push({ date, dansLeMois: true, cleJour: cle, entrees: map.get(cle) ?? [] });
    }

    while (jours.length % 7 !== 0) {
      const derniere = jours[jours.length - 1].date;
      const date = new Date(derniere);
      date.setDate(date.getDate() + 1);
      jours.push({ date, dansLeMois: false, cleJour: this.cleJour(date), entrees: [] });
    }

    return jours;
  });

  entreesJourSelectionne = computed<HistoriqueEntry[]>(() => this.jourSelectionne()?.entrees ?? []);

  libelleJourSelectionne = computed<string>(() => {
    const jour = this.jourSelectionne();
    if (!jour) return '';
    const locale = this.lang.langue() === 'en' ? 'en-US' : 'fr-FR';
    return jour.date.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' });
  });

  libelleMois = computed<string>(() => {
    const locale = this.lang.langue() === 'en' ? 'en-US' : 'fr-FR';
    return this.moisAffiche().toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  });

  constructor(
    private historiqueService: HistoriqueService,
    public lang: LangService,
  ) {}

  ngOnInit(): void {
    this.historiqueService.obtenirHistorique().subscribe({
      next: (entries) => {
        this.historique.set(entries);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }

  moisPrecedent(): void {
    const mois = this.moisAffiche();
    this.moisAffiche.set(new Date(mois.getFullYear(), mois.getMonth() - 1, 1));
  }

  moisSuivant(): void {
    const mois = this.moisAffiche();
    this.moisAffiche.set(new Date(mois.getFullYear(), mois.getMonth() + 1, 1));
  }

  selectionnerJour(jour: JourCalendrier): void {
    if (jour.entrees.length === 0) return;
    this.jourSelectionne.set(this.jourSelectionne()?.cleJour === jour.cleJour ? null : jour);
  }

  estAujourdhui(date: Date): boolean {
    return this.cleJour(date) === this.cleJour(new Date());
  }

  private premierJourDuMois(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  private cleJour(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }
}
