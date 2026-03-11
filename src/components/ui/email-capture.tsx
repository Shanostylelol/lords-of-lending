"use client";

import { useState, useRef } from "react";

interface EmailCaptureProps {
  variant: "inline" | "footer" | "banner";
  heading?: string;
  subheading?: string;
}

export function EmailCapture({
  variant,
  heading = "SBA Lending This Week",
  subheading = "Weekly insights for originators and brokers. Free.",
}: EmailCaptureProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const honeypot = formData.get("_hp") as string;

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _hp: honeypot }),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (variant === "banner") {
    return (
      <section className="my-12 rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-surface)] p-6 md:p-8">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white md:text-2xl">
            {heading}
          </h3>
          <p className="mt-2 text-sm text-white/60">{subheading}</p>

          {status === "success" ? (
            <p className="mt-4 text-sm font-medium text-green-400">
              You&apos;re in! Check your inbox.
            </p>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="_hp"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] sm:w-64"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-lg bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)] disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-400">Something went wrong. Try again.</p>
          )}

          {status !== "success" && (
            <p className="mt-3 text-xs text-white/30">Join 500+ SBA professionals</p>
          )}
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <aside className="my-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
          {heading}
        </p>
        <p className="mt-1 text-xs text-white/50">{subheading}</p>

        {status === "success" ? (
          <p className="mt-3 text-xs font-medium text-green-400">
            You&apos;re in! Check your inbox.
          </p>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-3 flex gap-2"
          >
            <input
              type="text"
              name="_hp"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-md border border-[var(--color-border)] bg-[var(--color-dark)] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-md bg-[var(--color-gold)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)] disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-2 text-xs text-red-400">Something went wrong. Try again.</p>
        )}
      </aside>
    );
  }

  /* variant === "footer" */
  return (
    <div className="mb-6">
      <p className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-white/40">
        {heading}
      </p>
      <p className="mt-1 text-xs text-white/50">{subheading}</p>

      {status === "success" ? (
        <p className="mt-3 text-xs font-medium text-green-400">
          You&apos;re in! Check your inbox.
        </p>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-3 flex gap-2"
        >
          <input
            type="text"
            name="_hp"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="min-w-0 flex-1 rounded-md border border-[var(--color-border)] bg-[var(--color-dark)] px-3 py-1.5 text-xs text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 rounded-md bg-[var(--color-gold)] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)] disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Join"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
