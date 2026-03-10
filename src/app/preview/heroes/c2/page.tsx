"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* ───────────────────────── King Sans font ─── */
const KING_SANS_STYLE = `
@font-face {
  font-family: 'KingSans';
  src: url('/fonts/preview/KingSans.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;

/* ───────────────────────── animation constants ─── */
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

/** Mutable copy helper — framer-motion Variants demand mutable ease arrays */
const expo = [...EASE_EXPO] as [number, number, number, number];
const quart = [...EASE_OUT_QUART] as [number, number, number, number];

/* ───────────────────────── brand palette ─── */
const EGGPLANT = "#3B0F44";
const SUITE_BLACK = "#231F20";
const DECO_GOLD = "#E2A970";

/* ───────────────────────── animation variants ─── */
const leftPanel: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: expo },
  },
};

const rightPanel: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: expo },
  },
};

/* Mobile: top half slides down from above, bottom half slides up from below */
const topPanel: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: expo },
  },
};

const bottomPanel: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: expo },
  },
};

const dividerDraw: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { delay: 0.9, duration: 0.8, ease: quart },
  },
};

const dividerDrawHorizontal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.9, duration: 0.8, ease: quart },
  },
};

const diamondReveal: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 1.4, duration: 0.5, ease: quart },
  },
};

const watermarkFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.035,
    transition: { delay: 1.8, duration: 1.6, ease: "easeOut" },
  },
};

const contentFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.0 + i * 0.15,
      duration: 0.7,
      ease: quart,
    },
  }),
};

const topLogoReveal: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.6, duration: 0.8, ease: quart },
  },
};

const taglineReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 2.0, duration: 0.8, ease: quart },
  },
};

/* ───────────────────────── component ─── */
export default function HeroC2Page() {
  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      aria-label="Hero — The Split Reveal"
    >
      <style dangerouslySetInnerHTML={{ __html: KING_SANS_STYLE }} />

      {/* ════════════ SUBTLE TEXTURE LAYER ════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 0.4, duration: 2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-[3]"
        aria-hidden="true"
      >
        <Image
          src="/images/textures/black-gold-marble.jpg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* ════════════ BACKGROUND WATERMARK ════════════ */}
      <motion.div
        variants={watermarkFade}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="relative h-[80vh] w-auto aspect-[800/1036]">
          <Image
            src="/images/brand/1600w/lol-wordmark-vert-white-1600w.png"
            alt=""
            fill
            className="object-contain"
            priority={false}
          />
        </div>
      </motion.div>

      {/* ════════════ TOP CENTER LOGO ════════════ */}
      <motion.div
        variants={topLogoReveal}
        initial="hidden"
        animate="visible"
        className="absolute left-1/2 top-6 z-30 -translate-x-1/2 md:top-8"
      >
        <Image
          src="/images/brand/1600w/lol-wordmark hor-alt w marg-gold-1600w.png"
          alt="Lords of Lending"
          width={220}
          height={63}
          className="h-auto w-[160px] md:w-[220px]"
          priority
        />
      </motion.div>

      {/* ════════════ SPLIT PANELS — DESKTOP (side by side) ════════════ */}
      <div className="hidden md:flex h-full w-full">
        {/* ── LEFT HALF: Business Owners ── */}
        <motion.div
          variants={leftPanel}
          initial="hidden"
          animate="visible"
          className="relative flex h-full w-1/2 flex-col items-center justify-center px-8 lg:px-16"
          style={{ backgroundColor: EGGPLANT }}
        >
          <div className="relative z-10 max-w-md text-center">
            <motion.p
              custom={0}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: DECO_GOLD }}
            >
              Business Owners
            </motion.p>

            <motion.h2
              custom={1}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-wide text-white lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "'KingSans', sans-serif" }}
            >
              Secure Your
              <br />
              Funding
            </motion.h2>

            <motion.p
              custom={2}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-6 max-w-sm font-[family-name:var(--font-open-sans)] text-base leading-relaxed text-white/70"
            >
              Navigate SBA lending with confidence. Direct access to the
              nation&apos;s most powerful small business loan program.
            </motion.p>

            <motion.div
              custom={3}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8"
            >
              <Link
                href="https://learn.lordsoflending.com/pricing"
                className="inline-flex items-center gap-2 rounded-md border px-8 py-3 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                style={{ borderColor: DECO_GOLD, color: DECO_GOLD }}
              >
                Start Learning
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT HALF: Brokers & Originators ── */}
        <motion.div
          variants={rightPanel}
          initial="hidden"
          animate="visible"
          className="relative flex h-full w-1/2 flex-col items-center justify-center px-8 lg:px-16"
          style={{ backgroundColor: SUITE_BLACK }}
        >
          <div className="relative z-10 max-w-md text-center">
            <motion.p
              custom={0}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: DECO_GOLD }}
            >
              Brokers &amp; Originators
            </motion.p>

            <motion.h2
              custom={1}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-wide text-white lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "'KingSans', sans-serif" }}
            >
              Build Your
              <br />
              Empire
            </motion.h2>

            <motion.p
              custom={2}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-6 max-w-sm font-[family-name:var(--font-open-sans)] text-base leading-relaxed text-white/70"
            >
              Master the art of SBA origination. Transform from order-taker to
              deal-maker with proven systems.
            </motion.p>

            <motion.div
              custom={3}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8"
            >
              <Link
                href="https://learn.lordsoflending.com/pricing"
                className="inline-flex items-center gap-2 rounded-md border px-8 py-3 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                style={{ borderColor: DECO_GOLD, color: DECO_GOLD }}
              >
                Begin Training
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ════════════ CENTER DIVIDER — DESKTOP (vertical) ════════════ */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden -translate-x-1/2 md:flex flex-col items-center"
        aria-hidden="true"
      >
        {/* Vertical line */}
        <motion.div
          variants={dividerDraw}
          initial="hidden"
          animate="visible"
          className="h-full w-px origin-top"
          style={{ backgroundColor: `${DECO_GOLD}66` }}
        />

        {/* Diamond at center */}
        <motion.div
          variants={diamondReveal}
          initial="hidden"
          animate="visible"
          className="absolute top-1/2 -translate-y-1/2"
        >
          <div
            className="h-3 w-3 rotate-45"
            style={{ backgroundColor: DECO_GOLD }}
          />
        </motion.div>
      </div>

      {/* ════════════ SPLIT PANELS — MOBILE (stacked vertically) ════════════ */}
      <div className="flex md:hidden h-full w-full flex-col">
        {/* ── TOP HALF: Business Owners ── */}
        <motion.div
          variants={topPanel}
          initial="hidden"
          animate="visible"
          className="relative flex h-1/2 w-full flex-col items-center justify-center px-6 py-12"
          style={{ backgroundColor: EGGPLANT }}
        >
          <div className="relative z-10 max-w-sm text-center">
            <motion.p
              custom={0}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold tracking-[0.25em] uppercase"
              style={{ color: DECO_GOLD }}
            >
              Business Owners
            </motion.p>

            <motion.h2
              custom={1}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mt-3 text-2xl font-extrabold leading-[1.1] tracking-wide text-white sm:text-3xl"
              style={{ fontFamily: "'KingSans', sans-serif" }}
            >
              Secure Your Funding
            </motion.h2>

            <motion.p
              custom={2}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-3 max-w-xs font-[family-name:var(--font-open-sans)] text-sm leading-relaxed text-white/70"
            >
              Navigate SBA lending with confidence. Direct access to the
              nation&apos;s most powerful small business loan program.
            </motion.p>

            <motion.div
              custom={3}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5"
            >
              <Link
                href="https://learn.lordsoflending.com/pricing"
                className="inline-flex items-center rounded-md border px-6 py-2.5 font-[family-name:var(--font-montserrat)] text-xs font-bold tracking-wider transition-all duration-300 hover:bg-white/10"
                style={{ borderColor: DECO_GOLD, color: DECO_GOLD }}
              >
                Start Learning
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── HORIZONTAL DIVIDER — MOBILE ── */}
        <div
          className="relative z-20 flex items-center justify-center"
          aria-hidden="true"
        >
          <motion.div
            variants={dividerDrawHorizontal}
            initial="hidden"
            animate="visible"
            className="h-px w-full origin-left"
            style={{ backgroundColor: `${DECO_GOLD}66` }}
          />
          <motion.div
            variants={diamondReveal}
            initial="hidden"
            animate="visible"
            className="absolute"
          >
            <div
              className="h-2.5 w-2.5 rotate-45"
              style={{ backgroundColor: DECO_GOLD }}
            />
          </motion.div>
        </div>

        {/* ── BOTTOM HALF: Brokers & Originators ── */}
        <motion.div
          variants={bottomPanel}
          initial="hidden"
          animate="visible"
          className="relative flex h-1/2 w-full flex-col items-center justify-center px-6 py-12"
          style={{ backgroundColor: SUITE_BLACK }}
        >
          <div className="relative z-10 max-w-sm text-center">
            <motion.p
              custom={0}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold tracking-[0.25em] uppercase"
              style={{ color: DECO_GOLD }}
            >
              Brokers &amp; Originators
            </motion.p>

            <motion.h2
              custom={1}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mt-3 text-2xl font-extrabold leading-[1.1] tracking-wide text-white sm:text-3xl"
              style={{ fontFamily: "'KingSans', sans-serif" }}
            >
              Build Your Empire
            </motion.h2>

            <motion.p
              custom={2}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-3 max-w-xs font-[family-name:var(--font-open-sans)] text-sm leading-relaxed text-white/70"
            >
              Master the art of SBA origination. Transform from order-taker to
              deal-maker with proven systems.
            </motion.p>

            <motion.div
              custom={3}
              variants={contentFadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5"
            >
              <Link
                href="https://learn.lordsoflending.com/pricing"
                className="inline-flex items-center rounded-md border px-6 py-2.5 font-[family-name:var(--font-montserrat)] text-xs font-bold tracking-wider transition-all duration-300 hover:bg-white/10"
                style={{ borderColor: DECO_GOLD, color: DECO_GOLD }}
              >
                Begin Training
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ════════════ BOTTOM TAGLINE ════════════ */}
      <motion.div
        variants={taglineReveal}
        initial="hidden"
        animate="visible"
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 md:bottom-8"
      >
        <p
          className="font-[family-name:var(--font-montserrat)] text-[10px] font-medium tracking-[0.3em] uppercase md:text-xs"
          style={{ color: DECO_GOLD }}
        >
          Purveyors of Honest Capital
        </p>
      </motion.div>
    </section>
  );
}
