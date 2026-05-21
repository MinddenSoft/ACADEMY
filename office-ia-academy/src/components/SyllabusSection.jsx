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
    const base = activeFilter === 'all'
      ? modules
      : activeFilter === 'intermedio'
        ? modules.filter((m) => m.levelKey === 'intermedio' || m.levelKey === 'intermedio-avanzado')
        : modules.filter((m) => m.levelKey === activeFilter)
    return [...base].sort((a, b) => a.id - b.id)
  }

  const filtered = getFilteredModules()

  return (
    <section id="temario" className="relative py-24 lg:py-32 bg-white dark:bg-dark-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-700 text-white dark:bg-primary-300 dark:text-primary-900 text-sm font-semibold mb-4">Plan de Estudios Completo</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-900 dark:text-white mb-4">
            Temario del <span className="gradient-text">Programa</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            8 módulos progresivos diseñados para llevarte desde los fundamentos de la IA hasta la implementación experta de sistemas inteligentes en tu oficina.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                  : 'bg-neutral-50 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:text-primary-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-100 dark:border-white/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {filtered.map((module, i) => {
            const remainder = filtered.length % 3
            const isWide = remainder === 2 && i >= filtered.length - 2
            return (
              <div key={module.id} className={isWide ? 'lg:col-span-3' : 'lg:col-span-2'}>
                <ModuleCard module={module} index={i} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
