# Decisions Log

| Date | Decision | Reason |
|---|---|---|
| — | YouTube placeholder IDs : use public Yuh promo videos or finance-related public videos until real content is available | No real content yet |
| — | Onboarding skipped : app entry point is HomeView directly | Onboarding already built separately |
| — | No Pinia : all state via composables + localStorage | Keeps stack minimal |
| 2026-04-20 | Font `Proxima Soft` is proprietary and not available via Google Fonts — fallback stack used: `'Proxima Soft', 'Avenir Next', 'Segoe UI', sans-serif` | Cannot load proprietary font in dev/demo without license |
| 2026-04-20 | `firsts.json` is the single source of truth for quiz questions — it embeds questions with richer structure (4 answers, videoRef) vs the separate `questions.json` (3 answers, no videoRef). The `questions.json` at root is kept for reference only. | Avoids data duplication and inconsistency |
| 2026-04-20 | FSD layer `data/` placed at `src/data/` (outside FSD slice structure) for static JSON files | Static JSON is not a domain slice; this matches .windsurfrules spec |
| 2026-04-20 | `processes/` layer not used for Phase 1–5 — learning flow wired directly via router + composables | Keeps complexity low; can be extracted later if flow logic grows |
| 2026-04-20 | `useProgress`, `useGoal`, `useReward` made singletons (module-level `ref`) — state shared across all component instances without Pinia | Avoids stale state when multiple components call the same composable |
| 2026-04-20 | Quiz retry: clears answers for wrong-question IDs before re-queuing them | Fixes bug where `isAnswered()` would return true immediately on retry |
| 2026-04-20 | `boostPercent` in firsts.json is already a % value (e.g. 0.5 = 0.5%) — RewardCard displays it directly | Data model uses decimal percent, not multiplier |
| 2026-04-20 | Test tile lock is visual only — navigation to quiz is always allowed regardless of video completion state. Video tiles keep their hard lock (previous tile must be completed). | Makes the quiz testable without having to watch videos to the end. UX lock cue remains. |
