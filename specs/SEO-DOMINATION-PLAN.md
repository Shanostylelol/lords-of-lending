# SEO Domination Plan — Lords of Lending

**Created:** 2026-03-10
**Status:** PLAN — Ready for execution
**Goal:** Make lordsoflending.com the #1 ranking site for SBA lending education, originator training, and small business financing content.

---

## Architecture Decision

**All content lives on lordsoflending.com (main domain).**

- Google treats subdomains as separate sites
- `lordsoflending.com` = free content hub, SEO magnet, authority builder
- `learn.lordsoflending.com` = paid training product, gated platform
- Funnel: Free content → trust → CTA → learn.lordsoflending.com/pricing

---

## Content Inventory: What We're Building

### Summary

| Content Type | Count | Avg Words | Total Words | Images Needed |
|---|---|---|---|---|
| Pillar Articles | 5 | 3,500 | 17,500 | 5 hero + 15 inline |
| Podcast Companion Posts | 18 | 2,000 | 36,000 | 18 hero |
| State Pages | 50 | 1,200 | 60,000 | 0 (template) |
| Industry Pages | 15 | 1,800 | 27,000 | 15 hero |
| Supporting Articles | 20 | 1,500 | 30,000 | 20 hero |
| Weekly Roundups (first 8) | 8 | 800 | 6,400 | 0 (template) |
| Tool/Calculator Pages | 3 | 500 + interactive | 1,500 | 0 |
| **TOTAL** | **119 pages** | — | **~178,400 words** | **~73 images** |

---

## Phase 0: Foundation & Setup (Day 1-2)

### 0.1 Google Search Console
- [ ] Verify ownership via TXT record (already have: `google-site-verification=D0sF8orsIn4T0JKSU7ZYVwuxnssKaN326v5MdAJehj4`)
- [ ] Submit sitemap: `https://lordsoflending.com/sitemap.xml`
- [ ] Request indexing for all existing pages

### 0.2 Google Analytics (GA4)
- [ ] Create GA4 property for lordsoflending.com
- [ ] Add measurement ID to `src/app/layout.tsx` (Google Analytics script tag)
- [ ] Set up conversion events:
  - `click_start_learning` — any CTA to learn.lordsoflending.com/pricing
  - `click_podcast_subscribe` — any podcast platform link
  - `scroll_depth_75` — user reads 75%+ of article
  - `contact_form_submit` — contact page submission

### 0.3 SEO Audit Script
Create `scripts/seo-audit.ts` that checks every page for:
- [ ] Title tag: exists, 50-60 chars, contains primary keyword
- [ ] Meta description: exists, 150-160 chars, contains keyword
- [ ] H1: exactly one per page, contains keyword
- [ ] Images: all have alt text, all under 200KB, WebP format
- [ ] Internal links: minimum 3 per article page
- [ ] JSON-LD: valid structured data present
- [ ] Canonical URL: present and correct
- [ ] Open Graph: title, description, image all present
- [ ] Word count: minimum thresholds per content type
- [ ] Broken links: no 404s in internal links
Output: JSON report + console summary with pass/fail per page

### 0.4 Transcript Collection
- [ ] Shane rips transcripts from all 18 Buzzsprout episodes
- [ ] Save to `content/transcripts/{episode-slug}.txt`
- [ ] Claude studies voice patterns, slang, analogies, storytelling style for each host
- [ ] Create `docs/VOICE-GUIDE.md` — writing style reference per host

### 0.5 Image Generation Pipeline
Set up image creation workflow:
- **Hero images:** 1200x630px (OG standard), WebP, <150KB
- **Inline images:** 800x450px, WebP, <100KB
- **Style:** Dark navy/gold palette matching site brand, professional but not stock-photo generic
- **Tools:** DALL-E MCP (mcp__dalle__generate_image) or Gemini (mcp__gemini-image__generate_image_from_text)
- **Naming:** `/public/images/blog/{slug}.webp`
- **Alt text:** Descriptive, keyword-rich, unique per image

---

## Phase 1: Pillar Articles (Day 3-7)

Five cornerstone articles that anchor our topic clusters. These are the highest-value SEO assets.

### Article 1: "The Complete Guide to SBA 7(a) Loans"
- **Target keyword:** "SBA 7a loan", "SBA 7a loan requirements", "what is an SBA 7a loan"
- **Word count:** 4,000-5,000
- **URL:** `/complete-guide-sba-7a-loans`
- **Structure:**
  - What is an SBA 7(a) loan? (definition, how it works)
  - Who qualifies? (eligibility requirements with specifics)
  - Loan amounts, terms, and rates (current 2026 numbers)
  - The application process step-by-step
  - Common mistakes that kill applications
  - SBA 7(a) vs. 504 vs. microloans comparison table
  - FAQ section (8-10 questions with FAQ schema)
  - Expert quotes from Shane/Stephanie/Brian (pulled from podcast transcripts)
