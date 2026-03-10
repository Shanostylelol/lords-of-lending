# Dual-Audience Strategy: Lords of Lending

## Research Date: 2026-03-10

---

## Executive Summary

Lords of Lending serves two fundamentally different audiences from a single domain:

1. **Business Owners / Borrowers** — Want to understand SBA loans, get funded, navigate the process
2. **Brokers / Originators** — Want training on sourcing, structuring, and closing SBA deals

After analyzing 20+ companies that successfully handle dual audiences and reviewing current UX research, the recommended approach is a **"Unified Brand, Divergent Paths"** architecture — a single homepage with a shared hero that establishes authority, followed by clear audience routing within the first scroll, leading to separate content funnels.

---

## Part 1: Best Practices & Patterns for Dual-Audience Websites

### Pattern 1: The Audience Selector Hero (RECOMMENDED)

**How it works:** The hero section uses a universal value proposition, then immediately presents two clear paths: "I'm a Business Owner" / "I'm a Broker/Originator."

**Who uses it:**
- **Ellis Retirement Services** — Two buttons in the hero for individuals vs. companies
- **Recruitment agencies** — "Looking for a career?" vs. "Looking for a candidate?"
- **American Heritage Property Management** — Owners vs. Tenants above the fold
- **Milanote** — 20+ persona-specific landing pages accessible from a dropdown
- **Coalition for the Homeless** — Three-choice homepage for self-selection

**Why it works for Lords of Lending:**
- Only two audiences = clean split, no overcrowding
- Immediate self-identification reduces bounce rate
- Each path leads to tailored messaging, CTAs, and content
- The universal hero still builds brand authority for SEO

**Implementation:**
```
Hero: "The #1 Resource for SBA Lending"
Subhead: "Whether you're seeking funding or building a lending career"

[I'm a Business Owner]    [I'm a Broker/Originator]
   "Get SBA Funding"         "Master SBA Lending"
```

### Pattern 2: Unified Hero + Scrolling Divergence

**How it works:** Single hero speaks to both audiences with shared language, then the page splits into two columns or alternating sections below the fold.

**Who uses it:**
- **Stripe** — "Financial infrastructure to grow your revenue" speaks to all, then routes to Enterprises, Startups, and Platforms via scrolling sections
- **HubSpot** — Product-organized nav (Marketing Hub, Sales Hub, Service Hub) rather than audience labels
- **Fidelity** — Separate sections for Individual Investors, Advisors, and Institutions

**Why it could work:** Avoids forcing a choice too early, lets visitors explore. Good when audiences have overlapping interests.

**Why it's less ideal for LoL:** Business owners and brokers have very different intent. A borrower looking for funding doesn't want to scroll past originator training content.

### Pattern 3: Navigation-Based Routing

**How it works:** Top navigation contains audience-specific items like "For Business Owners" and "For Brokers." Homepage remains general; audience-specific pages do the heavy lifting.

**Who uses it:**
- **Gusto** — Main site for employers; `/partners/accountants` for accountant partners
- **QuickBooks/Intuit** — `/solopreneur/`, `/small-business/`, `/partners/accountants/` as separate paths
- **Fidelity** — "Individual Investors," "Employers," "Advisors & Institutions" in utility nav
- **Salesforce** — "By Role" and "By Industry" dropdowns in mega menu

**Why it works:** Clean, professional, doesn't clutter the homepage. Users who know what they want navigate directly.

**Risk:** Homepage bounce rate if visitors don't immediately see themselves reflected.

### Pattern 4: Separate Subdomains/Microsites

**How it works:** Completely separate experiences. Example: `lordsoflending.com` for borrowers, `learn.lordsoflending.com` for originators.

**Who uses it:**
- **VELUX** — veluxusa.com (trade) vs. whyskylights.com (consumer)
- **Lords of Lending currently** — lordsoflending.com + learn.lordsoflending.com

**Why it's problematic:**
- Splits domain authority for SEO
- Confuses brand identity
- Requires maintaining two separate sites
- Cross-pollination of audiences is lost

### Pattern 5: Product/Topic-Based Organization (NOT Audience-Based)

**How it works:** Organize by what you offer, not who you serve. Let visitors self-select based on interest.

