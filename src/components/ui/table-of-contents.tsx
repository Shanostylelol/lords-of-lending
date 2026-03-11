"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import type { TocItem } from "@/lib/extract-headings";

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <>
      {/* Mobile: collapsible above content */}
      <div className="mb-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between text-sm font-semibold text-white"
        >
          Table of Contents
          <ChevronDown
            size={16}
            className={`text-[var(--color-gold)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <nav className="mt-3 space-y-1 border-t border-[var(--color-border)] pt-3">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block text-sm leading-relaxed transition-colors ${
                  item.level === 3 ? "pl-4" : ""
                } ${
                  activeId === item.id
                    ? "font-medium text-[var(--color-gold)]"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {item.text}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="fixed top-32 right-8 hidden w-56 xl:right-[calc((100vw-48rem)/2-16rem)] xl:block">
        <nav className="max-h-[calc(100vh-10rem)] overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
            On This Page
          </p>
          <div className="space-y-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-xs leading-relaxed transition-colors ${
                  item.level === 3 ? "pl-3" : ""
                } ${
                  activeId === item.id
                    ? "border-l-2 border-[var(--color-gold)] pl-2 font-medium text-[var(--color-gold)]"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