- **Internal links TO:** 5 Myths, Bad Credit, Startups Denied, Can't Pay Loan, Business Acquisition
- **Internal links FROM:** Every other article should link to this as the pillar
- **Schema:** Article + FAQ + BreadcrumbList + HowTo
- **Images needed:**
  - 1 hero image (SBA loan concept visual)
  - 1 comparison table graphic (7a vs 504 vs micro)
  - 1 process flowchart (application steps)
- **CTA:** "Ready to learn how to originate SBA deals? → learn.lordsoflending.com/pricing"

### Article 2: "How to Become an SBA Loan Broker in 2026"
- **Target keyword:** "how to become SBA loan broker", "SBA loan broker training", "SBA loan originator"
- **Word count:** 3,500-4,000
- **URL:** `/how-to-become-sba-loan-broker`
- **Structure:**
  - What does an SBA loan broker actually do?
  - The difference between broker, originator, and BDO
  - Licensing and compliance requirements by state
  - How to find your first SBA lending partner
  - Building a deal pipeline from scratch
  - Compensation: how SBA brokers get paid (referral fees, commissions)
  - The training path: from zero to closing deals
  - Day in the life of an SBA originator (real stories from podcast)
  - FAQ section (6-8 questions)
- **Internal links TO:** Attention Trumps Time, Originator Training pillar, podcast episodes #7 #10 #12
- **Schema:** Article + FAQ + BreadcrumbList
- **Images needed:**
  - 1 hero image (broker/originator professional context)
  - 1 career path infographic
- **CTA:** "Start your SBA originator training → learn.lordsoflending.com/pricing"

### Article 3: "SBA Loan Originator Training: The Complete Resource"
- **Target keyword:** "SBA loan originator training", "SBA lending training", "SBA loan packaging course"
- **Word count:** 3,500-4,000
- **URL:** `/sba-loan-originator-training`
- **Structure:**
  - Why originator training matters (deal quality, approval rates)
  - What good SBA training covers (document packaging, lender matching, deal structuring)
  - Self-study vs. mentorship vs. structured programs
  - The Lords of Lending training methodology
  - Skills every originator needs (with examples from real deals)
  - How to evaluate training programs (what to look for, red flags)
  - Free resources to start learning today (blog, podcast, tools)
  - FAQ section (6-8 questions)
- **Internal links TO:** How to Become Broker, Deal Structuring pillar, podcast episodes #3 #9 #11
- **Schema:** Article + FAQ + Course (schema.org/Course for the training program reference)
- **Images needed:**
  - 1 hero image (training/education concept)
  - 1 skills checklist graphic
- **CTA:** "Enroll in the SBA Launch Program → learn.lordsoflending.com/pricing"

### Article 4: "SBA Deal Structuring: From LOI to Closing"
- **Target keyword:** "SBA deal structuring", "SBA loan structuring guide", "SBA 7a deal structure"
- **Word count:** 3,500-4,000
- **URL:** `/sba-deal-structuring-guide`
- **Structure:**
  - Anatomy of an SBA deal (parties, documents, timeline)
  - Letter of Intent (LOI) — what lenders look for
  - Seller note structures and standby agreements
  - Equity injection requirements and sources
  - DSCR calculations and how to hit the numbers
  - Collateral and personal guarantee considerations
  - Common deal-killers and how to avoid them
  - Real deal case studies (anonymized from your portfolio)
  - FAQ section (6-8 questions)
- **Internal links TO:** Seller Notes episode, Business Acquisition, 100% Financing, Valuation
- **Schema:** Article + FAQ + BreadcrumbList
- **Images needed:**
  - 1 hero image (deal structuring concept)
  - 1 deal timeline infographic
  - 1 DSCR calculation example graphic
- **CTA:** "Master deal structuring in our training program → learn.lordsoflending.com/pricing"

### Article 5: "SBA Lending in 2026: What's Changed and What's Coming"
- **Target keyword:** "SBA lending 2026", "SBA loan changes 2026", "SBA lending news"
- **Word count:** 3,000-3,500
- **URL:** `/sba-lending-2026-outlook`
- **Structure:**
  - Key SBA policy changes in 2025-2026
  - Interest rate environment and impact on SBA deals
  - Tariff effects on small business borrowing
  - Rise of fintech and automated SBA lending
  - Predictions from the Lords of Lending team
  - What originators should prepare for
  - FAQ section (4-6 questions)
- **Internal links TO:** Tariffs episode, Automated Lending episode, 2026 Look Ahead episode, Bomb Goes Off episode
- **Schema:** Article + FAQ + BreadcrumbList
- **Images needed:**
  - 1 hero image (2026 outlook/trends concept)
- **CTA:** "Stay ahead of the curve → learn.lordsoflending.com/pricing"
- **NOTE:** This article gets refreshed quarterly with new data

---

## Phase 2: Podcast Companion Posts (Day 8-14)

For each of the 18 podcast episodes, create a comprehensive companion blog post that:
1. Summarizes the episode's key points in written form
2. Expands on topics with additional detail, data, and context
3. Includes direct quotes from the hosts (from transcripts)
4. Embeds the Buzzsprout player
5. Links to related blog articles and other episodes
6. Targets long-tail keywords related to the episode topic

