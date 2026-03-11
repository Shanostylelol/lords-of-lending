import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Accessibility",
  description:
    "Lords of Lending ADA accessibility statement — our commitment to digital accessibility for people with disabilities.",
};

export default function AdaAccessibilityPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
          ADA Accessibility Statement
        </h1>
        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <p className="font-semibold">Effective Date: July 1, 2025</p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            1. Commitment to Accessibility
          </h2>
          <p>
            Lords of Lending is committed to ensuring digital accessibility for
            people with disabilities. We are continually improving the user
            experience for everyone and applying relevant accessibility
            standards.
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            2. Measures to Support Accessibility
          </h2>
          <p>
            We take the following measures to ensure accessibility:
          </p>
          <ul className="ml-4 list-disc space-y-2 pl-4">
            <li>
              Incorporate accessibility into our development and design
              processes
            </li>
            <li>
              Provide continual accessibility training for our team
            </li>
            <li>
              Regularly test and evaluate accessibility of the site
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            3. Feedback
          </h2>
          <p>
            We welcome your feedback on the accessibility of our site. Please
            let us know if you encounter accessibility barriers:
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:admin@lordsoflending.com"
              className="text-[var(--color-gold)] underline"
            >
              admin@lordsoflending.com
            </a>
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            4. Limitations and Alternatives
          </h2>
          <p>
            Despite our efforts, some content may not yet be fully accessible.
            If you need assistance, please contact us for alternative support.
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            5. Assessment Approach
          </h2>
          <p>
            We assess the accessibility of this site through self-evaluation and
            third-party audits as needed.
          </p>
        </div>
      </div>
    </main>
  );
}
