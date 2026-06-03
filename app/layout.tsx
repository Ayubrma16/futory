import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/providers/theme-provider'

const vazir = Vazirmatn({
  subsets: ['arabic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Futory | تاریخ فوتبال جهان',
    template: '%s | Futory',
  },

  description:
    'مرجع تاریخ فوتبال، جام جهانی، اسطوره‌ها و داستان‌های فراموش‌نشدنی فوتبال',

  metadataBase: new URL(
    'https://Futory.ir'
  ),
}
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Futory",

  url: "https://Futory.ir",

  logo: "https://Futory.ir/logo.png",
}
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: "Futory",
  alternateName: "تاریخچه فوتبال",

  url: "https://Futory.ir",

  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://Futory.ir/search?q={search_term_string}",
    "query-input":
      "required name=search_term_string",
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
    >
	      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteSchema
            ),
          }}
        />
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(
        organizationSchema
      ),
    }}
  />
      </head>
      <body
        className={`${vazir.className} bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >

          <Navbar />

          {children}

          <Footer />

        </ThemeProvider>

      </body>
    </html>
  )
}