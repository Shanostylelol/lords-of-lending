"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]";
const labelClass = "mb-1 block text-sm font-medium text-[var(--color-text)]";
const required = <span className="text-red-500">*</span>;

const HEADSHOT_OPTIONS = [
  { value: "upload", label: "Upload a headshot" },
  { value: "pull", label: "Pull from my website" },
  { value: "none", label: "No headshot" },
] as const;

export default function LeaveATestimonialPage() {
  const [headshotOption, setHeadshotOption] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up form submission (API route / email / Supabase)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-8">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Thank You!
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            We appreciate you taking the time to share your experience. Your
            testimonial helps other business owners find the funding they need.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Leave a Testimonial
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
            Your story matters. Share your experience working with the Lords of
            Lending team and help other business owners find the funding they
            need.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8"
        >
          {/* Name */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name {required}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last Name {required}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Company Website */}
          <div>
            <label htmlFor="companyWebsite" className={labelClass}>
              Company Website
            </label>
            <input
              type="url"
              id="companyWebsite"
              name="companyWebsite"
              placeholder="https://"
              className={inputClass}
            />
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className={labelClass}>
              Title {required}
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="e.g. CEO, Owner, Founder"
              className={inputClass}
            />
          </div>

          {/* Headshot option */}
          <div>
            <label className={labelClass}>Your Headshot</label>
            <div className="mt-2 space-y-2">
              {HEADSHOT_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
                >
                  <input
                    type="radio"
                    name="headshotOption"
                    value={option.value}
                    checked={headshotOption === option.value}
                    onChange={(e) => setHeadshotOption(e.target.value)}
                    className="accent-[var(--color-gold)]"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Headshot upload (shown when "upload" is selected) */}
          {headshotOption === "upload" && (
            <div>
              <label htmlFor="headshotImage" className={labelClass}>
                Headshot Image
              </label>
              <input
                type="file"
                id="headshotImage"
                name="headshotImage"
                accept="image/*"
                className="w-full text-sm text-[var(--color-text-muted)] file:mr-4 file:rounded-md file:border-0 file:bg-[var(--color-gold)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--color-gold-dark)] file:cursor-pointer"
              />
            </div>
          )}

          {/* Testimonial */}
          <div>
            <label htmlFor="testimonial" className={labelClass}>
              Testimonial {required}
            </label>
            <textarea
              id="testimonial"
              name="testimonial"
              required
              rows={6}
              placeholder="Tell us about your experience..."
              className={`${inputClass} resize-y`}
            />
          </div>

          {/* Consent checkbox */}
          <label className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 accent-[var(--color-gold)]"
            />
            <span>
              I consent to Lords of Lending using my testimonial, image, and
              business details&mdash;without altering my message&mdash;for
              promotion on their website, social media, and advertising.{" "}
              {required}
            </span>
          </label>

          <div className="pt-2">
            <Button type="submit" variant="primary">
              Submit Testimonial
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
