"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

/* Pages that start with a dark hero — navbar starts transparent */
const DARK_HERO_PAGES = new Set(["/", "/brokers", "/contact", "/loans"]);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const hasDarkHero = DARK_HERO_PAGES.has(pathname);
  const isLight = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border-light)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/logomark-black.svg"
            alt="Lords of Lending"
            width={32}
            height={32}
            className={`h-8 w-auto transition-all duration-300 ${
              isLight ? "" : "brightness-0 invert"
            }`}
          />
          <Image
            src="/images/logos/wordmark-black.svg"
            alt="Lords of Lending"
            width={180}
            height={30}
            className={`hidden h-7 w-auto transition-all duration-300 sm:block ${
              isLight ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const isGlow = "glow" in link && link.glow;
            const isExternal = "external" in link && link.external;
            const Tag = isExternal ? "a" : Link;
            const extraProps = isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Tag
                key={link.href}
                href={link.href}
                {...extraProps}
                className={`font-[family-name:var(--font-montserrat)] text-sm font-medium transition-colors hover:text-[var(--color-gold)] ${
                  isLight ? "text-[var(--color-text)]" : "text-white/80"
                } ${isGlow ? "relative after:absolute after:-inset-1.5 after:rounded-full after:bg-[var(--color-gold)]/15 after:blur-sm after:transition-opacity hover:after:bg-[var(--color-gold)]/25" : ""}`}
              >
                {link.label}
              </Tag>
            );
          })}
          <a
            href="https://learn.lordsoflending.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[var(--color-gold)] px-5 py-2.5 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-md"
          >
            Start Learning
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
            isLight ? "text-[var(--color-text)]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-[72px] z-40 bg-white md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => {
                const isExternal = "external" in link && link.external;
                const isGlow = "glow" in link && link.glow;
                const Tag = isExternal ? "a" : Link;
                const extraProps = isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Tag
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-md px-4 py-3 font-[family-name:var(--font-montserrat)] text-lg font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] ${isGlow ? "text-[var(--color-gold)]" : ""}`}
                    >
                      {link.label}
                    </Tag>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-4"
              >
                <a
                  href="https://learn.lordsoflending.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md bg-[var(--color-gold)] px-4 py-3 text-center font-[family-name:var(--font-montserrat)] text-lg font-semibold text-white"
                >
                  Start Learning
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
