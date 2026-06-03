import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET() {

  const articlesDirectory = path.join(
    process.cwd(),
    'content',
    'articles'
  )

  const files = fs.readdirSync(
    articlesDirectory
  )

  const articles = files.map((file) => {

    const slug = file.replace('.md', '')

    const filePath = path.join(
      articlesDirectory,
      file
    )

    const fileContents =
      fs.readFileSync(filePath, 'utf8')

    const { data } =
      matter(fileContents)

    return {
      slug,
      title: data.title || '',
      desc: data.desc || '',
      date: data.date || '',
    }

  })

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>

<title>futory</title>

<link>https://futory.com</link>

<description>
تاریخ فوتبال جهان
</description>

${articles
  .map(
    (article) => `
<item>

<title>
${article.title}
</title>

<link>
https://futory.com/articles/${article.slug}
</link>

<description>
${article.desc}
</description>

<pubDate>
${new Date(article.date).toUTCString()}
</pubDate>

</item>
`
  )
  .join('')}

</channel>

</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type':
        'application/xml',
    },
  })

}