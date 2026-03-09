import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { readFile } from "fs/promises";
import { join } from "path";
import Markdown from "react-markdown";
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

async function getArticleContent(slug: string): Promise<string | null> {
  try {
    const filePath = join(process.cwd(), "content", "blog", `${slug}.md`);
    return await readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = await getArticleContent(slug);

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

        {content ? (
          <div className="prose-blog mt-10 max-w-none">
            <Markdown
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 mb-3 font-[family-name:var(--font-montserrat)] text-xl font-semibold text-[var(--color-text)]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-base leading-relaxed text-[var(--color-text-muted)]">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 ml-4 list-disc space-y-2 pl-4 text-base text-[var(--color-text-muted)]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 ml-4 list-decimal space-y-2 pl-4 text-base text-[var(--color-text-muted)]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-gold)] underline transition-colors hover:text-[var(--color-gold-dark)]"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[var(--color-text)]">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic">{children}</em>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="mb-4 border-l-4 border-[var(--color-gold)] pl-4 italic text-[var(--color-text-muted)]">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content}
            </Markdown>
          </div>
        ) : (
          <div className="prose prose-lg mt-10 max-w-none text-[var(--color-text-muted)]">
            <p>{post.excerpt}</p>
          </div>
        )}

        {/* Author + CTA */}
        <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <p className="text-sm font-medium text-[var(--color-text)]">
            Written by Shane Pierson
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            Founder, Lords of Lending
          </p>
          <div className="mt-4">
            <Link
              href="/loans/loan-application"
              className="inline-flex items-center rounded-md bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]"
            >
              Start Your Loan Application
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
