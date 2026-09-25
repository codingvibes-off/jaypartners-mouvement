import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { estActive } from '../../../core/guards/fonctionnalite.guard';
import { CoachService } from '../../../core/services/coach.service';

@Component({
  selector: 'app-coach-gate',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './coach-gate.component.html',
  styleUrls: ['./coach-gate.component.css'],
})
export class CoachGateComponent {
  readonly coachHomme = estActive('coachHomme');

  constructor(public coachService: CoachService) {}
}
