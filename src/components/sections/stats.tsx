"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[var(--color-dark)] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <h2 className="mb-12 text-center font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-white/40">
          Our Deals in Action
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <p className="font-[family-name:var(--font-montserrat)] text-5xl font-bold text-[var(--color-gold-light)] md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-1 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-widest text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-white/50">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="https://learn.lordsoflending.com/pricing" className="bg-[var(--color-gold-light)] hover:bg-[var(--color-gold)]">
            Learn from the Best in SBA
          </Button>
        </div>
      </div>
    </section>
  );
}