**Who uses it:**
- **Huber Engineered Woods** — Organized by product (roof, wall, floor) instead of audience (builder, architect, homeowner)
- **Zillow** — Organized by action (Buy, Sell, Rent, Agent Finder) not by audience

**Key insight from Aten Design Group research:** "Avoid audience-group naming in navigation labels, as users often occupy multiple segments, causing confusion."

---

## Part 2: How Top Companies Handle Dual Audiences

### Stripe (Developers + Business Owners + Enterprise)

**Homepage:** Universal hero — "Financial infrastructure to grow your revenue"
**Navigation:** Products | Solutions | Developers | Resources | Pricing
**Routing strategy:**
- Developers get their own top-level nav section with API docs, SDKs, GitHub
- Business owners find "Solutions" organized by use case (SaaS, ecommerce, marketplaces)
- Enterprise gets "Contact sales" CTA and case studies
- Dual CTAs: "Start now" (self-serve) + "Contact sales" (enterprise)

**Key takeaway:** Stripe leads with the product, not the audience. Both developers and business owners understand "payments infrastructure." The nav routes them to depth.

### HubSpot (Marketers + Sales + Service + Developers)

**Homepage:** Product-focused hero with rotating use cases
**Navigation:** Organized by product hub (Marketing Hub, Sales Hub, Service Hub, CMS Hub, Operations Hub)
**Routing strategy:**
- Each "Hub" has its own landing page with persona-specific messaging
- Free tools serve as lead magnets for each audience
- Blog content is tagged by topic, not by audience
- "For Marketers" content naturally attracts marketers via SEO

**Key takeaway:** HubSpot doesn't ask "who are you?" — they organize by product and let content marketing do the audience routing through SEO and topic clusters.

### Gusto (Employers + Employees + Accountants)

**Homepage:** Employer-focused — "The people platform"
**Navigation:** Main site targets employers
**Partner routing:** Dedicated `/partners/accountants` section with:
- Separate landing pages for the partner program
- Gusto Pro dashboard for accountants
- Tiered partner program (Silver, Gold, Platinum)
- Partner directory connecting accountants with businesses

**Key takeaway:** Gusto chose a primary audience (employers) for the homepage and gave the secondary audience (accountants) a dedicated partner section. This is the most applicable pattern for Lords of Lending — business owners as primary homepage audience, brokers as dedicated section.

### Fidelity (Individual Investors + Advisors + Institutions)

**Homepage:** Consumer-focused with investing tools and education
**Navigation:** Utility navigation at top with audience-specific sections:
- "Individual Investors" (default experience)
- "Employers" (workplace benefits)
- "Advisors & Institutions" (professional tools)

**Key takeaway:** Clear audience labels in secondary/utility navigation. Each audience gets a completely different site experience when selected.

### Zillow (Home Buyers/Sellers + Real Estate Agents)

**Homepage:** 100% consumer-focused (search bar, listings)
**Agent routing:** Separate "Premier Agent" program at `/premier-agent/`
**Strategy:** Consumer-first homepage drives traffic; agents access tools through a dedicated professional portal

**Key takeaway:** When one audience generates the content/traffic and the other monetizes it, lead with the audience that generates traffic.

### Coleman Report (SBA Industry — Closest Competitor)

**Homepage:** Professional-focused — "Critical Information for Today's Small Business Lender"
**Navigation:** Premium content, training, events, fraud reporting
**Audience routing:** None — assumes all visitors are industry professionals
**Pricing:** $995/year premium membership, $1,495-$2,000 training courses

**Key takeaway:** Coleman serves only one audience (industry professionals) and ignores borrowers entirely. This is Lords of Lending's opportunity — capture the borrower audience that Coleman doesn't serve while also competing for the originator training market.

### Airbnb / Upwork / Fiverr (Two-Sided Marketplaces)

**Homepage:** Lead with the demand side (buyers/guests/clients)
**Supply side routing:** Separate "Become a Host" / "Become a Freelancer" CTAs in nav or footer
**Strategy:** The marketplace works when demand exists, so homepage prioritizes the demand-side experience

**Key takeaway for LoL:** Business owners (demand side) searching for SBA info drive organic traffic. Brokers (supply side) are the monetization path. Lead with borrower content to build traffic, convert brokers through training.

---

