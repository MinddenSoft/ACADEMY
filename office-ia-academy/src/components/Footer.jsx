import { Link } from 'react-router-dom'
import { FlaskConical, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">Mindden Academy</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
              Formando profesionales en Inteligencia Artificial aplicada a la gestión administrativa y oficinas modernas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-4 uppercase tracking-wider">Programa</h4>
            <ul className="space-y-3">
              {['Objetivos', 'Temario', 'Proyecto Final', 'Certificación'].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 dark:text-slate-500 text-sm hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-4 uppercase tracking-wider">Módulos</h4>
            <ul className="space-y-3">
              {['Alfabetización Digital', 'Gestión Documental', 'Análisis de Datos', 'Automatización'].map((item) => (
                <li key={item}>
                  <a href="/#temario" className="text-slate-500 dark:text-slate-500 text-sm hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
                <Mail className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                info@mindden.academy
              </li>
              <li className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
                <Globe className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                www.mindden.academy
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-slate-600 text-sm">
            &copy; 2026 Mindden Academy. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {['Privacidad', 'Términos', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-slate-400 dark:text-slate-600 text-sm hover:text-slate-600 dark:hover:text-slate-400 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
