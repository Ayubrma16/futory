import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(
  process.cwd(),
  'content',
  'articles'
)

export type Article = {
  slug: string
  title: string
  desc: string
  image: string
  category: string
  categorySlug: string
  date: string
  author: string
  featured?: boolean
  hero?: boolean
  views?: number
  keywords?: string[]
}

export function getArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory)

  return fileNames
    .filter(f => f.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace('.md', '')
      const fullPath = path.join(articlesDirectory, fileName)
      const file = fs.readFileSync(fullPath, 'utf8')

      const { data } = matter(file)

      return {
        slug,
        title: data.title ?? '',
        desc: data.description ?? data.desc ?? '',
        image: data.image ?? '/images/default.jpg',
        category: data.category ?? 'بدون دسته',
        categorySlug: data.categorySlug ?? 'general',
        date: data.date ?? new Date().toISOString(),
        author: data.author ?? 'Fotury',
        featured: Boolean(data.featured),
        hero: Boolean(data.hero),
        views: Number(data.views ?? 0),
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
      }
    })
    .filter(a => a.title && a.slug) // 🔥 جلوگیری از آیتم خراب
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function getFeaturedArticles() {
  return getArticles().filter(
    (article) => article.featured
  )
}

export function getHeroArticles() {
  return getArticles().filter(
    (article) => article.hero
  )
}

export function getTrendingArticles() {
  return getArticles()
    .slice()
    .sort(
      (a, b) =>
        (b.views || 0) -
        (a.views || 0)
    )
}

export function getArticlesByCategory(
  categorySlug: string
) {
  return getArticles().filter(
    (article) =>
      article.categorySlug === categorySlug
  )
}

export function getArticleBySlug(
  slug: string
) {
  return getArticles().find(
    (article) => article.slug === slug
  )
}