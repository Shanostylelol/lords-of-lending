"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Target,
  TrendingUp,
  Building2,
  Briefcase,
  Check,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Video,
  Wrench,
  Quote,
  Play,
} from "lucide-react";
import {
  STATS,
  TESTIMONIALS,
  BLOG_POSTS,
  FAQ,
  PODCAST_EPISODES,
  PODCAST_SUBSCRIBE_LINKS,
} from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCounter(end: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView, duration]);
  return count;
}

/* ------------------------------------------------------------------ */
/*  Helper: parse numeric value from stat string like "$450+" → 450   */
/* ------------------------------------------------------------------ */
function parseStatValue(value: string): { prefix: string; num: number; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return { prefix: match[1], num: parseInt(match[2], 10), suffix: match[3] };
}

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 md:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Fade-in wrapper                                                    */
/* ------------------------------------------------------------------ */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */
export default function PreviewV3() {
  const [activeTab, setActiveTab] = useState<"blog" | "podcast" | "resources">("blog");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Stats scroll-trigger */
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const blogSlice = BLOG_POSTS.slice(0, 3);
  const podcastSlice = PODCAST_EPISODES.slice(0, 3);

  return (
    <main id="main-content" className="overflow-hidden">
      {/* ============================================================ */}
      {/*  1. HERO                                                      */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-8 pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
        {/* Gradient blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #AA712C 0%, #C4944A 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #AA712C 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-4 py-1.5 text-xs font-medium text-[var(--color-text-muted)] backdrop-blur-sm shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
              Trusted by 425+ Funded Businesses
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="mt-8 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your SBA Lending{" "}
            <span className="bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] bg-clip-text text-transparent">
              Command Center
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you&apos;re a business owner seeking funding or a broker
            sourcing deals&mdash;Lords of Lending gives you the education, tools,
            and direct lender access to close with confidence.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/loans/loan-application"
              className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white shadow-lg shadow-[var(--color-gold)]/20 transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-xl hover:shadow-[var(--color-gold)]/30"
            >
              I Need Funding
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/brokers"
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-white"
            >
              I Source Deals
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Floating metrics card */}
          <motion.div
            className="mx-auto mt-16 max-w-xl"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-xl shadow-black/5 md:p-8">
              <p className="mb-4 text-center font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Track Record
              </p>
              <div className="grid grid-cols-3 divide-x divide-[var(--color-border)]">
                {STATS.map((stat) => (
                  <div key={stat.label} className="px-2 text-center md:px-4">
                    <p className="font-[family-name:var(--font-montserrat)] text-2xl font-extrabold text-[var(--color-gold)] md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[var(--color-text-muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. HOW IT WORKS                                              */}
      {/* ============================================================ */}
      <Section className="bg-[var(--color-surface)]">
        <FadeIn>
          <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[var(--color-text-muted)]">
            Three simple steps from application to funded.
          </p>
        </FadeIn>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Dotted connector line */}
          <div
            aria-hidden="true"
            className="absolute top-12 left-[16.66%] right-[16.66%] hidden h-px border-t-2 border-dashed border-[var(--color-border)] md:block"
          />

          {[
            {
              icon: GraduationCap,
              step: "01",
              title: "Learn & Prepare",
              desc: "Access free SBA education, tools, and our learning platform so you know exactly what lenders need before you apply.",
            },
            {
              icon: Target,
              step: "02",
              title: "Connect & Apply",
              desc: "We match you directly with an experienced SBA 7(a) lending team. No brokers, no runaround—just the right lender for your deal.",
            },
            {
              icon: TrendingUp,
              step: "03",
              title: "Fund & Grow",
              desc: "Your loan is underwritten, approved, and funded. You focus on growing your business while we guide you through closing.",
            },
          ].map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.15}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/5 ring-1 ring-[var(--color-border)]">
                  <item.icon size={32} className="text-[var(--color-gold)]" />
                </div>
                <span className="mt-4 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">
                  Step {item.step}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  3. DUAL PATH                                                 */}
      {/* ============================================================ */}
      <Section className="bg-white">
        <FadeIn>
          <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Built for Both Sides of the Deal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[var(--color-text-muted)]">
            Whether you&apos;re buying a business or originating loans, we have your path.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Business Owners Card */}
          <FadeIn delay={0.1}>
            <div className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[#FBF8F4] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-gold)]/10">
                <Building2 size={28} className="text-[var(--color-gold)]" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
                Business Owners
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Get funded faster with expert guidance at every step.
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {[
                  "SBA 7(a) loans up to $5M nationwide",
                  "Up to 90% financing on acquisitions",
                  "Free prequalification & lender matching",
                  "Education resources & step-by-step guidance",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/loans/loan-application"
                className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-dark)]"
              >
                Start My Application
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          {/* Brokers & Originators Card */}
          <FadeIn delay={0.2}>
            <div className="group flex h-full flex-col rounded-2xl bg-[var(--color-dark)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <Briefcase size={28} className="text-[var(--color-gold-light)]" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">
                Brokers &amp; Originators
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Close more SBA deals with the best training in the industry.
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {[
                  "On-demand SBA originator training",
                  "Deal structuring tools & calculators",
                  "Referral fee schedule upon request",
                  "Direct lender relationships & support",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-gold-light)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://learn.lordsoflending.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-gold-light)] transition-colors hover:text-white"
              >
                View Training Plans
                <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  4. CONTENT HUB                                               */}
      {/* ============================================================ */}
      <Section className="bg-[var(--color-surface)]">
        <FadeIn>
          <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Content Hub
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[var(--color-text-muted)]">
            Expert insights, episodes, and resources to sharpen your SBA edge.
          </p>
        </FadeIn>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-lg border border-[var(--color-border)] bg-white p-1">
            {(["blog", "podcast", "resources"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-5 py-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? "bg-[var(--color-gold)] text-white shadow-sm"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {/* Blog Tab */}
            {activeTab === "blog" && (
              <motion.div
                key="blog"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {blogSlice.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/${post.slug}`}
                    className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <time className="text-xs font-medium text-[var(--color-text-light)]">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <h3 className="mt-2 font-[family-name:var(--font-montserrat)] text-sm font-bold leading-snug text-[var(--color-text)] group-hover:text-[var(--color-gold)]">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}

            {/* Podcast Tab */}
            {activeTab === "podcast" && (
              <motion.div
                key="podcast"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 lg:grid-cols-[280px_1fr]"
              >
                {/* Cover art */}
                <div className="flex flex-col items-center">
                  <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/images/podcast/cover-art.webp"
                      alt="Lords of Lending Podcast"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {PODCAST_SUBSCRIBE_LINKS.slice(0, 3).map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                      >
                        {link.platform}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Episodes list */}
                <div className="space-y-4">
                  {podcastSlice.map((ep) => (
                    <Link
                      key={ep.slug}
                      href={`/${ep.slug}`}
                      className="group flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/10">
                        <Play size={16} className="ml-0.5 text-[var(--color-gold)]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-gold)]">
                          {ep.title}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                          {ep.excerpt}
                        </p>
                        <time className="mt-2 block text-xs text-[var(--color-text-light)]">
                          {new Date(ep.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Resources Tab */}
            {activeTab === "resources" && (
              <motion.div
                key="resources"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {[
                  {
                    icon: BookOpen,
                    title: "SBA Guides & Ebooks",
                    desc: "In-depth guides on SBA 7(a) lending, acquisitions, and business planning.",
                    href: "/blog",
                    cta: "Browse Guides",
                  },
                  {
                    icon: Wrench,
                    title: "Tools & Calculators",
                    desc: "Prequalification tools, loan calculators, and deal structuring worksheets.",
                    href: "/tools",
                    cta: "Explore Tools",
                  },
                  {
                    icon: Video,
                    title: "Video Library",
                    desc: "Watch episodes, interviews, and training content from the Lords of Lending team.",
                    href: "https://www.youtube.com/@LordsofLending",
                    cta: "Watch on YouTube",
                  },
                ].map((resource) => (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    target={resource.href.startsWith("http") ? "_blank" : undefined}
                    rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-gold)]/10">
                      <resource.icon size={24} className="text-[var(--color-gold)]" />
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-montserrat)] text-base font-bold text-[var(--color-text)]">
                      {resource.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {resource.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold)] group-hover:text-[var(--color-gold-dark)]">
                      {resource.cta}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  5. STATS (animated counters)                                 */}
      {/* ============================================================ */}
      <section className="bg-white px-6 py-20 md:px-8 md:py-28" ref={statsRef}>
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
              Results That Speak
            </h2>
          </FadeIn>
          <div className="mt-14 grid grid-cols-3 gap-8">
            {STATS.map((stat, i) => {
              const { prefix, num, suffix } = parseStatValue(stat.value);
              return (
                <AnimatedStat
                  key={stat.label}
                  prefix={prefix}
                  num={num}
                  suffix={suffix}
                  label={stat.label}
                  description={stat.description}
                  inView={statsInView}
                  delay={i * 0.15}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. TESTIMONIALS                                              */}
      {/* ============================================================ */}
      <Section className="bg-[var(--color-surface)]">
        <FadeIn>
          <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            What Our Clients Say
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8">
                <Quote size={28} className="shrink-0 text-[var(--color-gold)]/30" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4 border-t border-[var(--color-border-light)] pt-6">
                  {t.personImage && (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={t.personImage}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-text)]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  7. FAQ                                                       */}
      {/* ============================================================ */}
      <Section className="bg-white">
        <FadeIn>
          <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[var(--color-text-muted)]">
            Quick answers to common questions about Lords of Lending.
          </p>
        </FadeIn>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-shadow hover:shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-text)]">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[var(--color-gold)] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="border-t border-[var(--color-border-light)] px-6 py-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  8. BOTTOM CTA                                                */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-dark)] via-[#1A1A2E] to-[#0D0D1A] px-6 py-20 md:px-8 md:py-28">
        {/* Decorative gold gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #AA712C, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #C4944A, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Start Your SBA Journey Today
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              Whether you need funding or want to source more deals, Lords of Lending
              is your unfair advantage in SBA lending.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/loans/loan-application"
                className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white shadow-lg shadow-[var(--color-gold)]/25 transition-all hover:bg-[var(--color-gold-light)] hover:shadow-xl"
              >
                I Need Funding
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/brokers"
                className="group inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                I Source Deals
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated Stat sub-component                                        */
/* ------------------------------------------------------------------ */
function AnimatedStat({
  prefix,
  num,
  suffix,
  label,
  description,
  inView,
  delay,
}: {
  prefix: string;
  num: number;
  suffix: string;
  label: string;
  description: string;
  inView: boolean;
  delay: number;
}) {
  const count = useCounter(num, inView);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <p className="font-[family-name:var(--font-montserrat)] text-4xl font-extrabold text-[var(--color-gold)] md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-2 font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-widest text-[var(--color-text)]">
        {label}
      </p>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
    </motion.div>
  );
}
