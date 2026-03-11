# Buying a Business — Content Tree Execution Spec

## Overview

Build a comprehensive "Buying a Business" knowledge hub at `/buying-a-business/` with 16 voice-matched articles extracted from the Business Buyer's Playbook (249pg) and 30-Day Post-Close Playbook (70pg). This becomes the primary borrower education path, pushing to SBA 7(a) loan application.

---

## Site Architecture Changes

### Navigation Update
**Current:** Articles | Tools | Guides | Podcast | Brokers | Learn
**Proposed:** Articles | Tools | Guides | **Buy a Business** | Podcast | Brokers | Learn

The "Buy a Business" link points to `/buying-a-business/` hub page.

### Route Structure
- `/buying-a-business/` — Hub page (new dedicated route, NOT [slug])
- All child articles render through existing `[slug]/page.tsx` dynamic route
- New cluster type: `"buying-a-business"` added to ContentMeta

### Internal Linking Architecture
```
/buying-a-business/ (Hub)
├── Phase 1: Ready?
│   ├── are-you-ready-to-buy-a-business (Shane)
│   └── business-acquisition-self-assessment (Steph)
├── Phase 2: Search
│   ├── how-to-find-businesses-for-sale (Shane)
│   └── business-brokers-vs-direct-search (Brian)
├── Phase 3: Due Diligence
│   ├── due-diligence-checklist-buying-a-business (Brian)
│   └── financial-due-diligence-for-business-buyers (Steph)
├── Phase 4: Valuation
│   └── how-to-value-a-small-business-for-acquisition (Steph)
├── Phase 5: Financing ★ MONEY ARTICLES
│   ├── financing-your-business-acquisition-with-sba (Shane)
│   └── equity-injection-down-payment-strategies (Steph)
├── Phase 6: Negotiation & Closing
│   ├── letter-of-intent-loi-guide-business-buyers (Brian)
│   └── closing-on-a-business-what-to-expect (Brian)
├── Phase 7: Post-Close (from 30-Day Playbook)
│   ├── first-30-days-after-buying-a-business (Shane)
│   ├── managing-employees-after-acquisition (Steph)
│   └── financial-systems-setup-post-acquisition (Brian)
└── Phase 8: Growth
    ├── growing-your-newly-acquired-business (Shane)
    └── when-to-refinance-or-expand-after-acquisition (Steph)
```

**Total: 16 articles** (Shane: 5, Steph: 6, Brian: 5)

---

## Article Specifications

### Universal Requirements
- Word count: 1,200–2,000 words each (long enough for SEO, short enough for readability)
- Voice: Matched to author per VOICE-GUIDE.md (catchphrases, metaphor style, tone)
- AI detection: Pass 7-check validation gate, avoid all 30+ banned phrases
- Disclaimer: Every article must include "This content is for educational purposes only. It is not legal, financial, or investment advice. We strongly recommend consulting with a qualified attorney and financial advisor before making any business acquisition decisions."
- CTA pattern: Primary "Apply for SBA Financing" button → `/loans/loan-application`, Secondary "Talk to Our Team" → `/contact`
- Internal links: 3-5 per article (to other buying-a-business articles + existing site content)
- Each article includes a "Where You Are" breadcrumb showing position in the journey

### Article Details

#### 1. `are-you-ready-to-buy-a-business`
- **Author:** Shane ("The Alchemist")
- **Title:** "Are You Ready to Buy a Business? The Questions Nobody Asks"
- **Keywords:** buy a business, ready to buy a business, business acquisition readiness
- **Source:** Playbook Phase 1 — self-assessment, personal readiness, financial prerequisites
- **Angle:** First-person "I've seen hundreds of deals die because the buyer wasn't ready" story
- **Links to:** business-acquisition-self-assessment, buy-business-sba-loan, sba-eligibility-deep-dive

