/**
 * Content Gap Identifier (Phase 17.5)
 *
 * Compares a hardcoded list of 30+ high-value SBA lending search queries
 * against existing content slugs. Identifies uncovered topics as opportunities.
 *
 * Usage: npx tsx scripts/content-gaps.ts
 */

import { readdir, readFile } from "fs/promises";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ── Constants ────────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");
const CONTENT_DIR = join(ROOT, "content");

const CONTENT_SUBDIRS = ["pillar", "supporting", "blog", "podcast"];

// ── Target Queries ───────────────────────────────────────────────────────────

interface TargetQuery {
  query: string;
  keywords: string[]; // Key terms to fuzzy-match against slugs
  priority: "high" | "medium";
}

const TARGET_QUERIES: TargetQuery[] = [
  { query: "sba loan requirements", keywords: ["sba", "loan", "requirements"], priority: "high" },
  { query: "sba loan interest rates 2026", keywords: ["sba", "interest", "rates"], priority: "high" },
  { query: "sba 504 vs 7a", keywords: ["504", "7a", "vs"], priority: "high" },
  { query: "sba loan for startups", keywords: ["sba", "startups"], priority: "high" },
  { query: "sba loan down payment", keywords: ["sba", "down", "payment"], priority: "high" },
  { query: "sba express loan", keywords: ["sba", "express"], priority: "high" },
  { query: "sba loan closing costs", keywords: ["sba", "closing", "costs"], priority: "medium" },
  { query: "sba loan personal guarantee", keywords: ["sba", "personal", "guarantee"], priority: "high" },
  { query: "sba loan refinance", keywords: ["sba", "refinance"], priority: "medium" },
  { query: "sba loan for franchise", keywords: ["sba", "franchise"], priority: "high" },
  { query: "sba disaster loan", keywords: ["sba", "disaster"], priority: "medium" },
  { query: "sba microloan", keywords: ["sba", "microloan", "micro"], priority: "medium" },
  { query: "sba loan for women", keywords: ["sba", "women"], priority: "high" },
  { query: "sba loan for veterans", keywords: ["sba", "veterans"], priority: "high" },
  { query: "sba loan credit score requirements", keywords: ["sba", "credit", "score"], priority: "high" },
  { query: "sba loan application checklist", keywords: ["sba", "application", "checklist"], priority: "high" },
  { query: "sba loan processing time", keywords: ["sba", "processing", "time", "long", "takes"], priority: "medium" },
  { query: "sba preferred lender", keywords: ["sba", "preferred", "lender"], priority: "medium" },
  { query: "sba loan for real estate", keywords: ["sba", "real", "estate"], priority: "high" },
  { query: "sba loan for restaurant", keywords: ["sba", "restaurant"], priority: "medium" },
  { query: "sba loan prepayment penalty", keywords: ["sba", "prepayment", "penalty"], priority: "medium" },
  { query: "sba loan collateral requirements", keywords: ["sba", "collateral", "requirements"], priority: "high" },
  { query: "how much sba loan can i get", keywords: ["how", "much", "sba", "loan"], priority: "high" },
  { query: "sba loan vs conventional", keywords: ["sba", "conventional", "vs"], priority: "high" },
  { query: "sba loan for hotel", keywords: ["sba", "hotel"], priority: "medium" },
  { query: "sba loan for daycare", keywords: ["sba", "daycare"], priority: "medium" },
  { query: "sba loan for gas station", keywords: ["sba", "gas", "station"], priority: "medium" },
  { query: "sba loan for trucking", keywords: ["sba", "trucking"], priority: "medium" },
  { query: "what is an sba loan", keywords: ["what", "sba", "loan"], priority: "high" },
  { query: "sba loan denial reasons", keywords: ["sba", "denial", "denied", "reasons"], priority: "high" },
  { query: "sba loan for construction", keywords: ["sba", "construction"], priority: "medium" },
  { query: "sba loan for medical practice", keywords: ["sba", "medical", "practice"], priority: "medium" },
  { query: "sba loan for ecommerce", keywords: ["sba", "ecommerce", "online"], priority: "medium" },
  { query: "sba loan for manufacturing", keywords: ["sba", "manufacturing"], priority: "medium" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Collect all existing slugs from content directories and constants */
async function collectExistingSlugs(): Promise<string[]> {
  const slugs: string[] = [];

  // From markdown files
  for (const subdir of CONTENT_SUBDIRS) {
    const dirPath = join(CONTENT_DIR, subdir);
    try {
      const files = (await readdir(dirPath)).filter((f) => f.endsWith(".md"));
      for (const f of files) {
        slugs.push(f.replace(/\.md$/, ""));
      }
    } catch {
      // Directory may not exist
    }
  }

  // From constants (catches anything not on disk)
  const constantsPath = join(ROOT, "src", "lib", "constants.ts");
  const constantsContent = await readFile(constantsPath, "utf-8");
  const slugMatches = [...constantsContent.matchAll(/slug:\s*"([^"]+)"/g)];
  for (const m of slugMatches) {
    if (!slugs.includes(m[1])) {
      slugs.push(m[1]);
    }
  }

  // Industry pages
  const industryDataPath = join(ROOT, "src", "lib", "industry-data.ts");
  const industryContent = await readFile(industryDataPath, "utf-8");
  const industrySlugs = [...industryContent.matchAll(/slug:\s*"([^"]+)"/g)];
  for (const m of industrySlugs) {
    slugs.push(`sba-loans-for-${m[1]}`);
  }

  // Also read industry names for matching
  const industryNames = [...industryContent.matchAll(/name:\s*"([^"]+)"/g)];
  for (const m of industryNames) {
    slugs.push(m[1].toLowerCase().replace(/[^a-z0-9]+/g, "-"));
  }

  return slugs;
}

/** Check if a query's key terms appear in any existing slug or article title */
function findMatchingSlugs(keywords: string[], slugs: string[]): string[] {
  const matches: string[] = [];

  for (const slug of slugs) {
    const slugWords = slug.toLowerCase().replace(/[^a-z0-9]+/g, " ").split(" ");

    // Count how many keywords appear in the slug
    const matchCount = keywords.filter((kw) =>
      slugWords.some((sw) => sw.includes(kw.toLowerCase()) || kw.toLowerCase().includes(sw))
    ).length;

    // Require at least 2 keyword matches (or all keywords if fewer than 2)
    const threshold = Math.min(2, keywords.length);
    if (matchCount >= threshold) {
      matches.push(slug);
    }
  }

  return matches;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n  Content Gap Identifier\n");

  const slugs = await collectExistingSlugs();
  console.log(`  Existing content slugs: ${slugs.length}\n`);

  const covered: { query: string; matchedSlugs: string[] }[] = [];
  const gaps: TargetQuery[] = [];

  for (const tq of TARGET_QUERIES) {
    const matches = findMatchingSlugs(tq.keywords, slugs);
    if (matches.length > 0) {
      covered.push({ query: tq.query, matchedSlugs: matches });
    } else {
      gaps.push(tq);
    }
  }

  // Sort gaps: high priority first
  gaps.sort((a, b) => {
    if (a.priority === b.priority) return 0;
    return a.priority === "high" ? -1 : 1;
  });

  // ── Opportunities (Gaps) ───────────────────────────────────────────────────

  if (gaps.length === 0) {
    console.log("  No content gaps found — all target queries are covered!\n");
  } else {
    console.log(`  CONTENT OPPORTUNITIES (${gaps.length} uncovered queries):\n`);
    console.log("  Priority | Query");
    console.log("  ---------|------");
    for (const gap of gaps) {
      const marker = gap.priority === "high" ? "HIGH   " : "MEDIUM ";
      console.log(`  ${marker} | ${gap.query}`);
    }
    console.log();
  }

  // ── Covered Queries ────────────────────────────────────────────────────────

  console.log(`  COVERED QUERIES (${covered.length}):\n`);
  for (const c of covered) {
    const topMatches = c.matchedSlugs.slice(0, 3);
    console.log(`    "${c.query}" -> ${topMatches.join(", ")}${c.matchedSlugs.length > 3 ? ` (+${c.matchedSlugs.length - 3} more)` : ""}`);
  }
  console.log();

  // ── Summary ────────────────────────────────────────────────────────────────

  console.log("  ── SUMMARY ──");
  console.log(`  Target queries: ${TARGET_QUERIES.length}`);
  console.log(`  Covered: ${covered.length}`);
  console.log(`  Gaps (opportunities): ${gaps.length}`);
  console.log(`    High priority: ${gaps.filter((g) => g.priority === "high").length}`);
  console.log(`    Medium priority: ${gaps.filter((g) => g.priority === "medium").length}`);
  console.log();
}

main().catch((err) => {
  console.error("Content gap check failed:", err);
  process.exit(1);
});
