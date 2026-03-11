import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LendingEthosInteractive } from "@/components/bio/lending-ethos-interactive";
import { PublishedWork } from "@/components/bio/published-work";
import {
  Building2,
  TrendingUp,
  Award,
  BookOpen,
  Mic,
  Code,
  ChevronRight,
  Landmark,
  Shield,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shane Pierson — SBA Lending Executive & Department Architect",
  description:
    "Shane Pierson has built and scaled SBA departments at five institutions, deployed $500M+ in capital, and authored definitive lending frameworks. National Sales Manager at PHX Business / Community Bank & Trust.",
  openGraph: {
    title: "Shane Pierson — SBA Lending Executive & Department Architect",
    description:
      "Shane Pierson has built and scaled SBA departments at five institutions, deployed $500M+ in capital, and authored definitive lending frameworks.",
    images: ["/images/headshots/shane-pierson.webp"],
  },
};

/* ─── Red Apple Bank / CB&T Brand Palette ─────────────────────────────── */
const C = {
  maroon: "#4D0A16",
  maroonLight: "#6B1A28",
  maroonDark: "#3A0710",
  nearBlack: "#1C1A1A",
  offWhite: "#F9F9F9",
  cream: "#F5F0EB",
  gold: "#AA712C",
  goldLight: "#E2A970",
  border: "#E0D6CE",
  textMuted: "#6B6362",
};

/* ─── Career Timeline ─────────────────────────────────────────────────── */
const CAREER = [
  {
    institution: "Pacific Premier Bank",
    role: "First Vice President — SBA Lending",
    period: "SBA Department Startup",
    achievement:
      "First BDO hire. Built the entire SBA origination infrastructure, credit policy framework, and go-to-market strategy from a blank canvas.",
    logo: null,
  },
  {
    institution: "First Bank SBA",
    role: "VP / Senior Vice President",
    period: "SBA Department Scale",
    achievement:
      "First major BDO hire. Developed pipeline systems and lender relationships that established the bank as a competitive SBA originator.",
    logo: null,
  },
  {
    institution: "IncredibleBank",
    role: "SVP — National Sales Manager, SBA Lending",
    period: "SBA Department Startup",
    achievement:
      "Launched an SBA department from zero and deployed infrastructure to fund over $150,000,000 with lean, efficient operations.",
    logo: null,
  },
  {
    institution: "Grasshopper Bank",
    role: "National Sales Manager — SBA Lending",
    period: "SBA Department Turnaround",
    achievement:
      "Built a $100M+ SBA portfolio in two years. Executed a full turnaround strategy. Shareholder in the institution.",
    logo: null,
  },
  {
    institution: "PHX Business / Community Bank & Trust",
    role: "National Sales Manager — SBA Lending",
    period: "Current",
    achievement:
      "Building the national sales infrastructure, originator network, and go-to-market strategy for PHX Business, a division of Community Bank & Trust.",
    logo: "/images/bio/phx-white.png",
  },
];

/* ─── Stats ───────────────────────────────────────────────────────────── */
const STATS = [
  { value: "5", label: "Institutions", icon: Building2 },
  { value: "$500M+", label: "Capital Deployed", icon: TrendingUp },
  { value: "4", label: "Departments Built from Zero", icon: Landmark },
  { value: "15", label: "Training Modules Authored", icon: Award },
];

/* ─── What I Deliver ──────────────────────────────────────────────────── */
const DELIVERABLES = [
  {
    icon: Landmark,
    title: "A Fully Built SBA Department",
    outcome: "Credit policy, operational systems, staffing models, and regulatory alignment — from first hire to first funded deal.",
    detail: "Done it four times. Each one passed examiner scrutiny.",
  },
  {
    icon: Shield,
    title: "Examiner-Ready Infrastructure",
    outcome: "Every policy, procedure, and decision framework documented and defensible before the first loan books.",
    detail: "Safe and sound lending isn't a talking point — it's the architecture.",
  },
  {
    icon: Target,
    title: "A National Origination Network",
    outcome: "Broker channels, referral partner programs, and go-to-market strategies that produce consistent, qualified deal flow.",
    detail: "Built to scale without compromising credit discipline.",
  },
  {
    icon: Users,
    title: "Trained, Accountable Teams",
    outcome: "15-module training system, operating procedures, and performance frameworks that make the department run without you.",
    detail: "The department shouldn't depend on any one producer.",
  },
];

