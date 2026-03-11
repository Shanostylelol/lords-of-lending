import Image from "next/image";
import Link from "next/link";

interface RelatedArticle {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  category: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  heading?: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  pillar: "Guide",
  supporting: "Article",
  blog: "Blog",
  podcast: "Podcast",
  industry: "Industry",
  state: "State Guide",
};

export function RelatedArticles({ articles, heading = "Related Articles" }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
        {heading}
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-gold)]/40 hover:shadow-md"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={225}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="inline-block rounded-full bg-[var(--color-gold)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                {CATEGORY_LABELS[article.category] || article.category}
              </span>
              <h3 className="mt-2 text-sm font-bold leading-snug text-white group-hover:text-[var(--color-gold)]">
                {article.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/50">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
