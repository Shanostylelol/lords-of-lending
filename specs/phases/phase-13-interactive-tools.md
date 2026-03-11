# Phase 13: Interactive Tools & Calculators

**Priority:** Medium-High
**Estimated Duration:** 8-10 hours
**Dependencies:** None
**Goal:** Build 3 interactive calculator tools that earn backlinks, increase engagement time, and target high-value keywords ("SBA loan calculator", "DSCR calculator", "SBA eligibility")

---

## Pre-Read

- `src/app/tools/page.tsx` — Existing tools landing page (skeleton only)
- `src/components/sections/loan-program.tsx` — Existing loan program details (used on tools page)
- `src/lib/structured-data.ts` — Need to add softwareAppJsonLd()
- `src/lib/constants.ts` — SITE_CONFIG for metadata
- `src/app/[slug]/page.tsx` — Article layout patterns for reference

---

## Sub-Steps

### 13.1: SBA Loan Payment Calculator

**Files:**
- Create `src/app/tools/sba-loan-calculator/page.tsx`
- Create `src/components/tools/sba-calculator.tsx`

**Action:**
- Client-side React component ("use client")
- Inputs: Loan amount ($50K-$5M slider + text), Term (7/10/25 years radio), Interest rate (WSJ Prime + spread, default to current rates), SBA guarantee fee toggle
- Outputs: Monthly payment, Total interest, Total cost, SBA guarantee fee amount, Amortization summary
- Formula: Standard amortization (P&I), SBA guarantee fee schedule (2%-3.75% based on amount + term per current SBA SOP)
- 500+ words of educational content below the calculator explaining SBA loan terms, how rates work, fee structures
- FAQ section (6 questions) with FAQ JSON-LD
- Metadata: title "SBA Loan Calculator — Estimate Your Monthly Payment", description targeting "SBA loan calculator" keyword
- Schema: SoftwareApplication JSON-LD
- Style: Dark card, gold accent inputs, large readable output numbers
- Mobile responsive

**Build:** `npx tsc --noEmit`

---

### 13.2: DSCR Calculator

**Files:**
- Create `src/app/tools/dscr-calculator/page.tsx`
- Create `src/components/tools/dscr-calculator.tsx`

**Action:**
- Client-side React component
- Inputs: Annual net operating income (NOI), Annual debt service (or let them input loan details to calculate it), Add-backs toggle (owner salary, one-time expenses)
- Outputs: DSCR ratio (with color coding: red < 1.0, yellow 1.0-1.25, green > 1.25), Pass/fail indicator for SBA minimum (1.15-1.25 depending on lender), Adjusted DSCR with add-backs
- Educational content: What DSCR means, why lenders care, how to improve your ratio, common add-backs SBA lenders accept, difference between global vs project DSCR
- FAQ section (5 questions) with JSON-LD
- Metadata targeting "DSCR calculator", "debt service coverage ratio calculator"
- Link to pillar article on deal structuring

**Build:** `npx tsc --noEmit`

---

### 13.3: SBA Eligibility Quick Check

**Files:**
- Create `src/app/tools/sba-eligibility-checker/page.tsx`
- Create `src/components/tools/eligibility-checker.tsx`

**Action:**
- Multi-step questionnaire (NOT a real application — educational screening tool)
- Steps (5-7 questions):
  1. Business type (for-profit, non-profit, government) — non-profit/gov = ineligible
  2. Business size (revenue or employee count) — check against SBA size standards
  3. Business location (US-based requirement)
  4. Use of funds (working capital, acquisition, real estate, equipment, refinance)
  5. Owner citizenship/residency status
  6. Criminal history disclosure
  7. Previous SBA loan default
- Output: "Likely Eligible" / "May Have Challenges" / "Likely Ineligible" with explanation
- Each result links to relevant articles (denied → sba-loan-denied, acquisition → buy-business-sba-loan, etc.)
- Disclaimer: "This is an educational tool, not a formal eligibility determination"
- CTA: "Ready to explore your options? → learn.lordsoflending.com/pricing"
- Educational content below explaining SBA eligibility criteria in detail
- FAQ section with JSON-LD
- Metadata targeting "SBA loan eligibility", "do I qualify for SBA loan"

**Build:** `npx tsc --noEmit`

---

### 13.4: Update Tools Landing Page

**Files:**
- Modify `src/app/tools/page.tsx`

**Action:**
- Replace skeleton content with a proper tools index page
- Grid of 3 tool cards with icons, titles, descriptions, and links
- Brief intro paragraph explaining what these tools do
- Metadata: "SBA Lending Tools & Calculators — Lords of Lending"
- Internal links to pillar articles

**Build:** `npx tsc --noEmit`

---

### 13.5: Add SoftwareApplication Schema

**Files:**
- Modify `src/lib/structured-data.ts`

**Action:**
- Add `softwareAppJsonLd(name, description, url)` function
- Returns schema.org/SoftwareApplication with:
  - applicationCategory: "FinanceApplication"
  - offers: { price: "0", priceCurrency: "USD" }
  - operatingSystem: "Web"

**Build:** `npx tsc --noEmit`

---

### 13.6: Update Sitemap

**Files:**
- Modify `src/app/sitemap.ts`

**Action:**
- Add 3 new tool URLs with priority 0.7
- `/tools/sba-loan-calculator`
- `/tools/dscr-calculator`
- `/tools/sba-eligibility-checker`

**Build:** `npm run build`

---

## Gate Criteria

- [ ] SBA Loan Calculator renders, accepts input, calculates correctly (verify: $500K, 25yr, 10.5% = ~$4,724/mo)
- [ ] DSCR Calculator renders, calculates ratio, shows pass/fail with correct thresholds
- [ ] Eligibility Checker walks through all steps, shows appropriate result
- [ ] All 3 tools have 500+ words of educational content + FAQ sections
- [ ] All 3 tools have proper metadata, OG tags, and JSON-LD schema
- [ ] Tools landing page shows all 3 tools in a grid
- [ ] Sitemap includes new tool URLs
- [ ] All tools are mobile responsive
- [ ] Zero TypeScript errors
- [ ] Build passes with new pages

## Build Command

```bash
npx tsc --noEmit && npm run build
```
