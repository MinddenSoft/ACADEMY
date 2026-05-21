import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-blue-400/15 rounded-full" />
        <div className="absolute top-1/3 -right-8 w-44 h-44 bg-blue-400/12 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span className="text-sm font-medium text-neutral-300">Programa de Formación 2026</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-5xl mx-auto tracking-tight">
          Programa Experto en{' '}
          <span className="gradient-text">Inteligencia Artificial</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-300 font-light">Para Desarrolladores</span>
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Domina el stack completo de IA: desde Python y Machine Learning hasta LLMs, RAG y MLOps. Construye sistemas inteligentes, sin quedarte en la superficie.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/#temario" className="group px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold text-lg hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30">
            Explorar Temario
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/#objetivos" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
            Conocer Objetivos
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '6', label: 'Módulos' },
            { value: '18+', label: 'Lecciones' },
            { value: '4', label: 'Lenguajes' },
            { value: '1', label: 'Proyecto Final' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl gradient-text">{stat.value}</div>
              <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neutral-500" />
      </div>
    </section>
  )
}