### Template for Each Companion Post

```markdown
## [Episode Title] — Key Takeaways & Deep Dive

[2-3 sentence intro with primary keyword naturally included]

**In this episode:** [1 paragraph summary]

🎧 **Listen to the full episode:**
[Buzzsprout embed]

---

## Key Takeaways

### 1. [First major point]
[3-4 paragraphs expanding on this point with data, examples, expert context]

> "[Direct quote from Shane/Stephanie/Brian]" — [Name], Lords of Lending Episode [#]

### 2. [Second major point]
[3-4 paragraphs]

### 3. [Third major point]
[3-4 paragraphs]

---

## What This Means for [Originators/Business Owners/Brokers]

[2-3 paragraphs connecting episode insights to actionable advice]

---

## Related Resources

- 📖 [Related blog article 1](/slug)
- 📖 [Related blog article 2](/slug)
- 🎙️ [Related episode 1](/slug)
- 🎙️ [Related episode 2](/slug)

---

## Ready to Take the Next Step?

[CTA block → learn.lordsoflending.com/pricing]
```

### Episode-Specific Details

| # | Episode | Companion Post Title | Target Keywords | Words |
|---|---|---|---|---|
| 18 | 2026 Look Ahead | "SBA Lending Predictions for 2026: What Smart Originators Are Preparing For" | SBA lending 2026, SBA predictions | 2,000 |
| 17 | 2025 Lessons | "Lessons from a Year in SBA Lending: What We Got Right and Wrong" | SBA lending lessons, year in review | 1,800 |
| 16 | Business Owner Dance | "Reading the Room: How to Know When a Business Owner Is Ready to Sell" | business owner selling signals, acquisition sourcing | 2,000 |
| 15 | Seller Notes | "Seller Notes in SBA Deals: The Complete Breakdown" | SBA seller notes, seller financing SBA | 2,500 |
| 14 | Restaurant Success | "SBA Loans for Restaurants: What Lenders Really Look For" | SBA loan restaurant, restaurant acquisition | 2,200 |
| 13 | Interest Rates | "Do Interest Rates Actually Matter in SBA Lending? Here's the Truth" | SBA interest rates, SBA loan rates 2026 | 2,000 |
| 12 | Reputation | "Building a Lending Reputation That Generates Referrals" | SBA broker reputation, lending referrals | 1,800 |
| 11 | Ask the Experts | "SBA Lending FAQ: Experts Answer Your Top Questions" | SBA loan FAQ, SBA lending questions | 2,500 |
| 10 | Ennobled by Fire | "The Real Story Behind Lords of Lending" | Lords of Lending story, SBA lending career | 1,800 |
| 9 | Acquisition War Room | "The SBA Acquisition Playbook: Sourcing, Structuring, and Closing" | SBA acquisition, business acquisition strategy | 2,500 |
| 8 | Insights from Road | "Field Notes: What We're Seeing in SBA Lending Right Now" | SBA lending trends, field insights | 1,500 |
| 7 | Meet Your Lords | "Meet the Team Behind Lords of Lending" | Lords of Lending team, SBA lending experts | 1,500 |
| 6 | Bomb Goes Off | "SBA Policy Changes That Shook the Industry (And What to Do About Them)" | SBA policy changes, SBA rule changes | 2,200 |
| 5 | Broke or Billionaire | "Wealth-Building Through Business Acquisition: The SBA Path" | business acquisition wealth, buy a business | 2,000 |
| 4 | Buying & Scaling | "How to Buy and Scale a Business with SBA Financing" | buy business SBA, scale business loan | 2,200 |
| 3 | Not Urgent Enough | "Why Urgency Is the #1 Skill in SBA Lending Pipelines" | SBA pipeline management, lending urgency | 1,800 |
| 2 | Let's Talk Tariffs | "How Tariffs Impact Small Business Lending and What Borrowers Should Know" | tariffs small business, tariff impact loans | 2,000 |
| 1 | Automated Lending | "The Rise of Automated SBA Lending: Threat or Opportunity?" | automated SBA lending, fintech SBA | 2,000 |

**Total:** 18 posts, ~36,300 words

### Image Strategy for Companion Posts
- Each post uses the podcast cover art as hero image (already exists)
- Add 1-2 inline images per post for key concepts (quote cards, data visualizations)
- Generate quote card images: dark navy background, gold text, host photo, quote snippet
- Template: `"[Quote]" — Shane Pierson, LoL #[X]` overlaid on branded background

---

## Phase 3: Programmatic SEO Pages (Day 15-21)

### 3.1 State Pages (50 pages)

**URL pattern:** `/sba-loans-in-{state}`
**Example:** `/sba-loans-in-california`, `/sba-loans-in-texas`

