/**
 * Internal Linking Health Check (Phase 17.3)
 *
 * Scans all markdown files in content/ for internal links,
 * builds a map of known slugs, and reports:
 * - Broken links (target slug doesn't exist)
 * - Pages with fewer than 2 outgoing internal links
 * - Pages with zero incoming internal links (orphans)
 *
 * Usage: npx tsx scripts/link-health.ts
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

// ── Types ────────────────────────────────────────────────────────────────────

interface PageLinks {
  slug: string;
  filePath: string;
  outgoing: string[]; // slugs this page links to
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Extract internal link targets from markdown content */
function extractInternalLinks(content: string): string[] {
  const links: string[] = [];

  // Match markdown links: [text](/some-slug) or [text](/some-slug#anchor)
  // Also match [text](/tools/something) etc.
  const linkPattern = /\]\(\/([^)\s"#]+)(?:#[^)\s"]*)?\)/g;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(content)) !== null) {
    const target = match[1];
    // Skip external-looking paths, images, API routes
    if (target.startsWith("images/")) continue;
    if (target.startsWith("api/")) continue;
    if (target.endsWith(".xml")) continue;
    if (target.endsWith(".png") || target.endsWith(".webp") || target.endsWith(".jpg")) continue;
    links.push(target);
  }

  return links;
}

/** Build known slugs from constants files and static routes */
async function buildKnownSlugs(): Promise<Set<string>> {
  const slugs = new Set<string>();

  // Parse constants.ts for article/blog/podcast slugs
  const constantsPath = join(ROOT, "src", "lib", "constants.ts");
  const constantsContent = await readFile(constantsPath, "utf-8");

  // All slug patterns in constants
  const slugMatches = [...constantsContent.matchAll(/slug:\s*"([^"]+)"/g)];
  for (const m of slugMatches) {
    slugs.add(m[1]);
  }

  // State pages: sba-loans-in-{state}
  const stateDataPath = join(ROOT, "src", "lib", "state-data.ts");
  const stateContent = await readFile(stateDataPath, "utf-8");
  const stateSlugs = [...stateContent.matchAll(/slug:\s*"([^"]+)"/g)];
  for (const m of stateSlugs) {
    slugs.add(`sba-loans-in-${m[1]}`);
  }

  // Industry pages: sba-loans-for-{industry}
  const industryDataPath = join(ROOT, "src", "lib", "industry-data.ts");
  const industryContent = await readFile(industryDataPath, "utf-8");
  const industrySlugs = [...industryContent.matchAll(/slug:\s*"([^"]+)"/g)];
  for (const m of industrySlugs) {
    slugs.add(`sba-loans-for-${m[1]}`);
  }

  // Static routes
  const staticRoutes = [
    "",
    "brokers",
    "blog",
    "podcast",
    "contact",
    "contact-us-bc",
    "leave-a-testimonial",
    "privacy-policy",
    "terms-of-use",
    "terms-of-application",
    "electronic-disclosure",
    "ada-accessibility",
    "tools",
    "tools/sba-loan-calculator",
    "tools/dscr-calculator",
    "tools/sba-eligibility-checker",
    "loans",
    "loans/loan-application",
    "loans/business-acquisition",
    "buying-a-business",
  ];
  for (const route of staticRoutes) {
    slugs.add(route);
  }

  return slugs;
}

/** Get slug from a content file path */
function slugFromPath(filePath: string, subdir: string): string {
  const base = filePath.replace(/\.md$/, "");
  // For pillar/supporting/blog/podcast, the slug is just the filename
  return base;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n  Internal Linking Health Check\n");

  const knownSlugs = await buildKnownSlugs();
  const pages: PageLinks[] = [];

  // Scan markdown files
  for (const subdir of CONTENT_SUBDIRS) {
    const dirPath = join(CONTENT_DIR, subdir);
    let files: string[];
    try {
      files = (await readdir(dirPath)).filter((f) => f.endsWith(".md"));
    } catch {
      continue;
    }

    for (const file of files) {
      const filePath = join(dirPath, file);
      const content = await readFile(filePath, "utf-8");
      const slug = file.replace(/\.md$/, "");
      const outgoing = extractInternalLinks(content);

      pages.push({ slug, filePath, outgoing });
    }
  }

  // ── Analysis ───────────────────────────────────────────────────────────────

  // 1. Broken links
  const brokenLinks: { page: string; target: string }[] = [];
  for (const page of pages) {
    for (const target of page.outgoing) {
      if (!knownSlugs.has(target)) {
        brokenLinks.push({ page: page.slug, target });
      }
    }
  }

  // 2. Pages with fewer than 2 outgoing internal links
  const lowOutgoing = pages.filter((p) => p.outgoing.length < 2);

  // 3. Orphan pages (zero incoming links from other content pages)
  const incomingCount = new Map<string, number>();
  // Initialize all content page slugs with 0
  for (const page of pages) {
    incomingCount.set(page.slug, 0);
  }
  // Count incoming
  for (const page of pages) {
    for (const target of page.outgoing) {
      if (incomingCount.has(target)) {
        incomingCount.set(target, (incomingCount.get(target) ?? 0) + 1);
      }
    }
  }
  const orphans = [...incomingCount.entries()]
    .filter(([, count]) => count === 0)
    .map(([slug]) => slug);

  // ── Console Output ─────────────────────────────────────────────────────────

  console.log(`  Total pages scanned: ${pages.length}`);
  console.log(`  Known slugs: ${knownSlugs.size}`);
  console.log();

  // Broken links
  if (brokenLinks.length === 0) {
    console.log("  BROKEN LINKS: None found\n");
  } else {
    console.log(`  BROKEN LINKS (${brokenLinks.length}):`);
    for (const bl of brokenLinks) {
      console.log(`    ${bl.page} -> /${bl.target}`);
    }
    console.log();
  }

  // Low outgoing
  if (lowOutgoing.length === 0) {
    console.log("  LOW OUTGOING LINKS (<2): None\n");
  } else {
    console.log(`  LOW OUTGOING LINKS (<2 internal links) (${lowOutgoing.length}):`);
    for (const page of lowOutgoing) {
      console.log(`    ${page.slug} (${page.outgoing.length} outgoing)`);
    }
    console.log();
  }

  // Orphans
  if (orphans.length === 0) {
    console.log("  ORPHAN PAGES (0 incoming): None\n");
  } else {
    console.log(`  ORPHAN PAGES (0 incoming links from content) (${orphans.length}):`);
    for (const slug of orphans) {
      console.log(`    ${slug}`);
    }
    console.log();
  }

  // Summary
  console.log("  ── SUMMARY ──");
  console.log(`  Broken links: ${brokenLinks.length}`);
  console.log(`  Pages with <2 outgoing: ${lowOutgoing.length}`);
  console.log(`  Orphan pages: ${orphans.length}`);
  console.log();
}

main().catch((err) => {
  console.error("Link health check failed:", err);
  process.exit(1);
});
