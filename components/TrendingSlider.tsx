"use client"

import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Keyboard, A11y } from "swiper/modules"

import "swiper/css"

type Article = {
  slug: string
  title: string
  desc: string
  image: string
  views?: number
  date?: string
  category?: string
}

type Props = {
  articles: Article[]
}

export default function TrendingFootballArticles({ articles }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-[#05080D] relative">

      {/* HEADER */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-black text-zinc-900 dark:text-white">
            🔥 داغ‌ترین مقالات فوتبال
          </h2>
          <p className="text-zinc-500 text-sm mt-2">
            محبوب‌ترین و پربازدیدترین مطالب فوتبالی
          </p>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Keyboard, A11y]}
        loop
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={18}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {articles
          .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
          .map((article, index) => {

            const isTop = index === 0
            const isPopular = (article.views ?? 0) > 3000

            return (
              <SwiperSlide key={article.slug}>
                <Link href={`/articles/${article.slug}`}>
                  <div className={`
                    group relative h-full rounded-2xl p-5
                    border transition-all duration-300

                    bg-white dark:bg-[#0B1220]
                    hover:-translate-y-2 hover:shadow-xl

                    ${isTop
                      ? "border-emerald-500/70"
                      : "border-zinc-200 dark:border-white/10"}
                  `}>

                    {/* TOP BAR */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-emerald-500 font-bold text-xs tracking-[0.25em]">
                        {article.category || "مقاله فوتبالی"}
                      </span>

                      <span className={`
                        text-xs font-bold
                        ${isPopular ? "text-amber-500" : "text-zinc-500"}
                      `}>
                        📊 محبوب
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-black leading-7 text-zinc-900 dark:text-white group-hover:text-emerald-400 transition line-clamp-2">
                      {article.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-zinc-500 mt-3 leading-6 line-clamp-2">
                      {article.desc}
                    </p>

                    {/* META */}
                    <div className="flex items-center justify-between mt-5 text-xs text-zinc-500">
                      <span className="text-emerald-500 font-bold">
                        👁 {article.views ?? 0} بازدید
                      </span>

                      <span>⏱ ۲ دقیقه مطالعه</span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="mt-4 h-[3px] w-full bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-emerald-500 group-hover:w-full transition-all duration-500" />
                    </div>

                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
      </Swiper>

      {/* EDGE FADE */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-[#05080D] pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-[#05080D] pointer-events-none" />

    </section>
  )
}