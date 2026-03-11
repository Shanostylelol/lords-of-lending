import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Disclosure",
  description:
    "Lords of Lending electronic disclosure agreement — consent to receive communications electronically.",
};

export default function ElectronicDisclosurePage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-4xl">
          Electronic Disclosure
        </h1>
        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <p>
            In this agreement, &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            &ldquo;our,&rdquo; &ldquo;Lords of Lending&rdquo;, and &ldquo;CX
            Lending&rdquo; refer to CX Lending LLC dba Lords of Lending, its
            subsidiaries, and affiliates. &ldquo;You&rdquo; and
            &ldquo;your&rdquo; refer to the business entity registering for a
            Lords of Lending account or using a Lords of Lending product.
            &ldquo;Communications&rdquo; encompasses disclosures, notices,
            agreements, fee schedules, privacy policies, statements, records,
            documents, and other information we provide to you or that you sign
            and submit or agree to at our request.
          </p>
          <p>
            Lords of Lending is committed to delivering the best online banking
            experience, which includes providing information to you
            electronically. By accepting this agreement, you agree to receive
            Communications in electronic form and consent to receive such
            Communications. If you do not consent to receive Communications
            electronically, you cannot work with us. Should you withdraw your
            consent to electronic Communications after initially providing it,
            we reserve the right to terminate your Account.
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            1. Delivery Methods
          </h2>
          <p>
            We will deliver Communications to you electronically through the
            Lords of Lending website (www.lordsoflending.com), the Lords of
            Lending mobile app, text or SMS messages, or electronic mail. If we
            do not deliver Communications through these methods, we will inform
            you where you can access such Communications.
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            2. Hardware and Software Requirements
          </h2>
          <p>
            To receive and retain electronic Communications from Lords of
            Lending, you will need:
          </p>
          <ul className="ml-4 list-disc space-y-2 pl-4">
            <li>
              A computer or mobile device with an operating system that supports
              the requirements below
            </li>
            <li>An internet connection</li>
            <li>
              A current version of a web browser we support, including Edge
              version 42 or higher, Firefox version 62 or higher, Safari version
              12 or higher, or Chrome version 69 or higher
            </li>
            <li>A method of storing data (e.g., a hard drive)</li>
            <li>A valid, active email address</li>
            <li>
              A current version of a program that displays PDF files
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            3. Updating Contact Information
          </h2>
          <p>
            You are responsible for keeping your contact information accurate
            and current so we can send you electronic Communications. You can
            update your email address and other contact information by emailing
            us at{" "}
            <a
              href="mailto:team@lordsoflending.com"
              className="text-[var(--color-gold)] underline"
            >
              team@lordsoflending.com
            </a>
            .
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            4. Requesting Paper Copies
          </h2>
          <p>
            You can obtain a paper copy of an electronic Communication by
            printing it or by requesting a mailed paper copy. Requests for paper
            copies can be made by emailing us at{" "}
            <a
              href="mailto:team@lordsoflending.com"
              className="text-[var(--color-gold)] underline"
            >
              team@lordsoflending.com
            </a>
            .
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            5. Communications in Writing
          </h2>
          <p>
            All Communications delivered to you in either electronic or paper
            format will be considered delivered &ldquo;in writing.&rdquo;
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            6. Withdrawing Consent
          </h2>
          <p>
            You have the right to withdraw your consent to this agreement at any
            time. Withdrawing consent will terminate your Lords of Lending
            account, including access to our Website and Mobile App. You may
            withdraw consent by emailing us at{" "}
            <a
              href="mailto:team@lordsoflending.com"
              className="text-[var(--color-gold)] underline"
            >
              team@lordsoflending.com
            </a>
            .
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
            7. Contact Information
          </h2>
          <p>
            If you have any questions about this policy or wish to exercise your
            rights, please contact us at:
          </p>
          <address className="not-italic">
            3001 Wrightsville Ave., Suite A, Wilmington, NC 28403
            <br />
            Telephone:{" "}
            <a
              href="tel:+18052445032"
              className="text-[var(--color-gold)] underline"
            >
              (805) 244-5032
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:team@lordsoflending.com"
              className="text-[var(--color-gold)] underline"
            >
              team@lordsoflending.com
            </a>
          </address>
        </div>
      </div>
    </main>
  );
}
