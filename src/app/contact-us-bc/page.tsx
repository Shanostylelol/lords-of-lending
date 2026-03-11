"use client";

import { useState } from "react";
import { TEAM } from "@/lib/constants";
import { Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const brian = TEAM[2]; // Brian Congelliere

export default function ContactBrianPage() {
  const [isBroker, setIsBroker] = useState<string>("");

  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {/* Brian's info */}
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
            Brian Congelliere
          </h1>
          <p className="mt-2 text-sm font-medium text-[var(--color-gold)]">
            {brian.title}
          </p>

          <div className="mt-4 flex flex-col items-center gap-2">
            <a
              href={`tel:${brian.phone.replace(/-/g, "")}`}
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white"
            >
              <Phone size={14} /> {brian.phone}
            </a>
            <a
              href={`mailto:${brian.email}`}
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white"
            >
              <Mail size={14} /> {brian.email}
            </a>
          </div>

          <div className="mt-6">
            <Button href={brian.booking} external>
              <Calendar size={14} className="mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Contact form */}
        <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            &quot;*&quot; indicates required fields
          </p>

          <form className="mt-6 space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-cream)]">
                Are you a Loan Broker? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <input
                      type="radio"
                      name="isBroker"
                      value={opt}
                      checked={isBroker === opt}
                      onChange={(e) => setIsBroker(e.target.value)}
                      className="accent-[var(--color-gold)]"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="bc-first" className="mb-1 block text-sm font-medium text-[var(--color-cream)]">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="bc-first"
                  required
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                />
              </div>
              <div>
                <label htmlFor="bc-last" className="mb-1 block text-sm font-medium text-[var(--color-cream)]">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="bc-last"
                  required
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bc-email" className="mb-1 block text-sm font-medium text-[var(--color-cream)]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="bc-email"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
              />
            </div>

            <div>
              <label htmlFor="bc-phone" className="mb-1 block text-sm font-medium text-[var(--color-cream)]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="bc-phone"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
              />
            </div>

            <div className="pt-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
