import type { MetadataRoute } from "next";
import { BLOG_POSTS, PODCAST_EPISODES, PILLAR_ARTICLES, SUPPORTING_ARTICLES, SITE_CONFIG } from "@/lib/constants";
import { STATE_DATA } from "@/lib/state-data";
import { INDUSTRY_DATA } from "@/lib/industry-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const siteLastModified = new Date("2026-03-10");

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: siteLastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/brokers`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/podcast`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/the-brokers-codex`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/leave-a-testimonial`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: new Date("2026-03-09"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-use`, lastModified: new Date("2026-03-09"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-application`, lastModified: new Date("2026-03-09"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/electronic-disclosure`, lastModified: new Date("2026-03-09"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/ada-accessibility`, lastModified: new Date("2026-03-09"), changeFrequency: "yearly", priority: 0.2 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const podcastPages: MetadataRoute.Sitemap = PODCAST_EPISODES.map((ep) => ({
    url: `${base}/${ep.slug}`,
    lastModified: new Date(ep.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const pillarPages: MetadataRoute.Sitemap = PILLAR_ARTICLES.map((a) => ({
    url: `${base}/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const supportingPages: MetadataRoute.Sitemap = SUPPORTING_ARTICLES.filter(
    (a) => a.category === "supporting"
  ).map((a) => ({
    url: `${base}/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const trainingPages: MetadataRoute.Sitemap = SUPPORTING_ARTICLES.filter(
    (a) => a.category === "training"
  ).map((a) => ({
    url: `${base}/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const statePages: MetadataRoute.Sitemap = STATE_DATA.map((s) => ({
    url: `${base}/sba-loans-in-${s.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRY_DATA.map((i) => ({
    url: `${base}/sba-loans-for-${i.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...pillarPages,
    ...blogPages,
    ...supportingPages,
    ...trainingPages,
    ...podcastPages,
    ...statePages,
    ...industryPages,
  ];
}