## Part 3: Recommended Site Architecture for lordsoflending.com

### The "Gusto Model" — Primary Audience Homepage + Dedicated Professional Section

Based on the research, the optimal architecture for Lords of Lending follows the Gusto/Zillow/Airbnb pattern: **lead with the audience that generates organic traffic (business owners), monetize through the professional audience (brokers/originators).**

### Rationale

1. **SEO volume:** "SBA loans" and "how to get an SBA loan" have 10-100x more search volume than "SBA loan originator training"
2. **Traffic funnel:** Business owners searching for SBA info = massive organic traffic opportunity
3. **Monetization path:** Training platform (learn.lordsoflending.com) is the revenue driver, aimed at brokers
4. **Brand authority:** Being the go-to SBA resource for everyone establishes authority that makes the training product more valuable
5. **Two-sided marketplace dynamics:** More borrower content = more traffic = more credibility = more broker signups

### Proposed Site Map

```
lordsoflending.com/
├── / (Homepage — dual-audience hero with borrower-primary content)
├── /for-business-owners (Borrower hub / pillar page)
│   └── Links to relevant blog posts, guides, podcast episodes
├── /for-brokers (Broker/originator hub — replaces current /brokers dead end)
│   ├── Training overview + CTA to learn.lordsoflending.com
│   ├── Why become an SBA originator
│   ├── Broker success stories / testimonials
│   └── Free resources for brokers (templates, checklists)
├── /blog (Mixed content, tagged by audience)
│   ├── /blog/category/borrower-guides
│   ├── /blog/category/originator-training
│   └── /blog/category/industry-news (serves both)
├── /podcast (All episodes, tagged by audience relevance)
├── /learn → redirect to learn.lordsoflending.com
├── /about
├── /contact
└── /resources
    ├── /resources/sba-loan-calculator
    ├── /resources/eligibility-checker
    ├── /resources/glossary
    └── /resources/templates
```

### Content Cluster Architecture (SEO)

**Cluster 1: Borrower Education (Traffic Driver)**
- Pillar: "The Complete Guide to SBA 7(a) Loans"
- Spokes:
  - How to qualify for an SBA loan
  - SBA loan requirements checklist
  - SBA loan interest rates explained
  - How long does an SBA loan take?
  - SBA vs. conventional business loans
  - SBA loan for buying a business
  - What can SBA loans be used for?
  - SBA loan down payment requirements
  - How to write an SBA loan business plan

**Cluster 2: Originator Training (Revenue Driver)**
- Pillar: "How to Become an SBA Loan Originator"
- Spokes:
  - SBA loan originator certification guide
  - How to source SBA loan deals
  - SBA loan packaging best practices
  - Understanding SBA SOPs for originators
  - SBA loan underwriting fundamentals
  - Building a broker-lender relationship
  - SBA loan closing checklist for originators
  - How to build an SBA lending practice

**Cluster 3: Industry Authority (Serves Both)**
- Pillar: "SBA Lending This Week" (weekly roundup)
- Spokes:
  - Podcast episode companion articles
  - SBA policy changes and SOP updates
  - Market data and lending trends
  - Case studies (from borrower AND originator perspective)

---

## Part 4: Navigation Structure Recommendation

### Primary Navigation (Desktop)

```
[Logo: Lords of Lending]

For Business Owners    For Brokers    Blog    Podcast    Resources    [Start Learning →]
```

### Navigation Details

| Nav Item | Content | Primary Audience |
|----------|---------|-----------------|
| For Business Owners | SBA loan guides, eligibility info, process overview, calculator | Borrowers |
| For Brokers | Training overview, originator resources, deal submission, partnership info | Brokers/Originators |
| Blog | All articles, filterable by category (Borrower Guides / Originator Training / Industry News) | Both |
| Podcast | All episodes with audience tags | Both |
| Resources | Calculator, glossary, templates, checklists | Both |
| Start Learning (CTA) | → learn.lordsoflending.com/pricing | Primarily brokers |

### Utility Navigation (Top Right)

```
[Login to Training Platform]  [Schedule a Call]
```

### Mobile Navigation

Same structure, hamburger menu. "Start Learning" remains visible as a persistent CTA button.

### Alternative Consideration: Topic-Based Nav