export default function ShanePiersonPage() {
  return (
    <main id="main-content" className="overflow-x-hidden">
      {/* ═══ HERO ═══════════════════════════════════════════════════════ */}
      <section
        className="relative px-4 pt-10 pb-14 sm:px-6 sm:pt-12 sm:pb-20 md:px-8 md:pt-20 md:pb-28"
        style={{ background: `linear-gradient(135deg, ${C.nearBlack} 0%, ${C.maroon} 50%, ${C.maroonDark} 100%)` }}
      >
        {/* Subtle texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 sm:gap-10 md:flex-row md:items-start md:gap-16">
          {/* Portrait */}
          <div className="shrink-0">
            <div
              className="overflow-hidden rounded-2xl shadow-2xl"
              style={{ border: `3px solid ${C.gold}` }}
            >
              <Image
                src="/images/headshots/shane-pierson.webp"
                alt="Shane Pierson"
                width={280}
                height={340}
                className="h-[320px] w-[220px] object-cover object-top sm:h-[400px] sm:w-[280px]"
                priority
              />
            </div>
          </div>

          {/* Hero text */}
          <div className="text-center md:text-left">
            <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Shane Pierson
            </h1>
            <p
              className="mt-2 font-[family-name:var(--font-montserrat)] text-sm font-medium tracking-wide sm:mt-3 sm:text-lg md:text-xl"
              style={{ color: C.goldLight }}
            >
              SBA Department Architect &bull; National Sales Strategist &bull; Published Authority
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-base md:text-lg">
              Five institutions. Four SBA departments built from the ground up. $500M+ in SBA 7(a),
              504, and USDA B&amp;I loans deployed nationwide. A career defined by discipline, procedure,
              and the belief that safe and sound lending is the only lending worth doing.
            </p>

            {/* Institution logos */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-10 sm:gap-6 md:justify-start">
              <Image src="/images/bio/phx-white.png" alt="PHX Business" width={100} height={36} className="h-6 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity sm:h-8" />
              <Image src="/images/bio/cbt-white.png" alt="Community Bank & Trust" width={100} height={36} className="h-6 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity sm:h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ════════════════════════════════════════════════ */}
      <section
        className="border-y px-4 py-8 sm:px-6 sm:py-10 md:px-8"
        style={{
          background: C.offWhite,
          borderColor: C.border,
        }}
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <s.icon size={24} className="sm:!h-7 sm:!w-7" style={{ color: C.maroon }} />
              <span
                className="mt-2 font-[family-name:var(--font-montserrat)] text-2xl font-extrabold sm:text-3xl"
                style={{ color: C.nearBlack }}
              >
                {s.value}
              </span>
              <span className="mt-1 text-sm font-medium" style={{ color: C.textMuted }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PULL QUOTE ════════════════════════════════════════════════ */}
      <section
        className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16"
        style={{ background: C.nearBlack }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 h-px w-16"
            style={{ background: C.gold }}
          />
          <blockquote
            className="font-[family-name:var(--font-montserrat)] text-xl font-medium leading-relaxed tracking-tight text-white/90 italic sm:text-2xl md:text-3xl"
          >
            &ldquo;I don&rsquo;t build departments to hit a number. I build them to withstand an exam.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-medium tracking-wide" style={{ color: C.gold }}>
            — Shane Pierson
          </p>
          <div
            className="mx-auto mt-4 h-px w-16"
            style={{ background: C.gold }}
          />
        </div>
      </section>

      {/* ═══ EXECUTIVE SUMMARY ════════════════════════════════════════ */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24" style={{ background: C.offWhite }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
              style={{ background: `${C.maroon}12`, color: C.maroon }}
            >
              Executive Summary
            </span>
            <h2
              className="mt-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold sm:text-3xl md:text-4xl"
              style={{ color: C.nearBlack }}
            >
              Building Institutions, Not Just Portfolios
            </h2>
          </div>

          <div
            className="mt-8 space-y-4 text-sm leading-relaxed sm:mt-10 sm:space-y-5 sm:text-base md:text-lg"
            style={{ color: "#3A3636" }}
          >
            <p>
              Shane Pierson doesn&rsquo;t enter institutions to maintain the status quo. He enters them
              to build — from the foundation up. Across a career spanning community banks, national
              lenders, and fintech-forward institutions, he has repeatedly proven that SBA lending
              excellence starts with <strong>infrastructure</strong>: the credit policies, the operational
              systems, the human capital, and the cultural discipline that separate sustainable programs
              from flash-in-the-pan production.
            </p>
            <p>
              At <strong>Pacific Premier Bank</strong>, he was the first BDO hire — tasked with creating
              the entire SBA origination framework from a blank page. At <strong>First Bank</strong>,
              he scaled that same architectural approach as the institution&rsquo;s first major SBA business
              development officer. At <strong>IncredibleBank</strong>, he launched an SBA division from
              zero and deployed the systems and strategy to fund over <strong>$150 million</strong> with
              lean, efficient operations. At <strong>Grasshopper Bank</strong>, he executed a full turnaround,
              building a <strong>$100M+ portfolio in two years</strong> and earning a stockholder position
              in the institution.
            </p>
            <p>
              Now at <strong>PHX Business</strong>, a division of <strong>Community Bank &amp; Trust</strong>,
              he is building the national sales infrastructure, originator network, and go-to-market strategy
              that positions the institution for scalable, compliant SBA growth.
            </p>
            <p>
              Every department he builds follows the same foundational philosophy: <em>Credit Policy,
              Credit Philosophy, Operational Systems, and Operating Procedures</em> — a four-domain
              framework he codified as <strong>The Lending Ethos</strong>. It&rsquo;s the blueprint for
              institutions that want to lend responsibly, grow sustainably, and satisfy regulators — not
              just this quarter, but for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WHAT I DELIVER ════════════════════════════════════════════ */}
      <section
        className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
        style={{ background: C.nearBlack }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
              style={{ background: `${C.gold}20`, color: C.goldLight }}
            >
              What I Bring to an Institution
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Outcomes, Not Promises
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <div
                key={d.title}
                className="group rounded-xl border p-5 transition-all hover:border-white/20 sm:p-7"
                style={{
                  background: "#252222",
                  borderColor: "#3A3636",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `${C.gold}18` }}
                  >
                    <d.icon size={20} style={{ color: C.gold }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-base font-bold text-white sm:text-lg">
                    {d.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {d.outcome}
                </p>
                <p className="mt-2 text-xs font-medium italic" style={{ color: C.gold }}>
                  {d.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAREER TIMELINE ══════════════════════════════════════════ */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24" style={{ background: C.offWhite }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
              style={{ background: `${C.maroon}12`, color: C.maroon }}
            >
              Career
            </span>
            <h2
              className="mt-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold sm:text-3xl md:text-4xl"
              style={{ color: C.nearBlack }}
            >
              A Track Record of Building
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base" style={{ color: C.textMuted }}>
              Each institution presented a unique challenge. Every one was met with the same approach:
              build the right foundation, hire the right people, and let disciplined execution do the rest.
            </p>
          </div>

          <div className="relative mt-8 sm:mt-12">
            {/* Timeline line */}
            <div
              className="absolute top-0 left-6 hidden h-full w-0.5 md:block"
              style={{ background: `linear-gradient(to bottom, ${C.maroon}, ${C.gold})` }}
            />

            <div className="space-y-4 sm:space-y-8">
              {CAREER.map((c, i) => (
                <div key={c.institution} className="relative flex gap-4 sm:gap-6 md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-2 hidden h-5 w-5 rounded-full border-4 md:block"
                    style={{
                      borderColor: i === CAREER.length - 1 ? C.gold : C.maroon,
                      background: C.offWhite,
                    }}
                  />

                  <div
                    className="flex-1 rounded-xl border p-4 transition-shadow hover:shadow-md sm:p-6"
                    style={{
                      background: "white",
                      borderColor: i === CAREER.length - 1 ? C.gold : C.border,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span
                          className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            background: i === CAREER.length - 1 ? `${C.gold}18` : `${C.maroon}10`,
                            color: i === CAREER.length - 1 ? C.gold : C.maroon,
                          }}
                        >
                          {c.period}
                        </span>
                        <h3
                          className="mt-2 font-[family-name:var(--font-montserrat)] text-lg font-bold"
                          style={{ color: C.nearBlack }}
                        >
                          {c.institution}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: C.maroon }}>
                          {c.role}
                        </p>
                      </div>
                      {c.logo && (
                        <Image
                          src={c.logo}
                          alt={c.institution}
                          width={60}
                          height={40}
                          className="h-10 w-auto rounded-md object-contain p-1"
                          style={{ background: C.nearBlack }}
                        />
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: C.textMuted }}>
                      {c.achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE LENDING ETHOS (Interactive) ═════════════════════════ */}
      <LendingEthosInteractive />

      {/* ═══ PUBLISHED ARTICLES (Interactive) ════════════════════════ */}
      <PublishedWork />

      {/* ═══ ALSO ════════════════════════════════════════════════════ */}
      <section
        className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20"
        style={{ background: C.nearBlack }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {/* Podcast */}
            <Link
              href="/podcast"
              className="group flex items-start gap-4 rounded-xl border p-5 transition-all hover:border-white/20 sm:p-6"
              style={{ background: "#252222", borderColor: "#3A3636" }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: `${C.gold}18` }}
              >
                <Mic size={18} style={{ color: C.gold }} />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
                  Lords of Lending Podcast
                </h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: "#9A918D" }}>
                  Weekly SBA lending conversations with Shane, Stephanie Dunn, and Brian Congelliere.
                </p>
              </div>
            </Link>

            {/* Training */}
            <a
              href="https://learn.lordsoflending.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border p-5 transition-all hover:border-white/20 sm:p-6"
              style={{ background: "#252222", borderColor: "#3A3636" }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: `${C.gold}18` }}
              >
                <Award size={18} style={{ color: C.gold }} />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
                  Originator Training
                </h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: "#9A918D" }}>
                  15-module SBA origination system covering every phase of the lending lifecycle.
                </p>
              </div>
            </a>

            {/* Fitech */}
            <div
              className="flex items-start gap-4 rounded-xl border p-5 sm:p-6"
              style={{ background: "#252222", borderColor: "#3A3636" }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: `${C.gold}18` }}
              >
                <Code size={18} style={{ color: C.gold }} />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
                  Fitech Ventures LLC
                </h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: "#9A918D" }}>
                  Lending technology, process automation, and business intelligence tools for modern SBA operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EXECUTIVE FOOTER ═══════════════════════════════════════ */}
      <footer
        className="px-4 py-10 sm:px-6 sm:py-14 md:px-8"
        style={{ background: `linear-gradient(135deg, ${C.maroonDark} 0%, ${C.nearBlack} 100%)` }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <Image src="/images/bio/phx-white.png" alt="PHX Business" width={80} height={28} className="h-6 w-auto object-contain opacity-50 sm:h-7" />
            <div className="h-6 w-px bg-white/15" />
            <Image src="/images/bio/cbt-white.png" alt="Community Bank & Trust" width={80} height={28} className="h-6 w-auto object-contain opacity-50 sm:h-7" />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/40">
            Shane Pierson &bull; National Sales Manager, SBA Lending<br />
            PHX Business, a division of Community Bank &amp; Trust
          </p>
          <div className="mt-6 flex items-center justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/shanepierson/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-colors hover:text-white/60"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:shane@lordsoflending.com"
              className="text-xs font-medium tracking-wide text-white/30 transition-colors hover:text-white/60"
            >
              shane@lordsoflending.com
            </a>
          </div>
          <p className="mt-8 text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
