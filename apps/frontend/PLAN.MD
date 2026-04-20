# YuhLearn — Build Plan

Windsurf : execute tasks in order. Check each task when done.
If a decision is needed and not documented, write it in DECISIONS.md.

---

## Phase 1 — Project Setup

- [x] 1.1 Init Vite + Vue 3 project (JavaScript)
- [x] 1.2 Install Vue Router 4
- [x] 1.3 Set up router with all routes defined in SCREENS.md
- [x] 1.4 Create folder structure as defined in .windsurfrules
- [x] 1.5 Create global CSS file with all variables from DesignBridge.md
- [x] 1.6 Create App.vue with router-view + base layout

## Phase 2 — Static Data

- [x] 2.1 Create src/data/firsts.json (First Budget module, 3 videos + test tile)
- [x] 2.2 Create src/data/questions.json (7 questions for First Budget)
- [x] 2.3 Create src/data/yuh-mock.json (1 pocket: BMW, CHF 3240/10000)

## Phase 3 — Composables

- [x] 3.1 useGoal() : load goals from localStorage, merge with yuh-mock, expose goals
- [x] 3.2 useProgress() : load/save progress per First, markTileComplete, isTileLocked,
         isFirstComplete
- [x] 3.3 useQuiz() : manage quiz session (current question, answers, retry logic,
         completion check)
- [x] 3.4 useReward() : save/load rewards from localStorage

## Phase 4 — Base Components

- [x] 4.1 GoalCard.vue
- [x] 4.2 FirstTile.vue
- [x] 4.3 ModuleTile.vue
- [x] 4.4 YoutubePlayer.vue (IFrame API wrapper)
- [x] 4.5 VideoOverlay.vue
- [x] 4.6 QuestionCard.vue
- [x] 4.7 AnswerOption.vue
- [x] 4.8 RewardCard.vue
- [x] 4.9 PocketSelector.vue

## Phase 5 — Screens

- [x] 5.1 HomeView.vue (Goal card + First grid by level)
- [x] 5.2 FirstDetailView.vue (tile grid, lock logic)
- [x] 5.3 VideoPlayerView.vue (fullscreen player, prev/next, auto-advance)
- [x] 5.4 QuizView.vue (question cards, retry logic)
- [x] 5.5 RewardView.vue (celebration, pocket selector, claim)

## Phase 6 — Polish

- [x] 6.1 Lock/unlock transitions on tiles (CSS transition)
- [x] 6.2 Progress ring on FirstTile (SVG circle)
- [x] 6.3 "Test unlocked" toast on last video completion
- [x] 6.4 Quiz answer feedback animations
- [x] 6.5 Reward celebration animation (CSS keyframes, no external lib)
- [x] 6.6 Global loading states where needed

## Phase 7 — QA

- [x] 7.1 Full user flow test : Home → First Detail → 3 videos → Quiz → Reward
- [x] 7.2 Quiz retry logic : verify wrong answers are re-asked
- [x] 7.3 localStorage persistence : reload mid-flow, verify state is restored
- [x] 7.4 Lock logic : verify tiles unlock in correct order
- [x] 7.5 Reward boost : verify saved correctly, displayed on Home if active

---

## DECISIONS.md (initial)
```markdown
# Decisions Log

| Date | Decision | Reason |
|---|---|---|
| — | YouTube placeholder IDs : use public Yuh promo videos or finance-related public videos until real content is available | No real content yet |
| — | Onboarding skipped : app entry point is HomeView directly | Onboarding already built separately |
| — | No Pinia : all state via composables + localStorage | Keeps stack minimal |
