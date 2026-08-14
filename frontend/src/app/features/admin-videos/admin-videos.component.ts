import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MouvementService } from '../../core/services/mouvement.service';
import { Mouvement } from '../../core/models/models';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LangService } from '../../core/services/lang.service';
import { LocalisePipe } from '../../shared/pipes/localise.pipe';

type PhaseUpload = 'envoi' | 'encodage' | 'pret' | 'erreur';

interface EtatUpload {
  phase: PhaseUpload;
  progression: number;
  message?: string;
}

const INTERVALLE_POLLING_MS = 3000;
const TENTATIVES_MAX = 40; // ~2 minutes

@Component({
  selector: 'app-admin-videos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IconComponent, TranslatePipe, LocalisePipe],
  templateUrl: './admin-videos.component.html',
  styleUrls: ['./admin-videos.component.css'],
})
export class AdminVideosComponent implements OnInit, OnDestroy {
  mouvements = signal<Mouvement[]>([]);
  chargement = signal(true);
  filtre = signal('');
  etatsUpload = signal<Record<string, EtatUpload>>({});

  private intervallesActifs: ReturnType<typeof setInterval>[] = [];

  constructor(
    private mouvementService: MouvementService,
    private translate: TranslateService,
    public lang: LangService,
  ) {}

  ngOnInit(): void {
    this.mouvementService.obtenirTous().subscribe({
      next: (mouvements) => {
        this.mouvements.set(mouvements);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }

  ngOnDestroy(): void {
    this.intervallesActifs.forEach((id) => clearInterval(id));
  }

  get mouvementsFiltres(): Mouvement[] {
    const filtre = this.filtre().trim().toLowerCase();
    if (!filtre) return this.mouvements();
    return this.mouvements().filter((m) => m.nom.toLowerCase().includes(filtre));
  }

  etatPour(mouvementId: string): EtatUpload | undefined {
    return this.etatsUpload()[mouvementId];
  }

  statutBadge(mouvement: Mouvement): { texte: string; classe: string } {
    const etat = this.etatPour(mouvement.id);
    if (etat) {
      if (etat.phase === 'envoi') {
        return {
          texte: this.translate.instant('admin.statutEnvoi', { n: etat.progression }) as string,
          classe: 'badge-attente',
        };
      }
      if (etat.phase === 'encodage') {
        return { texte: this.translate.instant('admin.statutEncodage') as string, classe: 'badge-attente' };
      }
      if (etat.phase === 'erreur') {
        return { texte: etat.message || (this.translate.instant('admin.statutErreur') as string), classe: 'badge-erreur' };
      }
      if (etat.phase === 'pret') {
        return { texte: this.translate.instant('admin.statutPrete') as string, classe: 'badge-pret' };
      }
    }
    if (mouvement.cfStreamStatus === 'ready') {
      return { texte: this.translate.instant('admin.statutPrete') as string, classe: 'badge-pret' };
    }
    if (mouvement.cfStreamStatus === 'uploading') {
      return { texte: this.translate.instant('admin.statutEnCours') as string, classe: 'badge-attente' };
    }
    if (mouvement.cfStreamStatus === 'error') {
      return { texte: this.translate.instant('admin.statutErreur') as string, classe: 'badge-erreur' };
    }
    return { texte: this.translate.instant('admin.statutVideoParDefaut') as string, classe: 'badge-neutre' };
  }

  surChangementFichier(event: Event, mouvement: Mouvement): void {
    const input = event.target as HTMLInputElement;
    const fichier = input.files?.[0];
    if (!fichier) return;
    this.demarrerUpload(mouvement, fichier);
    input.value = '';
  }

  private demarrerUpload(mouvement: Mouvement, fichier: File): void {
    this.mettreAJourEtat(mouvement.id, { phase: 'envoi', progression: 0 });

    this.mouvementService.creerUploadVideo(mouvement.id).subscribe({
      next: ({ uploadURL }) => this.envoyerFichier(uploadURL, fichier, mouvement.id),
      error: () =>
        this.mettreAJourEtat(mouvement.id, {
          phase: 'erreur',
          progression: 0,
          message: this.translate.instant('admin.erreurDemarrageUpload') as string,
        }),
    });
  }

  private envoyerFichier(uploadURL: string, fichier: File, mouvementId: string): void {
    const formData = new FormData();
    formData.append('file', fichier);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadURL);

    xhr.upload.onprogress = (evt) => {
      if (!evt.lengthComputable) return;
      const progression = Math.round((evt.loaded / evt.total) * 100);
      this.mettreAJourEtat(mouvementId, { phase: 'envoi', progression });
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        this.mettreAJourEtat(mouvementId, { phase: 'encodage', progression: 100 });
        this.demarrerPolling(mouvementId);
      } else {
        this.mettreAJourEtat(mouvementId, {
          phase: 'erreur',
          progression: 0,
          message: this.translate.instant('admin.erreurEnvoi') as string,
        });
      }
    };

    xhr.onerror = () => {
      this.mettreAJourEtat(mouvementId, {
        phase: 'erreur',
        progression: 0,
        message: this.translate.instant('admin.erreurEnvoi') as string,
      });
    };

    xhr.send(formData);
  }

  private demarrerPolling(mouvementId: string): void {
    let tentatives = 0;
    const intervalle = setInterval(() => {
      tentatives++;
      this.mouvementService.obtenirStatutVideo(mouvementId).subscribe({
        next: ({ cfStreamStatus }) => {
          if (cfStreamStatus === 'ready') {
            this.mettreAJourEtat(mouvementId, { phase: 'pret', progression: 100 });
            this.mettreAJourMouvementLocal(mouvementId, 'ready');
            clearInterval(intervalle);
          } else if (cfStreamStatus === 'error') {
            this.mettreAJourEtat(mouvementId, {
              phase: 'erreur',
              progression: 0,
              message: this.translate.instant('admin.erreurEncodage') as string,
            });
            this.mettreAJourMouvementLocal(mouvementId, 'error');
            clearInterval(intervalle);
          } else if (tentatives >= TENTATIVES_MAX) {
            this.mettreAJourEtat(mouvementId, {
              phase: 'erreur',
              progression: 0,
              message: this.translate.instant('admin.erreurEncodageLong') as string,
            });
            clearInterval(intervalle);
          }
        },
        error: () => {
          if (tentatives >= TENTATIVES_MAX) clearInterval(intervalle);
        },
      });
    }, INTERVALLE_POLLING_MS);

    this.intervallesActifs.push(intervalle);
  }

  private mettreAJourEtat(mouvementId: string, etat: EtatUpload): void {
    this.etatsUpload.update((etats) => ({ ...etats, [mouvementId]: etat }));
  }

  private mettreAJourMouvementLocal(mouvementId: string, statut: string): void {
    this.mouvements.update((mouvements) =>
      mouvements.map((m) => (m.id === mouvementId ? { ...m, cfStreamStatus: statut } : m))
    );
  }
}
