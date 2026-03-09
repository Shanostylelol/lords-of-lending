import Image from "next/image";
import { PROGRAM_BASICS, ELIGIBLE_USES, REQUIRED_DOCS, TEAM } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check, Phone, Mail, Calendar } from "lucide-react";

interface LoanProgramProps {
  variant: "tools" | "loans" | "brokers";
}

export function LoanProgram({ variant }: LoanProgramProps) {
  const showBankBranding = variant === "loans";
  const ctaText = variant === "brokers" ? "Get Started on Your Deal" : variant === "tools" ? "Get Your Free SBA Toolkit" : "Get Started on Your Deal";

  return (
    <div>
      {/* Bank branding for /loans */}
      {showBankBranding && (
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
          <Image
            src="/images/partners/cbt-logo.png"
            alt="Community Bank"
            width={200}
            height={50}
            className="h-12 w-auto"
          />
          <p className="max-w-md text-center text-sm text-[var(--color-text-muted)]">
            Nationwide SBA PLP Lender; Top 25 Most Active SBA Lender; and the
            Nation&apos;s #1 USDA B&I Lender for 2024
          </p>
          <Image
            src="/images/partners/phx-sba-logo.png"
            alt="Phoenix SBA"
            width={200}
            height={50}
            className="h-12 w-auto"
          />
        </div>
      )}

      {/* Wordmark for non-bank pages */}
      {!showBankBranding && (
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logos/wordmark-gold.png"
            alt="Lords of Lending"
            width={300}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      )}

      {/* Program Header */}
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-5xl">
          Small Business
          <br />
          Loan Program
        </h1>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="#contact">{ctaText}</Button>
          <Button href="#contact" variant="outline">
            Schedule a Call
          </Button>
        </div>
      </div>

      {/* Program Basics */}
      <div className="mt-16">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
          Program Basics
        </h2>
        <ul className="mx-auto mt-6 max-w-xl space-y-3">
          {PROGRAM_BASICS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check
                size={18}
                className="mt-0.5 shrink-0 text-[var(--color-gold)]"
              />
              <span className="text-sm text-[var(--color-text-muted)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Eligible Uses */}
      <div className="mt-16">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
          Eligible Uses
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {ELIGIBLE_USES.map((use) => (
            <div key={use.label} className="flex flex-col items-center text-center">
              <Image
                src={use.icon}
                alt={use.label}
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <p className="mt-3 text-xs font-semibold text-[var(--color-text)]">
                {use.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Docs */}
      <div className="mt-16">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
          What We Need to Get Started
        </h2>
        <ul className="mx-auto mt-6 max-w-xl space-y-3">
          {REQUIRED_DOCS.map((doc) => (
            <li key={doc.text} className="flex items-start gap-3">
              <Check
                size={18}
                className="mt-0.5 shrink-0 text-[var(--color-gold)]"
              />
              <span className="text-sm text-[var(--color-text-muted)]">
                {doc.text}
                {doc.conditional && (
                  <span className="ml-1 text-xs text-[var(--color-text-light)]">
                    (if applicable)
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Button href="#contact">{ctaText}</Button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16" id="contact">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
          Contact Us
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TEAM.map((member) => {
            const firstName = member.name.split(" ")[0];
            const lastName = member.name.split(" ").slice(1).join(" ");
            const email = showBankBranding ? member.bankEmail : member.email;
            const title = showBankBranding ? member.bankTitle : member.title;

            return (
              <div
                key={member.name}
                className="rounded-xl border border-[var(--color-border)] bg-white p-6 text-center"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                  {firstName}
                  <br />
                  {lastName}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-gold)]">
                  {title}
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href={`tel:${member.phone.replace(/-/g, "")}`}
                    className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  >
                    <Phone size={14} /> {member.phone}
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  >
                    <Mail size={14} /> {email}
                  </a>
                  <a
                    href={member.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-md border border-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-white"
                  >
                    <Calendar size={14} /> Schedule a Call
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