Based on the Aten Design Group research warning against audience-group naming, an alternative:

```
[Logo]  SBA Loans    Training    Blog    Podcast    Resources    [Start Learning →]
```

Where:
- "SBA Loans" = borrower-focused content hub
- "Training" = originator-focused content hub

This avoids the "am I a business owner or a broker?" question for visitors who might be both (e.g., a business owner considering becoming an SBA broker).

**Recommendation:** Start with the audience-based labels ("For Business Owners" / "For Brokers") because Lords of Lending's two audiences are truly distinct with different intent. Test and iterate based on analytics.

---

## Part 5: Landing Page Layout Recommendation

### Homepage Wireframe

```
┌─────────────────────────────────────────────────────┐
│  [Nav: For Business Owners | For Brokers | Blog |   │
│   Podcast | Resources]            [Start Learning]  │
├─────────────────────────────────────────────────────┤
│                                                     │
│           THE #1 RESOURCE FOR                       │
│           SBA LENDING                               │
│                                                     │
│  "Whether you're seeking funding or building a      │
│   lending career, we've got you covered."           │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ I'm a Business   │  │ I'm a Broker /   │        │
│  │ Owner            │  │ Originator       │        │
│  │ [Get SBA Funding] │  │ [Master SBA     │        │
│  │                  │  │  Lending]        │        │
│  └──────────────────┘  └──────────────────┘        │
│                                                     │
│  $450M+ Closed  •  425+ Businesses Funded  •        │
│  18 Podcast Episodes  •  #1 Training Platform       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  HOW WE HELP YOU WIN                                │
│                                                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐  │
│  │ 1. LEARN    │ │ 2. TRAIN    │ │ 3. SUCCEED   │  │
│  │ Free guides │ │ Expert-led  │ │ Close deals  │  │
│  │ & articles  │ │ courses     │ │ & get funded │  │
│  │ for SBA     │ │ for brokers │ │              │  │
│  │ lending     │ │ & lenders   │ │              │  │
│  └─────────────┘ └─────────────┘ └─────────────┘  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  FOR BUSINESS OWNERS                                │
│  "Navigate the SBA loan process with confidence"    │
│                                                     │
│  • Understand if you qualify                        │
│  • Learn what lenders look for                      │
│  • Get connected with SBA lenders                   │
│  • [Explore SBA Loan Guides →]                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  FOR BROKERS & ORIGINATORS                          │
│  "Build your SBA lending practice"                  │
│                                                     │
│  • 15 training modules, 66 lessons                  │
│  • SOP compliance & underwriting                    │
│  • Deal sourcing & packaging                        │
│  • [Start Your Training →]                          │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  LATEST FROM THE PODCAST                            │
│  [Episode cards — 3 most recent]                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  TRUSTED BY                                         │
│  [Client/funded business logos]                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  TESTIMONIALS                                       │
│  [2 borrower testimonials + 2 originator            │
│   testimonials, clearly labeled]                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  FROM THE BLOG                                      │
│  [3 cards: 1 borrower, 1 originator, 1 industry]   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  FAQ                                                │
│  [Mixed questions from both audiences]              │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  READY TO GET STARTED?                              │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ Business Owner?  │  │ Broker/Originator│        │
│  │ [Talk to a       │  │ [Start Training  │        │
│  │  Lender]         │  │  Free →]         │        │
│  └──────────────────┘  └──────────────────┘        │
│                                                     │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
│  For Business Owners | For Brokers | Blog |         │
│  Podcast | About | Contact | Privacy | Terms        │
└─────────────────────────────────────────────────────┘
```

### Key Design Decisions

1. **Hero splits 50/50** — Equal visual weight for both audiences, but the universal headline ("The #1 Resource for SBA Lending") establishes authority for everyone

2. **Audience sections alternate** — Borrower section first (higher traffic potential), broker section second (monetization path)

3. **Content sections are mixed** — Podcast, blog, and testimonials include both audiences, reinforcing that this is THE authority for all things SBA

4. **Dual CTAs at bottom** — Final conversion point mirrors the hero, catching visitors who scrolled the full page

5. **Trust metrics are universal** — "$450M+ Closed" works for both audiences (borrowers see credibility, brokers see deal volume)

---

## Part 6: SEO Implications

