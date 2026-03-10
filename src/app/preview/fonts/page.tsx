"use client";

import { useState } from "react";

/* ───────────────────────── font definitions ─── */
const FONTS = [
  {
    name: "Montserrat",
    file: null,
    css: "var(--font-montserrat)",
    category: "Current",
    note: "Currently used — geometric sans-serif, clean and modern",
  },
  // ── Art Deco Display (most on-brand for LoL) ──
  {
    name: "Bagiewise",
    file: "/fonts/preview/Bagiewise.woff",
    css: "Bagiewise",
    category: "Art Deco",
    note: "Luxury art deco typeface — directly matches the LoL logo style",
  },
  {
    name: "Delvion",
    file: "/fonts/preview/Delvion.woff2",
    css: "Delvion",
    category: "Art Deco",
    note: "Art deco typeface — geometric, architectural, Gatsby-era",
  },
  {
    name: "Phantom",
    file: "/fonts/preview/Phantom.woff",
    css: "Phantom",
    category: "Art Deco",
    note: "Art deco display — strong geometric verticals",
  },
  // ── Luxury Serif ──
  {
    name: "Kalorama",
    file: "/fonts/preview/Kalorama.otf",
    css: "Kalorama",
    category: "Elegant Serif",
    note: "Elegant serif typeface — refined, high society",
  },
  {
    name: "Silkroad",
    file: "/fonts/preview/Silkroad.woff",
    css: "Silkroad",
    category: "Luxury Serif",
    note: "Luxury serif typeface — exotic, premium trade route energy",
  },
  {
    name: "Bodikago",
    file: "/fonts/preview/Bodikago.ttf",
    css: "Bodikago",
    category: "Luxury Serif",
    note: "Luxury serif — bold, commanding presence",
  },
  {
    name: "Briton",
    file: "/fonts/preview/Briton.woff2",
    css: "Briton",
    category: "Luxury Serif",
    note: "Luxury elegant serif pair — British aristocratic refinement",
  },
  {
    name: "Colette",
    file: "/fonts/preview/Colette.woff",
    css: "Colette",
    category: "Serif",
    note: "Clean serif — Parisian editorial, understated elegance",
  },
  {
    name: "Ruminate",
    file: "/fonts/preview/Ruminate.otf",
    css: "Ruminate",
    category: "Modern Serif",
    note: "Elegant modern serif — thoughtful, contemplative authority",
  },
  // ── Luxury Sans ──
  {
    name: "King Sans",
    file: "/fonts/preview/KingSans.otf",
    css: "KingSans",
    category: "Premium Sans",
    note: "King Sans — royal, commanding, powerful sans-serif",
  },
  {
    name: "Saudah",
    file: "/fonts/preview/Saudah.woff",
    css: "Saudah",
    category: "Luxury Sans",
    note: "Luxury sans — Middle Eastern luxury hotel energy",
  },
  {
    name: "Vemior",
    file: "/fonts/preview/Vemior.woff2",
    css: "Vemior",
    category: "Fashion Sans",
    note: "Luxury fashion sans-serif — runway, editorial",
  },
  {
    name: "Melody",
    file: "/fonts/preview/Melody.woff2",
    css: "Melody",
    category: "Modern Sans",
    note: "Modern sophisticated sans-serif — clean luxury",
  },
  {
    name: "Margarite",
    file: "/fonts/preview/Margarite.woff2",
    css: "Margarite",
    category: "Sans",
    note: "Margarite Sans — delicate, refined geometric",
  },
  {
    name: "Withcher",
    file: "/fonts/preview/Withcher.woff",
    css: "Withcher",
    category: "Ligature Sans",
    note: "Beauty ligature sans-serif — stylistic alternates, high-end",
  },
  // ── Display / Fashion ──
  {
    name: "Modern Luxury",
    file: "/fonts/preview/ModernLuxury.ttf",
    css: "ModernLuxury",
    category: "Fashion Display",
    note: "Modern luxury fashion font — runway meets boardroom",
  },
  {
    name: "Relaxe",
    file: "/fonts/preview/Relaxe.woff2",
    css: "Relaxe",
    category: "Display",
    note: "Relaxe typeface — smooth, confident, effortless luxury",
  },
  // ── Condensed / Impact ──
  {
    name: "Bondie",
    file: "/fonts/preview/Bondie.ttf",
    css: "Bondie",
    category: "Condensed",
    note: "Condensed sans-serif — tight, editorial, impactful",
  },
  {
    name: "Ironfist",
    file: "/fonts/preview/Ironfist.woff",
    css: "Ironfist",
    category: "Condensed",
    note: "Strong condensed display sans — power, authority, muscle",
  },
  {
    name: "Triumph",
    file: "/fonts/preview/Triumph.woff",
    css: "Triumph",
    category: "Wide Sans",
    note: "Wide sans-serif — triumphant, expansive, victorious",
  },
  // ── Casual ──
  {
    name: "Branden",
    file: "/fonts/preview/Branden.ttf",
    css: "Branden",
    category: "Casual Sans",
    note: "Casual sans-serif — friendly, approachable, modern",
  },
  // ── From previous round (best picks) ──
  {
    name: "Old Money",
    file: "/fonts/preview/OldMoney-Regular.otf",
    css: "OldMoney",
    category: "Luxury Display",
    note: "Art deco luxury branding trio — old money, new power",
  },
  {
    name: "Montage",
    file: "/fonts/preview/Montage.woff2",
    css: "Montage",
    category: "Cinematic",
    note: "Cinematic logo luxury font — movie poster energy",
  },
  {
    name: "Vogue",
    file: "/fonts/preview/Vogue.woff",
    css: "Vogue",
    category: "Fashion Serif",
    note: "Elegant serif typeface — Vogue magazine editorial feel",
  },
  {
    name: "Gragio",
    file: "/fonts/preview/Gragio.woff2",
    css: "Gragio",
    category: "Cinematic",
    note: "Elegant cinematic display — film title card energy",
  },
  {
    name: "Condenso",
    file: "/fonts/preview/Condenso.otf",
    css: "Condenso",
    category: "Condensed",
    note: "Condensed impact font — tight, powerful, editorial",
  },
];

