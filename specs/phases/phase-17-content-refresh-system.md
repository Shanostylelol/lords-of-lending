# Phase 17: Content Refresh & Monitoring System

**Priority:** Low (post-launch optimization)
**Estimated Duration:** 3-4 hours
**Dependencies:** Phases 12-16 complete, site live and indexed
**Goal:** Establish systems for keeping content fresh, monitoring SEO performance, and identifying content gaps for ongoing growth

---

## Pre-Read

- `specs/SEO-DOMINATION-PLAN.md` — Content refresh schedule (Phase 10)
- `specs/COMPETITIVE-ANALYSIS.md` — Keyword gaps identified
- `src/app/sitemap.ts` — Current URL structure
- `docs/INTERNAL-LINKING-STRATEGY.md` — Linking patterns

---

## Sub-Steps

### 17.1: Content Freshness Tracker

**Files:**
- Create `scripts/content-freshness.ts`

**Action:**
- Node.js script that reads all markdown files and reports:
  - Articles older than 90 days without update (pillar articles)
  - Articles older than 180 days without update (supporting/industry)
  - State pages older than 365 days
  - Rate/fee data that may be stale (search for "$", "%", "2025", "2026")
  - Articles with fewer than 3 internal links (linking gaps)
- Output: Markdown report saved to `logs/content-freshness-report.md`
- Intended to be run monthly: `npm run content-freshness`

**Build:** Script runs without errors

---

### 17.2: Keyword Tracking Baseline

**Files:**
- Create `docs/KEYWORD-TRACKING.md`

**Action:**
- Document the 30 target keywords from SEO-DOMINATION-PLAN.md
- For each keyword, record:
  - Target URL on lordsoflending.com
  - Current ranking (check manually via Google Search Console)
  - Target ranking (from the 90-day targets)
  - Content type (pillar, supporting, industry, state)
- This becomes the baseline for measuring SEO progress
- Include instructions for checking rankings via GSC

**Build:** N/A (documentation)

---

### 17.3: Internal Linking Health Check Script

**Files:**
- Create `scripts/link-health.ts`

**Action:**
- Scan all markdown content files for internal links
- Report:
  - Broken internal links (target slug doesn't exist)
  - Orphan pages (no incoming links)
  - Pages with fewer than 3 outgoing links
  - Pages with fewer than 2 incoming links
  - Most-linked pages (verify pillars have highest count)
  - Anchor text quality (flag any "click here" or "read more" generic anchors)
- Output: Console table + JSON
- Add to package.json: `"link-health": "tsx scripts/link-health.ts"`

**Build:** Script runs without errors

---

### 17.4: Google Search Console Integration Notes

**Files:**
- Create `docs/GSC-SETUP.md`

**Action:**
- Document step-by-step GSC setup:
  1. Verify domain ownership (TXT record already exists: `google-site-verification=D0sF8orsIn4T0JKSU7ZYVwuxnssKaN326v5MdAJehj4`)
  2. Submit sitemap URL: `https://lordsoflending.com/sitemap.xml`
  3. Request indexing for 5 pillar articles first
  4. Monitor Coverage report for crawl errors
  5. Check Core Web Vitals report after 28 days of data
  6. Set up email alerts for indexing issues
- Include screenshots or descriptions of where to click in GSC
- Note: This is a manual process, not automatable

**Build:** N/A (documentation)

---

### 17.5: Content Gap Identifier

**Files:**
- Create `scripts/content-gaps.ts`

**Action:**
- Compare existing content slugs against:
  - All keywords from COMPETITIVE-ANALYSIS.md
  - Common SBA search queries (hardcoded list of 50+ queries)
  - State pages without supporting articles mentioning that state
  - Industry pages without related podcast episodes
- Output: List of content opportunities ranked by estimated search volume (qualitative: high/medium/low)
- This informs future article planning

**Build:** Script runs without errors

---

## Gate Criteria

- [ ] Content freshness script identifies stale content correctly
- [ ] Keyword tracking document has all 30 target keywords with URLs
- [ ] Link health script detects broken links and orphans (should find 0 currently)
- [ ] GSC setup guide is complete and actionable
- [ ] Content gap script produces useful opportunity list
- [ ] All scripts added to package.json
- [ ] Zero errors on script execution

## Build Command

```bash
npx tsx scripts/content-freshness.ts && npx tsx scripts/link-health.ts && npx tsx scripts/content-gaps.ts
```

## Notes

- These scripts are meant to be run periodically (monthly), not in CI/CD
- They produce reports that inform manual decisions, not automated actions
- Content freshness data should drive the quarterly refresh cycle from SEO-DOMINATION-PLAN.md
