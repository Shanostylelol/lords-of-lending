import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Application",
  description:
    "Lords of Lending terms of application — terms governing your loan application submission.",
};

export default function TermsOfApplicationPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          Terms of Application
        </h1>
        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <p className="font-semibold">
            These Terms were last revised on July 30, 2025.
          </p>
          <p>
            By agreeing to these terms (such as by clicking the button to accept
            these Terms of Application), you, in your individual capacity,
            confirm and agree to the following.
          </p>
          <p className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-xs uppercase tracking-wide">
            PLEASE NOTE THAT THE FOLLOWING CONTAINS AN ARBITRATION PROVISION, A
            CLASS ACTION WAIVER, AND A JURY WAIVER. YOU MAY OPT OUT AS
            DESCRIBED BELOW.
          </p>

          <ul className="ml-4 list-disc space-y-3 pl-4">
            <li>
              You are authorized on behalf of yourself and the business listed
              in the application on this website (together, the
              &ldquo;Applicant&rdquo;) to submit this application, provide any
              accompanying documents, and give the consents and authorizations
              outlined below.
            </li>
            <li>
              You are submitting this application to Lords of Lending and
              third-party lenders, finance companies, and/or other entities that
              provide commercial loans or purchase receivables (collectively
              &ldquo;Recipients&rdquo;).
            </li>
            <li>
              If this application is approved, you are authorized to meet the
              requirements of any loan or financing, including signing business
              financing documentation on behalf of the Applicant. Note that some
              business financing products may require a personal guaranty.
            </li>
            <li>
              All information provided to Lords of Lending and/or Recipients is
              accurate and complete, and you will promptly notify Lords of
              Lending of any changes to this information.
            </li>
            <li>
              Lords of Lending and Recipients may rely on the accuracy and
              completeness of the information you provide.
            </li>
            <li>
              Lords of Lending may share all information and documents you
              provide, or that Lords of Lending or its Recipients generate,
              excluding consumer credit reports, with Recipients to fulfill your
              requests.
            </li>
            <li>
              Lords of Lending and Recipients may share information they have
              about you and the Applicant for administrative, marketing,
              servicing, or other purposes as permitted by law.
            </li>
            <li>
              You and the Applicant waive and release any claims against any
              information provider or third-party Recipient regarding the
              release of information.
            </li>
            <li>
              You agree to and accept all terms of the Lords of Lending Credit
              Gathering Authorization, including permission for Lords of Lending
              and Recipients to pull your credit report and other information
              about the Applicant.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)]">
            Dispute Resolution by Binding Arbitration
          </h2>
          <p>
            To resolve disputes between you and Lords of Lending, both parties
            agree to opt for binding arbitration instead of general court
            litigation. Arbitration is less formal than a lawsuit, uses a
            neutral arbitrator instead of a judge or jury, and is subject to
            very limited court review. Any arbitration under these Terms will be
            conducted individually; class arbitrations and class actions are not
            allowed.
          </p>
          <p>
            Any arbitration will be governed by the Commercial Dispute
            Resolution Procedures of the American Arbitration Association
            (&ldquo;AAA&rdquo;). A party intending to seek arbitration must
            first send a written Notice of Dispute by certified mail to: Lords
            of Lending, 3001 Wrightsville Ave., Suite A, Wilmington, NC 28403.
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)]">
            Opt-Out
          </h2>
          <p>
            If you are a new Lords of Lending user, you can reject the
            arbitration agreement by mailing a written Opt-Out Notice to Lords
            of Lending, 3001 Wrightsville Ave., Suite A, Wilmington, NC 28403,
            postmarked no later than thirty (30) days after the date you first
            accept these Terms.
          </p>

          <p className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-xs uppercase tracking-wide">
            YOU UNDERSTAND THIS APPLICATION IS FOR A COMMERCIAL LOAN OR PURCHASE
            OF FUTURE RECEIVABLES, AND ANY FUNDS OFFERED TO THE APPLICANT MAY
            NOT BE USED FOR PERSONAL, FAMILY, OR HOUSEHOLD PURPOSES.
          </p>

          <p>
            Federal law requires all financial institutions to obtain, verify,
            and record information identifying each person and entity that opens
            an account or establishes a relationship, including name, address,
            date of birth, social security or tax identification number, and
            other information to verify your or the entity&rsquo;s identity.
          </p>

          <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[var(--color-text)]">
            Contact Information
          </h2>
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
