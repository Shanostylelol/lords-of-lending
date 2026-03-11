import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { readFile } from "fs/promises";
import { join } from "path";
import Markdown from "react-markdown";
import {
  BLOG_POSTS,
  PODCAST_EPISODES,
  PODCAST_SUBSCRIBE_LINKS,
  PILLAR_ARTICLES,
  SUPPORTING_ARTICLES,
  SITE_CONFIG,
} from "@/lib/constants";
import type { ContentMeta } from "@/lib/constants";
import { STATE_DATA } from "@/lib/state-data";
import { INDUSTRY_DATA } from "@/lib/industry-data";
import {
  articleJsonLd,
  articleJsonLdWithAuthor,
  podcastEpisodeJsonLd,
  breadcrumbJsonLd,
} from "@/lib/structured-data";
import { TranscriptToggle } from "@/components/ui/transcript-toggle";
import { AuthorBio } from "@/components/ui/author-bio";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { extractHeadings, slugifyHeading } from "@/lib/extract-headings";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedArticles } from "@/components/sections/related-articles";

interface Props {
  params: Promise<{ slug: string }>;
}

type ContentType = "blog" | "podcast" | "pillar" | "supporting" | "state" | "industry";

const ALL_CONTENT: { slug: string; type: ContentType }[] = [
  ...BLOG_POSTS.map((p) => ({ slug: p.slug, type: "blog" as const })),
  ...PODCAST_EPISODES.map((e) => ({ slug: e.slug, type: "podcast" as const })),
  ...PILLAR_ARTICLES.map((a) => ({ slug: a.slug, type: "pillar" as const })),
  ...SUPPORTING_ARTICLES.map((a) => ({ slug: a.slug, type: "supporting" as const })),
  ...STATE_DATA.map((s) => ({ slug: `sba-loans-in-${s.slug}`, type: "state" as const })),
  ...INDUSTRY_DATA.map((i) => ({ slug: `sba-loans-for-${i.slug}`, type: "industry" as const })),
];

const AUTHOR_NAMES: Record<ContentMeta["author"], string> = {
  shane: "Shane Pierson",
  steph: "Stephanie Castagnier Dunn",
  brian: "Brian Congelliere",
};

export async function generateStaticParams() {
  return ALL_CONTENT.map((item) => ({ slug: item.slug }));
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

  const article = [...PILLAR_ARTICLES, ...SUPPORTING_ARTICLES].find((a) => a.slug === slug);
  if (article) {
    return {
      title: `${article.title} — Lords of Lending`,
      description: article.excerpt,
      alternates: { canonical: `${base}/${article.slug}` },
      openGraph: {
        title: `${article.title} — Lords of Lending`,
        description: article.excerpt,
        url: `${base}/${article.slug}`,
        siteName: "Lords of Lending - Purveyors of Honest Capital",
        images: [{ url: article.image, width: 1200, height: 630 }],
        type: "article",
        locale: "en_US",
        publishedTime: new Date(article.date).toISOString(),
      },
      twitter: {
        card: "summary_large_image",
        title: `${article.title} — Lords of Lending`,
        description: article.excerpt,
        images: [article.image],
      },
    };
  }

  /* --- State page metadata --- */
  if (slug.startsWith("sba-loans-in-")) {
    const stateSlug = slug.replace("sba-loans-in-", "");
    const state = STATE_DATA.find((s) => s.slug === stateSlug);
    if (state) {
      const title = `SBA Loans in ${state.name} | Complete Guide 2026 — Lords of Lending`;
      const description = `SBA lending guide for ${state.name}: top industries include ${state.topIndustries.slice(0, 3).join(", ")}. Cities, lender insights, and loan strategies for ${state.abbreviation} business owners.`;
      return {
        title,
        description,
        alternates: { canonical: `${base}/${slug}` },
        openGraph: { title, description, url: `${base}/${slug}`, siteName: "Lords of Lending", images: [{ url: "/images/logos/wordmark-vert.png", width: 800, height: 1036 }], type: "article", locale: "en_US" },
        twitter: { card: "summary_large_image" as const, title, description, images: ["/images/logos/wordmark-vert.png"] },
      };
    }
  }

  /* --- Industry page metadata --- */
  if (slug.startsWith("sba-loans-for-")) {
    const industrySlug = slug.replace("sba-loans-for-", "");
    const industry = INDUSTRY_DATA.find((i) => i.slug === industrySlug);
    if (industry) {
      const title = `SBA Loans for ${industry.name} | Complete Guide — Lords of Lending`;
      const description = `SBA lending guide for ${industry.name}: typical loan range ${industry.typicalLoanRange}, ${industry.typicalDSCR} DSCR, ${industry.typicalEquityInjection} equity injection.`;
      return {
        title,
        description,
        alternates: { canonical: `${base}/${slug}` },
        openGraph: { title, description, url: `${base}/${slug}`, siteName: "Lords of Lending", images: [{ url: industry.image, width: 1200, height: 630 }], type: "article", locale: "en_US" },
        twitter: { card: "summary_large_image" as const, title, description, images: [industry.image] },
      };
    }
  }

  return {};
}

