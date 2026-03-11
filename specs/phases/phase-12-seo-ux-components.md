# Phase 12: SEO UX Components

**Priority:** High
**Estimated Duration:** 6-8 hours
**Dependencies:** None (all content is shipped)
**Goal:** Add Table of Contents, visual breadcrumbs, enhanced author bio, and unified related articles to improve UX signals (time on page, bounce rate, crawl depth)

---

## Pre-Read

- `src/app/[slug]/page.tsx` — Current article rendering for all content types
- `src/components/sections/faq.tsx` — Existing accordion pattern (reuse for TOC)
- `src/lib/constants.ts` — PILLAR_ARTICLES, SUPPORTING_ARTICLES, ContentMeta interface
- `src/lib/structured-data.ts` — Existing breadcrumbJsonLd() function
- `docs/VOICE-GUIDE.md` — Author bios for Shane, Steph, Brian

---

## Sub-Steps

### 12.1: Extract Author Bio to Reusable Component

**Files:**
- Create `src/components/ui/author-bio.tsx`
- Modify `src/app/[slug]/page.tsx` — Replace inline author bio blocks with `<AuthorBio />`

**Action:**
- Extract the author card from page.tsx (appears at lines ~320-343 and ~598-621 for blog/pillar/supporting)
- Props: `author: "shane" | "steph" | "brian"`, `variant?: "full" | "compact"`
- Full variant: headshot image, name, title, 2-sentence bio, LinkedIn link, podcast link
- Compact variant: name + title only (for podcast episodes)
- Author data lives in the component (3 authors, static data)
- Use existing headshot images from `/images/headshots/`
- Dark card with gold accent border, matching site design

**Build:** `npx tsc --noEmit`

---

### 12.2: Table of Contents Component

**Files:**
- Create `src/components/ui/table-of-contents.tsx`
- Modify `src/app/[slug]/page.tsx` — Add TOC to pillar and supporting articles

**Action:**
- Auto-generate TOC from markdown headings (H2 and H3)
- Parse headings from the markdown content before rendering
- Desktop: Sticky sidebar on the right (hidden on mobile)
- Mobile: Collapsible section above the article content
- Each heading becomes a clickable anchor link with smooth scroll
- Highlight current section on scroll (Intersection Observer)
- Only render on pillar + supporting articles (long-form content, 2000+ words)
- Style: dark background, gold active indicator, small text

**Build:** `npx tsc --noEmit`

---

### 12.3: Visual Breadcrumb Component

**Files:**
- Create `src/components/ui/breadcrumb.tsx`
- Modify `src/app/[slug]/page.tsx` — Replace inline breadcrumb `<nav>` blocks with `<Breadcrumb />`

**Action:**
- Props: `items: Array<{label: string, href?: string}>`
- Last item has no link (current page)
- Separator: `>` or `/` character between items
- Style: small text, muted gold color, subtle
- JSON-LD breadcrumb schema is already generated in page.tsx — keep it, this is just the visual
- Replace the inline `<nav>` breadcrumb blocks in state pages (~lines 638-642) and industry pages (~lines 695-699) with the component
- Add breadcrumbs to pillar and supporting articles too:
  - Pillar: Home > Articles > {Title}
  - Supporting: Home > Articles > {Title}
  - State: Home > SBA Loans by State > SBA Loans in {State}
  - Industry: Home > SBA Loans by Industry > SBA Loans for {Industry}

**Build:** `npx tsc --noEmit`

---

### 12.4: Unified Related Articles Component

**Files:**
- Create `src/components/sections/related-articles.tsx`
- Modify `src/app/[slug]/page.tsx` — Replace text-only related links with card grid

**Action:**
- Props: `articles: Array<{slug: string, title: string, image: string, excerpt: string, category: string}>`
- Renders a 2-3 column grid of article cards (image, title, excerpt, category badge)
- Dark card with hover effect (subtle gold border on hover)
- Currently podcast pages have a "More Episodes" grid (lines ~452-494) — extract this pattern
- Currently industry/supporting pages show text-only links — upgrade to card grid
- Use `relatedSlugs` from ContentMeta to find related articles
- Fallback: show articles from the same category/cluster
- Max 3 related articles per page

**Build:** `npx tsc --noEmit`

---

## Gate Criteria

- [ ] Author bio renders on all blog, pillar, and supporting article pages with correct author data
- [ ] Table of Contents renders on pillar + supporting articles with clickable anchor links
- [ ] Visual breadcrumbs render on all content types (pillar, supporting, state, industry)
- [ ] Related articles show as card grid (not text-only) on pillar, supporting, and industry pages
- [ ] All components use dark theme with gold accents matching existing site design
- [ ] Zero TypeScript errors
- [ ] Build passes: 165/165 pages

## Build Command

```bash
npx tsc --noEmit && npm run build
```
