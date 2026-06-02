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
  date: string
  author: string
  categorySlug: string
  featured?: boolean
}

export function getArticles(): Article[] {

  const fileNames = fs.readdirSync(
    articlesDirectory
  )

  const articles = fileNames.map((fileName) => {

    const slug = fileName.replace('.md', '')

    const fullPath = path.join(
      articlesDirectory,
      fileName
    )

    const fileContents = fs.readFileSync(
      fullPath,
      'utf8'
    )

    const matterResult = matter(fileContents)

const data = matterResult.data as Omit<Article, 'slug'>

return {
  slug,
  title: data.title,
  desc: data.desc,
  image: data.image,
  category: data.category,
  categorySlug: data.categorySlug,
  date: data.date,
  author: data.author,
  featured: data.featured,
}

  })

  return articles.sort((a, b) =>
    new Date(b.date).getTime() -
    new Date(a.date).getTime()
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
export function getFeaturedArticles() {
  return getArticles().filter(
    (article) => article.featured === true
  )
}