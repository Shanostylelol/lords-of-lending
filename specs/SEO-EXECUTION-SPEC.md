# SEO Content Execution Spec — Lords of Lending

**Created:** 2026-03-10
**Status:** READY TO EXECUTE
**Parent:** `specs/SEO-DOMINATION-PLAN.md` (strategy) → This file (execution)
**Total Output:** ~119 new pages, ~178,000 words, ~73 images, 10+ new components

---

## Execution Order

This spec breaks the SEO Domination Plan into concrete, sequential build steps. Each step is self-contained and produces deployable output.

### Dependencies Graph

```
Step 0: Infrastructure (components, data files, routes)
  ├── Step 1: Embed transcripts into existing podcast pages
  ├── Step 2: Pillar articles (5)
  ├── Step 3: Podcast companion posts (expand existing 20 show notes → full SEO posts)
  ├── Step 4: State pages (50) — programmatic template
  ├── Step 5: Industry pages (15)
  ├── Step 6: Supporting articles (20) — 8 originator, 8 borrower, 4 thought leadership
  ├── Step 7: Broker training funnel articles (drawn from lendari-training-demo modules)
  └── Step 8: Internal linking audit + cross-link injection
```

---

## Step 0: Infrastructure Build

### 0A: New Content Types in Constants

Update `src/lib/constants.ts` to add:

```typescript
// Add to BlogPost interface
export interface ContentMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: "blog" | "podcast" | "pillar" | "industry" | "state" | "roundup" | "training";
  author?: "shane" | "steph" | "brian";
  cluster?: "sba-basics" | "acquisition" | "originator-training" | "deal-structuring" | "industry-trends";
  keywords?: string[];
  readingTime?: number;
  relatedSlugs?: string[];
}
```

### 0B: New SEO Components

Build these reusable components (all dark-theme, gold accents):

| Component | File | Purpose |
|---|---|---|
| Table of Contents | `src/components/ui/table-of-contents.tsx` | Auto-generated from H2/H3 headings, sticky sidebar desktop, collapsible mobile |
| FAQ Accordion | `src/components/ui/faq-accordion.tsx` | Expand/collapse + auto JSON-LD FAQ schema injection |
| Author Bio | `src/components/ui/author-bio.tsx` | Photo, name, title, bio, LinkedIn, booking link, Person schema |
| Breadcrumb | `src/components/ui/breadcrumb.tsx` | Visual trail + BreadcrumbList JSON-LD |
| Related Articles | `src/components/sections/related-articles.tsx` | 2-3 related posts at bottom, matched by cluster/keywords |
| Related Podcast | `src/components/sections/related-podcast.tsx` | Embedded Buzzsprout player + episode info |
| Social Share | `src/components/ui/social-share.tsx` | LinkedIn, X, Facebook, Copy Link — sidebar on desktop |
| Reading Time | `src/components/ui/reading-time.tsx` | "X min read" badge from word count |
| Email Capture | `src/components/ui/email-capture.tsx` | Inline + bottom-of-article, collect email for SBA Lending This Week |
| Article Layout | `src/components/layouts/article-layout.tsx` | Shared wrapper: breadcrumb + TOC + content + author + related + CTA |

### 0C: Enhanced Structured Data

Expand `src/lib/structured-data.ts`:

```typescript
// New functions:
export function faqJsonLd(questions: {q: string; a: string}[])
export function howToJsonLd(title: string, steps: {name: string; text: string}[])
export function courseJsonLd(courseName: string, provider: string, url: string)
export function localBusinessJsonLd(state: string, city?: string)
export function softwareAppJsonLd(name: string, description: string)
// Update existing:
export function articleJsonLd(post, options?: { dateModified?: string })
```

### 0D: Article Template (Markdown → Page Pipeline)

The existing `[slug]/page.tsx` already reads markdown from `content/blog/` and `content/podcast/`. Extend it to:

