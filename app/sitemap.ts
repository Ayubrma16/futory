import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {

  const articlesDirectory = path.join(
    process.cwd(),
    'content',
    'articles'
  )

  const files = fs.readdirSync(
    articlesDirectory
  )

  const articleUrls = files.map((file) => {

    const slug = file.replace('.md', '')

return {
  url: `https://futory.ir/articles/${slug}`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.8,
}

  })

  return [

    {
      url: 'https://futory.ir',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },

    {
      url: 'https://futory.ir/articles',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },

    ...articleUrls,

  ]

}