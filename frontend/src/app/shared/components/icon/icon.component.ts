import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type NomIcone =
  | 'play'
  | 'pause'
  | 'info'
  | 'download'
  | 'upload'
  | 'calendar'
  | 'close'
  | 'arrow-right'
  | 'arrow-left'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'clock'
  | 'check';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  @Input({ required: true }) nom!: NomIcone;
  @Input() taille = 18;
}
