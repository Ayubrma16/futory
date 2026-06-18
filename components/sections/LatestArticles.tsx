"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

/* =========================
   ANIMATION VARIANTS
========================= */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1] // safe bezier (no TS error)
    }
  }
}

/* =========================
   COMPONENT
========================= */

export default function LatestArticles({
  heroArticle,
  latestArticles
}: any) {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20">

        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            آخرین مقالات
          </h2>

          <div className="w-14 h-[2px] bg-green-500 mt-2 rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* HERO ARTICLE */}
          <Link
            href={`/articles/${heroArticle.slug}`}
            className="lg:col-span-7 group"
          >
            <article className="relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">

              <div className="relative h-[220px] sm:h-[320px] lg:h-[420px]">
                <Image
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 p-5 sm:p-6">

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-green-500 font-semibold">
                    {heroArticle.category}
                  </span>

                  <span className="text-[10px] text-zinc-300">
                    جدید
                  </span>
                </div>

                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold leading-snug group-hover:text-green-400 transition">
                  {heroArticle.title}
                </h3>

                <p className="text-zinc-300 text-sm mt-2 line-clamp-2">
                  {heroArticle.desc}
                </p>

              </div>

            </article>
          </Link>

          {/* LIST */}
          <div className="lg:col-span-5 space-y-3">

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >

              {latestArticles.slice(1, 6).map((article: any) => (
                <motion.div key={article.slug} variants={item}>

                  <Link href={`/articles/${article.slug}`} className="group block">

                    <article className="flex gap-4 py-3 border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">

                      {/* IMAGE */}
                      <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition"
                        />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0">

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-green-500 uppercase tracking-wider font-semibold">
                            {article.category}
                          </span>
                          <span className="text-[10px] text-zinc-500">
                            جدید
                          </span>
                        </div>

                        <h4 className="text-sm font-medium leading-snug line-clamp-2 text-zinc-800 dark:text-zinc-200 group-hover:text-green-500 transition">
                          {article.title}
                        </h4>

                      </div>

                    </article>

                  </Link>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}