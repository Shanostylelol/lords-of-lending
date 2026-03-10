"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_LOGOS, PODCAST_SUBSCRIBE_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

/* ════════════════════════════════════════════════════════
   KING SANS FONT
   ════════════════════════════════════════════════════════ */
const INJECTED_STYLES = `
@font-face {
  font-family: 'KingSans';
  src: url('/fonts/preview/KingSans.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@keyframes logo-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

/* ════════════════════════════════════════════════════════
   BRAND PALETTE
   ════════════════════════════════════════════════════════ */
const EGGPLANT = "#3B0F44";
const SUITE_BLACK = "#231F20";
const DK_GOLD = "#AA712C";
const DECO_GOLD = "#E2A970";
/* Derived tones from Suite Black — warm, zero blue */
const PAGE_BLACK = "#181516";       /* deeper than Suite Black, page base */
const CARD_BG = "#252122";          /* warm dark card surface */
const CARD_BORDER = "#3A3436";      /* warm subtle border */
const TEXT_MUTED = "#9A918D";       /* warm gray, not blue-gray */

/* ════════════════════════════════════════════════════════
   EASING
   ════════════════════════════════════════════════════════ */
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

/* ════════════════════════════════════════════════════════
   TYPES
   ════════════════════════════════════════════════════════ */
type ActivePath = "none" | "owners" | "brokers";

interface Feature {
  num: string;
  title: string;
  description: string;
}

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tag: string;
  readTime: string;
}

/* ════════════════════════════════════════════════════════
   CONTENT DATA
   ════════════════════════════════════════════════════════ */
const OWNER_FEATURES: Feature[] = [
  {
    num: "01",
    title: "SBA Loan Education",
    description:
      "Understand every SBA program — 7(a), 504, microloans — without the banker jargon. We break it down so you make decisions, not guesses.",
  },
  {
    num: "02",
    title: "Application Guidance",
    description:
      "Step-by-step support from pre-qualification through closing day. Know what lenders actually want before you walk in the door.",
  },
  {
    num: "03",
    title: "Document Preparation",
    description:
      "The number one reason SBA loans stall is incomplete paperwork. Our checklists make sure you show up ready — every time.",
  },
  {
    num: "04",
    title: "The Lords of Lending Podcast",
    description:
      "Weekly episodes breaking down real deals, real numbers, real strategies. No fluff, no sales pitch — just honest capital talk.",
  },
];

const BROKER_FEATURES: Feature[] = [
  {
    num: "01",
    title: "Professional Training",
    description:
      "Structured programs at Learn.LordsOfLending.com designed to make you money. Not theory — field-tested origination systems that close deals.",
  },
  {
    num: "02",
    title: "The Lords of Lending Podcast",
    description:
      "Industry conversations and deal breakdowns from active originators. The show brokers actually listen to between client meetings.",
  },
  {
    num: "03",
    title: "Origination Playbook",
    description:
      "Battle-tested systems for packaging, presenting, and closing SBA deals. Stop quoting rates and start structuring wins.",
  },
  {
    num: "04",
    title: "Article Library",
    description:
      "Deep-dive content on compliance, deal structure, and client management. Written by originators, for originators.",
  },
];

/* Owner-facing articles — borrower education */
const OWNER_ARTICLES: Article[] = [
  {
    slug: "what-to-do-if-you-cant-pay-your-business-loan",
    title: "What to Do If You Can\u2019t Pay Your Business Loan",
    excerpt: "Struggling with loan payments? Learn how to restructure, refinance, or negotiate your way out of a tough spot.",
    image: "/images/blog/cant-pay-loan.webp",
    tag: "Loan Management",
    readTime: "7 min",
  },
  {
    slug: "sba-business-acquisition-what-lenders-really-expect",
    title: "How to Buy a Business with an SBA Loan",
    excerpt: "Learn how to finance a business purchase with an SBA loan and what lenders really look for.",
    image: "/images/blog/lenders-expect.webp",
    tag: "SBA Acquisition",
    readTime: "8 min",
  },
  {
    slug: "business-loans-with-bad-credit-what-you-need-to-know",
    title: "Business Loans with Bad Credit: What You Need to Know",
    excerpt: "Bad credit doesn\u2019t mean no funding — but it does mean tougher terms. Here\u2019s how to navigate it.",
    image: "/images/blog/bad-credit.webp",
    tag: "Credit",
    readTime: "6 min",
  },
];

/* Broker-facing articles — origination & strategy */
const BROKER_ARTICLES: Article[] = [
  {
    slug: "5-myths-about-sba-loans-every-founder-should-know",
    title: "5 Myths About SBA Loans Every Founder Should Know",
    excerpt: "Think SBA loans are fast, easy, or backed by the government? Think again.",
    image: "/images/blog/five-myths.webp",
    tag: "SBA Education",
    readTime: "5 min",
  },
  {
    slug: "the-lie-we-bought-why-time-management-isnt-enough-in-sba-lending",
    title: "Attention Trumps Time in SBA Lending",
    excerpt: "Efficient lenders lose deals when they focus on time over attention. Here\u2019s the shift that wins.",
    image: "/images/blog/attention-leverage.webp",
    tag: "Origination",
    readTime: "7 min",
  },
  {
    slug: "100-financing-for-business-expansion",
    title: "How to Get 100% SBA Financing for Business Expansion",
    excerpt: "Learn how to qualify for 100% SBA 7(a) financing to grow your existing business.",
    image: "/images/blog/sba-financing.webp",
    tag: "Deal Structure",
    readTime: "6 min",
  },
];

/* ════════════════════════════════════════════════════════
   TESTIMONIALS
   ════════════════════════════════════════════════════════ */
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  result: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Not only did he provide professional and very prompt service and feedback, but also offered reassurance and solutions when we encountered roadblocks that seemed almost impossible to navigate through. I have to truly say he went above and beyond his duties to see the acquisition to the end and I can't recommend his services enough!",
    name: "Shawn Kleotzer",
    title: "Owner & President, A1A Surveying Services",
    result: "SBA Acquisition",
  },
  {
    quote:
      "Stephanie is the most knowledgeable banker I have used! I have done 5 SBA loans with her. She is always ready to help and guide you through every point of the process. When you have the right person, it makes the loan process so easy. Stephany is that person — she is on your side! You don't get that personalized treatment anywhere else.",
    name: "Ruth Thornquest",
    title: "CEO, Faithful Heritage Holdings",
    result: "5 SBA Loans Funded",
  },
];

/* ════════════════════════════════════════════════════════
   TRUST LOGOS (text-based for now — swap with real SVGs)
   ════════════════════════════════════════════════════════ */
/* Deals in Action — real funded clients */
const DEALS_IN_ACTION = [
  "A1A Surveying Services",
  "Artificial Grass Liquidators",
  "Faithful Heritage Holdings",
  "Hampton by Hilton",
  "Linkflow",
  "Blue Edge",
  "FedEx Routes",
  "glo",
  "Unite Digital",
  "Wireless Buybacks",
  "Choice Hotels",
  "Belmar Lanes",
  "Ruth's Chris",
  "Zelectric",
];

/* Stats from live site */
const TRUST_STATS = [
  { value: "425+", label: "Businesses Funded" },
  { value: "$450M+", label: "Funding Delivered" },
  { value: "55+", label: "Years of Expertise" },
];

/* ════════════════════════════════════════════════════════
   LATEST EPISODE
   ════════════════════════════════════════════════════════ */
const LATEST_EPISODE = {
  number: "EP 20",
  title: "Why Equity (Not Cash Flow) Makes or Breaks SBA Deals",
  slug: "why-equity-not-cash-flow-makes-or-breaks-sba-deals-lol-20",
  description:
    "Former SBA deputy director Lance Sexton reveals why equity injection — not cash flow — is the #1 deal killer, and what happens when thin deals go to liquidation.",
  duration: "42 min",
  date: "Mar 4, 2026",
  buzzsproutId: "18585787", /* Using EP 18's player as EP 20 is TBD */
};

/* ════════════════════════════════════════════════════════
   SVG COMPONENTS — Podcast Platform Logos
   ════════════════════════════════════════════════════════ */
function ApplePodcastsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 110 16.8 8.4 8.4 0 010-16.8zm0 2.4a3.6 3.6 0 00-1.2 6.996V18a1.2 1.2 0 002.4 0v-4.997A3.607 3.607 0 0015.6 9.6 3.6 3.6 0 0012 6zm0 1.8a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6z" />
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════════════════════ */
export default function DualPathHomePage() {
  const [activePath, setActivePath] = useState<ActivePath>("none");
  const [heroVisible, setHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* ── Intersection observer for sticky bar ── */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  /* ── Path selection handler ── */
  const selectPath = (path: "owners" | "brokers") => {
    setActivePath(path);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 950);
  };

  const switchPath = () => {
    const next = activePath === "owners" ? "brokers" : "owners";
    setActivePath(next);
    // Scroll to content section (user is already past hero)
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  /* ── Computed widths for hero panels ── */
  const leftW =
    activePath === "brokers" ? "0%" : activePath === "owners" ? "100%" : "50%";
  const rightW =
    activePath === "owners" ? "0%" : activePath === "brokers" ? "100%" : "50%";
  const leftO = activePath === "brokers" ? 0 : 1;
  const rightO = activePath === "owners" ? 0 : 1;

  /* ── Same for mobile (height) ── */
  const topH =
    activePath === "brokers" ? "0%" : activePath === "owners" ? "100%" : "50%";
  const botH =
    activePath === "owners" ? "0%" : activePath === "brokers" ? "100%" : "50%";

  /* ── Active content ── */
  const isOwners = activePath === "owners";
  const isBrokers = activePath === "brokers";
  const pathChosen = activePath !== "none";
  const features = isOwners ? OWNER_FEATURES : BROKER_FEATURES;
  const articles = isOwners ? OWNER_ARTICLES : BROKER_ARTICLES;
  const accentBg = isOwners ? EGGPLANT : SUITE_BLACK;

  return (
    <main className="min-h-screen bg-[#181516]">
      {/* ── Font injection ── */}
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />

      {/* ════════════════════════════════════════════════════════
          STICKY PATH SWITCHER
          ════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!heroVisible && pathChosen && (
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_QUART }}
            className="fixed top-[72px] left-0 right-0 z-40 flex items-center justify-between border-b px-4 py-2.5 sm:px-8"
            style={{
              backgroundColor: SUITE_BLACK,
              borderColor: `${DECO_GOLD}20`,
            }}
          >
            {/* Logo */}
            <Image
              src="/images/brand/1600w/lol-wordmark hor-alt w marg-gold-1600w.png"
              alt="Lords of Lending"
              width={140}
              height={40}
              className="h-auto w-[110px] sm:w-[140px]"
            />

            {/* Path tabs */}
            <div className="flex gap-1 rounded-full border p-0.5" style={{ borderColor: `${DECO_GOLD}30` }}>
              <button
                onClick={() => {
                  if (!isOwners) switchPath();
                }}
                className="rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase transition-all sm:px-4 sm:text-xs"
                style={{
                  backgroundColor: isOwners ? `${EGGPLANT}` : "transparent",
                  color: isOwners ? "#fff" : TEXT_MUTED,
                }}
              >
                Owners
              </button>
              <button
                onClick={() => {
                  if (!isBrokers) switchPath();
                }}
                className="rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase transition-all sm:px-4 sm:text-xs"
                style={{
                  backgroundColor: isBrokers ? SUITE_BLACK : "transparent",
                  color: isBrokers ? "#fff" : TEXT_MUTED,
                }}
              >
                Brokers
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════
          HERO — THE SPLIT REVEAL
          ════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] w-full overflow-hidden"
        aria-label="Choose your path"
      >
        {/* ── Texture overlay ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ delay: 0.4, duration: 2, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 z-[3]"
          aria-hidden="true"
        >
          <Image
            src="/images/textures/dark-gold-marble.jpg"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
        </motion.div>

        {/* ── Watermark logo (stays visible, subtle) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.055 }}
          transition={{ delay: 1.8, duration: 1.6, ease: "easeOut" }}
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

        {/* Top logo removed — global navbar provides it */}

        {/* ════════ DESKTOP PANELS (side by side) ════════ */}
        <div className="hidden h-full w-full md:flex">
          {/* ── Left: Business Owners ── */}
          <motion.div
            initial={{ x: "-100%", opacity: 0, width: "50%" }}
            animate={{ x: "0%", opacity: leftO, width: leftW }}
            transition={{ duration: 0.95, ease: EASE_EXPO }}
            className="relative flex h-full flex-none flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: EGGPLANT }}
          >
            <div className="relative z-10 max-w-lg px-8 text-center">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.7, ease: EASE_QUART }}
                className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: DECO_GOLD }}
              >
                Business Owners
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.7, ease: EASE_QUART }}
                className={`mt-5 font-extrabold leading-[1.1] tracking-wide text-white transition-all duration-700 ${pathChosen ? "text-5xl lg:text-6xl xl:text-7xl" : "text-4xl lg:text-5xl xl:text-6xl"}`}
                style={{ fontFamily: "'KingSans', sans-serif" }}
              >
                Secure Your
                <br />
                Funding
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7, ease: EASE_QUART }}
                className="mx-auto mt-6 max-w-sm font-[family-name:var(--font-open-sans)] text-base leading-relaxed text-white/70"
              >
                Navigate SBA lending with confidence. Direct access to the
                nation&apos;s most powerful small business loan program.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.45, duration: 0.7, ease: EASE_QUART }}
                className="mt-8"
              >
                <button
                  onClick={() => selectPath("owners")}
                  className="inline-flex items-center gap-2 rounded-md border px-8 py-3 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                  style={{ borderColor: DECO_GOLD, color: DECO_GOLD }}
                >
                  Show Me How
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Brokers & Originators ── */}
          <motion.div
            initial={{ x: "100%", opacity: 0, width: "50%" }}
            animate={{ x: "0%", opacity: rightO, width: rightW }}
            transition={{ duration: 0.95, ease: EASE_EXPO }}
            className="relative flex h-full flex-none flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: SUITE_BLACK }}
          >
            <div className="relative z-10 max-w-lg px-8 text-center">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.7, ease: EASE_QUART }}
                className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: DECO_GOLD }}
              >
                Brokers &amp; Originators
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.7, ease: EASE_QUART }}
                className={`mt-5 font-extrabold leading-[1.1] tracking-wide text-white transition-all duration-700 ${pathChosen ? "text-5xl lg:text-6xl xl:text-7xl" : "text-4xl lg:text-5xl xl:text-6xl"}`}
                style={{ fontFamily: "'KingSans', sans-serif" }}
              >
                Build Your
                <br />
                Empire
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7, ease: EASE_QUART }}
                className="mx-auto mt-6 max-w-sm font-[family-name:var(--font-open-sans)] text-base leading-relaxed text-white/70"
              >
                Master the art of SBA origination. Transform from order-taker to
                deal-maker with proven systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.45, duration: 0.7, ease: EASE_QUART }}
                className="mt-8"
              >
                <button
                  onClick={() => selectPath("brokers")}
                  className="inline-flex items-center gap-2 rounded-md border px-8 py-3 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                  style={{ borderColor: DECO_GOLD, color: DECO_GOLD }}
                >
                  Start Building
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ════════ DESKTOP DIVIDER ════════ */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: pathChosen ? 0 : 1,
            opacity: pathChosen ? 0 : 1,
          }}
          transition={{
            delay: pathChosen ? 0 : 0.9,
            duration: pathChosen ? 0.4 : 0.8,
            ease: EASE_QUART,
          }}
          className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center md:flex"
          aria-hidden="true"
        >
          <div className="h-full w-px origin-top" style={{ backgroundColor: `${DECO_GOLD}66` }} />
          <div className="absolute top-1/2 -translate-y-1/2">
            <div className="h-3 w-3 rotate-45" style={{ backgroundColor: DECO_GOLD }} />
          </div>
        </motion.div>

        {/* ════════ MOBILE PANELS (stacked) ════════ */}
        <div className="flex h-full w-full flex-col md:hidden">
          {/* ── Top: Owners ── */}
          <motion.div
            initial={{ y: "-100%", opacity: 0, height: "50%" }}
            animate={{ y: "0%", opacity: leftO, height: topH }}
            transition={{ duration: 0.95, ease: EASE_EXPO }}
            className="relative flex w-full flex-none flex-col items-center justify-center overflow-hidden px-6 py-6"
            style={{ backgroundColor: EGGPLANT }}
          >
            <div className="relative z-10 flex max-w-sm flex-col items-center text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.7, ease: EASE_QUART }}
                className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold tracking-[0.25em] uppercase"
                style={{ color: DECO_GOLD }}
              >
                Business Owners
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.7, ease: EASE_QUART }}
                className="mt-3 text-2xl font-extrabold leading-[1.1] tracking-wide text-white sm:text-3xl"
                style={{ fontFamily: "'KingSans', sans-serif" }}
              >
                Secure Your Funding
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7, ease: EASE_QUART }}
                className="mx-auto mt-3 max-w-xs font-[family-name:var(--font-open-sans)] text-sm leading-relaxed text-white/70"
              >
                Navigate SBA lending with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7, ease: EASE_QUART }}
                className="mt-4"
              >
                <button
                  onClick={() => selectPath("owners")}
                  className="inline-flex items-center rounded-md border px-6 py-2.5 font-[family-name:var(--font-montserrat)] text-xs font-bold tracking-wider transition-all duration-300 hover:bg-white/10"
                  style={{ borderColor: DECO_GOLD, color: DECO_GOLD }}
                >
                  Show Me How
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Mobile divider ── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: pathChosen ? 0 : 1,
              opacity: pathChosen ? 0 : 1,
            }}
            transition={{
              delay: pathChosen ? 0 : 0.9,
              duration: pathChosen ? 0.3 : 0.8,
              ease: EASE_QUART,
            }}
            className="relative z-20 flex flex-none items-center justify-center"
            aria-hidden="true"
          >
            <div className="h-px w-full origin-left" style={{ backgroundColor: `${DECO_GOLD}66` }} />
            <div className="absolute">
              <div className="h-2.5 w-2.5 rotate-45" style={{ backgroundColor: DECO_GOLD }} />
            </div>
          </motion.div>

          {/* ── Bottom: Brokers ── */}
          <motion.div
            initial={{ y: "100%", opacity: 0, height: "50%" }}
            animate={{ y: "0%", opacity: rightO, height: botH }}
            transition={{ duration: 0.95, ease: EASE_EXPO }}
            className="relative flex w-full flex-none flex-col items-center justify-center overflow-hidden px-6 py-10"
            style={{ backgroundColor: SUITE_BLACK }}
          >
            <div className="relative z-10 max-w-sm text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.7, ease: EASE_QUART }}
                className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold tracking-[0.25em] uppercase"
                style={{ color: DECO_GOLD }}
              >
                Brokers &amp; Originators
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.7, ease: EASE_QUART }}
                className="mt-3 text-2xl font-extrabold leading-[1.1] tracking-wide text-white sm:text-3xl"
                style={{ fontFamily: "'KingSans', sans-serif" }}
              >
                Build Your Empire
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7, ease: EASE_QUART }}
                className="mx-auto mt-3 max-w-xs font-[family-name:var(--font-open-sans)] text-sm leading-relaxed text-white/70"
              >
                Master the art of SBA origination.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7, ease: EASE_QUART }}
                className="mt-4"
              >
                <button
                  onClick={() => selectPath("brokers")}
                  className="inline-flex items-center rounded-md border px-6 py-2.5 font-[family-name:var(--font-montserrat)] text-xs font-bold tracking-wider transition-all duration-300 hover:bg-white/10"
                  style={{ borderColor: DECO_GOLD, color: DECO_GOLD }}
                >
                  Start Building
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: pathChosen ? 0 : 1, y: pathChosen ? 12 : 0 }}
          transition={{ delay: pathChosen ? 0 : 2.0, duration: 0.8, ease: EASE_QUART }}
          className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 md:bottom-8"
        >
          <p
            className="whitespace-nowrap font-[family-name:var(--font-montserrat)] text-[8px] font-medium tracking-[0.2em] uppercase sm:text-[10px] sm:tracking-[0.3em] md:text-xs"
            style={{ color: DECO_GOLD }}
          >
            Purveyors of Honest Capital
          </p>
        </motion.div>

        {/* ── Scroll indicator (appears after path selection) ── */}
        <AnimatePresence>
          {pathChosen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: DECO_GOLD }}>
                  Scroll
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M6 12l4 4 4-4" stroke={DECO_GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ════════════════════════════════════════════════════════
          CONTENT SECTIONS (appear after path selection)
          ════════════════════════════════════════════════════════ */}
      <div ref={contentRef}>
        <AnimatePresence mode="wait">
          {pathChosen && (
            <motion.div
              key={activePath}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: EASE_QUART }}
            >
              {/* ══════ §1 VALUE PROPOSITION ══════ */}
              <section
                className="relative overflow-hidden border-t px-4 py-20 sm:px-6 md:py-28"
                style={{ backgroundColor: PAGE_BLACK, borderColor: `${DECO_GOLD}15` }}
              >
                {/* Subtle accent glow */}
                <div
                  className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
                  style={{ backgroundColor: accentBg }}
                />
                <div className="relative mx-auto max-w-3xl text-center">
                  <p
                    className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.3em] uppercase"
                    style={{ color: DECO_GOLD }}
                  >
                    {isOwners ? "Your Funding Journey" : "Your Origination Edge"}
                  </p>
                  <h2
                    className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-[1.15] tracking-wide text-white md:text-4xl lg:text-5xl"
                    style={{ fontFamily: "'KingSans', sans-serif" }}
                  >
                    {isOwners
                      ? "Stop Guessing. Start Getting Funded."
                      : "From Order-Taker to Deal-Maker."}
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-open-sans)] text-base leading-relaxed text-white/60 md:text-lg">
                    {isOwners
                      ? "SBA loans are the single most powerful funding tool for American small businesses — but the process is designed to confuse you. Lords of Lending exists to change that. We give you the education, preparation, and connections to walk into any lender's office with confidence."
                      : "The SBA lending space is full of brokers who quote rates and pray. Lords of Lending builds originators who structure deals, manage pipelines, and close consistently. Our training, content, and community are built by people who still do this work every day."}
                  </p>

                  {/* Path-specific CTA */}
                  <div className="mt-10">
                    <Link
                      href={isOwners ? "/loans/loan-application" : "https://learn.lordsoflending.com"}
                      className="inline-flex items-center gap-2 rounded-md px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider transition-all duration-300 hover:brightness-110"
                      style={{ backgroundColor: DECO_GOLD, color: SUITE_BLACK }}
                    >
                      {isOwners ? "Apply Now" : "Start Training"}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </section>

              {/* ══════ §1b TRUST LOGO SCROLLER ══════ */}
              <section
                className="overflow-hidden border-t py-8"
                style={{ backgroundColor: SUITE_BLACK, borderColor: `${DECO_GOLD}08` }}
              >
                <p
                  className="mb-5 text-center font-[family-name:var(--font-montserrat)] text-[10px] font-semibold tracking-[0.35em] uppercase"
                  style={{ color: `${DECO_GOLD}50` }}
                >
                  Our Deals in Action
                </p>
                <div className="relative">
                  {/* Fade edges */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24" style={{ background: `linear-gradient(to right, ${SUITE_BLACK}, transparent)` }} />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24" style={{ background: `linear-gradient(to left, ${SUITE_BLACK}, transparent)` }} />
                  {/* Scrolling track — real logos */}
                  <div
                    className="flex w-max items-center gap-14 px-6"
                    style={{ animation: "logo-scroll 30s linear infinite" }}
                  >
                    {[...PORTFOLIO_LOGOS, ...PORTFOLIO_LOGOS].map((logo, i) => (
                      <div
                        key={`${logo.name}-${i}`}
                        className="flex h-10 flex-none items-center"
                      >
                        <Image
                          src={logo.image}
                          alt={logo.name}
                          width={120}
                          height={40}
                          className="h-8 w-auto object-contain brightness-0 invert opacity-50 transition-opacity hover:opacity-80"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ══════ §2 FEATURES GRID ══════ */}
              <section
                className="border-t px-4 py-16 sm:px-6 md:py-24"
                style={{ backgroundColor: PAGE_BLACK, borderColor: `${DECO_GOLD}10` }}
              >
                <div className="mx-auto max-w-5xl">
                  <p
                    className="text-center font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.3em] uppercase"
                    style={{ color: DECO_GOLD }}
                  >
                    {isOwners ? "What We Offer" : "Your Arsenal"}
                  </p>
                  <h3
                    className="mt-4 text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold tracking-wide text-white md:text-3xl"
                  >
                    {isOwners
                      ? "Everything You Need to Get Funded"
                      : "Tools That Make You Dangerous"}
                  </h3>

                  <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {features.map((f) => (
                      <div
                        key={f.num}
                        className={`group relative overflow-hidden rounded-xl border p-6 transition-all duration-300 md:p-8 ${
                          isBrokers
                            ? "hover:border-[#E2A970]/40 hover:shadow-lg hover:shadow-[#E2A970]/5"
                            : "hover:border-opacity-60"
                        }`}
                        style={{
                          backgroundColor: CARD_BG,
                          borderColor: CARD_BORDER,
                        }}
                      >
                        {/* Subtle gradient accent on hover */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(ellipse at top left, ${isBrokers ? DECO_GOLD : EGGPLANT}12 0%, transparent 70%)`,
                          }}
                        />
                        <div className="relative flex items-start gap-4">
                          <span
                            className="flex h-10 w-10 flex-none items-center justify-center rounded-full border text-sm font-bold"
                            style={{ borderColor: `${DECO_GOLD}40`, color: DECO_GOLD }}
                          >
                            {f.num}
                          </span>
                          <div>
                            <h4
                              className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white"
                            >
                              {f.title}
                            </h4>
                            <p className="mt-2 font-[family-name:var(--font-open-sans)] text-sm leading-relaxed text-white/60">
                              {f.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Path-specific CTA below features */}
                  <div className="mt-10 text-center">
                    {isOwners ? (
                      <Link
                        href="/loans/loan-application"
                        className="inline-flex items-center gap-3 rounded-md px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                        style={{ backgroundColor: DECO_GOLD, color: SUITE_BLACK }}
                      >
                        Get Funded Now
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    ) : (
                      <a
                        href="https://learn.lordsoflending.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-col items-center gap-3"
                      >
                        {/* Arrow + label pointing to seal */}
                        <span className="flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: DECO_GOLD }}>
                          Click to Start Learning
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="animate-pulse">
                            <path d="M7 2v10M3 8l4 4 4-4" stroke={DECO_GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {/* Seal logo with glow */}
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-full blur-xl opacity-30 transition-opacity duration-300 group-hover:opacity-50"
                            style={{ backgroundColor: DECO_GOLD }}
                          />
                          <Image
                            src="/images/brand/lords-seal.png"
                            alt="Lords of Lending Seal"
                            width={120}
                            height={120}
                            className="relative h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-95 group-active:scale-90"
                          />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </section>

              {/* ══════ §2b TESTIMONIALS ══════ */}
              <section
                className="border-t px-4 py-16 sm:px-6 md:py-24"
                style={{ backgroundColor: SUITE_BLACK, borderColor: `${DECO_GOLD}10` }}
              >
                <div className="mx-auto max-w-5xl">
                  <p
                    className="text-center font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.3em] uppercase"
                    style={{ color: DECO_GOLD }}
                  >
                    Real Stories. Real Success.
                  </p>
                  <h3
                    className="mt-4 text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold tracking-wide text-white md:text-3xl"
                  >
                    From the Businesses We&apos;ve Funded
                  </h3>

                  {/* Stats bar */}
                  <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-8 md:gap-12">
                    {TRUST_STATS.map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="text-2xl font-bold md:text-3xl" style={{ color: DECO_GOLD, fontFamily: "'KingSans', sans-serif" }}>
                          {s.value}
                        </p>
                        <p className="mt-1 font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-white/40">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {TESTIMONIALS.map((t) => {
                      /* Find the matching portfolio logo */
                      const companyLogo = t.name === "Shawn Kleotzer"
                        ? "/images/portfolio/a1a-surveying.png"
                        : "/images/portfolio/fhh.webp";
                      return (
                        <div
                          key={t.name}
                          className="flex flex-col rounded-xl border p-6 md:p-8"
                          style={{ backgroundColor: CARD_BG, borderColor: CARD_BORDER }}
                        >
                          {/* Company logo */}
                          <div className="mb-6 flex justify-center">
                            <Image
                              src={companyLogo}
                              alt={t.title}
                              width={180}
                              height={60}
                              className="h-12 w-auto object-contain brightness-0 invert opacity-50"
                            />
                          </div>

                          {/* Quote */}
                          <p
                            className="text-lg leading-none"
                            style={{ color: `${DECO_GOLD}40` }}
                          >
                            &ldquo;
                          </p>
                          <p className="mt-1 flex-1 font-[family-name:var(--font-open-sans)] text-sm leading-relaxed text-white/70">
                            {t.quote}
                          </p>

                          {/* Attribution */}
                          <div className="mt-6 flex items-center justify-between border-t pt-4" style={{ borderColor: CARD_BORDER }}>
                            <div>
                              <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white">
                                {t.name}
                              </p>
                              <p className="text-xs text-white/40">{t.title}</p>
                            </div>
                            <span
                              className="rounded-full px-3 py-1 text-[10px] font-bold tracking-wider"
                              style={{ backgroundColor: `${DECO_GOLD}15`, color: DECO_GOLD }}
                            >
                              {t.result}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* ══════ §3 PODCAST SECTION (shared) ══════ */}
              <section
                className="border-t px-4 py-16 sm:px-6 md:py-24"
                style={{
                  backgroundColor: isOwners ? `${EGGPLANT}25` : `${SUITE_BLACK}`,
                  borderColor: `${DECO_GOLD}10`,
                }}
              >
                <div className="mx-auto max-w-5xl">
                  <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
                    {/* Podcast artwork / logo */}
                    <div
                      className="flex h-48 w-48 flex-none items-center justify-center rounded-2xl border md:h-56 md:w-56"
                      style={{
                        backgroundColor: PAGE_BLACK,
                        borderColor: `${DECO_GOLD}30`,
                      }}
                    >
                      <Image
                        src="/images/brand/1600w/lol-podcast-logomark-gold-1600w.png"
                        alt="The Lords of Lending Podcast"
                        width={200}
                        height={260}
                        className="h-auto w-[130px] md:w-[160px]"
                      />
                    </div>

                    {/* Podcast info */}
                    <div className="flex-1 text-center md:text-left">
                      <p
                        className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.3em] uppercase"
                        style={{ color: DECO_GOLD }}
                      >
                        Listen Weekly
                      </p>
                      <h3
                        className="mt-3 font-[family-name:var(--font-montserrat)] text-2xl font-bold tracking-wide text-white md:text-3xl"
                      >
                        The Lords of Lending Podcast
                      </h3>
                      <p className="mt-4 max-w-lg font-[family-name:var(--font-open-sans)] text-base leading-relaxed text-white/60">
                        {isOwners
                          ? "Real conversations about SBA lending — what works, what doesn't, and what nobody else will tell you. Every episode is built to help business owners understand the lending landscape and make smarter funding decisions."
                          : "The industry podcast for serious SBA originators. Deal breakdowns, compliance updates, pipeline strategies, and honest conversations with the people actually closing loans. No recruiter pitches, no fluff — just the work."}
                      </p>

                      {/* Platform logos */}
                      <div className="mt-6 flex flex-wrap items-center justify-center gap-5 md:justify-start">
                        <a href="https://podcasts.apple.com/podcast/id1798717410" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-opacity hover:opacity-100 opacity-60" aria-label="Apple Podcasts">
                          <ApplePodcastsIcon className="h-5 w-5 text-white" />
                          <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold text-white/80">Apple Podcasts</span>
                        </a>
                        <a href="https://open.spotify.com/show/6P25i3rDng6aMqlijl9imE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-opacity hover:opacity-100 opacity-60" aria-label="Spotify">
                          <SpotifyIcon className="h-5 w-5 text-[#1DB954]" />
                          <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold text-white/80">Spotify</span>
                        </a>
                        <a href="https://www.youtube.com/playlist?list=PL3dbCeEWNxdP97JpS_-RcHy2gDFTFtG5J" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-opacity hover:opacity-100 opacity-60" aria-label="YouTube">
                          <YouTubeIcon className="h-5 w-5 text-[#FF0000]" />
                          <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold text-white/80">YouTube</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* ── Latest Episode Card with Player ── */}
                  <div
                    className="mt-10 overflow-hidden rounded-xl border"
                    style={{ backgroundColor: CARD_BG, borderColor: CARD_BORDER }}
                  >
                    {/* Episode info header */}
                    <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                      <div className="flex items-center gap-3">
                        <span
                          className="rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase"
                          style={{ backgroundColor: `${DECO_GOLD}15`, color: DECO_GOLD }}
                        >
                          {LATEST_EPISODE.number}
                        </span>
                        <span className="text-[11px] text-white/30">{LATEST_EPISODE.date}</span>
                        <span className="text-[11px] text-white/30">{LATEST_EPISODE.duration}</span>
                      </div>
                      <h4 className="mt-3 font-[family-name:var(--font-montserrat)] text-base font-bold text-white md:text-lg">
                        <Link href={`/${LATEST_EPISODE.slug}`} className="transition-colors hover:text-[#E2A970]">
                          {LATEST_EPISODE.title}
                        </Link>
                      </h4>
                      <p className="mt-2 font-[family-name:var(--font-open-sans)] text-sm leading-relaxed text-white/50">
                        {LATEST_EPISODE.description}
                      </p>
                    </div>

                    {/* Buzzsprout embedded player */}
                    <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
                      <iframe
                        src={`https://www.buzzsprout.com/2315806/${LATEST_EPISODE.buzzsproutId}?client_source=small_player&iframe=true`}
                        loading="lazy"
                        width="100%"
                        height="200"
                        frameBorder="0"
                        scrolling="no"
                        title={LATEST_EPISODE.title}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* ══════ §4 ARTICLES ══════ */}
              <section
                className="border-t px-4 py-16 sm:px-6 md:py-24"
                style={{ backgroundColor: PAGE_BLACK, borderColor: `${DECO_GOLD}10` }}
              >
                <div className="mx-auto max-w-5xl">
                  <p
                    className="text-center font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.3em] uppercase"
                    style={{ color: DECO_GOLD }}
                  >
                    {isOwners ? "From the Blog" : "Latest from the Library"}
                  </p>
                  <h3
                    className="mt-4 text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold tracking-wide text-white md:text-3xl"
                  >
                    {isOwners
                      ? "Read Before You Apply"
                      : "Sharpen Your Edge"}
                  </h3>

                  <div className="mt-12 grid gap-5 sm:grid-cols-3">
                    {articles.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/${a.slug}`}
                        className="group overflow-hidden rounded-xl border transition-all duration-300 hover:border-opacity-60"
                        style={{
                          backgroundColor: CARD_BG,
                          borderColor: CARD_BORDER,
                        }}
                      >
                        {/* Blog image */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                          <Image
                            src={a.image}
                            alt={a.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(to top, ${CARD_BG} 0%, transparent 60%)`,
                            }}
                          />
                        </div>

                        <div className="px-5 pb-5 pt-3">
                          {/* Tag + read time */}
                          <div className="flex items-center justify-between">
                            <span
                              className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase"
                              style={{
                                backgroundColor: `${DECO_GOLD}15`,
                                color: DECO_GOLD,
                              }}
                            >
                              {a.tag}
                            </span>
                            <span className="text-[10px] text-white/30">{a.readTime}</span>
                          </div>

                          <h4
                            className="mt-3 font-[family-name:var(--font-montserrat)] text-base font-bold leading-snug text-white transition-colors group-hover:text-[#E2A970]"
                          >
                            {a.title}
                          </h4>

                          <p className="mt-2 font-[family-name:var(--font-open-sans)] text-sm leading-relaxed text-white/50">
                            {a.excerpt}
                          </p>

                          <p
                            className="mt-4 text-xs font-semibold tracking-wider transition-colors group-hover:text-white"
                            style={{ color: `${DECO_GOLD}80` }}
                          >
                            Read Article &rarr;
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* ══════ §5 PRIMARY CTA ══════ */}
              <section
                className="relative overflow-hidden border-t px-4 py-20 sm:px-6 md:py-28"
                style={{ borderColor: `${DECO_GOLD}10` }}
              >
                {/* Background */}
                <div className="absolute inset-0" style={{ backgroundColor: accentBg }} />
                <div className="absolute inset-0 opacity-[0.06]">
                  <Image
                    src="/images/textures/dark-gold-marble.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative mx-auto max-w-2xl text-center">
                  <h3
                    className="text-3xl font-bold tracking-wide text-white md:text-4xl lg:text-5xl"
                    style={{ fontFamily: "'KingSans', sans-serif" }}
                  >
                    {isOwners
                      ? "Ready to Get Funded?"
                      : "Ready to Close More Deals?"}
                  </h3>
                  <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-open-sans)] text-base leading-relaxed text-white/70 md:text-lg">
                    {isOwners
                      ? "Your SBA loan journey starts with a single step. Let us show you the way — no pressure, no hidden agenda, just honest guidance from people who know the system inside out."
                      : "Join the originators who stopped guessing and started closing. Our training platform gives you the exact systems, scripts, and strategies that work in today's SBA market."}
                  </p>

                  <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                      href={
                        isOwners
                          ? "/loans/loan-application"
                          : "https://learn.lordsoflending.com"
                      }
                      className="inline-flex items-center gap-2 rounded-md px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider transition-all duration-300 hover:brightness-110"
                      style={{
                        backgroundColor: DECO_GOLD,
                        color: SUITE_BLACK,
                      }}
                    >
                      {isOwners ? "Apply Now" : "Begin Training"}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <Link
                      href="/podcast"
                      className="inline-flex items-center gap-2 rounded-md border px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider transition-all duration-300 hover:bg-white/10"
                      style={{ borderColor: `${DECO_GOLD}60`, color: DECO_GOLD }}
                    >
                      {isOwners ? "Listen to the Podcast" : "Explore the Podcast"}
                    </Link>
                  </div>
                </div>
              </section>

              {/* ══════ §6 PATH SWITCH ══════ */}
              <section
                className="border-t px-4 py-12 sm:px-6"
                style={{ backgroundColor: PAGE_BLACK, borderColor: `${DECO_GOLD}10` }}
              >
                <div className="mx-auto max-w-2xl text-center">
                  <p className="font-[family-name:var(--font-open-sans)] text-sm text-white/40">
                    {isOwners
                      ? "Are you a broker or loan originator?"
                      : "Are you a business owner looking for funding?"}
                  </p>
                  <button
                    onClick={switchPath}
                    className="mt-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wider transition-colors duration-300 hover:text-white"
                    style={{ color: DECO_GOLD }}
                  >
                    {isOwners
                      ? "Explore the Broker Path"
                      : "Explore the Owner Path"}
                    <span className="ml-2">&#8594;</span>
                  </button>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ════════════════════════════════════════════════════════
          SEO: Both paths' content in DOM for crawlers
          ════════════════════════════════════════════════════════ */}
      <div className="sr-only" aria-hidden="true">
        <h2>SBA Loans for Business Owners</h2>
        <p>
          Lords of Lending helps business owners navigate SBA 7(a) loans, 504
          loans, and microloans. Get step-by-step application guidance, document
          preparation checklists, and direct access to qualified SBA lenders.
          Listen to the Lords of Lending podcast for weekly episodes on small
          business funding strategies.
        </p>
        <h2>SBA Training for Brokers and Loan Originators</h2>
        <p>
          Lords of Lending trains brokers and loan originators to master SBA
          lending. Professional training at Learn.LordsOfLending.com covers deal
          structuring, pipeline management, compliance, and client acquisition.
          The Lords of Lending podcast delivers weekly origination insights and
          deal breakdowns for active SBA professionals.
        </p>
      </div>
    </main>
  );
}
