'use client'

import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { usePathname, useRouter } from 'next/navigation'
const navItems = [
  { title: 'خانه', href: '/' },
  { title: 'مقالات', href: '/articles' },
  { title: 'جام جهانی', href: '/world-cup' },
  { title: 'اسطوره‌ها', href: '/legends' },
]

export default function Navbar() {

const router = useRouter()

const [mobileMenu, setMobileMenu] = useState(false)
const [scrolled, setScrolled] = useState(false)
const [searchOpen, setSearchOpen] = useState(false)

const [searchQuery, setSearchQuery] = useState('')

  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300
        ${scrolled ? 'h-14' : 'h-16'}
        bg-white/60 dark:bg-zinc-950/40
        backdrop-blur-2xl
        border-b border-white/10
      `}>

        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">

          {/* LOGO */}
<Link href="/" className="flex items-center gap-3">

  <div className={`
    relative transition-all duration-300
    ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}
  `}>
    <Image
      src="/logo.png"
      fill
      alt="Futory Logo"
      className="object-contain"
      priority
    />
  </div>

  <div className="flex flex-col leading-tight">
    <span className="font-black text-lg text-zinc-900 dark:text-white">
      Futory
    </span>
    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:block">
      تاریخ فوتبال جهان
    </span>
  </div>

</Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-8 relative">

            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative font-bold text-sm transition
                  ${pathname === item.href
                    ? 'text-green-500'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-green-500'
                  }
                `}
              >
                {item.title}
              </Link>
            ))}

          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">

            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <Search size={18} />
            </button>

            <ThemeToggle />

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden p-2 rounded-xl border border-zinc-200 dark:border-zinc-700"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>

          </div>

        </div>
      </header>

      <div className="h-16" />
	        {searchOpen && (
  <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-start justify-center pt-24">

    <div className="w-full max-w-2xl mx-4 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-5">

      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (!searchQuery.trim()) return

          setSearchOpen(false)

          router.push(
            `/search?q=${encodeURIComponent(searchQuery)}`
          )
        }}
        className="flex items-center gap-3"
      >

        <Search size={18} />

        <input
          autoFocus
          value={searchQuery}
          onChange={(e) =>
            setSearchQuery(e.target.value)
          }
          placeholder="جستجو: مقالات، باشگاه‌ها، اسطوره‌ها..."
          className="
            w-full
            bg-transparent
            outline-none
            text-zinc-900
            dark:text-white
          "
        />

        <button
          type="submit"
          className="
            px-4 py-2
            rounded-xl
            bg-green-600
            hover:bg-green-700
            text-white
            text-sm
            font-bold
            transition
          "
        >
          جستجو
        </button>

        <button
          type="button"
          onClick={() => setSearchOpen(false)}
        >
          <X />
        </button>

      </form>

      <div className="mt-5">

        <div className="text-sm text-zinc-500 mb-3">
          🔥 جستجوهای محبوب
        </div>

        <div className="flex flex-wrap gap-2">

          {[
            'پله',
            'مسی',
            'رونالدو',
            'برزیل ۱۹۷۰',
            'جام جهانی',
          ].map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => {
                setSearchOpen(false)

                router.push(
                  `/search?q=${encodeURIComponent(item)}`
                )
              }}
              className="
                px-3 py-1
                rounded-full
                bg-zinc-100
                dark:bg-zinc-800
                text-sm
                hover:scale-105
                transition
              "
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </div>

  </div>
)}
	        {mobileMenu && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-white/10">

          <div className="p-5 flex flex-col gap-4">

            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="font-bold text-zinc-700 dark:text-zinc-200"
              >
                {item.title}
              </Link>
            ))}

          </div>

        </div>
      )}
    </>
  )
}