#### 2. `business-acquisition-self-assessment`
- **Author:** Steph ("The Oracle")
- **Title:** "The Business Buyer's Self-Assessment: 15 Questions Before You Start"
- **Keywords:** business buyer assessment, should I buy a business quiz, business acquisition checklist
- **Source:** Playbook Phase 1 — financial readiness, lifestyle fit, risk tolerance
- **Angle:** Structured self-assessment with Steph's analytical framing
- **Links to:** are-you-ready-to-buy-a-business, how-to-find-businesses-for-sale, complete-guide-sba-7a-loans

#### 3. `how-to-find-businesses-for-sale`
- **Author:** Shane ("The Alchemist")
- **Title:** "How to Find Businesses for Sale: The Insider's Playbook"
- **Keywords:** find businesses for sale, buy a business, business for sale listings
- **Source:** Playbook Phase 2 — sourcing channels, BizBuySell, brokers, off-market deals
- **Angle:** Shane's real sourcing strategies, "the best deals never hit the market" stories
- **Links to:** business-brokers-vs-direct-search, are-you-ready-to-buy-a-business, sba-business-acquisition-what-lenders-really-expect

#### 4. `business-brokers-vs-direct-search`
- **Author:** Brian ("The Magistrate")
- **Title:** "Business Brokers vs. Direct Search: Which Path Gets You the Right Deal?"
- **Keywords:** business broker, buy business without broker, business acquisition strategy
- **Source:** Playbook Phase 2 — broker role, fees, pros/cons, direct outreach
- **Angle:** Brian's legal/structural perspective on broker agreements and fiduciary duties
- **Links to:** how-to-find-businesses-for-sale, due-diligence-checklist-buying-a-business, letter-of-intent-loi-guide-business-buyers

#### 5. `due-diligence-checklist-buying-a-business`
- **Author:** Brian ("The Magistrate")
- **Title:** "The Business Buyer's Due Diligence Checklist: What to Verify Before You Sign"
- **Keywords:** due diligence checklist business acquisition, buying a business checklist
- **Source:** Playbook Phase 3 — legal, financial, operational, customer, employee DD
- **Angle:** Magistrate's structured compliance view, "here's what I've seen blow up deals"
- **Links to:** financial-due-diligence-for-business-buyers, closing-on-a-business-what-to-expect, sba-application-checklist

#### 6. `financial-due-diligence-for-business-buyers`
- **Author:** Steph ("The Oracle")
- **Title:** "Financial Due Diligence: Reading the Numbers Behind the Business"
- **Keywords:** financial due diligence, business acquisition financials, analyze business financials
- **Source:** Playbook Phase 3 — P&L analysis, cash flow, add-backs, red flags
- **Angle:** Steph's number-crunching expertise, "the spreadsheet doesn't lie" approach
- **Links to:** due-diligence-checklist-buying-a-business, how-to-value-a-small-business-for-acquisition, what-is-my-business-worth

#### 7. `how-to-value-a-small-business-for-acquisition`
- **Author:** Steph ("The Oracle")
- **Title:** "How to Value a Small Business: What Buyers and Lenders Actually Look At"
- **Keywords:** business valuation, how to value a business, small business valuation methods
- **Source:** Playbook Phase 4 — SDE, EBITDA, multiples, asset-based, market comps
- **Angle:** Steph bridges buyer perspective with lender perspective
- **Links to:** financial-due-diligence-for-business-buyers, financing-your-business-acquisition-with-sba, what-is-my-business-worth

#### 8. `financing-your-business-acquisition-with-sba`
- **Author:** Shane ("The Alchemist")
- **Title:** "Financing Your Business Acquisition with an SBA 7(a) Loan"
- **Keywords:** SBA loan business acquisition, finance buying a business, SBA 7a acquisition loan
- **Source:** Playbook Phase 5 — SBA 7(a) structure, eligibility, timeline, what lenders want
- **Angle:** THE MONEY ARTICLE — Shane's expertise, "this is what I do every day" authority
- **CTA:** Extra-strong Apply Now push, this is the conversion article
- **Links to:** equity-injection-down-payment-strategies, complete-guide-sba-7a-loans, sba-down-payment, buy-business-sba-loan

