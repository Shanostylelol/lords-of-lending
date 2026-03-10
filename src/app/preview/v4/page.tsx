"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones,
  BookOpen,
  ChevronDown,
  Play,
  ArrowRight,
  Quote,
  Briefcase,
  GraduationCap,
  Mic,
  Calendar,
  ExternalLink,
} from "lucide-react";
import {
  STATS,
  TESTIMONIALS,
  BLOG_POSTS,
  FAQ,
  PODCAST_EPISODES,
  PODCAST_SUBSCRIBE_LINKS,
  TEAM,
} from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Host bios (hardcoded one-liners for the Storyteller layout)        */
/* ------------------------------------------------------------------ */
const HOST_BIOS: Record<string, string> = {
  "Shane Pierson":
    "Nationally-ranked SBA originator. Built the playbook for high-volume deal flow and broker partnerships.",
  "Stephanie Castagnier Dunn":
    "SBA revenue architect. 5-loan repeat clients call her the banker who actually picks up the phone.",
  "Brian Congelliere":
    "Deal-maker and relationship builder. Turns referral networks into funded transactions.",
};

/* ------------------------------------------------------------------ */
/*  Section: Hero                                                      */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1D33] py-20 md:py-28 lg:py-36">
      {/* Subtle radial glow behind cover art */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-[65%] -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(170,113,44,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 md:px-8 lg:gap-20">
        {/* Cover art */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0"
        >
          <div className="relative h-[260px] w-[260px] md:h-[300px] md:w-[300px]">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-2xl opacity-40 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(170,113,44,0.6) 0%, transparent 70%)",
              }}
            />
            <Image
              src="/images/podcast/cover-art.webp"
              alt="Lords of Lending Podcast Cover Art"
              width={300}
              height={300}
              priority
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center md:text-left"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]"
          >
            Lords of Lending
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-4 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-6xl"
          >
            Real Talk About{" "}
            <span className="text-[var(--color-gold)]">SBA Lending</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            The podcast, the blog, the training &mdash; everything you need
            whether you&rsquo;re borrowing or brokering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-7 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white shadow-lg shadow-[var(--color-gold)]/20 transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-xl"
            >
              <Headphones className="h-4 w-4" />
              Listen Now
            </Link>
            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/5"
            >
              <BookOpen className="h-4 w-4" />
              Start Learning
            </a>
          </motion.div>

          {/* Subscribe pills */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {PODCAST_SUBSCRIBE_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 transition-all hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-gold)]/10 hover:text-white"
              >
                {link.platform}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Latest Episodes                                           */
