import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Script from 'next/script'

const vazir = Vazirmatn({
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Futory | تاریخ فوتبال جهان',
    template: '%s | Futory',
  },
  description:
    'مرجع تاریخ فوتبال، جام جهانی، اسطوره‌ها و داستان‌های فراموش‌نشدنی فوتبال',

  metadataBase: new URL('https://futory.ir'),

  openGraph: {
    title: 'Futory | تاریخ فوتبال جهان',
    description:
      'مرجع تاریخ فوتبال، جام جهانی، اسطوره‌ها و داستان‌های فراموش‌نشدنی فوتبال',
    url: 'https://futory.ir',
    siteName: 'Futory',
    locale: 'fa_IR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Futory',
    description: 'تاریخ فوتبال جهان',
  },

  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Futory',
  url: 'https://futory.ir',
  logo: 'https://futory.ir/logo.png',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Futory',
  alternateName: 'تاریخچه فوتبال',
  url: 'https://futory.ir',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://futory.ir/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazir.className} bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        {/* SEO JSON-LD (safe for SSR + client) */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  )
}