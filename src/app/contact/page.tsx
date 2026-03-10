import type { Metadata } from "next";
import Image from "next/image";
import { TEAM, SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Lords of Lending team. Schedule a call, email us, or start your loan application.",
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      {/* Dark hero */}
      <section className="bg-[var(--color-dark)] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Team cards on dark background */}
      <section className="bg-[var(--color-dark)] px-6 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-5xl space-y-6">
          {TEAM.map((member) => {
            const email = member.email;

            return (
              <div
                key={member.name}
                className="overflow-hidden rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-surface)]"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Headshot */}
                  <div className="relative aspect-[2/3] w-full sm:w-64 md:w-72 shrink-0">
                    <Image
                      src={member.headshot}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
                    <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                      {member.title}
                    </p>

                    <div className="mt-6 space-y-3">
                      <a
                        href={`tel:${member.phone.replace(/-/g, "")}`}
                        className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                      >
                        <Phone size={16} className="text-[var(--color-gold)]" />
                        {member.phone}
                      </a>
                      <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-3 text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-white"
                      >
                        <Mail size={16} className="text-[var(--color-gold)]" />
                        {email}
                      </a>
                    </div>

                    <div className="mt-8">
                      <a
                        href={member.booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg"
                      >
                        <Calendar size={16} /> Schedule a Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-5xl text-center">
          <p className="text-sm text-white/40">
            Or email us directly at{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-medium text-[var(--color-gold)] hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
