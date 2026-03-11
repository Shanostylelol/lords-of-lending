"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

/* ── Types ────────────────────────────────────────────────────────────── */

export interface FilterableArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  author?: string;
  cluster?: string;
  readingTime?: string;
}

interface BlogFilteredListProps {
  articles: FilterableArticle[];
}

/* ── Cluster → Label map ──────────────────────────────────────────────── */

const CLUSTER_LABELS: Record<string, string> = {
  "sba-basics": "SBA Basics",
  "buying-a-business": "Buying a Business",
  "originator-training": "Originator Training",
  "deal-structuring": "Deal Structuring",
  "industry-trends": "Industry Trends",
  general: "General",
  acquisition: "Acquisition",
};

/* ── Category badge labels ────────────────────────────────────────────── */

const CATEGORY_LABELS: Record<string, string> = {
  pillar: "Pillar Guide",
  supporting: "Article",
  blog: "Blog",
  training: "Training",
  roundup: "Weekly Digest",
};

/* ── Author display names ─────────────────────────────────────────────── */

const AUTHOR_LABELS: Record<string, string> = {
  shane: "Shane",
  steph: "Steph",
  brian: "Brian",
};

/* ── Animation variants ───────────────────────────────────────────────── */

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

/* ── Component ────────────────────────────────────────────────────────── */

export function BlogFilteredList({ articles }: BlogFilteredListProps) {
  const [activeCluster, setActiveCluster] = useState<string>("all");
  const [activeAuthor, setActiveAuthor] = useState<string>("all");

  /* Compute which cluster tabs to show (only clusters that have articles) */
  const availableClusters = useMemo(() => {
    const clusterSet = new Set<string>();
    for (const a of articles) {
      if (a.cluster) clusterSet.add(a.cluster);
    }
    // Return in the order defined in CLUSTER_LABELS
    return Object.keys(CLUSTER_LABELS).filter((c) => clusterSet.has(c));
  }, [articles]);

  /* Cluster-filtered set (before author filter) */
  const clusterFiltered = useMemo(() => {
    if (activeCluster === "all") return articles;
    return articles.filter((a) => a.cluster === activeCluster);
  }, [articles, activeCluster]);

  /* Which authors are available in the cluster-filtered set */
  const availableAuthors = useMemo(() => {
    const authorSet = new Set<string>();
    for (const a of clusterFiltered) {
      if (a.author) authorSet.add(a.author);
    }
    return ["shane", "steph", "brian"].filter((au) => authorSet.has(au));
  }, [clusterFiltered]);

  /* Final filtered articles (cluster + author) */
  const filtered = useMemo(() => {
    if (activeAuthor === "all") return clusterFiltered;
    return clusterFiltered.filter((a) => a.author === activeAuthor);
  }, [clusterFiltered, activeAuthor]);

  /* Reset author when switching clusters if the author is no longer available */
  const handleClusterChange = (cluster: string) => {
    setActiveCluster(cluster);
    // If the currently-selected author doesn't exist in the new cluster, reset
    if (cluster === "all") {
      // author filter still valid across all
    } else {
      const authorsInCluster = new Set<string>();
      const subset =
        cluster === "all"
          ? articles
          : articles.filter((a) => a.cluster === cluster);
      for (const a of subset) {
        if (a.author) authorsInCluster.add(a.author);
      }
      if (activeAuthor !== "all" && !authorsInCluster.has(activeAuthor)) {
        setActiveAuthor("all");
      }
    }
  };

  const resetFilters = () => {
    setActiveCluster("all");
    setActiveAuthor("all");
  };

  return (
    <div>
      {/* ── Topic filter tabs ─────────────────────────────────────────── */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {/* "All" tab */}
        <button
          onClick={() => handleClusterChange("all")}
          className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeCluster === "all"
              ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-white"
              : "border-[var(--color-border)] text-white/60 hover:border-[var(--color-gold)]/40 hover:text-white"
          }`}
        >
          All ({articles.length})
        </button>

        {availableClusters.map((cluster) => {
          const count = articles.filter((a) => a.cluster === cluster).length;
          return (
            <button
              key={cluster}
              onClick={() => handleClusterChange(cluster)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCluster === cluster
                  ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-white"
                  : "border-[var(--color-border)] text-white/60 hover:border-[var(--color-gold)]/40 hover:text-white"
              }`}
            >
              {CLUSTER_LABELS[cluster]} ({count})
            </button>
          );
        })}
      </div>

      {/* ── Author pills ──────────────────────────────────────────────── */}
      {availableAuthors.length > 1 && (
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => setActiveAuthor("all")}
            className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
              activeAuthor === "all"
                ? "border-[var(--color-gold)] bg-[var(--color-gold)]/15 text-[var(--color-gold)]"
                : "border-[var(--color-border)] text-white/50 hover:border-[var(--color-gold)]/30 hover:text-white/70"
            }`}
          >
            All Authors
          </button>
          {availableAuthors.map((author) => (
            <button
              key={author}
              onClick={() => setActiveAuthor(author)}
              className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                activeAuthor === author
                  ? "border-[var(--color-gold)] bg-[var(--color-gold)]/15 text-[var(--color-gold)]"
                  : "border-[var(--color-border)] text-white/50 hover:border-[var(--color-gold)]/30 hover:text-white/70"
              }`}
            >
              {AUTHOR_LABELS[author] || author}
            </button>
          ))}
        </div>
      )}

      {/* ── Result count ──────────────────────────────────────────────── */}
      <p className="mt-4 text-xs text-white/40">
        Showing {filtered.length} of {articles.length} articles
      </p>

      {/* ── Article grid ──────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((article) => (
              <motion.div
                key={article.slug}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href={`/${article.slug}`}
                  className="group block h-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-gold)]/40 hover:shadow-lg hover:shadow-[var(--color-gold)]/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-[var(--color-surface)]/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-gold)] backdrop-blur-sm">
                        {CATEGORY_LABELS[article.category] || article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase leading-snug tracking-wide text-white group-hover:text-[var(--color-gold)]">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/50">
                      {article.excerpt}
                    </p>

                    {/* Meta row: author + date + reading time */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/40">
                      {article.author && (
                        <span className="font-medium text-white/50">
                          {AUTHOR_LABELS[article.author] || article.author}
                        </span>
                      )}
                      <time className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {new Date(article.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      {article.readingTime && (
                        <span>{article.readingTime} min read</span>
                      )}
                    </div>

                    <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                      Read More
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        /* ── Empty state ────────────────────────────────────────────── */
        <div className="mt-12 flex flex-col items-center gap-4 py-16 text-center">
          <p className="text-sm text-white/50">
            No articles match your filters.
          </p>
          <button
            onClick={resetFilters}
            className="rounded-full border border-[var(--color-gold)] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
