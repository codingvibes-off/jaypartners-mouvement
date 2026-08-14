# Guide backend - démarrage et génération des séances

Ce document explique comment démarrer le backend du projet et comment les séances sont construites en base de données.

## 1. Prérequis

Avant de lancer le backend, vérifie que :

- Node.js est installé
- PostgreSQL est disponible et accessible
- le fichier `.env` existe dans le dossier `backend`

### Exemple de `.env`

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/jaypartners"
JWT_SECRET="ton_secret_super_securise"
```

> Sans `DATABASE_URL`, Prisma et l’API ne pourront pas se connecter à la base.

---

## 2. Installer les dépendances

Depuis le dossier `backend` :

```bash
npm install
```

---

## 3. Démarrer le backend

### Étapes de base

```bash
cd backend
npm install
npx prisma generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

### Ce que chaque commande fait

- `npx prisma generate` : génère le client Prisma à partir du schéma
- `npm run prisma:migrate` : applique les migrations de base de données
- `npm run prisma:seed` : remplit la base avec les données de démonstration
- `npm run dev` : lance le serveur Node.js en mode développement avec `nodemon`

Le backend démarre ensuite sur :

```text
http://localhost:3000
```

---

## 4. Scripts disponibles

Dans `backend/package.json`, on trouve les scripts suivants :

```json
"scripts": {
  "dev": "nodemon src/server.js",
  "start": "node src/server.js",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev",
  "prisma:studio": "prisma studio",
  "prisma:seed": "node prisma/seed.js",
  "prisma:import-exercises": "node prisma/import-exercises.js",
  "prisma:build-seances": "node prisma/build-seances.js",
  "prisma:build-pilates": "node prisma/build-pilates.js"
}
```

### Démarrage rapide

```bash
npm run dev
```

### Démarrage en production

```bash
npm start
```

---

## 5. Comment les séances sont construites

Le cœur de la génération des séances est dans le dossier `backend/prisma`.

### Fichier principal : `prisma/seed.js`

Ce script :

1. nettoie la base
2. supprime les liens `SeanceMouvement`
3. supprime les séances existantes
4. supprime les mouvements existants
5. crée un ensemble de mouvements de démonstration
6. crée quelques séances d’exemple comme :
   - "Force Fondations - Homme"
   - "Fessiers & Stabilité - Femme"
   - "Réveil Articulaire"

C’est donc le script de base de données de démonstration pour les premiers tests.

Pour lancer l’ensemble des scripts de génération de données d’un seul coup, il suffit d’utiliser :

```bash
npm run prisma:seed
```

Cette commande exécute automatiquement :

```bash
node prisma/seed.js && node prisma/build-seances.js && node prisma/build-pilates.js
```

---

### Fichier : `prisma/build-seances.js`

Ce script lit le catalogue d’exercices dans :

```text
backend/prisma/data/fitness_exercises_database.json
```

Puis il :

- charge tous les exercices
- regroupe les mouvements par catégorie
- découpe les listes en groupes de séance
- détermine le niveau de chaque séance selon la difficulté dominante
- génère une `Seance` pour chaque groupe
- relie les mouvements via la table `SeanceMouvement`
- attribue un genre (`MIXTE`, `HOMME`, `FEMME`)
- donne un titre lisible selon la catégorie

Exemple :

```bash
npm run prisma:build-seances
```

Cela permet d’assembler de nombreuses séances à partir du catalogue JSON sans les écrire manuellement en base.

---

### Fichier : `prisma/build-pilates.js`

Ce script ajoute une série de mouvements et séances spécifiques au Pilates.

Il sert à construire un catalogue de mouvements Pilates, du plus simple au plus avancé, puis à les organiser en séances cohérentes.

Exemple :

```bash
npm run prisma:build-pilates
```

---

### Fichier : `prisma/translate-en.js`

Remplit les champs `*En` (traduction anglaise) des mouvements et séances, pour le sélecteur de langue FR/EN du site. **`npm run prisma:seed` l'exécute déjà automatiquement en dernière étape** — mais si tu relances un script de build individuellement (`prisma:build-pilates`, etc.) ou que tu modifies du contenu directement en base, pense à relancer :

```bash
npm run prisma:translate-en
```

> Le script associe les traductions par `nom`/`titre` (pas par `id`), donc il reste valide même après un reset complet de la base.

---

## 6. Ordre recommandé lors d’un reset complet

Quand tu veux repartir de zéro avec des données de test :

```bash
cd backend
npx prisma migrate dev --name reset_data
npm run prisma:seed
npm run prisma:build-seances
npm run prisma:build-pilates
npm run dev
```

> Attention : `prisma:seed` supprime les données existantes, donc il faut le relancer si tu veux réinitialiser la base.

---

## 7. Points importants

- Les séances sont créées via Prisma à partir des modèles `Seance` et `SeanceMouvement`
- Les mouvements existent déjà dans la table `Mouvement`
- Le JSON `fitness_exercises_database.json` est la source de données principale pour la génération des séances
- Les scripts de build permettent de générer rapidement un catalogue exploitable par le frontend

---

## 8. Résumé rapide

Pour démarrer rapidement :

```bash
cd backend
npm install
cp .env.example .env
npx prisma generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

Pour reconstruire les séances :

```bash
npm run prisma:build-seances
```

Et pour générer les séances Pilates :

```bash
npm run prisma:build-pilates
```
