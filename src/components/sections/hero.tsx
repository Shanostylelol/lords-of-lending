"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BADGE_PILLS = [
  "#1 SBA Knowledge Hub",
  "Broker Training Platform",
  "18+ Podcast Episodes",
  "Expert-Led Education",
  "Tools for Originators",
  "Free Resources",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Subtle warm gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(170,113,44,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-8">
        {/* Badge pills */}
        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          {BADGE_PILLS.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-[family-name:var(--font-montserrat)] text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Master the Art of{" "}
          <br className="hidden sm:block" />
          <span className="text-[var(--color-gold-light)]">
            SBA Lending
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The #1 resource for small business lending knowledge, tools, and
          originator training. Whether you&apos;re a business owner seeking funding
          or a broker sourcing SBA deals — we give you the edge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button href="https://learn.lordsoflending.com" className="px-8 py-4 text-base">
            Start Learning Free
          </Button>
          <Button href="/podcast" variant="outline" className="px-8 py-4 text-base border-white/30 text-white hover:bg-white/10 hover:text-white">
            Listen to the Podcast
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-sm font-medium tracking-wide text-white/40">
            Trusted by 425+ funded businesses
          </p>
          <span className="text-sm text-white/40">|</span>
          <p className="text-sm font-medium tracking-wide text-white/40">
            $450M+ in deals closed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
