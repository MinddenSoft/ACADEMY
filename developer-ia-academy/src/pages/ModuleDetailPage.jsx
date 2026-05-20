import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { getModuleBySlug, modules, levelConfig } from '../data/modules'
import { getContentPreview } from '../utils/renderContent'

export default function ModuleDetailPage() {
  const { slug } = useParams()
  const module = getModuleBySlug(slug)

  if (!module) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-dark-900 flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-display font-bold text-2xl text-primary-900 dark:text-white mb-4">Módulo no encontrado</h2>
          <Link to="/" className="text-primary-500 hover:text-primary-400 font-medium">Volver al inicio</Link>
        </div>
      </div>
    )
  }

  const cfg = levelConfig[module.levelKey]
  const currentIndex = modules.findIndex((m) => m.id === module.id)
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark-900">
      <div className="absolute top-0 left-0 right-0 h-96 hero-gradient" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="flex items-start gap-4 mb-8">
          <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${cfg.color} flex items-center justify-center text-white shadow-lg`}>
            <module.icon size={36} />
          </div>
          <div>
            <span className={`inline-block px-3 py-1 rounded text-xs font-semibold border ${cfg.bg} mb-2`}>
              {module.level}
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              M{module.id}. {module.title}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm">
            <span className="text-neutral-300">Duración:</span> {module.duration}
          </div>
          <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm">
            <span className="text-neutral-300">Lecciones:</span> {module.sections.length}
          </div>
        </div>

        <div className="rounded-xl bg-white dark:bg-dark-800 border border-neutral-100 dark:border-white/5 p-8 lg:p-10 mb-10 shadow-sm dark:shadow-none">
          <h3 className="font-display font-bold text-lg text-primary-900 dark:text-white mb-3">Objetivo del módulo</h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{module.objective}</p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">{module.description}</p>
        </div>

        <div className="space-y-6">
          {module.sections.map((section, si) => (
            <div key={si} className="rounded-xl bg-white dark:bg-dark-800 border border-neutral-100 dark:border-white/5 overflow-hidden shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-white/5 transition-shadow">
              <div className={`h-1 bg-gradient-to-r ${cfg.color}`} />
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-bold text-lg text-primary-900 dark:text-white flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {si + 1}
                      </span>
                      {section.title}
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {getContentPreview(section.content)}
                    </p>
                  </div>
                  <Link
                    to={`/modulo/${slug}/${si}`}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-all"
                  >
                    Ver temario
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-100 dark:border-white/5">
          {prevModule ? (
            <Link
              to={`/modulo/${prevModule.slug}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-dark-800 border border-neutral-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-800 transition-all group"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 transition-colors" />
              <div>
                <div className="text-xs text-neutral-500">Anterior</div>
                <div className="text-sm font-semibold text-primary-900 dark:text-white">M{prevModule.id}. {prevModule.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextModule ? (
            <Link
              to={`/modulo/${nextModule.slug}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-dark-800 border border-neutral-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-800 transition-all group"
            >
              <div className="text-right">
                <div className="text-xs text-neutral-500">Siguiente</div>
                <div className="text-sm font-semibold text-primary-900 dark:text-white">M{nextModule.id}. {nextModule.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 transition-colors" />
            </Link>
          ) : (
            <Link
              to="/proyecto-final"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-all group shadow-sm"
            >
              <div className="text-right">
                <div className="text-xs text-white/70">Siguiente</div>
                <div className="text-sm font-semibold">Proyecto Final</div>
              </div>
              <Sparkles className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
