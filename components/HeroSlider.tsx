'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
{
title: 'برزیل ۱۹۷۰؛ بهترین تیم تاریخ فوتبال',
desc: 'داستان تیم افسانه‌ای پله و آغاز فوتبال مدرن.',
link: '/articles/brazil-1970',
},
{
title: 'مارادونا و جام جهانی ۱۹۸۶',
desc: 'دست خدا، گل قرن و قهرمانی آرژانتین.',
link: '/articles/maradona-1986',
},
{
title: 'زین‌الدین زیدان و فرانسه ۱۹۹۸',
desc: 'شبی که فرانسه برای اولین بار قهرمان جهان شد.',
link: '/articles/france-1998',
},
]

export default function HeroSlider() {
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
className="h-[400px] md:h-[500px] lg:h-[500px] rounded-[40px] overflow-hidden"
>
{slides.map((slide) => ( <SwiperSlide key={slide.title}> <div className="relative h-full bg-gradient-to-br from-green-700 via-green-600 to-green-500 flex items-end"> <div className="absolute inset-0 bg-black/20" />


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
            href={slide.link}
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
