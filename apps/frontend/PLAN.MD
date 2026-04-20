# YuhLearn — Build Plan

Windsurf : execute tasks in order. Check each task when done.
If a decision is needed and not documented, write it in DECISIONS.md.

---

## Phase 1 — Project Setup

- [ ] 1.1 Init Vite + Vue 3 project (JavaScript)
- [ ] 1.2 Install Vue Router 4
- [ ] 1.3 Set up router with all routes defined in SCREENS.md
- [ ] 1.4 Create folder structure as defined in .windsurfrules
- [ ] 1.5 Create global CSS file with all variables from DesignBridge.md
- [ ] 1.6 Create App.vue with router-view + base layout

## Phase 2 — Static Data

- [ ] 2.1 Create src/data/firsts.json (First Budget module, 3 videos + test tile)
- [ ] 2.2 Create src/data/questions.json (7 questions for First Budget)
- [ ] 2.3 Create src/data/yuh-mock.json (1 pocket: BMW, CHF 3240/10000)

## Phase 3 — Composables

- [ ] 3.1 useGoal() : load goals from localStorage, merge with yuh-mock, expose goals
- [ ] 3.2 useProgress() : load/save progress per First, markTileComplete, isTileLocked,
         isFirstComplete
- [ ] 3.3 useQuiz() : manage quiz session (current question, answers, retry logic,
         completion check)
- [ ] 3.4 useReward() : save/load rewards from localStorage

## Phase 4 — Base Components

- [ ] 4.1 GoalCard.vue
- [ ] 4.2 FirstTile.vue
- [ ] 4.3 ModuleTile.vue
- [ ] 4.4 YoutubePlayer.vue (IFrame API wrapper)
- [ ] 4.5 VideoOverlay.vue
- [ ] 4.6 QuestionCard.vue
- [ ] 4.7 AnswerOption.vue
- [ ] 4.8 RewardCard.vue
- [ ] 4.9 PocketSelector.vue

## Phase 5 — Screens

- [ ] 5.1 HomeView.vue (Goal card + First grid by level)
- [ ] 5.2 FirstDetailView.vue (tile grid, lock logic)
- [ ] 5.3 VideoPlayerView.vue (fullscreen player, prev/next, auto-advance)
- [ ] 5.4 QuizView.vue (question cards, retry logic)
- [ ] 5.5 RewardView.vue (celebration, pocket selector, claim)

## Phase 6 — Polish

- [ ] 6.1 Lock/unlock transitions on tiles (CSS transition)
- [ ] 6.2 Progress ring on FirstTile (SVG circle)
- [ ] 6.3 "Test unlocked" toast on last video completion
- [ ] 6.4 Quiz answer feedback animations
- [ ] 6.5 Reward celebration animation (CSS keyframes, no external lib)
- [ ] 6.6 Global loading states where needed

## Phase 7 — QA

- [ ] 7.1 Full user flow test : Home → First Detail → 3 videos → Quiz → Reward
- [ ] 7.2 Quiz retry logic : verify wrong answers are re-asked
- [ ] 7.3 localStorage persistence : reload mid-flow, verify state is restored
- [ ] 7.4 Lock logic : verify tiles unlock in correct order
- [ ] 7.5 Reward boost : verify saved correctly, displayed on Home if active

---

## DECISIONS.md (initial)
```markdown
# Decisions Log

| Date | Decision | Reason |
|---|---|---|
| — | YouTube placeholder IDs : use public Yuh promo videos or finance-related public videos until real content is available | No real content yet |
| — | Onboarding skipped : app entry point is HomeView directly | Onboarding already built separately |
| — | No Pinia : all state via composables + localStorage | Keeps stack minimal |
