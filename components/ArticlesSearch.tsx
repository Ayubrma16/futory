'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Article = {
  slug: string
  title: string
  desc: string
  image: string
  category: string
  date: string
}

type Props = {
  articles: Article[]
}

export default function ArticlesSearch({
  articles,
}: Props) {

  const [search, setSearch] = useState('')

  const filteredArticles = articles.filter((article) =>

    article.title
      .toLowerCase()
      .includes(search.toLowerCase())

  )

  return (

    <>

      {/* SEARCH */}
      <div className="mb-14">

        <div className="relative max-w-2xl">

          <input
            type="text"
            placeholder="جستجو در مقالات فوتبالی..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-16 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 text-lg outline-none focus:border-green-600 transition"
          />

        </div>

      </div>

      {/* ARTICLES */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {filteredArticles.map((article) => (

          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group block"
          >

            <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-green-600 rounded-[32px] overflow-hidden transition duration-300 h-full flex flex-col">

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={article.image || '/images/brazil.jpg'}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/20" />

              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col flex-1">

                <div className="text-sm text-zinc-500 mb-4">

                  {article.date}

                </div>

                <h2 className="text-2xl font-black leading-tight mb-5 group-hover:text-green-700 transition">

                  {article.title}

                </h2>

                <p className="text-zinc-600 dark:text-zinc-400 leading-8 flex-1">

                  {article.desc}

                </p>

                <div className="mt-8 text-green-700 font-bold">

                  مطالعه مقاله ←

                </div>

              </div>

            </article>

          </Link>

        ))}

      </div>

      {/* EMPTY */}
      {filteredArticles.length === 0 && (

        <div className="text-center py-24">

          <h3 className="text-3xl font-black">

            مقاله‌ای پیدا نشد

          </h3>

          <p className="text-zinc-500 mt-4">

            عبارت دیگری جستجو کنید

          </p>

        </div>

      )}

    </>

  )
}