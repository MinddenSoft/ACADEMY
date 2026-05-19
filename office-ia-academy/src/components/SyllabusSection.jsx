import { useState } from 'react'
import { modules } from '../data/modules'
import ModuleCard from './ModuleCard'

export default function SyllabusSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'inicial', label: 'Inicial' },
    { id: 'intermedio', label: 'Intermedio' },
    { id: 'avanzado', label: 'Avanzado' },
    { id: 'experto', label: 'Experto' },
  ]

  const getFilteredModules = () => {
    if (activeFilter === 'all') return modules
    const filterMap = {
      inicial: [1],
      intermedio: [2, 3],
      avanzado: [4],
      experto: [5, 6],
    }
    return modules.filter((m) => filterMap[activeFilter]?.includes(m.id))
  }

  return (
    <section id="temario" className="relative py-24 lg:py-32 bg-white dark:bg-dark-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-4 border border-violet-500/20">Plan de Estudios Completo</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            Temario del <span className="gradient-text">Programa</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            6 módulos progresivos diseñados para llevarte desde los conceptos básicos hasta la implementación experta de IA en tu entorno laboral.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {getFilteredModules().map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  )
}
