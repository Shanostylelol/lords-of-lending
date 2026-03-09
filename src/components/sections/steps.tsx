"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    number: "01",
    label: "Your Goals. Your Deal.",
    title: "Tell us your vision",
    description:
      "We start with you. Whether you\u2019re buying a business, acquiring property, or securing working capital, we map the loan strategy to fit your goals. This isn\u2019t a cookie-cutter process\u2014we tailor every move to your deal.",
  },
  {
    number: "02",
    label: "Only What Matters.",
    title: "Send the Right Documents",
    description:
      "No endless email chains. No missing pieces. We give you a clear, targeted checklist so you know exactly what to send. The right docs, in the right order, so your deal moves forward without delays.",
  },
  {
    number: "03",
    label: "We Drive. You Win.",
    title: "Let Us Lead the Process",
    description:
      "From packaging your deal to navigating underwriting, we handle the details with precision. You stay focused on running your business while we secure the funding and terms that set you up for long-term success.",
  },
];

export function Steps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white px-6 py-16 md:px-8 md:py-24" id="process">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-[var(--color-text)] md:text-4xl">
          Your Loan Journey, Step by Step
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
          <Button href="/loans/loan-application">Schedule a Call</Button>
        </div>
      </div>
    </section>
  );
}
