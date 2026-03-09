import type { MetadataRoute } from "next";
import { BLOG_POSTS, PODCAST_EPISODES, SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/loans`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/loans/business-acquisition`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/loans/loan-application`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/brokers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/podcast`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/tools`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/the-brokers-codex`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/leave-a-testimonial`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-use`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-application`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/electronic-disclosure`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/ada-accessibility`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
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

  return [...staticPages, ...blogPages, ...podcastPages];
}
