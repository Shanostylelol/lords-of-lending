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
    <section className="px-6 py-16 md:px-8 md:py-24" id="process">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          Your Loan Journey, Step by Step
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-12">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Step number */}
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)] font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
                  {step.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                  {step.label}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/loans/loan-application">Get My Loan Started</Button>
        </div>
      </div>
    </section>
  );
}
