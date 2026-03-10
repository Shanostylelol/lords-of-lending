"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Building2,
  Briefcase,
  ChevronDown,
  Star,
  ArrowRight,
  Mic2,
  BookOpen,
  Wrench,
  GraduationCap,
  BarChart3,
  FileText,
  Headphones,
  Play,
  ExternalLink,
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
/*  Metadata (exported from a separate server component if needed)     */
/*  Since this is "use client", metadata must be in a layout or        */
/*  generateMetadata export from a server wrapper.                     */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                            */
/* ------------------------------------------------------------------ */

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-[family-name:var(--font-montserrat)] text-3xl font-bold tracking-tight md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

function FadeInWhenVisible({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1D33] pt-28 pb-20 md:pt-40 md:pb-32">
      {/* Gold radial gradient at bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 100%, rgba(170,113,44,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-[var(--color-gold-light)] uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-light)] animate-pulse" />
            The #1 SBA Lending Resource
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 font-[family-name:var(--font-montserrat)] text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Master the Art of{" "}
          <br className="hidden sm:block" />
          <span className="text-[var(--color-gold-light)]">SBA Lending</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Whether you&apos;re funding your dream business or building a lending
          empire &mdash; choose your path.
        </motion.p>

        {/* Dual audience cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Business Owner Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link
              href="/for-business-owners"
              className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[var(--color-gold)]/50 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(170,113,44,0.15)] md:p-10"
            >
              {/* Glow effect on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(170,113,44,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--color-gold)]/10 ring-1 ring-[var(--color-gold)]/20 transition-all duration-300 group-hover:bg-[var(--color-gold)]/20 group-hover:ring-[var(--color-gold)]/40">
                <Building2 className="h-8 w-8 text-[var(--color-gold-light)]" />
              </div>

              <h3 className="relative mt-6 font-[family-name:var(--font-montserrat)] text-xl font-bold text-white md:text-2xl">
                I&apos;m a Business Owner
              </h3>

              <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-white/50">
                Get funded. Learn the process. Make smart borrowing decisions
                that protect your business.
              </p>

              <span className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[var(--color-gold-dark)] group-hover:shadow-lg">
                Explore Business Resources
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          {/* Broker Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[var(--color-gold)]/50 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(170,113,44,0.15)] md:p-10"
            >
              {/* Glow effect on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(170,113,44,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--color-gold)]/10 ring-1 ring-[var(--color-gold)]/20 transition-all duration-300 group-hover:bg-[var(--color-gold)]/20 group-hover:ring-[var(--color-gold)]/40">
                <Briefcase className="h-8 w-8 text-[var(--color-gold-light)]" />
              </div>

              <h3 className="relative mt-6 font-[family-name:var(--font-montserrat)] text-xl font-bold text-white md:text-2xl">
                I&apos;m a Broker / Originator
              </h3>

              <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-white/50">
                Source deals. Close loans. Build your origination empire with
                expert-led training.
              </p>

              <span className="relative mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-[var(--color-gold)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold-light)] transition-all duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:shadow-lg">
                Start Training
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRUSTED BY / STATS BAR                                             */
/* ------------------------------------------------------------------ */

function TrustedBySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-[#0E2240] px-6 py-12 md:px-8 md:py-16" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.p
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/30"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted by Businesses Nationwide
        </motion.p>

        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-gold-light)] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-white/70">
                {stat.label}
              </p>
              <p className="text-xs text-white/40">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TWO-TRACK CONTENT                                                  */
/* ------------------------------------------------------------------ */

function TwoTrackSection() {
  const businessFeatures = [
    {
      icon: BookOpen,
      title: "Educational Blog",
      desc: "Step-by-step guides on SBA loans, acquisitions, and funding strategies.",
    },
    {
      icon: FileText,
      title: "Loan Tools & Guides",
      desc: "Checklists, calculators, and document prep to get loan-ready fast.",
    },
    {
      icon: Wrench,
      title: "Direct Lender Access",
      desc: "Connect directly with experienced SBA 7(a) lending teams.",
    },
  ];

  const brokerFeatures = [
    {
      icon: GraduationCap,
      title: "Training Platform",
      desc: "Full courses on SBA origination, underwriting, and deal structuring.",
    },
    {
      icon: Mic2,
      title: "Lords of Lending Podcast",
      desc: "Weekly episodes with insider tactics and real deal breakdowns.",
    },
    {
      icon: BarChart3,
      title: "Deal Structuring Playbook",
      desc: "Templates and frameworks for packaging winning SBA deals.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInWhenVisible>
          <SectionHeading className="text-center text-[var(--color-text)]">
            Two Audiences.{" "}
            <span className="text-[var(--color-gold)]">One Mission.</span>
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--color-text-muted)]">
            Lords of Lending serves both sides of the SBA lending equation with
            tailored content, tools, and training.
          </p>
        </FadeInWhenVisible>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Business Owners Track */}
          <FadeInWhenVisible delay={0.1}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-gold)]/10">
                  <Building2 className="h-5 w-5 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                  For Business Owners
                </h3>
              </div>

              <div className="space-y-5">
                {businessFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-[var(--color-border)]">
                      <f.icon className="h-4 w-4 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-text)]">
                        {f.title}
                      </p>
                      <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/for-business-owners"
                className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-dark)]"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInWhenVisible>

          {/* Brokers Track */}
          <FadeInWhenVisible delay={0.2}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-gold)]/10">
                  <Briefcase className="h-5 w-5 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                  For Brokers & Originators
                </h3>
              </div>

              <div className="space-y-5">
                {brokerFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-[var(--color-border)]">
                      <f.icon className="h-4 w-4 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-text)]">
                        {f.title}
                      </p>
                      <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://learn.lordsoflending.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-dark)]"
              >
                Start Training
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PODCAST                                                            */
/* ------------------------------------------------------------------ */

function PodcastSection() {
  const latestEpisodes = PODCAST_EPISODES.slice(0, 3);

  return (
    <section className="bg-[#0B1D33] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInWhenVisible>
          <SectionHeading className="text-center text-white">
            The{" "}
            <span className="text-[var(--color-gold-light)]">
              Lords of Lending
            </span>{" "}
            Podcast
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
            Insider strategies, deal breakdowns, and no-BS lending talk from the
            trenches. New episodes weekly.
          </p>
        </FadeInWhenVisible>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Podcast Card */}
          <FadeInWhenVisible
            delay={0.1}
            className="lg:col-span-2"
          >
            <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
              {/* Cover art */}
              <div className="relative h-48 w-48 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/logos/wordmark-vert.png"
                  alt="Lords of Lending Podcast"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <Headphones className="h-5 w-5 text-[var(--color-gold-light)]" />
                <span className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white">
                  {PODCAST_EPISODES.length} Episodes
                </span>
              </div>

              {/* Subscribe links */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {PODCAST_SUBSCRIBE_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full ${link.color} px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:scale-105 hover:shadow-md`}
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Latest Episodes */}
          <div className="space-y-4 lg:col-span-3">
            {latestEpisodes.map((ep, i) => (
              <FadeInWhenVisible key={ep.slug} delay={0.15 + i * 0.1}>
                <Link
                  href={`/${ep.slug}`}
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-[var(--color-gold)]/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gold)]/10 transition-colors group-hover:bg-[var(--color-gold)]/20">
                    <Play className="h-4 w-4 text-[var(--color-gold-light)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white line-clamp-1 group-hover:text-[var(--color-gold-light)]">
                      {ep.title}
                    </p>
                    <p className="mt-1 text-sm text-white/40 line-clamp-2">
                      {ep.excerpt}
                    </p>
                    <p className="mt-2 text-xs text-white/25">{ep.date}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-gold-light)]" />
                </Link>
              </FadeInWhenVisible>
            ))}

            <FadeInWhenVisible delay={0.45}>
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 px-1 pt-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold-light)] transition-colors hover:text-[var(--color-gold)]"
              >
                View All Episodes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                       */
/* ------------------------------------------------------------------ */

function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <FadeInWhenVisible>
          <SectionHeading className="text-center text-[var(--color-text)]">
            Real Stories.{" "}
            <span className="text-[var(--color-gold)]">Real Success.</span>
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--color-text-muted)]">
            From first-time buyers to seasoned business owners, our clients
            have turned their goals into reality.
          </p>
        </FadeInWhenVisible>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                  />
                ))}
              </div>

              <blockquote className="text-sm leading-relaxed text-[var(--color-text-muted)] italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={t.personImage}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-text)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {t.title}, {t.company}
                  </p>
                </div>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Image
                    src={t.image}
                    alt={t.company}
                    width={48}
                    height={48}
                    className="h-10 w-10 rounded-md object-contain bg-[var(--color-surface)] p-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  LATEST ARTICLES                                                    */
/* ------------------------------------------------------------------ */

function ArticlesSection() {
  const posts = BLOG_POSTS.filter((p) => p.category === "blog").slice(0, 3);

  return (
    <section className="bg-white px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInWhenVisible>
          <SectionHeading className="text-center text-[var(--color-text)]">
            Latest{" "}
            <span className="text-[var(--color-gold)]">Articles</span>
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--color-text-muted)]">
            Expert insights on SBA lending, business acquisitions, and smart
            financing strategies.
          </p>
        </FadeInWhenVisible>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <FadeInWhenVisible key={post.slug} delay={0.1 + i * 0.1}>
              <Link
                href={`/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-all hover:border-[var(--color-gold)]/30 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-surface)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-gold)]">
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-text)] line-clamp-2 group-hover:text-[var(--color-gold)]">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-[var(--color-text-light)]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-dark)]"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeInWhenVisible>
          <SectionHeading className="text-center text-[var(--color-text)]">
            Frequently Asked{" "}
            <span className="text-[var(--color-gold)]">Questions</span>
          </SectionHeading>
        </FadeInWhenVisible>

        <div className="mt-10 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeInWhenVisible key={i} delay={0.05 * i}>
                <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-white">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[var(--color-surface)]"
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
                        <p className="border-t border-[var(--color-border-light)] px-5 py-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  BOTTOM CTA                                                         */
/* ------------------------------------------------------------------ */

function BottomCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1D33] px-6 py-20 md:px-8 md:py-28">
      {/* Gold radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(170,113,44,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeInWhenVisible>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Ready to{" "}
            <span className="text-[var(--color-gold-light)]">Level Up?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">
            Whether you need funding or want to master SBA origination &mdash;
            your next move starts here.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/for-business-owners"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg"
            >
              <Building2 className="h-4 w-4" />
              I Need Funding
            </Link>
            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--color-gold)] px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-gold-light)] transition-all hover:bg-[var(--color-gold)] hover:text-white hover:shadow-lg"
            >
              <GraduationCap className="h-4 w-4" />
              I Want to Train
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function PreviewV1() {
  return (
    <main id="main-content">
      <HeroSection />
      <TrustedBySection />
      <TwoTrackSection />
      <PodcastSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FaqSection />
      <BottomCtaSection />
    </main>
  );
}
