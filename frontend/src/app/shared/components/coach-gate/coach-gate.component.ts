import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CoachService } from '../../../core/services/coach.service';

@Component({
  selector: 'app-coach-gate',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './coach-gate.component.html',
  styleUrls: ['./coach-gate.component.css'],
})
export class CoachGateComponent {
  constructor(public coachService: CoachService) {}
}
