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
  ExternalLink,
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
  { value: "4", label: "SBA Departments Built", icon: Building2 },
  { value: "$500M+", label: "Capital Deployed", icon: TrendingUp },
  { value: "20+", label: "Published Articles", icon: BookOpen },
  { value: "15", label: "Training Modules Authored", icon: Award },
];

/* ─── Core Competencies ───────────────────────────────────────────────── */
const COMPETENCIES = [
  {
    icon: Landmark,
    title: "SBA Department Architecture",
    desc: "Four ground-up SBA department launches — credit policy, operational systems, staffing models, and regulatory alignment from first hire to first funded deal.",
  },
  {
    icon: Shield,
    title: "Safe & Sound Lending Principles",
    desc: "Every department built on a foundation of credit discipline, fiduciary responsibility, and regulatory compliance that withstands examiner scrutiny.",
  },
  {
    icon: Target,
    title: "National Sales Strategy",
    desc: "Designed and deployed national originator networks, broker channel programs, and go-to-market strategies that scale portfolios efficiently.",
  },
  {
    icon: Users,
    title: "Team & Process Development",
    desc: "From The Lending Ethos to 15-module originator training — creating the systems, procedures, and human capital that sustain long-term growth.",
  },
  {
    icon: Code,
    title: "Technology & Innovation",
    desc: "Founder of Fitech Ventures LLC — building lending technology, process automation, and business intelligence tools that modernize SBA operations.",
  },
  {
    icon: Mic,
    title: "Published Authority",
    desc: "Co-host of the Lords of Lending podcast, author of The Broker's Codex, and contributor to Scotsman Guide — educating the next generation of originators.",
  },
];

