import { categories } from '@/data/categories'
import { quotes } from '@/data/quotes'
import LatestArticles from "@/components/sections/LatestArticles"
import Link from 'next/link'
import Image from 'next/image'
import HeroSlider from '@/components/HeroSlider'
import TrendingSlider from '@/components/TrendingSlider'
import TimelineBasic from "@/components/timeline/TimelineBasic";
import FeaturedArticles from "@/components/FeaturedArticles";
import {
  getArticles,
  getFeaturedArticles,
} from '@/data/articles'

import { getTrendingArticles } from '@/lib/trending'

import {
  toPersianNumber,
  toPersianDate,
} from '@/lib/persian'

import { Crown } from 'lucide-react'
const timeline = [
  {
    year: '1930',
    title: 'اولین جام جهانی',
    desc: 'اروگوئه میزبان اولین جام جهانی تاریخ فوتبال شد.',
  },
  {
    year: '1958',
    title: 'ظهور پله',
    desc: 'پله در 17 سالگی جهان فوتبال را شگ۱ت‌زده کرد.',
  },
  {
    year: '1970',
    title: 'برزیل افسانه‌ای',
    desc: 'بهترین تیم تاریخ فوتبال جام جهانی را فتح کرد.',
  },
  {
    year: '1986',
    title: 'دست خدا',
    desc: 'مارادونا تاریخی‌ترین نمایش جام جهانی را ثبت کرد.',
  },
  {
    year: '1998',
    title: 'قهرمانی فرانسه',
    desc: 'زیدان فرانسه را به اولین جام جهانی رساند.',
  },
  {
    year: '2010',
    title: 'تیکی‌تاکا',
    desc: 'اسپانیا فوتبال مالکانه را به اوج رساند.',
  },
]
const tags = [
  'جام جهانی',
  'مارادونا',
  'پله',
  'رئال مادرید',
  'بارسلونا',
  'زیدان',
  'لیگ قهرمانان',
  'فوتبال کلاسیک',
  'تاکتیک',
  'آژاکس',
]
export default function HomePage() {

  const randomQuote =
  quotes[Math.floor(Math.random() * quotes.length)]
  const latestArticles = getArticles()
  .filter(article => !article.featured)
  .slice(0, 6)
const trending = getTrendingArticles()
  const heroArticle = latestArticles[0]

  const sideArticles = latestArticles.slice(1, 6)

const featuredArticles =
  getFeaturedArticles().slice(0, 6)
const sliderArticles =
  getFeaturedArticles().slice(0, 5)
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">

{/* HERO — LEVEL 7 */}
<section className="max-w-7xl mx-auto px-6 py-10">

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

    {/* HERO SLIDER */}
    <div className="lg:col-span-2">
      <HeroSlider articles={featuredArticles} />
    </div>

    {/* QUOTE — LEVEL 7 CLEAN PREMIUM */}
    <div className="relative h-full rounded-[44px] p-8 text-white overflow-hidden group">

      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-green-600 to-green-900" />

      {/* SOFT LIGHT ORBS */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-black/30 blur-3xl rounded-full" />

      {/* SUBTLE LIGHT SWEEP */}
      <div className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white/10 to-transparent
        translate-x-[-120%]
        group-hover:translate-x-[120%]
        transition-transform duration-[1500ms]
        rotate-12
      " />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-between">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <h2 className="text-lg sm:text-xl font-black tracking-tight">
            سخن بزرگان فوتبال
          </h2>

          <span className="px-3 py-1 text-[10px] tracking-[0.25em] font-bold rounded-full bg-white/10 border border-white/20">
            LEGENDS
          </span>

        </div>

        {/* QUOTE */}
        <div className="flex-1 flex items-center mt-10">

          <div className="
            w-full rounded-3xl p-7
            bg-white/10 backdrop-blur-xl
            border border-white/20
            transition-all duration-500
            group-hover:bg-white/15
            group-hover:-translate-y-1
          ">

            {/* ICON */}
            <div className="mb-5 text-yellow-200">
              <Crown size={20} />
            </div>

            {/* TEXT */}
            <p className="text-xl lg:text-2xl leading-[2] font-medium text-white/95">
              {randomQuote.text}
            </p>

            {/* AUTHOR */}
            <div className="mt-8 flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Crown size={14} />
              </div>

              <div>
                <div className="font-black text-lg">
                  {randomQuote.author}
                </div>
                <div className="text-xs text-white/60">
                  Football Legend
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="h-[1px] bg-white/10 mt-6" />

      </div>
    </div>

  </div>
</section>
{/* CATEGORIES */}
<section className="max-w-7xl mx-auto px-6 py-16">

  <div className="flex items-center justify-between mb-10">

    <h2 className="text-3xl font-black">
      دسته‌بندی مقالات
    </h2>

    <span className="text-sm text-zinc-500">
      همه موضوعات فوتبالی
    </span>

  </div>

  {/* GRID */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

  {categories.map((cat, i) => {

    const gradients = [
      "from-emerald-500 to-lime-400",
      "from-blue-500 to-cyan-400",
      "from-rose-500 to-pink-400",
      "from-violet-500 to-indigo-400",
      "from-amber-500 to-orange-400",
    ]

    const Icon = cat.icon
    const g = gradients[i % gradients.length]

    return (
      <Link key={cat.slug} href={`/articles/category/${cat.slug}`}>
        <div className="
          group relative overflow-hidden rounded-3xl p-6

          bg-gradient-to-b from-zinc-100/80 to-zinc-200/40
dark:from-zinc-900/60 dark:to-zinc-950/40
          backdrop-blur-2xl

          border border-white/20 dark:border-white/10

          shadow-md hover:shadow-2xl
          transition-all duration-500

          hover:-translate-y-2 hover:scale-[1.04]
        ">

          {/* 🌈 BACKGROUND GRADIENT GLOW */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-20
            transition duration-500
            bg-gradient-to-br ${g}
            blur-2xl
          `} />

          {/* ✨ LIGHT SWEEP EFFECT */}
          <div className="
            absolute inset-[-120%] rotate-45
            bg-white/10
            translate-x-[-60%]
            group-hover:translate-x-[60%]
            transition-all duration-1000
          " />

          {/* DARK OVERLAY CONTROL */}
          <div className="absolute inset-0 bg-black/0 dark:bg-black/20" />

          {/* CONTENT */}
          <div className="relative z-10">

            {/* ICON */}
            <div className={`
              w-12 h-12 mb-4 rounded-2xl
              flex items-center justify-center
              bg-gradient-to-br ${g}
              shadow-lg
              group-hover:scale-110
              transition
            `}>
              <Icon size={22} className="text-white" />
            </div>

            {/* TITLE */}
            <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white">
              {cat.title}
            </h3>

            {/* SUBTITLE */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              مشاهده مقالات →
            </p>

          </div>

          {/* BORDER GLOW */}
          <div className="
            absolute inset-0 rounded-3xl
            border border-transparent
            group-hover:border-white/30 dark:group-hover:border-white/10
            transition
          " />

        </div>
      </Link>
    )
  })}

</div>
</section>

{/* LATEST ARTICLES */}
      <LatestArticles
        heroArticle={heroArticle}
        latestArticles={latestArticles}
      />
{/* TIMELINE */}

<TimelineBasic timeline={timeline} />

{/* TRENDING */}

<TrendingSlider articles={trending} />

{/* FEATURED ARTICLES */}

<FeaturedArticles featuredArticles={featuredArticles} />



    </main>
  )
}