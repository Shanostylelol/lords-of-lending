"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Brand Tokens ─── */
const DEEP_NAVY = "#0B1D33";
const SUITE_BLACK = "#231F20";
const DECO_GOLD = "#E2A970";
const DK_GOLD = "#AA712C";
const STONEY_WHITE = "#F7FCFC";

/* ─── Animation Variants ─── */
const logoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: (delay: number) => ({
    scaleX: 1,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

/* ─── Stats Data ─── */
const stats = [
  { label: "18+ Episodes" },
  { label: "$2B+ in Deals" },
  { label: "500+ Graduates" },
] as const;

export default function HeroDPage() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(
          180deg,
          ${DEEP_NAVY} 0%,
          ${SUITE_BLACK} 35%,
          rgba(170, 113, 44, 0.05) 50%,
          ${SUITE_BLACK} 65%,
          #0A0A0A 100%
        )`,
        backgroundSize: "200% 200%",
        animation: "gradientShift 8s ease infinite",
      }}
    >
      {/* ── Noise / Grain Overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Content Stack ── */}
      <div className="relative z-20 flex flex-col items-center px-6 py-16 sm:py-20">
        {/* ── Decorative Line (Top) ── */}
        <motion.div
          className="mb-8 flex items-center sm:mb-10"
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={lineReveal}
        >
          <span
            className="block h-[3px] w-[6px]"
            style={{ borderTop: `1px solid ${DECO_GOLD}80` }}
            aria-hidden="true"
          />
          <span
            className="block h-px w-[140px] sm:w-[200px]"
            style={{ backgroundColor: `${DECO_GOLD}80` }}
            aria-hidden="true"
          />
          <span
            className="block h-[3px] w-[6px]"
            style={{ borderTop: `1px solid ${DECO_GOLD}80` }}
            aria-hidden="true"
          />
        </motion.div>

        {/* ── Logo ── */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <div className="relative h-[42vh] w-[36vw] min-w-[160px] max-w-[360px] sm:h-[48vh] md:h-[50vh]">
            <Image
              src="/images/brand/1600w/lol-wordmark-vert-dkgold-1600w.png"
              alt="Lords of Lending"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 36vw, 360px"
            />
          </div>
        </motion.div>

        {/* ── Decorative Line (Bottom) ── */}
        <motion.div
          className="mt-8 flex items-center sm:mt-10"
          initial="hidden"
          animate="visible"
          custom={0.8}
          variants={lineReveal}
        >
          <span
            className="block h-[3px] w-[6px]"
            style={{ borderBottom: `1px solid ${DECO_GOLD}80` }}
            aria-hidden="true"
          />
          <span
            className="block h-px w-[140px] sm:w-[200px]"
            style={{ backgroundColor: `${DECO_GOLD}80` }}
            aria-hidden="true"
          />
          <span
            className="block h-[3px] w-[6px]"
            style={{ borderBottom: `1px solid ${DECO_GOLD}80` }}
            aria-hidden="true"
          />
        </motion.div>

        {/* ── Tagline ── */}
        <motion.p
          className="mt-8 font-[family-name:var(--font-montserrat)] text-[11px] font-medium tracking-[0.3em] uppercase sm:mt-10 sm:text-xs md:text-sm"
          style={{ color: DECO_GOLD }}
          initial="hidden"
          animate="visible"
          custom={1.1}
          variants={fadeUp}
        >
          Purveyors of Honest Capital
        </motion.p>

        {/* ── Value Proposition ── */}
        <motion.p
          className="mt-5 max-w-md text-center font-[family-name:var(--font-open-sans)] text-sm leading-relaxed sm:mt-6 sm:text-base md:max-w-lg"
          style={{ color: `${STONEY_WHITE}B3` }}
          initial="hidden"
          animate="visible"
          custom={1.25}
          variants={fadeUp}
        >
          The #1 SBA lending education platform. For business owners seeking
          capital. For brokers building legacies.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5 md:mt-12"
          initial="hidden"
          animate="visible"
          custom={1.4}
          variants={fadeUp}
        >
          {/* Solid Gold CTA */}
          <Link
            href="https://learn.lordsoflending.com/pricing"
            className="group relative inline-flex items-center justify-center rounded-none px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-all duration-500 hover:brightness-110 sm:text-xs"
            style={{ backgroundColor: DK_GOLD }}
          >
            <span className="relative z-10">For Business Owners</span>
            <span
              className="absolute inset-0 origin-left scale-x-0 bg-white/10 transition-transform duration-500 group-hover:scale-x-100"
              aria-hidden="true"
            />
          </Link>

          {/* Ghost CTA */}
          <Link
            href="https://learn.lordsoflending.com/pricing"
            className="group relative inline-flex items-center justify-center rounded-none border px-8 py-3.5 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-500 sm:text-xs"
            style={{
              color: DECO_GOLD,
              borderColor: DK_GOLD,
            }}
          >
            <span className="relative z-10">For Brokers</span>
            <span
              className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              style={{ backgroundColor: `${DK_GOLD}18` }}
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          className="mt-14 flex items-center gap-0 sm:mt-16 md:mt-20"
          initial="hidden"
          animate="visible"
          custom={1.55}
          variants={fadeUp}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <span
                  className="mx-4 inline-block h-[3px] w-[3px] rounded-full sm:mx-5"
                  style={{ backgroundColor: `${DECO_GOLD}60` }}
                  aria-hidden="true"
                />
              )}
              <span
                className="font-[family-name:var(--font-montserrat)] text-[10px] font-medium tracking-[0.25em] uppercase sm:text-[11px]"
                style={{ color: `${DECO_GOLD}99` }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Keyframes ── */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 50% 0%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