const EGGPLANT = "#3B0F44";
const SUITE_BLACK = "#231F20";
const DECO_GOLD = "#E2A970";

export default function FontPreviewPage() {
  const [selectedFont, setSelectedFont] = useState<string | null>(null);

  return (
    <>
      {/* ── @font-face declarations ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: FONTS.filter((f) => f.file)
            .map(
              (f) => `
          @font-face {
            font-family: '${f.css}';
            src: url('${f.file}') format('${
              f.file!.endsWith(".woff2")
                ? "woff2"
                : f.file!.endsWith(".woff")
                  ? "woff"
                  : f.file!.endsWith(".otf")
                    ? "opentype"
                    : "truetype"
            }');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `
            )
            .join("\n"),
        }}
      />

      <main className="min-h-screen bg-[#0B1D33] px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-wide text-white md:text-4xl">
            Font Preview — Hero C Headlines
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[#94a3b8]">
            14 fonts rendered with the actual hero headlines. Click any to see
            it full-width. All from your Envato Elements library.
          </p>

          {/* ── Font grid ── */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FONTS.map((font) => {
              const isSelected = selectedFont === font.name;
              return (
                <button
                  key={font.name}
                  onClick={() =>
                    setSelectedFont(isSelected ? null : font.name)
                  }
                  className={`group relative overflow-hidden rounded-xl border p-6 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-[#E2A970] bg-[#1a3a5c] shadow-lg shadow-[#AA712C]/10"
                      : "border-[#1e3554] bg-[#0f2744] hover:border-[#E2A970]/40"
                  }`}
                >
                  {/* Category badge */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#1e3554] px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-[#E2A970]">
                      {font.category}
                    </span>
                    <span className="text-xs text-[#5a7a9e]">{font.name}</span>
                  </div>

                  {/* Split preview — simulating the hero */}
                  <div className="flex gap-1 overflow-hidden rounded-lg">
                    {/* Left — Eggplant */}
                    <div
                      className="flex-1 px-4 py-6"
                      style={{ backgroundColor: EGGPLANT }}
                    >
                      <p
                        className="text-2xl font-bold leading-tight text-white sm:text-3xl"
                        style={{
                          fontFamily:
                            font.file
                              ? `'${font.css}'`
                              : `var(--font-montserrat)`,
                        }}
                      >
                        Secure Your
                        <br />
                        Funding
                      </p>
                    </div>
                    {/* Right — Suite Black */}
                    <div
                      className="flex-1 px-4 py-6"
                      style={{ backgroundColor: SUITE_BLACK }}
                    >
                      <p
                        className="text-2xl font-bold leading-tight text-white sm:text-3xl"
                        style={{
                          fontFamily:
                            font.file
                              ? `'${font.css}'`
                              : `var(--font-montserrat)`,
                        }}
                      >
                        Build Your
                        <br />
                        Empire
                      </p>
                    </div>
                  </div>

                  {/* Note */}
                  <p className="mt-3 text-xs leading-relaxed text-[#7a9ab8]">
                    {font.note}
                  </p>
                </button>
              );
            })}
          </div>

          {/* ── Full-width selected preview ── */}
          {selectedFont && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#E2A970]/30">
              <div className="bg-[#0a1628] px-6 py-3 text-center">
                <span className="font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wider uppercase text-[#E2A970]">
                  Full Preview —{" "}
                  {FONTS.find((f) => f.name === selectedFont)?.name}
                </span>
              </div>
              <div className="flex min-h-[50vh]">
                {/* Left panel */}
                <div
                  className="flex flex-1 flex-col items-center justify-center px-8 py-12"
                  style={{ backgroundColor: EGGPLANT }}
                >
                  <p
                    className="text-xs font-semibold tracking-[0.25em] uppercase"
                    style={{ color: DECO_GOLD }}
                  >
                    Business Owners
                  </p>
                  <h2
                    className="mt-4 text-center text-5xl font-bold leading-[1.1] tracking-wide text-white lg:text-6xl xl:text-7xl"
                    style={{
                      fontFamily: (() => {
                        const f = FONTS.find((f) => f.name === selectedFont);
                        return f?.file
                          ? `'${f.css}'`
                          : `var(--font-montserrat)`;
                      })(),
                    }}
                  >
                    Secure Your
                    <br />
                    Funding
                  </h2>
                  <p className="mx-auto mt-5 max-w-sm text-center text-base leading-relaxed text-white/70">
                    Navigate SBA lending with confidence. Direct access to the
                    nation&apos;s most powerful small business loan program.
                  </p>
                </div>

                {/* Divider */}
                <div className="flex flex-col items-center">
                  <div
                    className="h-full w-px"
                    style={{ backgroundColor: `${DECO_GOLD}66` }}
                  />
                </div>

                {/* Right panel */}
                <div
                  className="flex flex-1 flex-col items-center justify-center px-8 py-12"
                  style={{ backgroundColor: SUITE_BLACK }}
                >
                  <p
                    className="text-xs font-semibold tracking-[0.25em] uppercase"
                    style={{ color: DECO_GOLD }}
                  >
                    Brokers &amp; Originators
                  </p>
                  <h2
                    className="mt-4 text-center text-5xl font-bold leading-[1.1] tracking-wide text-white lg:text-6xl xl:text-7xl"
                    style={{
                      fontFamily: (() => {
                        const f = FONTS.find((f) => f.name === selectedFont);
                        return f?.file
                          ? `'${f.css}'`
                          : `var(--font-montserrat)`;
                      })(),
                    }}
                  >
                    Build Your
                    <br />
                    Empire
                  </h2>
                  <p className="mx-auto mt-5 max-w-sm text-center text-base leading-relaxed text-white/70">
                    Master the art of SBA origination. Transform from
                    order-taker to deal-maker with proven systems.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <a
              href="/preview/heroes"
              className="text-sm text-[#5a7a9e] transition-colors hover:text-[#E2A970]"
            >
              ← Back to Hero Concepts
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
