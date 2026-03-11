import Image from "next/image";
import Link from "next/link";
import {
  PILLAR_ARTICLES,
  SUPPORTING_ARTICLES,
  type ContentMeta,
} from "@/lib/constants";

const AUTHOR_NAMES: Record<string, string> = {
  shane: "Shane Pierson",
  steph: "Stephanie Dunn",
  brian: "Brian Congelliere",
};

function getOriginatorArticles(): ContentMeta[] {
  const all = [...PILLAR_ARTICLES, ...SUPPORTING_ARTICLES];
  return all
    .filter((a) => a.cluster === "originator-training")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function BrokerContentLibrary() {
  const articles = getOriginatorArticles();

  if (articles.length === 0) return null;

  return (
    <section
      id="broker-library"
      className="bg-[var(--color-dark)] px-6 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          Originator Training Library
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
          Every article our team has written on building a successful SBA
          origination practice.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-gold)]/40 hover:shadow-md"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category badge */}
                <span className="inline-block rounded-full bg-[var(--color-gold)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                  {article.category === "pillar" ? "Guide" : article.category === "training" ? "Training" : "Article"}
                </span>

                <h3 className="mt-2 text-sm font-bold leading-snug text-white group-hover:text-[var(--color-gold)]">
                  {article.title}
                </h3>

                {/* Author + reading time */}
                <div className="mt-2 flex items-center gap-2 text-xs text-white/40">
                  <span>{AUTHOR_NAMES[article.author] ?? article.author}</span>
                  {article.readingTime && (
                    <>
                      <span aria-hidden="true">&middot;</span>
                      <span>{article.readingTime} min read</span>
                    </>
                  )}
                </div>

                {/* Excerpt */}
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/50">
                  {article.excerpt}
                </p>

                {/* Read link */}
                <span className="mt-3 inline-block text-xs font-semibold text-[var(--color-gold)] transition-colors group-hover:text-[var(--color-gold-light)]">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
