import Link from 'next/link'
import Image from 'next/image'
import { getArticles } from '@/data/articles'
import ArticlesSearch from '@/components/ArticlesSearch'
import {
  toPersianNumber,
  toPersianDate,
  readingTime,
} from '@/lib/persian'
export default function ArticlesPage() {

  const articles = getArticles()

  return (

    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">

      {/* HERO */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

          <div className="max-w-3xl">

            <span className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold">

              آرشیو مقالات

            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-8">

              تاریخ فوتبال جهان

            </h1>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-9 mt-8">

              داستان اسطوره‌ها، مسابقات تاریخی، تاکتیک‌های بزرگ و لحظات فراموش‌نشدنی فوتبال.

            </p>

          </div>

        </div>

      </section>

{/* ARTICLES SEARCH + GRID */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

  <ArticlesSearch articles={articles} />

</section>

    </main>

  )
}