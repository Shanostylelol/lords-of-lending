import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ROUNDUP_POSTS, SITE_CONFIG } from "@/lib/constants";
import { EmailCapture } from "@/components/ui/email-capture";

export const metadata: Metadata = {
  title: "SBA Lending This Week — Weekly SBA Lending News & Insights",
  description:
    "Weekly SBA lending roundup with rate updates, deal spotlights, and industry news for brokers and originators.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/sba-lending-this-week`,
  },
  openGraph: {
    title: "SBA Lending This Week — Weekly SBA Lending News & Insights",
    description:
      "Weekly SBA lending roundup with rate updates, deal spotlights, and industry news for brokers and originators.",
    url: `${SITE_CONFIG.url}/sba-lending-this-week`,
    siteName: "Lords of Lending - Purveyors of Honest Capital",
    images: [{ url: "/images/pillar/sba-lending-2026-outlook.webp", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SBA Lending This Week — Weekly SBA Lending News & Insights",
    description:
      "Weekly SBA lending roundup with rate updates, deal spotlights, and industry news for brokers and originators.",
    images: ["/images/pillar/sba-lending-2026-outlook.webp"],
  },
};

export default function SbaLendingThisWeekPage() {
  const sorted = [...ROUNDUP_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[var(--color-gold)]/10 px-3 py-0.5 text-xs font-semibold text-[var(--color-gold)]">
            Weekly Digest
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight text-white md:text-4xl">
            SBA Lending This Week
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
            Weekly news, rate updates, deal spotlights, and honest takes on the
            SBA lending market. Written by originators, for originators.
          </p>
        </div>

        {/* Subscribe CTA */}
        <div className="mt-8 rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 p-6 text-center">
          <p className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
            Subscribe to get it in your inbox
          </p>
          <p className="mt-1 text-sm text-white/60">
            Free weekly insights. No spam. Unsubscribe anytime.
          </p>
          <div className="mt-4">
            <EmailCapture variant="banner" />
          </div>
        </div>

        {/* Issue grid */}
        {sorted.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {sorted.map((issue) => (
              <Link
                key={issue.slug}
                href={`/${issue.slug}`}
                className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-gold)]/30 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={issue.image}
                    alt={issue.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-[var(--color-gold)]/90 px-2.5 py-0.5 text-xs font-semibold text-white">
                    Weekly Digest
                  </span>
                </div>
                <div className="p-4">
                  <time className="text-xs text-white/40">
                    {new Date(issue.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-1 font-[family-name:var(--font-montserrat)] text-base font-bold leading-snug text-white group-hover:text-[var(--color-gold)]">
                    {issue.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">
                    {issue.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-md rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <p className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                Coming Soon
              </p>
              <p className="mt-2 text-sm text-white/60">
                First issue drops March 17, 2026. Subscribe above to be the
                first to get it.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
