import fs from "fs"
import path from "path"
import matter from "gray-matter"

/* =========================
   PATH
========================= */

const articlesDirectory = path.join(
  process.cwd(),
  "content",
  "articles"
)

/* =========================
   TYPE
========================= */

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

/* =========================
   GET ALL ARTICLES
========================= */

export function getArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory)

  const articles = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(".md", "")
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContent = fs.readFileSync(fullPath, "utf8")

      const { data } = matter(fileContent)

      return {
        slug,
        title: data.title ?? "",
        desc: data.description ?? data.desc ?? "",
        image: data.image ?? "/images/default.jpg",
        category: data.category ?? "بدون دسته",
        categorySlug: data.categorySlug ?? "general",
        date: data.date ?? new Date().toISOString(),
        author: data.author ?? "Fotory",
        featured: Boolean(data.featured),
        hero: Boolean(data.hero),
        views: Number(data.views ?? 0),
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
      }
    })
    .filter((a) => a.title && a.slug)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )

  return articles
}

/* =========================
   FEATURED ARTICLES
========================= */

export function getFeaturedArticles(): Article[] {
  return getArticles().filter((a) => a.featured)
}

/* =========================
   HERO ARTICLE
========================= */

export function getHeroArticles(): Article[] {
  return getArticles().filter((a) => a.hero)
}

/* =========================
   TRENDING ARTICLES
========================= */

export function getTrendingArticles(): Article[] {
  return getArticles()
    .slice()
    .sort((a, b) => (b.views || 0) - (a.views || 0))
}

/* =========================
   CATEGORY FILTER
========================= */

export function getArticlesByCategory(
  categorySlug: string
): Article[] {
  return getArticles().filter(
    (a) => a.categorySlug === categorySlug
  )
}

/* =========================
   SINGLE ARTICLE
========================= */

export function getArticleBySlug(
  slug: string
): Article | undefined {
  return getArticles().find((a) => a.slug === slug)
}

/* =========================
   SEARCH FUNCTION
========================= */

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase()

  return getArticles().filter((a) => {
    return (
      a.title.toLowerCase().includes(q) ||
      a.desc.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      (a.keywords || []).some((k) => k.toLowerCase().includes(q))
    )
  })
}