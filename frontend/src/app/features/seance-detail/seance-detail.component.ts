import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import jsPDF from 'jspdf';
import { SeanceService } from '../../core/services/seance.service';
import { MovementCardComponent } from '../../shared/components/movement-card/movement-card.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Seance } from '../../core/models/models';

@Component({
  selector: 'app-seance-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MovementCardComponent, IconComponent],
  templateUrl: './seance-detail.component.html',
  styleUrls: ['./seance-detail.component.css'],
})
export class SeanceDetailComponent implements OnInit {
  seance = signal<Seance | null>(null);
  chargement = signal(true);

  constructor(private route: ActivatedRoute, private seanceService: SeanceService) {}

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

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    const titreLignes = doc.splitTextToSize(seance.titre, largeurUtile);
    doc.text(titreLignes, margeGauche, y);
    y += titreLignes.length * 8 + 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(90, 90, 90);
    doc.text(`${seance.niveau} · ${seance.dureeMin} min · ${seance.genre}`, margeGauche, y);
    y += 8;

    if (seance.description) {
      doc.setFontSize(10);
      const descLignes = doc.splitTextToSize(seance.description, largeurUtile);
      doc.text(descLignes, margeGauche, y);
      y += descLignes.length * 5 + 6;
    }

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    sauterPage(10);
    doc.text('Mouvements de la séance', margeGauche, y);
    y += 8;
    doc.setDrawColor(200, 200, 200);
    doc.line(margeGauche, y - 4, margeGauche + largeurUtile, y - 4);

    const mouvements = seance.mouvements ?? [];
    mouvements.forEach((sm, i) => {
      sauterPage(16);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(`${i + 1}. ${sm.mouvement.nom}`, margeGauche, y);
      y += 6;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(90, 90, 90);
      const details: string[] = [];
      if (sm.mouvement.muscleprincipal) details.push(sm.mouvement.muscleprincipal);
      if (sm.series) details.push(`${sm.series} séries`);
      if (sm.repetitions) details.push(sm.repetitions);
      if (details.length) {
        doc.text(details.join(' · '), margeGauche + 4, y);
        y += 6;
      }
      doc.setTextColor(0, 0, 0);
      y += 4;
    });

    const nomFichier = `programme-${this.slugifier(seance.titre)}.pdf`;
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
