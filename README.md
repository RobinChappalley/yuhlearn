# Yuhlearn

Application d'apprentissage financier pour Yuh. Format short-form (type TikTok/Reels) avec vidéos verticales, quiz interactifs et système de progression.

## Fonctionnalités

- **Onboarding** : Slides de bienvenue affichées au premier lancement
- **Feed vidéo vertical** : Scroll snap une vidéo à la fois, autoplay, contrôles tactiles (tap = son, long-press = pause)
- **Quiz post-vidéo** : Validation des connaissances avec correction immédiate et retry
- **Big Three Assessment** : Quiz de littératie financière (placement test) avec navigation avant/arrière
- **Progression par étapes** : Système de déblocage séquentiel (vidéo 2 verrouillée tant que vidéo 1 non vue)
- **Navigation directe** : Clic sur tuile N → ouvre directement à la vidéo N

## Structure du projet

Architecture [Feature-Sliced Design](https://feature-sliced.design/) :

```
apps/frontend/src/
├── app/              # Configuration globale (router, styles)
├── entities/         # Modèles métier (progress, firsts)
├── features/         # Fonctionnalités utilisateur (take-quiz)
├── widgets/          # Composants complexes réutilisables
│   ├── module-tile/    # Tuile de navigation vidéo/quiz
│   ├── youtube-player/  # Lecteur vidéo Cloudinary
│   ├── question-card/   # Carte de question quiz (post-vidéo)
│   └── assessment-card/ # Carte de question assessment (Big Three)
├── pages/            # Pages complètes
│   ├── onboarding/   # Slides de bienvenue (premier lancement)
│   ├── home/         # Liste des Firsts
│   ├── first-detail/ # Grille de tuiles
│   ├── player/       # Lecteur vidéo vertical
│   ├── assessment/   # Big Three Quiz (placement test)
│   ├── quiz/         # Quiz post-vidéo (validation)
│   └── reward/       # Écran de récompense
├── shared/           # Utilitaires partagés
└── data/             # Données statiques (firsts.json, assessments.json)
```

## Prérequis

- Node.js 18+
- npm ou yarn

## Installation

```bash
# Cloner le repository
git clone <repository-url>
cd yuhlearn

# Installer les dépendances frontend
cd apps/frontend
npm install

# Retourner à la racine
cd ../..
```

## Lancement

### Développement local

```bash
cd apps/frontend
npm run dev
```

L'application est accessible sur `http://localhost:5173`

**Routes principales :**
| Route | Description |
|-------|-------------|
| `/` | Redirige vers onboarding (1ère visite) ou home |
| `/onboarding` | Slides de bienvenue |
| `/home` | Liste des Firsts |
| `/first/:id` | Détail d'un First |
| `/assessment` | Big Three Quiz (placement test) |
| `/first/:id/video` | Lecteur vidéo vertical |


## Données

Les contenus (vidéos, quiz) sont définis dans :
- `apps/frontend/src/data/firsts.json`

Format des vidéos : URLs Cloudinary MP4 (vertical 9:16)

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement Vite |
| `npm run build` | Build production |
| `npm run preview` | Preview du build |
| `npm run test` | Tests Vitest |
| `npm run lint` | ESLint |

## Technologies

- **Framework** : Vue 3 (Composition API, `<script setup>`)
- **Build** : Vite
- **Router** : Vue Router 4
- **Tests** : Vitest
- **Style** : CSS variables, pas de framework UI externe
- **Vidéos** : Cloudinary (MP4), lecteur HTML5 natif

## Progression utilisateur

Stockée dans `localStorage` (clé `yuhlearn_progress`) :
- `completedTiles` : IDs des vidéos regardées
- `quizPassed` : Quiz réussi
- `completed` : First terminé
- `completedAt` : Date de complétion
