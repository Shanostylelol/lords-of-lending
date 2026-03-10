# Error Log — Lords of Lending SEO Content

**Started:** 2026-03-10

---

## Format

```
## [Date] [Time] — [Content Piece]
- **Error type:** SEO / Voice / AI-Detection / Originality / Links / Image / Build
- **Details:** [what failed]
- **Correction:** [what was changed]
- **Result:** Fixed / Escalated
- **Retry count:** [1-3]
```

---

## 2026-03-10

### 15:43 — /podcast page
- **Error type:** Build (Buzzsprout 404)
- **Details:** PODCAST_EPISODES[0] has buzzsproutId "TBD-20", Buzzsprout returns 404
- **Correction:** Changed to pick first episode with live Buzzsprout ID using `.find()`
- **Result:** Fixed
- **Retry count:** 0

### 15:44 — Episode 20 transcript
- **Error type:** Build (slug mismatch)
- **Details:** Transcript file `why-equity-not-cash-flow-lol-20.txt` doesn't match episode slug `why-equity-not-cash-flow-makes-or-breaks-sba-deals-lol-20`
- **Correction:** Renamed transcript file to match slug
- **Result:** Fixed
- **Retry count:** 0
