/**
 * Content Freshness Tracker (Phase 17.1)
 *
 * Scans content directories and constants for article dates, flags stale content:
 * - Pillar articles older than 90 days
 * - Supporting/industry articles older than 180 days
 * - State pages older than 365 days
 * - Any file containing "2025" in the body (stale year references)
 *
 * Usage: npx tsx scripts/content-freshness.ts
 */

import { readdir, readFile, writeFile, mkdir } from "fs/promises";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ── Constants ────────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");
const CONTENT_DIR = join(ROOT, "content");
const LOGS_DIR = join(ROOT, "logs");

const STALENESS_THRESHOLDS: Record<string, number> = {
  pillar: 90,
  supporting: 180,
  blog: 180,
  podcast: 180,
  industry: 180,
  state: 365,
};

// ── Types ────────────────────────────────────────────────────────────────────

interface ContentEntry {
  slug: string;
  title: string;
  date: string;
  category: string;
  filePath: string;
}

interface FreshnessIssue {
  slug: string;
  title: string;
  category: string;
  date: string;
  ageDays: number;
  thresholdDays: number;
  issues: string[];
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function daysBetween(dateStr: string, now: Date): number {
  const d = new Date(dateStr);
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
}

/** Parse frontmatter-style metadata from markdown body (e.g. **Last Updated:** March 2026) */
function parseInlineDate(content: string): string | null {
  // Match **Last Updated:** <date>
  const match = content.match(/\*\*Last Updated:\*\*\s*(.+)/i);
  if (match) {
    const raw = match[1].trim();
    const parsed = new Date(raw);
    if (!isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  }
  return null;
}

function parseFrontmatterDate(content: string): string | null {
  // YAML frontmatter: date: YYYY-MM-DD
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (fmMatch) {
    const dateMatch = fmMatch[1].match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})["']?/m);
    if (dateMatch) return dateMatch[1];
  }
  return null;
}

function bodyContainsStaleYear(content: string): boolean {
  // Check for "2025" in the body text (not in URLs or metadata)
  // Skip lines that are purely links or image references
  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip pure link/image lines
    if (trimmed.startsWith("![") || trimmed.startsWith("http")) continue;
    // Check for 2025 in running text
    if (/\b2025\b/.test(trimmed)) return true;
  }
  return false;
}

// ── Load content from constants (dynamic import workaround) ──────────────────

