"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { BookOpen, Wrench, Play } from "lucide-react";

const RESOURCE_TYPES = [
  {
    icon: BookOpen,
    title: "Ebooks",
    description:
      "Our expertly crafted ebooks deliver actionable insights, proven strategies, and step-by-step guidance to help you navigate the SBA loan process with confidence.",
    href: "/ebooks",
    cta: "Browse Ebooks",
    external: false,
  },
  {
    icon: Wrench,
    title: "Web Tools",
    description:
      "Access powerful, easy-to-use web tools designed to streamline your loan process and help you make informed financing decisions.",
    href: "/tools",
    cta: "Explore Tools",
    external: false,
  },
  {
    icon: Play,
    title: "Videos",
    description:
      "Watch our library of short, informative videos to learn from industry experts and get the knowledge you need to fund your business.",
    href: SITE_CONFIG.youtube,
    cta: "Watch on YouTube",
    external: true,
  },
];

export function Resources() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="px-6 py-16 md:px-8 md:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold uppercase tracking-tight text-[var(--color-text)] md:text-4xl">
          Resources to Fund and Grow Your Business
        </h2>

        {/* Podcast promo */}
        <motion.div
          className="mt-12 grid items-center gap-8 rounded-2xl bg-[var(--color-dark)] p-8 md:grid-cols-2 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <Image
              src="/images/podcast/cover-art.webp"
              alt="Lords of Lending Podcast"
              width={300}
              height={300}
              className="rounded-xl shadow-xl"
            />
          </div>
          <div>
            <Image
              src="/images/logos/podcast-wordmark.png"
              alt="Lords of Lending Podcast"
              width={300}
              height={40}
              className="h-8 w-auto"
            />
            <h3 className="mt-4 font-[family-name:var(--font-montserrat)] text-xl font-bold text-white md:text-2xl">
              Insights for Business Owners
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Tune in to the Lords of Lending podcast for expert conversations on
              business financing, growth strategies, and real-world success stories.
              Whether you&apos;re buying a business or expanding your current one, each
              episode delivers the knowledge you need to fund your vision.
            </p>
            <div className="mt-6">
              <Button href="/podcast" className="bg-[var(--color-gold-light)] hover:bg-[var(--color-gold)]">
                Unlock Business Loan Secrets
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Blog preview */}
        <div className="mt-16">
          <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)]">
            Lords of Lending Blog
          </h3>
          <p className="mt-2 text-[var(--color-text-muted)]">
            Business Loan Knowledge You Can Trust
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <Link
                  href={`/${post.slug}`}
                  className="group block overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <time className="text-xs text-[var(--color-text-light)]">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h4 className="mt-2 font-[family-name:var(--font-montserrat)] text-sm font-bold leading-tight text-[var(--color-text)] group-hover:text-[var(--color-gold)]">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/blog" variant="outline">
              Become a Business Expert
            </Button>
          </div>
        </div>

        {/* Ebooks, Web Tools, Videos subsections */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {RESOURCE_TYPES.map((resource, i) => (
            <motion.div
              key={resource.title}
              className="rounded-xl border border-[var(--color-border)] bg-white p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-gold)]/10">
                <resource.icon size={20} className="text-[var(--color-gold)]" />
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                {resource.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {resource.description}
              </p>
              <div className="mt-5">
                {resource.external ? (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-dark)]"
                  >
                    {resource.cta}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ) : (
                  <Link
                    href={resource.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-dark)]"
                  >
                    {resource.cta}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
