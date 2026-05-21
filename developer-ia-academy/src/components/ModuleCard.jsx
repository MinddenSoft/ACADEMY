import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { levelConfig } from '../data/modules'

const gradients = [
  'from-accent-400 to-primary-500',
  'from-accent-400 to-primary-600',
  'from-accent-400 to-primary-700',
  'from-accent-500 to-primary-700',
  'from-accent-500 to-primary-800',
  'from-accent-600 to-primary-900',
]

export default function ModuleCard({ module, index }) {
  const cfg = levelConfig[module.levelKey]
  const gradient = gradients[index % gradients.length]

  return (
    <Link
      to={`/modulo/${module.slug}`}
      className={`group relative flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} p-6 min-h-[210px] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300`}
    >
      <div className="absolute -top-4 -right-4 text-white/10 pointer-events-none">
        <module.icon size={130} strokeWidth={1} />
      </div>

      <span className="inline-flex self-start px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
        {module.level}
      </span>

      <div className="mt-auto pt-6 relative z-10">
        <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Módulo {module.id}</p>
        <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">{module.title}</h3>
        <p className="text-white/55 text-xs">{module.duration} · {module.sections.length} secciones</p>
      </div>

      <div className="flex items-center gap-1.5 mt-5 text-white/65 text-sm font-medium group-hover:text-white transition-colors relative z-10">
        Ver módulo
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  )
}
