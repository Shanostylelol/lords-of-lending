"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    number: "01",
    label: "Learn the Game.",
    title: "Get SBA Lending Knowledge",
    description:
      "Dive into our blog, podcast, and video library built by originators who\u2019ve closed hundreds of SBA deals. No fluff\u2014real strategies, real numbers, real talk about what works in small business lending.",
  },
  {
    number: "02",
    label: "Sharpen Your Edge.",
    title: "Train with Purpose",
    description:
      "Our learning platform gives brokers and originators the tools to source, structure, and close SBA loans with confidence. From deal packaging to lender matching\u2014level up your origination game.",
  },
  {
    number: "03",
    label: "Close More Deals.",
    title: "Put Knowledge to Work",
    description:
      "Whether you\u2019re a business owner navigating your first SBA loan or an originator building a pipeline\u2014our resources turn knowledge into funded deals and repeat clients.",
  },
];

export function Steps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white px-6 py-16 md:px-8 md:py-24" id="process">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-[var(--color-text)] md:text-4xl">
          How We Help You Win
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative border-t-2 border-[var(--color-gold)] pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-[var(--color-gold)]/20">
                {step.number}
              </span>

              <h3 className="mt-2 font-[family-name:var(--font-montserrat)] text-lg font-bold uppercase tracking-wide text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="https://learn.lordsoflending.com">Explore the Learning Platform</Button>
        </div>
      </div>
    </section>
  );
}