/* ------------------------------------------------------------------ */
function LatestEpisodes() {
  const episodes = PODCAST_EPISODES.slice(0, 4);

  return (
    <section className="bg-[#0F2440] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]"
          >
            Fresh Episodes
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-white md:text-4xl"
          >
            Latest from the Podcast
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {episodes.map((ep, i) => (
            <motion.div key={ep.slug} variants={fadeUp} custom={i}>
              <Link
                href={`/podcast/${ep.slug}`}
                className="group flex h-full flex-col rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:border-[var(--color-gold)]/30 hover:bg-white/[0.06]"
              >
                {/* Thumbnail */}
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/podcast/cover-art.webp"
                    alt={ep.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-10 w-10 text-white" fill="white" />
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Calendar className="h-3 w-3" />
                  <time dateTime={ep.date}>
                    {new Date(ep.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <h3 className="mt-2 line-clamp-2 font-[family-name:var(--font-montserrat)] text-sm font-bold leading-snug text-white group-hover:text-[var(--color-gold-light)]">
                  {ep.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/50">
                  {ep.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/podcast"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
          >
            View All Episodes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Hosts                                                     */
/* ------------------------------------------------------------------ */
function Hosts() {
  return (
    <section className="bg-[#0B1D33] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]"
          >
            The Team
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-white md:text-4xl"
          >
            Meet Your Lords
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-14 grid gap-8 sm:grid-cols-3"
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={i}
              className="group flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center transition-all hover:border-[var(--color-gold)]/20 hover:bg-white/[0.04]"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-[var(--color-gold)]/30 ring-offset-2 ring-offset-[#0B1D33]">
                <Image
                  src={member.headshot}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--color-gold)]">
                {member.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {HOST_BIOS[member.name] ?? ""}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Dual Audience                                             */
/* ------------------------------------------------------------------ */
function DualAudience() {
  return (
    <section className="bg-[#0F2440] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]"
          >
            Two Audiences, One Mission
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-white md:text-4xl"
          >
            Who We Serve
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {/* Business Owners */}
          <motion.div
            variants={scaleIn}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8 md:p-10"
          >
            <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <Briefcase className="h-6 w-6 text-white/40" />
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">
              Business Owners
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
              Looking to buy, expand, or refinance a business? We break down SBA
              lending in plain English and connect you with the right lender when
              you&rsquo;re ready.
            </p>
            <Link
              href="/for-business-owners"
              className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white transition-colors hover:text-[var(--color-gold-light)]"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Brokers */}
          <motion.div
            variants={scaleIn}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/[0.06] p-8 md:p-10"
          >
            <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-gold)]/10">
              <GraduationCap className="h-6 w-6 text-[var(--color-gold)]" />
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">
              Brokers &amp; Originators
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
              Level up your SBA game. Our training platform gives you the
              scripts, tools, and deal knowledge to close more loans and build a
              pipeline that compounds.
            </p>
            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
            >
              Start Training
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: From the Blog                                             */
/* ------------------------------------------------------------------ */
function FromTheBlog() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="bg-[#0B1D33] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]"
          >
            Knowledge
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-white md:text-4xl"
          >
            From the Blog
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {posts.map((post, i) => (
            <motion.div key={post.slug} variants={fadeUp} custom={i}>
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 p-6">
                  <time
                    dateTime={post.date}
                    className="text-xs font-medium text-white/50"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 line-clamp-2 font-[family-name:var(--font-montserrat)] text-lg font-bold leading-snug text-white group-hover:text-[var(--color-gold-light)]">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
          >
            Read All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Stats                                                     */
/* ------------------------------------------------------------------ */
function StatsSection() {
  return (
    <section className="bg-[#0F2440] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-10 sm:grid-cols-3"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="text-center"
            >
              <p className="font-[family-name:var(--font-montserrat)] text-4xl font-extrabold text-[var(--color-gold)] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 font-[family-name:var(--font-montserrat)] text-base font-bold text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-white/50">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Testimonials                                              */
/* ------------------------------------------------------------------ */
function TestimonialsSection() {
  return (
    <section className="bg-[#0B1D33] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]"
          >
            Proof
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-white md:text-4xl"
          >
            What People Say
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-14 grid gap-8 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              variants={fadeUp}
              custom={i}
              className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-10"
            >
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-[var(--color-gold)]/20"
                aria-hidden
              />
              <p className="relative text-base leading-relaxed text-white/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                {t.personImage && (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--color-gold)]/20">
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
                  <p className="text-xs text-white/40">
                    {t.title}, {t.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: FAQ                                                       */
/* ------------------------------------------------------------------ */
function FaqItem({ item, index }: { item: (typeof FAQ)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border-b border-white/10"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-montserrat)] text-base font-bold text-white pr-4">
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
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-white/60">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#0F2440] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]"
          >
            Questions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-white md:text-4xl"
          >
            Frequently Asked
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12"
        >
          {FAQ.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Bottom CTA                                                */
/* ------------------------------------------------------------------ */
function BottomCta() {
  return (
    <section className="relative overflow-hidden bg-[#0B1D33] py-20 md:py-28">
      {/* Gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(170,113,44,0.7) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Mic className="mx-auto h-10 w-10 text-[var(--color-gold)]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-white md:text-4xl"
          >
            Join the Community
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-lg text-white/60"
          >
            Subscribe to the podcast. Enroll in the training. Connect with a
            lender. Your next deal starts here.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-7 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white shadow-lg shadow-[var(--color-gold)]/20 transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-xl"
            >
              <Headphones className="h-4 w-4" />
              Subscribe to Podcast
            </Link>
            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/5"
            >
              <BookOpen className="h-4 w-4" />
              Explore Training
            </a>
          </motion.div>

          {/* Subscribe links */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {PODCAST_SUBSCRIBE_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 transition-all hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-gold)]/10 hover:text-white"
              >
                {link.platform}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function PreviewV4() {
  return (
    <main id="main-content">
      <Hero />
      <LatestEpisodes />
      <Hosts />
      <DualAudience />
      <FromTheBlog />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <BottomCta />
    </main>
  );
}
