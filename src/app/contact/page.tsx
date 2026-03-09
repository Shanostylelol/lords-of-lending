import type { Metadata } from "next";
import { TEAM, SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Lords of Lending team. Schedule a call, email us, or start your loan application.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
            Ready to start your loan journey? Connect with our team directly.
            We&apos;re here to guide you from prequalification to closing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TEAM.map((member) => {
            const firstName = member.name.split(" ")[0];
            const lastName = member.name.split(" ").slice(1).join(" ");

            return (
              <div
                key={member.name}
                className="rounded-xl border border-[var(--color-border)] bg-white p-6 text-center shadow-sm"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
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
                    className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  >
                    <Phone size={14} /> {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
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
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-text-light)]">
            Or email us directly at{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-medium text-[var(--color-gold)] hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