### The Dual-Audience SEO Advantage

Having two distinct content clusters actually **strengthens** SEO rather than diluting it, IF structured correctly:

1. **Topical authority compounds** — Google sees lordsoflending.com covering SBA lending from every angle (borrower guides, originator training, industry news, podcast transcripts). This breadth signals deep expertise.

2. **Content clusters link together** — A borrower article about "SBA loan requirements" can naturally link to an originator article about "SBA underwriting fundamentals." This internal linking strengthens both clusters.

3. **Different keyword universes** — Borrower keywords ("how to get an SBA loan") and originator keywords ("SBA loan originator training") don't compete with each other. You rank for both independently.

### Content Cluster SEO Strategy

**Borrower Cluster (High Volume, Lower Competition)**

| Keyword | Est. Monthly Volume | Competition | Content Type |
|---------|-------------------|-------------|-------------|
| SBA loans | 40,000+ | High | Pillar page |
| How to get an SBA loan | 5,000+ | Medium | Guide |
| SBA loan requirements | 8,000+ | Medium | Checklist |
| SBA loan interest rates | 6,000+ | Medium | Explainer |
| SBA loan for buying a business | 3,000+ | Low-Medium | Guide |
| SBA loan application process | 2,000+ | Medium | Step-by-step |
| SBA 7(a) loan | 4,000+ | Medium | Explainer |
| SBA loan down payment | 2,500+ | Low | FAQ article |

**Originator Cluster (Low Volume, Near-Zero Competition)**

| Keyword | Est. Monthly Volume | Competition | Content Type |
|---------|-------------------|-------------|-------------|
| SBA loan broker training | 100-500 | Very Low | Pillar page |
| How to become an SBA loan broker | 200-500 | Very Low | Guide |
| SBA loan originator certification | 100-300 | Very Low | Guide |
| SBA loan packaging | 100-500 | Low | Training article |
| SBA SOP compliance | 50-200 | Very Low | Reference |
| How to source SBA deals | 50-200 | Very Low | Strategy article |

### SEO Architecture Rules

1. **Separate URL paths per audience:**
   - `/for-business-owners/` = borrower pillar
   - `/for-brokers/` = originator pillar
   - Blog posts live under `/blog/` but are tagged by audience

2. **Internal linking strategy:**
   - Every borrower article links to the borrower pillar page
   - Every originator article links to the originator pillar page
   - Cross-link where natural (e.g., borrower article on "what lenders look for" links to originator article on "underwriting basics")

3. **Canonical structure:**
   - Each page has a single canonical URL
   - No duplicate content between audience sections
   - Podcast episodes have single URLs with tags for both audiences

4. **Schema markup per audience:**
   - Borrower pages: FAQ schema, HowTo schema, Article schema
   - Originator pages: Course schema, Article schema, Organization schema
   - Podcast: PodcastEpisode schema on all episodes

5. **Blog category URLs:**
   - `/blog/category/borrower-guides/` — for paginated category pages
   - `/blog/category/originator-training/` — for paginated category pages
   - `/blog/category/industry-news/` — shared content

---

## Part 7: Content Funnel for Each Audience

### Funnel 1: Business Owner / Borrower

```
AWARENESS (Free, SEO-driven)
├── Blog: "What is an SBA 7(a) Loan?"
├── Blog: "Do I Qualify for an SBA Loan?"
├── Podcast: Episodes about business acquisition, funding
├── Tools: SBA Loan Calculator, Eligibility Quiz
│
CONSIDERATION (Free, engagement-driven)
├── Pillar: "The Complete Guide to SBA Loans"
├── Blog: "SBA Loan Application Checklist"
├── Blog: "How to Write an SBA Business Plan"
├── Download: "SBA Loan Preparation Packet" (email gate)
│
DECISION (Conversion)
├── CTA: "Schedule a Call with an SBA Lender"
├── CTA: "Submit Your Deal for Review"
├── Page: /for-business-owners (with contact form)
└── Direct: Phone/email to Shane, Steph, or Brian
```

**Key metrics:** Organic traffic, time on page, email signups, deal submissions

### Funnel 2: Broker / Originator

