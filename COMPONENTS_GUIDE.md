# 📦 Guide des Composants - Netflix Mouvement

## Vue d'ensemble

Ce guide documente les composants Angular améliorés pour l'interface Netflix Mouvement du Sport.

---

## 🎯 Composants Principaux

### 1. **Navbar Component** (`navbar.component.ts`)

#### Usage
```typescript
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  imports: [NavbarComponent],
  // ...
})
```

#### Fonctionnalités
- Logo responsive avec icône
- Menu horizontal (Accueil, Découvrir, Ma liste)
- Affichage conditionnel selon l'état de connexion
- Support utilisateur avec avatar

#### Props
Aucune prop requise (utilise `AuthService` en interne)

#### Événements
- Clic sur "Déconnexion" → appelle `auth.deconnexion()`

---

### 2. **Home Component** (`home.component.ts`)

#### Usage
```typescript
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];
```

#### Sections
1. **Hero Section**: Présentation du service avec statistiques
2. **Filtres Section**: Sélection par genre (Homme/Femme/Mixte)
3. **Catalogue**: Rangées de séances scrollables
4. **CTA Section**: Appel à l'action final

#### Signaux
- `ongletActif()`: Genre sélectionné
- `rangees()`: Données du catalogue
- `chargement()`: État de chargement

#### Méthodes
- `changerOnglet(genre)`: Change le genre et recharge le catalogue
- `chargerCatalogue()`: Appelle le service pour obtenir les rangées

---

### 3. **Seance Card Component** (`seance-card.component.ts`)

#### Usage
```typescript
import { SeanceCardComponent } from './shared/components/seance-card/seance-card.component';

@Component({
  imports: [SeanceCardComponent],
  template: `
    <app-seance-card [seance]="maSeance"></app-seance-card>
  `
})
```

#### Props
```typescript
@Input({ required: true }) seance!: Seance;
```

#### Structure HTML
```html
<a class="carte" [routerLink]="['/seance', seance.id]">
  <div class="vignette">
    <!-- Image background -->
    <div class="overlay">
      <!-- Badges de niveau et catégorie -->
      <!-- Badge de durée -->
    </div>
    <div class="play-btn"><!-- Bouton play --></div>
  </div>
  <div class="contenu">
    <!-- Titre, description, meta -->
  </div>
</a>
```

#### Types de Seance
```typescript
interface Seance {
  id: string;
  titre: string;
  description?: string;
  genre: 'HOMME' | 'FEMME' | 'MIXTE';
  niveau: 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE';
  dureeMin: number;
  imageUrl?: string;
  categorie?: string;
  mouvements?: SeanceMouvement[];
}
```

#### Classes CSS Dynamiques
- `.genre.homme`: Style Teal
- `.genre.femme`: Style Rose
- `.genre.mixte`: Style Vert

---

## 🎨 Classes Utilitaires CSS

### Boutons
```html
<!-- Primaire avec gradient -->
<button class="btn-primaire">Action principale</button>

<!-- Secondaire transparent -->
<button class="btn-secondaire">Action secondaire</button>
```

### Badges
```html
<!-- Badge standard (Teal) -->
<span class="badge">Label</span>

<!-- Badge success (Vert) -->
<span class="badge success">Succès</span>

<!-- Badge warning (Orange) -->
<span class="badge warning">Attention</span>
```

### Spacing
```html
<!-- Margin top -->
<div class="mt-24">Margin top 24px</div>
<div class="mt-32">Margin top 32px</div>

<!-- Margin bottom -->
<div class="mb-24">Margin bottom 24px</div>
<div class="mb-32">Margin bottom 32px</div>

<!-- Gap (pour flex/grid) -->
<div class="gap-16">Gap 16px</div>
<div class="gap-24">Gap 24px</div>
<div class="gap-32">Gap 32px</div>
```

### Layout
```html
<!-- Container centered -->
<div class="container">Contenu avec max-width</div>

<!-- Grid 2 colonnes -->
<div class="grid-2">
  <div>Colonne 1</div>
  <div>Colonne 2</div>
</div>

<!-- Section padding standard -->
<section class="section-padding">Contenu</section>
```

### Shadows
```html
<div class="shadow-lg">Large shadow</div>
<div class="shadow-md">Medium shadow</div>
```

### Border Radius
```html
<div class="rounded-lg">16px radius</div>
<div class="rounded-md">12px radius</div>
```

### Text
```html
<div class="text-center">Centré</div>
<div class="text-muted">Texte secondaire</div>
```

---

## 🎬 Animations Disponibles

### Pulse Glow
```scss
animation: pulse-glow 2s ease-in-out infinite;
```
Utilisé pour: Badges animés

### Fade In
```scss
animation: fadeIn 0.6s ease;
```
Utilisé pour: Apparition des rangées

### Transitions Standards
```scss
transition: all var(--transition); // 0.3s cubic-bezier(0.16, 1, 0.3, 1)
```

---

## 📱 Responsive Breakpoints

```scss
// Desktop (par défaut)
// Tous les styles normaux

// Tablet (720px - 1024px)
@media (max-width: 1024px) { ... }

// Petit écran (720px - 1024px)
@media (max-width: 720px) { ... }
```

### Adaptations par composant
| Composant | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Navbar | Menu visible | Menu visible | Menu caché |
| Seance Card | 280px | 240px | 200px |
| Section padding | 48px | 32px | 20px |
| Hero | 2 colonnes | 1 colonne | 1 colonne |

---

## 🔌 Services Utilisés

### AuthService
```typescript
export class AuthService {
  estConnecte(): boolean;
  utilisateurCourant(): User | null;
  deconnexion(): void;
}
```

### SeanceService
```typescript
export class SeanceService {
  obtenirCatalogue(genre?: Genre): Observable<RangeeSeances[]>;
  obtenirDetail(id: string): Observable<Seance>;
}
```

---

## 🎯 Exemple d'Utilisation Complet

```typescript
import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent],
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Netflix Mouvement du Sport';
}
```

---

## 🚀 Performance Tips

1. **Lazy Loading**: Les composants utilisent le `standalone: true` pour un chargement optimisé
2. **Change Detection**: Signaux utilisés pour la détection de changements efficace
3. **Animation Performance**: CSS animations (GPU accelerated) au lieu de JS
4. **Scroll Performance**: Scroll snap pour les rangées horizontales

---

## 🐛 Debugging

### Chrome DevTools
```javascript
// Inspecter un signal Angular
const homeComponent = document.querySelector('app-home');
// Les signaux sont visibles dans les props du composant

// Vérifier les animations
document.body.classList.add('animation-disabled');
```

### Erreurs Courantes

**Erreur**: Card ne s'affiche pas
- Solution: Vérifier que `seance` a les propriétés requises

**Erreur**: Filtre ne fonctionne pas
- Solution: Vérifier que `SeanceService.obtenirCatalogue()` retourne les données

**Erreur**: Layout cassé sur mobile
- Solution: Vérifier les media queries (720px breakpoint)

---

## 📚 Ressources

- [Angular Docs](https://angular.io)
- [Signaux Angular](https://angular.io/guide/signals)
- [Standalone Components](https://angular.io/guide/standalone-components)
- [SCSS Documentation](https://sass-lang.com)

---

**Version**: 1.0  
**Dernière mise à jour**: Août 2026

---
