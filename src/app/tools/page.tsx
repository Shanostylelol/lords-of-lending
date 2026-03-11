import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, BarChart3, ClipboardCheck } from "lucide-react";
import { LoanProgram } from "@/components/sections/loan-program";

export const metadata: Metadata = {
  title: "SBA Lending Tools & Calculators — Lords of Lending",
  description:
    "Free SBA loan calculators and tools. Estimate monthly payments, calculate your DSCR, check SBA eligibility, and access loan program details.",
  openGraph: {
    title: "SBA Lending Tools & Calculators — Lords of Lending",
    description:
      "Free SBA loan calculators and tools. Estimate monthly payments, calculate your DSCR, and check SBA eligibility.",
    type: "website",
  },
};

const TOOLS = [
  {
    title: "SBA Loan Calculator",
    description:
      "Estimate your monthly payment, total interest, and SBA guarantee fees for any loan amount between $50K and $5M.",
    href: "/tools/sba-loan-calculator",
    icon: Calculator,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    title: "DSCR Calculator",
    description:
      "Calculate your Debt Service Coverage Ratio to see if your deal meets SBA lender minimums. Supports add-backs.",
    href: "/tools/dscr-calculator",
    icon: BarChart3,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "SBA Eligibility Checker",
    description:
      "Answer 7 quick questions to find out if your business likely qualifies for SBA 7(a) financing.",
    href: "/tools/sba-eligibility-checker",
    icon: ClipboardCheck,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
];

export default function ToolsPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {/* Tools Header */}
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-5xl">
            SBA Lending Tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Free calculators and screening tools to help you evaluate SBA loan
            options. Built by lending professionals who close deals every day.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-gold)]/40 hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${tool.bgColor}`}
              >
                <tool.icon className={`h-6 w-6 ${tool.color}`} />
              </div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white group-hover:text-[var(--color-gold)]">
                {tool.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
                {tool.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-[var(--color-gold)]">
                Open Tool &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Related Content Links */}
        <div className="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            Learn More About SBA Lending
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Pair these tools with our in-depth guides for a complete
            understanding of SBA financing.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/complete-guide-sba-7a-loans"
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4 text-sm font-medium text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)]/40"
            >
              &rarr; The Complete Guide to SBA 7(a) Loans
            </Link>
            <Link
              href="/art-of-sba-deal-structuring"
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4 text-sm font-medium text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)]/40"
            >
              &rarr; The Art of SBA Deal Structuring
            </Link>
            <Link
              href="/sba-loan-process-timeline"
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4 text-sm font-medium text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)]/40"
            >
              &rarr; SBA Loan Process Timeline
            </Link>
            <Link
              href="/buy-business-sba-loan"
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4 text-sm font-medium text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)]/40"
            >
              &rarr; Can You Use an SBA Loan to Buy a Business?
            </Link>
          </div>
        </div>

        {/* Existing Loan Program Section */}
        <div className="mt-16">
          <LoanProgram variant="tools" />
        </div>
      </div>
    </main>
  );
}
