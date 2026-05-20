import { Link } from 'react-router-dom'
import { Star, BadgeCheck, ArrowRight } from 'lucide-react'

export default function FinalProjectSection() {
  return (
    <section id="proyecto-final" className="relative py-24 lg:py-32 bg-neutral-50 dark:bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-300/10 via-primary-500/10 to-primary-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white dark:bg-gradient-to-br dark:from-dark-800 dark:to-dark-900 border border-neutral-100 dark:border-white/10 overflow-hidden glow-primary shadow-xl dark:shadow-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 via-primary-500 to-primary-700" />

          <div className="p-8 sm:p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
              <div className="lg:flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-700 dark:bg-primary-300 mb-6">
                  <Star className="w-4 h-4 text-white dark:text-primary-900 fill-current" />
                  <span className="text-sm font-semibold text-white dark:text-primary-900">Proyecto Final de Certificación</span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 dark:text-white mb-4">
                  Sistema de IA <span className="gradient-text">End-to-End</span>
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 leading-relaxed">
                  Para demostrar tu nivel experto, diseñarás e implementarás un sistema completo de IA que integre todas las habilidades adquiridas durante el programa.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-500/10 dark:bg-accent-500/20 border border-accent-500/30 dark:border-accent-500/30 flex items-center justify-center">
                      <span className="text-accent-500 dark:text-accent-400 font-bold text-sm">01</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 dark:text-white mb-1">El Reto</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        Construir una aplicación de IA funcional que resuelva un problema real: un asistente RAG sobre documentación técnica, un clasificador de imágenes, o un sistema de recomendaciones.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-500/10 dark:bg-accent-500/20 border border-accent-500/30 dark:border-accent-500/30 flex items-center justify-center">
                      <span className="text-accent-500 dark:text-accent-400 font-bold text-sm">02</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 dark:text-white mb-1">La Solución</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        Crearás un pipeline completo: recolección y limpieza de datos, entrenamiento o fine-tuning del modelo, implementación de una API REST, y despliegue con Docker y CI/CD.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-80 flex-shrink-0">
                <div className="p-6 rounded-xl bg-primary-50/50 dark:bg-primary-900/20 border border-neutral-100 dark:border-white/10">
                  <h4 className="font-semibold text-primary-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Tecnologías que dominarás</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Python', 'PyTorch / TF', 'LangChain', 'FastAPI', 'Docker', 'GitHub Actions'].map((tech) => (
                      <div key={tech} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/5 text-neutral-700 dark:text-neutral-300 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-primary-900 dark:text-white font-semibold text-sm">Certificación Experto</div>
                        <div className="text-neutral-500 dark:text-neutral-500 text-xs">AI Engineering Professional</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-100 dark:border-white/5 text-center">
              <Link to="/#temario" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold text-lg hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                Comienza tu formación
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
