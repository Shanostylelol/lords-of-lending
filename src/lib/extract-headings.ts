export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Generate a URL-safe slug from heading text */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Parse markdown content to extract H2/H3 headings for TOC */
export function extractHeadings(markdown: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/\*\*/g, "").replace(/\*/g, "").trim();
    items.push({ id: slugifyHeading(text), text, level });
  }

  return items;
}
