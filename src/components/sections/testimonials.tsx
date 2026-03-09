"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          Real Stories. Real Success.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--color-text-muted)]">
          From first-time buyers to seasoned business owners, our clients have
          turned their dreams into reality with our help.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <blockquote className="text-sm leading-relaxed text-[var(--color-text-muted)] italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <a href={t.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={t.image}
                    alt={t.company}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-contain bg-[var(--color-surface)]"
                  />
                </a>
                <div>
                  <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--color-text)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
