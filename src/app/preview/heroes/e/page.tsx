"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Brand Tokens ─── */
const STAGE_BLACK = "#0a0a0a";
const DECO_GOLD = "#E2A970";
// const DK_GOLD = "#AA712C";   // reserved — Deco Gold dark variant
// const EGGPLANT = "#3B0F44";  // reserved — used in CSS gradient strings below
const STONEY_WHITE = "#F7FCFC";

/* ─── Animation Variants ─── */
const spotlightFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const logoReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.6,
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
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const cardSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ─── Audience Card Data ─── */
const AUDIENCE_CARDS = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke={DECO_GOLD}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Briefcase / Building icon */}
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v4" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Business Owners",
    description: "Navigate SBA funding with confidence",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke={DECO_GOLD}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Trending-up / Target icon */}
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Brokers & Originators",
    description: "Master the art of deal-making",
  },
] as const;

export default function HeroEPage() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: STAGE_BLACK }}
    >
      {/* ── Spotlight: Primary Gold ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        initial="hidden"
        animate="visible"
        variants={spotlightFade}
        style={{
          width: 600,
          height: 600,
          top: "calc(50% - 380px)",
          left: "calc(50% - 300px)",
          background:
            "radial-gradient(circle, rgba(226,169,112,0.08) 0%, rgba(226,169,112,0.03) 40%, transparent 70%)",
          animation: "spotlightDriftGold 12s ease-in-out infinite",
          borderRadius: "50%",
        }}
      />

      {/* ── Spotlight: Secondary Eggplant ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        initial="hidden"
        animate="visible"
        variants={spotlightFade}
        style={{
          width: 420,
          height: 420,
          bottom: "calc(50% - 300px)",
          right: "calc(50% - 260px)",
          background:
            "radial-gradient(circle, rgba(59,15,68,0.06) 0%, rgba(59,15,68,0.02) 40%, transparent 70%)",
          animation: "spotlightDriftEggplant 12s ease-in-out infinite",
          borderRadius: "50%",
        }}
      />

      {/* ── Logo ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={logoReveal}
      >
        <div
          className="relative w-[44vw] min-w-[160px] max-w-[340px]"
          style={{ height: "55vh" }}
        >
          <Image
            src="/images/brand/1600w/lol-wordmark-vert-gold-1600w.png"
            alt="Lords of Lending"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 60vw, (max-width: 1024px) 44vw, 340px"
            style={{
              filter: "drop-shadow(0 0 40px rgba(226,169,112,0.2))",
            }}
          />
        </div>
      </motion.div>

      {/* ── Tagline ── */}
      <motion.p
        className="relative z-10 mt-6 font-[family-name:var(--font-montserrat)] text-[10px] font-light tracking-[0.4em] uppercase sm:text-[11px] md:mt-8 md:text-xs"
        style={{ color: DECO_GOLD }}
        initial="hidden"
        animate="visible"
        custom={1.8}
        variants={fadeUp}
      >
        Purveyors of Honest Capital
      </motion.p>

      {/* ── Gold Gradient Divider ── */}
      <motion.div
        className="relative z-10 mt-6 md:mt-8"
        initial="hidden"
        animate="visible"
        custom={2.1}
        variants={fadeUp}
        aria-hidden="true"
      >
        <div
          className="h-px w-[200px] sm:w-[260px] md:w-[300px]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${DECO_GOLD}60 30%, ${DECO_GOLD} 50%, ${DECO_GOLD}60 70%, transparent 100%)`,
          }}
        />
      </motion.div>

      {/* ── Audience Path Cards ── */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-4 px-4 sm:flex-row sm:gap-6 md:mt-14">
        {AUDIENCE_CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial="hidden"
            animate="visible"
            custom={2.4 + i * 0.3}
            variants={cardSlideUp}
          >
            <Link
              href="https://learn.lordsoflending.com/pricing"
              className="group flex w-[280px] flex-col items-center rounded-sm border p-6 transition-all duration-500 sm:w-[260px] md:w-[300px]"
              style={{
                borderColor: `${DECO_GOLD}26`,
                backgroundColor: `${STAGE_BLACK}cc`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = `${DECO_GOLD}66`;
                el.style.boxShadow = `0 0 30px ${DECO_GOLD}10, 0 0 60px ${DECO_GOLD}06`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = `${DECO_GOLD}26`;
                el.style.boxShadow = "none";
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#E2A97020]">
                {card.icon}
              </div>
              <h2
                className="font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-[0.12em] uppercase"
                style={{ color: STONEY_WHITE }}
              >
                {card.title}
              </h2>
              <p
                className="mt-2 text-center font-[family-name:var(--font-open-sans)] text-[13px] font-light leading-relaxed"
                style={{ color: `${STONEY_WHITE}99` }}
              >
                {card.description}
              </p>
              <div
                className="mt-4 flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-white"
                style={{ color: DECO_GOLD }}
              >
                <span>Explore</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── Domain Watermark ── */}
      <motion.p
        className="absolute bottom-6 z-10 font-[family-name:var(--font-montserrat)] text-[9px] font-light tracking-[0.35em] uppercase sm:text-[10px]"
        style={{ color: `${STONEY_WHITE}22` }}
        initial="hidden"
        animate="visible"
        custom={3.2}
        variants={fadeUp}
      >
        lordsoflending.com
      </motion.p>

      {/* ── Keyframes ── */}
      <style jsx global>{`
        @keyframes spotlightDriftGold {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, -20px);
          }
          50% {
            transform: translate(50px, -40px);
          }
          75% {
            transform: translate(20px, -15px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes spotlightDriftEggplant {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-25px, 15px);
          }
          50% {
            transform: translate(-50px, 35px);
          }
          75% {
            transform: translate(-20px, 10px);
          }
          100% {
            transform: translate(0, 0);
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
