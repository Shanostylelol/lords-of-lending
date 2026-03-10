export const SITE_CONFIG = {
  name: "Lords of Lending",
  tagline: "Purveyors of Honest Capital",
  description:
    "Lords of Lending connects small businesses with SBA loans and funding. Expert help, clear steps, and fast approvals to fuel your business growth.",
  url: "https://lordsoflending.com",
  email: "shane@lordsoflending.com",
  linkedin: "https://www.linkedin.com/company/lords-of-lending",
  youtube: "https://www.youtube.com/@LordsofLending",
  rss: "https://feeds.buzzsprout.com/2315806.rss",
  loanAppUrl: "/loans/loan-application",
} as const;

export const NAV_LINKS = [
  { label: "Brokers", href: "/brokers" },
  { label: "Blog", href: "/blog" },
  { label: "Podcast", href: "/podcast" },
  { label: "Learn", href: "https://learn.lordsoflending.com", external: true, glow: true },
  { label: "Contact", href: "/contact" },
] as const;

export const TEAM = [
  {
    name: "Shane Pierson",
    title: "Founder",
    bankTitle: "SBA National Sales Manager",
    phone: "805-551-7184",
    email: "shane@lordsoflending.com",
    bankEmail: "spierson@communitybankshares.com",
    headshot: "/images/headshots/shane-pierson.webp",
    booking:
      "https://outlook.office.com/bookwithme/user/ae91cc1223e04264968da1fde99c4e35@communitybankshares.com/meetingtype/qeaRhrmQU0qOFpNOL63ZVQ2?anonymous&ep=mcard",
  },
  {
    name: "Stephanie Castagnier Dunn",
    title: "Founder",
    bankTitle: "EVP Chief SBA Revenue Officer",
    phone: "847-477-7546",
    email: "steph@lordsoflending.com",
    bankEmail: "sdunn@communitybankshares.com",
    headshot: "/images/headshots/stephanie-dunn.webp",
    booking:
      "https://outlook.office.com/bookwithme/user/537429cac454431c94eb1185d210705d@communitybankshares.com?anonymous&ep=pcard",
  },
  {
    name: "Brian Congelliere",
    title: "Founder",
    bankTitle: "VP SBA Business Development Officer",
    phone: "805-807-7080",
    email: "brian@lordsoflending.com",
    bankEmail: "bcongelliere@communitybankshares.com",
    headshot: "/images/headshots/brian-congelliere.webp",
    booking:
      "https://outlook.office.com/bookwithme/user/ee18c77d1eb64e12bfd7da52508fd7fb@communitybankshares.com?anonymous&ep=pcard",
  },
] as const;

export const STATS = [
  { value: "$450+", label: "Million", description: "in funding delivered" },
  { value: "425+", label: "Businesses", description: "funded nationwide" },
  { value: "55+", label: "Years", description: "of lending expertise" },
] as const;

export const PROGRAM_BASICS = [
  "Loans up to 5 million, nationwide",
  "Up to 90% financing on business acquisitions",
  "Up to 100%+ LTV on real estate purchases and refinances",
  "Loan Terms from 10 to 25 years",
  "Rates from WSJ Prime +1% to 3%",
  "Funding in 45 to 60 days",
  "Referral fee schedule provided upon request",
  "Business debt consolidation and working capital loans",
] as const;

export const ELIGIBLE_USES = [
  { label: "Acquisition & Expansion", icon: "/images/icons/expansion.png" },
  { label: "Construction Loans", icon: "/images/icons/construction.png" },
  { label: "Partner Buyout", icon: "/images/icons/buyout.png" },
  { label: "Succession Planning", icon: "/images/icons/plan.png" },
  { label: "Refinance Business Debt", icon: "/images/icons/refi.png" },
] as const;

export const REQUIRED_DOCS = [
  { text: "Completed loan application", conditional: false },
  { text: "Last 3 years business tax returns", conditional: false },
  { text: "YTD business financials", conditional: false },
  { text: "Business debt schedule", conditional: false },
  { text: "Last 3 years personal tax returns", conditional: false },
  { text: "Purchase agreement", conditional: true },
  { text: "Copies of notes to be refinanced", conditional: true },
  { text: "Business plan", conditional: true },
] as const;

