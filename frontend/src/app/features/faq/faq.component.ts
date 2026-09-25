import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Fonctionnalite, estActive } from '../../core/guards/fonctionnalite.guard';
import { IconComponent } from '../../shared/components/icon/icon.component';

interface QuestionFaq {
  question: string;
  reponse: string;
  /** Question masquée tant que cette fonctionnalité est désactivée (voir environment.fonctionnalites). */
  fonctionnalite?: Fonctionnalite;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink, IconComponent, TranslatePipe],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  ouvertIndex = signal<number | null>(0);

  readonly questions: QuestionFaq[] = ([
    { question: 'faq.q1.question', reponse: 'faq.q1.reponse' },
    { question: 'faq.q2.question', reponse: 'faq.q2.reponse', fonctionnalite: 'boutonsConnexion' },
    { question: 'faq.q3.question', reponse: 'faq.q3.reponse', fonctionnalite: 'decouvrir' },
    { question: 'faq.q4.question', reponse: 'faq.q4.reponse', fonctionnalite: 'programmes' },
    { question: 'faq.q5.question', reponse: 'faq.q5.reponse' },
    { question: 'faq.q6.question', reponse: 'faq.q6.reponse', fonctionnalite: 'boutonsConnexion' },
    { question: 'faq.q7.question', reponse: 'faq.q7.reponse' },
    { question: 'faq.q8.question', reponse: 'faq.q8.reponse', fonctionnalite: 'boutonsConnexion' },
  ] satisfies QuestionFaq[]).filter((q) => !q.fonctionnalite || estActive(q.fonctionnalite));

  basculer(index: number): void {
    this.ouvertIndex.set(this.ouvertIndex() === index ? null : index);
  }
}
