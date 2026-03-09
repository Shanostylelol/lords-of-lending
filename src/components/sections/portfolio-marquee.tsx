"use client";

import Image from "next/image";
import { PORTFOLIO_LOGOS } from "@/lib/constants";

export function PortfolioMarquee() {
  const items = [...PORTFOLIO_LOGOS, ...PORTFOLIO_LOGOS];

  return (
    <section className="overflow-hidden border-y border-[var(--color-border-light)] py-10">
      <h3 className="mb-6 text-center font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-light)]">
        Our Deals in Action
      </h3>
      <div className="group relative">
        <div
          className="marquee-track flex items-center gap-12"
          style={{ animation: "marquee-left 40s linear infinite" }}
        >
          {items.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex shrink-0 items-center">
              <Image
                src={logo.image}
                alt={logo.name}
                width={120}
                height={60}
                className="h-10 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
