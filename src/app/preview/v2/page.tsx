"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Play,
  ChevronDown,
  Mail,
  ArrowRight,
  Quote,
  Headphones,
  BookOpen,
  TrendingUp,
  Shield,
  Users,
  DollarSign,
  BarChart3,
  Briefcase,
  GraduationCap,
  FileText,
  Mic,
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
/*  Metadata (exported for Next.js – works alongside "use client")    */
/* ------------------------------------------------------------------ */

// Note: metadata export doesn't work in client components.
// Use a separate metadata file or layout for robots noindex.
// For preview purposes, the parent preview/page.tsx already sets noindex.

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ------------------------------------------------------------------ */
/*  Animated counter (for social proof bar)                            */
/* ------------------------------------------------------------------ */

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericStr = target.replace(/[^0-9.]/g, "");
    const end = parseFloat(numericStr);
    if (isNaN(end)) {
      setDisplay(target);
      return;
    }
    const prefix = target.startsWith("$") ? "$" : "";
    const duration = 1600;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target, suffix]);

  return <span ref={ref}>{display}</span>;
}

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item                                                 */
/* ------------------------------------------------------------------ */

function FaqItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[var(--color-gold)] cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-[family-name:var(--font-montserrat)] text-base font-semibold text-[var(--color-text)] md:text-lg">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--color-gold)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-[var(--color-text-muted)]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */

