'use client'

import { useEffect } from 'react'
import { incrementViews } from '@/lib/views'

export default function ArticleClient({ slug }: { slug: string }) {
  useEffect(() => {
    incrementViews(slug)
  }, [slug])

  return null
}