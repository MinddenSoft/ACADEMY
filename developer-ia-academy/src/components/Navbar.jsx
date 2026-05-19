import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Code2, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/#objetivos', label: 'Objetivos' },
    { href: '/#temario', label: 'Temario' },
    { href: '/proyecto-final', label: 'Proyecto Final' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-dark-900/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-slate-200 dark:border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-pink-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">DevMind Academy</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <ThemeToggle />
            <Link to="/#temario" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-pink-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5">
              Ver Temario
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-slate-200 dark:border-white/10 pt-4">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium">
                  {link.label}
                </Link>
              ))}
              <Link to="/#temario" onClick={() => setMobileOpen(false)} className="mx-4 mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-pink-500 text-white text-center font-semibold">
                Ver Temario
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
