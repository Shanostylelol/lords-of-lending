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

### 17:15 — complete-guide-sba-7a-loans (Pillar 1)
- **Error type:** AI-Detection
- **Details:** Banned phrase "nuanced" found on line 42: "But SBA lending is far more nuanced than a consumer credit check."
- **Correction:** Replaced "nuanced" with "complicated"
- **Result:** Fixed
- **Retry count:** 0

### 17:35 — AI Detection Sweep (Batch)
- **Error type:** AI-Detection
- **Details:** Found banned phrases in new content:
  - sba-convention-networking.md: "ecosystem" → replaced with "industry"
  - bank-bdo-to-independent.md: "ecosystem" → replaced with "circle"
  - future-sba-lending.md: "innovative" → replaced with "good"
  - sba-lending-101-foundation.md: "ecosystem" (3x) → replaced with "network"/"world"
  - sba-lending-101-foundation.md: "facilitate" → replaced with "handle"
  - why-equity-not-cash-flow-lol-20.md: "actionable" → replaced with "practical"
  - seller-notes-deep-dive-lol-15.md: "ecosystem" → replaced with "supply chain"
- **Correction:** All 8 instances replaced with natural alternatives
- **Result:** Fixed
- **Retry count:** 0

### 17:30 — Route Build (State/Industry)
- **Error type:** Build
- **Details:** `sba-loans-in-[state]` and `sba-loans-for-[industry]` directories created as partial dynamic routes — Next.js App Router doesn't support partial dynamic segments in directory names
- **Correction:** Moved state/industry rendering into `[slug]/page.tsx` route with prefix matching (`sba-loans-in-{slug}`, `sba-loans-for-{slug}`). Deleted broken directories.
- **Result:** Fixed — 165 pages now generate successfully (50 state + 15 industry + 100 other)
- **Retry count:** 1
