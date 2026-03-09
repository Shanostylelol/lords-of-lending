import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <article className="mx-auto max-w-3xl px-6 md:px-8">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-gold)]"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <time className="text-sm text-[var(--color-text-light)]">
          {new Date(post.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>

        <h1 className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-[var(--color-text)] md:text-4xl">
          {post.title}
        </h1>

        <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg mt-10 max-w-none text-[var(--color-text-muted)]">
          <p>{post.excerpt}</p>
          <p className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
            Full article content will be migrated from WordPress. This page
            preserves the URL structure for SEO continuity.
          </p>
        </div>
      </article>
    </main>
  );
}
