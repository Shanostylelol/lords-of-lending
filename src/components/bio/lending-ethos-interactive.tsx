"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Brain,
  Cpu,
  ClipboardList,
  ChevronRight,
  CheckCircle2,
  Layers,
  Workflow,
} from "lucide-react";

const C = {
  maroon: "#4D0A16",
  maroonDark: "#3A0710",
  gold: "#AA712C",
  goldLight: "#E2A970",
};

const DOMAINS = [
  {
    id: "credit-policy",
    num: "01",
    title: "Credit Policy",
    subtitle: "The Regulatory Backbone",
    icon: FileText,
    overview:
      "Defines who you lend to, how much, under what terms, and what safeguards protect the institution. This is the document regulators reach for first.",
    components: [
      "Loan-to-value and advance rate matrices",
      "Industry concentration limits and watchlists",
      "Collateral requirements by loan type",
      "Exception tracking and approval authority ladders",
      "Regulatory compliance checkpoints (SBA SOP alignment)",
      "Annual review and stress-test triggers",
    ],
    question:
      "Can an examiner read your credit policy and understand exactly how every lending decision gets made?",
  },
  {
    id: "credit-philosophy",
    num: "02",
    title: "Credit Philosophy",
    subtitle: "The Institutional Identity",
    icon: Brain,
    overview:
      "Establishes risk tolerance, deal appetite, and the cultural principles that guide every lending decision. Philosophy is the 'why' behind the policy.",
    components: [
      "Risk appetite statement and tolerance thresholds",
      "Deal profile definitions (ideal borrower, ideal deal)",
      "Growth-vs-quality calibration framework",
      "Relationship banking principles and retention strategy",
      "Market positioning and competitive differentiation",
      "Cultural values that inform credit decisions",
    ],
    question:
      "If two qualified deals land on your desk and you can only fund one — what does your philosophy say?",
  },
  {
    id: "operational-systems",
    num: "03",
    title: "Operational Systems",
    subtitle: "The Infrastructure",
    icon: Cpu,
    overview:
      "CRM, document management, pipeline tracking, and the technology stack that enables scale without chaos. Systems are how policy and philosophy become repeatable action.",
    components: [
      "CRM pipeline architecture and stage definitions",
      "Document management and version control",
      "Automated compliance and eligibility checks",
      "Reporting dashboards (pipeline, conversion, aging)",
      "Communication workflows (borrower, lender, internal)",
      "Technology stack integration and data flow maps",
    ],
    question:
      "Can a new hire sit down at their desk and know exactly where every deal stands, what's needed, and what happens next?",
  },
  {
    id: "operating-procedures",
    num: "04",
    title: "Operating Procedures",
    subtitle: "The Playbook",
    icon: ClipboardList,
    overview:
      "Step-by-step processes for origination, underwriting, closing, and servicing that deliver consistent, repeatable results. Procedures turn institutional knowledge into institutional capability.",
    components: [
      "Origination intake and pre-qualification workflows",
      "Underwriting checklists and decision trees",
      "Closing coordination and funding procedures",
      "Post-close servicing and annual review protocols",
      "Exception handling and escalation paths",
      "Training modules for each procedural domain",
    ],
    question:
      "If your top producer leaves tomorrow, does the department keep running at full capacity?",
  },
];

const DECISION_SPINE = [
  "Does this deal align with our credit policy?",
  "Does it reflect our credit philosophy?",
  "Can our systems support the execution?",
  "Do our procedures cover every step from intake to servicing?",
  "Are we lending responsibly — or just lending?",
  "Will this decision withstand regulatory scrutiny?",
  "Does this strengthen the institution long-term?",
];

const IMPLEMENTATION = [
  { phase: "Audit", desc: "Evaluate the current state of all four domains against institutional goals" },
  { phase: "Align", desc: "Identify gaps between policy, philosophy, systems, and procedures" },
  { phase: "Architect", desc: "Design the target-state framework with stakeholder input" },
  { phase: "Build", desc: "Implement systems, draft procedures, codify policies" },
  { phase: "Train", desc: "Deploy training modules and certify team members" },
  { phase: "Measure", desc: "Establish KPIs, feedback loops, and continuous improvement cycles" },
];

