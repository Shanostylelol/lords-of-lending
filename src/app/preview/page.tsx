import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page Previews - Lords of Lending",
  robots: { index: false, follow: false },
};

const VERSIONS = [
  {
    id: "v1",
    name: "The Selector",
    description: "Bold split hero with dual-audience cards on dark navy. Users choose their path immediately.",
    style: "Dark & Decisive",
  },
  {
    id: "v2",
    name: "The Authority",
    description: "Editorial magazine layout. Content-first with authority badges and social proof up front.",
    style: "Clean & Authoritative",
  },
  {
    id: "v3",
    name: "The Platform",
    description: "Modern SaaS aesthetic. Clean white with gradient accents and floating UI elements.",
    style: "Light & Modern",
  },
  {
    id: "v4",
    name: "The Storyteller",
    description: "Podcast/media brand focus. Immersive audio-first design with episode highlights front and center.",
    style: "Media & Immersive",
  },
  {
    id: "v5",
    name: "The Empire",
    description: "Full dark luxury. Premium financial aesthetic with gold accents and commanding presence.",
    style: "Dark Luxury",
  },
];

export default function PreviewIndex() {
  return (
    <main id="main-content" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
          Landing Page Previews
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-muted)]">
          5 different design approaches for the Lords of Lending dual-audience homepage.
          Click any version to see the full page.
        </p>

        <div className="mt-12 grid gap-6">
          {VERSIONS.map((v, i) => (
            <a
              key={v.id}
              href={`/preview/${v.id}`}
              className="group flex items-center gap-6 rounded-xl border border-[var(--color-border)] bg-white p-6 transition-all hover:border-[var(--color-gold)] hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[var(--color-dark)] font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-gold-light)]">
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <h2 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-gold)]">
                    {v.name}
                  </h2>
                  <span className="rounded-full border border-[var(--color-border)] px-3 py-0.5 text-xs font-medium text-[var(--color-text-muted)]">
                    {v.style}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {v.description}
                </p>
              </div>
              <span className="shrink-0 text-[var(--color-gold)] opacity-0 transition-opacity group-hover:opacity-100">
                View &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
