import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BLOG_POSTS,
  PILLAR_ARTICLES,
  SUPPORTING_ARTICLES,
  ROUNDUP_POSTS,
  SITE_CONFIG,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Articles & Guides — SBA Lending Education",
  description:
    "In-depth articles on SBA loans, deal structuring, broker training, and small business financing. Pillar guides, expert insights, and weekly roundups.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

const CATEGORY_LABELS: Record<string, string> = {
  pillar: "Pillar Guide",
  supporting: "Article",
  blog: "Blog",
  training: "Training",
  roundup: "Weekly Digest",
};

export default function BlogPage() {
  // Combine all content, most recent first
  const allArticles = [
    ...PILLAR_ARTICLES.map((a) => ({ ...a, _type: "pillar" as const })),
    ...SUPPORTING_ARTICLES.map((a) => ({ ...a, _type: "supporting" as const })),
    ...BLOG_POSTS.map((a) => ({ ...a, _type: "blog" as const })),
    ...ROUNDUP_POSTS.map((a) => ({ ...a, _type: "roundup" as const })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const pillarArticles = PILLAR_ARTICLES;

  return (
    <main
      id="main-content"
      className="bg-[var(--color-dark)] pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Articles & Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            Everything you need to know about SBA lending — from beginner guides
            to advanced deal structuring. Written by originators who close deals
            every day.
          </p>
        </div>

        {/* Featured Pillar Guides */}
        <section className="mt-12">
          <h2 className="mb-6 font-[family-name:var(--font-montserrat)] text-lg font-bold uppercase tracking-wider text-[var(--color-gold)]">
            Pillar Guides
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillarArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="group overflow-hidden rounded-xl border-2 border-[var(--color-gold)]/20 bg-[var(--color-surface)] transition-all hover:border-[var(--color-gold)]/50 hover:shadow-lg hover:shadow-[var(--color-gold)]/5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Pillar Guide
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase leading-snug tracking-wide text-white group-hover:text-[var(--color-gold)]">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section className="mt-16">
          <h2 className="mb-6 font-[family-name:var(--font-montserrat)] text-lg font-bold uppercase tracking-wider text-[var(--color-gold)]">
            All Articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="group block overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-gold)]/40 hover:shadow-lg hover:shadow-[var(--color-gold)]/5"
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
                  <time className="mt-2 flex items-center gap-1 text-xs text-white/40">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Link
            href="/guides"
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center transition-all hover:border-[var(--color-gold)]/40"
          >
            <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wider text-white">
              State & Industry Guides
            </h3>
            <p className="mt-2 text-sm text-white/50">
              SBA lending guides for all 50 states and 15 industries
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-[var(--color-gold)]">
              Browse Guides &rarr;
            </span>
          </Link>
          <Link
            href="/tools"
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center transition-all hover:border-[var(--color-gold)]/40"
          >
            <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wider text-white">
              SBA Lending Tools
            </h3>
            <p className="mt-2 text-sm text-white/50">
              Free calculators for loan payments, DSCR, and eligibility
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-[var(--color-gold)]">
              Open Tools &rarr;
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
