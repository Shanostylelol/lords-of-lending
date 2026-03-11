# Phase 15: Weekly Roundup Series — "SBA Lending This Week"

**Priority:** Medium
**Estimated Duration:** 6-8 hours (infrastructure + first 4 issues)
**Dependencies:** Phase 14 (email capture) recommended but not required
**Goal:** Establish recurring fresh content that targets "SBA lending news" keywords, builds email audience, and provides natural internal linking opportunities

---

## Pre-Read

- `src/app/[slug]/page.tsx` — Current markdown rendering pipeline
- `src/lib/constants.ts` — ContentMeta interface, content type definitions
- `src/app/sitemap.ts` — Add roundup URLs
- `content/podcast/` — Example markdown format for reference
- `docs/VOICE-GUIDE.md` — Shane's voice for editorial commentary

---

## Sub-Steps

### 15.1: Roundup Content Directory & Template

**Files:**
- Create `content/roundup/` directory
- Create `content/roundup/_TEMPLATE.md` — Reusable template for each issue

**Action:**
- Template structure:
  ```markdown
  ---
  title: "SBA Lending This Week — [Date Range]"
  date: "[YYYY-MM-DD]"
  author: "shane"
  excerpt: "[1-sentence summary of top story]"
  image: "/images/brand/sba-lending-this-week.webp"
  ---

  ## Top Stories

  ### [Headline 1]
  [2-3 paragraph summary + Lords of Lending take]

  ### [Headline 2]
  [2-3 paragraph summary]

  ## Rate Watch
  - **WSJ Prime Rate:** [X]%
  - **Typical SBA 7(a) Range:** [X-X]%
  - **10-Year Treasury:** [X]% (affects SBA 504)

  ## Deal Spotlight
  [Anonymized deal highlight — industry, size, structure, outcome, lesson]

  ## From the Podcast
  [Plug relevant episode with link]

  ## Worth Reading
  - [Internal link to relevant article 1](/slug)
  - [Internal link to relevant article 2](/slug)
  - [External resource if noteworthy]
  ```

**Build:** N/A (content only)

---

### 15.2: Roundup Route Support

**Files:**
- Modify `src/lib/constants.ts` — Add "roundup" to ContentMeta category type
- Modify `src/app/[slug]/page.tsx` — Add roundup content type rendering (prefix: `sba-lending-this-week-`)

**Action:**
- Roundup slugs follow pattern: `sba-lending-this-week-2026-03-17`
- page.tsx detects prefix and loads from `content/roundup/`
- Roundup layout: similar to blog posts but with a "Weekly Digest" badge instead of category
- Include "Subscribe" CTA linking to email capture (or inline EmailCapture component if Phase 14 is done)
- Show "Previous Issues" list at bottom (link to other roundup posts)
- Metadata: dynamic title/description per issue
- Schema: Article + BreadcrumbList

**Build:** `npx tsc --noEmit`

---

### 15.3: Roundup Index Page

**Files:**
- Create `src/app/sba-lending-this-week/page.tsx`

**Action:**
- Archive page listing all published roundup issues
- Grid of issue cards (date, title, excerpt)
- Most recent at top
- Metadata: "SBA Lending This Week — Weekly News & Insights | Lords of Lending"
- CTA: Subscribe to get it in your inbox
- Link from footer navigation

**Build:** `npx tsc --noEmit`

---

### 15.4: Create Branded Roundup Image

**Files:**
- Create `/public/images/brand/sba-lending-this-week.webp`

**Action:**
- Generate a branded hero image for the roundup series (used as OG image for all issues)
- Style: Lords Ink pen-and-ink, newspaper/dispatch theme
- Prompt: "Black ink pen-and-ink editorial illustration on warm cream paper. ONLY two colors: black ink and cream paper, with one small hint of burnt gold on a newspaper masthead only. Dense crosshatching. A stack of newspapers and a cup of coffee on a desk, morning light through a window. 1940s editorial aesthetic. No borders no frames no text no words no letters no watermarks. Widescreen 16:9."
- Convert to WebP 1200x630, <200KB

**Build:** Verify file exists and is <200KB

---

### 15.5: Write First 4 Roundup Issues

**Files:**
- Create `content/roundup/sba-lending-this-week-2026-03-17.md`
- Create `content/roundup/sba-lending-this-week-2026-03-24.md`
- Create `content/roundup/sba-lending-this-week-2026-03-31.md`
- Create `content/roundup/sba-lending-this-week-2026-04-07.md`

**Action:**
- Each issue: 600-1,000 words
- Topics: Pull from recent SBA news, rate changes, industry trends, policy updates
- Voice: Shane's casual authority (contractions, blunt takes, industry jargon)
- Each issue links to 2-3 existing articles on the site (internal linking)
- Include rate watch section with current rates
- Include deal spotlight (anonymized examples)

**Build:** `npm run build`

---

### 15.6: Update Sitemap & Navigation

**Files:**
- Modify `src/app/sitemap.ts` — Add roundup archive page + individual issues
- Modify `src/components/layout/footer.tsx` — Add "SBA Lending This Week" link

**Action:**
- Archive page priority: 0.6
- Individual issues priority: 0.5
- Add to footer under Resources or similar section

**Build:** `npm run build`

---

## Gate Criteria

- [ ] Roundup template is documented and reusable
- [ ] page.tsx correctly renders roundup content type with proper layout
- [ ] Archive page lists all published issues
- [ ] 4 roundup issues written with 600+ words each
- [ ] Each issue has 2+ internal links to existing articles
- [ ] Rate Watch section has plausible current rates
- [ ] Branded hero image generated and <200KB
- [ ] Sitemap includes all roundup URLs
- [ ] Footer links to roundup archive
- [ ] Zero TypeScript errors
- [ ] Build passes with new pages

## Build Command

```bash
npx tsc --noEmit && npm run build
```

## Ongoing Operations

After Phase 15 is complete, new issues should be published weekly (every Monday):
1. Research 2-3 SBA news stories from the past week
2. Copy template, fill in stories with Shane's voice
3. Update rate watch numbers
4. Add deal spotlight
5. Commit + push
6. Send to email subscribers (if Phase 14 is complete)
