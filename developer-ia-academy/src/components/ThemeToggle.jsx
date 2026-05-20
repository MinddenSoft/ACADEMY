import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-lg bg-white/5 dark:bg-white/5 border border-neutral-100 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/10 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-neutral-600 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  )
}
