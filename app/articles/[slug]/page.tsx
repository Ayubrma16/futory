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
import { getReadingTime } from '@/lib/reading-time'
import { FAQSchema } from "@/components/seo/FAQSchema";
import {
  toPersianNumber,
  toPersianDate,
} from '@/lib/persian'
type Props = {
params: Promise<{
slug: string
}>
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
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params

  const fullPath = path.join(
    process.cwd(),
    'content',
    'articles',
    slug + '.md'
  )

  if (!fs.existsSync(fullPath)) {
    return {
      title: 'مقاله پیدا نشد | futory',
    }
  }

  const fileContents = fs.readFileSync(
    fullPath,
    'utf8'
  )

  const matterResult = matter(fileContents)

const article = matterResult.data as Article
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

export default async function ArticlePage({
params,
}: Props) {

const { slug } = await params

const fullPath = path.join(
process.cwd(),
'content',
'articles',
slug + '.md'
)

if (!fs.existsSync(fullPath)) {
notFound()
}

const fileContents = fs.readFileSync(
  fullPath,
  'utf8'
)

const matterResult = matter(fileContents)

const processedContent = await remark()
  .use(html)
  .process(matterResult.content)

const article = matterResult.data as Article

const contentHtml =
  processedContent.toString()

const readingTime =
  getReadingTime(
    matterResult.content
  )

const relatedArticles = getArticles()
  .filter(
    (item) =>
      item.category === article.category &&
      item.slug !== slug
  )
  .slice(0, 3)

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://futory.ir";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.desc,
  image: article.image.startsWith("http")
    ? article.image
    : `${siteUrl}${article.image}`,
  author: {
    "@type": "Person",
    name: article.author,
  },
  datePublished: article.date,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}/articles/${slug}`,
  },
}
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "خانه",
      item: "https://futory.ir",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "مقالات",
      item: "https://futory.ir/articles",
    },

    {
      "@type": "ListItem",
      position: 3,
      name: article.category,
      item: `https://futory.ir/articles/category/${article.categorySlug}`,
    },

    {
      "@type": "ListItem",
      position: 4,
      name: article.title,
      item: `https://futory.ir/articles/${slug}`,
    },
  ],
}
return (
  <>
    {article.faq && article.faq.length > 0 && (
      <FAQSchema items={article.faq} />
    )}

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          breadcrumbSchema
        ),
      }}
    />

    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
  {/* HERO */}
  <section className="relative h-[320px] sm:h-[420px] lg:h-[620px] overflow-hidden">

<Image
  src={article.image}
  alt={article.title}
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>

    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 h-full flex items-end">

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pb-10 lg:pb-20">

<div className="max-w-4xl">

  {/* BREADCRUMB */}

  <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-200 mb-6">

    <Link href="/">
      خانه
    </Link>

    <span>/</span>

    <Link href="/articles">
      مقالات
    </Link>

    <span>/</span>

    <Link
      href={`/articles/category/${article.categorySlug}`}
    >
      {article.category}
    </Link>

  </div>

  {/* CATEGORY */}

  <Link
    href={`/articles/category/${article.categorySlug}`}
    className="inline-flex items-center bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-green-700 transition"
  >
    {article.category}
  </Link>

  {/* TITLE */}

  <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white">

    {article.title}

  </h1>

  {/* DATE */}
<div className="mt-6 flex items-center gap-3 text-zinc-200">
  <span>•</span>

  <Link
    href={`/author/${article.author.toLowerCase()}`}
    className="hover:text-green-400 transition"
  >
    {article.author}
  </Link>

</div>
<div className="mt-6 text-zinc-200 text-sm lg:text-lg flex items-center gap-3">

  <span>
    {toPersianDate(article.date)}
  </span>

  <span>•</span>

<span>
  {toPersianNumber(readingTime)} دقیقه مطالعه
</span>

</div>


          <div className="mt-6 text-zinc-200 text-sm lg:text-lg">


          </div>

        </div>

      </div>

    </div>

  </section>

  {/* ARTICLE CONTENT */}
  <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 lg:py-24">

    <article
      className="
        prose
        prose-lg
        lg:prose-xl
        dark:prose-invert
        max-w-none
        prose-headings:font-black
        prose-p:leading-9
        prose-p:text-zinc-700
        dark:prose-p:text-zinc-300
        prose-img:rounded-3xl
      "
      dangerouslySetInnerHTML={{
        __html: contentHtml,
      }}
    />

  </section>
{article.faq && article.faq.length > 0 && (
  <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
    <h2 className="text-3xl font-black mb-8">
      سوالات متداول
    </h2>

    <div className="space-y-4">
      {article.faq.map((item, index) => (
        <div
          key={index}
          className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6"
        >
          <h3 className="font-bold text-lg mb-3">
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
  {/* RELATED ARTICLES */}
  {relatedArticles.length > 0 && (

    <section className="border-t border-zinc-200 dark:border-zinc-800 py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-14">

          <h2 className="text-4xl font-black">

            مقالات مرتبط

          </h2>

          <p className="text-zinc-500 mt-4">

            مطالب پیشنهادی بر اساس این مقاله

          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {relatedArticles.map((item) => (

            <Link
              key={item.slug}
              href={`/articles/${item.slug}`}
              className="group block"
            >

              <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-green-600 rounded-[32px] overflow-hidden transition duration-300 h-full">

                <div className="relative h-60 overflow-hidden">

                  <Image
  src={item.image}
  alt={item.title}
  fill
  sizes="(max-width:768px) 100vw, 33vw"
  className="object-cover group-hover:scale-105 transition duration-500"
/>

                </div>

                <div className="p-8">

                  <div className="text-sm text-zinc-500 mb-4">

                    {item.date}

                  </div>

                  <h3 className="text-2xl font-black leading-tight group-hover:text-green-700 transition">

                    {item.title}

                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-8 mt-5">

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
  </>
)
}