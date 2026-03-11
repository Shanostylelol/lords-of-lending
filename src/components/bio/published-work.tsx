"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, ExternalLink, BookOpen, Briefcase, TrendingUp, GraduationCap, Newspaper } from "lucide-react";

const C = {
  maroon: "#4D0A16",
  nearBlack: "#1C1A1A",
  offWhite: "#F9F9F9",
  gold: "#AA712C",
  goldLight: "#E2A970",
  border: "#E0D6CE",
  textMuted: "#6B6362",
};

interface Article {
  slug: string;
  title: string;
  summary: string;
}

interface Category {
  id: string;
  label: string;
  icon: typeof BookOpen;
  articles: Article[];
}

const CATEGORIES: Category[] = [
  {
    id: "origination",
    label: "Origination & Pipeline",
    icon: TrendingUp,
    articles: [
      {
        slug: "how-to-become-sba-loan-broker",
        title: "How to Become an SBA Loan Broker in 2026",
        summary: "Step-by-step guide to launching your SBA loan brokerage, building lender relationships, and closing your first deals. Covers licensing, compliance, and go-to-market strategy.",
      },
      {
        slug: "how-to-source-sba-loans",
        title: "How to Source SBA Loans: 12 Strategies That Work",
        summary: "Proven strategies for sourcing SBA loan deals, from referral partners and CPAs to digital marketing and trade shows. Real-world tactics from $500M+ in origination experience.",
      },
      {
        slug: "sba-referral-fee-structures",
        title: "SBA Referral Fee Structures: How Brokers Get Paid",
        summary: "How SBA loan brokers earn referral fees, typical fee structures, and what lenders expect from originator relationships. Transparent breakdown of the economics.",
      },
      {
        slug: "building-sba-lending-pipeline",
        title: "Building an SBA Lending Pipeline from Zero",
        summary: "How to build a consistent SBA lending pipeline from scratch using relationship-driven and digital strategies. The system behind sustainable deal flow.",
      },
      {
        slug: "sba-convention-networking",
        title: "SBA Convention Season: How to Network and Win Deals",
        summary: "How to maximize SBA industry conferences, build lender relationships, and turn convention contacts into closed deals. A field-tested networking playbook.",
      },
      {
        slug: "build-10m-sba-pipeline",
        title: "How to Build a $10M SBA Pipeline in 12 Months",
        summary: "The exact system for building a $10M annual SBA pipeline — month-by-month targets, activity metrics, and the habits that separate producers from pretenders.",
      },
      {
        slug: "building-sba-brokerage",
        title: "Building an SBA Brokerage: From Solo to Scale",
        summary: "How to scale from solo originator to multi-person SBA brokerage. Covers hiring, systems, compensation structures, and operational efficiency.",
      },
    ],
  },
  {
    id: "acquisition",
    label: "Business Acquisition",
    icon: Briefcase,
    articles: [
      {
        slug: "are-you-ready-to-buy-a-business",
        title: "Are You Ready to Buy a Business? The Questions Nobody Asks",
        summary: "The self-assessment framework smart buyers use before they ever look at a listing. Financial readiness, lifestyle fit, and risk tolerance.",
      },
      {
        slug: "how-to-find-businesses-for-sale",
        title: "How to Find Businesses for Sale: The Insider's Playbook",
        summary: "Where to find quality businesses for sale beyond the public marketplaces. Broker networks, off-market deals, and evaluation criteria.",
      },
      {
        slug: "financing-your-business-acquisition-with-sba",
        title: "Financing Your Business Acquisition with an SBA 7(a) Loan",
        summary: "How to structure an SBA 7(a) acquisition loan — equity injection, seller notes, earnouts, and the deal structure lenders want to see.",
      },
      {
        slug: "first-30-days-after-buying-a-business",
        title: "Your First 30 Days After Buying a Business: The Playbook",
        summary: "The critical first 30 days of business ownership. Employee communication, vendor relationships, cash flow stabilization, and quick wins.",
      },
      {
        slug: "growing-your-newly-acquired-business",
        title: "Growing Your Newly Acquired Business: From Stabilization to Scale",
        summary: "Post-acquisition growth strategies — from stabilizing operations to identifying revenue opportunities and building your management team.",
      },
      {
        slug: "buy-business-sba-loan",
        title: "Can You Use an SBA Loan to Buy a Business?",
        summary: "How to use SBA 7(a) loans to buy an existing business, including acquisition requirements, deal structuring, and what lenders look for.",
      },
    ],
  },
  {
    id: "borrower",
    label: "Borrower Education",
    icon: BookOpen,
    articles: [
      {
        slug: "how-long-sba-loan-takes",
        title: "How Long Does an SBA Loan Take? Real Timelines",
        summary: "Realistic SBA loan timelines from application to funding. What actually causes delays and actionable tips to speed up the approval process.",
      },
      {
        slug: "sba-loan-denied",
        title: "SBA Loan Denial: Why It Happens and What to Do Next",
        summary: "Common reasons SBA loans get denied, how to fix your application, and alternative paths to business funding. Honest answers, not sugarcoating.",
      },
      {
        slug: "sba-lending-101-foundation",
        title: "SBA Lending 101: The Foundation Every Originator Needs",
        summary: "The foundational SBA lending knowledge every new originator needs — program basics, lender expectations, and the vocabulary that matters.",
      },
    ],
  },
  {
    id: "thought-leadership",
    label: "Thought Leadership",
    icon: Newspaper,
    articles: [
      {
        slug: "why-sba-deals-fall-apart",
        title: "Why Most SBA Deals Fall Apart (And How to Save Them)",
        summary: "The top reasons SBA deals collapse before closing and the practical strategies experienced originators use to rescue them. War stories included.",
      },
      {
        slug: "sba-lending-myths-originators",
        title: "SBA Lending Myths That Cost Originators Deals",
        summary: "Debunking the most common SBA lending myths that cause originators to lose deals and damage lender relationships. What the industry gets wrong.",
      },
    ],
  },
];

