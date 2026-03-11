import {
  PILLAR_ARTICLES,
  SUPPORTING_ARTICLES,
  BLOG_POSTS,
  ROUNDUP_POSTS,
  PODCAST_EPISODES,
  TEAM,
} from "@/lib/constants";

export type SearchItemType = "article" | "tool" | "podcast" | "team";

export interface SearchItem {
  type: SearchItemType;
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  searchText: string;
  badge?: string;
  author?: string;
}

const AUTHOR_NAMES: Record<string, string> = {
  shane: "Shane Pierson",
  steph: "Stephanie Castagnier Dunn",
  brian: "Brian Congelliere",
};

const CLUSTER_LABELS: Record<string, string> = {
  "sba-basics": "SBA Basics",
  acquisition: "Acquisition",
  "originator-training": "Originator Training",
  "deal-structuring": "Deal Structuring",
  "industry-trends": "Industry Trends",
  "buying-a-business": "Buying a Business",
  general: "General",
};

function buildSearchText(...parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join(" ").toLowerCase();
}

// --- Pillar Articles ---
const pillarItems: SearchItem[] = PILLAR_ARTICLES.map((a) => ({
  type: "article" as const,
  title: a.title,
  subtitle: a.excerpt,
  href: `/${a.slug}`,
  image: a.image,
  searchText: buildSearchText(
    a.title,
    a.excerpt,
    AUTHOR_NAMES[a.author],
    a.cluster ? CLUSTER_LABELS[a.cluster] : undefined,
    a.keywords?.join(" "),
    "pillar guide",
  ),
  badge: "Pillar Guide",
  author: AUTHOR_NAMES[a.author],
}));

// --- Supporting Articles ---
const supportingItems: SearchItem[] = SUPPORTING_ARTICLES.map((a) => {
  const clusterLabel = a.cluster ? CLUSTER_LABELS[a.cluster] : undefined;
  return {
    type: "article" as const,
    title: a.title,
    subtitle: a.excerpt,
    href: `/${a.slug}`,
    image: a.image,
    searchText: buildSearchText(
      a.title,
      a.excerpt,
      AUTHOR_NAMES[a.author],
      clusterLabel,
      a.keywords?.join(" "),
      a.category,
    ),
    badge: clusterLabel ?? "Article",
    author: AUTHOR_NAMES[a.author],
  };
});

// --- Blog Posts ---
const blogItems: SearchItem[] = BLOG_POSTS.map((p) => ({
  type: "article" as const,
  title: p.title,
  subtitle: p.excerpt,
  href: `/${p.slug}`,
  image: p.image,
  searchText: buildSearchText(p.title, p.excerpt, "blog"),
  badge: "Blog",
}));

// --- Roundup Posts ---
const roundupItems: SearchItem[] = ROUNDUP_POSTS.map((r) => ({
  type: "article" as const,
  title: r.title,
  subtitle: r.excerpt,
  href: `/${r.slug}`,
  image: r.image,
  searchText: buildSearchText(
    r.title,
    r.excerpt,
    AUTHOR_NAMES[r.author],
    "weekly roundup",
  ),
  badge: "Weekly Roundup",
  author: AUTHOR_NAMES[r.author],
}));

// --- Podcast Episodes ---
const podcastItems: SearchItem[] = PODCAST_EPISODES.map((ep) => ({
  type: "podcast" as const,
  title: ep.title,
  subtitle: ep.excerpt,
  href: `/${ep.slug}`,
  image: "/images/podcast/cover-art.webp",
  searchText: buildSearchText(ep.title, ep.excerpt, "podcast", "episode"),
  badge: "Podcast",
}));

// --- Team ---
const teamItems: SearchItem[] = TEAM.map((member) => ({
  type: "team" as const,
  title: member.name,
  subtitle: `${member.title} — ${member.bankTitle}`,
  href: "/contact",
  image: member.headshot,
  searchText: buildSearchText(
    member.name,
    member.title,
    member.bankTitle,
    member.email,
    member.phone,
    "team founder",
  ),
  badge: member.title,
}));

// --- Tools (hardcoded) ---
const toolItems: SearchItem[] = [
  {
    type: "tool" as const,
    title: "SBA Loan Calculator",
    subtitle:
      "Calculate your monthly SBA loan payments, total interest, and amortization schedule.",
    href: "/tools/sba-loan-calculator",
    searchText: buildSearchText(
      "sba loan calculator",
      "calculate monthly payments interest amortization schedule",
      "tool",
    ),
    badge: "Tool",
  },
  {
    type: "tool" as const,
    title: "DSCR Calculator",
    subtitle:
      "Calculate your Debt Service Coverage Ratio to see if your business qualifies for financing.",
    href: "/tools/dscr-calculator",
    searchText: buildSearchText(
      "dscr calculator",
      "debt service coverage ratio qualify financing",
      "tool",
    ),
    badge: "Tool",
  },
  {
    type: "tool" as const,
    title: "SBA Eligibility Checker",
    subtitle:
      "Check whether your business meets the basic eligibility requirements for an SBA loan.",
    href: "/tools/sba-eligibility-checker",
    searchText: buildSearchText(
      "sba eligibility checker",
      "check business eligibility requirements sba loan qualify",
      "tool",
    ),
    badge: "Tool",
  },
];

// --- Combined index ---
export const SEARCH_INDEX: SearchItem[] = [
  ...pillarItems,
  ...supportingItems,
  ...blogItems,
  ...roundupItems,
  ...podcastItems,
  ...teamItems,
  ...toolItems,
];

/**
 * Search items by case-insensitive substring matching.
 * Results are sorted by relevance: title match scores higher than subtitle/other match.
 * Returns at most 12 results.
 */
export function searchItems(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  const scored: { item: SearchItem; score: number }[] = [];

  for (const item of SEARCH_INDEX) {
    // All terms must appear somewhere in searchText
    const allTermsMatch = terms.every((term) =>
      item.searchText.includes(term),
    );
    if (!allTermsMatch) continue;

    const titleLower = item.title.toLowerCase();
    let score = 0;

    // Exact title match (highest priority)
    if (titleLower === q) {
      score += 100;
    }
    // Title starts with query
    else if (titleLower.startsWith(q)) {
      score += 80;
    }
    // Title contains full query
    else if (titleLower.includes(q)) {
      score += 60;
    }

    // Per-term title bonus
    for (const term of terms) {
      if (titleLower.includes(term)) {
        score += 20;
      }
    }

    // Type priority: tools and pillar guides rank slightly higher
    if (item.type === "tool") score += 5;
    if (item.badge === "Pillar Guide") score += 3;

    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);

  return scored.map((s) => s.item);
}
