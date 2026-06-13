'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

type Slide = {
  title: string
  desc: string
  image: string
  slug: string
}

export default function HeroSlider({
  slides,
}: {
  slides: Slide[]
}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop
      className="h-full min-h-[350px] rounded-[40px] overflow-hidden"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.slug}>
          <div
            className="relative h-full bg-cover bg-center flex items-end"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white max-w-3xl">
              <span className="inline-flex bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold">
                مقاله ویژه
              </span>

              <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                {slide.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/90">
                {slide.desc}
              </p>

              <Link
                href={`/articles/${slide.slug}`}
                className="inline-flex mt-8 bg-white text-green-700 px-8 py-4 rounded-2xl font-black hover:scale-105 transition"
              >
                مطالعه مقاله
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}