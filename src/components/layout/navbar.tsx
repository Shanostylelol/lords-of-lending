"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { SearchModal } from "@/components/ui/search-modal";

/* Pages that start with a dark hero — navbar starts transparent */
const DARK_HERO_PAGES = new Set(["/", "/brokers", "/contact", "/loans"]);

/** Routes that render without the site-wide navbar */
const HIDDEN_NAV_PAGES = new Set(["/shane"]);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const hasDarkHero = DARK_HERO_PAGES.has(pathname);
  /* Always dark nav — black bg with white text */
  const isLight = false;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Global Cmd+K / Ctrl+K shortcut to open search */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  if (HIDDEN_NAV_PAGES.has(pathname)) return null;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
        style={{ backgroundColor: "#231F20", borderColor: "rgba(226,169,112,0.15)" }}
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

            {/* Search trigger (desktop) */}
            <button
              onClick={openSearch}
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-white/50 transition-colors hover:text-white/80"
              aria-label="Search (Ctrl+K)"
            >
              <Search className="h-4 w-4" />
              <kbd className="hidden rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-[family-name:var(--font-open-sans)] text-[10px] text-white/35 lg:inline-block">
                ⌘K
              </kbd>
            </button>

            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[var(--color-gold)] px-5 py-2.5 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-md"
            >
              Start Learning
            </a>
          </div>

          {/* Mobile: search + toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={openSearch}
              className="flex h-10 w-10 items-center justify-center rounded-md text-white/60"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-md ${
                isLight ? "text-[var(--color-text)]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 top-[72px] z-40 md:hidden"
              style={{ backgroundColor: "#231F20" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-1 px-6 py-6">
                {/* Mobile search button at top */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                >
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      openSearch();
                    }}
                    className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-white/60 transition-colors hover:bg-white/10"
                  >
                    <Search className="h-5 w-5" />
                    <span className="font-[family-name:var(--font-montserrat)] text-lg font-medium">
                      Search
                    </span>
                  </button>
                </motion.div>

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
                      transition={{ delay: (i + 1) * 0.05 }}
                    >
                      <Tag
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded-md px-4 py-3 font-[family-name:var(--font-montserrat)] text-lg font-medium transition-colors hover:bg-white/10 ${isGlow ? "text-[var(--color-gold)]" : "text-white/80"}`}
                      >
                        {link.label}
                      </Tag>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (NAV_LINKS.length + 1) * 0.05 }}
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

      {/* Search modal — rendered outside header to avoid z-index nesting issues */}
      <SearchModal isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}
