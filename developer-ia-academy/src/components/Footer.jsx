import { Link } from 'react-router-dom'
import { Code2, Mail } from 'lucide-react'

const programLinks = [
  { label: 'Objetivos', to: { pathname: '/', hash: '#objetivos' } },
  { label: 'Temario', to: { pathname: '/', hash: '#temario' } },
  { label: 'Proyecto Final', to: '/proyecto-final' },
]

const moduleLinks = [
  { label: 'Fundamentos de IA', to: '/modulo/fundamentos-ia-herramientas' },
  { label: 'Python y Datos', to: '/modulo/python-datos-visualizacion' },
  { label: 'Machine Learning', to: '/modulo/machine-learning-fundamentos' },
  { label: 'Deep Learning', to: '/modulo/deep-learning-redes-neuronales' },
  { label: 'LLMs e IA Generativa', to: '/modulo/llms-genai-avanzado' },
  { label: 'MLOps y Producción', to: '/modulo/mlops-ingenieria-produccion' },
]

export default function Footer() {
  return (
    <footer className="relative bg-primary-500 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">DevMind Academy</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Formando desarrolladores en Inteligencia Artificial: desde los fundamentos hasta el despliegue de sistemas inteligentes en producción.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Programa</h4>
            <ul className="space-y-3">
              {programLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-white/60 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Módulos</h4>
            <ul className="space-y-3">
              {moduleLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-white/60 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-white/80 shrink-0" />
                <a href="mailto:mbriega@mindden.com" className="text-white/70 hover:text-white transition-colors">mbriega@mindden.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 DevMind Academy. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs uppercase tracking-widest">Crafted by Null Pointer Society</p>
        </div>
      </div>
    </footer>
  )
}
