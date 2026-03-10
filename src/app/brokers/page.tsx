import type { Metadata } from "next";
import Image from "next/image";
import { PROGRAM_BASICS, ELIGIBLE_USES, REQUIRED_DOCS, TEAM, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check, Phone, Mail, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Brokers",
  description:
    "Submit your SBA loan deals through Lords of Lending. Referral fee schedule, program basics, and direct lender access.",
  alternates: { canonical: `${SITE_CONFIG.url}/brokers` },
};

export default function BrokersPage() {
  return (
    <main id="main-content">
      {/* ── Dark Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-dark)] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="relative mx-auto max-w-5xl px-6 md:px-8">
          <Image
            src="/images/logos/wordmark-gold.png"
            alt="Lords of Lending"
            width={400}
            height={50}
            className="h-10 w-auto md:h-12"
          />
          <h1 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight md:text-5xl">
            <span className="text-[var(--color-gold)]">Small Business</span>
            <br />
            <span className="text-white">Loan Program</span>
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" className="px-8 py-4 text-base">
              Get Started on Your Deal
            </Button>
            <Button
              href="#contact"
              variant="outline"
              className="border-white/30 px-8 py-4 text-base text-white hover:bg-[var(--color-surface)]/10 hover:text-white"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* ── Program Basics — Gold gradient with fleur-de-lis texture ── */}
      <section
        className="relative px-6 py-16 md:px-8 md:py-20"
        style={{
          background: "linear-gradient(135deg, #181516 0%, #8B5E34 50%, #C4883A 100%)",
        }}
      >
        {/* Fleur-de-lis pattern overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ctext x='30' y='35' text-anchor='middle' font-size='20' fill='white' font-family='serif'%3E%E2%9A%9C%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-[var(--color-gold-light)] md:text-3xl">
            Program Basics
          </h2>
          <ul className="mt-8 space-y-4">
            {PROGRAM_BASICS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  size={20}
                  className="mt-0.5 shrink-0 text-[var(--color-gold-light)]"
                />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Eligible Uses — Light with subtle pattern ── */}
      <section className="relative bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-20">
        {/* Faint fleur-de-lis */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ctext x='40' y='48' text-anchor='middle' font-size='24' fill='%23aa712c' font-family='serif'%3E%E2%9A%9C%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Eligible Uses
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {ELIGIBLE_USES.map((use) => (
              <div key={use.label} className="flex flex-col items-center text-center">
                <Image
                  src={use.icon}
                  alt={use.label}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white">
                  {use.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Required Docs — Dark section ── */}
      <section className="bg-[var(--color-dark)] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            What We Need to Get Started
          </h2>
          <ul className="mt-8 space-y-4">
            {REQUIRED_DOCS.map((doc) => (
              <li key={doc.text} className="flex items-start gap-3">
                <Check
                  size={20}
                  className="mt-0.5 shrink-0 text-[var(--color-gold)]"
                />
                <span className="text-white/80">
                  {doc.text}
                  {doc.conditional && (
                    <span className="ml-1 text-sm text-white/40">
                      (if applicable)
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="#contact">Get Started on Your Deal</Button>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-20" id="contact">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Contact Us
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TEAM.map((member) => {
              const firstName = member.name.split(" ")[0];
              const lastName = member.name.split(" ").slice(1).join(" ");

              return (
                <div
                  key={member.name}
                  className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={member.headshot}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                      {firstName}
                      <br />
                      {lastName}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--color-gold)]">
                      {member.title}
                    </p>
                    <div className="mt-4 space-y-2">
                      <a
                        href={`tel:${member.phone.replace(/-/g, "")}`}
                        className="flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white"
                      >
                        <Phone size={14} /> {member.phone}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white"
                      >
                        <Mail size={14} /> {member.email}
                      </a>
                      <a
                        href={member.booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-md bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)]"
                      >
                        <Calendar size={14} /> Schedule a Call
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
