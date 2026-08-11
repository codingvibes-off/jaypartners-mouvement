# Le Netflix du Mouvement

Stack : **Angular 18** (standalone) + **Node.js / Express** + **Prisma / PostgreSQL**

## Démarrage backend

```bash
cd backend
npm install
cp .env.example .env        # renseigne DATABASE_URL (Postgres) et JWT_SECRET
npx prisma migrate dev --name init
npm run prisma:seed         # charge des séances + mouvements de démo
npm run dev                 # API sur http://localhost:3000
```

## Démarrage frontend

```bash
cd frontend
npm install
npm start                   # app sur http://localhost:4200
```

## Ce qui est déjà en place

- **Backend** : Express + Prisma, schéma complet (User, Seance, Mouvement, SeanceMouvement,
  historique, progression, évaluations, favoris, badges/XP), routes auth (inscription/connexion
  avec JWT + bcrypt), routes catalogue de séances groupées par catégorie (façon rangées Netflix,
  filtrable par genre HOMME/FEMME/MIXTE), routes bibliothèque de mouvements avec filtres.
- **Frontend** : Angular standalone, thème sombre premium (fond noir, accents or/teal),
  navbar avec connexion/inscription, page d'accueil avec **onglets Séance Homme / Séance Femme**
  et rangées de séances en défilement horizontal (façon Netflix), page détail séance listant
  tous les mouvements avec lecteur vidéo (une vidéo de test est utilisée en attendant tes
  propres vidéos — à remplacer dans `prisma/seed.js` et en base), formulaires de connexion et
  d'inscription connectés au backend avec JWT stocké et intercepteur HTTP automatique.

## Ce qu'il reste à construire (hors scope de ce scaffold)

C'est un projet énorme — 22 sections listées dans ta doc. Ce qui est livré ici est
l'ossature technique + le cœur demandé (Homme/Femme façon Netflix + mouvements + vidéo test).
Restent à développer, sur cette base : tableau de bord, arbre de mouvement, programmes,
parcours par objectif, évaluation initiale, recommandations, gamification/XP visible,
calendrier, playlists, recherche avancée, paiement, sections Pilates/Mobilité/Renforcement/
Calisthenics/Posture/Douleurs dédiées, communauté.

Le schéma Prisma anticipe déjà une partie de ça (progression, évaluations, badges/XP) pour
que ce soit une extension et non une refonte.
