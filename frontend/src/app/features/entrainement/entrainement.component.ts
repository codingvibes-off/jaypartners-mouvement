import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { AuthService } from '../../core/services/auth.service';
import { HistoriqueService } from '../../core/services/historique.service';
import { SeanceService } from '../../core/services/seance.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Seance, SeanceMouvement } from '../../core/models/models';
import { CITATIONS_DERNIERE_SERIE } from './citations';

const DELAI_FERMETURE_AUTO_MS = 6000;

@Component({
  selector: 'app-entrainement',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './entrainement.component.html',
  styleUrls: ['./entrainement.component.css'],
})
export class EntrainementComponent implements OnInit, OnDestroy {
  seance = signal<Seance | null>(null);
  chargement = signal(true);
  indexActuel = signal(0);
  enPause = signal(false);
  tempsRestant = signal<number | null>(null);
  terminee = signal(false);
  validation = signal<{ xpGagne: number } | null>(null);
  erreurValidation = signal<string | null>(null);
  enCoursValidation = signal(false);

  seriesCochees = signal<Set<number>>(new Set());
  encouragementVisible = signal(false);
  citationActuelle = signal('');

  private encouragementDejaAffichePourExercice = false;
  private intervalId?: ReturnType<typeof setInterval>;
  private fermetureAutoId?: ReturnType<typeof setTimeout>;

  mouvements = computed<SeanceMouvement[]>(() => this.seance()?.mouvements ?? []);
  exerciceActuel = computed<SeanceMouvement | null>(() => this.mouvements()[this.indexActuel()] ?? null);
  progression = computed<number>(() => {
    const total = this.mouvements().length;
    return total ? Math.round(((this.indexActuel() + 1) / total) * 100) : 0;
  });
  plageSeries = computed<number[]>(() => {
    const total = this.exerciceActuel()?.series ?? 0;
    return Array.from({ length: total }, (_, i) => i + 1);
  });

  constructor(
    private route: ActivatedRoute,
    private seanceService: SeanceService,
    private historiqueService: HistoriqueService,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.seanceService.obtenirDetail(id).subscribe({
      next: (seance) => {
        this.seance.set(seance);
        this.chargement.set(false);
        this.demarrerMinuteur();
      },
      error: () => this.chargement.set(false),
    });
  }

  ngOnDestroy(): void {
    this.arreterMinuteur();
    if (this.fermetureAutoId) clearTimeout(this.fermetureAutoId);
  }

  basculerPause(video: HTMLVideoElement): void {
    const enPause = !this.enPause();
    this.enPause.set(enPause);
    if (enPause) {
      video.pause();
      this.arreterMinuteur();
    } else {
      video.play().catch(() => {});
      this.demarrerMinuteur();
    }
  }

  exerciceSuivant(): void {
    this.arreterMinuteur();
    this.reinitialiserSeries();
    const suivant = this.indexActuel() + 1;
    if (suivant < this.mouvements().length) {
      this.indexActuel.set(suivant);
      this.enPause.set(false);
      this.demarrerMinuteur();
    } else {
      this.terminee.set(true);
    }
  }

  /** Coche/décoche une série de l'exercice courant. Sur l'avant-dernière case cochée
   *  (il ne reste alors plus qu'une série non cochée), affiche le bandeau d'encouragement. */
  cocherSerie(numero: number, total: number): void {
    const cochees = new Set(this.seriesCochees());
    const etaitCochee = cochees.has(numero);

    if (etaitCochee) {
      cochees.delete(numero);
    } else {
      cochees.add(numero);
    }
    this.seriesCochees.set(cochees);

    const restantes = total - cochees.size;
    if (!etaitCochee && restantes === 1 && !this.encouragementDejaAffichePourExercice) {
      this.encouragementDejaAffichePourExercice = true;
      this.afficherEncouragement();
    }
  }

  fermerEncouragement(): void {
    if (!this.encouragementVisible()) return;
    if (this.fermetureAutoId) clearTimeout(this.fermetureAutoId);
    this.encouragementVisible.set(false);
    this.animerBandeau();
  }

  validerSeance(): void {
    const seance = this.seance();
    if (!seance) return;
    this.enCoursValidation.set(true);
    this.erreurValidation.set(null);
    this.historiqueService.validerSeance(seance.id).subscribe({
      next: (res) => {
        this.validation.set({ xpGagne: res.historique.xpGagne });
        this.enCoursValidation.set(false);
      },
      error: () => {
        this.erreurValidation.set('Impossible de valider la séance pour le moment.');
        this.enCoursValidation.set(false);
      },
    });
  }

  private reinitialiserSeries(): void {
    this.seriesCochees.set(new Set());
    this.encouragementDejaAffichePourExercice = false;
    if (this.fermetureAutoId) clearTimeout(this.fermetureAutoId);
    this.encouragementVisible.set(false);
  }

  private afficherEncouragement(): void {
    const citations = CITATIONS_DERNIERE_SERIE;
    this.citationActuelle.set(citations[Math.floor(Math.random() * citations.length)]);
    this.encouragementVisible.set(true);
    this.animerBandeau();

    this.fermetureAutoId = setTimeout(() => this.fermerEncouragement(), DELAI_FERMETURE_AUTO_MS);
  }

  /** Le bandeau glisse depuis le haut avec un effet de rebond à l'atterrissage. */
  private animerBandeau(): void {
    setTimeout(() => {
      const bandeau = document.querySelector<HTMLElement>('.bandeau-encouragement');
      if (!bandeau) return;

      gsap.killTweensOf(bandeau);

      if (this.encouragementVisible()) {
        gsap.fromTo(
          bandeau,
          { y: '-120%' },
          { y: '0%', duration: 0.9, ease: 'bounce.out' },
        );
      } else {
        gsap.to(bandeau, { y: '-120%', duration: 0.3, ease: 'power2.in' });
      }
    }, 0);
  }

  private demarrerMinuteur(): void {
    this.arreterMinuteur();
    const duree = this.exerciceActuel()?.mouvement.dureeConseillee;
    if (!duree) {
      this.tempsRestant.set(null);
      return;
    }
    this.tempsRestant.set(duree);
    this.intervalId = setInterval(() => {
      const restant = this.tempsRestant();
      if (restant === null) return;
      if (restant <= 1) {
        this.arreterMinuteur();
        this.exerciceSuivant();
        return;
      }
      this.tempsRestant.set(restant - 1);
    }, 1000);
  }

  private arreterMinuteur(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
