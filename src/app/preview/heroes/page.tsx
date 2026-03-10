import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero Concepts - V5 Empire - Lords of Lending",
  robots: { index: false, follow: false },
};

const HEROES = [
  {
    id: "a",
    name: "The Monolith",
    style: "Logo-as-Hero",
    description:
      "The vertical wordmark IS the entire hero. Suite Black void, breathing gold glow, film grain. Apple-tier restraint — just the mark, commanding the screen.",
    accent: "bg-gradient-to-r from-[#AA712C] to-[#E2A970]",
  },
  {
    id: "b",
    name: "The Particle Field",
    style: "Floating Gold Dust",
    description:
      "The wordmark floats in a field of rising gold bokeh particles. Pure CSS particle system — 25 gold orbs drifting upward like embers. Atmospheric and alive.",
    accent: "bg-gradient-to-r from-[#E2A970] to-[#AA712C]",
  },
  {
    id: "c",
    name: "The Split Reveal",
    style: "Dual-Audience Doors",
    description:
      "Split-screen — Eggplant left (Business Owners) and Suite Black right (Brokers). The wordmark watermarks across both at 3% opacity. Two worlds, one kingdom.",
    accent: "bg-gradient-to-r from-[#3B0F44] to-[#231F20]",
  },
  {
    id: "d",
    name: "The Gold Gradient",
    style: "Living Luxury",
    description:
      "A slowly shifting animated gradient background (navy → warm black → navy). Decorative gold lines frame the wordmark. Rolex/Patek Philippe print ad energy.",
    accent: "bg-gradient-to-r from-[#0B1D33] to-[#AA712C]",
  },
  {
    id: "e",
    name: "The Spotlight Stage",
    style: "Theater Reveal",
    description:
      "Pitch black. Two drifting spotlights (gold + eggplant) slowly illuminate the wordmark like a theater curtain rise. Dramatic entrance sequence. The brand emerges from darkness.",
    accent: "bg-gradient-to-r from-[#E2A970] to-[#3B0F44]",
  },
];

export default function HeroesIndexPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#0B1D33] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <h1 className="font-[family-name:var(--font-montserrat)] text-4xl font-extrabold tracking-wide text-white md:text-5xl">
          V5 Hero Concepts — Round 2
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
          5 new hero designs. Logo-forward — the vertical wordmark is the
          centerpiece. No photo backgrounds. Pure brand energy with creative
          effects.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HEROES.map((hero) => (
            <Link
              key={hero.id}
              href={`/preview/heroes/${hero.id}`}
              className="group relative overflow-hidden rounded-xl border border-[#1e3554] bg-[#0f2744] p-6 transition-all duration-300 hover:border-[#E2A970]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#AA712C]/10"
            >
              <div
                className={`mb-4 h-1.5 w-12 rounded-full ${hero.accent}`}
              />
              <div className="mb-1 font-[family-name:var(--font-montserrat)] text-xs font-medium tracking-[0.15em] text-[#E2A970]">
                HERO {hero.id.toUpperCase()} &middot; {hero.style}
              </div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
                {hero.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
                {hero.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#E2A970] transition-colors group-hover:text-white">
                View Full Screen
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/preview"
            className="text-sm text-[#5a7a9e] transition-colors hover:text-[#E2A970]"
          >
            ← Back to All Previews
          </Link>
        </div>
      </div>
    </main>
  );
}
