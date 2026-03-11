# Phase 16: Schema Expansion & SEO Polish

**Priority:** Medium
**Estimated Duration:** 4-6 hours
**Dependencies:** None (can run anytime)
**Goal:** Add remaining structured data types, social sharing, reading time display, and content freshness signals to maximize rich snippet eligibility and SERP features

---

## Pre-Read

- `src/lib/structured-data.ts` — Existing 9 schema functions
- `src/app/[slug]/page.tsx` — Where schemas are injected per content type
- `src/lib/constants.ts` — ContentMeta with readingTime field
- `src/app/layout.tsx` — Root layout metadata

---

## Sub-Steps

### 16.1: Additional Schema Types

**Files:**
- Modify `src/lib/structured-data.ts`

**Action:**
- Add `howToJsonLd(title, steps)` — For pillar articles with step-by-step guides
  - Schema: schema.org/HowTo with HowToStep array
  - Use on: "how-to-become-sba-loan-broker", "sba-deal-structuring-guide"
- Add `courseJsonLd(name, description, provider, url)` — For training-related content
  - Schema: schema.org/Course with Organization provider
  - provider: "Lords of Lending" with url "https://learn.lordsoflending.com"
  - Use on: "sba-loan-originator-training" pillar article
- Add `localBusinessJsonLd(state, industries)` — Reference schema for state pages
  - Schema: schema.org/LocalBusiness array with areaServed
  - Use on: All 50 state pages
- Update `articleJsonLdWithAuthor()` to accept optional `dateModified` parameter
  - Content freshness signal for Google

**Build:** `npx tsc --noEmit`

---

### 16.2: Inject New Schemas into Pages

**Files:**
- Modify `src/app/[slug]/page.tsx`

**Action:**
- Pillar articles: Add HowTo schema to articles with step-by-step content
  - Detect H2s that start with "Step" or are numbered
  - Or add a `hasSteps: true` flag to specific PILLAR_ARTICLES entries
- Training pillar: Add Course schema
- State pages: Add LocalBusiness reference schema
- All articles: Pass `dateModified` to articleJsonLdWithAuthor (use file's `lastModified` or frontmatter date)

**Build:** `npx tsc --noEmit`

---

### 16.3: Social Share Component

**Files:**
- Create `src/components/ui/social-share.tsx`
- Modify `src/app/[slug]/page.tsx` — Add to article pages

**Action:**
- Client-side component ("use client")
- Buttons: LinkedIn, X/Twitter, Facebook, Copy Link
- LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url={url}`
- X: `https://twitter.com/intent/tweet?url={url}&text={title}`
- Facebook: `https://www.facebook.com/sharer/sharer.php?u={url}`
- Copy Link: Copy current URL to clipboard with "Copied!" toast
- All links open in new tab (target="_blank", rel="noopener noreferrer")
- Desktop: Floating sidebar on the left (sticky on scroll)
- Mobile: Horizontal bar below the article title
- Style: Dark icons, gold on hover, small and unobtrusive
- Place on pillar, supporting, and blog articles only

**Build:** `npx tsc --noEmit`

---

### 16.4: Reading Time Display

**Files:**
- Modify `src/app/[slug]/page.tsx`

**Action:**
- Display "X min read" badge on article pages
- Calculate from word count: `Math.ceil(wordCount / 250)` minutes
- Show next to the date on pillar, supporting, and blog articles
- Already have `readingTime` field in ContentMeta — use it if populated
- Fallback: calculate from markdown content length
- Style: Small pill badge, muted text, next to date

**Build:** `npx tsc --noEmit`

---

### 16.5: Last Updated Date Display

**Files:**
- Modify `src/app/[slug]/page.tsx`

**Action:**
- Show "Last updated: {date}" below the publication date on pillar and supporting articles
- Only show if `lastUpdated` differs from `date` in frontmatter (i.e., content was refreshed)
- Add `lastUpdated?: string` to ContentMeta interface if not present
- Google rewards content freshness — this signals that articles are maintained
- Style: Small italic text below the date line

**Build:** `npx tsc --noEmit`

---

### 16.6: SEO Audit Script

**Files:**
- Create `scripts/seo-audit.ts`

**Action:**
- Node.js script that reads all content files and checks:
  - Title tag length (50-60 chars)
  - Meta description exists and is 150-160 chars
  - H1 exists (exactly one per article)
  - Images have alt text
  - Image files exist and are under 200KB
  - Minimum 3 internal links per article
  - FAQ section exists on pillar articles
  - JSON-LD is generated (check for schema script tags)
  - Word count meets minimums (pillar: 3000, supporting: 1200, podcast: 1500, state: 800, industry: 1000)
- Output: JSON report + console table with pass/fail per page
- Add to package.json scripts: `"seo-audit": "tsx scripts/seo-audit.ts"`

**Build:** `npm run seo-audit`

---

## Gate Criteria

- [ ] HowTo schema renders on step-by-step pillar articles
- [ ] Course schema renders on training pillar article
- [ ] LocalBusiness reference schema renders on state pages
- [ ] dateModified is included in article schemas
- [ ] Social share buttons render on article pages (LinkedIn, X, Facebook, Copy)
- [ ] Reading time displays correctly on article pages
- [ ] SEO audit script runs and produces a report
- [ ] All schemas validate (test with Google Rich Results Test)
- [ ] Zero TypeScript errors
- [ ] Build passes

## Build Command

```bash
npx tsc --noEmit && npm run build
```