export function LendingEthosInteractive() {
  const [activeDomain, setActiveDomain] = useState(0);
  const [showSpine, setShowSpine] = useState(false);
  const domain = DOMAINS[activeDomain];

  return (
    <section
      className="px-6 py-16 md:px-8 md:py-24"
      style={{
        background: `linear-gradient(135deg, ${C.maroon} 0%, ${C.maroonDark} 100%)`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.1)", color: C.goldLight }}
          >
            Proprietary Framework
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
            The Lending Ethos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            A four-domain framework for building, evaluating, and scaling SBA lending departments.
            Every institution Shane has built follows this architecture — from first hire to first funded deal.
          </p>
        </div>

        {/* Domain selector tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {DOMAINS.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActiveDomain(i)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                i === activeDomain
                  ? "bg-white text-[#4D0A16] shadow-lg"
                  : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <d.icon size={16} />
              <span className="hidden sm:inline">{d.title}</span>
              <span className="sm:hidden">{d.num}</span>
            </button>
          ))}
        </div>

        {/* Active domain detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mt-8"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${C.gold}25` }}
                >
                  <domain.icon size={28} style={{ color: C.goldLight }} />
                </div>
                <div>
                  <span
                    className="font-[family-name:var(--font-montserrat)] text-sm font-bold"
                    style={{ color: C.gold }}
                  >
                    Domain {domain.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white">
                    {domain.title}
                  </h3>
                  <p className="text-sm font-medium text-white/50">{domain.subtitle}</p>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-white/75">
                {domain.overview}
              </p>

              {/* Components list */}
              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase">
                  Key Components
                </h4>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {domain.components.map((comp, i) => (
                    <motion.div
                      key={comp}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: C.gold }}
                      />
                      <span className="text-sm text-white/65">{comp}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decision question */}
              <div
                className="mt-6 rounded-lg border border-white/10 p-4"
                style={{ background: "rgba(170,113,44,0.08)" }}
              >
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color: C.gold }}>
                  The Question That Matters
                </p>
                <p className="mt-2 text-sm font-medium text-white/85 italic">
                  &ldquo;{domain.question}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decision Spine toggle */}
        <div className="mt-10">
          <button
            onClick={() => setShowSpine(!showSpine)}
            className="mx-auto flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            <Workflow size={16} style={{ color: C.gold }} />
            The Decision Spine — 7 Questions Every Deal Must Answer
            <ChevronRight
              size={16}
              className={`transition-transform ${showSpine ? "rotate-90" : ""}`}
            />
          </button>

          <AnimatePresence>
            {showSpine && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mx-auto mt-6 max-w-2xl space-y-3">
                  {DECISION_SPINE.map((q, i) => (
                    <motion.div
                      key={q}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-montserrat)] text-xs font-bold"
                        style={{ background: `${C.gold}30`, color: C.goldLight }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm text-white/75">{q}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 6-Phase Implementation */}
        <div className="mt-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/50">
              <Layers size={16} style={{ color: C.gold }} />
              6-Phase Implementation Model
            </div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {IMPLEMENTATION.map((p, i) => (
              <div
                key={p.phase}
                className="group relative rounded-lg border border-white/10 bg-white/5 p-4 text-center transition-all hover:border-white/20 hover:bg-white/8"
              >
                <span
                  className="font-[family-name:var(--font-montserrat)] text-2xl font-extrabold"
                  style={{ color: `${C.gold}60` }}
                >
                  {i + 1}
                </span>
                <h4 className="mt-1 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
                  {p.phase}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-white/50">{p.desc}</p>
                {i < IMPLEMENTATION.length - 1 && (
                  <ChevronRight
                    size={14}
                    className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-white/20 lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
