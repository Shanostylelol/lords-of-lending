import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert articles on SBA loans, business financing, and growth strategies from the Lords of Lending team.",
};

export default function BlogPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h1 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-[var(--color-text)] md:text-5xl">
          Become an Expert
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-muted)]">
          Business loan knowledge you can trust.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <time className="text-xs text-[var(--color-text-light)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mt-2 font-[family-name:var(--font-montserrat)] text-base font-bold leading-tight text-[var(--color-text)] group-hover:text-[var(--color-gold)]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-[var(--color-gold)]">
                  READ MORE
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
