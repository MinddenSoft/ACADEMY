import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react'
import { levelConfig } from '../data/modules'

export default function ModuleCard({ module }) {
  const [isOpen, setIsOpen] = useState(false)
  const cfg = levelConfig[module.levelKey]

  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white dark:bg-dark-800 border-emerald-500/20 shadow-lg shadow-emerald-500/5 dark:shadow-none' : 'bg-white dark:bg-dark-800/50 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 shadow-sm dark:shadow-none'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${cfg.color} flex items-center justify-center text-white shadow-lg`}>
            <module.icon size={24} />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="font-display font-bold text-lg lg:text-xl text-slate-900 dark:text-white leading-tight">{module.title}</h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold border ${cfg.bg}`}>
                {module.level}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-500">{module.duration}</span>
            </div>
          </div>
        </div>
        <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-emerald-500/20 dark:bg-emerald-500/20 rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </div>
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
          <p className="ml-16 text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
            <span className="text-emerald-500 dark:text-emerald-400 font-semibold">Objetivo:</span> {module.objective}
          </p>

          <div className="ml-16 space-y-5">
            {module.sections.map((section, si) => (
              <div key={si}>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-3 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cfg.color}`} />
                  {section.title}
                </h4>
                <ul className="space-y-2 ml-4">
                  {section.content.split('\n').filter((p) => p.trim() && !p.startsWith('#') && !p.startsWith('**')).slice(0, 3).map((item, ii) => (
                    <li key={ii} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-500/60 dark:text-emerald-500/40 mt-1.5 flex-shrink-0">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                      {item.replace(/^- /, '').replace(/\*\*/g, '')}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="ml-16 mt-8">
            <Link
              to={`/modulo/${module.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-pink-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver temario completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