#### 9. `equity-injection-down-payment-strategies`
- **Author:** Steph ("The Oracle")
- **Title:** "Equity Injection & Down Payment Strategies for Business Buyers"
- **Keywords:** equity injection SBA, business acquisition down payment, SBA down payment sources
- **Source:** Playbook Phase 5 — acceptable sources, seller notes, ROBS, 401k rollover
- **Angle:** Steph's detailed analysis of creative but compliant funding strategies
- **Links to:** financing-your-business-acquisition-with-sba, sba-down-payment, sba-fee-structures-explained

#### 10. `letter-of-intent-loi-guide-business-buyers`
- **Author:** Brian ("The Magistrate")
- **Title:** "Writing a Letter of Intent (LOI): The Business Buyer's Guide"
- **Keywords:** letter of intent business acquisition, LOI template, business purchase LOI
- **Source:** Playbook Phase 6 — LOI components, binding vs non-binding, negotiation leverage
- **Angle:** Brian's legal precision, "every word in this document matters"
- **Links to:** business-brokers-vs-direct-search, closing-on-a-business-what-to-expect, sba-deal-structuring-guide

#### 11. `closing-on-a-business-what-to-expect`
- **Author:** Brian ("The Magistrate")
- **Title:** "Closing on a Business Purchase: What to Expect and How to Prepare"
- **Keywords:** closing on a business, business acquisition closing process, buy a business closing
- **Source:** Playbook Phase 7 — closing timeline, escrow, final walk-through, documents
- **Angle:** Brian's step-by-step legal walkthrough of closing day
- **Links to:** letter-of-intent-loi-guide-business-buyers, first-30-days-after-buying-a-business, due-diligence-checklist-buying-a-business

#### 12. `first-30-days-after-buying-a-business`
- **Author:** Shane ("The Alchemist")
- **Title:** "Your First 30 Days After Buying a Business: The Playbook"
- **Keywords:** first 30 days owning a business, after buying a business, post acquisition plan
- **Source:** 30-Day Post-Close Playbook — Week 1-4 priorities, stabilization, quick wins
- **Angle:** Shane's operational energy, "day one you walk in and here's what you do"
- **Links to:** managing-employees-after-acquisition, financial-systems-setup-post-acquisition, closing-on-a-business-what-to-expect

#### 13. `managing-employees-after-acquisition`
- **Author:** Steph ("The Oracle")
- **Title:** "Managing Employees After a Business Acquisition: Day 1 Through Day 30"
- **Keywords:** managing employees after acquisition, business acquisition employee retention
- **Source:** 30-Day Post-Close Playbook — team communication, retention, culture
- **Angle:** Steph's people-first analytical approach, data on retention rates
- **Links to:** first-30-days-after-buying-a-business, financial-systems-setup-post-acquisition, growing-your-newly-acquired-business

#### 14. `financial-systems-setup-post-acquisition`
- **Author:** Brian ("The Magistrate")
- **Title:** "Setting Up Financial Systems After Buying a Business"
- **Keywords:** post acquisition financial setup, business acquisition accounting, new business finances
- **Source:** 30-Day Post-Close Playbook — banking, accounting, payroll, compliance
- **Angle:** Brian's compliance-first approach, "get the books right from day one"
- **Links to:** first-30-days-after-buying-a-business, managing-employees-after-acquisition, how-long-sba-loan-takes

#### 15. `growing-your-newly-acquired-business`
- **Author:** Shane ("The Alchemist")
- **Title:** "Growing Your Newly Acquired Business: From Stabilization to Scale"
- **Keywords:** grow business after acquisition, scale acquired business, post acquisition growth
- **Source:** 30-Day Post-Close Playbook — growth foundations, 90-day plan, revenue optimization
- **Angle:** Shane's entrepreneurial energy, "now the real fun begins"
- **Links to:** when-to-refinance-or-expand-after-acquisition, first-30-days-after-buying-a-business, 100-financing-for-business-expansion

