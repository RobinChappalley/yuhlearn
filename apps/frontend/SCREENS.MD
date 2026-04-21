# YuhLearn — Screens

Onboarding screens are excluded (already built).
All screens are mobile-first, reference width 390px.
Language : English.

---

## Screen 1 — Home

**Route** : `/`
**File** : `views/HomeView.vue`

**Layout** :
- Sticky header : YuhLearn logo + user avatar/initials
- Goal card (top) : pocket name, progress bar, current / target amount, days left
- Section "Beginner" : horizontal scroll grid of First tiles (3 per row, wrapping)
- Section "Intermediate" : same, tiles locked if user hasn't completed all Beginner
- Section "Advanced" : same, locked

**Components** :
- `GoalCard.vue` : shows pocket name, CHF progress, % progress bar, deadline countdown
- `FirstTile.vue` : icon, title, lock icon if locked, green checkmark if completed, 
  circular progress ring if in progress (% of tiles completed)

**Data** :
- Goals from `useGoal()` composable (localStorage + yuh-mock.json)
- Firsts list from `firsts.json`
- Progress from `useProgress()` composable

**Actions** :
- Tap FirstTile → navigate to `/first/:id`

---

## Screen 2 — First Detail

**Route** : `/first/:id`
**File** : `views/FirstDetailView.vue`

**Layout** :
- Back arrow (top left) → Home
- First title + short description
- Grid of tiles (based on tableau sketch) :
  - 3 columns
  - Tile 1 (top-left) : always available first
  - Tiles 2, 3 : video tiles, locked until previous completed
  - Tile 4 : video tile
  - Tile 5 (bottom-right) : TEST tile, locked until all videos done
  - Tiles with hatching in sketch = locked state visual
- Each tile shows : number, play icon or "Test" label, completed checkmark

**Components** :
- `ModuleTile.vue` : number badge, icon (play/test), lock overlay, completed state

**Data** :
- First data from `firsts.json` filtered by `:id`
- Tile completion state from `useProgress()`

**Actions** :
- Tap video tile (if unlocked) → `/first/:id/video/:tileId`
- Tap test tile (if unlocked) → `/first/:id/quiz`
- Back → `/`

---

## Screen 3 — Video Player

**Route** : `/first/:id/video/:tileId`
**File** : `views/VideoPlayerView.vue`

**Layout** :
- Full-screen vertical (no header, immersive)
- YouTube IFrame embed, 9:16 ratio, fills screen
- Top-left : back arrow (semi-transparent overlay)
- Bottom : tile title + First name (overlay on video)
- Right side : next tile button (arrow down) + previous tile button (arrow up)
- On last video tile completed : show subtle "Test unlocked" toast

**Components** :
- `YoutubePlayer.vue` : wraps YouTube IFrame API, autoplay, fires event on end
- `VideoOverlay.vue` : back button, title, prev/next navigation

**Data** :
- youtubeId from `firsts.json` tile
- Current tile index from route params

**Actions** :
- Video ends → mark tile as completed (useProgress), auto-advance to next tile
- Next/Prev arrows → navigate between tiles
- Back → `/first/:id`

---

## Screen 4 — Quiz

**Route** : `/first/:id/quiz`
**File** : `views/QuizView.vue`

**Layout** :
- Header : First title + "Test" label + progress indicator (e.g. "3 / 7")
- One question card at a time (full width, centered)
- Question text (large, readable)
- Answer options : vertical list of tappable cards
- On answer tap : immediate color feedback
  - Correct → green card, short delay, next question
  - Wrong → red card, question flagged for retry
- After all questions : show retry screen for wrong answers only
- All correct → navigate to `/first/:id/reward`

**Components** :
- `QuestionCard.vue` : question text + answer list
- `AnswerOption.vue` : tappable card, idle/correct/wrong states

**Data** :
- Questions from `questions.json` filtered by firstId
- Quiz state managed in `useQuiz()` composable (not persisted mid-session,
  only final result saved to localStorage)

**Actions** :
- Tap answer → feedback + advance
- Complete all correctly → `/first/:id/reward`

---

## Screen 5 — Reward

**Route** : `/first/:id/reward`
**File** : `views/RewardView.vue`

**Layout** :
- Celebration visual (simple animation or emoji/icon, no lottie)
- Title : "First Budget completed! 🎉"
- Reward card : "+1% interest boost for 14 days (max CHF 500)"
- Section : "Apply to which pocket?" → list of user's Goal pockets (tappable cards)
- CTA button : "Claim boost" (disabled until pocket selected)
- After claim : success state → "Back to Home" button

**Components** :
- `RewardCard.vue` : boost details display
- `PocketSelector.vue` : list of Goal pockets, selectable

**Data** :
- Goals/pockets from `useGoal()`
- Saves reward to localStorage via `useReward()` composable

**Actions** :
- Select pocket → enable "Claim boost"
- Tap "Claim boost" → save reward, show success
- "Back to Home" → `/`