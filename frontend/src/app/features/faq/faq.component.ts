import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';

interface QuestionFaq {
  question: string;
  reponse: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  ouvertIndex = signal<number | null>(0);

  readonly questions: QuestionFaq[] = [
    {
      question: "Comment fonctionne le site JayPartner's ?",
      reponse:
        "La page d'accueil te présente un catalogue de séances organisé par catégorie, un peu comme un catalogue de streaming. Tu parcoures les rangées, tu cliques sur une séance pour voir son détail, puis tu lances l'entraînement quand tu es prêt(e).",
    },
    {
      question: 'Dois-je créer un compte pour m\'entraîner ?',
      reponse:
        "Tu peux consulter le catalogue, la rubrique Découvrir et les Programmes sans compte. En revanche, pour valider tes séances, gagner de l'XP et retrouver ton historique dans le Calendrier, il faut t'inscrire (bouton « S'inscrire » dans le menu) puis te connecter.",
    },
    {
      question: 'À quoi sert la page « Découvrir » ?',
      reponse:
        "C'est la bibliothèque de tous les mouvements disponibles. Tu peux rechercher un mouvement par nom, filtrer par niveau (débutant, intermédiaire, avancé) ou par muscle ciblé pour comprendre un exercice avant de le pratiquer.",
    },
    {
      question: 'À quoi sert la page « Programmes » ?',
      reponse:
        "Elle regroupe les séances par univers (Force, Pilates, Hyrox, Athlétisme...). Choisis l'onglet de l'univers qui t'intéresse pour voir toutes les séances associées.",
    },
    {
      question: "Comment se déroule un entraînement ?",
      reponse:
        "Depuis le détail d'une séance, clique sur « Commencer l'entraînement ». Le site passe alors en mode plein écran, sans menu, pour te concentrer sur les mouvements. Une fois la séance terminée, elle est enregistrée dans ton historique et tu gagnes de l'XP.",
    },
    {
      question: 'Où voir les séances que j\'ai déjà faites ?',
      reponse:
        "Dans « Calendrier » (visible une fois connecté(e)). Il affiche un calendrier mensuel : les jours marqués d'un point correspondent à des séances validées. Clique sur un jour pour voir le récapitulatif et l'XP gagné.",
    },
    {
      question: "Comment contacter Jay ou suivre l'actu sur les réseaux ?",
      reponse:
        "Rends-toi sur la page Contact, ou utilise le bouton flottant en bas à droite de l'écran : tu y trouveras WhatsApp, Instagram, TikTok, YouTube, LinkedIn et Calendly pour réserver un coaching.",
    },
    {
      question: "J'ai oublié mon mot de passe, ou un souci technique : que faire ?",
      reponse:
        "Le plus simple est de me contacter directement via WhatsApp ou Instagram depuis la page Contact : je te réponds au plus vite pour débloquer la situation.",
    },
  ];

  basculer(index: number): void {
    this.ouvertIndex.set(this.ouvertIndex() === index ? null : index);
  }
}
