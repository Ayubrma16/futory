import Link from 'next/link'
import { getArticles } from '@/lib/articles'

type Props = {
  params: Promise<{
    author: string
  }>
}

export default async function AuthorPage({
  params,
}: Props) {

  const { author } = await params

  const articles = getArticles().filter(
    (article) =>
      article.author.toLowerCase() === author
  )

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-4">
        {author}
      </h1>

      <p className="text-zinc-500 mb-12">
        تمامی مقالات این نویسنده
      </p>

      <div className="space-y-6">

        {articles.map((article) => (

          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-green-600 transition"
          >

            <h2 className="text-2xl font-black">
              {article.title}
            </h2>

            <p className="text-zinc-500 mt-3">
              {article.desc}
            </p>

          </Link>

        ))}

      </div>

    </main>
  )
}