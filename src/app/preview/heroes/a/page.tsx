"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Brand Tokens ─── */
const SUITE_BLACK = "#231F20";
const DECO_GOLD = "#E2A970";
const DK_GOLD = "#AA712C";

/* ─── Animation Variants ─── */
const logoVariants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const chevronBounce = {
  initial: { y: 0, opacity: 0.4 },
  animate: {
    y: [0, 8, 0],
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 2.4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function HeroAPage() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: SUITE_BLACK }}
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

      {/* ── Animated Gold Glow ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div
          className="h-[70vh] w-[70vh] max-w-[90vw] rounded-full"
          style={{
            background: `radial-gradient(circle, ${DK_GOLD} 0%, transparent 70%)`,
            animation: "glowPulse 6s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Logo ── */}
      <motion.div
        className="relative z-20 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        <div className="relative h-[50vh] w-[40vw] min-w-[180px] max-w-[400px] sm:h-[55vh] md:h-[60vh]">
          <Image
            src="/images/brand/1600w/lol-wordmark-vert-dkgold-1600w.png"
            alt="Lords of Lending"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 400px"
          />
        </div>
      </motion.div>

      {/* ── Tagline ── */}
      <motion.p
        className="relative z-20 mt-8 font-[family-name:var(--font-montserrat)] text-[11px] font-medium tracking-[0.35em] uppercase sm:text-xs md:mt-10 md:text-sm"
        style={{ color: DECO_GOLD }}
        initial="hidden"
        animate="visible"
        custom={1.4}
        variants={fadeUp}
      >
        Purveyors of Honest Capital
      </motion.p>

      {/* ── CTAs ── */}
      <motion.div
        className="relative z-20 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 md:mt-12"
        initial="hidden"
        animate="visible"
        custom={1.8}
        variants={fadeUp}
      >
        <Link
          href="https://learn.lordsoflending.com/pricing"
          className="group relative inline-flex items-center justify-center rounded-none border px-8 py-3 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#E2A970]/10 sm:text-xs"
          style={{
            color: DECO_GOLD,
            borderColor: `${DK_GOLD}80`,
          }}
        >
          <span className="relative z-10">I&apos;m a Business Owner</span>
          <span
            className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ backgroundColor: `${DK_GOLD}12` }}
          />
        </Link>

        <Link
          href="https://learn.lordsoflending.com/pricing"
          className="group relative inline-flex items-center justify-center rounded-none border px-8 py-3 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#E2A970]/10 sm:text-xs"
          style={{
            color: DECO_GOLD,
            borderColor: `${DK_GOLD}80`,
          }}
        >
          <span className="relative z-10">I&apos;m a Broker</span>
          <span
            className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ backgroundColor: `${DK_GOLD}12` }}
          />
        </Link>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 z-20 flex flex-col items-center gap-2"
        variants={chevronBounce}
        initial="initial"
        animate="animate"
      >
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1L10 10L19 1"
            stroke={DK_GOLD}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* ── Keyframes injected via style tag ── */}
      <style jsx global>{`
        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.08;
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
