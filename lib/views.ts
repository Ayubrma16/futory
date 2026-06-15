let views: Record<string, number> = {}

export function incrementViews(slug: string) {
  views[slug] = (views[slug] || 0) + 1
}

export function getViews(slug: string) {
  return views[slug] || 0
}