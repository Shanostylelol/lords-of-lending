"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Brand Palette                                                      */
/* ------------------------------------------------------------------ */

const DECO_GOLD = "#E2A970";
const DK_GOLD = "#AA712C";
const SUITE_BLACK = "#231F20";
const STONEY_WHITE = "#F7FCFC";

/* ------------------------------------------------------------------ */
/*  Particle Configuration                                             */
/* ------------------------------------------------------------------ */

interface Particle {
  readonly id: number;
  readonly size: number;
  readonly left: string;
  readonly delay: string;
  readonly duration: string;
  readonly blur: number;
  readonly peakOpacity: number;
}

/**
 * Deterministic pseudo-random seed per particle so layout is stable
 * across renders while still looking organic.
 */
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const PARTICLE_COUNT = 25;

const PARTICLES: readonly Particle[] = Array.from(
  { length: PARTICLE_COUNT },
  (_, i) => {
    const r = (offset: number) => seededRandom(i + offset);
    return {
      id: i,
      size: Math.round(4 + r(0) * 16),           // 4-20px
      left: `${(r(1) * 100).toFixed(1)}%`,
      delay: `${(r(2) * -15).toFixed(1)}s`,       // stagger start
      duration: `${(8 + r(3) * 7).toFixed(1)}s`,  // 8-15s
      blur: Math.round(2 + r(4) * 6),             // 2-8px
      peakOpacity: +(0.05 + r(5) * 0.1).toFixed(2), // 5-15%
    } as const;
  },
);

/* ------------------------------------------------------------------ */
/*  Framer Motion Config                                               */
/* ------------------------------------------------------------------ */

const FADE_UP_LOGO = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const },
} as const;

const FADE_UP_ALT = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] as const },
} as const;

const FADE_UP_TAGLINE = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] as const },
} as const;

const FADE_UP_CTA = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 1.7, ease: [0.22, 1, 0.36, 1] as const },
} as const;

/* ------------------------------------------------------------------ */
/*  CSS Keyframes (injected once via <style>)                          */
/* ------------------------------------------------------------------ */

const particleKeyframes = `
@keyframes particle-rise {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: var(--peak-opacity);
  }
  90% {
    opacity: var(--peak-opacity);
  }
  100% {
    transform: translateY(-100px) translateX(20px);
    opacity: 0;
  }
}
`;

/* ------------------------------------------------------------------ */
/*  Particle Field Component                                           */
/* ------------------------------------------------------------------ */

function ParticleField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: particleKeyframes }} />

      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-20px",
            background: `radial-gradient(circle, ${DECO_GOLD} 0%, ${DK_GOLD} 100%)`,
            filter: `blur(${p.blur}px)`,
            opacity: 0,
            animationName: "particle-rise",
            animationDuration: p.duration,
            animationDelay: p.delay,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            ["--peak-opacity" as string]: p.peakOpacity,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function HeroBPage() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #0B1D33 0%, ${SUITE_BLACK} 100%)`,
      }}
    >
      {/* ---- Particle field ---- */}
      <ParticleField />

      {/* ---- Content ---- */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20">
        {/* Vertical wordmark */}
        <motion.div
          className="relative"
          style={{
            height: "55vh",
            width: "auto",
            filter: `drop-shadow(0 0 80px rgba(226,169,112,0.15))`,
          }}
          {...FADE_UP_LOGO}
        >
          <Image
            src="/images/brand/1600w/lol-wordmark-vert-gold-1600w.png"
            alt="Lords of Lending"
            width={400}
            height={880}
            className="h-full w-auto object-contain"
            priority
          />
        </motion.div>

        {/* Horizontal alt wordmark */}
        <motion.div className="mt-8" {...FADE_UP_ALT}>
          <Image
            src="/images/brand/1600w/lol-wordmark hor-alt w marg-gold-1600w.png"
            alt="Lords of Lending"
            width={200}
            height={60}
            className="h-auto w-[200px] object-contain"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-10 text-center font-[family-name:var(--font-montserrat)] text-lg font-semibold uppercase tracking-[0.25em] sm:text-xl md:text-2xl"
          style={{ color: STONEY_WHITE }}
          {...FADE_UP_TAGLINE}
        >
          Where Brokers Become Empires
        </motion.p>

        {/* CTA */}
        <motion.div className="mt-10" {...FADE_UP_CTA}>
          <a
            href="https://learn.lordsoflending.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(226,169,112,0.3)]"
            style={{
              backgroundColor: DK_GOLD,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget.style.backgroundColor = DECO_GOLD);
            }}
            onMouseLeave={(e) => {
              (e.currentTarget.style.backgroundColor = DK_GOLD);
            }}
          >
            Enter the Kingdom
          </a>
        </motion.div>
      </div>
    </main>
  );
}
