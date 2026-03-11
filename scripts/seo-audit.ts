import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join } from "path";

// Import article metadata from constants
import {
  BLOG_POSTS,
  PILLAR_ARTICLES,
  SUPPORTING_ARTICLES,
} from "../src/lib/constants";
import type { BlogPost, ContentMeta } from "../src/lib/constants";

const ROOT = process.cwd();
const CONTENT_DIR = join(ROOT, "content");
const PUBLIC_DIR = join(ROOT, "public");

interface AuditResult {
  slug: string;
  type: string;
  titleLen: string;
  hasExcerpt: string;
  imageOk: string;
  wordCount: string;
  internalLinks: string;
}

const WORD_MINIMUMS: Record<string, number> = {
  pillar: 2500,
  supporting: 1000,
  blog: 500,
};

function checkTitleLength(title: string): { ok: boolean; len: number } {
  const len = title.length;
  return { ok: len >= 30 && len <= 65, len };
}

function checkImageSize(imagePath: string): { ok: boolean; size: number } {
  // imagePath looks like "/images/pillar/foo.webp"
  const fullPath = join(PUBLIC_DIR, imagePath);
  if (!existsSync(fullPath)) {
    return { ok: false, size: -1 };
  }
  const stat = statSync(fullPath);
  const sizeKB = Math.round(stat.size / 1024);
  return { ok: sizeKB < 200, size: sizeKB };
}

function countInternalLinks(markdown: string): number {
  const matches = markdown.match(/\]\(\//g);
  return matches ? matches.length : 0;
}

function auditArticle(
  meta: { slug: string; title: string; excerpt: string; image: string },
  type: string,
  contentDir: string
): AuditResult {
  const mdPath = join(CONTENT_DIR, contentDir, `${meta.slug}.md`);
  let markdown = "";
  let wordCount = 0;

  if (existsSync(mdPath)) {
    markdown = readFileSync(mdPath, "utf-8");
    wordCount = markdown.split(/\s+/).filter((w) => w.length > 0).length;
  }

  const titleCheck = checkTitleLength(meta.title);
  const imageCheck = checkImageSize(meta.image);
  const minWords = WORD_MINIMUMS[type] || 500;
  const internalLinkCount = countInternalLinks(markdown);

  return {
    slug: meta.slug.length > 40 ? meta.slug.substring(0, 37) + "..." : meta.slug,
    type,
    titleLen: titleCheck.ok
      ? `PASS (${titleCheck.len})`
      : `WARN (${titleCheck.len})`,
    hasExcerpt: meta.excerpt ? "PASS" : "FAIL",
    imageOk:
      imageCheck.size === -1
        ? "FAIL (missing)"
        : imageCheck.ok
          ? `PASS (${imageCheck.size}KB)`
          : `WARN (${imageCheck.size}KB)`,
    wordCount:
      wordCount === 0
        ? "FAIL (no file)"
        : wordCount >= minWords
          ? `PASS (${wordCount})`
          : `WARN (${wordCount}/${minWords})`,
    internalLinks:
      internalLinkCount >= 2
        ? `PASS (${internalLinkCount})`
        : `WARN (${internalLinkCount})`,
  };
}

function main() {
  console.log("\n=== SEO AUDIT: Lords of Lending ===\n");

  const results: AuditResult[] = [];

  // Pillar articles
  for (const article of PILLAR_ARTICLES) {
    results.push(auditArticle(article, "pillar", "pillar"));
  }

  // Supporting articles
  for (const article of SUPPORTING_ARTICLES) {
    results.push(auditArticle(article, "supporting", "supporting"));
  }

  // Blog posts
  for (const post of BLOG_POSTS) {
    results.push(auditArticle(post, "blog", "blog"));
  }

  // Display results
  console.table(results);

  // Summary
  const warns = results.reduce((count, r) => {
    return (
      count +
      [r.titleLen, r.hasExcerpt, r.imageOk, r.wordCount, r.internalLinks].filter(
        (v) => v.startsWith("WARN")
      ).length
    );
  }, 0);

  const fails = results.reduce((count, r) => {
    return (
      count +
      [r.titleLen, r.hasExcerpt, r.imageOk, r.wordCount, r.internalLinks].filter(
        (v) => v.startsWith("FAIL")
      ).length
    );
  }, 0);

  const passes = results.length * 5 - warns - fails;

  console.log(`\nTotal: ${results.length} pages audited`);
  console.log(`  PASS: ${passes}  |  WARN: ${warns}  |  FAIL: ${fails}\n`);

  if (fails > 0) {
    process.exit(1);
  }
}

main();
