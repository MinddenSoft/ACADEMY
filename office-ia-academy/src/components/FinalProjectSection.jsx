import { Link } from 'react-router-dom'
import { Star, BadgeCheck, ArrowRight } from 'lucide-react'

export default function FinalProjectSection() {
  return (
    <section id="proyecto-final" className="relative py-24 lg:py-32 bg-slate-50 dark:bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white dark:bg-gradient-to-br dark:from-dark-800 dark:to-dark-900 border border-slate-200 dark:border-white/10 overflow-hidden glow-cyan shadow-xl dark:shadow-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500" />

          <div className="p-8 sm:p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
              <div className="lg:flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 mb-6">
                  <Star className="w-4 h-4 text-cyan-500 dark:text-cyan-400 fill-current" />
                  <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Proyecto Final de Certificación</span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
                  Sistema de Oficina <span className="gradient-text">Inteligente</span>
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  Para demostrar el nivel experto, diseñarás un sistema completo que integra todas las habilidades adquiridas. Todo esto sin haber escrito una sola línea de código de programación.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-500 dark:text-cyan-400 font-bold text-sm">01</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">El Reto</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        Elegir un proceso real de tu trabajo actual (ej. la gestión de facturas, el control de viáticos, o la atención a solicitudes de clientes).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                      <span className="text-violet-500 dark:text-violet-400 font-bold text-sm">02</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">La Solución</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        Crear un asistente personalizado (GPT) cargado con la normativa de la empresa, conectado a un flujo automatizado (Zapier/Make) que reciba la información, la procese con IA, actualice un reporte en Excel y redacte el correo de respuesta de forma autónoma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-80 flex-shrink-0">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 border border-slate-200 dark:border-white/10">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Tecnologías que integrarás</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['ChatGPT / GPTs', 'Zapier / Make', 'Excel / Sheets', 'Canva IA', 'Gamma App', 'HeyGen / Synthesia'].map((tech) => (
                      <div key={tech} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-slate-900 dark:text-white font-semibold text-sm">Certificación Experto</div>
                        <div className="text-slate-500 dark:text-slate-500 text-xs">No-Code Professional</div>
                      </div>
                    </div>
                  </div>
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
    </section>
  )
}
