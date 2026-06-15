import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { getArticles } from '@/lib/articles'
import ArticleClient from '@/components/ArticleClient'
import { getReadingTime } from '@/lib/reading-time'

import {
  toPersianNumber,
  toPersianDate,
} from '@/lib/persian'

/* =========================
   TYPES
========================= */
type Props = {
  params: Promise<{ slug: string }>
}

type Article = {
  title: string
  desc: string
  image: string
  category: string
  categorySlug: string
  date: string
  author: string
  faq?: {
    question: string
    answer: string
  }[]
}

/* =========================
   METADATA (SEO)
========================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { slug } = await params

  const filePath = path.join(
    process.cwd(),
    'content',
    'articles',
    `${slug}.md`
  )

  if (!fs.existsSync(filePath)) {
    return {
      title: 'مقاله پیدا نشد | Futory',
    }
  }

  const file = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(file)

  const article = data as Article

  return {
    title: article.title,
    description: article.desc,
    openGraph: {
      title: article.title,
      description: article.desc,
      images: [article.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.desc,
      images: [article.image],
    },
  }
}

/* =========================
   PAGE
========================= */
export default async function ArticlePage({ params }: Props) {

  const { slug } = await params

  const filePath = path.join(
    process.cwd(),
    'content',
    'articles',
    `${slug}.md`
  )

  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const file = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(file)

  const article = data as Article

  /* Markdown → HTML */
  const processedContent = await remark()
    .use(html)
    .process(content)

  const contentHtml = processedContent.toString()

  /* Reading time */
  const readingTime = getReadingTime(content)

  /* Related articles */
  const articles = getArticles()

  const relatedArticles = articles
    .filter(
      (a) =>
        a.category === article.category &&
        a.slug !== slug
    )
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">

      {/* VIEW COUNTER */}
      <ArticleClient slug={slug} />

      {/* HERO */}
      <section className="relative h-[260px] sm:h-[400px] lg:h-[600px] overflow-hidden">

        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-6 sm:pb-10 lg:pb-16">

            <div className="max-w-3xl">

              <Link
                href={`/articles/category/${article.categorySlug}`}
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold"
              >
                {article.category}
              </Link>

              <h1 className="mt-4 text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
                {article.title}
              </h1>

              <p className="mt-3 text-zinc-200 text-sm sm:text-base lg:text-lg line-clamp-2">
                {article.desc}
              </p>

              <div className="mt-5 text-zinc-300 text-xs sm:text-sm flex flex-wrap gap-3">
                <span>{toPersianDate(article.date)}</span>
                <span>•</span>
                <span>{article.author}</span>
                <span>•</span>
                <span>{toPersianNumber(readingTime)} دقیقه مطالعه</span>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-24">

        <article
          className="
  prose prose-lg lg:prose-xl dark:prose-invert max-w-none
  prose-p:leading-10
  prose-p:text-[17px] sm:prose-p:text-[18px]
  prose-headings:font-black
  prose-headings:leading-tight
  prose-img:rounded-2xl
  prose-p:mb-6
  text-justify
"
          dangerouslySetInnerHTML={{
            __html: contentHtml,
          }}
        />

      </section>

      {/* FAQ */}
      {article.faq && article.faq.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14 lg:pb-20">

          <h2 className="text-2xl sm:text-3xl font-black mb-6">
            سوالات متداول
          </h2>

          <div className="space-y-4">

            {article.faq.map((item, i) => (
              <div
                key={i}
                className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5"
              >
                <h3 className="font-bold mb-2">
                  {item.question}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 leading-8">
                  {item.answer}
                </p>
              </div>
            ))}

          </div>

        </section>
      )}

      {/* RELATED */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-zinc-200 dark:border-zinc-800 py-16 lg:py-24">

          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-10">
              مقالات مرتبط
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

              {relatedArticles.map((item) => (
                <Link key={item.slug} href={`/articles/${item.slug}`}>

                  <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-lg transition">

                    <div className="relative h-44 sm:h-52">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-5 sm:p-6">

                      <h3 className="font-black text-lg sm:text-xl leading-7">
                        {item.title}
                      </h3>

                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-3 line-clamp-2">
                        {item.desc}
                      </p>

                    </div>

                  </article>

                </Link>
              ))}

            </div>

          </div>

        </section>
      )}

    </main>
  )
}