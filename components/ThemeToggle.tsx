'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() =>
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
      className="w-11 h-11 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:border-green-600 transition"
    >
      {theme === 'dark' ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  )
}