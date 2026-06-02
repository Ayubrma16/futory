import { getArticles } from '@/lib/articles'
import Link from 'next/link'

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

  const results = articles.filter((article) =>

    article.title
      .toLowerCase()
      .includes(q.toLowerCase()) ||

    article.desc
      .toLowerCase()
      .includes(q.toLowerCase())

  )

  return (

    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-10">

        جستجوی مقالات

      </h1>

      <form>

        <input
          name="q"
          defaultValue={q}
          placeholder="جستجو..."
          className="
            w-full
            border
            border-zinc-300
            dark:border-zinc-700
            rounded-2xl
            px-6
            py-4
            bg-transparent
          "
        />

      </form>

<div className="mt-12 space-y-6">

  {results.map((article) => (

    <Link
      key={article.slug}
      href={`/articles/${article.slug}`}
      className="block border rounded-3xl p-6 hover:border-green-600 transition"
    >

      <h2 className="text-2xl font-black">
        {article.title}
      </h2>

      <p className="mt-3 text-zinc-500">
        {article.desc}
      </p>

    </Link>

  ))}

  {results.length === 0 && (

    <div className="text-center py-20">

      <h2 className="text-3xl font-black mb-4">
        هیچ مقاله‌ای پیدا نشد
      </h2>

      <p className="text-zinc-500">
        عبارت دیگری را جستجو کنید
      </p>

    </div>

  )}

</div>

    </main>

  )
}