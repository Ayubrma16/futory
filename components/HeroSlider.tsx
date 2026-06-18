'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import Link from 'next/link'

export type Article = {
  slug: string
  title: string
  desc: string
  image: string
}

type Props = {
  articles: Article[]
}

export default function HeroSlider({ articles }: Props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="rounded-[32px] overflow-hidden"
    >
      {articles.map((article) => (
        <SwiperSlide key={article.slug}>
          <Link href={`/articles/${article.slug}`}>
            <div className="relative h-[460px] md:h-[520px] group">

              {/* IMAGE */}
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
                className="object-cover group-hover:scale-110 transition duration-1000"
              />

              {/* DARK GRADIENT (Improved readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* SOFT LIGHT GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-green-500/10 via-transparent to-blue-500/10" />

              {/* TEXT */}
              <div className="absolute bottom-0 p-6 md:p-10 text-white max-w-2xl">

                <span className="text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur">
                  مقاله ویژه
                </span>

                <h2 className="text-2xl md:text-4xl font-black mt-4 leading-tight">
                  {article.title}
                </h2>

                <p className="text-white/80 mt-3 line-clamp-2">
                  {article.desc}
                </p>

              </div>

            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}