export default function TheAuthorityPage() {
  const [audience, setAudience] = useState<"owners" | "brokers">("owners");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const proofRef = useRef(null);
  const podcastRef = useRef(null);
  const splitRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const newsletterRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const proofInView = useInView(proofRef, { once: true, margin: "-50px" });
  const podcastInView = useInView(podcastRef, { once: true, margin: "-80px" });
  const splitInView = useInView(splitRef, { once: true, margin: "-80px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });
  const newsletterInView = useInView(newsletterRef, { once: true, margin: "-80px" });

  const latestEpisodes = PODCAST_EPISODES.slice(0, 3);
  const featuredPost = BLOG_POSTS[0];
  const secondaryPosts = BLOG_POSTS.slice(1, 3);

  const authorityBadges = [
    { label: "20+ Episodes", icon: Mic },
    { label: "$450M+ Funded", icon: DollarSign },
    { label: "425+ Businesses", icon: Briefcase },
    { label: "55+ Years Experience", icon: Shield },
  ];

  return (
    <main id="main-content" className="bg-white">
      {/* ============================================================ */}
      {/*  1. HERO — Clean white, editorial authority                  */}
      {/* ============================================================ */}
      <section ref={heroRef} className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Subtle top-right warm glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          {/* Gold label */}
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-block font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Lords of Lending
            </span>
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-7xl"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
          >
            The Definitive
            <br />
            Resource for{" "}
            <span className="text-[var(--color-gold)]">SBA Lending</span>
          </motion.h1>

          {/* Two-line subtitle */}
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
          >
            Expert education, actionable tools, and a direct line to experienced SBA 7(a) lenders
            — whether you&apos;re a business owner seeking funding or an originator building your pipeline.
          </motion.p>

          {/* Authority badges */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3 md:gap-4"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {authorityBadges.map((badge) => (
              <motion.div
                key={badge.label}
                variants={fadeUp}
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2"
              >
                <badge.icon className="h-4 w-4 text-[var(--color-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-text)]">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Audience toggle + CTA */}
          <motion.div
            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={4}
          >
            {/* Toggle */}
            <div className="inline-flex rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
              <button
                onClick={() => setAudience("owners")}
                className={`cursor-pointer rounded-md px-4 py-2 text-sm font-semibold transition-all ${
                  audience === "owners"
                    ? "bg-[var(--color-gold)] text-white shadow-sm"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                For Business Owners
              </button>
              <button
                onClick={() => setAudience("brokers")}
                className={`cursor-pointer rounded-md px-4 py-2 text-sm font-semibold transition-all ${
                  audience === "brokers"
                    ? "bg-[var(--color-gold)] text-white shadow-sm"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                For Brokers
              </button>
            </div>

            {/* CTA */}
            <AnimatePresence mode="wait">
              <motion.div
                key={audience}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {audience === "owners" ? (
                  <Link
                    href="/loans/loan-application"
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gold)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg"
                  >
                    Start Your Loan Application
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a
                    href="https://learn.lordsoflending.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gold)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg"
                  >
                    Explore Training Programs
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. FEATURED CONTENT — Editorial grid                        */}
      {/* ============================================================ */}
      <section ref={featuredRef} className="bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="mb-10 flex items-center justify-between"
          >
            <div>
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Latest Insights
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)] md:text-3xl">
                Featured Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-1 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-dark)] sm:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-5"
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Large featured article */}
            <motion.article variants={fadeUp} className="lg:col-span-3">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--color-border)]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <time className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-light)]">
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-gold)] md:text-2xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 leading-relaxed text-[var(--color-text-muted)]">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>

            {/* Two smaller articles stacked */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {secondaryPosts.map((post) => (
                <motion.article key={post.slug} variants={fadeUp}>
                  <Link href={`/blog/${post.slug}`} className="group flex gap-4">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-[var(--color-border)] md:h-28 md:w-28">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="112px"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <time className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-light)]">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <h3 className="mt-1 font-[family-name:var(--font-montserrat)] text-sm font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-gold)] md:text-base">
                        {post.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Mobile "View All" link */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-gold)]"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. SOCIAL PROOF BAR — Gold background, animated counters    */}
      {/* ============================================================ */}
      <section
        ref={proofRef}
        className="bg-[var(--color-gold)] px-6 py-12 md:px-8 md:py-16"
      >
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row"
          initial="hidden"
          animate={proofInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <div className="font-[family-name:var(--font-montserrat)] text-4xl font-extrabold text-white md:text-5xl">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.value.includes("+") ? "+" : ""}
                />
              </div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/90">
                {stat.label}
              </div>
              <div className="mt-0.5 text-sm text-white/70">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  4. PODCAST SECTION — Cover art + latest episodes            */}
      {/* ============================================================ */}
      <section ref={podcastRef} className="bg-white px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2"
            initial="hidden"
            animate={podcastInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Left — Podcast artwork */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="relative">
                <div className="relative h-80 w-80 overflow-hidden rounded-2xl shadow-2xl md:h-96 md:w-96">
                  <Image
                    src="/images/podcast/cover.webp"
                    alt="Lords of Lending Podcast"
                    fill
                    className="object-cover"
                    sizes="384px"
                  />
                </div>
                {/* Decorative gold accent */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-[var(--color-gold)]/30"
                />
              </div>
            </motion.div>

            {/* Right — Title, episodes, subscribe */}
            <motion.div variants={fadeUp} custom={1}>
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-[var(--color-gold)]" />
                <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Podcast
                </span>
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)] md:text-3xl lg:text-4xl">
                The SBA Lending Podcast
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-[var(--color-text-muted)]">
                Raw, unfiltered conversations about SBA lending from three industry veterans.
                New episodes bi-weekly covering deals, strategy, and the business of lending.
              </p>

              {/* Latest episodes */}
              <div className="mt-8 space-y-4">
                {latestEpisodes.map((ep, i) => (
                  <Link
                    key={ep.slug}
                    href={`/podcast/${ep.slug}`}
                    className="group flex items-start gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-gold)]/40 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] transition-colors group-hover:bg-[var(--color-gold)] group-hover:text-white">
                      <Play className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-gold)]">
                        {ep.title}
                      </h4>
                      <time className="mt-1 block text-xs text-[var(--color-text-light)]">
                        {new Date(ep.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <span className="mt-1 shrink-0 text-xs font-medium text-[var(--color-gold)] opacity-0 transition-opacity group-hover:opacity-100">
                      Listen &rarr;
                    </span>
                  </Link>
                ))}
              </div>

              {/* Subscribe buttons */}
              <div className="mt-8 flex flex-wrap gap-2">
                {PODCAST_SUBSCRIBE_LINKS.slice(0, 4).map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90`}
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. TWO-COLUMN SPLIT — Audience paths                        */}
      {/* ============================================================ */}
      <section ref={splitRef} className="bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center"
            initial="hidden"
            animate={splitInView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Two Audiences, One Mission
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)] md:text-3xl lg:text-4xl">
              Who We Serve
            </h2>
          </motion.div>

          <motion.div
            className="relative mt-12 grid gap-0 md:grid-cols-2"
            initial="hidden"
            animate={splitInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Gold vertical divider (desktop) */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--color-gold)]/30 md:block"
            />

            {/* Left — Business Owners */}
            <motion.div variants={fadeUp} className="p-8 md:pr-12">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-gold)]/10">
                <TrendingUp className="h-6 w-6 text-[var(--color-gold)]" />
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)]">
                For Business Owners
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Understand SBA 7(a) loan programs and what you qualify for",
                  "Get pre-qualified with an experienced lending team — not a chatbot",
                  "Access guides on acquisitions, refinancing, and expansion funding",
                  "Listen to real deal breakdowns on the Lords of Lending podcast",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                    <span className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/for-business-owners"
                className="mt-8 inline-flex items-center gap-2 rounded-md border-2 border-[var(--color-gold)] px-5 py-2.5 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-white"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Gold horizontal divider (mobile) */}
            <div
              aria-hidden="true"
              className="mx-8 h-px bg-[var(--color-gold)]/30 md:hidden"
            />

            {/* Right — Brokers & Originators */}
            <motion.div variants={fadeUp} custom={1} className="p-8 md:pl-12">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-gold)]/10">
                <Users className="h-6 w-6 text-[var(--color-gold)]" />
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)]">
                For Brokers &amp; Originators
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Structured training programs from three decades of combined SBA experience",
                  "Deal structuring templates, checklists, and sourcing strategies",
                  "Learn to underwrite, package, and close SBA 7(a) loans with confidence",
                  "Build your pipeline with proven broker-to-lender relationship frameworks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                    <span className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://learn.lordsoflending.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--color-gold)] px-5 py-2.5 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg"
              >
                View Training Programs
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. TESTIMONIALS — Clean white cards with quote marks         */}
      {/* ============================================================ */}
      <section ref={testimonialsRef} className="bg-white px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Testimonials
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)] md:text-3xl">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="relative rounded-xl border border-[var(--color-border)] bg-white p-8 shadow-sm"
              >
                {/* Large quote mark */}
                <Quote className="absolute right-6 top-6 h-10 w-10 text-[var(--color-gold)]/15" />

                <blockquote className="relative">
                  <p className="leading-relaxed text-[var(--color-text-muted)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="mt-6 flex items-center gap-4">
                  {t.personImage && (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[var(--color-border)]">
                      <Image
                        src={t.personImage}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-text)]">
                      {t.name}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      {t.title}, {t.company}
                    </div>
                  </div>
                  {t.image && (
                    <div className="relative ml-auto h-8 w-20">
                      <Image
                        src={t.image}
                        alt={t.company}
                        fill
                        className="object-contain opacity-40"
                        sizes="80px"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. FAQ — Clean accordion with gold accents                  */}
      {/* ============================================================ */}
      <section ref={faqRef} className="bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="mb-10 text-center"
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              FAQ
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)] md:text-3xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            {FAQ.map((item, i) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  8. NEWSLETTER CTA — Email capture                           */}
      {/* ============================================================ */}
      <section ref={newsletterRef} className="bg-[var(--color-dark)] px-6 py-16 md:px-8 md:py-24">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          animate={newsletterInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <Mail className="mx-auto mb-4 h-8 w-8 text-[var(--color-gold-light)]" />
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white md:text-3xl">
            Stay Ahead of SBA Lending
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">
            Get insider insights on deal trends, SBA policy changes, and originator strategies
            delivered to your inbox. No spam — just actionable intelligence.
          </p>

          {/* Email capture form (placeholder) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Placeholder — integrate with email provider
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-md bg-[var(--color-gold)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-xs text-white/30">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
