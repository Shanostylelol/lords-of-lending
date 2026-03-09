import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PODCAST_EPISODES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Expert conversations on business financing, growth strategies, and real-world success stories from the Lords of Lending podcast.",
};

export default function PodcastPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Hero */}
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <Image
              src="/images/logos/podcast-wordmark.png"
              alt="Lords of Lending Podcast"
              width={300}
              height={40}
              className="h-8 w-auto"
            />
            <h1 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
              Insights for Business Owners
            </h1>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Tune in for expert conversations on business financing, growth
              strategies, and real-world success stories. Each episode delivers
              the knowledge you need to fund your vision.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://podcasts.apple.com/podcast/id1798717410"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[var(--color-dark)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                Apple Podcasts
              </a>
              <a
                href="https://open.spotify.com/show/6P25i3rDng6aMqlijl9imE"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#1DB954] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                Spotify
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#FF0000] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                YouTube
              </a>
              <a
                href={SITE_CONFIG.rss}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)]"
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

        {/* Buzzsprout Player Embed */}
        <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <div
            id="buzzsprout-small-player-limit-1"
            dangerouslySetInnerHTML={{
              __html: `<script src="https://www.buzzsprout.com/2315806.js?artist=&container_id=buzzsprout-small-player-limit-1&limit=1&player=small" type="text/javascript" charset="utf-8"></script>`,
            }}
          />
        </div>

        {/* Episode List */}
        <div className="mt-12">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
            All Episodes
          </h2>

          <div className="mt-6 space-y-4">
            {PODCAST_EPISODES.map((ep) => (
              <Link
                key={ep.slug}
                href={`/${ep.slug}`}
                className="group flex gap-4 rounded-lg border border-[var(--color-border)] bg-white p-4 transition-shadow hover:shadow-md"
              >
                <Image
                  src="/images/podcast/cover-art.webp"
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-md object-cover"
                />
                <div className="min-w-0">
                  <time className="text-xs text-[var(--color-text-light)]">
                    {new Date(ep.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-1 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-gold)]">
                    {ep.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)] line-clamp-1">
                    {ep.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