```
AWARENESS (Free, SEO + word-of-mouth)
├── Blog: "How to Become an SBA Loan Originator"
├── Blog: "Why SBA Lending is a $100B Opportunity"
├── Podcast: Episodes about deal structuring, SOP updates
├── Blog: "SBA Lending This Week" (weekly roundup)
│
CONSIDERATION (Free, trust-building)
├── Pillar: "The SBA Originator's Playbook"
├── Free trial: Module 1 on learn.lordsoflending.com
├── Webinar: "How We Close $30M+ in SBA Loans Annually"
├── Download: "SBA Deal Packaging Template" (email gate)
│
DECISION (Paid conversion)
├── CTA: "Start Your Free Training Trial"
│   → learn.lordsoflending.com/pricing (Free Module 1)
├── CTA: "Enroll in SBA Launch Program" ($497)
│   → learn.lordsoflending.com/pricing
└── CTA: "Join the Membership" ($97/mo)
    → learn.lordsoflending.com/pricing
```

**Key metrics:** Training signups, free trial conversions, paid enrollments, membership retention

### Cross-Audience Conversion Paths

Some visitors will cross between audiences:

1. **Borrower → Originator:** A business owner who gets funded and thinks "I could do this for a living" → Route to originator training
2. **Originator → Deal Partner:** A broker who needs a lending partner for their deals → Route to /brokers deal submission
3. **Industry Professional → Both:** A bank employee exploring SBA lending → Consumes both borrower education (to understand clients) and originator training (to build skills)

---

## Part 8: Implementation Priority

### Phase 1: Quick Wins (This Week)

1. **Update homepage hero** with dual-audience selector buttons
2. **Create `/for-business-owners` page** — borrower hub with guides, resources, CTA to contact team
3. **Revamp `/for-brokers` page** — Replace current dead-end with full originator hub (training overview, success stories, free resources, CTA to learn.lordsoflending.com)
4. **Update navigation** — Add "For Business Owners" and "For Brokers" to primary nav
5. **Add audience tags to existing blog posts** — Categorize each as borrower, originator, or both

### Phase 2: Content Foundation (Weeks 2-4)

6. **Write borrower pillar page** — "The Complete Guide to SBA 7(a) Loans"
7. **Write originator pillar page** — "How to Become an SBA Loan Originator"
8. **Create 3 borrower-focused blog posts** targeting high-volume keywords
9. **Create 3 originator-focused blog posts** targeting zero-competition keywords
10. **Add blog category pages** with filtering

### Phase 3: Content Scale (Months 2-3)

11. **Launch "SBA Lending This Week"** weekly roundup (serves both audiences)
12. **Create companion blog posts** for all 18 podcast episodes
13. **Build SBA Loan Calculator** interactive tool (borrower magnet)
14. **Build SBA Eligibility Quiz** interactive tool (borrower lead gen)
15. **Create email sequences** — separate nurture paths for borrowers vs. originators

### Phase 4: Optimization (Month 3+)

16. **A/B test hero variations** — Audience selector vs. unified message
17. **Implement personalization** — Return visitors see audience-specific content
18. **Add testimonials per audience** — Borrower success stories + originator career stories
19. **Track cross-audience conversion** — How many borrowers become originators?
20. **Iterate based on analytics** — Which audience drives more traffic? Which converts better?

---

## Part 9: What NOT to Do

Based on research, avoid these common mistakes:

1. **Don't create separate subdomains for each audience** — Splits domain authority. Keep everything on lordsoflending.com.

2. **Don't try to serve both audiences equally on every page** — Each blog post, each page should have a primary audience. Tag it. Don't write "for everyone" content that speaks to no one.

3. **Don't use insider jargon on borrower pages** — Borrowers don't know what "SOP" or "PLP" or "7(a)" means without context. Use plain language.

4. **Don't hide the originator training behind generic CTAs** — Current "Start Learning" buttons don't communicate WHO should be learning. Make it clear: "Broker Training" or "Originator Certification."

5. **Don't ignore the borrower audience** — The current site is broker-focused, but borrowers represent 10-100x more organic search traffic. They're the growth engine.

6. **Don't create audience silos that prevent cross-discovery** — A borrower reading about SBA loans should be able to discover that originator training exists (and vice versa). Use subtle cross-links.

7. **Don't use too many personas** — Two is perfect. Don't sub-segment into "first-time borrowers," "serial acquirers," "new brokers," "experienced originators." Start with two, test, refine later.