#### 16. `when-to-refinance-or-expand-after-acquisition`
- **Author:** Steph ("The Oracle")
- **Title:** "When to Refinance or Expand After Buying a Business"
- **Keywords:** refinance SBA loan, expand after acquisition, second SBA loan
- **Source:** Both playbooks — growth capital, refinancing triggers, expansion planning
- **Angle:** Steph's data-driven approach to timing the next financial move
- **CTA:** Strong Apply Now for refinance/expansion financing
- **Links to:** growing-your-newly-acquired-business, complete-guide-sba-7a-loans, sba-7a-vs-504

---

## CTA Strategy (Site-Wide)

### Borrower-Facing Articles
```markdown
---

**Ready to buy a business?** Our SBA lending team has funded over $450 million in small business loans. [Apply for SBA Financing →](/loans/loan-application) or [Talk to Our Team →](/contact)

*This content is for educational purposes only and does not constitute legal, financial, or investment advice. Consult a qualified attorney and financial advisor before making acquisition decisions.*
```

### Broker-Facing Articles
```markdown
---

**Level up your origination game.** Join hundreds of originators training at [learn.lordsoflending.com](https://learn.lordsoflending.com). [Start Training →](https://learn.lordsoflending.com) or [Contact Us →](/contact)
```

---

## New Borrower Tools (Phase 2)

### 1. Acquisition Cost Calculator (`/tools/acquisition-cost-calculator`)
- Input: Purchase price, down payment %, SBA guarantee fee tier, closing costs estimate
- Output: Total cash needed, monthly payment estimate, SBA fee breakdown
- CTA: "Ready to move forward? Apply now."

### 2. Due Diligence Checklist Tool (`/tools/due-diligence-checklist`)
- Interactive checklist organized by category (Legal, Financial, Operational, Customer, Employee)
- Progress tracking with visual completion indicator
- Export to PDF capability
- CTA: "Checklist complete? Let's get your financing."

### 3. Business Readiness Quiz (`/tools/am-i-ready`)
- 10-question assessment (credit score range, liquid capital, management experience, etc.)
- Score-based result: "Strong Candidate" / "Getting There" / "Build Your Foundation"
- CTA: Strong candidates → Apply Now, Others → Read our buying guide

---

## Implementation Order

### Batch 1 (This Session)
1. Add `buying-a-business` cluster to constants.ts ContentMeta
2. Create `/buying-a-business/` hub page route
3. Add "Buy a Business" to NAV_LINKS
4. Write first 8 articles (Phases 1-5) — these cover the pre-purchase journey
5. Register all 8 in constants.ts as SUPPORTING_ARTICLES
6. Add to sitemap
7. Update link-health.ts known routes

### Batch 2 (Next Session)
8. Write remaining 8 articles (Phases 6-8) — negotiation through growth
9. Build Acquisition Cost Calculator tool
10. Build Due Diligence Checklist tool
11. Retrofit CTA strategy across ALL existing borrower articles
12. Update homepage OWNER_ARTICLES to feature buying-a-business content
13. Cross-link with existing content (buy-business-sba-loan, what-is-my-business-worth, etc.)

---

## Voice Quick Reference

### Shane ("The Alchemist") — 5 articles
- Catchphrases: "Here's what I've seen...", "Let me be real with you", "This is where deals live or die"
- Metaphor style: Street-level, entrepreneurial, alchemy/transformation
- Tone: Direct, energetic, conversational, first-person stories
- Avoid: Academic language, passive voice, hedge words

### Steph ("The Oracle") — 6 articles
- Catchphrases: "The numbers tell the story", "Here's what the data shows", "Let me walk you through this"
- Metaphor style: Analytical, strategic, chess/navigation
- Tone: Authoritative but warm, data-driven, structured
- Avoid: Overly casual, vague claims, unsubstantiated numbers

### Brian ("The Magistrate") — 5 articles
- Catchphrases: "Let me be precise about this", "The compliance angle here is...", "What the regulations actually say"
- Metaphor style: Legal/structural, building/architecture
- Tone: Measured, thorough, compliance-aware, protective
- Avoid: Casual slang, shortcuts, oversimplification