**Template structure:**
```
# SBA Loans in [State]: Your Complete Guide

## SBA Lending Overview in [State]
[2-3 paragraphs about SBA lending landscape in this state]

## Key SBA Statistics for [State]
- Number of SBA 7(a) loans approved in [State] (FY2025): [data]
- Average SBA loan size in [State]: [data]
- Top SBA lending industries in [State]: [data]
- Number of SBA-approved lenders in [State]: [data]

## SBA 7(a) Eligibility in [State]
[Standard eligibility requirements + any state-specific notes]

## Top Industries Using SBA Loans in [State]
[3-5 industries with brief descriptions]

## How to Apply for an SBA Loan in [State]
[Step-by-step process]

## FAQ: SBA Loans in [State]
[5-6 state-specific questions]

## Ready to Get Started?
[CTA → learn.lordsoflending.com/pricing]
```

**Technical implementation:**
- Create `src/app/sba-loans-in-[state]/page.tsx` as a dynamic route
- Data file: `src/lib/state-data.ts` with stats per state
- Generate metadata dynamically (title, description, OG, canonical)
- JSON-LD: Article + FAQ + BreadcrumbList per page
- Internal links: each state page links to → pillar articles, relevant industry pages, /contact

**Data sources for state stats:**
- SBA.gov annual lending reports (public data)
- Federal Reserve small business lending surveys
- Census Bureau business formation data

### 3.2 Industry Pages (15 pages)

**URL pattern:** `/sba-loans-for-{industry}`

**Pages to create:**

| URL Slug | Title | Target Keywords |
|---|---|---|
| sba-loans-for-restaurants | SBA Loans for Restaurants | SBA restaurant loan, restaurant acquisition financing |
| sba-loans-for-hotels | SBA Loans for Hotels & Hospitality | SBA hotel loan, hotel acquisition SBA |
| sba-loans-for-franchises | SBA Loans for Franchises | SBA franchise loan, franchise financing |
| sba-loans-for-medical-practices | SBA Loans for Medical & Dental Practices | SBA medical practice loan, dental practice financing |
| sba-loans-for-auto-repair | SBA Loans for Auto Repair Shops | SBA auto repair loan, mechanic shop financing |
| sba-loans-for-daycares | SBA Loans for Daycares & Childcare | SBA daycare loan, childcare business financing |
| sba-loans-for-gas-stations | SBA Loans for Gas Stations & C-Stores | SBA gas station loan, convenience store financing |
| sba-loans-for-laundromats | SBA Loans for Laundromats | SBA laundromat loan, laundromat acquisition |
| sba-loans-for-ecommerce | SBA Loans for E-Commerce Businesses | SBA ecommerce loan, online business financing |
| sba-loans-for-manufacturing | SBA Loans for Manufacturing | SBA manufacturing loan, factory financing |
| sba-loans-for-trucking | SBA Loans for Trucking & Transportation | SBA trucking loan, transportation financing |
| sba-loans-for-construction | SBA Loans for Construction Companies | SBA construction loan, contractor financing |
| sba-loans-for-veterinary | SBA Loans for Veterinary Practices | SBA vet practice loan, veterinary financing |
| sba-loans-for-real-estate | SBA Loans for Commercial Real Estate | SBA commercial real estate, owner-occupied CRE |
| sba-loans-for-startups | SBA Loans for Startups | SBA startup loan, new business SBA financing |

**Template structure:**
```
# SBA Loans for [Industry]: The Complete Guide

## Why [Industry] Businesses Use SBA Loans
[Industry-specific context — margins, typical deal sizes, acquisition trends]

## Typical [Industry] SBA Deal Structure
- Average loan size: $[X]
- Typical terms: [X] years
- Equity injection: [X]%
- DSCR requirements: [X]
- Collateral considerations: [industry-specific]

## What Lenders Look For in [Industry] Deals
[3-5 key underwriting factors specific to this industry]

## Common Challenges in [Industry] SBA Lending
[3-4 industry-specific pitfalls and how to avoid them]

## Case Study: [Anonymized Real Deal]
[Brief story from your portfolio, if applicable]

## FAQ: SBA Loans for [Industry]
[5-6 industry-specific questions]

## Start Your [Industry] SBA Journey
[CTA → learn.lordsoflending.com/pricing]
```

**Schema per page:** Article + FAQ + BreadcrumbList
**Images:** 1 hero image per industry (generate with DALL-E/Gemini — industry-specific professional imagery)
**Internal links:** Each links to → SBA 7(a) pillar, relevant blog posts, /contact, related industry pages

### 3.3 Tool/Calculator Pages (3 pages)

| URL | Tool | Description |
|---|---|---|
| `/tools/sba-loan-calculator` | SBA Payment Calculator | Monthly payment calc with SBA-specific rates and terms |
| `/tools/sba-eligibility-checker` | SBA Eligibility Screener | Interactive questionnaire: "Could you qualify?" |
| `/tools/dscr-calculator` | DSCR Calculator | Debt service coverage ratio calculator with explanation |

**Why these matter for SEO:**
- Tools earn backlinks naturally (people link to useful calculators)
- High engagement time signals to Google
- Each tool page has 500+ words of educational content around it
- FAQ schema on each

