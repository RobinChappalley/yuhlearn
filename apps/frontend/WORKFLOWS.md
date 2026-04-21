# YuhLearn — User Workflows

## 1. Home → Open a First

1. User lands on Home screen (post-onboarding)
2. User sees their active Goal card at the top (progress bar, amount, deadline)
3. User sees Firsts grouped by level (Beginner, Intermediate, Advanced)
4. Each First = a tile showing : title, icon, lock state, completion state
5. User taps a First tile → navigates to First Detail screen

## 2. First Detail → Grid of tiles

1. First Detail screen shows the module title + description
2. Grid of tiles : each tile = one video OR the test tile (last position)
3. Tile states :
   - Locked (grayed, cannot tap) : previous tile not completed
   - Available (can tap) : previous tile completed
   - Completed (checkmark) : video watched OR questions answered correctly
   - Test tile : only unlocked when all video tiles are completed
4. User taps an available video tile → navigates to Video Player screen
5. User taps the test tile (if unlocked) → navigates to Quiz screen

## 3. Video Player

1. Full-screen vertical YouTube embed (Shorts-style)
2. Video plays automatically
3. Navigation : previous / next video buttons (vertical swipe or arrows)
4. On video end : tile marked as completed, return to First Detail
5. User can manually go back to First Detail at any time

## 4. Quiz

1. Questions shown one by one (card style, scrollable if needed)
2. Each question : multiple choice (1 correct answer)
3. User selects an answer → immediate feedback (correct / wrong)
4. Wrong answer : question is NOT counted as completed
   → user must re-answer all incorrectly answered questions at the end
5. All questions must be answered correctly to complete the quiz
6. On full completion : First marked as done → Reward screen shown

## 5. Reward Screen

1. Card displayed : "First Budget completed !"
2. Explanation of the boost (+1% / 14 days / max CHF 500)
3. List of user's Goals shown → user selects one pocket to apply boost
4. Confirmation → boost saved in localStorage
5. Return to Home

## 6. Goal Progress (passive)

- Home screen always shows active Goal card
- Progress % pulled from yuh-mock.json (static, can be edited to simulate)
- No user action required