const PRESS = [
  {
    title: "SBA Lending: Why Experienced Brokers Make the Difference",
    outlet: "Scotsman Guide",
    url: "https://www.scotsmanguide.com",
    summary: "Industry commentary on why borrower outcomes improve dramatically with experienced origination support.",
  },
  {
    title: "SBA Industry Market Commentary",
    outlet: "Scotsman Guide",
    url: "https://www.scotsmanguide.com",
    summary: "Market analysis of SBA lending trends, volume shifts, and what they mean for originators and institutions.",
  },
  {
    title: "Art of SBA Lending Podcast — Episode 118",
    outlet: "Art of SBA Lending",
    url: "https://www.artofsbalending.com",
    summary: "Guest appearance discussing department-building methodology, The Lending Ethos, and national sales strategy.",
  },
  {
    title: "IncredibleBank Launches National SBA Division",
    outlet: "GlobeNewsWire",
    url: "https://www.globenewswire.com",
    summary: "Press release announcing the launch of IncredibleBank's national SBA lending division and strategic growth plans.",
  },
];

function ArticleRow({ article }: { article: Article }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-lg border bg-white transition-all hover:shadow-md"
      style={{ borderColor: C.border }}
    >
      <div className="flex items-center gap-2 p-3 sm:gap-3 sm:p-4">
        <div className="min-w-0 flex-1">
          <Link
            href={`/${article.slug}`}
            className="text-xs font-semibold leading-snug transition-colors hover:underline sm:text-sm"
            style={{ color: C.nearBlack }}
          >
            {article.title}
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href={`/${article.slug}`}
            className="rounded-md px-2.5 py-1 text-[11px] font-bold text-white transition-colors hover:opacity-90 sm:px-3 sm:py-1.5 sm:text-xs"
            style={{ background: C.maroon }}
          >
            Read
          </Link>
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-md p-1.5 transition-colors hover:bg-gray-100"
            aria-label={expanded ? "Collapse summary" : "Expand summary"}
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              style={{ color: C.textMuted }}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p
              className="border-t px-4 py-3 text-sm leading-relaxed"
              style={{ borderColor: C.border, color: C.textMuted }}
            >
              {article.summary}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PressRow({ item }: { item: typeof PRESS[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-lg border bg-white transition-all hover:shadow-md"
      style={{ borderColor: C.border }}
    >
      <div className="flex items-center gap-3 p-4">
        <div className="min-w-0 flex-1">
          <span
            className="text-[10px] font-bold tracking-widest uppercase"
            style={{ color: C.gold }}
          >
            {item.outlet}
          </span>
          <p
            className="mt-0.5 text-sm font-semibold leading-snug"
            style={{ color: C.nearBlack }}
          >
            {item.title}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-1.5 text-xs font-bold transition-colors hover:opacity-90"
            style={{ background: `${C.gold}15`, color: C.gold }}
          >
            <ExternalLink size={12} className="inline -mt-0.5 mr-1" />
            Visit
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-md p-1.5 transition-colors hover:bg-gray-100"
            aria-label={expanded ? "Collapse summary" : "Expand summary"}
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              style={{ color: C.textMuted }}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p
              className="border-t px-4 py-3 text-sm leading-relaxed"
              style={{ borderColor: C.border, color: C.textMuted }}
            >
              {item.summary}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PublishedWork() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const totalArticles = CATEGORIES.reduce((sum, cat) => sum + cat.articles.length, 0);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24" style={{ background: C.offWhite }}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            style={{ background: `${C.maroon}12`, color: C.maroon }}
          >
            Published Work
          </span>
          <h2
            className="mt-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{ color: C.nearBlack }}
          >
            Articles &amp; Thought Leadership
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base" style={{ color: C.textMuted }}>
            {totalArticles} articles published on Lords of Lending, plus contributions to
            Scotsman Guide and industry publications.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-1.5 sm:mt-8 sm:gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${
              activeCategory === null
                ? "text-white shadow-md"
                : "border bg-white hover:shadow-sm"
            }`}
            style={
              activeCategory === null
                ? { background: C.maroon }
                : { borderColor: C.border, color: C.nearBlack }
            }
          >
            All ({totalArticles})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${
                activeCategory === cat.id
                  ? "text-white shadow-md"
                  : "border bg-white hover:shadow-sm"
              }`}
              style={
                activeCategory === cat.id
                  ? { background: C.maroon }
                  : { borderColor: C.border, color: C.nearBlack }
              }
            >
              <cat.icon size={14} />
              {cat.label} ({cat.articles.length})
            </button>
          ))}
        </div>

        {/* Article lists by category */}
        <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
          {CATEGORIES.filter(
            (cat) => activeCategory === null || activeCategory === cat.id,
          ).map((cat) => (
            <div key={cat.id}>
              <div className="mb-3 flex items-center gap-2">
                <cat.icon size={18} style={{ color: C.maroon }} />
                <h3
                  className="font-[family-name:var(--font-montserrat)] text-lg font-bold"
                  style={{ color: C.nearBlack }}
                >
                  {cat.label}
                </h3>
                <span className="text-xs font-medium" style={{ color: C.textMuted }}>
                  ({cat.articles.length} articles)
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {cat.articles.map((article) => (
                  <ArticleRow key={article.slug} article={article} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* External publications */}
        <div className="mt-12">
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap size={18} style={{ color: C.gold }} />
            <h3
              className="font-[family-name:var(--font-montserrat)] text-lg font-bold"
              style={{ color: C.nearBlack }}
            >
              Industry Publications &amp; Press
            </h3>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {PRESS.map((item) => (
              <PressRow key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
