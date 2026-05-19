import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getModuleBySlug, modules, levelConfig } from '../data/modules'
import { renderContent } from '../utils/renderContent'

export default function SectionDetailPage() {
  const { slug, sectionIndex } = useParams()
  const navigate = useNavigate()
  const module = getModuleBySlug(slug)
  const index = parseInt(sectionIndex, 10)

  if (!module || isNaN(index) || index < 0 || index >= module.sections.length) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-dark-900 flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">Contenido no encontrado</h2>
          <Link to="/" className="text-cyan-500 hover:text-cyan-400 font-medium">Volver al inicio</Link>
        </div>
      </div>
    )
  }

  const section = module.sections[index]
  const cfg = levelConfig[module.levelKey]
  const currentIndex = modules.findIndex((m) => m.id === module.id)

  const prevSection = index > 0
    ? { slug: module.slug, index: index - 1, title: module.sections[index - 1].title }
    : null

  const nextSection = index < module.sections.length - 1
    ? { slug: module.slug, index: index + 1, title: module.sections[index + 1].title }
    : null

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900">
      <div className="absolute top-0 left-0 right-0 h-96 hero-gradient" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <button
          onClick={() => navigate(`/modulo/${slug}`)}
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a {module.title}
        </button>

        <div className="flex items-start gap-4 mb-8">
          <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${cfg.color} flex items-center justify-center text-white shadow-lg`}>
            <module.icon size={36} />
          </div>
          <div>
            <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold border ${cfg.bg} mb-2`}>
              M{module.id} · {module.level}
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              {section.title}
            </h1>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 p-8 lg:p-10 mb-10 shadow-sm dark:shadow-none">
          <div className={`h-1 bg-gradient-to-r ${cfg.color} rounded-full mb-8`} />
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {renderContent(section.content, cfg.color)}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 dark:border-white/5">
          {prevSection ? (
            <Link
              to={`/modulo/${prevSection.slug}/${prevSection.index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-all group"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 transition-colors" />
              <div>
                <div className="text-xs text-slate-500">Anterior</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{prevSection.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextSection ? (
            <Link
              to={`/modulo/${nextSection.slug}/${nextSection.index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 hover:border-violet-500/30 transition-all group"
            >
              <div className="text-right">
                <div className="text-xs text-slate-500">Siguiente</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{nextSection.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-violet-500 transition-colors" />
            </Link>
          ) : (
            <Link
              to={`/modulo/${slug}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
            >
              <div className="text-right">
                <div className="text-xs text-white/70">Ver todos</div>
                <div className="text-sm font-semibold">Temario completo</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
