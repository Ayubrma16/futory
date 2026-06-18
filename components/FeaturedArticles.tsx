"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

/* =========================
   TYPES (CMS READY)
========================= */
export type Article = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  category: string;
  readingTime?: number;
};

/* =========================
   ANIMATION SYSTEM
========================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
    },
  },
};

/* =========================
   SKELETON CARD
========================= */
function SkeletonCard() {
  return (
    <div className="rounded-[34px] border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-pulse">
      <div className="h-72 bg-zinc-200 dark:bg-zinc-800" />
      <div className="p-6 space-y-4">
        <div className="h-5 w-1/3 bg-zinc-200 dark:bg-zinc-800 rounded" />
        <div className="h-7 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded" />
        <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded" />
        <div className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-800 rounded" />
      </div>
    </div>
  );
}

/* =========================
   IMAGE COMPONENT (BLUR UX)
========================= */
function ProgressiveImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-72 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`object-cover transition duration-700 ease-out ${
          loaded ? "scale-110 opacity-100" : "scale-105 blur-sm opacity-70"
        }`}
        onLoad={() => setLoaded(true)}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
function FeaturedArticles({
  featuredArticles = [],
  loading = false,
}: {
  featuredArticles: Article[];
  loading?: boolean;
}) {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      aria-labelledby="featured-title"
    >
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <div>
          <span className="text-green-600 font-bold text-sm tracking-[0.3em] uppercase">
            Featured Stories
          </span>

          <h2
            id="featured-title"
            className="text-3xl sm:text-5xl font-black mt-4 text-zinc-900 dark:text-white"
          >
            مقالات منتخب
          </h2>

          <p className="text-zinc-500 dark:text-zinc-400 mt-5 text-lg leading-8 max-w-2xl">
            عمیق‌ترین روایت‌ها از تاریخ و فرهنگ فوتبال جهان
          </p>
        </div>

        <Link
          href="/articles"
          className="px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800
          hover:border-green-500 hover:text-green-600 transition font-bold"
        >
          مشاهده همه
        </Link>
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {featuredArticles.map((article) => (
              <motion.article key={article.slug} variants={card}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block rounded-[34px] focus-visible:ring-2 focus-visible:ring-green-500"
                >
                  <div
                    className="relative overflow-hidden rounded-[34px]
                    border border-zinc-200 dark:border-zinc-800
                    bg-white dark:bg-zinc-900
                    transition-all duration-500
                    hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10
                    hover:border-green-500"
                  >
                    {/* IMAGE */}
                    <ProgressiveImage
                      src={article.image}
                      alt={article.title}
                    />

                    {/* CATEGORY */}
                    <div className="absolute top-5 right-5 z-10">
                      <span className="bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md
                        text-green-600 text-xs px-4 py-2 rounded-full font-bold">
                        {article.category}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-7 sm:p-8 flex flex-col">
                      <h3 className="text-2xl sm:text-3xl font-black mb-3 line-clamp-2 group-hover:text-green-600 transition">
                        {article.title}
                      </h3>

                      <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-7">
                        {article.desc}
                      </p>

                      {/* META + CTA */}
                      <div className="mt-8 flex items-center justify-between">
                        <div className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                          مطالعه
                          <span className="group-hover:translate-x-1 transition">
                            ←
                          </span>
                        </div>

                        <div className="text-xs text-zinc-500">
                          {article.readingTime
                            ? `${article.readingTime} min`
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default memo(FeaturedArticles);