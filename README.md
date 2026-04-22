# Yuhlearn - Groupe NASDAS

Financial learning application for Yuh. Short-form format (TikTok/Reels style) with vertical videos,
interactive quizzes and a progression system.



## Features

- **Onboarding** : Welcome slides displayed on first launch
- **Vertical video feed** : Scroll snap one video at a time, autoplay, touch controls (tap = sound, long-press = pause)
- **Post-video quiz** : Knowledge validation with immediate correction and retry
- **Big Three Assessment** : Financial literacy quiz (placement test) with forward/backward navigation
- **Money Personality** : Financial personality quiz (18 Likert questions) with personalised result
- **Step-by-step progression** : Sequential unlock system (video 2 locked until video 1 is watched)
- **Direct navigation** : Click on tile N → opens directly at video N

## Project structure

[Feature-Sliced Design](https://feature-sliced.design/) architecture:

```
apps/frontend/src/
├── app/              # Global configuration (router, styles)
├── entities/         # Business models (progress, firsts)
├── features/         # User features (take-quiz)
├── widgets/          # Reusable complex components
│   ├── module-tile/    # Video/quiz navigation tile
│   ├── youtube-player/  # Cloudinary video player
│   ├── question-card/   # Quiz question card (post-video)
│   └── assessment-card/ # Assessment question card (Big Three)
├── pages/            # Full pages
│   ├── onboarding/   # Welcome slides (first launch)
│   ├── home/         # Firsts list
│   ├── first-detail/ # Tile grid
│   ├── player/       # Vertical video player
│   ├── assessment/   # Big Three Quiz (placement test)
│   ├── assessment-result/ # Big Three Quiz result
│   ├── personality-intro/ # Money Personality Quiz intro
│   ├── personality-quiz/  # Money Personality Quiz (18 questions)
│   ├── personality-result/ # Money Personality result
│   ├── budget-intro/     # Phase 3 : Budget Check intro
│   ├── budget-income/    # Phase 3 : Monthly income input
│   ├── budget-essentials/ # Phase 3 : Essential expenses (must-haves)
│   ├── budget-treats/    # Phase 3 : Treat expenses (nice-to-haves)
│   ├── budget-result/    # Phase 3 : Result (Surplus/Balance)
│   ├── goal-create/      # Savings goal definition (end of onboarding)
│   ├── quiz/         # Post-video quiz (validation)
│   └── reward/       # Reward screen
├── shared/           # Shared utilities
└── data/             # Static data (firsts.json, assessments.json)
```

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd yuhlearn

# Install frontend dependencies
cd apps/frontend
npm install

# Go back to the root
cd ../..
```

## Running

### Local development

```bash
cd apps/frontend
npm run dev
```

The application is available at `http://localhost:5173`

**Main routes:**
| Route | Description |
|-------|-------------|
| `/` | Redirects to onboarding (first visit) or home |
| `/onboarding` | Welcome slides |
| `/home` | Firsts list |
| `/first/:id` | First detail |
| `/assessment` | Big Three Quiz (placement test) |
| `/assessment-result` | Big Three Quiz result (score) |
| `/personality-intro` | Money Personality Quiz intro |
| `/personality-quiz` | Money Personality Quiz (18 Likert questions) |
| `/personality-result` | Money Personality result |
| `/budget-intro` | Phase 3 : Budget Check intro |
| `/budget-income` | Phase 3 : Monthly income input |
| `/budget-essentials` | Phase 3 : Essential expenses |
| `/budget-treats` | Phase 3 : Treat expenses |
| `/budget-result` | Phase 3 : Budget Check result |
| `/goal-create` | Savings goal definition (end of onboarding) |
| `/first/:id/video` | Vertical video player |


## Data

Content (videos, quizzes) is defined in:
- `apps/frontend/src/data/firsts.json`

Video format: Cloudinary MP4 URLs (vertical 9:16)

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite development server |
| `npm run build` | Production build |
| `npm run preview` | Build preview |
| `npm run test` | Vitest tests |
| `npm run lint` | ESLint |

## Technologies

- **Framework** : Vue 3 (Composition API, `<script setup>`)
- **Build** : Vite
- **Router** : Vue Router 4
- **Tests** : Vitest
- **Style** : CSS variables, no external UI framework
- **Videos** : Cloudinary (MP4), native HTML5 player

## User progression

Stored in `localStorage` (key `yuhlearn_progress`):
- `completedTiles` : IDs of watched videos
- `quizPassed` : Quiz passed
- `completed` : First completed
- `completedAt` : Completion date
