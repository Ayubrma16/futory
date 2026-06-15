"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

type Article = {
  slug: string
  title: string
  desc: string
  image: string
  views?: number
  date?: string
}

type Props = {
  articles: Article[]
}

export default function TrendingSlider({ articles }: Props) {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black">🔥 داغ‌ترین مقالات</h2>
        <span className="text-sm text-zinc-500">بر اساس بازدید</span>
      </div>

      {/* ARROWS */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full border bg-white dark:bg-zinc-900"
      >
        ←
      </button>

      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full border bg-white dark:bg-zinc-900"
      >
        →
      </button>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
onBeforeInit={(swiper) => {
  const navigation = swiper.params.navigation

  if (navigation && typeof navigation === "object") {
    navigation.prevEl = prevRef.current
    navigation.nextEl = nextRef.current
  }
}}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={article.slug}>
            <Link href={`/articles/${article.slug}`}>
              <div
                className={`p-6 rounded-3xl border transition ${
                  index === 0
                    ? "border-green-500 shadow-md scale-[1.03]"
                    : "border-zinc-200 dark:border-zinc-800"
                }`}
              >
                <div className="text-green-600 font-black text-sm mb-3">
                  🔥 {article.views || 0} بازدید
                </div>

                <h3 className="font-bold text-lg leading-8">
                  {article.title}
                </h3>

                <p className="text-sm text-zinc-500 mt-3 line-clamp-2">
                  {article.desc}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* EDGE BLUR */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-zinc-950 pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-zinc-950 pointer-events-none" />

    </section>
  )
}