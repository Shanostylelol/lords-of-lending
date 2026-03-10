"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

interface TranscriptToggleProps {
  transcript: string;
}

export function TranscriptToggle({ transcript }: TranscriptToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Parse transcript into formatted lines
  const lines = transcript
    .split("\n")
    .filter((line) => line.trim().length > 0);

  return (
    <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-black/5"
      >
        <div className="flex items-center gap-3">
          <FileText size={18} className="text-[var(--color-gold)]" />
          <span className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--color-text)]">
            Full Episode Transcript
          </span>
          <span className="rounded-full bg-[var(--color-gold)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-gold)]">
            SEO + Accessibility
          </span>
        </div>
        {isOpen ? (
          <ChevronUp size={18} className="text-[var(--color-text-muted)]" />
        ) : (
          <ChevronDown size={18} className="text-[var(--color-text-muted)]" />
        )}
      </button>

      {isOpen && (
        <div className="border-t border-[var(--color-border)] px-6 py-6">
          <div className="max-h-[600px] space-y-3 overflow-y-auto pr-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {lines.map((line, i) => {
              // Detect speaker labels (patterns like "Shane Pierson (00:03.63)" or "Shane:" or "[00:01:00] Shane:")
              const speakerMatch = line.match(
                /^(?:\[[\d:\.]+\]\s*)?(?:(Shane|Steph|Brian|Collin|Colin|Lance|Stuart)[^:]*?)[:]/i
              );
              const timestampOnly = line.match(
                /^([\d:]+(?:\.\d+)?\s*-\s*[\d:]+(?:\.\d+)?)\s*$/
              );

              if (timestampOnly) {
                return null; // Skip standalone timestamp lines
              }

              if (speakerMatch) {
                const speaker = speakerMatch[1];
                const rest = line.slice(line.indexOf(":") + 1).trim();
                return (
                  <p key={i}>
                    <strong className="font-semibold text-[var(--color-text)]">
                      {speaker}:
                    </strong>{" "}
                    {rest}
                  </p>
                );
              }

              return <p key={i}>{line}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
