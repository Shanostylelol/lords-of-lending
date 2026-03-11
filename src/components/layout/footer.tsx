import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { EmailCapture } from "@/components/ui/email-capture";

export function Footer() {
  return (
    <footer className="border-t bg-[#181516]" style={{ borderColor: "rgba(226,169,112,0.12)" }}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/images/logos/simple-wordmark.png"
                alt="Lords of Lending"
                width={180}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-white/40">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/the-brokers-codex"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  The Broker&apos;s Codex
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-white/40">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/60 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm text-white/60 transition-colors hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/terms-of-application" className="text-sm text-white/60 transition-colors hover:text-white">
                  Terms of Application
                </Link>
              </li>
              <li>
                <Link href="/electronic-disclosure" className="text-sm text-white/60 transition-colors hover:text-white">
                  Electronic Disclosure
                </Link>
              </li>
              <li>
                <Link href="/ada-accessibility" className="text-sm text-white/60 transition-colors hover:text-white">
                  ADA Accessibility
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-white"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.rss}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-white"
                aria-label="RSS Feed"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <EmailCapture
            variant="footer"
            heading="SBA Lending This Week"
            subheading="Weekly insights for originators and brokers. Free."
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lords of Lending. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Powered by{" "}
            <a
              href="https://fitechvc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors hover:text-white"
            >
              FiTech Ventures
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