async function getContent(type: string, slug: string): Promise<string | null> {
  try {
    const filePath = join(process.cwd(), "content", type, `${slug}.md`);
    return await readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}

async function getTranscript(slug: string): Promise<string | null> {
  try {
    const filePath = join(process.cwd(), "content", "transcripts", `${slug}.txt`);
    return await readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}

export const dynamicParams = false;

/* --- Markdown link component: internal vs external --- */
function MdLink({ href, children }: { href?: string; children?: React.ReactNode }) {
  const isInternal = href?.startsWith("/");
  if (isInternal) {
    return (
      <Link
        href={href!}
        className="text-[var(--color-gold)] underline transition-colors hover:text-[var(--color-gold-dark)]"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-gold)] underline transition-colors hover:text-[var(--color-gold-dark)]"
    >
      {children}
    </a>
  );
}

function headingId(children: React.ReactNode): string {
  const text = typeof children === "string" ? children : String(children ?? "");
  return slugifyHeading(text);
}

const mdComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 id={headingId(children)} className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white scroll-mt-24">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 id={headingId(children)} className="mt-8 mb-3 font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white scroll-mt-24">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-4 text-base leading-relaxed text-white/60">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-4 ml-4 list-disc space-y-2 pl-4 text-base text-white/60">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-4 ml-4 list-decimal space-y-2 pl-4 text-base text-white/60">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  a: MdLink,
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-white">
      {children}
    </strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="mb-4 border-l-4 border-[var(--color-gold)] pl-4 italic text-white/60">
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
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[var(--color-gold)]"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <time className="text-sm text-white/40">
            {new Date(post.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>

          <h1 className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-white md:text-4xl">
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
            <div className="prose prose-lg mt-10 max-w-none text-white/60">
              <p>{post.excerpt}</p>
            </div>
          )}

          <AuthorBio author="shane" />
        </article>
      </main>
    );
  }

  /* --- Podcast episode --- */
  const episode = PODCAST_EPISODES.find((e) => e.slug === slug);
  if (episode) {
    const content = await getContent("podcast", slug);
    const transcript = await getTranscript(slug);
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
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[var(--color-gold)]"
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
              <time className="text-sm text-white/40">
                {new Date(episode.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h1 className="mt-2 font-[family-name:var(--font-montserrat)] text-2xl font-bold leading-tight text-white md:text-3xl">
                {episode.title}
              </h1>
              <p className="mt-2 text-sm text-white/60">
                Shane Pierson, Stephanie Dunn &amp; Brian Congelliere
              </p>
            </div>
          </div>

          {/* Buzzsprout Player — hidden for unpublished episodes */}
          {!episode.buzzsproutId.startsWith("TBD") && (
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
          )}
          {episode.buzzsproutId.startsWith("TBD") && (
            <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center">
              <p className="text-sm font-medium text-white">Episode Coming Soon</p>
              <p className="mt-1 text-xs text-white/60">This episode will be available for streaming shortly.</p>
            </div>
          )}

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
            <div className="mt-8 text-base leading-relaxed text-white/60">
              <p>{episode.excerpt}</p>
            </div>
          )}

          {/* Full Transcript (SEO + Accessibility) */}
          {transcript && <TranscriptToggle transcript={transcript} />}

          {/* Related Episodes */}
          {(() => {
            const currentIdx = PODCAST_EPISODES.findIndex((e) => e.slug === slug);
            const related = PODCAST_EPISODES.filter((_, idx) => idx !== currentIdx).slice(0, 3);
            return (
              <div className="mt-12">
                <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
                  More Episodes
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {related.map((ep) => (
                    <Link
                      key={ep.slug}
                      href={`/${ep.slug}`}
                      className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-shadow hover:shadow-md"
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
                        <time className="text-xs text-white/40">
                          {new Date(ep.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                        <h3 className="mt-1 text-xs font-bold leading-snug text-white group-hover:text-[var(--color-gold)]">
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
            <p className="text-sm font-medium text-white">
              Lords of Lending Podcast
            </p>
            <p className="mt-1 text-sm text-white/60">
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
                href="https://learn.lordsoflending.com/pricing"
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

  /* --- Pillar / Supporting / Training articles --- */
  const article = [...PILLAR_ARTICLES, ...SUPPORTING_ARTICLES].find((a) => a.slug === slug);
  if (article) {
    const isPillar = article.category === "pillar";
    const contentDir = isPillar ? "pillar" : "supporting";
    const content = await getContent(contentDir, slug);
    const authorName = AUTHOR_NAMES[article.author];

    const breadcrumbs = isPillar
      ? [
          { name: "Home", href: "/" },
          { name: "Guides", href: "/blog" },
          { name: article.title, href: `/${article.slug}` },
        ]
      : [
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: article.title, href: `/${article.slug}` },
        ];

    return (
      <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLdWithAuthor(article)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
        />
        <article className="mx-auto max-w-3xl px-6 md:px-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: isPillar ? "Guides" : "Articles", href: "/blog" },
            { label: article.title },
          ]} />

          <div className="flex items-center gap-3">
            <time className="text-sm text-white/40">
              {new Date(article.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {article.readingTime && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-surface)] px-2.5 py-0.5 text-xs text-white/50">
                <Clock size={12} /> {article.readingTime} min read
              </span>
            )}
          </div>

          <h1 className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-white md:text-4xl">
            {article.title}
          </h1>

          <p className="mt-3 text-sm text-white/50">
            By {authorName}
          </p>

          {content ? (
            <>
              {(() => {
                const tocItems = extractHeadings(content);
                return tocItems.length >= 3 ? <TableOfContents items={tocItems} /> : null;
              })()}
              <div className="prose-blog mt-10 max-w-none">
                <Markdown components={mdComponents}>{content}</Markdown>
              </div>
            </>
          ) : (
            <div className="prose prose-lg mt-10 max-w-none text-white/60">
              <p>{article.excerpt}</p>
            </div>
          )}

          {(() => {
            const allArticles = [...PILLAR_ARTICLES, ...SUPPORTING_ARTICLES];
            const related = allArticles
              .filter((a) => a.slug !== article.slug && a.cluster === article.cluster)
              .slice(0, 3);
            return related.length > 0 ? (
              <RelatedArticles
                articles={related.map((a) => ({
                  slug: a.slug,
                  title: a.title,
                  image: a.image,
                  excerpt: a.excerpt,
                  category: a.category,
                }))}
              />
            ) : null;
          })()}

          <AuthorBio author={article.author} />
        </article>
      </main>
    );
  }

  /* --- State page --- */
  if (slug.startsWith("sba-loans-in-")) {
    const stateSlug = slug.replace("sba-loans-in-", "");
    const state = STATE_DATA.find((s) => s.slug === stateSlug);
    if (state) {
      const faqs = state.faq;
      return (
        <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: `SBA Loans in ${state.name}`, href: `/${slug}` }])) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
          <article className="mx-auto max-w-3xl px-6 md:px-8">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "SBA Loans by State", href: "/blog" },
              { label: `SBA Loans in ${state.name}` },
            ]} />
            <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-white md:text-4xl">SBA Loans in {state.name}</h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/60">{state.uniqueContent.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div>
            <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">Top SBA Industries in {state.name}</h2>
            <ul className="mb-6 ml-4 list-disc space-y-2 pl-4 text-base text-white/60">{state.topIndustries.map((ind) => <li key={ind}>{ind}</li>)}</ul>
            {state.relatedIndustries.length > 0 && (
              <>
                <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">Related Industry Guides</h2>
                <div className="flex flex-wrap gap-2">{state.relatedIndustries.map((ind) => <Link key={ind} href={`/sba-loans-for-${ind}`} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-sm text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-colors">{ind.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</Link>)}</div>
              </>
            )}
            <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">{faqs.map((faq) => <div key={faq.q} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"><h3 className="text-sm font-semibold text-white">{faq.q}</h3><p className="mt-2 text-sm text-white/60">{faq.a}</p></div>)}</div>
            <div className="mt-8 space-y-2 text-sm">
              <p className="font-semibold text-white/80">Related Resources</p>
              <ul className="space-y-1">
                <li><Link href="/complete-guide-sba-7a-loans" className="text-[var(--color-gold)] underline hover:text-[var(--color-gold-dark)]">The Complete Guide to SBA 7(a) Loans in 2026</Link></li>
                <li><Link href="/sba-7a-vs-504" className="text-[var(--color-gold)] underline hover:text-[var(--color-gold-dark)]">SBA 7(a) vs. SBA 504: Which Loan Is Right for You?</Link></li>
              </ul>
            </div>
            <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
              <p className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">Ready to Start Your SBA Journey in {state.name}?</p>
              <p className="mt-2 text-sm text-white/60">Get expert guidance on SBA lending from originators who close deals nationwide.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a href="https://learn.lordsoflending.com/pricing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]">Explore Training</a>
                <Link href="/contact" className="inline-flex items-center rounded-md border border-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white">Contact Us</Link>
              </div>
            </div>
          </article>
        </main>
      );
    }
  }

  /* --- Industry page --- */
  if (slug.startsWith("sba-loans-for-")) {
    const industrySlug = slug.replace("sba-loans-for-", "");
    const industry = INDUSTRY_DATA.find((i) => i.slug === industrySlug);
    if (industry) {
      const faqs = [
        { q: `What is the typical SBA loan size for ${industry.name.toLowerCase()}?`, a: `SBA loans for ${industry.name.toLowerCase()} typically range from ${industry.typicalLoanRange}.` },
        { q: `What DSCR do lenders require for ${industry.name.toLowerCase()} SBA loans?`, a: `Lenders typically require a debt service coverage ratio of ${industry.typicalDSCR} for ${industry.name.toLowerCase()} SBA deals.` },
        { q: `How much equity injection is needed for an SBA ${industry.shortName.toLowerCase()} deal?`, a: `${industry.name} SBA deals typically require ${industry.typicalEquityInjection} equity injection from the borrower.` },
        { q: `Is ${industry.name.toLowerCase()} a popular industry for SBA lending?`, a: `${industry.name} has ${industry.sbaPopularity.toLowerCase()} SBA lending popularity. ${industry.keyInsight.split(".")[0]}.` },
      ];
      const allContent = [...BLOG_POSTS, ...PILLAR_ARTICLES, ...SUPPORTING_ARTICLES];
      const relatedArticleLinks = industry.relatedArticles.map((s) => { const item = allContent.find((c) => c.slug === s); return item ? { slug: item.slug, title: item.title } : null; }).filter(Boolean) as { slug: string; title: string }[];
      const relatedEpisodeLinks = industry.relatedEpisodes.map((s) => { const ep = PODCAST_EPISODES.find((e) => e.slug === s); return ep ? { slug: ep.slug, title: ep.title } : null; }).filter(Boolean) as { slug: string; title: string }[];
      return (
        <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: `SBA Loans for ${industry.name}`, href: `/${slug}` }])) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
          <article className="mx-auto max-w-3xl px-6 md:px-8">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "SBA Loans by Industry", href: "/blog" },
              { label: `SBA Loans for ${industry.name}` },
            ]} />
            <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-white md:text-4xl">SBA Loans for {industry.name}</h1>
            <p className="mt-1 text-sm text-white/40">NAICS {industry.naicsRange} &middot; SBA Popularity: {industry.sbaPopularity}</p>
            <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src={industry.image}
                alt={`SBA Loans for ${industry.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-6 text-base leading-relaxed text-white/60">{industry.typicalDealStructure}</p>
            <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">Typical Deal Structure</h2>
            <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
              <table className="w-full text-sm">
                <thead><tr className="bg-[var(--color-surface)]"><th className="px-4 py-3 text-left font-semibold text-white">Parameter</th><th className="px-4 py-3 text-left font-semibold text-white">Typical Range</th></tr></thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr><td className="px-4 py-3 text-white/60">Loan Amount</td><td className="px-4 py-3 font-medium text-[var(--color-gold)]">{industry.typicalLoanRange}</td></tr>
                  <tr><td className="px-4 py-3 text-white/60">DSCR Requirement</td><td className="px-4 py-3 font-medium text-[var(--color-gold)]">{industry.typicalDSCR}</td></tr>
                  <tr><td className="px-4 py-3 text-white/60">Equity Injection</td><td className="px-4 py-3 font-medium text-[var(--color-gold)]">{industry.typicalEquityInjection}</td></tr>
                  <tr><td className="px-4 py-3 text-white/60">Average Term</td><td className="px-4 py-3 font-medium text-white">{industry.avgTermYears}</td></tr>
                </tbody>
              </table>
            </div>
            <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">What Lenders Look For</h2>
            <ul className="mb-6 ml-4 list-disc space-y-2 pl-4 text-base text-white/60">{industry.whatLendersLookFor.map((item) => <li key={item} className="leading-relaxed">{item}</li>)}</ul>
            <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">Common Challenges</h2>
            <ul className="mb-6 ml-4 list-disc space-y-2 pl-4 text-base text-white/60">{industry.commonChallenges.map((item) => <li key={item} className="leading-relaxed">{item}</li>)}</ul>
            <div className="mt-8 rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 p-5">
              <p className="text-sm font-semibold text-[var(--color-gold)]">From the Field</p>
              <p className="mt-2 text-sm italic leading-relaxed text-white/70">&ldquo;{industry.keyInsight}&rdquo;</p>
            </div>
            <h2 className="mt-10 mb-4 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">{faqs.map((faq) => <div key={faq.q} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"><h3 className="text-sm font-semibold text-white">{faq.q}</h3><p className="mt-2 text-sm text-white/60">{faq.a}</p></div>)}</div>
            {(() => {
              const sba7aPillar = PILLAR_ARTICLES.find((a) => a.slug === "complete-guide-sba-7a-loans");
              const relatedCards = [
                ...(sba7aPillar ? [{ slug: sba7aPillar.slug, title: sba7aPillar.title, image: sba7aPillar.image, excerpt: sba7aPillar.excerpt, category: sba7aPillar.category }] : []),
                ...relatedArticleLinks.map((link) => { const a = allContent.find((c) => c.slug === link.slug) as ContentMeta | undefined; return a ? { slug: a.slug, title: a.title, image: a.image, excerpt: a.excerpt, category: a.category } : null; }).filter(Boolean) as { slug: string; title: string; image: string; excerpt: string; category: string }[],
                ...relatedEpisodeLinks.map((link) => ({ slug: link.slug, title: link.title, image: "/images/podcast/cover-art.webp", excerpt: "", category: "podcast" })),
              ].slice(0, 3);
              return relatedCards.length > 0 ? <RelatedArticles articles={relatedCards} heading="Related Resources" /> : null;
            })()}
            <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
              <p className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">Need Help with a {industry.shortName} SBA Deal?</p>
              <p className="mt-2 text-sm text-white/60">Our team has closed hundreds of {industry.name.toLowerCase()} deals. Let us help you structure yours.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a href="https://learn.lordsoflending.com/pricing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]">Explore Training</a>
                <Link href="/contact" className="inline-flex items-center rounded-md border border-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white">Contact Us</Link>
              </div>
            </div>
          </article>
        </main>
      );
    }
  }

  notFound();
}
