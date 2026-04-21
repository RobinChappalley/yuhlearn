# YuhLearn — Data Model

All data is stored in localStorage or static JSON files.
No backend, no real API.

---

## Static JSON files (src/data/)

### firsts.json
List of all First modules.

```json
[
  {
    "id": "first-budget",
    "title": "First Budget",
    "level": "beginner",
    "icon": "icon-budget.svg",
    "description": "Learn how to split your money and stick to a budget.",
    "tiles": [
      { "id": "video-1", "type": "video", "title": "What is a budget?", "youtubeId": "PLACEHOLDER_YT_ID" },
      { "id": "video-2", "type": "video", "title": "The 50/30/20 rule", "youtubeId": "PLACEHOLDER_YT_ID" },
      { "id": "video-3", "type": "video", "title": "Traps to avoid", "youtubeId": "PLACEHOLDER_YT_ID" },
      { "id": "test", "type": "test", "title": "Test your knowledge" }
    ]
  }
]
