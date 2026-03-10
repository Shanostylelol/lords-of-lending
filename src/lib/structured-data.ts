import { SITE_CONFIG, STATS, FAQ } from "./constants";
import type { BlogPost, ContentMeta } from "./constants";

const ORG = {
  "@type": "Organization",
  name: "Lords of Lending",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/logos/wordmark-vert.png`,
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.youtube],
  description:
    "The #1 resource for SBA lending knowledge, originator training, and small business financing education.",
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    ...ORG,
    foundingDate: "2023",
    founder: [
      { "@type": "Person", name: "Shane Pierson" },
      { "@type": "Person", name: "Stephanie Castagnier Dunn" },
      { "@type": "Person", name: "Brian Congelliere" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.email,
      contactType: "customer support",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lords of Lending",
    url: SITE_CONFIG.url,
    description:
      "The #1 resource for SBA lending knowledge, originator training, and small business financing education.",
    publisher: ORG,
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_CONFIG.url}${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Shane Pierson",
      url: SITE_CONFIG.url,
    },
    publisher: ORG,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/${post.slug}`,
    },
  };
}

export function podcastEpisodeJsonLd(episode: {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  buzzsproutId: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.excerpt,
    datePublished: new Date(episode.date).toISOString(),
    url: `${SITE_CONFIG.url}/${episode.slug}`,
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: `https://www.buzzsprout.com/2315806/${episode.buzzsproutId}`,
    },
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Lords of Lending Podcast",
      url: `${SITE_CONFIG.url}/podcast`,
      webFeed: SITE_CONFIG.rss,
    },
  };
}

export function podcastSeriesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Lords of Lending Podcast",
    description:
      "Expert conversations on SBA lending, deal structuring, and business acquisition strategies.",
    url: `${SITE_CONFIG.url}/podcast`,
    webFeed: SITE_CONFIG.rss,
    author: [
      { "@type": "Person", name: "Shane Pierson" },
      { "@type": "Person", name: "Stephanie Castagnier Dunn" },
      { "@type": "Person", name: "Brian Congelliere" },
    ],
    image: `${SITE_CONFIG.url}/images/podcast/cover-art.webp`,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };
}

const AUTHOR_NAMES: Record<ContentMeta["author"], string> = {
  shane: "Shane Pierson",
  steph: "Stephanie Castagnier Dunn",
  brian: "Brian Congelliere",
};

export function articleJsonLdWithAuthor(meta: ContentMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.excerpt,
    image: `${SITE_CONFIG.url}${meta.image}`,
    datePublished: new Date(meta.date).toISOString(),
    author: {
      "@type": "Person",
      name: AUTHOR_NAMES[meta.author],
      url: SITE_CONFIG.url,
    },
    publisher: ORG,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/${meta.slug}`,
    },
  };
}

export function articleFaqJsonLd(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