export default function ShanePiersonPage() {
  return (
    <main id="main-content" className="overflow-x-hidden">
      {/* ═══ HERO ═══════════════════════════════════════════════════════ */}
      <section
        className="relative px-6 pt-12 pb-20 md:px-8 md:pt-20 md:pb-28"
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

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
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
                className="h-[400px] w-[280px] object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Hero text */}
          <div className="text-center md:text-left">
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Shane Pierson
            </h1>
            <p
              className="mt-3 font-[family-name:var(--font-montserrat)] text-lg font-medium tracking-wide md:text-xl"
              style={{ color: C.goldLight }}
            >
              SBA Department Architect &bull; National Sales Strategist &bull; Published Authority
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Five institutions. Four SBA departments built from the ground up. $500M+ in SBA 7(a),
              504, and USDA B&amp;I loans deployed nationwide. A career defined by discipline, procedure,
              and the belief that safe and sound lending is the only lending worth doing.
            </p>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="/contact-us-bc"
                className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl"
                style={{ background: C.gold }}
              >
                Get in Touch
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/the-brokers-codex"
                className="inline-flex items-center gap-2 rounded-lg border-2 px-7 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white transition-all hover:bg-white/10"
                style={{ borderColor: C.gold }}
              >
                Read The Broker&rsquo;s Codex
              </Link>
            </div>

            {/* Institution logos */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:justify-start">
              <Image src="/images/bio/phx-white.png" alt="PHX Business" width={100} height={36} className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
              <Image src="/images/bio/cbt-white.png" alt="Community Bank & Trust" width={100} height={36} className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ════════════════════════════════════════════════ */}
      <section
        className="border-y px-6 py-10 md:px-8"
        style={{
          background: C.offWhite,
          borderColor: C.border,
        }}
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <s.icon size={28} style={{ color: C.maroon }} />
              <span
                className="mt-2 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold"
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

      {/* ═══ EXECUTIVE SUMMARY ════════════════════════════════════════ */}
      <section className="px-6 py-16 md:px-8 md:py-24" style={{ background: C.offWhite }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
              style={{ background: `${C.maroon}12`, color: C.maroon }}
            >
              Executive Summary
            </span>
            <h2
              className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold md:text-4xl"
              style={{ color: C.nearBlack }}
            >
              Building Institutions, Not Just Portfolios
            </h2>
          </div>

          <div
            className="mt-10 space-y-5 text-base leading-relaxed md:text-lg"
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

      {/* ═══ COMPETENCIES ═════════════════════════════════════════════ */}
      <section
        className="px-6 py-16 md:px-8 md:py-24"
        style={{ background: C.nearBlack }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
              style={{ background: `${C.gold}20`, color: C.goldLight }}
            >
              Core Competencies
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
              Discipline. Infrastructure. Results.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMPETENCIES.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border p-6 transition-all hover:border-[var(--color-gold)]"
                style={{
                  background: "#252222",
                  borderColor: "#3A3636",
                }}
              >
                <c.icon size={28} style={{ color: C.gold }} />
                <h3 className="mt-4 font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9A918D" }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAREER TIMELINE ══════════════════════════════════════════ */}
      <section className="px-6 py-16 md:px-8 md:py-24" style={{ background: C.offWhite }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
              style={{ background: `${C.maroon}12`, color: C.maroon }}
            >
              Career
            </span>
            <h2
              className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold md:text-4xl"
              style={{ color: C.nearBlack }}
            >
              A Track Record of Building
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base" style={{ color: C.textMuted }}>
              Each institution presented a unique challenge. Every one was met with the same approach:
              build the right foundation, hire the right people, and let disciplined execution do the rest.
            </p>
          </div>

          <div className="relative mt-12">
            {/* Timeline line */}
            <div
              className="absolute top-0 left-6 hidden h-full w-0.5 md:block"
              style={{ background: `linear-gradient(to bottom, ${C.maroon}, ${C.gold})` }}
            />

            <div className="space-y-8">
              {CAREER.map((c, i) => (
                <div key={c.institution} className="relative flex gap-6 md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-2 hidden h-5 w-5 rounded-full border-4 md:block"
                    style={{
                      borderColor: i === CAREER.length - 1 ? C.gold : C.maroon,
                      background: C.offWhite,
                    }}
                  />

                  <div
                    className="flex-1 rounded-xl border p-6 transition-shadow hover:shadow-md"
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

      {/* ═══ TECHNOLOGY & VENTURES ════════════════════════════════════ */}
      <section
        className="px-6 py-16 md:px-8 md:py-24"
        style={{ background: C.nearBlack }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            style={{ background: `${C.gold}20`, color: C.goldLight }}
          >
            Innovation
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
            Where Banking Meets Technology
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: "#9A918D" }}>
            Through <strong className="text-white">Fitech Ventures LLC</strong>, Shane builds the
            lending technology, process automation, and business intelligence tools that modern SBA
            operations demand. From CRM integrations to borrower-facing platforms, the mission is
            the same: remove friction, increase transparency, and help lenders do what they do best.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Lords of Lending",
                desc: "SBA lending education platform, podcast, and the industry's most comprehensive originator training library.",
                link: "/",
              },
              {
                title: "The Broker's Codex",
                desc: "The definitive guidebook for SBA loan brokers — from sourcing to closing to building a sustainable brokerage.",
                link: "/the-brokers-codex",
              },
              {
                title: "15-Module Training System",
                desc: "A comprehensive SBA origination sales strategy and go-to-market plan covering every phase of the lending lifecycle.",
                link: null,
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-xl border p-6 text-left"
                style={{ background: "#252222", borderColor: "#3A3636" }}
              >
                <h3 className="font-[family-name:var(--font-montserrat)] text-base font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9A918D" }}>
                  {v.desc}
                </p>
                {v.link && (
                  <Link
                    href={v.link}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:underline"
                    style={{ color: C.gold }}
                  >
                    Learn more <ChevronRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PODCAST CALLOUT ══════════════════════════════════════════ */}
      <section
        className="px-6 py-16 md:px-8 md:py-20"
        style={{
          background: `linear-gradient(135deg, ${C.maroon} 0%, ${C.nearBlack} 100%)`,
        }}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row">
          <div className="shrink-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10">
              <Mic size={40} style={{ color: C.goldLight }} />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white md:text-3xl">
              Lords of Lending Podcast
            </h2>
            <p className="mt-2 max-w-xl text-base text-white/70">
              Shane, Stephanie Dunn, and Brian Congelliere break down SBA lending every week — real
              deals, real strategies, and the conversations lenders have behind closed doors.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white transition-all hover:shadow-lg"
              style={{ background: C.gold }}
            >
              Listen Now
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA FOOTER ═══════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:px-8 md:py-24" style={{ background: C.offWhite }}>
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/images/bio/cbt-black-solid.png"
            alt="Community Bank & Trust"
            width={200}
            height={60}
            className="mx-auto h-14 w-auto object-contain"
          />
          <h2
            className="mt-6 font-[family-name:var(--font-montserrat)] text-2xl font-bold md:text-3xl"
            style={{ color: C.nearBlack }}
          >
            Let&rsquo;s Build Something
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base" style={{ color: C.textMuted }}>
            Whether you&rsquo;re an institution seeking SBA lending expertise, a broker looking to
            partner, or a business owner ready to grow — the first step starts here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us-bc"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl"
              style={{ background: C.maroon }}
            >
              Contact Shane
              <ChevronRight size={16} />
            </Link>
            <a
              href="https://www.linkedin.com/in/shanepierson/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 px-7 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold transition-all hover:bg-gray-50"
              style={{ borderColor: C.maroon, color: C.maroon }}
            >
              LinkedIn Profile
              <ExternalLink size={14} />
            </a>
          </div>

          <p className="mt-10 text-xs" style={{ color: C.textMuted }}>
            shane@lordsoflending.com &bull; Lords of Lending &bull; PHX Business / Community Bank &amp; Trust
          </p>
        </div>
      </section>
    </main>
  );
}
