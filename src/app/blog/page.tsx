import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert articles on SBA loans, business financing, and growth strategies from the Lords of Lending team.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

export default function BlogPage() {
  return (
    <main id="main-content" className="bg-[var(--color-dark)] pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h1 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
          Become an Expert
        </h1>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group block overflow-hidden rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] transition-all hover:border-[var(--color-gold)]/40 hover:shadow-lg hover:shadow-[var(--color-gold)]/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase leading-snug tracking-wide text-white group-hover:text-[var(--color-gold)]">
                  {post.title}
                </h2>
                <time className="mt-2 flex items-center gap-1 text-xs text-white/40">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