export const PORTFOLIO_LOGOS = [
  { name: "A1A Surveying Services", image: "/images/portfolio/a1a-surveying.png", url: "https://www.a1asurveying.com/" },
  { name: "Artificial Grass Liquidators", image: "/images/portfolio/agl.webp" },
  { name: "Faithful Heritage Holdings", image: "/images/portfolio/fhh.webp", url: "https://faithfulheritageholdings.com/" },
  { name: "Hampton by Hilton", image: "/images/portfolio/hampton.png" },
  { name: "Linkflow", image: "/images/portfolio/linkflow.webp" },
  { name: "Blue Edge", image: "/images/portfolio/blue-edge.png" },
  { name: "FedEx Routes", image: "/images/portfolio/fedex.png" },
  { name: "glo", image: "/images/portfolio/glo.png" },
  { name: "Unite Digital", image: "/images/portfolio/unite-digital.png" },
  { name: "Wireless Buybacks", image: "/images/portfolio/wireless-buybacks.png" },
  { name: "Choice Hotels", image: "/images/portfolio/choice-hotels.png" },
  { name: "Belmar Lanes", image: "/images/portfolio/belmar-lanes.png" },
  { name: "Ruth's Chris", image: "/images/portfolio/ruths-chris.webp" },
  { name: "Zelectric", image: "/images/portfolio/zelectric.png" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Not only did [Shane] provide professional and very prompt service/feedback, but also offered reassurance and solutions when we encountered roadblocks that seemed almost impossible to navigate through. I have to truly say he went above and beyond his duties to see the acquisition to the end and I can't recommend his services enough!",
    name: "Shawn Kleotzer",
    title: "Owner and President",
    company: "A1A Surveying Services",
    image: "/images/portfolio/a1a-surveying.png",
    personImage: "/images/testimonials/shawn-kleotzer.png",
    url: "https://www.a1asurveying.com/",
  },
  {
    quote:
      "Stephany is the most knowledgeable banker I have used! I have done 5 SBA loans with her. [If] you call her, she is always ready to help and guide you through every point of the process. When you have the right person, it makes the loan process so easy. Stephany is that person\u2026 She is on your side! You don\u2019t get that personalized treatment anywhere else.",
    name: "Ruth Thornquest",
    title: "CEO",
    company: "Faithful Heritage Holdings",
    image: "/images/portfolio/fhh.webp",
    personImage: "/images/testimonials/ruth-thornquest.webp",
    url: "https://faithfulheritageholdings.com/",
  },
] as const;

