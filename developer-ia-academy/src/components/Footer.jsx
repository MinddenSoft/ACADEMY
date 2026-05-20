import { Link } from 'react-router-dom'
import { Code2, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-primary-500 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
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
              {['Objetivos', 'Temario', 'Proyecto Final', 'Certificación'].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Módulos</h4>
            <ul className="space-y-3">
              {['Fundamentos', 'Python y Datos', 'Machine Learning', 'Deep Learning'].map((item) => (
                <li key={item}>
                  <a href="/#temario" className="text-white/60 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-white/80" />
                info@devmind.academy
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Globe className="w-4 h-4 text-white/80" />
                www.devmind.academy
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 DevMind Academy. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {['Privacidad', 'Términos', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-white/50 text-sm hover:text-white/70 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
