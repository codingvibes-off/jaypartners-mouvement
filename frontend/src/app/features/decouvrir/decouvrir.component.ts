import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Mouvement, Niveau } from '../../core/models/models';
import { MouvementService } from '../../core/services/mouvement.service';
import { MovementCardComponent } from '../../shared/components/movement-card/movement-card.component';

@Component({
  selector: 'app-decouvrir',
  standalone: true,
  imports: [CommonModule, FormsModule, MovementCardComponent, TranslatePipe],
  templateUrl: './decouvrir.component.html',
  styleUrls: ['./decouvrir.component.css'],
})
export class DecouvrirComponent implements OnInit {
  mouvements = signal<Mouvement[]>([]);
  chargement = signal(true);

  recherche = signal('');
  niveauFiltre = signal<Niveau | ''>('');
  muscleFiltre = signal('');

  musclesDisponibles = computed<string[]>(() => {
    const muscles = new Set<string>();
    for (const m of this.mouvements()) {
      if (m.muscleprincipal) muscles.add(m.muscleprincipal);
    }
    return Array.from(muscles).sort((a, b) => a.localeCompare(b));
  });

  mouvementsFiltres = computed<Mouvement[]>(() => {
    const recherche = this.recherche().trim().toLowerCase();
    const niveau = this.niveauFiltre();
    const muscle = this.muscleFiltre();

    return this.mouvements().filter((m) => {
      if (recherche && !m.nom.toLowerCase().includes(recherche)) return false;
      if (niveau && m.niveau !== niveau) return false;
      if (muscle && m.muscleprincipal !== muscle) return false;
      return true;
    });
  });

  constructor(private mouvementService: MouvementService) {}

  ngOnInit(): void {
    this.chargerMouvements();
  }

  private chargerMouvements(): void {
    this.chargement.set(true);
    this.mouvementService.obtenirTous().subscribe({
      next: (mouvements) => {
        this.mouvements.set(mouvements);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }

  reinitialiserFiltres(): void {
    this.recherche.set('');
    this.niveauFiltre.set('');
    this.muscleFiltre.set('');
  }
}
