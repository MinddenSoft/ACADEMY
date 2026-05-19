import { GraduationCap, Zap, BarChart3, ShieldCheck } from 'lucide-react'

export default function ObjectivesSection() {
  const objectives = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: 'Aprender desde Cero',
      desc: 'No se requieren conocimientos previos de programación. El programa comienza desde los fundamentos de la IA.',
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Automatizar Procesos',
      desc: 'Elimina tareas repetitivas y ahorra horas de trabajo semanal con flujos automatizados inteligentes.',
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: 'Analizar Datos',
      desc: 'Convierte hojas de cálculo en insights accionables con IA, sin necesidad de ser experto en Excel.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: 'Liderar el Cambio',
      desc: 'Conviértete en el referente de IA de tu empresa, capaz de auditar procesos y guiar a tu equipo.',
    },
  ]

  return (
    <section id="objetivos" className="relative py-24 lg:py-32 bg-slate-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold mb-4 border border-cyan-500/20">Objetivos del Programa</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            ¿Qué vas a <span className="gradient-text">lograr</span>?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Al finalizar este programa, serás capaz de transformar completamente la forma en que trabajas y gestionas la información en tu entorno profesional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white dark:bg-dark-800/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:-translate-y-1 card-hover shadow-sm dark:shadow-none">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-cyan-500 dark:text-cyan-400 mb-5 group-hover:from-cyan-500/30 group-hover:to-violet-500/30 transition-all">
                {obj.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">{obj.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
