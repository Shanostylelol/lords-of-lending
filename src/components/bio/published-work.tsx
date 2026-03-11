import Link from "next/link";
import { ExternalLink, BookOpen, ChevronRight } from "lucide-react";

const C = {
  maroon: "#4D0A16",
  nearBlack: "#1C1A1A",
  offWhite: "#F9F9F9",
  gold: "#AA712C",
  goldLight: "#E2A970",
  border: "#E0D6CE",
  textMuted: "#6B6362",
};

/* ─── Curated top articles for executive view ─────────────────────────── */
const FEATURED_ARTICLES = [
  {
    slug: "complete-guide-sba-7a-loans",
    title: "The Complete Guide to SBA 7(a) Loans",
    tag: "Definitive Guide",
  },
  {
    slug: "financing-your-business-acquisition-with-sba",
    title: "Financing Your Business Acquisition with an SBA 7(a) Loan",
    tag: "Acquisition",
  },
  {
    slug: "why-sba-deals-fall-apart",
    title: "Why Most SBA Deals Fall Apart (And How to Save Them)",
    tag: "Thought Leadership",
  },
  {
    slug: "how-to-source-sba-loans",
    title: "How to Source SBA Loans: 12 Strategies That Work",
    tag: "Origination",
  },
  {
    slug: "build-10m-sba-pipeline",
    title: "How to Build a $10M SBA Pipeline in 12 Months",
    tag: "Pipeline",
  },
  {
    slug: "sba-lending-101-foundation",
    title: "SBA Lending 101: The Foundation Every Originator Needs",
    tag: "Training",
  },
];

const PRESS = [
  {
    title: "SBA Lending: Why Experienced Brokers Make the Difference",
    outlet: "Scotsman Guide",
    url: "https://www.scotsmanguide.com",
  },
  {
    title: "Art of SBA Lending Podcast — Episode 118",
    outlet: "Art of SBA Lending",
    url: "https://www.artofsbalending.com",
  },
  {
    title: "IncredibleBank Launches National SBA Division",
    outlet: "GlobeNewsWire",
    url: "https://www.globenewswire.com",
  },
];

export function PublishedWork() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24" style={{ background: C.offWhite }}>
      <div className="mx-auto max-w-4xl">
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
            Selected Publications
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base" style={{ color: C.textMuted }}>
            Featured articles from a library of 18+ publications on SBA lending strategy,
            origination systems, and business acquisition financing.
          </p>
        </div>

        {/* Featured articles — clean flat list */}
        <div className="mt-8 space-y-2 sm:mt-10">
          {FEATURED_ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/${a.slug}`}
              className="group flex items-center gap-3 rounded-lg border bg-white p-3.5 transition-all hover:shadow-md sm:gap-4 sm:p-4"
              style={{ borderColor: C.border }}
            >
              <div className="min-w-0 flex-1">
                <p
                  className="text-sm font-semibold leading-snug transition-colors group-hover:underline sm:text-[15px]"
                  style={{ color: C.nearBlack }}
                >
                  {a.title}
                </p>
              </div>
              <span
                className="hidden shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase sm:inline-block"
                style={{ background: `${C.maroon}08`, color: C.textMuted }}
              >
                {a.tag}
              </span>
              <ChevronRight size={16} className="shrink-0 text-gray-300 transition-colors group-hover:text-gray-500" />
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline"
            style={{ color: C.maroon }}
          >
            View all publications
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* Industry press — compact row */}
        <div className="mt-10 border-t pt-8" style={{ borderColor: C.border }}>
          <h3
            className="mb-4 text-center font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wide uppercase"
            style={{ color: C.textMuted }}
          >
            Industry Publications &amp; Press
          </h3>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            {PRESS.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-start gap-3 rounded-lg border bg-white p-3.5 transition-all hover:shadow-md sm:p-4"
                style={{ borderColor: C.border }}
              >
                <div className="min-w-0 flex-1">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: C.gold }}
                  >
                    {item.outlet}
                  </span>
                  <p
                    className="mt-0.5 text-xs font-semibold leading-snug sm:text-sm"
                    style={{ color: C.nearBlack }}
                  >
                    {item.title}
                  </p>
                </div>
                <ExternalLink size={14} className="mt-1 shrink-0 text-gray-300 group-hover:text-gray-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
