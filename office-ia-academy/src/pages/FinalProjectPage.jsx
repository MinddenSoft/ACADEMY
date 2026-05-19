import { Link } from 'react-router-dom'
import { ArrowLeft, Star, BadgeCheck, ArrowRight } from 'lucide-react'

export default function FinalProjectPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900">
      <div className="absolute top-0 left-0 right-0 h-96 hero-gradient" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="relative rounded-3xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 overflow-hidden shadow-xl dark:shadow-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500" />

          <div className="p-8 sm:p-10 lg:p-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 mb-6">
              <Star className="w-4 h-4 text-cyan-500 dark:text-cyan-400 fill-current" />
              <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Proyecto Final de Certificación</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              Sistema de Oficina <span className="gradient-text">Inteligente</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              Para demostrar el nivel experto, diseñarás un sistema completo que integra todas las habilidades adquiridas a lo largo del programa. Todo esto sin haber escrito una sola línea de código de programación.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-500 dark:text-cyan-400 font-bold text-sm">01</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">El Reto</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Elegir un proceso real de tu trabajo actual (ej. la gestión de facturas, el control de viáticos, o la atención a solicitudes de clientes).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent border border-violet-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <span className="text-violet-500 dark:text-violet-400 font-bold text-sm">02</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">La Solución</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Crear un asistente personalizado (GPT) cargado con la normativa de la empresa, conectado a un flujo automatizado (Zapier/Make) que reciba la información, la procese con IA, actualice un reporte en Excel y redacte el correo de respuesta de forma autónoma.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/5 p-8 mb-10">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6">Habilidades que demostrarás</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { module: 'Módulo 1', skill: 'Prompt Engineering avanzado para configurar el asistente' },
                  { module: 'Módulo 2', skill: 'Redacción automática de correos de respuesta' },
                  { module: 'Módulo 3', skill: 'Análisis y reporte de datos en Excel automatizado' },
                  { module: 'Módulo 4', skill: 'Flujo de automatización con Zapier/Make + GPT personalizado' },
                  { module: 'Módulo 5', skill: 'Documentación visual del sistema con IA' },
                  { module: 'Módulo 6', skill: 'Auditoría del proceso y cálculo de ROI' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5">
                    <span className="text-xs font-bold text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5">{item.module}</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 border border-cyan-500/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">Certificación Experto No-Code</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Al completar exitosamente el proyecto final, recibirás tu certificación como Profesional Experto en IA aplicada a la gestión administrativa.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
              <Link to="/#temario" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1">
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