**Technical:** Client-side React components, no backend needed. Inputs + instant calculation.

---

## Phase 4: Supporting Articles (Day 22-35)

20 additional articles targeting long-tail keywords identified in the competitive analysis.

### Originator-Focused Articles (8)

| # | Title | Target Keywords | Words |
|---|---|---|---|
| 1 | "How to Source SBA Loans: 12 Strategies That Actually Work" | how to source SBA loans, SBA deal sourcing | 2,000 |
| 2 | "SBA Loan Packaging: The Originator's Checklist" | SBA loan packaging, loan package checklist | 1,800 |
| 3 | "SBA Referral Fee Structures: How Brokers Get Paid" | SBA referral fees, SBA broker compensation | 1,500 |
| 4 | "Building an SBA Lending Pipeline from Zero" | SBA lending pipeline, build loan pipeline | 1,800 |
| 5 | "How to Match Borrowers with the Right SBA Lender" | SBA lender matching, find SBA lender | 1,500 |
| 6 | "The SBA Originator's Tech Stack: Tools You Need" | SBA lending tools, loan origination software | 1,500 |
| 7 | "SBA Convention Season: How to Network and Win Deals" | SBA conference, NAGGL convention, SBA networking | 1,200 |
| 8 | "From Bank BDO to Independent Originator: Making the Leap" | independent SBA originator, leave bank SBA | 1,500 |

### Borrower-Focused Articles (8)

| # | Title | Target Keywords | Words |
|---|---|---|---|
| 9 | "SBA 7(a) vs. SBA 504: Which Loan Is Right for You?" | SBA 7a vs 504, SBA loan comparison | 2,000 |
| 10 | "SBA Loan Application Checklist: Every Document You Need" | SBA loan documents, SBA application checklist | 1,500 |
| 11 | "How Long Does an SBA Loan Take? Real Timelines" | SBA loan timeline, how long SBA loan | 1,200 |
| 12 | "SBA Loan Down Payment: How Much Do You Really Need?" | SBA loan down payment, SBA equity injection | 1,500 |
| 13 | "Can You Use an SBA Loan to Buy a Business?" | buy business SBA loan, SBA acquisition | 1,500 |
| 14 | "SBA Loan Denial: Why It Happens and What to Do Next" | SBA loan denied, SBA loan rejection | 1,500 |
| 15 | "Understanding SBA Loan Fees: What You'll Actually Pay" | SBA loan fees, SBA guarantee fee | 1,200 |
| 16 | "SBA Loans for Veterans: Benefits and Programs" | SBA veteran loan, veteran business loan | 1,200 |

### Thought Leadership Articles (4)

| # | Title | Target Keywords | Words |
|---|---|---|---|
| 17 | "Why Most SBA Deals Fall Apart (And How to Save Them)" | SBA deal problems, SBA loan closing issues | 1,800 |
| 18 | "The Future of SBA Lending: AI, Fintech, and the Human Touch" | SBA lending future, fintech SBA | 1,500 |
| 19 | "What the Coleman Report Won't Tell You About SBA Lending" | Coleman Report SBA, SBA lending insider | 1,500 |
| 20 | "SBA Lending Myths That Cost Originators Deals" | SBA originator mistakes, SBA lending myths | 1,500 |

---

## Phase 5: Weekly Roundup Series (Ongoing, starting Day 36)

### "SBA Lending This Week" — Weekly News Digest

**URL pattern:** `/sba-lending-this-week-{YYYY-MM-DD}`
**Publish:** Every Monday
**Word count:** 600-1,000

**Template:**
```
# SBA Lending This Week — [Date Range]

## Top Stories

### [Story 1 Headline]
[2-3 paragraph summary + analysis from Lords of Lending perspective]

### [Story 2 Headline]
[2-3 paragraph summary]

### [Story 3 Headline]
[2-3 paragraph summary]

## Rate Watch
- WSJ Prime Rate: [current]%
- Typical SBA 7(a) rate range: [current]%
- 10-Year Treasury: [current]% (affects SBA 504)

## Deal of the Week
[Anonymized deal highlight — industry, size, structure, outcome]

## From the Podcast
[Plug latest or relevant episode with embed]

## Quick Links
[3-5 links to relevant articles on lordsoflending.com]
```

**SEO value:**
- Fresh content every week (Google rewards publishing frequency)
- Targets "SBA lending news" and "SBA loan rates this week" keywords
- Natural internal linking opportunity
- Builds habit / email subscriber base
- Easy to produce (curate + comment, not deep research)

---

## Phase 6: Technical SEO Components (Parallel with content)

### 6.1 Related Articles Component
**File:** `src/components/sections/related-articles.tsx`

Displays 2-3 related blog posts at the bottom of every article page. Logic:
- Match by topic cluster (tag/category system)
- Fallback: most recent articles excluding current

### 6.2 Related Podcast Component
**File:** `src/components/sections/related-podcast.tsx`

Displays relevant podcast episode with embedded player inside blog articles. Can be called from markdown via a custom component or added automatically based on topic mapping.

