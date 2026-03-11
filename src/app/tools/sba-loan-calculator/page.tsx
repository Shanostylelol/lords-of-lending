import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { softwareAppJsonLd, articleFaqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { SbaCalculator } from "@/components/tools/sba-calculator";

/* ── Metadata ─────────────────────────────────────────────────── */

const PAGE_TITLE =
  "SBA Loan Calculator \u2014 Estimate Your Monthly Payment | Lords of Lending";
const PAGE_DESCRIPTION =
  "Use our free SBA loan calculator to estimate monthly payments, total interest, and SBA guarantee fees for 7(a) loans from $50K to $5M.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_CONFIG.url}/tools/sba-loan-calculator` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_CONFIG.url}/tools/sba-loan-calculator`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/heroes/sba-loan-calculator.webp",
        width: 1200,
        height: 630,
        alt: "SBA Loan Payment Calculator",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

/* ── FAQ Data ─────────────────────────────────────────────────── */

const CALC_FAQ = [
  {
    q: "How are SBA loan payments calculated?",
    a: "SBA 7(a) loan payments are calculated using standard principal-and-interest (P&I) amortization. The formula is M = P \u00d7 [r(1+r)^n] / [(1+r)^n \u2013 1], where P is the loan principal, r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly payments (term in years times 12). This means your payment stays the same every month over the life of the loan, though the proportion going toward principal vs. interest shifts over time.",
  },
  {
    q: "What is the current SBA 7(a) interest rate?",
    a: "SBA 7(a) interest rates are variable and tied to the Wall Street Journal Prime Rate plus a spread set by the lender. For loans over $50,000, the maximum spread is Prime + 2.75%. As of 2026, with WSJ Prime at 7.5%, most SBA 7(a) loans carry rates between 9.5% and 11.5%. Your actual rate depends on loan size, term, and lender policy.",
  },
  {
    q: "What is the SBA guarantee fee and how is it calculated?",
    a: "The SBA guarantee fee is a one-time, upfront fee charged on the SBA-guaranteed portion of the loan. For loans of $150,000 or less, the SBA guarantees 85% and charges 2%. For loans between $150,001 and $700,000, the guarantee drops to 75% with a 3% fee. Loans from $700,001 to $1,000,000 carry a 3.5% fee, and loans over $1,000,000 are charged 3.75%. This fee is typically financed into the loan.",
  },
  {
    q: "Can I get an SBA loan with a fixed interest rate?",
    a: "Most SBA 7(a) loans carry variable interest rates that adjust with WSJ Prime. However, some lenders offer fixed-rate options, particularly on loans under $50,000 through the SBA Community Advantage or Microloan programs. SBA 504 loans, which are specifically for real estate and major equipment, do offer fixed rates on the CDC portion. Ask your lender about fixed-rate availability for your specific deal.",
  },
  {
    q: "How long is the typical term for an SBA 7(a) loan?",
    a: "SBA 7(a) loan terms depend on the use of proceeds. Real estate purchases and refinances can have terms up to 25 years. Equipment loans typically carry 10-year terms aligned to the useful life of the equipment. Working capital and business acquisition loans generally have 10-year terms. Longer terms reduce your monthly payment but increase total interest paid over the life of the loan.",
  },
  {
    q: "Does this calculator account for SBA loan prepayment penalties?",
    a: "This calculator shows standard scheduled payments and does not factor in prepayment penalties. SBA 7(a) loans with terms of 15 years or more carry a prepayment penalty during the first three years: 5% in year one, 3% in year two, and 1% in year three. After three years, there is no prepayment penalty. Loans with terms under 15 years have no prepayment penalty at any time.",
  },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function SbaLoanCalculatorPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareAppJsonLd(
              "SBA Loan Payment Calculator",
              PAGE_DESCRIPTION,
              `${SITE_CONFIG.url}/tools/sba-loan-calculator`
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleFaqJsonLd(CALC_FAQ)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Tools", href: "/tools" },
              { name: "SBA Loan Calculator", href: "/tools/sba-loan-calculator" },
            ])
          ),
        }}
      />

      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {/* ── Breadcrumb ── */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-[var(--color-text-muted)]"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[var(--color-gold)]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/tools"
                className="transition-colors hover:text-[var(--color-gold)]"
              >
                Tools
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white">SBA Loan Calculator</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <div className="mb-10">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            SBA Loan Payment{" "}
            <span className="text-[var(--color-gold)]">Calculator</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Estimate your monthly SBA 7(a) loan payment, total interest, and
            upfront guarantee fees. Adjust loan amount, term, and rate to see
            how different scenarios affect your bottom line.
          </p>
        </div>

        {/* ── Calculator ── */}
        <SbaCalculator />

        {/* ── Educational Content ── */}
        <article className="mt-16 space-y-10">
          {/* How SBA Loan Payments Are Calculated */}
          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white">
              How SBA Loan Payments Are Calculated
            </h2>
            <div className="mt-4 space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                SBA 7(a) loan payments follow a standard amortization schedule,
                which means each monthly payment covers both principal and
                interest. Early in the loan term, the majority of your payment
                goes toward interest. As you pay down the balance, a greater
                share of each payment chips away at the principal. This is
                identical to how conventional mortgages and most term loans
                work.
              </p>
              <p>
                The formula behind the calculation is straightforward:
                <strong className="text-white">
                  {" "}
                  M = P x [r(1+r)^n] / [(1+r)^n - 1]
                </strong>
                , where <em>P</em> is your loan principal, <em>r</em> is the
                monthly interest rate (your annual rate divided by 12), and{" "}
                <em>n</em> is the total number of payments (loan term in years
                multiplied by 12). For a $500,000 loan at 10.5% over 25 years,
                your monthly payment would be approximately $4,723 — and you
                would pay roughly $917,000 in total interest over the life of
                the loan.
              </p>
              <p>
                Understanding amortization is critical because it reveals the
                true cost of financing. A longer term lowers your monthly
                payment but dramatically increases total interest paid. A 25-year
                term on $500,000 at 10.5% costs over $900K in interest, while a
                10-year term on the same loan costs roughly $295K — a difference
                of more than $600,000. Use the calculator above to compare
                scenarios and find the balance between affordable monthly
                payments and total cost.
              </p>
            </div>
          </section>

          {/* How SBA Interest Rates Work */}
          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white">
              How SBA 7(a) Interest Rates Work
            </h2>
            <div className="mt-4 space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                SBA 7(a) interest rates are not set by the SBA itself. Instead,
                the SBA sets maximum allowable spreads over a base rate — and the
                most common base rate is the{" "}
                <strong className="text-white">
                  Wall Street Journal Prime Rate
                </strong>
                . Your lender adds a spread on top of Prime to determine your
                final interest rate.
              </p>
              <p>
                For loans greater than $50,000, the SBA allows a maximum spread
                of Prime + 2.75%. For loans between $25,000 and $50,000, the cap
                is Prime + 3.75%. Loans under $25,000 can go up to Prime +
                4.75%. Most SBA 7(a) borrowers with strong credit, collateral,
                and cash flow qualify at Prime + 1% to Prime + 2.75%.
              </p>
              <p>
                Because SBA 7(a) rates are typically variable, your rate (and
                monthly payment) can change when WSJ Prime moves. Rate
                adjustments usually happen quarterly. When the Federal Reserve
                raises or lowers the federal funds rate, Prime follows, which
                directly impacts your SBA loan payment. In a rising-rate
                environment, budget for potential payment increases.
              </p>
            </div>
          </section>

          {/* SBA Guarantee Fee Structure */}
          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white">
              SBA Guarantee Fee Structure
            </h2>
            <div className="mt-4 space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Every SBA 7(a) loan carries an upfront guarantee fee paid to the
                SBA. This fee compensates the SBA for guaranteeing a portion of
                the loan to the lender — which is what makes SBA loans possible
                in the first place. Without the guarantee, most lenders would
                not offer the favorable terms that SBA loans are known for.
              </p>
              <p>
                The guarantee fee is calculated as a percentage of the
                SBA-guaranteed portion of the loan, not the full loan amount.
                For loans of{" "}
                <strong className="text-white">$150,000 or less</strong>, the
                SBA guarantees 85% and charges a 2% fee. For loans between{" "}
                <strong className="text-white">$150,001 and $700,000</strong>,
                the guarantee drops to 75% with a 3% fee. Loans from{" "}
                <strong className="text-white">$700,001 to $1,000,000</strong>{" "}
                carry a 3.5% fee, and loans{" "}
                <strong className="text-white">over $1,000,000</strong> are
                charged 3.75%.
              </p>
              <p>
                For example, on a $500,000 loan, the SBA guarantees 75%
                ($375,000) and charges 3%, resulting in a guarantee fee of
                $11,250. This fee is typically financed into the loan, so you do
                not pay it out of pocket — but it does increase your total loan
                balance and, by extension, your monthly payment slightly.
                Veterans may qualify for a fee waiver on certain SBA loan
                programs.
              </p>
            </div>
          </section>

          {/* Tips for Getting the Best Rate */}
          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white">
              Tips for Getting the Best SBA Loan Rate
            </h2>
            <div className="mt-4 space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                While SBA rates are largely driven by WSJ Prime and lender
                spreads, there are concrete steps you can take to secure the
                most competitive terms available:
              </p>
              <ul className="ml-4 list-disc space-y-3 marker:text-[var(--color-gold)]">
                <li>
                  <strong className="text-white">
                    Strengthen your personal credit.
                  </strong>{" "}
                  A FICO score above 700 gives you leverage to negotiate lower
                  spreads. Above 750, most lenders offer their best pricing.
                </li>
                <li>
                  <strong className="text-white">
                    Demonstrate strong cash flow.
                  </strong>{" "}
                  Lenders price risk. If your business shows consistent revenue
                  and a debt service coverage ratio (DSCR) above 1.25x, you are
                  positioned for favorable terms.
                </li>
                <li>
                  <strong className="text-white">
                    Offer collateral.
                  </strong>{" "}
                  While the SBA does not require full collateralization, offering
                  real estate or business assets as security reduces lender risk
                  and can result in a lower spread.
                </li>
                <li>
                  <strong className="text-white">
                    Shop multiple SBA lenders.
                  </strong>{" "}
                  Different lenders have different appetites for risk, industry
                  focus, and pricing structures. Getting quotes from 2-3
                  SBA-authorized lenders can save you thousands over the loan
                  term.
                </li>
                <li>
                  <strong className="text-white">
                    Submit a clean, complete loan package.
                  </strong>{" "}
                  Lenders reward preparedness. A well-organized application with
                  all required documents reduces perceived risk and streamlines
                  underwriting.
                </li>
              </ul>
            </div>
          </section>
        </article>

        {/* ── FAQ ── */}
        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
            {CALC_FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] text-base font-bold text-white">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-16 rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 p-8 text-center md:p-12">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Ready to Master SBA Lending?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
            Lords of Lending offers comprehensive SBA training for originators,
            brokers, and business owners. Learn deal structuring, packaging, and
            lender matching from industry veterans.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-gold)] px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg"
            >
              Explore Training Plans
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-md border-2 border-[var(--color-gold)] px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-white"
            >
              View All Tools
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
