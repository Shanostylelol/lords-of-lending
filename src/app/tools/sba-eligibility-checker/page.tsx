import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import {
  softwareAppJsonLd,
  articleFaqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/structured-data";
import { EligibilityChecker } from "@/components/tools/eligibility-checker";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

const pageTitle =
  "SBA Loan Eligibility Checker — Do You Qualify? | Lords of Lending";
const pageDescription =
  "Use our free SBA loan eligibility checker to quickly screen whether your business may qualify for SBA 7(a) financing. Answer 7 questions and get instant results.";
const pageUrl = `${SITE_CONFIG.url}/tools/sba-eligibility-checker`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Lords of Lending",
    images: [
      {
        url: "/images/heroes/sba-eligibility-checker.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/heroes/sba-eligibility-checker.webp"],
  },
};

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    q: "Who is eligible for an SBA loan?",
    a: "To be eligible for an SBA 7(a) loan, your business must be a for-profit entity operating in the United States, meet SBA size standards for your industry, and the owners must demonstrate good character, management expertise, and the ability to repay the loan. Non-profit organizations, government entities, and businesses engaged in illegal activities are not eligible.",
  },
  {
    q: "Can I get an SBA loan with bad credit?",
    a: "There is no official minimum credit score for SBA loans, but most lenders prefer a personal credit score of 680 or higher. Scores below 650 make approval significantly harder. If your credit is below that threshold, you may need to work on improving it, provide additional collateral, or explore alternative lending options before applying.",
  },
  {
    q: "Does criminal history disqualify me from an SBA loan?",
    a: "Not automatically. If any owner with 20% or more ownership has been arrested, charged, indicted, or convicted of a criminal offense (other than a minor traffic violation), the SBA requires disclosure on Form 912. The SBA reviews each case individually, and a criminal record does not necessarily prevent approval — especially if the offense was minor, non-violent, or occurred many years ago.",
  },
  {
    q: "What are SBA size standards and how do they affect eligibility?",
    a: "SBA size standards define the maximum size a business can be to qualify as 'small' for SBA loan purposes. These standards vary by industry and are based on either annual revenue or number of employees, tied to your NAICS code. For example, most manufacturing businesses can have up to 500 employees, while many service businesses are capped at $8 million to $41.5 million in annual revenue. If your business exceeds the size standard for your industry, you won't qualify for SBA financing.",
  },
  {
    q: "Can non-U.S. citizens get SBA loans?",
    a: "U.S. citizens and lawful permanent residents (green card holders) are eligible for SBA loans. Non-citizen, non-permanent-resident individuals may face significant challenges, though certain visa holders may qualify with additional documentation. At least one individual with 20% or more ownership must be either a U.S. citizen or a lawful permanent resident for the business to be eligible.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SBAEligibilityCheckerPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareAppJsonLd(
              "SBA Loan Eligibility Checker",
              pageDescription,
              pageUrl
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleFaqJsonLd(FAQ_ITEMS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Tools", href: "/tools" },
              {
                name: "SBA Eligibility Checker",
                href: "/tools/sba-eligibility-checker",
              },
            ])
          ),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-white/40" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-[var(--color-gold)]">
                Home
              </Link>
            </li>
            <li className="text-white/20">/</li>
            <li>
              <Link href="/tools" className="transition-colors hover:text-[var(--color-gold)]">
                Tools
              </Link>
            </li>
            <li className="text-white/20">/</li>
            <li className="text-white/60">SBA Eligibility Checker</li>
          </ol>
        </nav>

        {/* Page Header */}
        <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-white md:text-4xl">
          SBA Loan Eligibility Checker
        </h1>
        <p className="mt-3 text-base leading-relaxed text-white/60">
          Answer 7 quick questions to see if your business may qualify for SBA
          7(a) financing. This free screening tool checks the most common
          eligibility requirements and gives you an instant, educational
          assessment.
        </p>

        {/* Checker Component */}
        <div className="mt-8">
          <EligibilityChecker />
        </div>

        {/* ---------------------------------------------------------- */}
        {/*  Educational Content (500+ words)                           */}
        {/* ---------------------------------------------------------- */}
        <article className="mt-16">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">
            Understanding SBA Loan Eligibility Requirements
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            The Small Business Administration (SBA) doesn&apos;t lend money directly.
            Instead, it guarantees a portion of loans made by approved lenders,
            reducing the risk for banks and making it easier for small businesses
            to access capital. To qualify for this guarantee, both the business
            and its owners must meet specific eligibility criteria established by
            the SBA.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Understanding these requirements before you apply can save you
            weeks of wasted effort and help you prepare a stronger application.
            Below, we break down the key eligibility factors that determine
            whether your business qualifies for SBA 7(a) financing.
          </p>

          <h3 className="mt-8 font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white">
            SBA Size Standards: Does Your Business Qualify as &quot;Small&quot;?
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/60">
            The SBA defines &quot;small&quot; differently depending on your industry. Size
            standards are tied to your North American Industry Classification
            System (NAICS) code and are measured by either annual receipts or
            number of employees. For most industries, the size standard ranges
            from $1 million to $41.5 million in average annual receipts, or
            from 100 to 1,500 employees.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            For example, a full-service restaurant must have average annual
            receipts under $9.5 million, while a general freight trucking
            company can have up to $34 million. Manufacturing firms are
            typically measured by employee count, with thresholds ranging
            from 500 to 1,500 employees depending on the subsector. If your
            business exceeds the size standard for your NAICS code, you will
            not qualify for SBA financing regardless of other factors.
          </p>

          <h3 className="mt-8 font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white">
            Citizenship and Residency Requirements
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/60">
            SBA loans require that the business be at least 51% owned and
            controlled by U.S. citizens or lawful permanent residents (green
            card holders). If you are on a work visa, student visa, or have
            another temporary immigration status, you will likely face
            significant hurdles. Some lenders may work with certain visa
            categories on a case-by-case basis, but this is the exception rather
            than the rule. If you are in the process of obtaining permanent
            residency, it is generally advisable to wait until your green card
            is approved before applying.
          </p>

          <h3 className="mt-8 font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white">
            What Disqualifies You from Getting an SBA Loan?
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/60">
            Several factors can automatically disqualify a business from SBA
            eligibility. Non-profit organizations and government entities
            cannot receive SBA 7(a) loans. Businesses engaged in lending,
            speculation, gambling, or multi-level marketing are generally
            excluded. Additionally, businesses must be physically located in
            and operate within the United States or its territories.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            On the owner side, an unresolved federal debt or a previous default
            on a government-backed loan can prevent approval. While criminal
            history does not automatically disqualify an applicant, owners must
            disclose any arrests, charges, or convictions from the past seven
            years on SBA Form 912. The SBA reviews these disclosures
            individually, and serious offenses — particularly those involving
            financial fraud — can result in denial.
          </p>

          <h3 className="mt-8 font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white">
            How to Overcome Common Eligibility Challenges
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/60">
            If you have one or more flags on your application, all is not lost.
            Many borrowers successfully obtain SBA loans despite initial
            challenges. Here are strategies for the most common issues:
          </p>
          <ul className="mt-4 ml-4 list-disc space-y-2 pl-4 text-base text-white/60">
            <li className="leading-relaxed">
              <strong className="text-white">Credit score concerns:</strong>{" "}
              Work on improving your personal credit before applying. Pay down
              existing debt, resolve any collections, and ensure your credit
              reports are accurate. Most lenders want to see a minimum score of
              680, though some will consider scores in the 650 range with
              compensating factors.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">Criminal history:</strong>{" "}
              Prepare a detailed written explanation of the circumstances,
              demonstrate rehabilitation, and gather character references. The
              more time that has passed and the more evidence of good conduct
              you can provide, the better your chances.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">Previous default:</strong> If you
              have a prior SBA or federal loan default, you will need to show
              that the debt has been resolved — either paid in full, settled, or
              discharged through bankruptcy. Having a clean payment history since
              the default is critical.
            </li>
            <li className="leading-relaxed">
              <strong className="text-white">Size standard questions:</strong>{" "}
              If your business is near the size threshold, work with your lender
              to verify your exact NAICS code. Sometimes a business qualifies
              under an alternative classification with a higher size standard.
            </li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            The single most important thing you can do is work with an
            experienced SBA lending professional who understands these nuances.
            A skilled originator can often find solutions to eligibility
            challenges that would stop a less experienced lender in their tracks.
          </p>
        </article>

        {/* ---------------------------------------------------------- */}
        {/*  FAQ Section                                                */}
        {/* ---------------------------------------------------------- */}
        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.q}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  Bottom CTA                                                 */}
        {/* ---------------------------------------------------------- */}
        <div className="mt-16 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center md:p-8">
          <p className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
            Ready to Take the Next Step?
          </p>
          <p className="mt-2 text-sm text-white/60">
            Whether you&apos;re a borrower exploring SBA financing or an originator
            building your lending expertise, Lords of Lending has the resources
            you need.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]"
            >
              Explore Training &amp; Pricing
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
