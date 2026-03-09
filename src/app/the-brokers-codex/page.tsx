import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Broker's Codex",
  description:
    "Win more deals with SBA strategy that works. Download The Broker's Codex — built for brokers who close.",
};

export default function BrokersCodexPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            The Broker&rsquo;s Codex
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-lg text-[var(--color-gold)]">
            Win More Deals with SBA Strategy That Works
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)]">
            Sign up for the mailing list and get instant access to the Codex
            &mdash; built for brokers who close.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            When you download The Broker&rsquo;s Codex, you&rsquo;re not just
            getting a guide &mdash; you&rsquo;re joining a network of elite SBA
            brokers sharpening their edge. Our emails deliver exclusive deal
            tools, podcast episodes, and no-BS breakdowns of what&rsquo;s
            working in the market right now. If you&rsquo;re serious about
            closing smarter, this is your unfair advantage.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="mb-1 block text-sm font-medium text-[var(--color-text)]"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  required
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="mb-1 block text-sm font-medium text-[var(--color-text)]"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  required
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-[var(--color-text)]"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-[var(--color-text)]"
              >
                Phone{" "}
                <span className="text-xs text-[var(--color-text-light)]">
                  (optional)
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
              />
              <p className="mt-1 text-xs text-[var(--color-text-light)]">
                By providing your phone number, you consent to receive SMS
                messages from Lords of Lending. Message and data rates may
                apply. You can opt-out anytime.
              </p>
            </div>

            <Button variant="primary" className="w-full">
              Download The Broker&rsquo;s Codex
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-[var(--color-text-light)]">
            We never sell or share your information. No spam &mdash; just
            tactical insight and real value.
          </p>
        </div>
      </div>
    </main>
  );
}
