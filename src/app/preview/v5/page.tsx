"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  ChevronDown,
  ArrowRight,
  Play,
  Headphones,
  Quote,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";
import {
  STATS,
  TESTIMONIALS,
  BLOG_POSTS,
  FAQ,
  PODCAST_EPISODES,
  PODCAST_SUBSCRIBE_LINKS,
} from "@/lib/constants";

/* ───────────────────────── metadata (exported from a server wrapper if needed) ─── */
// Note: metadata must be in a server component. For preview purposes,
// robots noindex is handled via the parent preview layout or a separate metadata export.

/* ───────────────────────── animation variants ─── */
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: EASE_OUT },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: EASE_OUT },
  }),
};

/* ───────────────────────── pillar data ─── */
const PILLARS = [
  {
    icon: BookOpen,
    title: "Knowledge",
    description:
      "Deep-dive articles, SBA guides, and lending education crafted by practitioners who close deals daily.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "A structured learning platform for loan originators and brokers seeking mastery of SBA lending.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "A podcast, network, and shared wisdom from the front lines of small business finance.",
  },
];

/* ───────────────────────── FAQ accordion component ─── */
function FAQItem({ item, index }: { item: (typeof FAQ)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="border-b border-[#1e3554]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[var(--color-gold-light)]"
        aria-expanded={open}
      >
        <span className="pr-8 font-[family-name:var(--font-montserrat)] text-lg font-semibold text-white">
          {item.q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--color-gold)] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="pb-6 leading-relaxed text-[#94a3b8]">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ───────────────────────── main page component ─── */
export default function TheEmpirePage() {
  const latestEpisodes = PODCAST_EPISODES.slice(0, 3);
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0B1D33] text-white font-[family-name:var(--font-open-sans)]">
      {/* ═══════════════════════ SECTION 1: HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Diagonal gold gradient line */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, rgba(170,113,44,0.15) 0%, rgba(170,113,44,0.03) 40%, transparent 60%)",
          }}
        />

        {/* Subtle radial vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(8,20,38,0.6) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Wordmark logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="mb-16"
          >
            <Image
              src="/images/logos/wordmark-gold.png"
              alt="Lords of Lending"
              width={280}
              height={80}
              className="mx-auto h-auto w-48 md:w-64 opacity-90"
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE_OUT }}
            className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold tracking-[0.2em] text-white md:text-7xl lg:text-8xl"
          >
            LORDS OF
            <br />
            LENDING
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-medium tracking-[0.15em] text-[var(--color-gold)] md:text-xl"
          >
            Purveyors of Honest Capital
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#94a3b8] md:text-lg"
          >
            Empowering business owners with direct SBA lending access and equipping
            brokers with the knowledge to build empires of their own.
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.3, duration: 0.6, ease: EASE_OUT }}
            className="mx-auto mt-10 h-px w-24 origin-center bg-[var(--color-gold)]"
          />

          {/* Dual audience paths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-12"
          >
            <Link
              href="/loans/loan-application"
              className="group flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wider text-white transition-colors hover:text-[var(--color-gold-light)]"
            >
              Business Owners &mdash; Get Funded
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/brokers"
              className="group flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wider text-white transition-colors hover:text-[var(--color-gold-light)]"
            >
              Brokers &mdash; Master Your Craft
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-[family-name:var(--font-montserrat)] text-xs font-medium tracking-[0.15em] text-[#5a7a9e] md:text-sm"
          >
            <span>$450M+ FUNDED</span>
            <span className="hidden sm:inline text-[var(--color-gold)] opacity-40">|</span>
            <span>425+ BUSINESSES</span>
            <span className="hidden sm:inline text-[var(--color-gold)] opacity-40">|</span>
            <span>55+ YEARS EXPERIENCE</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border border-[#2a4a6c] flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-2 w-1 rounded-full bg-[var(--color-gold)]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════ SECTION 2: THE PILLARS ═══════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)]">
              THE FOUNDATION
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
              Three Pillars of Empire
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group relative rounded-xl border border-[#1e3554] bg-[#0d2240]/60 p-8 transition-all duration-500 hover:border-[var(--color-gold)] hover:shadow-[0_0_40px_-12px_rgba(170,113,44,0.25)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-[#1e3554] bg-[#0B1D33] transition-colors duration-500 group-hover:border-[var(--color-gold)]/50 group-hover:bg-[var(--color-gold)]/10">
                  <pillar.icon className="h-6 w-6 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[#94a3b8]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 3: AUDIENCE SPLIT ═══════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Diagonal gold separator */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(155deg, transparent 49.5%, rgba(170,113,44,0.4) 49.5%, rgba(170,113,44,0.4) 50.5%, transparent 50.5%)",
          }}
        />

        <div className="grid md:grid-cols-2">
          {/* Business Owners */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#081426] px-8 py-20 md:px-12 md:py-28 lg:px-20"
          >
            <div className="relative z-20 max-w-md ml-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e3554] bg-[#0d2240]/60 px-4 py-1.5">
                <TrendingUp className="h-4 w-4 text-[var(--color-gold)]" />
                <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-wider text-[var(--color-gold)]">
                  FOR BUSINESS OWNERS
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white md:text-3xl">
                Capital to Build
                <br />
                Your Vision
              </h3>
              <ul className="mt-8 space-y-4">
                {[
                  "SBA 7(a) loans up to $5 million",
                  "Up to 90% acquisition financing",
                  "Expert guidance from prequalification to close",
                  "No cost to use our lending portal",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-gold)]" />
                    <span className="text-[#c0cfe0]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/loans/loan-application"
                className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg hover:shadow-[var(--color-gold)]/20"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Brokers */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative bg-[#0d2240] px-8 py-20 md:px-12 md:py-28 lg:px-20"
          >
            <div className="relative z-20 max-w-md">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e3554] bg-[#0B1D33]/60 px-4 py-1.5">
                <Target className="h-4 w-4 text-[var(--color-gold)]" />
                <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-wider text-[var(--color-gold)]">
                  FOR BROKERS
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white md:text-3xl">
                Master the Art
                <br />
                of Origination
              </h3>
              <ul className="mt-8 space-y-4">
                {[
                  "Structured SBA lending curriculum",
                  "Real deal breakdowns and case studies",
                  "Referral fee program for qualified brokers",
                  "Tools, templates, and pipeline strategy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-gold)]" />
                    <span className="text-[#c0cfe0]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://learn.lordsoflending.com/pricing"
                className="mt-10 inline-flex items-center gap-2 rounded-lg border border-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-white hover:shadow-lg hover:shadow-[var(--color-gold)]/20"
              >
                Start Training
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 4: PODCAST ═══════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#081426]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Album art */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-[var(--color-gold)]/30 shadow-2xl shadow-black/40">
                <Image
                  src="/images/podcast/cover-art.webp"
                  alt="The Lords of Lending Podcast"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Glow effect */}
              <div
                className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(170,113,44,0.3) 0%, transparent 70%)",
                }}
              />
            </motion.div>

            {/* Podcast info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-[var(--color-gold)]" />
                <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)]">
                  THE PODCAST
                </p>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
                The Lords of Lending
                <br />
                Podcast
              </h2>
              <p className="mt-4 leading-relaxed text-[#94a3b8]">
                Unfiltered conversations about SBA lending, deal structuring, and
                building a career in small business finance. Real stories from the
                front lines&mdash;no fluff, no theory.
              </p>

              {/* Subscribe links */}
              <div className="mt-8 flex flex-wrap gap-2">
                {PODCAST_SUBSCRIBE_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#1e3554] bg-[#0d2240]/60 px-4 py-2 text-xs font-medium text-[#c0cfe0] transition-all hover:border-[var(--color-gold)]/50 hover:text-white"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>

              {/* Latest episodes */}
              <div className="mt-10 space-y-0 divide-y divide-[#1e3554]">
                {latestEpisodes.map((ep, i) => (
                  <Link
                    key={ep.slug}
                    href={`/${ep.slug}`}
                    className="group flex items-start gap-4 py-4 transition-colors hover:bg-[#0d2240]/30"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gold)]/10 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-gold)]">
                      {String(PODCAST_EPISODES.length - i).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white group-hover:text-[var(--color-gold-light)]">
                        {ep.title}
                      </p>
                      <p className="mt-1 text-xs text-[#5a7a9e]">{ep.date}</p>
                    </div>
                    <Play className="mt-1 h-4 w-4 shrink-0 text-[#5a7a9e] transition-colors group-hover:text-[var(--color-gold)]" />
                  </Link>
                ))}
              </div>

              <Link
                href="/podcast"
                className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
              >
                All Episodes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 5: INSIGHTS (BLOG) ═══════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)]">
              INSIGHTS
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
              From the Kingdom
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <Link
                  href={`/${post.slug}`}
                  className="group block overflow-hidden rounded-xl border border-[#1e3554] bg-[#0d2240]/40 transition-all duration-500 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-black/20"
                >
                  {/* Gold top border accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-[var(--color-gold)]/60 via-[var(--color-gold)] to-[var(--color-gold)]/60 transition-opacity duration-500 opacity-40 group-hover:opacity-100" />

                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-medium text-[#5a7a9e]">{post.date}</p>
                    <h3 className="mt-2 font-[family-name:var(--font-montserrat)] text-lg font-bold leading-snug text-white group-hover:text-[var(--color-gold-light)]">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#94a3b8]">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold)] transition-colors group-hover:text-[var(--color-gold-light)]">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
            >
              View All Insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 6: TESTIMONIALS ═══════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#081426]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)]">
              TESTIMONIALS
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
              Words from the Realm
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="relative rounded-xl border border-[#1e3554] bg-[#0d2240]/40 p-8 md:p-10"
              >
                {/* Gold quote mark */}
                <Quote className="mb-4 h-10 w-10 text-[var(--color-gold)] opacity-40" />

                <blockquote className="text-base leading-relaxed text-[#c0cfe0] md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  {t.personImage && (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--color-gold)]/30">
                      <Image
                        src={t.personImage}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-[#5a7a9e]">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 7: CREDENTIALS (STATS) ═══════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-0"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex-1 text-center ${
                  i < STATS.length - 1
                    ? "md:border-r md:border-[var(--color-gold)]/30"
                    : ""
                }`}
              >
                <p className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold text-[var(--color-gold)] md:text-6xl lg:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-[family-name:var(--font-montserrat)] text-lg font-semibold tracking-wider text-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-[#5a7a9e]">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 8: FAQ ═══════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#081426]">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)]">
              QUESTIONS
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
              Frequently Asked
            </h2>
          </motion.div>

          <div className="mt-12">
            {FAQ.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 9: THE INVITATION (CTA) ═══════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Gold gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #AA712C 0%, #C4944A 30%, #AA712C 60%, #845823 100%)",
          }}
        />

        {/* Subtle texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.3em] text-white/70">
                THE INVITATION
              </p>
              <h2 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                The throne awaits.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Whether you&apos;re building a business or building a career in
                lending, your journey starts here. Join the Lords.
              </p>

              {/* Gold divider */}
              <div className="mx-auto mt-8 h-px w-16 bg-white/30" />

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Link
                  href="/loans/loan-application"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0B1D33] px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider text-white transition-all hover:bg-[#081426] hover:shadow-xl"
                >
                  Begin Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://learn.lordsoflending.com/pricing"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider text-white transition-all hover:border-white hover:bg-white/10 hover:shadow-xl"
                >
                  Train with the Lords
                  <GraduationCap className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
