import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { softwareAppJsonLd, articleFaqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { DscrCalculator } from "@/components/tools/dscr-calculator";

export const metadata: Metadata = {
  title: "DSCR Calculator — Debt Service Coverage Ratio | Lords of Lending",
  description:
    "Free DSCR calculator for SBA loans. Calculate your Debt Service Coverage Ratio instantly, see if you meet SBA lender minimums, and learn how to improve your ratio.",
  alternates: { canonical: `${SITE_CONFIG.url}/tools/dscr-calculator` },
  openGraph: {
    title: "DSCR Calculator — Debt Service Coverage Ratio | Lords of Lending",
    description:
      "Free DSCR calculator for SBA loans. Calculate your Debt Service Coverage Ratio instantly and see if your deal qualifies.",
    url: `${SITE_CONFIG.url}/tools/dscr-calculator`,
    siteName: SITE_CONFIG.name,
    images: [{ url: "/images/supporting/art-of-sba-deal-structuring.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

const DSCR_FAQ = [
  {
    q: "What is a good DSCR for an SBA loan?",
    a: "Most SBA lenders require a minimum DSCR between 1.15x and 1.25x. A DSCR of 1.25x or higher is considered strong and gives lenders confidence that the business generates enough cash flow to comfortably cover its debt obligations with a margin of safety.",
  },
  {
    q: "What happens if my DSCR is below 1.0?",
    a: "A DSCR below 1.0 means the business does not generate enough income to cover its debt payments. This is a deal-killer for SBA lenders. You would need to either increase revenue, reduce operating expenses, restructure the debt to lower payments, or bring additional income sources into the calculation.",
  },
  {
    q: "Can add-backs really improve my DSCR?",
    a: "Yes. SBA lenders commonly accept add-backs such as the current owner's salary (which the new buyer would receive), one-time or non-recurring expenses, excessive owner perks, and depreciation or amortization. These adjustments reflect the true cash flow available to service debt.",
  },
  {
    q: "What is the difference between global DSCR and project DSCR?",
    a: "Project DSCR looks only at the cash flow and debt for the specific project being financed. Global DSCR includes all income sources and all debts of the borrower, including personal income, other businesses, and personal debts. Most SBA lenders evaluate both when underwriting a deal.",
  },
  {
    q: "How often should I recalculate my DSCR?",
    a: "You should recalculate your DSCR any time your financials change materially — quarterly at minimum during the loan process. If your revenue dips, expenses spike, or you take on new debt, your DSCR changes and could affect your loan approval. Proactive monitoring helps you stay ahead of lender concerns.",
  },
];

export default function DscrCalculatorPage() {
  return (
    <main id="main-content" className="bg-[var(--color-dark)]">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareAppJsonLd(
              "DSCR Calculator",
              "Free Debt Service Coverage Ratio calculator for SBA loans. Calculate your DSCR, check SBA lender minimums, and factor in add-backs.",
              `${SITE_CONFIG.url}/tools/dscr-calculator`
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleFaqJsonLd(DSCR_FAQ)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Tools", href: "/tools" },
              { name: "DSCR Calculator", href: "/tools/dscr-calculator" },
            ])
          ),
        }}
      />

      {/* Breadcrumb */}
      <section className="pt-28 md:pt-36">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-text-muted)]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[var(--color-border)]">/</li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
              <li aria-hidden="true" className="text-[var(--color-border)]">/</li>
              <li className="text-[var(--color-gold)]">DSCR Calculator</li>
            </ol>
          </nav>

          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            DSCR Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Calculate your Debt Service Coverage Ratio for free. See instantly whether your deal
            meets SBA lender minimums and learn how to strengthen your application.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <DscrCalculator />
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <article className="prose prose-invert max-w-none">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              What Is DSCR and Why Do Lenders Care?
            </h2>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              The Debt Service Coverage Ratio (DSCR) is one of the most critical metrics in
              commercial lending. It measures a business&apos;s ability to generate enough cash flow
              to cover its debt obligations. For SBA lenders, DSCR is a primary underwriting
              criterion because it directly answers the fundamental question: can this business pay
              back the loan?
            </p>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              A DSCR of 1.0 means the business generates exactly enough income to cover its debt
              payments with nothing left over. Anything below 1.0 means the business is losing money
              relative to its obligations. SBA lenders typically require a minimum DSCR between 1.15x
              and 1.25x, depending on the lender, the deal structure, and the overall risk profile
              of the transaction. Strong deals with experienced borrowers may get approved at 1.15x,
              while riskier transactions or newer businesses will need 1.25x or higher.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              How to Calculate DSCR
            </h2>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              The formula is straightforward:
            </p>
            <div className="my-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
              <p className="text-xl font-semibold text-white">
                DSCR = Net Operating Income / Annual Debt Service
              </p>
            </div>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              <strong className="text-white">Net Operating Income (NOI)</strong> is your business&apos;s
              total revenue minus all operating expenses, but <em>before</em> debt payments, income
              taxes, depreciation, and amortization. Think of it as the cash the business generates
              from operations that is available to service debt.
            </p>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              <strong className="text-white">Annual Debt Service</strong> includes all principal and
              interest payments due on business debt over a 12-month period. For SBA underwriting,
              this includes the proposed new SBA loan payment plus any existing business debt that
              will remain after closing. Some lenders also include personal obligations of the
              guarantor when calculating global DSCR.
            </p>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              For example, if a business generates $500,000 in NOI and has $400,000 in total annual
              debt payments, the DSCR would be $500,000 / $400,000 = 1.25x. This meets the standard
              SBA minimum and indicates the business generates 25% more income than it needs to cover
              debt.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              Common Add-Backs SBA Lenders Accept
            </h2>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              Add-backs are adjustments made to the business&apos;s reported income to reflect its
              true cash-generating ability. Lenders recognize that many small businesses run personal
              expenses through the company or have one-time costs that distort profitability. Common
              add-backs that SBA lenders accept include:
            </p>
            <ul className="mt-4 space-y-2 text-[var(--color-cream)]">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                <span>
                  <strong className="text-white">Owner&apos;s salary and compensation:</strong> The
                  current owner&apos;s W-2 wages, distributions, or draws that the new buyer will
                  receive as income.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                <span>
                  <strong className="text-white">One-time expenses:</strong> Legal fees from a prior
                  lawsuit, moving costs, or other non-recurring charges that won&apos;t continue
                  under new ownership.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                <span>
                  <strong className="text-white">Depreciation and amortization:</strong> Non-cash
                  expenses that reduce reported income but do not affect actual cash flow.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                <span>
                  <strong className="text-white">Excessive owner perks:</strong> Personal vehicle
                  leases, travel, meals, or other discretionary expenses run through the business.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                <span>
                  <strong className="text-white">Interest expense on debt being refinanced:</strong>{" "}
                  If the SBA loan will pay off existing high-interest debt, that interest expense
                  can be added back.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              These add-backs can dramatically change the picture. A business showing $200,000 in
              net income might have $150,000 in add-backs, giving it $350,000 in adjusted cash flow.
              This is why understanding add-backs is essential for both borrowers and originators when
              packaging SBA deals. For a deeper look at structuring these adjustments, see our guide on{" "}
              <Link
                href="/art-of-sba-deal-structuring"
                className="font-semibold text-[var(--color-gold)] hover:underline"
              >
                The Art of SBA Deal Structuring
              </Link>
              .
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              How to Improve Your DSCR
            </h2>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              If your DSCR is falling short of lender requirements, there are several strategies to
              improve it before submitting your application:
            </p>
            <ol className="mt-4 space-y-3 text-[var(--color-cream)] list-decimal list-inside">
              <li>
                <strong className="text-white">Increase NOI:</strong> Look for ways to boost revenue
                or reduce operating expenses before the loan application period. Even small
                improvements in margins can meaningfully shift DSCR.
              </li>
              <li>
                <strong className="text-white">Reduce debt payments:</strong> Pay off small balances,
                consolidate high-interest debt, or negotiate lower payments on existing obligations
                to reduce your annual debt service.
              </li>
              <li>
                <strong className="text-white">Extend the loan term:</strong> A longer amortization
                period reduces the monthly payment, which lowers annual debt service and increases
                DSCR. SBA 7(a) loans can go up to 25 years for real estate.
              </li>
              <li>
                <strong className="text-white">Increase the down payment:</strong> Putting more
                equity into the deal reduces the loan amount and therefore the annual debt service
                required.
              </li>
              <li>
                <strong className="text-white">Document all legitimate add-backs:</strong> Work with
                your CPA to identify every allowable adjustment. Many borrowers leave add-backs on
                the table because they don&apos;t know what qualifies.
              </li>
            </ol>

            <h2 className="mt-10 font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              Global DSCR vs. Project DSCR
            </h2>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              SBA lenders evaluate cash flow coverage at two levels, and understanding the difference
              is critical for deal preparation. <strong className="text-white">Project DSCR</strong>{" "}
              looks only at the income and debt associated with the specific business or project being
              financed. It answers the question: can <em>this business alone</em> cover the proposed
              loan payment?
            </p>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              <strong className="text-white">Global DSCR</strong> takes a broader view. It includes
              all income sources available to the borrower and guarantors (such as W-2 income from a
              spouse, rental income, other business income) and all personal and business debt
              obligations. Most SBA lenders calculate both ratios. A deal with a weak project DSCR
              of 1.10x might still get approved if the global DSCR is 1.40x because the borrower has
              significant outside income to backstop the loan.
            </p>
            <p className="mt-4 text-[var(--color-cream)] leading-relaxed">
              When packaging your loan request, always present both calculations. Showing the lender
              that you understand the distinction demonstrates financial sophistication and builds
              confidence in your ability to manage the debt.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            {DSCR_FAQ.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-semibold text-white">
                  {faq.q}
                </h3>
                <p className="mt-3 text-[var(--color-cream)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
          <div className="rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-surface)] p-8 md:p-12">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              Master SBA Deal Analysis
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
              DSCR is just one piece of the puzzle. Learn financial analysis, deal structuring, and
              lender-ready packaging with our comprehensive SBA training platform.
            </p>
            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--color-gold)] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg"
            >
              Explore Training Plans
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