---

## Sources

### Dual-Audience Website Design
- [Tips for Building Websites for Multiple Target Audiences — New Media Campaigns](https://www.newmediacampaigns.com/blog/tips-for-building-websites-for-multiple-target-audiences)
- [Designing for Multiple Audiences — Mightybytes](https://www.mightybytes.com/insights/how-to-design-site-for-multiple-audiences/)
- [How To Design a Website For Multiple Target Audiences — Mattix Design](https://mattixdesign.com/design-tips/how-to-design-a-website-for-multiple-target-audiences)
- [How Can You Target Multiple Audiences On Your Website? — Wrayward](https://www.wrayward.com/articles/how-to-build-a-website-for-multiple-audiences)
- [Designing for Multiple Audiences — Aten Design Group](https://atendesigngroup.com/articles/designing-multiple-audiences)
- [How to Appeal to More Than One Audience — Jammy Digital](https://jammydigital.com/website-appeal-multiple-audience/)
- [8 Design Tips for Websites Targeting Multiple Audiences](https://underconstructionpage.com/design-tips-websites-targeting-multiple-audiences/)

### Homepage Design Patterns
- [Choose Your Homepage — Failory Newsletter](https://newsletter.failory.com/p/choose-homepage)
- [Landing Page UX Design Best Practices — Design Studio](https://www.designstudiouiux.com/blog/landing-page-ux-best-practices/)
- [Homepage Design: 5 Fundamental Principles — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-design-principles/)
- [30 Homepage Design Examples Curated by UX Pros — Eleken](https://www.eleken.co/blog-posts/homepage-design-examples)
- [How to Design a Persona-Centric Website Experience — HubSpot](https://blog.hubspot.com/blog/tabid/6307/bid/32434/how-to-design-a-persona-centric-website-experience.aspx)

### SEO & Content Clusters
- [Topic Clusters: The Next Evolution of SEO — HubSpot](https://blog.hubspot.com/marketing/topic-clusters-seo)
- [The Complete Guide to Topic Clusters — Search Engine Land](https://searchengineland.com/guide/topic-clusters)
- [How to Use Content Clusters to Boost SEO — Omniscient Digital](https://beomniscient.com/blog/content-clusters-boost-seo/)
- [Topic Cluster Content Strategy for 2026 — Brafton](https://www.brafton.com/blog/strategy/topic-cluster-content-strategy/)

### Company Examples
- [Stripe Homepage](https://stripe.com/)
- [Gusto Partner Program for Accountants](https://gusto.com/partners/accountants)
- [QuickBooks by Intuit](https://quickbooks.intuit.com/)
- [Fidelity Investments](https://www.fidelity.com/)
- [LendingTree Business Model — Vizologi](https://vizologi.com/business-strategy-canvas/lendingtree-business-model-canvas/)
- [Stripe's Greatest Success — Every Developer](https://everydeveloper.com/stripe-greatest-success/)
- [Zillow Premier Agent](https://www.zillow.com/premier-agent/)

### Financial Services Website Design
- [12 Best Financial Website Design Examples — AltaStreet](https://www.altastreet.com/12-best-financial-website-design-examples-real-results-revealed/)
- [Financial Services Website Design — Mediaboom](https://mediaboom.com/news/financial-services-website-design/)
- [The Essential Guide to Mortgage Websites — Kaleidico](https://kaleidico.com/essential-mortgage-websites/)

### SBA Lending Competitors
- [Coleman Report](https://colemanreport.com/)
- [The SBA Expert Course](https://www.sbaexpertcourse.com/)
- [NAGGL Training](https://www.naggl.org/training/)
- [SBFI SBA Lender Training](https://sbfi.org/lender-training/sba-lender-training/)

### Navigation Best Practices
- [Website Navigation Best Practices — Tenet](https://www.wearetenet.com/blog/website-navigation-best-practices)
- [Website Navigation Design Best Practices — Sparkbox](https://sparkbox.com/foundry/mobile_navigation_ux_navigation_menu_design_for_content_rich_websites)
- [Best Practices for Navigation Menus — Brilliant Directories](https://www.brilliantdirectories.com/blog/best-practices-for-navigation-menus)
