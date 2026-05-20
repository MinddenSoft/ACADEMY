import { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Clock, HelpCircle, Lightbulb, Check, Terminal, Copy, X, RefreshCw, Award, ArrowLeft, BookOpen, GraduationCap, Target, Layers, Zap, Compass } from 'lucide-react'
import { getModuleBySlug, levelConfig } from '../data/modules'
import { parseContent, renderItem, CodeBlock } from '../utils/renderInteractiveContent'

const cardIconColor = { bg: 'bg-primary-50 dark:bg-primary-900/30', text: 'text-primary-600 dark:text-primary-400' }
const cardIconComponents = [BookOpen, Lightbulb, Target, Layers, Zap, Compass]

export default function SectionDetailPage() {
  const { slug, sectionIndex } = useParams()
  const [activeTabId, setActiveTabId] = useState('contenido')
  useEffect(() => { setActiveTabId('contenido') }, [sectionIndex])
  const module = getModuleBySlug(slug)
  const index = parseInt(sectionIndex, 10)

  if (!module || isNaN(index) || index < 0 || index >= module.sections.length) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-dark-900 flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-display font-bold text-2xl text-primary-900 dark:text-white mb-4">Contenido no encontrado</h2>
          <Link to="/" className="text-primary-500 hover:text-primary-400 font-medium">Volver al inicio</Link>
        </div>
      </div>
    )
  }

  const section = module.sections[index]
  const cfg = levelConfig[module.levelKey]
  const { sections, quiz } = useMemo(() => parseContent(section.content), [section.content])
  const hasQuiz = quiz && quiz.length > 0

  const conceptSections = useMemo(() =>
    sections.filter(s =>
      !/ejercicio/i.test(s.heading) &&
      !/cuestionario/i.test(s.heading) &&
      s.heading !== 'Introducción' &&
      s.items.length > 0
    ), [sections]
  )

  const exerciseBlocks = useMemo(() => {
    const exerciseSections = sections.filter(s => /ejercicio/i.test(s.heading))
    if (exerciseSections.length > 0) {
      return exerciseSections.map(s => ({ ...s, exType: 'section' }))
    }
    const blocks = []
    sections.forEach(s => {
      s.items.forEach(item => {
        if (item.type === 'code') blocks.push({ text: item.text, context: s.heading, exType: 'code' })
      })
    })
    return blocks
  }, [sections])

  const tabs = [
    { id: 'contenido', label: 'Contenido', icon: Lightbulb },
    ...(exerciseBlocks.length > 0 ? [{ id: 'ejercicios', label: 'Ejercicios', icon: Terminal }] : []),
    ...(hasQuiz ? [{ id: 'cuestionario', label: 'Cuestionario', icon: HelpCircle }] : []),
  ]

  const prevSection = index > 0
    ? { slug: module.slug, index: index - 1, title: module.sections[index - 1].title }
    : null
  const nextSection = index < module.sections.length - 1
    ? { slug: module.slug, index: index + 1, title: module.sections[index + 1].title }
    : null

  const firstText = section.content.split('\n').find(l => l.trim() && !l.startsWith('**') && !l.startsWith('-') && !l.startsWith('>'))?.trim() || ''
  const activeTabIndex = tabs.findIndex(t => t.id === activeTabId)

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-64 hero-gradient pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

        {/* BACK NAV */}
        <Link
          to={`/modulo/${module.slug}`}
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-5 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al módulo
        </Link>

        {/* HERO */}
        <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl px-8 py-7 mb-5 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 left-[45%] w-60 h-60 rounded-full bg-white/[0.03]" />
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 text-primary-300 text-[11px] font-mono tracking-wider px-3 py-1 rounded-full mb-3">
            <GraduationCap className="w-3 h-3" />
            MÓDULO {module.id}.{index + 1}
          </div>
          <h1 className="font-display font-bold text-2xl text-white leading-tight mb-2">{section.title}</h1>
          <p className="text-sm text-primary-300 leading-relaxed max-w-[500px]">{firstText}</p>
          <div className="flex gap-6 mt-5 pt-5 border-t border-white/10 flex-wrap">
            <span className="text-xs text-primary-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {module.duration}
            </span>
            <span className="text-xs text-primary-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> {tabs.length} secciones
            </span>
            {hasQuiz && (
              <span className="text-xs text-primary-400 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" /> {quiz.length} preguntas
              </span>
            )}
          </div>
          <div className="h-[3px] bg-white/10 rounded-full mt-4">
            <div
              className="h-[3px] bg-accent-400 rounded-full transition-all duration-400"
              style={{ width: `${((activeTabIndex + 1) / tabs.length) * 100}%` }}
            />
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-1.5 mb-5 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-sm rounded-full border transition-all duration-200 ${
                activeTabId === tab.id
                  ? 'bg-primary-500 text-white border-primary-500 shadow-sm'
                  : 'bg-white dark:bg-dark-800 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {activeTabId === 'contenido' && (
          <ContenidoTab sections={conceptSections} cfg={cfg} />
        )}
        {activeTabId === 'ejercicios' && exerciseBlocks.length > 0 && (
          <EjerciciosTab blocks={exerciseBlocks} cfg={cfg} />
        )}
        {activeTabId === 'cuestionario' && hasQuiz && (
          <QuizTab questions={quiz} />
        )}

        {/* NAV */}
        <div className="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-neutral-100 dark:border-white/5 flex-wrap">
          {prevSection ? (
            <Link
              to={`/modulo/${prevSection.slug}/${prevSection.index}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-dark-800 border border-neutral-100 dark:border-white/5 hover:border-primary-300 dark:hover:border-primary-700 transition-all text-sm text-primary-900 dark:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500">Anterior</div>
                <div className="font-medium">{prevSection.title}</div>
              </div>
            </Link>
          ) : <div />}
          {nextSection && (
            <Link
              to={`/modulo/${nextSection.slug}/${nextSection.index}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-all text-sm shadow-sm hover:shadow-md"
            >
              <div className="text-right">
                <div className="text-xs text-white/70">Siguiente</div>
                <div className="font-medium">{nextSection.title}</div>
              </div>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          )}
        </div>

      </div>
    </div>
  )
}

