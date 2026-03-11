"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, FileText, Wrench, Mic, Users } from "lucide-react";
import { searchItems, type SearchItem, type SearchItemType } from "@/lib/search-index";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TYPE_CONFIG: Record<
  SearchItemType,
  { label: string; icon: typeof FileText; max: number }
> = {
  article: { label: "Articles", icon: FileText, max: 3 },
  tool: { label: "Tools", icon: Wrench, max: 3 },
  podcast: { label: "Podcasts", icon: Mic, max: 3 },
  team: { label: "Team", icon: Users, max: 3 },
};

const TYPE_ORDER: SearchItemType[] = ["article", "tool", "podcast", "team"];

/** Highlight matching substring in gold */
function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;

  const q = query.trim().toLowerCase();
  const lowerText = text.toLowerCase();
  const idx = lowerText.indexOf(q);
  if (idx === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, idx)}
      <span className="text-[var(--color-gold)]">{text.slice(idx, idx + query.trim().length)}</span>
      {text.slice(idx + query.trim().length)}
    </>
  );
}

function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen).trimEnd() + "\u2026";
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  // Get all results
  const allResults = useMemo(() => searchItems(query), [query]);

  // Group results by type, limited per category
  const grouped = useMemo(() => {
    const groups: Partial<Record<SearchItemType, SearchItem[]>> = {};
    const counts: Partial<Record<SearchItemType, number>> = {};

    for (const item of allResults) {
      const cfg = TYPE_CONFIG[item.type];
      if (!groups[item.type]) {
        groups[item.type] = [];
        counts[item.type] = 0;
      }
      counts[item.type] = (counts[item.type] ?? 0) + 1;
      if (groups[item.type]!.length < cfg.max) {
        groups[item.type]!.push(item);
      }
    }
    return { groups, counts };
  }, [allResults]);

  // Flatten for keyboard navigation
  const flatResults = useMemo(() => {
    const flat: SearchItem[] = [];
    for (const type of TYPE_ORDER) {
      const items = grouped.groups[type];
      if (items?.length) flat.push(...items);
    }
    return flat;
  }, [grouped]);

  // Reset index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [flatResults]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      // Small delay to ensure modal is rendered before focusing
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const navigate = useCallback(
    (href: string) => {
      onClose();
      router.push(href);
    },
    [onClose, router],
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < flatResults.length - 1 ? prev + 1 : 0,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev > 0 ? prev - 1 : flatResults.length - 1,
          );
          break;
        case "Enter":
          e.preventDefault();
          if (flatResults[activeIndex]) {
            navigate(flatResults[activeIndex].href);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [flatResults, activeIndex, navigate, onClose],
  );

  // Scroll active item into view
  useEffect(() => {
    const el = document.querySelector(`[data-search-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const totalVisible = flatResults.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-xl rounded-xl border border-white/10 bg-[var(--color-surface)] shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onKeyDown={handleKeyDown}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, tools, podcasts, and team"
                className="flex-1 bg-transparent font-[family-name:var(--font-open-sans)] text-sm text-white placeholder:text-white/40 outline-none"
              />
              <kbd className="hidden shrink-0 rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-[family-name:var(--font-open-sans)] text-[10px] text-white/40 sm:inline-block">
                Esc
              </kbd>
            </div>

            {/* Results area */}
            <div className="max-h-[50vh] overflow-y-auto overscroll-contain px-2 py-2">
              {!query.trim() && (
                <div className="flex flex-col items-center gap-2 py-10 text-center">
                  <Search className="h-8 w-8 text-white/20" />
                  <p className="font-[family-name:var(--font-open-sans)] text-sm text-white/40">
                    Search articles, tools, podcasts, and team
                  </p>
                </div>
              )}

              {query.trim() && totalVisible === 0 && (
                <div className="flex flex-col items-center gap-2 py-10 text-center">
                  <Search className="h-8 w-8 text-white/20" />
                  <p className="font-[family-name:var(--font-open-sans)] text-sm text-white/40">
                    No results found for &lsquo;{query}&rsquo;
                  </p>
                </div>
              )}

              {query.trim() && totalVisible > 0 && (
                <>
                  {TYPE_ORDER.map((type) => {
                    const items = grouped.groups[type];
                    const total = grouped.counts[type] ?? 0;
                    if (!items?.length) return null;

                    const cfg = TYPE_CONFIG[type];
                    const Icon = cfg.icon;

                    return (
                      <div key={type} className="mb-1">
                        {/* Section header */}
                        <div className="flex items-center gap-2 px-3 py-2">
                          <Icon className="h-3.5 w-3.5 text-white/30" />
                          <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-wider text-white/30">
                            {cfg.label}
                          </span>
                          {total > cfg.max && (
                            <span className="text-[10px] text-white/25">
                              ({total} total)
                            </span>
                          )}
                        </div>

                        {/* Items */}
                        {items.map((item) => {
                          const globalIdx = flatResults.indexOf(item);
                          const isActive = globalIdx === activeIndex;

                          return (
                            <button
                              key={item.href + item.title}
                              data-search-index={globalIdx}
                              onClick={() => navigate(item.href)}
                              onMouseEnter={() => setActiveIndex(globalIdx)}
                              className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                                isActive
                                  ? "bg-white/[0.07]"
                                  : "hover:bg-white/[0.04]"
                              }`}
                            >
                              {/* Icon */}
                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                                  isActive
                                    ? "bg-[var(--color-gold)]/15 text-[var(--color-gold)]"
                                    : "bg-white/5 text-white/30"
                                }`}
                              >
                                <Icon className="h-4 w-4" />
                              </div>

                              {/* Text */}
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="truncate font-[family-name:var(--font-montserrat)] text-sm font-medium text-white">
                                    <HighlightMatch
                                      text={item.title}
                                      query={query}
                                    />
                                  </span>
                                  {item.badge && (
                                    <span className="shrink-0 rounded-full bg-white/5 px-2 py-0.5 font-[family-name:var(--font-open-sans)] text-[10px] text-white/40">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="mt-0.5 truncate font-[family-name:var(--font-open-sans)] text-xs text-white/40">
                                  {truncate(item.subtitle, 100)}
                                </p>
                              </div>

                              {/* Arrow */}
                              <ArrowRight
                                className={`h-4 w-4 shrink-0 transition-all ${
                                  isActive
                                    ? "text-white/50 translate-x-0"
                                    : "text-transparent -translate-x-1"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            {/* Footer hint */}
            {query.trim() && totalVisible > 0 && (
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[10px] text-white/25">
                    <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[9px]">
                      &uarr;
                    </kbd>
                    <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[9px]">
                      &darr;
                    </kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-white/25">
                    <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[9px]">
                      &crarr;
                    </kbd>
                    open
                  </span>
                </div>
                <span className="text-[10px] text-white/20">
                  {allResults.length} result{allResults.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
