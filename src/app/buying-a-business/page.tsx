import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, SUPPORTING_ARTICLES, TEAM } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { QuickStartCards } from "@/components/sections/quick-start-cards";
import { ToolQuickAccess } from "@/components/sections/tool-quick-access";
import { JourneyProgress } from "@/components/sections/journey-progress";

export const metadata: Metadata = {
  title: "How to Buy a Business — The Complete Guide",
  description:
    "A step-by-step guide to buying a business, from readiness assessment through financing, closing, and your first 30 days as an owner. Backed by $450M+ in SBA lending experience.",
  alternates: { canonical: `${SITE_CONFIG.url}/buying-a-business` },
  keywords: [
    "buy a business",
    "how to buy a business",
    "business acquisition guide",
    "SBA loan business acquisition",
    "buying a business checklist",
    "business acquisition financing",
  ],
};

const PHASES = [
  {
    phase: "01",
    title: "Are You Ready?",
    description: "Self-assessment, financial readiness, and the questions smart buyers ask before they search.",
    articles: [
      "are-you-ready-to-buy-a-business",
      "business-acquisition-self-assessment",
    ],
  },
  {
    phase: "02",
    title: "Find the Right Business",
    description: "Where to look, how to evaluate listings, and when to use a broker versus going direct.",
    articles: [
      "how-to-find-businesses-for-sale",
      "business-brokers-vs-direct-search",
    ],
  },
  {
    phase: "03",
    title: "Due Diligence",
    description: "Verify everything. Financials, legal, operations, customers, and employees — before you sign.",
    articles: [
      "due-diligence-checklist-buying-a-business",
      "financial-due-diligence-for-business-buyers",
    ],
  },
  {
    phase: "04",
    title: "Valuation",
    description: "What the business is actually worth — from both the buyer's and the lender's perspective.",
    articles: [
      "how-to-value-a-small-business-for-acquisition",
    ],
  },
  {
    phase: "05",
    title: "Financing",
    description: "SBA 7(a) loan structure, down payment strategies, and what lenders need to approve your deal.",
    articles: [
      "financing-your-business-acquisition-with-sba",
      "equity-injection-down-payment-strategies",
    ],
  },
  {
    phase: "06",
    title: "Negotiation & Closing",
    description: "From your letter of intent through closing day — every step, every document, every deadline.",
    articles: [
      "letter-of-intent-loi-guide-business-buyers",
      "closing-on-a-business-what-to-expect",
    ],
  },
  {
    phase: "07",
    title: "Your First 30 Days",
    description: "Stabilize the business, earn your team's trust, and set up systems that scale.",
    articles: [
      "first-30-days-after-buying-a-business",
      "managing-employees-after-acquisition",
      "financial-systems-setup-post-acquisition",
    ],
  },
  {
    phase: "08",
    title: "Grow & Expand",
    description: "From stabilization to scale — and knowing when it's time for your next move.",
    articles: [
      "growing-your-newly-acquired-business",
      "when-to-refinance-or-expand-after-acquisition",
    ],
  },
];

export default function BuyingABusinessPage() {
  const buyingArticles = SUPPORTING_ARTICLES.filter(
    (a) => a.cluster === "buying-a-business"
  );

  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-dark)] pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Subtle pattern overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ctext x='30' y='35' text-anchor='middle' font-size='20' fill='white' font-family='serif'%3E%E2%9A%9C%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 md:px-8">
          <p className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]">
            The Business Buyer&apos;s Journey
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            How to Buy
            <br />
            <span className="text-[var(--color-gold)]">a Business</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            From &ldquo;Am I ready?&rdquo; to &ldquo;I just closed&rdquo; — a complete,
            step-by-step guide built by a team that has funded over $450 million
            in SBA loans. No theory. No fluff. Just what works.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/loans/loan-application" className="px-8 py-4 text-base">
              Apply for SBA Financing
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/30 px-8 py-4 text-base text-white hover:bg-[var(--color-surface)]/10 hover:text-white"
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* ── NEW: Quick Start Cards — "Where Should I Start?" ── */}
      <QuickStartCards />

      {/* ── NEW: Tool Quick Access — "Free Tools to Help You Plan" ── */}
      <ToolQuickAccess />

      {/* ── NEW: Journey Progress — Visual 8-step progress bar ── */}
      <JourneyProgress />

      {/* ── Journey Map ── */}
      <section className="bg-[var(--color-dark)] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Your Acquisition Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
            Eight phases. Sixteen deep-dive articles. Everything you need to
            buy a business with confidence.
          </p>

          <div className="mt-12 space-y-6">
            {PHASES.map((phase) => (
              <div
                key={phase.phase}
                id={`phase-${phase.phase}`}
                className="scroll-mt-24 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-gold)]/30"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-gold)]/40">
                    {phase.phase}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                      {phase.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      {phase.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {phase.articles.map((slug) => {
                        const article = buyingArticles.find(
                          (a) => a.slug === slug
                        );
                        if (!article) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/${slug}`}
                            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 transition-all hover:border-[var(--color-gold)]/40 hover:text-white"
                          >
                            <svg
                              className="h-3.5 w-3.5 shrink-0 text-[var(--color-gold)]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <span className="line-clamp-1">
                              {article.title}
                            </span>
                            <span className="shrink-0 text-xs text-white/30">
                              {article.readingTime} min
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        className="relative px-6 py-16 md:px-8 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #181516 0%, #8B5E34 50%, #C4883A 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ctext x='30' y='35' text-anchor='middle' font-size='20' fill='white' font-family='serif'%3E%E2%9A%9C%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Ready to Make Your Move?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Our team has closed over 425 business acquisitions with SBA financing.
            Whether you&apos;re evaluating your first deal or ready to apply,
            we&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/loans/loan-application" className="px-8 py-4 text-base">
              Apply for SBA Financing
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/30 px-8 py-4 text-base text-white hover:bg-white/10 hover:text-white"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="bg-[var(--color-dark)] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Your Guides
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
            Every article in this series is written by one of our founders — active SBA
            lenders who close deals every week.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src={member.headshot}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--color-gold)]">
                  {member.bankTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="border-t border-white/10 bg-[var(--color-dark)] px-6 py-8 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs leading-relaxed text-white/30">
            This content is for educational purposes only. It is not legal,
            financial, or investment advice. We strongly recommend consulting
            with a qualified attorney, CPA, and financial advisor before making
            any business acquisition decisions. Lords of Lending is not a bank
            or lender — we connect you with SBA-authorized lending partners.
          </p>
        </div>
      </section>
    </main>
  );
}