async function loadConstantsData(): Promise<ContentEntry[]> {
  const entries: ContentEntry[] = [];

  // We read the constants file and extract data via regex since we can't use @/ alias
  const constantsPath = join(ROOT, "src", "lib", "constants.ts");
  const stateDataPath = join(ROOT, "src", "lib", "state-data.ts");
  const industryDataPath = join(ROOT, "src", "lib", "industry-data.ts");

  const constantsContent = await readFile(constantsPath, "utf-8");

  // Extract PILLAR_ARTICLES entries
  const pillarMatch = constantsContent.match(
    /export const PILLAR_ARTICLES[\s\S]*?\[([\s\S]*?)\];\s*\n/
  );
  if (pillarMatch) {
    const slugs = [...pillarMatch[1].matchAll(/slug:\s*"([^"]+)"/g)];
    const titles = [...pillarMatch[1].matchAll(/title:\s*"([^"]+)"/g)];
    const dates = [...pillarMatch[1].matchAll(/date:\s*"([^"]+)"/g)];
    for (let i = 0; i < slugs.length; i++) {
      entries.push({
        slug: slugs[i][1],
        title: titles[i]?.[1] ?? slugs[i][1],
        date: dates[i]?.[1] ?? "unknown",
        category: "pillar",
        filePath: join(CONTENT_DIR, "pillar", `${slugs[i][1]}.md`),
      });
    }
  }

  // Extract SUPPORTING_ARTICLES entries
  const supportingMatch = constantsContent.match(
    /export const SUPPORTING_ARTICLES[\s\S]*?\[([\s\S]*?)\];\s*\n/
  );
  if (supportingMatch) {
    const slugs = [...supportingMatch[1].matchAll(/slug:\s*"([^"]+)"/g)];
    const titles = [...supportingMatch[1].matchAll(/title:\s*"([^"]+)"/g)];
    const dates = [...supportingMatch[1].matchAll(/date:\s*"([^"]+)"/g)];
    const categories = [...supportingMatch[1].matchAll(/category:\s*"([^"]+)"/g)];
    for (let i = 0; i < slugs.length; i++) {
      entries.push({
        slug: slugs[i][1],
        title: titles[i]?.[1] ?? slugs[i][1],
        date: dates[i]?.[1] ?? "unknown",
        category: categories[i]?.[1] ?? "supporting",
        filePath: join(CONTENT_DIR, "supporting", `${slugs[i][1]}.md`),
      });
    }
  }

  // Extract BLOG_POSTS entries
  const blogMatch = constantsContent.match(
    /export const BLOG_POSTS[\s\S]*?\[([\s\S]*?)\];\s*\n/
  );
  if (blogMatch) {
    const slugs = [...blogMatch[1].matchAll(/slug:\s*"([^"]+)"/g)];
    const titles = [...blogMatch[1].matchAll(/title:\s*"([^"]+)"/g)];
    const dates = [...blogMatch[1].matchAll(/date:\s*"([^"]+)"/g)];
    for (let i = 0; i < slugs.length; i++) {
      entries.push({
        slug: slugs[i][1],
        title: titles[i]?.[1] ?? slugs[i][1],
        date: dates[i]?.[1] ?? "unknown",
        category: "blog",
        filePath: join(CONTENT_DIR, "blog", `${slugs[i][1]}.md`),
      });
    }
  }

  // Extract PODCAST_EPISODES entries
  const podcastMatch = constantsContent.match(
    /export const PODCAST_EPISODES[\s\S]*?\[([\s\S]*?)\];\s*\n/
  );
  if (podcastMatch) {
    const slugs = [...podcastMatch[1].matchAll(/slug:\s*"([^"]+)"/g)];
    const titles = [...podcastMatch[1].matchAll(/title:\s*"([^"]+)"/g)];
    const dates = [...podcastMatch[1].matchAll(/date:\s*"([^"]+)"/g)];
    for (let i = 0; i < slugs.length; i++) {
      entries.push({
        slug: slugs[i][1],
        title: titles[i]?.[1] ?? slugs[i][1],
        date: dates[i]?.[1] ?? "unknown",
        category: "podcast",
        filePath: join(CONTENT_DIR, "podcast", `${slugs[i][1]}.md`),
      });
    }
  }

  // State pages — no individual date, use siteLastModified from sitemap (2026-03-10)
  const stateContent = await readFile(stateDataPath, "utf-8");
  const stateSlugs = [...stateContent.matchAll(/slug:\s*"([^"]+)"/g)];
  const stateNames = [...stateContent.matchAll(/name:\s*"([^"]+)"/g)];
  for (let i = 0; i < stateSlugs.length; i++) {
    entries.push({
      slug: `sba-loans-in-${stateSlugs[i][1]}`,
      title: `SBA Loans in ${stateNames[i]?.[1] ?? stateSlugs[i][1]}`,
      date: "2026-03-10", // Generated pages, date from sitemap
      category: "state",
      filePath: stateDataPath, // Data lives in TS file, not individual md
    });
  }

  // Industry pages
  const industryContent = await readFile(industryDataPath, "utf-8");
  const industrySlugs = [...industryContent.matchAll(/slug:\s*"([^"]+)"/g)];
  const industryNames = [...industryContent.matchAll(/name:\s*"([^"]+)"/g)];
  for (let i = 0; i < industrySlugs.length; i++) {
    entries.push({
      slug: `sba-loans-for-${industrySlugs[i][1]}`,
      title: `SBA Loans for ${industryNames[i]?.[1] ?? industrySlugs[i][1]}`,
      date: "2026-03-10",
      category: "industry",
      filePath: industryDataPath,
    });
  }

  return entries;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const now = new Date();
  console.log(`\n  Content Freshness Report — ${now.toISOString().slice(0, 10)}\n`);

  const entries = await loadConstantsData();
  const issues: FreshnessIssue[] = [];

  for (const entry of entries) {
    const entryIssues: string[] = [];
    const threshold = STALENESS_THRESHOLDS[entry.category] ?? 180;
    const age = entry.date !== "unknown" ? daysBetween(entry.date, now) : -1;

    // Check age threshold
    if (age > threshold) {
      entryIssues.push(`Stale: ${age} days old (threshold: ${threshold})`);
    }

    // Check for stale year references in markdown body
    if (entry.filePath.endsWith(".md")) {
      try {
        const content = await readFile(entry.filePath, "utf-8");

        // Also check for inline date that might override constants date
        const inlineDate = parseInlineDate(content) ?? parseFrontmatterDate(content);
        if (inlineDate && entry.date !== "unknown") {
          const inlineAge = daysBetween(inlineDate, now);
          if (inlineAge > threshold) {
            entryIssues.push(
              `Inline date stale: ${inlineDate} (${inlineAge} days, threshold: ${threshold})`
            );
          }
        }

        if (bodyContainsStaleYear(content)) {
          entryIssues.push('Contains "2025" reference in body text');
        }
      } catch {
        // File might not exist on disk (e.g., generated pages)
      }
    }

    if (entryIssues.length > 0) {
      issues.push({
        slug: entry.slug,
        title: entry.title,
        category: entry.category,
        date: entry.date,
        ageDays: age,
        thresholdDays: threshold,
        issues: entryIssues,
      });
    }
  }

  // ── Console Output ───────────────────────────────────────────────────────

  if (issues.length === 0) {
    console.log("  All content is fresh. No issues found.\n");
  } else {
    console.log(`  Found ${issues.length} content freshness issue(s):\n`);

    // Group by category
    const grouped = new Map<string, FreshnessIssue[]>();
    for (const issue of issues) {
      const existing = grouped.get(issue.category) ?? [];
      existing.push(issue);
      grouped.set(issue.category, existing);
    }

    for (const [category, categoryIssues] of grouped) {
      console.log(`  ── ${category.toUpperCase()} (${categoryIssues.length}) ──`);
      for (const issue of categoryIssues) {
        console.log(`    ${issue.slug}`);
        console.log(`      Title: ${issue.title}`);
        console.log(`      Date: ${issue.date} (${issue.ageDays} days ago)`);
        for (const msg of issue.issues) {
          console.log(`      ! ${msg}`);
        }
        console.log();
      }
    }
  }

  // ── Summary Stats ────────────────────────────────────────────────────────

  const totalEntries = entries.length;
  const staleCount = issues.filter((i) =>
    i.issues.some((msg) => msg.startsWith("Stale:"))
  ).length;
  const yearRefCount = issues.filter((i) =>
    i.issues.some((msg) => msg.includes("2025"))
  ).length;

  console.log("  ── SUMMARY ──");
  console.log(`  Total content pages: ${totalEntries}`);
  console.log(`  Stale (past threshold): ${staleCount}`);
  console.log(`  Contains "2025" references: ${yearRefCount}`);
  console.log(`  Fresh: ${totalEntries - issues.length}`);
  console.log();

  // ── Save Report ──────────────────────────────────────────────────────────

  await mkdir(LOGS_DIR, { recursive: true });
  const reportPath = join(LOGS_DIR, "content-freshness-report.md");

  let report = `# Content Freshness Report\n\n`;
  report += `**Generated:** ${now.toISOString().slice(0, 10)}\n\n`;
  report += `| Metric | Count |\n|---|---|\n`;
  report += `| Total content pages | ${totalEntries} |\n`;
  report += `| Stale (past threshold) | ${staleCount} |\n`;
  report += `| Contains "2025" references | ${yearRefCount} |\n`;
  report += `| Fresh | ${totalEntries - issues.length} |\n\n`;

  if (issues.length > 0) {
    report += `## Issues\n\n`;

    const grouped = new Map<string, FreshnessIssue[]>();
    for (const issue of issues) {
      const existing = grouped.get(issue.category) ?? [];
      existing.push(issue);
      grouped.set(issue.category, existing);
    }

    for (const [category, categoryIssues] of grouped) {
      report += `### ${category.charAt(0).toUpperCase() + category.slice(1)} (${categoryIssues.length})\n\n`;
      report += `| Slug | Date | Age (days) | Threshold | Issue |\n|---|---|---|---|---|\n`;
      for (const issue of categoryIssues) {
        for (const msg of issue.issues) {
          report += `| ${issue.slug} | ${issue.date} | ${issue.ageDays} | ${issue.thresholdDays} | ${msg} |\n`;
        }
      }
      report += "\n";
    }
  } else {
    report += `## Status\n\nAll content is fresh. No issues found.\n`;
  }

  await writeFile(reportPath, report, "utf-8");
  console.log(`  Report saved to: logs/content-freshness-report.md\n`);
}

main().catch((err) => {
  console.error("Content freshness check failed:", err);
  process.exit(1);
});
