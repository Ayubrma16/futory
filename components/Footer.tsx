'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, ChevronLeft } from 'lucide-react'

import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaTelegram,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-black border-t border-zinc-200 dark:border-zinc-800">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* NEWSLETTER */}
        <section className="relative overflow-hidden rounded-3xl mt-16 mb-24 p-10 md:p-14 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-[1.01] transition">

          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

          <div className="relative z-10 max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 mb-6">
              <Mail size={16} />
              Newsletter Fotury
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4 text-zinc-900 dark:text-white">
              فوتبال را حرفه‌ای دنبال کن
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-8">
              جدیدترین تحلیل‌ها، تاریخچه‌ها و داستان‌های فوتبالی هر هفته.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="ایمیل شما..."
                className="flex-1 h-14 px-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none"
              />

              <button className="h-14 px-8 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold transition hover:scale-105">
                عضویت
              </button>

            </div>

          </div>

        </section>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* BRAND */}
          <div className="hover:-translate-y-1 transition">

            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Fotury" width={52} height={52} />
              <span className="text-3xl font-black text-zinc-900 dark:text-white">
                Fotury
              </span>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 leading-8">
              آرشیوی مدرن از تاریخ فوتبال جهان، اسطوره‌ها و لحظات ماندگار.
            </p>

          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-xl font-black mb-6">دسته‌بندی‌ها</h3>

            <div className="space-y-4">

              {['جام جهانی','اسطوره‌ها','باشگاه‌ها','تاکتیک‌ها'].map(item => (
                <Link
                  key={item}
                  href="/"
                  className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-green-600 transition"
                >
                  <ChevronLeft
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition"
                  />
                  <span className="relative">
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              ))}

            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xl font-black mb-6">لینک‌ها</h3>

            <div className="space-y-4">

              {['درباره ما','تماس','قوانین','حریم خصوصی'].map(item => (
                <Link
                  key={item}
                  href="/"
                  className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-green-600 transition"
                >
                  <ChevronLeft size={16} className="opacity-0 group-hover:opacity-100 transition" />
                  <span className="relative">
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              ))}

            </div>
          </div>

          {/* SOCIAL */}
          <div>

            <h3 className="text-xl font-black mb-6">شبکه‌های اجتماعی</h3>

            <div className="space-y-5">

              <Link href="/" className="flex items-center gap-3 hover:translate-x-1 transition">
                <FaInstagram className="hover:scale-110 transition" />
                Instagram
              </Link>

              <Link href="/" className="flex items-center gap-3 hover:translate-x-1 transition">
                <FaXTwitter className="hover:scale-110 transition" />
                X / Twitter
              </Link>

              <Link href="/" className="flex items-center gap-3 hover:translate-x-1 transition">
                <FaYoutube className="hover:scale-110 transition" />
                YouTube
              </Link>

              <Link href="/" className="flex items-center gap-3 hover:translate-x-1 transition">
                <FaTelegram className="hover:scale-110 transition" />
                Telegram
              </Link>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 Fotury. All rights reserved.
          </p>

          <p className="text-zinc-500 text-sm">
            Built for football history lovers ⚽
          </p>

        </div>

      </div>
    </footer>
  )
}