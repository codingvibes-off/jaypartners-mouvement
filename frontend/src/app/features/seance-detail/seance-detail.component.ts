import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import jsPDF from 'jspdf';
import { SeanceService } from '../../core/services/seance.service';
import { MovementCardComponent } from '../../shared/components/movement-card/movement-card.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { EngagementHebdomadaire, JourSemaine, Seance } from '../../core/models/models';
import { LangService } from '../../core/services/lang.service';
import { LocalisePipe } from '../../shared/pipes/localise.pipe';
import { AuthService } from '../../core/services/auth.service';
import { EngagementService } from '../../core/services/engagement.service';

@Component({
  selector: 'app-seance-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MovementCardComponent, IconComponent, TranslatePipe, LocalisePipe],
  templateUrl: './seance-detail.component.html',
  styleUrls: ['./seance-detail.component.css'],
})
export class SeanceDetailComponent implements OnInit {
  seance = signal<Seance | null>(null);
  chargement = signal(true);

  engagement = signal<EngagementHebdomadaire | null>(null);
  modificationEngagement = signal(false);
  enregistrementEnCours = signal(false);
  readonly joursSemaine: JourSemaine[] = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];

  constructor(
    private route: ActivatedRoute,
    private seanceService: SeanceService,
    public lang: LangService,
    private translate: TranslateService,
    public auth: AuthService,
    private engagementService: EngagementService,
  ) {}

  /** Repli sur le français si la traduction anglaise est absente (même logique que LocalisePipe). */
  private localiser(fr: string, en?: string | null): string {
    return this.lang.langue() === 'en' && en ? en : fr;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.seanceService.obtenirDetail(id).subscribe({
      next: (seance) => {
        this.seance.set(seance);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });

    if (this.auth.estConnecte()) {
      this.engagementService.obtenirEngagement(id).subscribe({
        next: (engagement) => this.engagement.set(engagement),
        error: () => this.engagement.set(null),
      });
    }
  }

  choisirJour(jour: JourSemaine): void {
    const seance = this.seance();
    if (!seance || this.enregistrementEnCours()) return;

    this.enregistrementEnCours.set(true);
    this.engagementService.creerEngagement(seance.id, jour).subscribe({
      next: (engagement) => {
        this.engagement.set(engagement);
        this.modificationEngagement.set(false);
        this.enregistrementEnCours.set(false);
      },
      error: () => this.enregistrementEnCours.set(false),
    });
  }

  changerJour(): void {
    this.modificationEngagement.set(true);
  }

  annulerEngagement(): void {
    const seance = this.seance();
    if (!seance) return;

    this.engagementService.supprimerEngagement(seance.id).subscribe(() => {
      this.engagement.set(null);
      this.modificationEngagement.set(false);
    });
  }

  telechargerProgramme(): void {
    const seance = this.seance();
    if (!seance) return;

    const doc = new jsPDF();
    const margeGauche = 14;
    const largeurUtile = 182;
    let y = 20;

    const sauterPage = (hauteurNecessaire: number) => {
      if (y + hauteurNecessaire > 285) {
        doc.addPage();
        y = 20;
      }
    };

    const titre = this.localiser(seance.titre, seance.titreEn);
    const description = seance.description ? this.localiser(seance.description, seance.descriptionEn) : null;
    const niveau = this.translate.instant('niveau.' + seance.niveau) as string;
    const genre = this.translate.instant('genre.' + seance.genre) as string;
    const libelleMouvements = this.translate.instant('pdf.mouvements') as string;
    const libelleSeries = this.translate.instant('pdf.series') as string;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    const titreLignes = doc.splitTextToSize(titre, largeurUtile);
    doc.text(titreLignes, margeGauche, y);
    y += titreLignes.length * 8 + 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(90, 90, 90);
    doc.text(`${niveau} · ${seance.dureeMin} min · ${genre}`, margeGauche, y);
    y += 8;

    if (description) {
      doc.setFontSize(10);
      const descLignes = doc.splitTextToSize(description, largeurUtile);
      doc.text(descLignes, margeGauche, y);
      y += descLignes.length * 5 + 6;
    }

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    sauterPage(10);
    doc.text(libelleMouvements, margeGauche, y);
    y += 8;
    doc.setDrawColor(200, 200, 200);
    doc.line(margeGauche, y - 4, margeGauche + largeurUtile, y - 4);

    const mouvements = seance.mouvements ?? [];
    mouvements.forEach((sm, i) => {
      sauterPage(16);

      const nomMouvement = this.localiser(sm.mouvement.nom, sm.mouvement.nomEn);
      const muscle = sm.mouvement.muscleprincipal
        ? this.localiser(sm.mouvement.muscleprincipal, sm.mouvement.muscleprincipalEn)
        : null;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(`${i + 1}. ${nomMouvement}`, margeGauche, y);
      y += 6;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(90, 90, 90);
      const details: string[] = [];
      if (muscle) details.push(muscle);
      if (sm.series) details.push(`${sm.series} ${libelleSeries}`);
      if (sm.repetitions) details.push(sm.repetitions);
      if (details.length) {
        doc.text(details.join(' · '), margeGauche + 4, y);
        y += 6;
      }
      doc.setTextColor(0, 0, 0);
      y += 4;
    });

    const nomFichier = `programme-${this.slugifier(titre)}.pdf`;
    doc.save(nomFichier);
  }

  private slugifier(texte: string): string {
    return texte
      .normalize('NFD')
      .replace(new RegExp('[' + String.fromCharCode(0x0300) + '-' + String.fromCharCode(0x036f) + ']', 'g'), '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
}