### 6.3 Table of Contents Component
**File:** `src/components/ui/table-of-contents.tsx`

Auto-generated from H2/H3 headings. Sticky sidebar on desktop, collapsible on mobile.
- Improves user experience (lower bounce rate)
- Creates jump links Google can use as sitelinks
- Increases time on page

### 6.4 FAQ Accordion Component
**File:** `src/components/ui/faq-accordion.tsx`

Reusable FAQ section with:
- Expand/collapse animation
- Automatic FAQ JSON-LD schema injection
- Accepts questions as props or from constants

### 6.5 Author Bio Component
**File:** `src/components/ui/author-bio.tsx`

Enhanced author card with:
- Photo, name, title, short bio
- Links to LinkedIn, podcast, booking page
- Schema.org Person markup
- Appears at bottom of every article

### 6.6 Breadcrumb Component
**File:** `src/components/ui/breadcrumb.tsx`

Visual breadcrumb trail + BreadcrumbList JSON-LD. Auto-generates from URL structure.

### 6.7 Newsletter/Email Capture
**File:** `src/components/ui/email-capture.tsx`

- Inline (within articles, after first major section)
- Exit-intent popup (optional)
- Bottom-of-article CTA
- Collects email for future newsletter (SBA Lending This Week)
- Integration: Resend, Mailchimp, or ConvertKit TBD

### 6.8 Social Share Bar
**File:** `src/components/ui/social-share.tsx`

- LinkedIn, X/Twitter, Facebook, Copy Link
- Sticky on scroll (desktop sidebar)
- Encourages content distribution → backlinks

### 6.9 Reading Time Estimator
Display "X min read" on article cards and article headers. Calculated from word count.

### 6.10 Last Updated Date
Show "Last updated: [date]" on articles. Google rewards fresh content. Automatic when markdown files are modified.

---

## Phase 7: Schema Markup Expansion

### New Schema Types to Add

| Page Type | Schema | Purpose |
|---|---|---|
| Pillar articles | `Article` + `FAQ` + `HowTo` + `BreadcrumbList` | Rich snippets in search |
| Industry pages | `Article` + `FAQ` + `BreadcrumbList` | Industry-specific rich results |
| State pages | `Article` + `FAQ` + `BreadcrumbList` + `LocalBusiness` (reference) | Local SEO signals |
| Calculator tools | `SoftwareApplication` + `FAQ` | Tool rich results |
| Weekly roundup | `Article` + `BreadcrumbList` | News-style results |
| Podcast companions | `Article` + `PodcastEpisode` + `BreadcrumbList` | Dual content type |
| About/Team | `Organization` + `Person` (per founder) | Knowledge panel signals |

### Update `src/lib/structured-data.ts`
- Add `howToJsonLd()` for step-by-step guides
- Add `softwareAppJsonLd()` for calculator tools
- Add `localBusinessJsonLd()` for state pages (reference to SBA lending in that state)
- Add `courseJsonLd()` for training-related content (reference to learn.lordsoflending.com)
- Update `articleJsonLd()` to accept `dateModified` for content freshness signals

---

## Phase 8: Image Strategy

### Image Types Needed

| Type | Count | Size | Format | Source |
|---|---|---|---|---|
| Pillar article heroes | 5 | 1200x630 | WebP | AI-generated (DALL-E/Gemini) |
| Pillar inline graphics | 15 | 800x450 | WebP | AI-generated or Canva |
| Industry page heroes | 15 | 1200x630 | WebP | AI-generated |
| Supporting article heroes | 20 | 1200x630 | WebP | AI-generated |
| Quote cards (podcast) | 18-36 | 1080x1080 | WebP | Template-generated |
| Infographics | 5-8 | 800xVariable | WebP | AI-generated or Canva |
| Author headshots | 3 | Already exist | WebP | ✅ Done |
| Podcast cover art | 1 | Already exists | WebP | ✅ Done |

