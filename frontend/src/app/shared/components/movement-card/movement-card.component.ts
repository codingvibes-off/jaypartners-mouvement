import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { Mouvement } from '../../../core/models/models';

@Component({
  selector: 'app-movement-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './movement-card.component.html',
  styleUrls: ['./movement-card.component.css'],
})
export class MovementCardComponent {
  @Input({ required: true }) mouvement!: Mouvement;
  @Input() ordre = 0;
  @Input() repetitions?: string;
  @Input() series?: number;

  detailsOuverts = false;

  basculerDetails(): void {
    this.detailsOuverts = !this.detailsOuverts;
  }
}
