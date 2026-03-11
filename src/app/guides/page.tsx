import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { STATE_DATA } from "@/lib/state-data";
import { INDUSTRY_DATA } from "@/lib/industry-data";

export const metadata: Metadata = {
  title: "SBA Lending Guides — By State & Industry",
  description:
    "SBA loan guides for all 50 states and 15+ industries. Find eligibility, top lenders, rates, and tips specific to your location and business type.",
  alternates: { canonical: `${SITE_CONFIG.url}/guides` },
};

export default function GuidesPage() {
  return (
    <main
      id="main-content"
      className="bg-[var(--color-dark)] pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            SBA Lending Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            Find SBA loan information specific to your state or industry.
            Every guide includes eligibility details, rates, top lenders, and
            expert tips.
          </p>
        </div>

        {/* Industry Guides */}
        <section className="mt-12">
          <h2 className="mb-6 font-[family-name:var(--font-montserrat)] text-lg font-bold uppercase tracking-wider text-[var(--color-gold)]">
            Industry Guides
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_DATA.map((industry) => (
              <Link
                key={industry.slug}
                href={`/sba-loans-for-${industry.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-gold)]/40 hover:shadow-md"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-white group-hover:text-[var(--color-gold)]">
                    SBA Loans for {industry.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-white/40">
                    {industry.typicalLoanRange} typical &middot;{" "}
                    {industry.sbaPopularity} demand
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* State Guides */}
        <section className="mt-16">
          <h2 className="mb-6 font-[family-name:var(--font-montserrat)] text-lg font-bold uppercase tracking-wider text-[var(--color-gold)]">
            State Guides
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {STATE_DATA.map((state) => (
              <Link
                key={state.slug}
                href={`/sba-loans-in-${state.slug}`}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-center text-sm font-medium text-white/70 transition-all hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)]"
              >
                {state.name}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 p-8 text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/50">
            Check your eligibility in 2 minutes with our free screening tool,
            or explore our complete SBA loan guide.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/tools/sba-eligibility-checker"
              className="rounded-md bg-[var(--color-gold)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]"
            >
              Check Eligibility
            </Link>
            <Link
              href="/complete-guide-sba-7a-loans"
              className="rounded-md border border-[var(--color-gold)] px-6 py-2.5 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)]/10"
            >
              Complete SBA Guide
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
