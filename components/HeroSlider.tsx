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
  category: string
  date: string
  author: string
  categorySlug: string
  featured?: boolean
}

type Props = {
  articles: Article[]
}

export default function HeroSlider({ articles }: Props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-[40px] overflow-hidden"
    >
      {articles.map((article) => (
        <SwiperSlide key={article.slug}>
          <Link href={`/articles/${article.slug}`}>
            <div className="relative h-[420px] group">

              {/* IMAGE */}
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-0 p-8 text-white">

                <span className="bg-green-600 text-xs px-3 py-1 rounded-full">
                  مقاله ویژه
                </span>

                <h2 className="text-3xl font-black mt-4 leading-tight">
                  {article.title}
                </h2>

                <p className="text-zinc-200 mt-3 line-clamp-2">
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