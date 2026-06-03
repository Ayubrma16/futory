import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

  return {

    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap:
      'https://futory.ir/sitemap.xml',

    host:
      'https://futory.ir/',

  }

}