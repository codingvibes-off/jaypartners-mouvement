import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seance } from '../../../core/models/models';
import { SeanceService } from '../../../core/services/seance.service';
import { IconComponent } from '../icon/icon.component';

const DELAI_SURVOL_MS = 500;
const JOURS_NOUVEAU = 30;

@Component({
  selector: 'app-seance-card',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './seance-card.component.html',
  styleUrls: ['./seance-card.component.css'],
})
export class SeanceCardComponent implements OnDestroy {
  @Input({ required: true }) seance!: Seance;
  @Input() rang?: number;
  @Input() estTop10 = false;

  survole = signal(false);
  videoApercu = signal<string | null>(null);
  videoEnErreur = signal(false);

  private minuteur?: ReturnType<typeof setTimeout>;

  constructor(private seanceService: SeanceService) {}

  get estNouveau(): boolean {
    if (!this.seance.createdAt) return false;
    const age = Date.now() - new Date(this.seance.createdAt).getTime();
    return age <= JOURS_NOUVEAU * 24 * 60 * 60 * 1000;
  }

  onSurvolEntree(): void {
    clearTimeout(this.minuteur);
    this.minuteur = setTimeout(() => {
      this.survole.set(true);
      this.chargerApercuVideo();
    }, DELAI_SURVOL_MS);
  }

  onSurvolSortie(): void {
    clearTimeout(this.minuteur);
    this.survole.set(false);
  }

  onErreurVideo(): void {
    this.videoEnErreur.set(true);
  }

  ngOnDestroy(): void {
    clearTimeout(this.minuteur);
  }

  private chargerApercuVideo(): void {
    if (this.videoApercu() || this.videoEnErreur()) return;
    this.seanceService.obtenirDetail(this.seance.id).subscribe({
      next: (detail) => {
        const premiereVideo = detail.mouvements?.[0]?.mouvement?.videoUrl;
        if (premiereVideo) this.videoApercu.set(premiereVideo);
      },
      error: () => this.videoEnErreur.set(true),
    });
  }
}
