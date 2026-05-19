import { Link } from 'react-router-dom'
import { ArrowLeft, Star, BadgeCheck, ArrowRight } from 'lucide-react'

export default function FinalProjectPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900">
      <div className="absolute top-0 left-0 right-0 h-96 hero-gradient" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="relative rounded-3xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 overflow-hidden shadow-xl dark:shadow-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-pink-500" />

          <div className="p-8 sm:p-10 lg:p-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-pink-500/10 border border-emerald-500/20 mb-6">
              <Star className="w-4 h-4 text-emerald-500 dark:text-emerald-400 fill-current" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Proyecto Final de Certificación</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              Sistema de IA <span className="gradient-text">End-to-End</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              Para demostrar tu nivel experto, diseñarás e implementarás un sistema completo de IA que integre todas las habilidades adquiridas durante el programa.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 dark:text-emerald-400 font-bold text-sm">01</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">El Reto</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Construir una aplicación de IA funcional: un asistente RAG sobre documentación técnica, un clasificador de imágenes, o un sistema de recomendaciones basado en datos reales.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/5 to-transparent border border-pink-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                    <span className="text-pink-500 dark:text-pink-400 font-bold text-sm">02</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">La Solución</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Crearás un pipeline completo: scraping y limpieza de datos, fine-tuning o RAG, implementación de API REST con FastAPI, y despliegue con Docker y GitHub Actions.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/5 p-8 mb-10">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6">Habilidades que demostrarás</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { module: 'Módulo 1', skill: 'Python y Git para proyectos de IA' },
                  { module: 'Módulo 2', skill: 'Manipulación y visualización de datos' },
                  { module: 'Módulo 3', skill: 'Modelos de ML entrenados y evaluados' },
                  { module: 'Módulo 4', skill: 'Redes neuronales con PyTorch' },
                  { module: 'Módulo 5', skill: 'Pipeline RAG con LangChain' },
                  { module: 'Módulo 6', skill: 'API desplegada con Docker y CI/CD' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5">
                    <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5">{item.module}</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-pink-500/5 border border-emerald-500/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">Certificación AI Engineering Professional</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Al completar exitosamente el proyecto final, recibirás tu certificación como AI Engineering Professional.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
              <Link to="/#temario" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-pink-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1">
                Comienza tu formación
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
