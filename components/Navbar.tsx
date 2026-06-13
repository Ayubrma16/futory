'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { Search } from 'lucide-react'
const navItems = [
  { title: 'خانه', href: '/' },
  { title: 'مقالات', href: '/articles' },
  { title: 'جام جهانی', href: '/world-cup' },
  { title: 'اسطوره‌ها', href: '/legends' },
]

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false)

  return (

    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">

      <div className="max-w-7xl mx-auto px-10 h-22 flex items-center gap-10">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <div className="relative w-12 h-12">

            <Image
  src="/logo.png"
  fill
  sizes="(max-width: 768px) 120px, 180px"
  alt="Logo"
/>

          </div>

          <span className="text-2xl font-black text-zinc-900 dark:text-white">
            تاریخچه فوتبال
          </span>

        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10">

          {navItems.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="font-bold text-zinc-700 dark:text-zinc-200 hover:text-green-700 transition"
            >

              {item.title}

            </Link>

          ))}

        </nav>
<form
  action="/search"
  className="hidden md:block w-full max-w-sm"
>

  <div className="relative">
<input
  type="text"
  name="q"
  placeholder="جستجو..."
  className="
    w-full
    h-11
    rounded-xl
    border
    border-zinc-200
    dark:border-zinc-700
    bg-white
    dark:bg-zinc-900
    pr-4
    pl-20
    text-sm
    focus:border-green-600
    outline-none
    transition
  "
/>

<button
  type="submit"
  className="
    absolute
    left-1
    top-1
    h-9
    px-4
    rounded-lg
    bg-green-600
    hover:bg-green-700
    text-white
    text-sm
    font-bold
  "
>
  جستجو
</button>

  </div>

</form>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">

          {/* THEME TOGGLE */}
          <ThemeToggle />

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-11 h-11 rounded-2xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-white"
          >

            <Menu size={22} />

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (

        <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">

          <div className="px-4 sm:px-6 py-6 flex flex-col gap-5">

            {navItems.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className="font-bold text-zinc-700 dark:text-zinc-200"
              >

                {item.title}

              </Link>

            ))}

          </div>

        </div>

      )}

    </header>

  )
}