/* ============= TAB 1: CONTENIDO ============= */

function ContenidoTab({ sections, cfg }) {
  const [activeCard, setActiveCard] = useState(null)

  const toggle = (i) => setActiveCard(activeCard === i ? null : i)

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {sections.map((s, i) => {
          const IconComp = cardIconComponents[i % cardIconComponents.length]
          const isActive = activeCard === i
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={`bg-white dark:bg-dark-800 border rounded-xl p-4 cursor-pointer transition-all duration-200 shadow-sm ${
                isActive
                  ? 'border-primary-400 dark:border-primary-600 ring-1 ring-primary-300/40 dark:ring-primary-700/40'
                  : 'border-neutral-100 dark:border-white/5 hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-0.5'
              }`}
            >
              <div className={`w-9 h-9 rounded-lg ${cardIconColor.bg} ${cardIconColor.text} flex items-center justify-center mb-3`}>
                <IconComp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-primary-900 dark:text-white mb-1 leading-snug">{s.heading}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">{getPreview(s.items)}</p>
            </div>
          )
        })}
      </div>

      {activeCard !== null && sections[activeCard] && (
        <div className="bg-white dark:bg-dark-800 border border-primary-200 dark:border-primary-900/60 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-100 dark:border-white/5">
            <h3 className="text-sm font-bold text-primary-900 dark:text-white">{sections[activeCard].heading}</h3>
            <button
              onClick={() => setActiveCard(null)}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="px-5 py-4 space-y-3">
            {sections[activeCard].items.map((item, j) => renderItem(item, j, cfg))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ============= TAB 2: EJERCICIOS ============= */

function EjerciciosTab({ blocks, cfg }) {
  if (blocks.length === 0) return null
  return (
    <div className="space-y-3">
      {blocks.map((ex, i) => (
        <ExerciseCard key={i} ex={ex} index={i} cfg={cfg} />
      ))}
    </div>
  )
}

function ExerciseCard({ ex, index, cfg }) {
  const [copied, setCopied] = useState(false)

  if (ex.exType === 'section') {
    return (
      <div className="bg-neutral-50 dark:bg-dark-800/50 border border-neutral-100 dark:border-white/5 rounded-xl p-5">
        <p className="text-[11px] font-mono font-semibold tracking-wider text-primary-600 dark:text-primary-400 mb-2">
          EJERCICIO {index + 1}
        </p>
        <p className="text-sm font-semibold text-primary-900 dark:text-white mb-3">{ex.heading}</p>
        <div className="space-y-3">
          {ex.items.map((item, j) => renderItem(item, j, cfg))}
        </div>
      </div>
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(ex.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-neutral-50 dark:bg-dark-800/50 border border-neutral-100 dark:border-white/5 rounded-xl p-5">
      <p className="text-[11px] font-mono font-semibold tracking-wider text-primary-600 dark:text-primary-400 mb-2">EJERCICIO {index + 1}</p>
      {ex.context !== 'Introducción' && (
        <p className="text-sm font-semibold text-primary-900 dark:text-white mb-3">{ex.context}</p>
      )}
      <CodeBlock text={ex.text} />
      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-lg font-medium transition-all mt-3 ${
          copied ? 'bg-success text-white' : 'bg-primary-500 text-white hover:bg-primary-600'
        }`}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? 'Copiado' : 'Copiar'}
      </button>
    </div>
  )
}

/* ============= TAB 3: CUESTIONARIO ============= */

function QuizTab({ questions }) {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (qi, letter) => {
    if (answers[qi] !== undefined) return
    setAnswers(prev => ({ ...prev, [qi]: letter }))
  }

  const score = questions.filter((q, i) => answers[i] === q.correct).length
  const allAnswered = questions.every((_, i) => answers[i] !== undefined)

  const resultMessages = [
    'Repasa las secciones anteriores y vuelve a intentarlo. ¡La práctica hace al maestro!',
    'Vas por buen camino. Revisa los conceptos donde fallaste y repite el cuestionario.',
    '¡Casi perfecto! Un pequeño repaso y lo tendrás todo claro.',
    '¡Excelente! Dominas los conceptos clave de este módulo. Estás listo para el siguiente.',
  ]

  return (
    <div>
      {questions.map((q, qi) => {
        const selected = answers[qi]
        const revealed = selected !== undefined
        const isCorrect = revealed && selected === q.correct

        return (
          <div key={qi} className="bg-white dark:bg-dark-800 border border-neutral-100 dark:border-white/5 rounded-xl p-6 mb-3 shadow-sm">
            <p className="text-sm font-semibold text-primary-900 dark:text-white mb-4 leading-relaxed">
              <span className="font-normal text-neutral-500 dark:text-neutral-400">Pregunta {qi + 1} de {questions.length} · </span>
              {q.text}
            </p>
            <div className="space-y-1.5">
              {q.options.map(opt => {
                const isRevealedCorrect = revealed && opt.letter === q.correct
                const isRevealedWrong = revealed && opt.letter === selected && !isCorrect

                let optClass = 'border-neutral-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-900 dark:hover:text-white'
                let letterClass = 'bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400'

                if (isRevealedCorrect) {
                  optClass = 'border-success bg-success-light text-success-dark'
                  letterClass = 'bg-success text-white'
                } else if (isRevealedWrong) {
                  optClass = 'border-error bg-error-light text-error-dark'
                  letterClass = 'bg-error text-white'
                } else if (revealed) {
                  optClass = 'border-neutral-100 dark:border-white/5 opacity-40 cursor-default'
                }

                return (
                  <button
                    key={opt.letter}
                    onClick={() => handleAnswer(qi, opt.letter)}
                    disabled={revealed}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg border transition-all text-left text-sm text-neutral-600 dark:text-neutral-300 bg-transparent ${optClass} ${revealed ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <span className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 transition-colors ${letterClass}`}>
                      {opt.letter.toUpperCase()}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                )
              })}
            </div>
            {revealed && (
              <div className={`mt-3 px-4 py-3 rounded-lg text-sm leading-relaxed ${
                isCorrect ? 'bg-success-light text-success-dark' : 'bg-error-light text-error-dark'
              }`}>
                {isCorrect
                  ? <span>✓ Correcto. {q.feedback?.ok || '¡Bien hecho!'}</span>
                  : <span>✗ No es correcto. {q.feedback?.ko || (q.correct ? `La respuesta correcta era ${q.correct.toUpperCase()}.` : 'Respuesta incorrecta.')}</span>
                }
              </div>
            )}
          </div>
        )
      })}

      <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {allAnswered ? `${score}/${questions.length} respuestas correctas` : ''}
        </span>
        {allAnswered && !showResults && (
          <button
            onClick={() => setShowResults(true)}
            className="inline-flex items-center gap-1.5 text-sm px-5 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all shadow-sm"
          >
            <Award className="w-4 h-4" /> Ver resultados
          </button>
        )}
      </div>

      {showResults && (
        <div className="bg-white dark:bg-dark-800 border border-neutral-100 dark:border-white/5 rounded-xl p-8 text-center mt-4 shadow-sm">
          <div className="text-5xl font-light text-primary-900 dark:text-white mb-1">{score}/{questions.length}</div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">respuestas correctas</p>
          <p className="text-sm text-primary-900 dark:text-neutral-200 leading-relaxed max-w-[420px] mx-auto">
            {resultMessages[Math.min(score, 3)]}
          </p>
          <button
            onClick={() => { setAnswers({}); setShowResults(false) }}
            className="inline-flex items-center gap-1.5 text-sm px-5 py-2 rounded-lg border border-neutral-200 dark:border-white/10 bg-white dark:bg-dark-800 text-primary-900 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all mt-5"
          >
            <RefreshCw className="w-4 h-4" /> Reintentar
          </button>
        </div>
      )}
    </div>
  )
}

function getPreview(items) {
  const texts = items.filter(i => ['text', 'listItem', 'numberedItem', 'subheading'].includes(i.type))
  if (texts.length === 0) {
    const code = items.find(i => i.type === 'code')
    return code ? code.text.split('\n').slice(0, 2).join(' ').slice(0, 140) : ''
  }
  return texts.slice(0, 3).map(i => i.text.replace(/\*+/g, '')).join(' ').slice(0, 140) + (texts.length > 3 ? '…' : '')
}
