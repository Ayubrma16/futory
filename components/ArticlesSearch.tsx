'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Article = {
  slug: string
  title: string
  desc?: string
  category?: string
  image: string
}

export default function ArticlesSearch({
  articles,
}: {
  articles: Article[]
}) {
  const [query, setQuery] = useState('')

  const q = query.toLowerCase().trim()

  const results = articles.filter((article) => {
    return (
      (article.title || '').toLowerCase().includes(q) ||
      (article.desc || '').toLowerCase().includes(q) ||
      (article.category || '').toLowerCase().includes(q)
    )
  })

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="جستجو مقاله..."
        className="w-full p-4 border rounded-xl mb-10"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="border rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="font-bold">{article.title}</h2>

              <p className="text-sm text-zinc-500 mt-2">
                {article.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <p className="text-center text-zinc-500 mt-10">
          مقاله‌ای پیدا نشد
        </p>
      )}
    </div>
  )
}