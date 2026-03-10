import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PODCAST_EPISODES, PODCAST_SUBSCRIBE_LINKS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Expert conversations on business financing, growth strategies, and real-world success stories from the Lords of Lending podcast.",
  alternates: { canonical: `${SITE_CONFIG.url}/podcast` },
  openGraph: {
    title: "Lords of Lending Podcast",
    description: "Expert conversations on business financing and growth strategies.",
    url: `${SITE_CONFIG.url}/podcast`,
    siteName: "Lords of Lending - Purveyors of Honest Capital",
    images: [{ url: "/images/podcast/cover-art.webp", width: 1024, height: 1024 }],
    type: "website",
    locale: "en_GB",
  },
};

export default function PodcastPage() {
  const latestEpisode = PODCAST_EPISODES[0];
  const remainingEpisodes = PODCAST_EPISODES.slice(1);

  return (
    <main id="main-content" className="bg-[var(--color-dark)] pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Hero */}
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <Image
              src="/images/logos/podcast-wordmark.png"
              alt="Lords of Lending Podcast"
              width={300}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <h1 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
              Insights for Business Owners
            </h1>
            <p className="mt-4 text-white/60">
              Tune in for expert conversations on business financing, growth
              strategies, and real-world success stories. Each episode delivers
              the knowledge you need to fund your vision.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
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
              <a
                href={SITE_CONFIG.rss}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10"
              >
                RSS Feed
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/podcast/cover-art.webp"
              alt="Lords of Lending Podcast Cover"
              width={350}
              height={350}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Featured Latest Episode */}
        <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            Latest Episode
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Link href={`/${latestEpisode.slug}`} className="shrink-0">
              <Image
                src="/images/podcast/cover-art.webp"
                alt=""
                width={180}
                height={180}
                className="rounded-lg shadow-md"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <time className="text-xs text-white/40">
                {new Date(latestEpisode.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="mt-1 font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
                <Link href={`/${latestEpisode.slug}`} className="hover:text-[var(--color-gold)] transition-colors">
                  {latestEpisode.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-white/60">
                {latestEpisode.excerpt}
              </p>
              <div className="mt-4">
                <iframe
                  src={`https://www.buzzsprout.com/2315806/${latestEpisode.buzzsproutId}?client_source=small_player&iframe=true`}
                  loading="lazy"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  scrolling="no"
                  title={latestEpisode.title}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Episode Grid */}
        <div className="mt-12">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">
            All Episodes
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remainingEpisodes.map((ep) => (
              <Link
                key={ep.slug}
                href={`/${ep.slug}`}
                className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-gold)]/40 hover:shadow-lg hover:shadow-[var(--color-gold)]/5"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/images/podcast/cover-art.webp"
                    alt=""
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <time className="text-xs text-white/40">
                    {new Date(ep.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-1 font-[family-name:var(--font-montserrat)] text-sm font-bold leading-snug text-white group-hover:text-[var(--color-gold)]">
                    {ep.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50 line-clamp-2">
                    {ep.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
