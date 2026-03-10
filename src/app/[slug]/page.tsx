import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { readFile } from "fs/promises";
import { join } from "path";
import Markdown from "react-markdown";
import { BLOG_POSTS, PODCAST_EPISODES, PODCAST_SUBSCRIBE_LINKS, SITE_CONFIG } from "@/lib/constants";
import { articleJsonLd, podcastEpisodeJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

interface Props {
  params: Promise<{ slug: string }>;
}

const ALL_SLUGS = [
  ...BLOG_POSTS.map((p) => ({ slug: p.slug, type: "blog" as const })),
  ...PODCAST_EPISODES.map((e) => ({ slug: e.slug, type: "podcast" as const })),
];

export async function generateStaticParams() {
  return ALL_SLUGS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const base = SITE_CONFIG.url;

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (post) {
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `${base}/${post.slug}` },
      openGraph: {
        title: `${post.title} - Lords of Lending`,
        description: post.excerpt,
        url: `${base}/${post.slug}`,
        siteName: "Lords of Lending - Purveyors of Honest Capital",
        images: [{ url: post.image, width: 1200, height: 630 }],
        type: "article",
        locale: "en_US",
        publishedTime: new Date(post.date).toISOString(),
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} - Lords of Lending`,
        description: post.excerpt,
        images: [post.image],
      },
    };
  }

  const episode = PODCAST_EPISODES.find((e) => e.slug === slug);
  if (episode) {
    return {
      title: `${episode.title} - Lords of Lending`,
      description: episode.excerpt,
      alternates: { canonical: `${base}/${episode.slug}` },
      openGraph: {
        title: `${episode.title} - Lords of Lending`,
        description: episode.excerpt,
        url: `${base}/${episode.slug}`,
        siteName: "Lords of Lending - Purveyors of Honest Capital",
        images: [{ url: "/images/podcast/cover-art.webp", width: 1024, height: 1024 }],
        type: "article",
        locale: "en_US",
        publishedTime: new Date(episode.date).toISOString(),
      },
      twitter: {
        card: "summary_large_image",
        title: `${episode.title} - Lords of Lending`,
        description: episode.excerpt,
        images: ["/images/podcast/cover-art.webp"],
      },
    };
  }

  return {};
}

async function getContent(type: "blog" | "podcast", slug: string): Promise<string | null> {
  try {
    const filePath = join(process.cwd(), "content", type, `${slug}.md`);
    return await readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}

export const dynamicParams = false;

const mdComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="mt-8 mb-3 font-[family-name:var(--font-montserrat)] text-xl font-semibold text-[var(--color-text)]">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-4 text-base leading-relaxed text-[var(--color-text-muted)]">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-4 ml-4 list-disc space-y-2 pl-4 text-base text-[var(--color-text-muted)]">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-4 ml-4 list-decimal space-y-2 pl-4 text-base text-[var(--color-text-muted)]">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-gold)] underline transition-colors hover:text-[var(--color-gold-dark)]"
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-[var(--color-text)]">
      {children}
    </strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="mb-4 border-l-4 border-[var(--color-gold)] pl-4 italic text-[var(--color-text-muted)]">
      {children}
    </blockquote>
  ),
};

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;

  /* --- Blog post --- */
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (post) {
    const content = await getContent("blog", slug);
    return (
      <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/${post.slug}` },
          ])) }}
        />
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
              <Markdown components={mdComponents}>{content}</Markdown>
            </div>
          ) : (
            <div className="prose prose-lg mt-10 max-w-none text-[var(--color-text-muted)]">
              <p>{post.excerpt}</p>
            </div>
          )}

          <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-sm font-medium text-[var(--color-text)]">
              Written by Shane Pierson
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Founder, Lords of Lending
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://learn.lordsoflending.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]"
              >
                Start Learning Free
              </a>
              <Link
                href="/podcast"
                className="inline-flex items-center rounded-md border border-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
              >
                Listen to the Podcast
              </Link>
            </div>
          </div>
        </article>
      </main>
    );
  }

  /* --- Podcast episode --- */
  const episode = PODCAST_EPISODES.find((e) => e.slug === slug);
  if (episode) {
    const content = await getContent("podcast", slug);
    return (
      <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastEpisodeJsonLd(episode)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Podcast", href: "/podcast" },
            { name: episode.title, href: `/${episode.slug}` },
          ])) }}
        />
        <article className="mx-auto max-w-3xl px-6 md:px-8">
          <Link
            href="/podcast"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-gold)]"
          >
            <ArrowLeft size={14} /> Back to Podcast
          </Link>

          <div className="flex items-start gap-6">
            <Image
              src="/images/podcast/cover-art.webp"
              alt="Lords of Lending Podcast"
              width={120}
              height={120}
              className="hidden shrink-0 rounded-xl shadow-lg sm:block"
            />
            <div>
              <time className="text-sm text-[var(--color-text-light)]">
                {new Date(episode.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h1 className="mt-2 font-[family-name:var(--font-montserrat)] text-2xl font-bold leading-tight text-[var(--color-text)] md:text-3xl">
                {episode.title}
              </h1>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Shane Pierson, Stephanie Dunn &amp; Brian Congelliere
              </p>
            </div>
          </div>

          {/* Buzzsprout Player */}
          <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <iframe
              src={`https://www.buzzsprout.com/2315806/${episode.buzzsproutId}?client_source=small_player&iframe=true`}
              loading="lazy"
              width="100%"
              height="200"
              frameBorder="0"
              scrolling="no"
              title={episode.title}
              className="rounded-lg"
            />
          </div>

          {/* Subscribe links */}
          <div className="mt-4 flex flex-wrap gap-2">
            {PODCAST_SUBSCRIBE_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-md ${link.color} px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-80`}
              >
                {link.platform}
              </a>
            ))}
          </div>

          {/* Show notes */}
          {content ? (
            <div className="prose-blog mt-8 max-w-none">
              <Markdown components={mdComponents}>{content}</Markdown>
            </div>
          ) : (
            <div className="mt-8 text-base leading-relaxed text-[var(--color-text-muted)]">
              <p>{episode.excerpt}</p>
            </div>
          )}

          {/* Related Episodes */}
          {(() => {
            const currentIdx = PODCAST_EPISODES.findIndex((e) => e.slug === slug);
            const related = PODCAST_EPISODES.filter((_, idx) => idx !== currentIdx).slice(0, 3);
            return (
              <div className="mt-12">
                <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)]">
                  More Episodes
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {related.map((ep) => (
                    <Link
                      key={ep.slug}
                      href={`/${ep.slug}`}
                      className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-shadow hover:shadow-md"
                    >
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src="/images/podcast/cover-art.webp"
                          alt=""
                          width={300}
                          height={300}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <time className="text-xs text-[var(--color-text-light)]">
                          {new Date(ep.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                        <h3 className="mt-1 text-xs font-bold leading-snug text-[var(--color-text)] group-hover:text-[var(--color-gold)]">
                          {ep.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-sm font-medium text-[var(--color-text)]">
              Lords of Lending Podcast
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Real conversations about sourcing, structuring, and closing SBA deals.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/podcast"
                className="inline-flex items-center rounded-md bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]"
              >
                See All Episodes
              </Link>
              <a
                href="https://learn.lordsoflending.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
              >
                Start Learning Free
              </a>
            </div>
          </div>
        </article>
      </main>
    );
  }

  notFound();
}