1. Also read from `content/pillar/`, `content/industry/`, `content/supporting/`
2. Auto-inject FAQ JSON-LD when article has a `## FAQ` or `## Frequently Asked Questions` section
3. Auto-inject breadcrumbs based on content type
4. Show author bio at bottom (pull author from constants)
5. Show related articles based on `relatedSlugs` or cluster match
6. Show reading time

### 0E: State Pages Route

Create `src/app/sba-loans-in-[state]/page.tsx`:
- Dynamic route generating 50 pages
- Data file: `src/lib/state-data.ts` (50 states with SBA stats, top industries, local context)
- Template: Hero + Overview + Stats table + Eligibility + Top Industries + How to Apply + FAQ + CTA
- Metadata: dynamic title/description/OG per state
- Schema: Article + FAQ + BreadcrumbList

### 0F: Industry Pages Route

Create `src/app/sba-loans-for-[industry]/page.tsx`:
- Dynamic route generating 15 pages
- Data file: `src/lib/industry-data.ts` (15 industries with deal structures, common challenges, typical metrics)
- Template: Hero + Why This Industry + Typical Deal Structure + What Lenders Look For + Challenges + Case Study + FAQ + CTA
- Each gets an AI-generated hero image

### 0G: Image Generation Pipeline

For every article that needs a hero image:
- Use DALL-E MCP (`mcp__dalle__generate_image`) or Gemini (`mcp__gemini-image__generate_image_from_text`)
- Brand style: Deep navy (#0B1D33), Gold (#AA712C), professional editorial aesthetic
- Size: 1200x630px (OG standard), WebP, <150KB
- Save to `/public/images/{category}/{slug}.webp`
- Alt text: descriptive, keyword-rich

---

## Step 1: Transcript Embedding (Quick Win)

**Files modified:** `src/app/[slug]/page.tsx` (already has TranscriptToggle component)

Transcripts already exist in `content/transcripts/` (21 files) and the TranscriptToggle component exists. Verify:
- [x] TranscriptToggle component: `src/components/ui/transcript-toggle.tsx`
- [x] Transcript loading: `getTranscript()` in `[slug]/page.tsx`
- [x] 21 transcript files in `content/transcripts/`

**Action:** Verify transcript slugs match episode slugs in constants. Fix any mismatches. The transcript content is already loaded and displayed — this step is about verification and ensuring all 20 episodes have transcripts embedded.

**Slug mapping to verify:**
```
Episode slug → Transcript filename
why-equity-not-cash-flow-makes-or-breaks-sba-deals-lol-20 → why-equity-not-cash-flow-lol-20.txt
the-year-of-discipline-lol-19 → the-year-of-discipline-lol-19.txt
2026-look-ahead-and-prediction-lol-18 → 2026-look-ahead-and-prediction-lol-18.txt
...etc for all 20
```

**SEO value:** Massive. Each transcript is 3,000-8,000 words of unique, keyword-rich content that Google indexes.

---

## Step 2: Pillar Articles (5 articles, ~18,000 words)

These are the highest-value SEO assets. Each anchors a topic cluster.

### Pillar 1: "The Complete Guide to SBA 7(a) Loans"
- **File:** `content/pillar/complete-guide-sba-7a-loans.md`
- **URL:** `/complete-guide-sba-7a-loans`
- **Author:** Steph (The Oracle) — data-first, authoritative
- **Words:** 4,000-5,000
- **Keywords:** "SBA 7a loan", "SBA 7a loan requirements", "what is an SBA 7a loan"
- **Sections:** Definition → Eligibility → Amounts/Terms/Rates → Process → Common Mistakes → 7a vs 504 vs Micro comparison → FAQ (8-10 questions)
- **Voice:** Lead with numbers (Steph), translate jargon (Shane quotes from transcripts)
- **Internal links OUT:** 5 Myths, Bad Credit, Startups Denied, Can't Pay Loan, Business Acquisition
- **Internal links IN:** Every other article should link to this as the cluster pillar
- **Schema:** Article + FAQ + HowTo + BreadcrumbList
- **Image:** Hero (SBA concept), comparison table graphic, process flowchart
- **CTA:** "Ready to learn how to originate SBA deals? → learn.lordsoflending.com/pricing"
- **Transcript quotes to use:**
  - Steph (ep 18/19): equity injection data, 2026 lending stats
  - Shane (ep 11): common borrower questions answered
  - Brian (ep 15): deal structure specifics

### Pillar 2: "How to Become an SBA Loan Broker in 2026"
- **File:** `content/pillar/how-to-become-sba-loan-broker.md`
- **URL:** `/how-to-become-sba-loan-broker`
- **Author:** Shane (The Alchemist) — energetic, translates jargon
- **Words:** 3,500-4,000
- **Keywords:** "how to become SBA loan broker", "SBA loan broker training"
- **Sections:** What a broker does → Broker vs Originator vs BDO → Licensing → Finding lending partners → Building pipeline → Compensation → Training path → Day in the life → FAQ
- **Voice:** Shane's urgent, no-BS style. "Get on the boat. Figure it out as you go."
- **Links OUT:** Attention Trumps Time, Originator Training pillar, episodes #7 #10 #12
- **Schema:** Article + FAQ + BreadcrumbList
- **CTA:** "Start your SBA originator training → learn.lordsoflending.com/pricing"
- **Training module tie-in:** References Module 1 (SBA Foundation) and Module 7 (Building Pipeline) from lendari-training-demo

### Pillar 3: "SBA Loan Originator Training: The Complete Resource"
- **File:** `content/pillar/sba-loan-originator-training.md`
- **URL:** `/sba-loan-originator-training`
- **Author:** Brian (The Magistrate) — methodical, precise
- **Words:** 3,500-4,000
- **Keywords:** "SBA loan originator training", "SBA lending training"
- **Sections:** Why training matters → What good training covers → Self-study vs mentorship vs structured → Lords methodology → Essential skills → Evaluating programs → Free resources → FAQ
- **Voice:** Brian's analytical style, builds arguments carefully
- **Links OUT:** How to Become Broker, Deal Structuring pillar, episodes #3 #9 #11
- **Schema:** Article + FAQ + Course
- **CTA:** "Enroll in the SBA Launch Program → learn.lordsoflending.com/pricing"
- **Training module tie-in:** References ALL 6 phases of the Broker's Codex curriculum. This is the ultimate funnel article.

### Pillar 4: "SBA Deal Structuring: From LOI to Closing"
- **File:** `content/pillar/sba-deal-structuring-guide.md`
- **URL:** `/sba-deal-structuring-guide`
- **Author:** Brian (The Magistrate) — legal precision
- **Words:** 3,500-4,000
- **Keywords:** "SBA deal structuring", "SBA loan structuring guide"
- **Sections:** Anatomy of a deal → LOI → Seller notes & standby → Equity injection → DSCR calculations → Collateral & guarantees → Deal-killers → Case studies → FAQ
- **Voice:** Brian's methodical structure with Shane's deal stories as examples
- **Links OUT:** Seller Notes episode, Business Acquisition post, 100% Financing post
- **Schema:** Article + FAQ + BreadcrumbList
- **CTA:** "Master deal structuring → learn.lordsoflending.com/pricing"
- **Training module tie-in:** Module 4 (Deal Structuring) and Module 5 (Documentation Mastery)

### Pillar 5: "SBA Lending in 2026: What's Changed and What's Coming"
- **File:** `content/pillar/sba-lending-2026-outlook.md`
- **URL:** `/sba-lending-2026-outlook`
- **Author:** Steph (The Oracle) — thesis-driven, data-rich
- **Words:** 3,000-3,500
- **Keywords:** "SBA lending 2026", "SBA loan changes 2026"
- **Sections:** Key policy changes → Rate environment → Tariff effects → Fintech rise → Team predictions → What originators should prepare → FAQ
- **Voice:** Steph's "2026 is the year of discipline" thesis throughout
- **Links OUT:** Tariffs episode, Automated Lending episode, 2026 Look Ahead episode
- **Schema:** Article + FAQ + BreadcrumbList
- **CTA:** "Stay ahead of the curve → learn.lordsoflending.com/pricing"
- **NOTE:** Refresh quarterly with new data

---

## Step 3: Podcast Companion Post Expansion (20 posts, ~40,000 words)

The `content/podcast/` directory already has show notes for all 20 episodes. These need to be **expanded** from ~200-500 word summaries into full 1,500-2,500 word SEO companion posts.

### Expansion Template

For each episode, the existing show notes markdown gets replaced with:

```markdown
## [Episode Title] — Key Takeaways & Deep Dive

[2-3 sentence intro with primary keyword naturally included]

**In this episode:** [1 paragraph summary]

---

## Key Takeaways

### 1. [First major point]
[3-4 paragraphs expanding with data, examples, expert context]

> "[Direct quote from transcript]" — [Name], Lords of Lending Episode [#]

### 2. [Second major point]
[3-4 paragraphs]

### 3. [Third major point]
[3-4 paragraphs]

---

## What This Means for [Originators/Business Owners/Brokers]
[2-3 paragraphs connecting to actionable advice]

---

## Related Resources
- [Related blog article 1](/slug)
- [Related blog article 2](/slug)
- [Related episode 1](/slug)

---

## Frequently Asked Questions

### [Q1 from the episode topic]
[Answer]

### [Q2]
[Answer]

---

## Ready to Take the Next Step?
[CTA → learn.lordsoflending.com/pricing]
```

### Episode-Specific Companion Details

| Episode | Companion Title | Target Keywords | Author Voice | Words |
|---|---|---|---|---|
| #20 | Why Equity (Not Cash Flow) Makes or Breaks SBA Deals | SBA equity injection, equity vs cash flow | Steph | 2,500 |
| #19 | The Year of Discipline: What SBA Lenders Expect in 2026 | SBA lending discipline, 2026 SBA standards | Steph | 2,000 |
| #18 | SBA Lending Predictions for 2026 | SBA lending 2026, SBA predictions | Shane | 2,000 |
| #17 | Lessons from a Year in SBA Lending | SBA lending lessons, year in review | All 3 | 1,800 |
| #16 | Reading the Room: Signals a Business Owner Is Ready to Sell | business owner selling signals | Steph | 2,000 |
| #15 | Seller Notes in SBA Deals: Complete Breakdown | SBA seller notes, seller financing SBA | Brian | 2,500 |
| #14 | SBA Loans for Restaurants: What Lenders Really Look For | SBA restaurant loan, restaurant acquisition | Shane | 2,200 |
| #13 | Do Interest Rates Actually Matter in SBA Lending? | SBA interest rates, SBA loan rates | Shane | 2,000 |
| #12 | Building a Lending Reputation That Generates Referrals | SBA broker reputation, lending referrals | Brian | 1,800 |
| #11 | SBA Lending FAQ: Experts Answer Your Top Questions | SBA loan FAQ, SBA lending questions | All 3 | 2,500 |
| #10 | The Real Story Behind Lords of Lending | Lords of Lending story, SBA lending career | Shane | 1,800 |
| #9 | The SBA Acquisition Playbook | SBA acquisition, business acquisition strategy | Shane | 2,500 |
| #8 | Field Notes: What We're Seeing in SBA Lending Right Now | SBA lending trends, field insights | All 3 | 1,500 |
| #7 | Meet the Team Behind Lords of Lending | Lords of Lending team, SBA lending experts | All 3 | 1,500 |
| #6 | SBA Policy Changes That Shook the Industry | SBA policy changes, SBA rule changes | Shane | 2,200 |
| #5 | Wealth-Building Through Business Acquisition: The SBA Path | business acquisition wealth, buy a business | Shane | 2,000 |
| #4 | How to Buy and Scale a Business with SBA Financing | buy business SBA, scale business loan | Steph | 2,200 |
| #3 | Why Urgency Is the #1 Skill in SBA Lending Pipelines | SBA pipeline management, lending urgency | Shane | 1,800 |
| #2 | How Tariffs Impact Small Business Lending | tariffs small business, tariff impact loans | Brian | 2,000 |
| #1 | The Rise of Automated SBA Lending: Threat or Opportunity? | automated SBA lending, fintech SBA | Brian | 2,000 |

### Source Material per Episode
Each companion post is written using:
1. The full transcript from `content/transcripts/{slug}.txt`
2. The existing show notes from `content/podcast/{slug}.md`
3. The Voice Guide profiles (`docs/VOICE-GUIDE.md`)
4. Related blog content for cross-linking

---

## Step 4: State Pages (50 pages, ~60,000 words)

### Technical Implementation

**Route:** `src/app/sba-loans-in-[state]/page.tsx`
**Data:** `src/lib/state-data.ts`

```typescript
// state-data.ts structure
export interface StateData {
  slug: string;           // "california", "texas", etc.
  name: string;           // "California"
  abbreviation: string;   // "CA"
  sbaLoansApproved2025: number;
  avgLoanSize: string;
  topIndustries: string[];
  sbaLenderCount: number;
  uniqueContent: string;  // 2-3 paragraphs of state-specific context
  faq: { q: string; a: string }[];
  relatedIndustries: string[];  // slugs linking to industry pages
  keyCity?: string;       // For meta description specificity
}
```

**Template sections:**
1. `<h1>SBA Loans in [State]: Your Complete Guide</h1>`
2. Overview (2-3 paragraphs unique per state — economic context, business landscape)
3. Key SBA Statistics for [State] (table format)
4. SBA 7(a) Eligibility (standard + state-specific notes)
5. Top Industries Using SBA Loans in [State] (3-5 with links to industry pages)
6. How to Apply (step-by-step, standard)
7. FAQ (5-6 state-specific questions with FAQ schema)
8. CTA → learn.lordsoflending.com/pricing

**Anti-thin-content measures:**
- Each state gets 200-400 words of unique intro content (NOT template swap)
- State-specific FAQ questions
- Different industry mixes per state
- Different statistics
- Unique economic context (tech hub vs. agriculture vs. manufacturing)
- Minimum 1,200 words per page after all sections

**SEO per page:**
- Title: `SBA Loans in [State] | Complete Guide [Year] — Lords of Lending`
- Description: `Everything you need to know about SBA 7(a) loans in [State]. [key stat]. Learn eligibility, rates, and how to apply.`
- Canonical: `https://lordsoflending.com/sba-loans-in-[state]`
- Schema: Article + FAQ + BreadcrumbList
- Internal links: → SBA 7(a) pillar, 2 relevant industry pages, /contact

---

## Step 5: Industry Pages (15 pages, ~27,000 words)

### Industries

| # | Slug | Title | Hero Image Prompt |
|---|---|---|---|
| 1 | restaurants | SBA Loans for Restaurants | Professional restaurant interior, warm lighting, navy-gold tones |
| 2 | hotels | SBA Loans for Hotels & Hospitality | Luxury hotel lobby, professional, navy-gold palette |
| 3 | franchises | SBA Loans for Franchises | Franchise storefront network, professional editorial |
| 4 | medical-practices | SBA Loans for Medical & Dental Practices | Modern medical office, clean, professional |
| 5 | auto-repair | SBA Loans for Auto Repair Shops | Clean auto repair facility, professional |
| 6 | daycares | SBA Loans for Daycares & Childcare | Bright daycare facility, professional |
| 7 | gas-stations | SBA Loans for Gas Stations & C-Stores | Gas station/convenience store, professional |
| 8 | laundromats | SBA Loans for Laundromats | Modern laundromat facility, professional |
| 9 | ecommerce | SBA Loans for E-Commerce Businesses | E-commerce warehouse/fulfillment, professional |
| 10 | manufacturing | SBA Loans for Manufacturing | Manufacturing facility, professional |
| 11 | trucking | SBA Loans for Trucking & Transportation | Trucking fleet, professional |
| 12 | construction | SBA Loans for Construction Companies | Construction site, professional |
| 13 | veterinary | SBA Loans for Veterinary Practices | Veterinary clinic, professional |
| 14 | real-estate | SBA Loans for Commercial Real Estate | Commercial building, professional |
| 15 | startups | SBA Loans for Startups | Startup office, professional |

**Route:** `src/app/sba-loans-for-[industry]/page.tsx`
**Data:** `src/lib/industry-data.ts`

**Template sections:**
1. `<h1>SBA Loans for [Industry]: The Complete Guide</h1>`
2. Why [Industry] Businesses Use SBA Loans (industry context, margins, trends)
3. Typical [Industry] SBA Deal Structure (loan size, terms, equity, DSCR, collateral)
4. What Lenders Look For in [Industry] Deals (3-5 underwriting factors)
5. Common Challenges in [Industry] SBA Lending (3-4 pitfalls + solutions)
6. Case Study (anonymized real deal from podcast/experience)
7. FAQ (5-6 industry-specific questions with schema)
8. CTA → learn.lordsoflending.com/pricing

**Each page:** 1,500-2,000 words, unique content (not template swaps)

---

## Step 6: Supporting Articles (20 articles, ~30,000 words)

### Originator-Focused (8 articles → funnel to learn.lordsoflending.com)

| # | Slug | Title | Author | Keywords | Words |
|---|---|---|---|---|---|
| 1 | how-to-source-sba-loans | How to Source SBA Loans: 12 Strategies That Work | Shane | SBA deal sourcing | 2,000 |
| 2 | sba-loan-packaging-checklist | SBA Loan Packaging: The Originator's Checklist | Brian | SBA loan packaging | 1,800 |
| 3 | sba-referral-fee-structures | SBA Referral Fee Structures: How Brokers Get Paid | Shane | SBA referral fees | 1,500 |
| 4 | building-sba-lending-pipeline | Building an SBA Lending Pipeline from Zero | Shane | SBA lending pipeline | 1,800 |
| 5 | matching-borrowers-sba-lenders | How to Match Borrowers with the Right SBA Lender | Steph | SBA lender matching | 1,500 |
| 6 | sba-originator-tech-stack | The SBA Originator's Tech Stack | Brian | SBA lending tools | 1,500 |
| 7 | sba-convention-networking | SBA Convention Season: How to Network and Win Deals | Shane | NAGGL convention | 1,200 |
| 8 | bank-bdo-to-independent | From Bank BDO to Independent Originator | Shane | independent SBA originator | 1,500 |

### Borrower-Focused (8 articles → funnel to /loans or /contact)

| # | Slug | Title | Author | Keywords | Words |
|---|---|---|---|---|---|
| 9 | sba-7a-vs-504 | SBA 7(a) vs. SBA 504: Which Loan Is Right for You? | Steph | SBA 7a vs 504 | 2,000 |
| 10 | sba-application-checklist | SBA Loan Application Checklist: Every Document You Need | Brian | SBA application checklist | 1,500 |
| 11 | how-long-sba-loan-takes | How Long Does an SBA Loan Take? Real Timelines | Shane | SBA loan timeline | 1,200 |
| 12 | sba-down-payment | SBA Loan Down Payment: How Much Do You Really Need? | Steph | SBA loan down payment | 1,500 |
| 13 | buy-business-sba-loan | Can You Use an SBA Loan to Buy a Business? | Shane | buy business SBA loan | 1,500 |
| 14 | sba-loan-denied | SBA Loan Denial: Why It Happens and What to Do Next | Shane | SBA loan denied | 1,500 |
| 15 | sba-loan-fees | Understanding SBA Loan Fees: What You'll Actually Pay | Brian | SBA loan fees | 1,200 |
| 16 | sba-loans-veterans | SBA Loans for Veterans: Benefits and Programs | Steph | SBA veteran loan | 1,200 |

### Thought Leadership (4 articles)

| # | Slug | Title | Author | Keywords | Words |
|---|---|---|---|---|---|
| 17 | why-sba-deals-fall-apart | Why Most SBA Deals Fall Apart (And How to Save Them) | Shane | SBA deal problems | 1,800 |
| 18 | future-sba-lending | The Future of SBA Lending: AI, Fintech, and the Human Touch | Brian | SBA lending future | 1,500 |
| 19 | coleman-report-insights | What the Coleman Report Won't Tell You About SBA Lending | Steph | Coleman Report SBA | 1,500 |
| 20 | sba-lending-myths-originators | SBA Lending Myths That Cost Originators Deals | Shane | SBA originator mistakes | 1,500 |

---

## Step 7: Broker Training Funnel Articles (NEW — from lendari-training-demo)

These articles bridge free content on lordsoflending.com → paid training on learn.lordsoflending.com. Each maps to a training module from the Broker's Codex.

### Training Module → Article Mapping

| Module | Training Content | Free Article (lordsoflending.com) | CTA Target |
|---|---|---|---|
| M1: SBA Foundation | SBA ecosystem, loan types, agency structure | "SBA Lending 101: The Foundation Every Originator Needs" | Module 1 preview |
| M2: Eligibility | Size standards, eligible businesses, ineligible list | "SBA Eligibility Deep Dive: Who Really Qualifies?" | Module 2 preview |
| M3: Fee Structures | Guarantee fees, packaging fees, referral fees | "SBA Fee Structures Explained: The Complete Breakdown for Originators" | Module 3 preview |
| M4: Credit Analysis | 5 C's, financial statement analysis, DSCR | "How to Read a Borrower's Financials Like a Pro" | Module 4 preview |
| M5: Deal Structuring | LOI, equity injection, seller notes, collateral | "The Art of SBA Deal Structuring: What Separates Good from Great" | Module 5 preview |
| M6: Documentation | SBA forms, authorization docs, closing docs | "The Complete SBA Documentation Checklist" | Module 6 preview |
| M7: Pipeline Building | Prospecting, referral partners, CRM setup | "How to Build a $10M SBA Pipeline in 12 Months" | Module 7 preview |
| M8: Business Building | Scaling, hiring, partnerships, exit planning | "Building an SBA Brokerage: From Solo to Scale" | Module 8 preview |

**Total:** 8 articles, ~12,000 words
**Author voices:** Mix of all 3 — Shane for pipeline/business building, Brian for technical/legal, Steph for credit/analysis
**Each article:** Gives 70% of the value for free, then positions the training module as the "complete system" with the remaining 30%
**CTA pattern:** "This article covers the fundamentals. In Module [X] of The Broker's Codex, we go deeper with [specific advanced topics]. → learn.lordsoflending.com/pricing"

---

## Step 8: Internal Linking Audit + Cross-Link Injection

After all content is written, systematically cross-link:

### Rules (from docs/INTERNAL-LINKING-STRATEGY.md)
1. Every article links to its topic cluster pillar (mandatory)
2. Every article links to 2-3 related articles in same cluster
3. Every article links to 1-2 relevant podcast episodes
4. Every podcast companion links to 2-3 related blog articles
5. Every state page links to SBA 7(a) pillar + 2 relevant industry pages
6. Every industry page links to SBA 7(a) pillar + relevant state pages + articles
7. Pillar articles link to ALL supporting articles in their cluster

### Anchor Text Rules
- Descriptive and keyword-relevant (never "click here")
- Internal links open in same tab (fix mdComponents.a to check if href starts with `/`)
- External links open in new tab

### Audit Checklist
- [ ] Every page has minimum 3 internal links going OUT
- [ ] Every page has minimum 2 internal links coming IN
- [ ] No orphan pages (zero incoming links)
- [ ] Pillar articles have highest incoming link count
- [ ] All anchor text is descriptive
- [ ] No broken internal links
- [ ] learn.lordsoflending.com CTA appears on every content page

---

## Image Generation Strategy

### Batch 1: Pillar Article Heroes (5 images)
- `complete-guide-sba-7a-loans.webp` — Professional business document signing, navy-gold tones
- `how-to-become-sba-loan-broker.webp` — Professional broker at desk with documents
- `sba-loan-originator-training.webp` — Training/education concept, classroom or mentorship
- `sba-deal-structuring-guide.webp` — Deal documents and handshake, professional
- `sba-lending-2026-outlook.webp` — Forward-looking, trends/charts concept

### Batch 2: Industry Page Heroes (15 images)
One per industry, each showing the specific business type in a professional, editorial style.

### Batch 3: Supporting Article Heroes (20 images)
One per supporting article, matching the article topic.

### Batch 4: Training Funnel Heroes (8 images)
One per broker training article, education/professional development themed.

**Total images to generate:** ~48 new hero images

---

## Content Quality Protocol (Apply to EVERY article)

From `docs/VOICE-GUIDE.md`:

### The Shane Test
1. **Voice check:** Use the assigned author's speaking patterns from the Voice Guide
2. **Experience check (E-E-A-T):** Min 2 specific deal examples, 1 podcast quote, 1 SBA SOP reference
3. **Originality check:** Say something competitors DON'T say. Include a contrarian take.
4. **AI detection sweep:** No "In today's landscape...", "It's important to note...", "In conclusion..."
5. **SEO check:** Primary keyword in title, H1, first paragraph, meta description. 3+ internal links.

### Author Voice Quick Reference

| Writing as... | Open with | Intensifiers | Close with |
|---|---|---|---|
| Shane | "So..." / "I think..." | "freaking", "damn" | "When all is said and done..." |
| Steph | "Here's the deal" / "Guys" | "Man", "Guys" | Thesis restatement + CTA |
| Brian | "I think what..." / "You know" | "Definitely", "Extremely" | Measured conclusion |

---

## Sitemap & Meta Updates

After each phase, update:
- `src/app/sitemap.ts` — add new URLs
- `src/app/robots.ts` — ensure crawlable
- Submit updated sitemap to Google Search Console

### URL Structure Summary

```
lordsoflending.com/
├── /{blog-slug}                        # 8 existing blog posts
├── /{podcast-slug}                     # 20 existing podcast episodes
├── /complete-guide-sba-7a-loans        # Pillar 1
├── /how-to-become-sba-loan-broker      # Pillar 2
├── /sba-loan-originator-training       # Pillar 3
├── /sba-deal-structuring-guide         # Pillar 4
├── /sba-lending-2026-outlook           # Pillar 5
├── /sba-loans-in-california            # 50 state pages
├── /sba-loans-in-texas
├── /sba-loans-in-...
├── /sba-loans-for-restaurants          # 15 industry pages
├── /sba-loans-for-hotels
├── /sba-loans-for-...
├── /how-to-source-sba-loans            # 20 supporting articles
├── /sba-loan-packaging-checklist
├── /sba-7a-vs-504
├── /...
├── /sba-lending-101-foundation         # 8 broker training funnel articles
├── /sba-eligibility-deep-dive
├── /...
└── /blog                               # Hub pages
    /podcast
    /brokers
    /contact
    /loans
```

**Total new pages: ~96 (5 pillar + 50 state + 15 industry + 20 supporting + 8 training funnel)**
**(Plus 20 podcast pages expanded from show notes to full SEO posts)**

---

## Execution Priority

| Priority | Step | Output | Est. Effort |
|---|---|---|---|
| 🔴 NOW | 0: Infrastructure | Components, routes, data files | Medium |
| 🔴 NOW | 1: Transcript verify | Fix slug mismatches | Small |
| 🟠 HIGH | 2: Pillar articles | 5 cornerstone pages | Large |
| 🟠 HIGH | 3: Podcast expansion | 20 SEO companion posts | Large |
| 🟡 MED | 4: State pages | 50 programmatic pages | Medium (template) |
| 🟡 MED | 5: Industry pages | 15 guide pages | Medium |
| 🟢 NEXT | 6: Supporting articles | 20 long-tail articles | Large |
| 🟢 NEXT | 7: Training funnel | 8 broker articles | Medium |
| 🔵 FINAL | 8: Cross-linking | Audit + fix all links | Medium |

---

## Go / No-Go

Before starting Step 2 (content writing):
- [ ] Infrastructure components built (Step 0)
- [ ] Transcript slugs verified (Step 1)
- [ ] This plan reviewed and approved by Shane
- [ ] Image generation pipeline tested (1 test image)

**Once these are green, we execute content phases in parallel batches.**
