import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(
  process.cwd(),
  'content/articles'
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
  views?: number
}

export function getArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory)

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '') // ✅ FIXED

    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    const data = matterResult.data as Omit<Article, 'slug'>

    return {
      slug,
      title: data.title,
      desc: data.desc,
      image: data.image,
      category: data.category,
      categorySlug: data.categorySlug,
      date: data.date || new Date().toISOString(),
      author: data.author,
      featured: data.featured || false,
      views: data.views || 0,
    }
  })

  return articles.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )
}

export function getTrendingArticles(): Article[] {
  return getArticles()
    .slice()
    .sort((a, b) => (b.views || 0) - (a.views || 0))
}

export function getArticlesByCategory(categorySlug: string) {
  return getArticles().filter(
    (article) => article.categorySlug === categorySlug
  )
}

export function getFeaturedArticles() {
  return getArticles().filter(
    (article) => article.featured === true
  )
}