import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import {
  getArticlesByCategory,
} from '@/lib/articles'

type Props = {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({
  params,
}: Props) {

  const { category } = await params

  const articles =
    getArticlesByCategory(category)

  if (articles.length === 0) {
    notFound()
  }

  return (

    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        <h1 className="text-5xl font-black mb-4">

          {category}

        </h1>

        <p className="text-zinc-500 mb-14">

          مقالات این دسته‌بندی

        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {articles.map((article) => (

            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block"
            >

              <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-green-600 rounded-[32px] overflow-hidden">

                <div className="relative h-60">

                  <Image
                    src={
                      article.image ||
                      '/images/brazil.jpg'
                    }
                    alt={article.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <h2 className="text-2xl font-black">

                    {article.title}

                  </h2>

                  <p className="mt-4 text-zinc-500">

                    {article.desc}

                  </p>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </section>

    </main>

  )
}