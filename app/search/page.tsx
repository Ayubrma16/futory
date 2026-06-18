import Link from 'next/link'
import Image from 'next/image'

import { getArticles } from '@/data/articles'

type Props = {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function SearchPage({
  searchParams,
}: Props) {

  const { q = '' } = await searchParams

  const articles = getArticles()

  const results = articles.filter((article) => {

    const query = q.toLowerCase()

    return (
      article.title.toLowerCase().includes(query) ||
      article.desc.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    )
  })

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-black mb-3">
        نتایج جستجو
      </h1>

      <p className="text-zinc-500 mb-10">
        جستجو برای: {q}
      </p>

      {results.length === 0 ? (
        <div className="text-center py-20">

          <h2 className="text-2xl font-bold">
            مقاله‌ای پیدا نشد
          </h2>

          <p className="text-zinc-500 mt-3">
            عبارت دیگری را امتحان کنید.
          </p>

        </div>
      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {results.map((article) => (

            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
            >

              <article
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-white
                  dark:bg-zinc-900
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />

                </div>

                <div className="p-6">

                  <div className="text-green-600 text-sm font-bold mb-2">
                    {article.category}
                  </div>

                  <h2 className="font-black text-xl leading-8">
                    {article.title}
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-2">
                    {article.desc}
                  </p>

                </div>

              </article>

            </Link>

          ))}

        </div>

      )}

    </main>
  )
}