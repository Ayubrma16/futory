import { getArticles } from '@/data/articles'

export function getTrendingArticles(limit = 10) {
  const articles = getArticles()

  // فرض: هر مقاله view دارد
  // اگر نداری، فعلاً fake می‌زنیم

  const withViews = articles.map((a) => ({
    ...a,
    views: a.views || Math.floor(Math.random() * 1000),
  }))

  return withViews
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}