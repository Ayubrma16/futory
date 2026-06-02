'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <Image
                src="/logo.png"
                alt="Fotury"
                width={45}
                height={45}
              />

              <span className="text-3xl font-black text-zinc-900 dark:text-white">

                Fotury

              </span>

            </div>

            <p className="text-zinc-600 dark:text-zinc-400 leading-8">

              آرشیوی مدرن از تاریخ فوتبال جهان،
              اسطوره‌ها، مسابقات کلاسیک و
              داستان‌هایی که فوتبال را تغییر دادند.

            </p>

          </div>

          {/* CATEGORIES */}

          <div>

            <h3 className="text-xl font-black mb-6 text-zinc-900 dark:text-white">
              دسته‌بندی‌ها
            </h3>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">

              <Link href="/" className="block hover:text-green-700 transition">
                جام جهانی
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                اسطوره‌ها
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                باشگاه‌ها
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                تاکتیک‌ها
              </Link>

            </div>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="text-xl font-black mb-6 text-zinc-900 dark:text-white">
              لینک‌ها
            </h3>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">

              <Link href="/" className="block hover:text-green-700 transition">
                درباره ما
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                تماس با ما
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                قوانین سایت
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                حریم خصوصی
              </Link>

            </div>

          </div>

          {/* SOCIAL */}

          <div>

            <h3 className="text-xl font-black mb-6 text-zinc-900 dark:text-white">
              شبکه‌های اجتماعی
            </h3>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">

              <Link href="/" className="block hover:text-green-700 transition">
                Instagram
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                X / Twitter
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                YouTube
              </Link>

              <Link href="/" className="block hover:text-green-700 transition">
                Telegram
              </Link>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">

            © 2026 Fotury. All rights reserved.

          </p>

          <p className="text-zinc-500 text-sm">

            Designed for football history lovers ⚽

          </p>

        </div>

      </div>

    </footer>
  )
}