export const PODCAST_SUBSCRIBE_LINKS = [
  { platform: "Apple Podcasts", url: "https://podcasts.apple.com/podcast/id1798717410", color: "bg-[var(--color-dark)]" },
  { platform: "Spotify", url: "https://open.spotify.com/show/6P25i3rDng6aMqlijl9imE", color: "bg-[#1DB954]" },
  { platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL3dbCeEWNxdP97JpS_-RcHy2gDFTFtG5J", color: "bg-[#FF0000]" },
  { platform: "Amazon Music", url: "https://music.amazon.com/podcasts/8a74a550-e1ac-47e5-ac1f-c4e735b51b83", color: "bg-[#25d1da]" },
  { platform: "iHeartRadio", url: "https://www.iheart.com/podcast/269-lords-of-lending-269030265/", color: "bg-[#C6002B]" },
  { platform: "Overcast", url: "https://overcast.fm/itunes1798717410", color: "bg-[#FC7E0F]" },
] as const;

export const FAQ = [
  {
    q: "Is Lords of Lending a bank or SBA lender?",
    a: "No. Lords of Lending is not a bank, credit union, or SBA lender. We are a platform that connects you directly with an SBA 7(a) lending team.",
  },
  {
    q: "What does Lords of Lending do?",
    a: "We provide education, tools, and a direct connection to an experienced SBA 7(a) lender who can guide you through the loan process\u2014from prequalification to closing.",
  },
  {
    q: "Who actually funds my SBA 7(a) loan?",
    a: "Your loan is underwritten, approved, and funded by an SBA-authorized lender that we connect you with\u2014not by Lords of Lending.",
  },
  {
    q: "Why use Lords of Lending instead of going directly to a bank?",
    a: "We simplify the process, ensure your application is fully prepared, and match you with a lender who specializes in SBA 7(a) loans for your type of business and transaction.",
  },
  {
    q: "Do you charge for connecting me to a lender?",
    a: "No. There\u2019s no upfront cost to use the Lords of Lending portal. If your loan closes, the lender compensates us for introducing and preparing the deal.",
  },
] as const;

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: "blog" | "podcast";
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-do-if-you-cant-pay-your-business-loan",
    title: "What to Do If You Can\u2019t Pay Your Business Loan",
    date: "2025-07-09",
    excerpt: "Struggling with loan payments? Learn how to restructure, refinance, or negotiate your way out of a tough spot.",
    image: "/images/blog/cant-pay-loan.webp",
    category: "blog",
  },
  {
    slug: "sba-business-acquisition-what-lenders-really-expect",
    title: "How to Buy a Business with an SBA Loan",
    date: "2025-07-09",
    excerpt: "Learn how to finance a business purchase with an SBA loan and what lenders really look for.",
    image: "/images/blog/lenders-expect.webp",
    category: "blog",
  },
  {
    slug: "business-loans-with-bad-credit-what-you-need-to-know",
    title: "Business Loans with Bad Credit: What You Need to Know",
    date: "2025-07-08",
    excerpt: "Bad credit doesn\u2019t mean no funding\u2014but it does mean tougher terms. Here\u2019s how to navigate it.",
    image: "/images/blog/bad-credit.webp",
    category: "blog",
  },
  {
    slug: "5-myths-about-sba-loans-every-founder-should-know",
    title: "5 Myths About SBA Loans Every Founder Should Know",
    date: "2025-07-08",
    excerpt: "Think SBA loans are fast, easy, or backed by the government? Think again.",
    image: "/images/blog/five-myths.webp",
    category: "blog",
  },
  {
    slug: "why-startups-get-denied-loans-and-what-to-do-instead",
    title: "Why Startups Get Denied Loans\u2014and What to Do Instead",
    date: "2025-07-08",
    excerpt: "Most startups can\u2019t get loans because banks fund traction, not ideas. Here\u2019s what to do.",
    image: "/images/blog/startups-denied.webp",
    category: "blog",
  },
  {
    slug: "what-is-my-business-worth-a-step-by-step-valuation-guide-for-small-business-owners",
    title: "What Is My Business Worth? A Simple Valuation Guide",
    date: "2025-06-30",
    excerpt: "Learn how to calculate your business\u2019s value using real-world methods that buyers and lenders trust.",
    image: "/images/blog/business-worth.webp",
    category: "blog",
  },
  {
    slug: "the-lie-we-bought-why-time-management-isnt-enough-in-sba-lending",
    title: "Attention Trumps Time in SBA Lending",
    date: "2025-06-30",
    excerpt: "Efficient lenders lose deals when they focus on time over attention. Here\u2019s the shift that wins.",
    image: "/images/blog/attention-leverage.webp",
    category: "blog",
  },
  {
    slug: "100-financing-for-business-expansion",
    title: "How to Get 100% SBA Financing for Business Expansion",
    date: "2025-06-11",
    excerpt: "Learn how to qualify for 100% SBA 7(a) financing to grow your existing business.",
    image: "/images/blog/sba-financing.webp",
    category: "blog",
  },
];