### Image Generation Prompts Style Guide
All generated images should follow this brand style:
- **Color palette:** Deep navy (#0B1D33), Gold (#AA712C), White (#FFFFFF)
- **Style:** Professional, editorial, financial services aesthetic
- **Avoid:** Cheesy stock photo vibes, clip art, overly AI-looking images
- **Include:** Business contexts, professional settings, documents, handshakes, cityscapes
- **Text on images:** Minimal — use for quote cards only

### Image SEO Requirements
Every image must have:
- [ ] Descriptive filename: `sba-loan-restaurant-acquisition.webp` (not `image-1.webp`)
- [ ] Alt text with keyword: `"SBA loan process for restaurant acquisition financing"`
- [ ] Under 150KB file size (WebP compression)
- [ ] Proper dimensions for OG/social sharing (1200x630 for heroes)
- [ ] `loading="lazy"` for below-fold images
- [ ] `priority` flag for hero images

---

## Phase 9: Internal Linking Execution

### Automated Cross-Link Injection
After all content is written, systematically add internal links:

1. **Every article** links to its topic cluster pillar (mandatory)
2. **Every article** links to 2-3 related articles in the same cluster
3. **Every article** links to 1-2 relevant podcast episodes
4. **Every podcast companion** links to 2-3 related blog articles
5. **Every state page** links to the SBA 7(a) pillar + 2 relevant industry pages
6. **Every industry page** links to the SBA 7(a) pillar + relevant state pages + relevant articles
7. **Pillar articles** link to ALL supporting articles in their cluster

### Link Audit Checklist
After Phase 4 is complete, run audit:
- [ ] Every page has minimum 3 internal links going OUT
- [ ] Every page has minimum 2 internal links coming IN
- [ ] No orphan pages (pages with zero incoming links)
- [ ] Pillar articles have the highest incoming link count
- [ ] All anchor text is descriptive and keyword-relevant (no "click here")
- [ ] No broken internal links

---

## Phase 10: Content Quality & Humanization Protocol

### The "Shane Test"
Before publishing any article, apply these checks:

1. **Voice check:** Does this sound like something Shane/Steph/Brian would say on the podcast?
   - Use contractions naturally ("don't", "we've", "you'll")
   - Include SBA lending jargon used correctly ("deal packaging", "equity injection", "standby seller note")
   - Add occasional blunt honesty ("Let's be real — most applications are garbage because...")

2. **Experience check (E-E-A-T):**
   - Minimum 2 specific examples from real deals (anonymized)
   - At least 1 direct quote from a podcast episode
   - Reference actual SBA SOP numbers or policy sections
   - Mention specific lender behaviors ("When we submitted this to underwriting, they came back asking for...")

3. **Originality check:**
   - Does this say something competitors DON'T say?
   - Is there a contrarian take or insider insight?
   - Would this be useful to someone even if they never buy anything?

4. **AI detection sweep:**
   - Run through Originality.ai (optional, $15/mo)
   - Check for AI patterns: "In today's landscape...", "It's important to note...", "In conclusion..."
   - Replace generic intros with specific hooks: "Last month, we almost lost a $2.3M restaurant deal because..."

5. **SEO check (from audit script):**
   - Primary keyword in title, H1, first paragraph, meta description
   - Secondary keywords in H2s and body naturally
   - Image alt text includes keywords
   - Internal links present with descriptive anchor text
   - FAQ schema if applicable
   - Word count meets minimum for content type

### Content Refresh Schedule
| Content Type | Refresh Frequency | What to Update |
|---|---|---|
| Pillar articles | Every 3 months | Stats, rates, policy changes, new internal links |
| Industry pages | Every 6 months | Industry-specific data, new case studies |
| State pages | Annually | SBA lending volume data, local stats |
| Supporting articles | Every 6 months | New examples, updated links |
| Weekly roundups | Never (timely content) | N/A |

---

## Execution Timeline

| Phase | Description | Days | Content Pieces | Dependency |
|---|---|---|---|---|
| 0 | Foundation & Setup | 1-2 | 0 (infrastructure) | None |
| 1 | Pillar Articles | 3-7 | 5 articles | Phase 0 + transcripts |
| 2 | Podcast Companions | 8-14 | 18 posts | Phase 0 + transcripts |
| 3 | Programmatic Pages | 15-21 | 68 pages (50 state + 15 industry + 3 tools) | Phase 0 |
| 4 | Supporting Articles | 22-35 | 20 articles | Phases 1-2 |
| 5 | Weekly Roundup | 36+ | Ongoing (weekly) | All phases |
| 6 | Technical Components | Parallel | 10 components | Phase 0 |
| 7 | Schema Expansion | Parallel | 6 new schema types | Phase 6 |
| 8 | Image Generation | Parallel | ~73 images | Content from Phases 1-4 |
| 9 | Internal Linking | After Phase 4 | Audit + fix | All content complete |
| 10 | Quality & Humanization | Every article | Review protocol | Transcripts |

### Realistic Pace with Claude Code
- **Phases 0-2** (foundation + pillars + podcast companions): 2 weeks
- **Phase 3** (programmatic pages): 1 week (template-driven, fast)
- **Phases 4-5** (supporting articles + roundup launch): 2 weeks
- **Phases 6-9** (technical + schema + images + linking): Parallel throughout
- **Total to full deployment: ~5-6 weeks**

---

## Success Metrics (90-Day Targets)

| Metric | Current | 30-Day | 60-Day | 90-Day |
|---|---|---|---|---|
| Indexed pages | ~30 | 80+ | 119+ | 130+ |
| Organic traffic (monthly) | Unknown | 500+ | 2,000+ | 5,000+ |
| Keywords ranking top 10 | 0 | 5+ | 15+ | 30+ |
| Keywords ranking top 50 | 0 | 20+ | 50+ | 100+ |
| Backlinks (referring domains) | Unknown | 5+ | 15+ | 30+ |
| learn.lordsoflending.com/pricing clicks | Unknown | 50+ | 200+ | 500+ |
| Average time on page | Unknown | 2:30+ | 3:00+ | 3:30+ |
| Bounce rate | Unknown | <65% | <55% | <50% |

### Keywords We Should Own by Day 90
- "SBA loan originator training" → Top 3
- "how to become SBA loan broker" → Top 5
- "SBA 7a loan guide" → Top 10
- "SBA loans for restaurants" → Top 5
- "SBA seller notes" → Top 5
- "SBA deal structuring" → Top 3
- "Lords of Lending" → #1 (branded)
- "SBA lending podcast" → Top 3
- "SBA loan packaging" → Top 5
- 50 state-specific "SBA loans in [state]" → Top 20

---

## Tools & Skills We'll Use

| Tool / Skill | Purpose |
|---|---|
| Claude Code `/cook` | Execute each article/page build with builder + validator agents |
| Claude Code `/content-strategy` | Validate keyword targeting and content gaps |
| Claude Code `/seo-audit` | Run technical SEO checks on every page |
| Claude Code `/schema-markup` | Generate and validate JSON-LD for each page type |
| Claude Code `/copywriting` | Write high-converting CTA copy |
| Claude Code `/frontend-design` | Build new UI components (TOC, FAQ, related posts) |
| DALL-E MCP / Gemini MCP | Generate hero images and graphics |
| Canva MCP | Create quote cards, infographics, social images |
| Firecrawl MCP | Scrape competitor content for keyword gap analysis |
| Google Search Console | Monitor indexing and ranking progress |
| GA4 | Track traffic and conversion metrics |

---

## File Structure (New)

```
lords-of-lending/
├── content/
│   ├── blog/                    # 8 existing + 20 new articles
│   ├── podcast/                 # 18 existing companion posts (to be expanded)
│   ├── transcripts/             # 18 podcast transcripts (Shane provides)
│   ├── pillar/                  # 5 pillar articles
│   ├── industry/                # 15 industry guides
│   └── roundup/                 # Weekly SBA Lending This Week posts
├── src/
│   ├── app/
│   │   ├── sba-loans-in-[state]/page.tsx    # 50 state pages
│   │   ├── sba-loans-for-[industry]/page.tsx # 15 industry pages
│   │   ├── tools/
│   │   │   ├── sba-loan-calculator/page.tsx
│   │   │   ├── sba-eligibility-checker/page.tsx
│   │   │   └── dscr-calculator/page.tsx
│   │   └── sba-lending-this-week/
│   │       └── [date]/page.tsx              # Weekly roundup pages
│   ├── components/
│   │   ├── ui/
│   │   │   ├── table-of-contents.tsx        # NEW
│   │   │   ├── faq-accordion.tsx            # NEW
│   │   │   ├── author-bio.tsx               # NEW
│   │   │   ├── breadcrumb.tsx               # NEW
│   │   │   ├── email-capture.tsx            # NEW
│   │   │   ├── social-share.tsx             # NEW
│   │   │   └── reading-time.tsx             # NEW
│   │   └── sections/
│   │       ├── related-articles.tsx         # NEW
│   │       └── related-podcast.tsx          # NEW
│   └── lib/
│       ├── state-data.ts                    # NEW — 50 states SBA data
│       ├── industry-data.ts                 # NEW — 15 industry configs
│       └── structured-data.ts               # EXPAND — new schema types
├── scripts/
│   └── seo-audit.ts                         # NEW — automated SEO checker
├── docs/
│   ├── COMPETITIVE-ANALYSIS.md              # EXISTS
│   ├── INTERNAL-LINKING-STRATEGY.md         # EXISTS
│   ├── VOICE-GUIDE.md                       # NEW — host voice profiles
│   └── SEO-DOMINATION-PLAN.md              # THIS FILE
└── public/
    └── images/
        ├── blog/                            # 8 existing + 20 new
        ├── pillar/                          # 5 new hero images
        ├── industry/                        # 15 new hero images
        ├── quotes/                          # 18-36 podcast quote cards
        └── infographics/                    # 5-8 data visualizations
```

---

## Risk Mitigation

| Risk | Mitigation |
|---|---|
| Google AI content penalty | Humanization protocol (Phase 10), transcript-based voice matching, real deal stories |
| Thin content on state/industry pages | Minimum 1,200 words + unique data + FAQ per page, not just template swaps |
| Over-optimization (keyword stuffing) | SEO audit script flags keyword density >2%, natural writing first |
| Broken links as content scales | Automated link checker in SEO audit, run before every deploy |
| Image generation quality | Review every AI image before publishing, regenerate if generic |
| Scaling too fast without indexing | Submit sitemap after each phase, monitor GSC for crawl errors |
| Duplicate content across state pages | Each state page has unique intro, data, and industry mix — not copy-paste |

---

## Go / No-Go Checklist

Before starting Phase 1:
- [ ] Google Search Console verified and sitemap submitted
- [ ] GA4 property created and tracking code installed
- [ ] Transcripts collected for at least 5 episodes (enough to build voice guide)
- [ ] SEO audit script built and running clean on existing pages
- [ ] This plan reviewed and approved by Shane

**Once these 5 items are green, we execute.**
