export interface IndustryData {
  slug: string;
  name: string;
  shortName: string;
  naicsRange: string;
  typicalLoanRange: string;
  typicalDealStructure: string;
  commonChallenges: string[];
  whatLendersLookFor: string[];
  typicalDSCR: string;
  typicalEquityInjection: string;
  avgTermYears: string;
  sbaPopularity: "High" | "Medium" | "Low";
  keyInsight: string;
  relatedEpisodes: string[];
  relatedArticles: string[];
  image: string;
  accentColor: string;
}

export const INDUSTRY_DATA: IndustryData[] = [
  // ─── 1. Restaurants & Food Service ───────────────────────────────────
  {
    slug: "restaurants",
    name: "Restaurants & Food Service",
    shortName: "Restaurants",
    naicsRange: "722110-722515",
    typicalLoanRange: "$250,000 - $2,500,000",
    typicalDealStructure:
      "Most restaurant SBA deals are acquisitions of existing operations, often including real estate if the owner occupies the property. Franchise restaurant acquisitions follow a more standardized path since the franchisor provides unit-level economics. Independent restaurant acquisitions require deeper due diligence on customer concentration, lease terms, and management transition.",
    commonChallenges: [
      "Thin profit margins (5-10% net) make DSCR calculations tight",
      "High employee turnover increases operational risk during ownership transitions",
      "Seasonal revenue fluctuations can stress cash flow projections",
      "Lease dependency — most restaurants don't own their real estate",
      "Health department and licensing requirements add complexity to closings",
    ],
    whatLendersLookFor: [
      "Minimum 2-3 years of management experience in food service (not just dining experience)",
      "Clean health department history with no critical violations in last 24 months",
      "Lease with at least 10 years remaining (including renewal options)",
      "Stable or growing revenue trend over the last 3 fiscal years",
      "Reasonable add-backs — lenders scrutinize owner lifestyle expenses running through P&L",
      "Franchise approval letter (if franchise acquisition)",
    ],
    typicalDSCR: "1.15x - 1.30x",
    typicalEquityInjection: "10% - 20%",
    avgTermYears: "10 years",
    sbaPopularity: "High",
    keyInsight:
      "Restaurants are one of the most common SBA acquisition types, but they're also where we see the most deals die from thin margins and unrealistic buyer projections. The borrowers who succeed are the ones who've actually worked in kitchens, managed staff, and understand that a restaurant is a people business first and a food business second.",
    relatedEpisodes: [
      "building-a-successful-restaurant-lol-14",
      "acquisition-war-room-lol-9",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "what-is-my-business-worth-a-step-by-step-valuation-guide-for-small-business-owners",
    ],
    image: "/images/industry/restaurants.webp",
    accentColor: "orange",
  },

  // ─── 2. Hotels & Hospitality ─────────────────────────────────────────
  {
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    shortName: "Hotels",
    naicsRange: "721110-721199",
    typicalLoanRange: "$1,000,000 - $5,000,000",
    typicalDealStructure:
      "Hotel SBA deals are almost always acquisitions that include real estate, making them some of the largest SBA 7(a) and 504 transactions. Flagged (franchised) properties have an easier underwriting path because of brand standards and reservation systems. Unflagged independent hotels require stronger borrower experience and more conservative projections. SBA 504 loans are popular here because of the heavy real estate component.",
    commonChallenges: [
      "Large loan amounts push against SBA 7(a) limits, often requiring 504 or combination structures",
      "Revenue is highly seasonal and sensitive to economic downturns and travel trends",
      "Deferred maintenance on older properties can hide six-figure capital expenditure needs",
      "Franchise agreements impose PIP (Property Improvement Plan) requirements that add to acquisition cost",
      "Environmental concerns (Phase I/II) are common with older hospitality real estate",
    ],
    whatLendersLookFor: [
      "Direct hotel management or ownership experience (front desk management alone is insufficient)",
      "Trailing 12-month RevPAR and occupancy rates compared to STR competitive set",
      "Condition of the property — recent PIP completion or clear capital budget for upgrades",
      "Franchise agreement in good standing with no pending termination notices",
      "Borrower's liquidity post-closing to handle seasonal cash flow dips",
      "Clean Phase I environmental report",
    ],
    typicalDSCR: "1.25x - 1.40x",
    typicalEquityInjection: "15% - 25%",
    avgTermYears: "25 years",
    sbaPopularity: "High",
    keyInsight:
      "Hotels are the heavyweight division of SBA lending. The deal sizes are big, the due diligence is intense, and the borrower better know how to run a property — not just stay in one. We've seen too many buyers fall in love with the idea of owning a hotel without understanding that occupancy swings of 20% between seasons can crush your debt service if you're not prepared.",
    relatedEpisodes: [
      "acquisition-war-room-lol-9",
      "why-equity-not-cash-flow-makes-or-breaks-sba-deals-lol-20",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "100-financing-for-business-expansion",
    ],
    image: "/images/industry/hotels.webp",
    accentColor: "burgundy",
  },

  // ─── 3. Healthcare & Medical Practices ───────────────────────────────
  {
    slug: "healthcare",
    name: "Healthcare & Medical Practices",
    shortName: "Healthcare",
    naicsRange: "621111-621999",
    typicalLoanRange: "$350,000 - $5,000,000",
    typicalDealStructure:
      "Healthcare SBA deals span practice acquisitions, partner buyouts, and startup buildouts. Dental and veterinary practices are the most common, followed by optometry and physician practices. Goodwill often represents 60-80% of the purchase price since the value is in patient relationships and recurring revenue. Lenders underwrite heavily on patient retention rates and the seller's transition plan.",
    commonChallenges: [
      "High goodwill-to-asset ratios make collateral coverage difficult",
      "Patient attrition risk during ownership transitions can undermine projected revenue",
      "Insurance reimbursement changes (Medicare, Medicaid, private payors) create revenue uncertainty",
      "Regulatory compliance requirements (HIPAA, state licensing) add closing complexity",
      "Seller often needs to stay on for 6-12 months for patient transition, complicating deal structure",
    ],
    whatLendersLookFor: [
      "Active clinical license in the relevant state with no disciplinary actions",
      "Matching specialty experience — a general dentist buying a specialty orthodontic practice raises flags",
      "Patient retention plan with seller involvement during transition period",
      "Diversified payor mix — heavy Medicaid dependence is a risk factor",
      "Stable or growing active patient count over the last 3 years",
      "Modern equipment or a clear capital expenditure plan for upgrades",
    ],
    typicalDSCR: "1.25x - 1.50x",
    typicalEquityInjection: "10% - 15%",
    avgTermYears: "10 years",
    sbaPopularity: "High",
    keyInsight:
      "Healthcare practices are some of the safest SBA deals out there because recurring patient revenue is about as predictable as it gets in small business. But the deals that blow up are always the ones where the buyer assumes patients will just stick around. If you're buying a practice, the seller transition plan isn't optional — it's the most important part of your deal.",
    relatedEpisodes: [
      "acquisition-war-room-lol-9",
      "seller-notes-deep-dive-lol-15",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "what-is-my-business-worth-a-step-by-step-valuation-guide-for-small-business-owners",
    ],
    image: "/images/industry/healthcare.webp",
    accentColor: "teal",
  },

  // ─── 4. Construction & Contractors ───────────────────────────────────
  {
    slug: "construction",
    name: "Construction & Contractors",
    shortName: "Construction",
    naicsRange: "236115-238990",
    typicalLoanRange: "$150,000 - $3,000,000",
    typicalDealStructure:
      "Construction SBA deals are primarily working capital lines and equipment purchases rather than business acquisitions. When acquisitions do happen, they tend to involve established contractors with long customer histories and recurring commercial contracts. SBA 504 loans are common for equipment-heavy operations needing excavators, cranes, or specialized vehicles. Working capital needs are often seasonal, with SBA 7(a) lines covering cash flow gaps between project milestones.",
    commonChallenges: [
      "Revenue is project-based and lumpy — a single delayed payment can create cash flow crises",
      "Bonding requirements tie up capital and limit growth for smaller contractors",
      "Worker's compensation and liability insurance costs are among the highest of any industry",
      "Seasonal slowdowns (especially in northern climates) create predictable cash flow troughs",
      "Customer concentration — a few large contracts can represent 50%+ of revenue",
    ],
    whatLendersLookFor: [
      "Minimum 5 years of industry experience with verifiable project history",
      "Active contractor licenses and all required bonding in place",
      "Backlog report showing contracted work for the next 6-12 months",
      "Diversified customer base — no single client exceeding 25% of revenue",
      "Clean accounts receivable aging with minimal 90+ day balances",
      "Adequate insurance coverage including general liability, workers' comp, and commercial auto",
    ],
    typicalDSCR: "1.20x - 1.35x",
    typicalEquityInjection: "15% - 20%",
    avgTermYears: "10 years",
    sbaPopularity: "Medium",
    keyInsight:
      "Construction is one of those industries where lenders either love you or won't touch you, and the difference usually comes down to backlog. If you've got $2M in signed contracts and a track record of completing projects on time, you're golden. But if you're chasing one big job and hoping it lands — that's not a business plan, that's a prayer.",
    relatedEpisodes: [
      "the-year-of-discipline-lol-19",
      "do-interest-rates-really-matter-lol-13",
    ],
    relatedArticles: [
      "100-financing-for-business-expansion",
      "5-myths-about-sba-loans-every-founder-should-know",
    ],
    image: "/images/industry/construction.webp",
    accentColor: "orange",
  },

  // ─── 5. Auto Repair & Dealerships ────────────────────────────────────
  {
    slug: "auto-repair-dealerships",
    name: "Auto Repair & Dealerships",
    shortName: "Auto Repair",
    naicsRange: "441110-811198",
    typicalLoanRange: "$200,000 - $5,000,000",
    typicalDealStructure:
      "Auto repair acquisitions are straightforward SBA deals when the business owns its real estate, which is common in this industry. Dealership acquisitions are larger and more complex, often involving floorplan financing for inventory alongside the SBA loan. Independent repair shops are typically valued at 2-3x SDE, while dealerships carry manufacturer franchise agreements that add layers to underwriting. Equipment (lifts, diagnostic systems) is often included in the purchase.",
    commonChallenges: [
      "Environmental liability from underground storage tanks, oil disposal, and hazardous materials",
      "Equipment obsolescence as vehicles become increasingly electronic and software-dependent",
      "Dealership franchise agreements can be terminated by manufacturers, destroying business value",
      "Inventory financing (floorplan lines) for dealerships must be structured separately from SBA debt",
      "Skilled technician shortage makes staffing a persistent operational risk",
    ],
    whatLendersLookFor: [
      "ASE certifications or equivalent technical credentials for repair shops",
      "Phase I environmental report (required) with Phase II if any red flags surface",
      "Manufacturer franchise agreement in good standing (for dealerships)",
      "Stable car count and average repair order value over trailing 12 months",
      "Owner-operator involvement — absentee ownership is a red flag in this industry",
      "Real estate ownership or long-term lease with favorable terms",
    ],
    typicalDSCR: "1.20x - 1.35x",
    typicalEquityInjection: "10% - 20%",
    avgTermYears: "10-25 years",
    sbaPopularity: "High",
    keyInsight:
      "Auto repair shops are actually some of the strongest SBA deals we see because the recurring revenue model is built in — cars always break down. The environmental piece scares off a lot of buyers, but a clean Phase I clears that hurdle fast. The real differentiator is the shop's reputation and its technicians. If the lead mechanic leaves when the owner sells, you've got a problem.",
    relatedEpisodes: [
      "acquisition-war-room-lol-9",
      "why-equity-not-cash-flow-makes-or-breaks-sba-deals-lol-20",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "what-is-my-business-worth-a-step-by-step-valuation-guide-for-small-business-owners",
    ],
    image: "/images/industry/auto-repair.webp",
    accentColor: "crimson",
  },

  // ─── 6. Franchises ───────────────────────────────────────────────────
  {
    slug: "franchises",
    name: "Franchises",
    shortName: "Franchises",
    naicsRange: "722513-812199",
    typicalLoanRange: "$150,000 - $5,000,000",
    typicalDealStructure:
      "Franchise SBA deals benefit from the most standardized underwriting in SBA lending because the SBA maintains a Franchise Directory of pre-approved concepts. New unit buildouts and resales of existing franchise locations are both common. The franchisor's FDD (Franchise Disclosure Document) provides Item 19 financial performance data that lenders rely on heavily. Multi-unit operators expanding to additional locations represent a growing segment of franchise SBA lending.",
    commonChallenges: [
      "Franchise fees, royalties, and marketing fund contributions reduce net margins compared to independent businesses",
      "Territorial restrictions can limit growth and create conflicts with nearby franchisees",
      "Franchisor-mandated buildout specifications can drive construction costs above initial estimates",
      "Franchise agreement terms may not align with SBA loan terms, creating renewal risk",
      "SBA Franchise Directory listing is required — unlisted concepts cannot use SBA financing",
    ],
    whatLendersLookFor: [
      "Franchise listed on the SBA Franchise Directory with no addenda restrictions",
      "Franchisor approval letter confirming the buyer meets their qualifications",
      "Item 19 financial performance representations showing unit-level viability",
      "Borrower's net worth and liquidity meeting both SBA and franchisor minimums",
      "Multi-unit experience if acquiring or developing more than one location",
      "Site selection approval from franchisor (for new builds)",
    ],
    typicalDSCR: "1.20x - 1.35x",
    typicalEquityInjection: "10% - 20%",
    avgTermYears: "10 years",
    sbaPopularity: "High",
    keyInsight:
      "Franchises are SBA lending on easy mode — if the concept is strong and the borrower is qualified. The FDD gives you real numbers, the franchisor gives you a playbook, and the SBA Directory means the loan is pre-vetted at the program level. Where people get tripped up is ignoring the total cost of ownership. That 6% royalty plus 2% marketing fund adds up fast when your margins are already tight.",
    relatedEpisodes: [
      "building-a-successful-restaurant-lol-14",
      "seller-notes-deep-dive-lol-15",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "5-myths-about-sba-loans-every-founder-should-know",
    ],
    image: "/images/industry/franchises.webp",
    accentColor: "gold",
  },

  // ─── 7. Manufacturing ────────────────────────────────────────────────
  {
    slug: "manufacturing",
    name: "Manufacturing",
    shortName: "Manufacturing",
    naicsRange: "311111-339999",
    typicalLoanRange: "$500,000 - $5,000,000",
    typicalDealStructure:
      "Manufacturing SBA deals typically involve acquisitions of established operations with significant equipment and sometimes real estate. SBA 504 loans are heavily used because of the capital-intensive nature of manufacturing — CNC machines, production lines, and facility buildouts drive large fixed-asset financing needs. Acquisitions often include complex asset allocation between equipment, real estate, goodwill, and inventory that requires careful structuring to maximize SBA eligibility.",
    commonChallenges: [
      "Equipment valuations can be difficult — specialized machinery may have limited resale markets",
      "Customer concentration is common, with a single contract sometimes representing 30-50% of revenue",
      "Supply chain disruptions directly impact production capacity and revenue",
      "Environmental compliance (EPA, OSHA) adds both cost and regulatory risk",
      "Key employee dependency on machine operators and production managers with specialized skills",
    ],
    whatLendersLookFor: [
      "Minimum 5 years of manufacturing management experience in a related production environment",
      "Diversified customer base with no single customer exceeding 20-25% of revenue",
      "Equipment appraisal by a qualified machinery and equipment appraiser",
      "Stable or growing backlog with purchase orders supporting projections",
      "Environmental compliance history with no outstanding violations or remediation orders",
      "Workforce stability — low turnover among skilled production staff",
    ],
    typicalDSCR: "1.25x - 1.40x",
    typicalEquityInjection: "15% - 20%",
    avgTermYears: "10-25 years",
    sbaPopularity: "Medium",
    keyInsight:
      "Manufacturing deals are where SBA lending gets interesting because the assets are real and the cash flows are usually strong — but the due diligence is a beast. You need equipment appraisals, environmental reports, customer contracts, and a workforce assessment before you can even get to underwriting. The borrowers who close these deals fast are the ones who have all of that ready before they apply.",
    relatedEpisodes: [
      "acquisition-war-room-lol-9",
      "the-year-of-discipline-lol-19",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "100-financing-for-business-expansion",
    ],
    image: "/images/industry/manufacturing.webp",
    accentColor: "teal",
  },

  // ─── 8. Professional Services ────────────────────────────────────────
  {
    slug: "professional-services",
    name: "Professional Services",
    shortName: "Professional Services",
    naicsRange: "541110-541990",
    typicalLoanRange: "$100,000 - $2,000,000",
    typicalDealStructure:
      "Professional services acquisitions — law firms, accounting practices, engineering firms, and consulting businesses — are almost entirely goodwill-based since the primary assets are client relationships and staff expertise. Deal structures typically include earnouts or seller notes tied to client retention metrics. Startup financing is less common because SBA lenders prefer established revenue streams, but practice expansions (new partners, additional locations) are well-supported.",
    commonChallenges: [
      "Extremely high goodwill-to-asset ratios (often 80-90%) create collateral shortfalls",
      "Client relationships are often tied to the selling principal, creating transition risk",
      "Revenue can be project-based and non-recurring, making cash flow projections less reliable",
      "Professional licensing and credential requirements limit the buyer pool",
      "Non-compete and non-solicitation enforceability varies by state, affecting deal protection",
    ],
    whatLendersLookFor: [
      "Matching professional credentials — same license type as the selling practice",
      "Client retention plan with seller involvement for minimum 6-12 months post-closing",
      "Demonstrated business development ability, not just technical skill",
      "Diversified client base without key-person revenue concentration",
      "Engagement letters or retainer agreements showing recurring revenue",
      "Clear succession plan for key staff members beyond the selling principal",
    ],
    typicalDSCR: "1.25x - 1.45x",
    typicalEquityInjection: "10% - 15%",
    avgTermYears: "10 years",
    sbaPopularity: "Medium",
    keyInsight:
      "Professional services deals are a double-edged sword. The margins are great and the revenue is often recurring, but you're buying relationships — not widgets. If the seller walks out the door and takes the clients with them, you just bought an empty office with a lease payment. The seller note tied to retention is your best friend in these deals, and any seller who refuses one is telling you something.",
    relatedEpisodes: [
      "seller-notes-deep-dive-lol-15",
      "acquisition-war-room-lol-9",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "what-is-my-business-worth-a-step-by-step-valuation-guide-for-small-business-owners",
    ],
    image: "/images/industry/dental.webp",
    accentColor: "gold",
  },

  // ─── 9. Trucking & Transportation ────────────────────────────────────
  {
    slug: "trucking-transportation",
    name: "Trucking & Transportation",
    shortName: "Trucking",
    naicsRange: "484110-488999",
    typicalLoanRange: "$200,000 - $3,000,000",
    typicalDealStructure:
      "Trucking SBA deals are equipment-heavy, with tractor-trailers, box trucks, and specialized vehicles making up the bulk of financed assets. Business acquisitions are less common than equipment expansion loans for existing operators. SBA 7(a) loans finance both the rolling stock and working capital needs, while 504 loans cover terminal or yard real estate. Owner-operators scaling to small fleets represent the most common borrower profile.",
    commonChallenges: [
      "Equipment depreciation is rapid — a new Class 8 truck loses 30-40% of value in the first 3 years",
      "Fuel cost volatility directly impacts margins and can swing profitability quarter to quarter",
      "DOT compliance, FMCSA authority, and insurance requirements create significant regulatory overhead",
      "Driver shortage and retention is the industry's most persistent operational challenge",
      "Customer concentration among freight brokers or a small number of shippers creates revenue risk",
    ],
    whatLendersLookFor: [
      "Valid CDL with clean driving record and active FMCSA operating authority",
      "Minimum 3 years of trucking operations experience (driving plus business management)",
      "Fleet age and condition report — lenders discount older equipment heavily",
      "Fuel surcharge pass-through agreements with major customers",
      "Adequate insurance coverage including cargo, liability, and physical damage",
      "Revenue per truck per mile metrics showing operational efficiency",
    ],
    typicalDSCR: "1.20x - 1.35x",
    typicalEquityInjection: "15% - 20%",
    avgTermYears: "10 years",
    sbaPopularity: "Medium",
    keyInsight:
      "Trucking is one of those industries where the math looks great on paper until you factor in equipment depreciation and fuel swings. The owner-operators who build real businesses are the ones who graduate from driving trucks to managing routes, drivers, and maintenance schedules. Lenders want to see that you're building a company, not buying yourself a job behind the wheel.",
    relatedEpisodes: [
      "the-year-of-discipline-lol-19",
      "do-interest-rates-really-matter-lol-13",
    ],
    relatedArticles: [
      "100-financing-for-business-expansion",
      "business-loans-with-bad-credit-what-you-need-to-know",
    ],
    image: "/images/industry/transportation.webp",
    accentColor: "crimson",
  },

  // ─── 10. Retail ──────────────────────────────────────────────────────
  {
    slug: "retail",
    name: "Retail",
    shortName: "Retail",
    naicsRange: "441110-453998",
    typicalLoanRange: "$100,000 - $2,000,000",
    typicalDealStructure:
      "Retail SBA deals include acquisitions of established stores, inventory financing, and leasehold improvement buildouts. E-commerce hybrid models are increasingly common but pure online-only businesses face more scrutiny. Inventory-heavy businesses require careful working capital structuring since SBA loans don't typically finance revolving inventory needs well. Owner-occupied retail real estate acquisitions via SBA 504 are strong deals when the location has proven foot traffic.",
    commonChallenges: [
      "E-commerce competition continues to compress margins for brick-and-mortar retailers",
      "Inventory management and seasonal buying cycles tie up significant working capital",
      "Lease terms and location quality are critical — a bad location cannot be fixed with better operations",
      "Consumer spending is cyclical and sensitive to economic downturns",
      "Shrinkage, returns, and obsolete inventory erode margins beyond what P&L statements show",
    ],
    whatLendersLookFor: [
      "Retail management experience with demonstrated understanding of inventory turns and margins",
      "Prime location with favorable lease terms (at least 10 years remaining with options)",
      "Omnichannel presence — lenders prefer businesses with both physical and online revenue streams",
      "Healthy inventory turnover ratios compared to industry benchmarks",
      "Stable same-store sales growth (not just new location expansion masking decline)",
      "Clear differentiation from e-commerce competitors — why do customers come to the store?",
    ],
    typicalDSCR: "1.20x - 1.35x",
    typicalEquityInjection: "10% - 20%",
    avgTermYears: "10 years",
    sbaPopularity: "Medium",
    keyInsight:
      "Retail is the industry where lenders have gotten the most cautious over the past decade, and honestly, for good reason. The deals that still work are the ones where there's a real reason people walk through the door — specialty products, expert service, community connection. If your retail acquisition pitch is competing on price with Amazon, that's not a business plan, that's a countdown clock.",
    relatedEpisodes: [
      "acquisition-war-room-lol-9",
      "why-equity-not-cash-flow-makes-or-breaks-sba-deals-lol-20",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "5-myths-about-sba-loans-every-founder-should-know",
    ],
    image: "/images/industry/retail.webp",
    accentColor: "burgundy",
  },

  // ─── 11. Childcare & Daycare ─────────────────────────────────────────
  {
    slug: "childcare-daycare",
    name: "Childcare & Daycare",
    shortName: "Childcare",
    naicsRange: "624410-624410",
    typicalLoanRange: "$200,000 - $3,000,000",
    typicalDealStructure:
      "Childcare SBA deals are acquisitions of licensed facilities, often including real estate since purpose-built childcare centers have limited alternative use. SBA 504 loans are popular for facility acquisition and buildout because of the heavy real estate and leasehold improvement costs. Startup childcare centers are more viable than startups in most other SBA industries because of strong demand, but they still require extensive licensing approval timelines that can delay loan closings by months.",
    commonChallenges: [
      "State licensing requirements are extensive and vary significantly — ratios, square footage, staffing credentials",
      "Staff turnover in childcare is among the highest of any industry due to low wages relative to responsibility",
      "Enrollment fluctuations — summer and holiday periods often see significant revenue dips",
      "Liability exposure and insurance costs are high given the nature of caring for children",
      "Subsidy and government program reimbursement delays can create cash flow gaps",
    ],
    whatLendersLookFor: [
      "Active state childcare license with clean inspection history (no substantiated complaints)",
      "Minimum 3 years of childcare center management experience (not just teaching experience)",
      "Enrollment waitlist demonstrating demand exceeding current capacity",
      "Staff retention plan and wage competitiveness analysis for the local market",
      "Facility compliance with all ADA, fire code, and state childcare-specific building requirements",
      "Diversified revenue — mix of private pay, employer-sponsored, and subsidy enrollment",
    ],
    typicalDSCR: "1.20x - 1.35x",
    typicalEquityInjection: "10% - 20%",
    avgTermYears: "10-25 years",
    sbaPopularity: "High",
    keyInsight:
      "Childcare is one of the most recession-resistant SBA industries because parents need care whether the economy is booming or busting. The demand is real — most quality centers have waitlists. The challenge is the operations side: staffing ratios are mandated by law, wages are the biggest line item, and turnover is constant. The borrowers who thrive are the ones who invest in their staff, not just their facility.",
    relatedEpisodes: [
      "acquisition-war-room-lol-9",
      "the-year-of-discipline-lol-19",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "why-startups-get-denied-loans-and-what-to-do-instead",
    ],
    image: "/images/industry/childcare.webp",
    accentColor: "teal",
  },

  // ─── 12. Home Services ───────────────────────────────────────────────
  {
    slug: "home-services",
    name: "Home Services",
    shortName: "Home Services",
    naicsRange: "238220-561790",
    typicalLoanRange: "$100,000 - $2,000,000",
    typicalDealStructure:
      "Home services SBA deals — HVAC, plumbing, electrical, landscaping, pest control — are typically acquisitions of established route-based or service-area businesses. These deals are valued primarily on recurring revenue (service agreements, maintenance contracts) and the customer database. Equipment is usually a small portion of the purchase price relative to goodwill. SBA 7(a) is the dominant loan type since most home services businesses operate from leased commercial space or the owner's property.",
    commonChallenges: [
      "Seasonal revenue swings — HVAC and landscaping businesses can see 40-60% revenue variance by quarter",
      "Key technician dependency — losing 1-2 senior technicians can cripple service capacity",
      "Licensing and bonding requirements vary by state and trade, complicating multi-state operations",
      "Customer acquisition costs are rising as digital marketing becomes more competitive",
      "Route density and geographic coverage efficiency directly impact profitability",
    ],
    whatLendersLookFor: [
      "Relevant trade license (master plumber, HVAC contractor, electrical license) in good standing",
      "Recurring service agreement revenue as a percentage of total revenue (higher is better)",
      "Customer retention rate and average customer lifetime value",
      "Fleet condition and maintenance records for service vehicles",
      "Stable or growing service call volume over trailing 12 months",
      "Online reputation — Google reviews and ratings have become a real underwriting data point",
    ],
    typicalDSCR: "1.20x - 1.35x",
    typicalEquityInjection: "10% - 15%",
    avgTermYears: "10 years",
    sbaPopularity: "High",
    keyInsight:
      "Home services is the darling of SBA acquisition lending right now, and for good reason. Recurring revenue, essential services, aging housing stock that guarantees demand, and consolidation opportunities everywhere. The play is buying a business with 200 maintenance agreements and scaling it to 500. If you're looking at a home services deal and the seller has zero recurring revenue — just one-off service calls — price it accordingly.",
    relatedEpisodes: [
      "acquisition-war-room-lol-9",
      "seller-notes-deep-dive-lol-15",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "what-is-my-business-worth-a-step-by-step-valuation-guide-for-small-business-owners",
    ],
    image: "/images/industry/fitness.webp",
    accentColor: "orange",
  },

  // ─── 13. Gas Stations & Convenience Stores ───────────────────────────
  {
    slug: "gas-stations-convenience-stores",
    name: "Gas Stations & Convenience Stores",
    shortName: "Gas Stations",
    naicsRange: "447110-447190",
    typicalLoanRange: "$500,000 - $5,000,000",
    typicalDealStructure:
      "Gas station SBA deals almost always include real estate, making them natural SBA 504 candidates. The business valuation must separate fuel margins (typically razor-thin at 2-5 cents per gallon) from inside store sales (where the real profit is). Branded stations (Shell, BP, Chevron) carry supplier agreements that dictate fuel pricing, tank maintenance, and signage requirements. Unbranded stations offer more flexibility but require stronger independent marketing. Underground storage tank (UST) compliance is a critical deal element.",
    commonChallenges: [
      "Environmental liability from underground storage tanks is the single biggest deal-killer in this industry",
      "Fuel margins are extremely thin and largely outside the operator's control",
      "Branded supplier agreements restrict operational flexibility and can require expensive upgrades",
      "Rising EV adoption is creating long-term uncertainty about fuel-dependent revenue models",
      "Lottery, tobacco, and alcohol licensing transfers add bureaucratic layers to closings",
    ],
    whatLendersLookFor: [
      "Clean Phase I and Phase II environmental reports — no exceptions",
      "UST compliance documentation including tank age, testing records, and insurance",
      "Inside sales (convenience store) revenue and margins as a percentage of total business",
      "Fuel supply agreement terms and branded/unbranded status with pricing structure",
      "Minimum 2 years of gas station or convenience store management experience",
      "Traffic count data and competitive market analysis for the location",
    ],
    typicalDSCR: "1.25x - 1.40x",
    typicalEquityInjection: "15% - 25%",
    avgTermYears: "25 years",
    sbaPopularity: "High",
    keyInsight:
      "Gas stations are a phenomenal SBA deal when you understand that you're really buying a convenience store that happens to sell fuel. The fuel gets people onto the lot — the inside sales pay the bills. The borrowers who crush it are the ones who optimize the c-store layout, add food service, and drive average ticket size up. And if those tanks aren't compliant, walk away. Environmental cleanup can cost more than the entire business.",
    relatedEpisodes: [
      "why-equity-not-cash-flow-makes-or-breaks-sba-deals-lol-20",
      "acquisition-war-room-lol-9",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "100-financing-for-business-expansion",
    ],
    image: "/images/industry/gas-stations.webp",
    accentColor: "gold",
  },

  // ─── 14. Veterinary Practices ────────────────────────────────────────
  {
    slug: "veterinary",
    name: "Veterinary Practices",
    shortName: "Veterinary",
    naicsRange: "541940-541940",
    typicalLoanRange: "$300,000 - $3,000,000",
    typicalDealStructure:
      "Veterinary practice SBA deals mirror medical practice acquisitions: high goodwill, relationship-driven revenue, and a heavy emphasis on patient (pet) retention during transition. Corporate consolidation (Mars/VCA, NVA) has driven up multiples, making SBA deals more competitive. Single-doctor practices are the most common SBA acquisition targets since they fall below corporate acquisition thresholds. Equipment costs (digital radiology, surgical suites, dental units) are significant but well-collateralized.",
    commonChallenges: [
      "Corporate consolidators have inflated practice valuations beyond what SBA cash flow can support",
      "Veterinary school debt loads ($200K+) reduce borrowers' personal financial capacity",
      "Client retention risk is high when the selling veterinarian has deep personal relationships with pet owners",
      "Specialized equipment (ultrasound, digital X-ray, surgical lasers) requires significant capital",
      "Emergency and specialty referral revenue mix can mask the profitability of core general practice services",
    ],
    whatLendersLookFor: [
      "DVM degree with active state veterinary license and DEA registration",
      "Minimum 2-3 years of clinical experience (new graduates rarely qualify for acquisitions)",
      "Patient retention plan with seller's willingness to stay on during transition (3-12 months)",
      "Active patient count trends — growing practices command higher multiples and lower risk",
      "Revenue per DVM and average transaction value benchmarked against industry standards",
      "Clean practice — no malpractice claims, board complaints, or controlled substance violations",
    ],
    typicalDSCR: "1.25x - 1.45x",
    typicalEquityInjection: "10% - 15%",
    avgTermYears: "10 years",
    sbaPopularity: "High",
    keyInsight:
      "Vet practices are the healthcare play that every SBA lender loves right now. Pet spending is recession-resistant, recurring revenue is built into the model (annual wellness, chronic conditions), and the demand for veterinary services continues to outpace supply. The gotcha? Corporate consolidators have pushed valuations to 6-8x EBITDA in some markets, which means SBA buyers need to look at practices the corporates don't want — rural locations, mixed-animal practices, and single-doctor operations.",
    relatedEpisodes: [
      "seller-notes-deep-dive-lol-15",
      "why-equity-not-cash-flow-makes-or-breaks-sba-deals-lol-20",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "what-is-my-business-worth-a-step-by-step-valuation-guide-for-small-business-owners",
    ],
    image: "/images/industry/veterinary.webp",
    accentColor: "burgundy",
  },

  // ─── 15. Laundromats & Car Washes ────────────────────────────────────
  {
    slug: "laundromats-car-washes",
    name: "Laundromats & Car Washes",
    shortName: "Laundromats & Car Washes",
    naicsRange: "812310-811192",
    typicalLoanRange: "$200,000 - $2,500,000",
    typicalDealStructure:
      "Laundromats and car washes are equipment-intensive SBA deals where the machinery is the business. These are attractive because they can be semi-absentee operations with relatively low staffing needs. SBA 504 loans are common when real estate is included. Laundromat valuations are driven by equipment age, utility costs, and coin/card revenue per square foot. Car wash deals are evaluated on wash count, average revenue per vehicle, and membership subscription penetration. Both industries benefit from predictable, cash-heavy revenue streams.",
    commonChallenges: [
      "Equipment replacement cycles are expensive — a full laundromat retool can cost $200K-$500K",
      "Utility costs (water, gas, electricity) are the largest variable expense and subject to rate increases",
      "Location dependency is extreme — these businesses cannot be moved without losing their customer base",
      "Cash-heavy operations (especially laundromats) create bookkeeping and tax documentation challenges",
      "Water reclamation and environmental compliance requirements for car washes vary by municipality",
    ],
    whatLendersLookFor: [
      "Equipment age and condition report — machines older than 10 years are discounted heavily",
      "Utility cost trending over 24+ months to validate expense projections",
      "Lease terms with at least 10-15 years remaining (these businesses are location-dependent)",
      "Revenue documentation beyond tax returns — card payment data, vending machine reports, water meter correlation",
      "Real estate appraisal (if included) with consideration of limited alternative use",
      "Car wash membership/subscription revenue as a percentage of total (higher is better for predictability)",
    ],
    typicalDSCR: "1.20x - 1.35x",
    typicalEquityInjection: "10% - 20%",
    avgTermYears: "10-25 years",
    sbaPopularity: "Medium",
    keyInsight:
      "Laundromats and car washes are the passive income darlings of SBA Twitter, but the reality is more nuanced. Yes, the recurring revenue is great and the staffing requirements are low. But utility costs can eat you alive, the equipment is a depreciating asset that needs constant maintenance, and the revenue documentation on older cash-heavy laundromats can be a nightmare for underwriting. The best deals in this space are the ones where the seller has already modernized to card/app payment systems — clean data makes clean loans.",
    relatedEpisodes: [
      "acquisition-war-room-lol-9",
      "do-interest-rates-really-matter-lol-13",
    ],
    relatedArticles: [
      "sba-business-acquisition-what-lenders-really-expect",
      "5-myths-about-sba-loans-every-founder-should-know",
    ],
    image: "/images/industry/laundromats.webp",
    accentColor: "teal",
  },
];