export const PODCAST_EPISODES = [
  { slug: "2026-look-ahead-and-prediction-lol-18", title: "2026 Look Ahead and Predictions | LoL #18", date: "2026-02-04", excerpt: "Economic forecast for small businesses in 2026, increased borrowing, and reduced equity trends.", buzzsproutId: "18585787" },
  { slug: "2025-lessons-and-reflections-lol-17", title: "2025 Lessons and Reflections | LoL #17", date: "2026-01-28", excerpt: "What happens when a business owner drops hints about selling\u2014or buying.", buzzsproutId: "18585460" },
  { slug: "when-a-business-owner-asks-you-to-dance-lol-16", title: "When a Business Owner Asks You to Dance | LoL #16", date: "2025-10-08", excerpt: "Reading signals from business owners and navigating the dance of deal-making.", buzzsproutId: "17977047" },
  { slug: "seller-notes-deep-dive-lol-15", title: "Seller Notes Deep Dive | LoL #15", date: "2025-10-03", excerpt: "Deep dive on seller notes, liquidity, and smarter deal structuring.", buzzsproutId: "17947301" },
  { slug: "building-a-successful-restaurant-lol-14", title: "Building a Successful Restaurant | LoL #14", date: "2025-09-10", excerpt: "Real-world challenges, margins, and lending strategies for restaurant acquisitions.", buzzsproutId: "17819497" },
  { slug: "do-interest-rates-really-matter-lol-13", title: "Do Interest Rates Really Matter? | LoL #13", date: "2025-09-03", excerpt: "How business owners can build trust and credibility through lending relationships.", buzzsproutId: "17772477" },
  { slug: "reputation-with-stuart-faught-lol-12", title: "Reputation with Stuart Faught | LoL #12", date: "2025-08-21", excerpt: "Building trust and credibility through real-world business experience.", buzzsproutId: "17711628" },
  { slug: "ask-the-experts-lol-11", title: "Ask the Experts | LoL #11", date: "2025-08-14", excerpt: "Shane, Stephanie, and Brian answer listener questions about SBA lending.", buzzsproutId: "17667713" },
  { slug: "ennobled-by-fire-lol-10", title: "Ennobled by Fire | LoL #10", date: "2025-06-25", excerpt: "The defining struggles that forged the Lords of Lending team.", buzzsproutId: "17355069" },
  { slug: "acquisition-war-room-lol-9", title: "Acquisition War Room | LoL #9", date: "2025-06-18", excerpt: "From trade shows to takeaways\u2014how lenders can use AI and strategy.", buzzsproutId: "17355014" },
  { slug: "insights-from-the-road-lol-8", title: "Insights from the Road | LoL #8", date: "2025-05-21", excerpt: "Field insights from lenders navigating real deals on the ground.", buzzsproutId: "17199145" },
  { slug: "meet-your-lords-lol-7", title: "Meet Your Lords | LoL #7", date: "2025-05-07", excerpt: "Meet the minds behind Lords of Lending\u2014Shane, Stephanie & Brian.", buzzsproutId: "17112379" },
  { slug: "bomb-goes-off-on-sba-lol-6", title: "Bomb Goes Off on SBA | LoL #6", date: "2025-04-30", excerpt: "SBA changes shake small business lending\u2014the Lords break it down.", buzzsproutId: "17067883" },
  { slug: "broke-or-billionaire-by-2030-lol-5", title: "Broke or Billionaire by 2030 | LoL #5", date: "2025-04-15", excerpt: "Bold predictions and wealth-building strategies for entrepreneurs.", buzzsproutId: "16900509" },
  { slug: "buying-and-scaling-a-business-lol-4", title: "Buying and Scaling a Business | LoL #4", date: "2025-04-01", excerpt: "How to acquire and scale a business with SBA financing.", buzzsproutId: "16818617" },
  { slug: "you-are-not-urgent-enough-lol-3", title: "You Are Not Urgent Enough | LoL #3", date: "2025-03-15", excerpt: "Why urgency is the missing ingredient in most lending pipelines.", buzzsproutId: "16776392" },
  { slug: "podcast-lets-talk-tariffs", title: "Let\u2019s Talk Tariffs", date: "2025-03-01", excerpt: "How tariffs impact small businesses and lending decisions.", buzzsproutId: "16691774" },
  { slug: "the-rise-of-automated-lending", title: "The Rise of Automated Lending", date: "2025-02-15", excerpt: "AI, fintech, and the future of small business lending.", buzzsproutId: "16732507" },
];
