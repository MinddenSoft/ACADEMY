import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

export function parseContent(content) {
  const rawBlocks = content.split('\n---\n').map(b => b.trim()).filter(Boolean)
  const contentSections = []
  let quizQuestions = null
  let lastQuizBlock = null

  for (const block of rawBlocks) {
    const isQuizBlock = /^\*\*Cuestionario/i.test(block) || /^\*\*Pregunta \d+:/i.test(block)
    const isAnswersBlock = /^\*\*Respuestas?\s*(explicadas?)?\*\*/i.test(block)

    if (isQuizBlock) {
      lastQuizBlock = block
      quizQuestions = parseQuiz(block)
    } else if (isAnswersBlock && lastQuizBlock) {
      quizQuestions = parseQuiz(lastQuizBlock + '\n\n' + block)
      lastQuizBlock = null
    } else {
      lastQuizBlock = null
      const parsed = parseContentBlock(block)
      contentSections.push(...parsed)
    }
  }

  return { sections: contentSections, quiz: quizQuestions }
}

function parseContentBlock(block) {
  const lines = block.split('\n')
  const sections = []
  let current = null

  for (const line of lines) {
    const trimmed = line.trim()
    const headingMatch = trimmed.match(/^\*\*(.+?)\*\*$/)
    if (headingMatch) {
      if (current) sections.push(current)
      current = { heading: headingMatch[1], items: [] }
      continue
    }
    if (!current) current = { heading: 'Introducción', items: [] }
    current.items.push(line)
  }
  if (current) sections.push(current)

  const result = sections.map(s => ({ heading: s.heading, items: parseItems(s.items) }))
  return result.filter(s => !(s.heading === 'Introducción' && s.items.length === 0))
}

function parseItems(lines) {
  const items = []
  let buffer = []

  const flush = () => {
    if (buffer.length === 0) return
    const text = buffer.join('\n').trim()
    if (!text) return
    if (text.startsWith('> ')) {
      items.push({ type: 'blockquote', text: text.replace(/^> /gm, '') })
    } else if (isCode(text)) {
      items.push({ type: 'code', text })
    } else {
      items.push({ type: 'text', text })
    }
    buffer = []
  }

  for (const line of lines) {
    const trimmed = line.trim()
    if (/^\*\*(.+?)\*\*$/.test(trimmed)) {
      flush()
      items.push({ type: 'subheading', text: trimmed.slice(2, -2) })
    } else if (trimmed.startsWith('- ')) {
      flush()
      items.push({ type: 'listItem', text: trimmed.slice(2) })
    } else if (/^\d+[\.\)]\s/.test(trimmed)) {
      flush()
      const num = parseInt(trimmed)
      items.push({ type: 'numberedItem', text: trimmed.replace(/^\d+[\.\)]\s*/, ''), number: num })
    } else if (!trimmed) {
      flush()
    } else {
      buffer.push(line)
    }
  }
  flush()
  return items
}

function isCode(text) {
  const codePatterns = [
    /^[a-z]\s/, /^git\s/, /^import\s/, /^def\s/, /^print\(/, /^plt\./, /^sns\./,
    /^df\[/, /^pd\./, /^np\./, /^class\s/, /^return\s/, /^(if|for|while|elif|else|with|try|except)\s/,
    /^\/\//, /^#\s/, /^\|--\s/, /^[a-z_]+\s*=/, /^from\s/, /^export\s/, /^echo\s/,
  ]
  const codeLines = text.split('\n').filter(l => l.trim())
  if (codeLines.length === 0) return false
  const matched = codeLines.filter(l => codePatterns.some(p => p.test(l.trim())))
  return matched.length / codeLines.length > 0.5
}

function parseQuiz(block) {
  const lines = block.split('\n')

  // Pass 1: collect answers
  // Format 1: **Respuesta correcta: b.** explanation (inline)
  // Format 2: **Respuesta Pregunta N: b** in a separate answers section
  const answersMap = {}
  const feedbackMap = {}
  let inAnswerSection = false
  let currentAnsId = null
  let feedbackBuffer = []

  const flushFeedback = () => {
    if (currentAnsId !== null && feedbackBuffer.length > 0) {
      feedbackMap[currentAnsId] = feedbackBuffer.join(' ').trim()
    }
    feedbackBuffer = []
  }

  for (const line of lines) {
    const trimmed = line.trim()
    if (/^\*\*Respuestas?\s*(explicadas?)?\*\*/i.test(trimmed)) {
      inAnswerSection = true
      flushFeedback()
      currentAnsId = null
      continue
    }
    if (inAnswerSection) {
      const m = trimmed.match(/^\*\*Respuesta Pregunta (\d+):\s*([a-dA-D])\*\*/i)
      if (m) {
        flushFeedback()
        currentAnsId = parseInt(m[1])
        answersMap[currentAnsId] = m[2].toLowerCase()
        feedbackBuffer = []
      } else if (currentAnsId !== null && trimmed) {
        feedbackBuffer.push(trimmed)
      }
    }
  }
  flushFeedback()

  // Pass 2: parse questions
  const questions = []
  let current = null
  let pendingText = false

  for (const line of lines) {
    const trimmed = line.trim()

    // Stop at answers section (format 2)
    if (/^\*\*Respuestas?\s*(explicadas?)?\*\*/i.test(trimmed)) break

    const qMatch = trimmed.match(/^\*\*Pregunta (\d+):\*\*\s*(.*)/i)
    if (qMatch) {
      if (current) questions.push(current)
      const id = parseInt(qMatch[1])
      const inlineText = qMatch[2].trim()
      current = {
        id,
        text: inlineText,
        options: [],
        correct: answersMap[id] ?? null,
        feedback: feedbackMap[id] ? { ok: feedbackMap[id], ko: feedbackMap[id] } : undefined,
      }
      pendingText = !inlineText
      continue
    }

    if (!current) continue

    // Capture question text on next line (format 2)
    if (pendingText && trimmed && !/^[a-dA-D][\)\.]\s/.test(trimmed) && !trimmed.startsWith('**')) {
      current.text = trimmed
      pendingText = false
      continue
    }

    // Format 1 inline answer: **Respuesta correcta: b.** explanation
    const aMatch = trimmed.match(/^\*\*Respuesta correcta:\s*[\(]?([a-dA-D])[\).]?\s*(.*)/i)
    if (aMatch) {
      current.correct = aMatch[1].toLowerCase()
      const explanation = aMatch[2].replace(/\*+\s*$/, '').replace(/^[.\s]+/, '').trim()
      if (explanation) current.feedback = { ok: explanation, ko: explanation }
      questions.push(current)
      current = null
      pendingText = false
      continue
    }

    // Options
    if (/^[a-dA-D][\)\.]\s/.test(trimmed)) {
      current.options.push({
        letter: trimmed[0].toLowerCase(),
        text: trimmed.replace(/^[a-dA-D][\)\.]\s*/, ''),
      })
    }
  }
  if (current) questions.push(current)

  return questions.length > 0 ? questions : null
}

export function formatRichText(text) {
  const parts = text.split(/(`[^`]+`|\*{2}[^*]+\*{2}|\*[^*\n]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="font-mono text-xs bg-neutral-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-primary-600 dark:text-primary-400">
          {part.slice(1, -1)}
        </code>
      )
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-primary-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <strong key={i} className="font-semibold text-primary-700 dark:text-primary-300">
          {part.slice(1, -1)}
        </strong>
      )
    }
    return part
  })
}

export function renderItem(item, i, cfg) {
  switch (item.type) {
    case 'subheading':
      return (
        <h4 key={i} className="text-sm font-semibold text-primary-800 dark:text-primary-200 mt-4 mb-1.5 first:mt-0">
          {item.text}
        </h4>
      )
    case 'text':
      return (
        <p key={i} className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {formatRichText(item.text)}
        </p>
      )
    case 'listItem':
      return (
        <div key={i} className="flex items-start gap-2">
          <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cfg.color}`} />
          <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {formatRichText(item.text)}
          </span>
        </div>
      )
    case 'numberedItem':
      return (
        <div key={i} className="flex items-start gap-2.5">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-bold flex items-center justify-center mt-0.5">
            {item.number}
          </span>
          <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
            {formatRichText(item.text)}
          </span>
        </div>
      )
    case 'code':
      return <CodeBlock key={i} text={item.text} />
    case 'blockquote':
      return (
        <div key={i} className="bg-primary-50 dark:bg-primary-900/20 border-l-3 border-primary-500 rounded-r-lg px-4 py-3">
          <p className="text-sm text-primary-800 dark:text-primary-200 leading-relaxed">
            {formatRichText(item.text)}
          </p>
        </div>
      )
    default:
      return null
  }
}

export function CodeBlock({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border-l-3 border-primary-500 bg-neutral-100 dark:bg-dark-900/50 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-200/50 dark:bg-white/5 border-b border-neutral-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-neutral-500" />
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Terminal</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:bg-white/50 dark:hover:bg-white/10"
        >
          {copied ? (
            <><Check className="w-3.5 h-3.5 text-green-500" /> Copiado</>
          ) : (
            <><Copy className="w-3.5 h-3.5 text-neutral-500" /> Copiar</>
          )}
        </button>
      </div>
      <pre className="text-xs leading-relaxed p-4 overflow-x-auto font-mono whitespace-pre text-neutral-800 dark:text-neutral-200">
        {text}
      </pre>
    </div>
  )
}

export function renderQuiz(questions, cfg) {
  if (!questions || questions.length === 0) return null
  return (
    <div>
      {questions.map((q, qi) => (
        <QuizQuestion key={qi} question={q} index={qi} cfg={cfg} />
      ))}
    </div>
  )
}

function QuizQuestion({ question, index, cfg }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (letter) => {
    if (revealed) return
    setSelected(letter)
    setRevealed(true)
  }

  const isCorrect = selected === question.correct

  return (
    <div className="rounded-xl bg-white dark:bg-dark-800 border border-neutral-100 dark:border-white/5 overflow-hidden mb-4">
      <div className="p-5">
        <p className="text-sm font-medium text-primary-900 dark:text-white mb-4 leading-relaxed">
          <span className="text-neutral-400 font-normal">Pregunta {question.id || index + 1} de {''}·{''} </span>
          {question.text}
        </p>
        <div className="space-y-2">
          {question.options.map((opt) => {
            const isRevealedCorrect = revealed && opt.letter === question.correct
            const isRevealedWrong = revealed && opt.letter === selected && !isCorrect

            let optClass = 'border-neutral-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-600'
            let letterClass = 'bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400'

            if (isRevealedCorrect) {
              optClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/15'
              letterClass = 'bg-emerald-600 text-white'
            } else if (isRevealedWrong) {
              optClass = 'border-red-500 bg-red-50 dark:bg-red-900/15'
              letterClass = 'bg-red-600 text-white'
            } else if (revealed) {
              optClass = 'border-neutral-100 dark:border-white/5 opacity-40'
            }

            return (
              <button
                key={opt.letter}
                onClick={() => handleSelect(opt.letter)}
                disabled={revealed}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left text-sm text-neutral-700 dark:text-neutral-300 ${optClass} ${revealed ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${letterClass}`}>
                  {opt.letter.toUpperCase()}
                </span>
                <span className="leading-relaxed flex-1">{opt.text}</span>
              </button>
            )
          })}
        </div>
        {revealed && (
          <div className={`mt-4 px-4 py-3 rounded-xl text-sm leading-relaxed ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-900/15 text-emerald-800 dark:text-emerald-200' : 'bg-red-50 dark:bg-red-900/15 text-red-800 dark:text-red-200'}`}>
            {isCorrect ? (
              <span>✓ Correcto. {question.feedback?.ok || '¡Bien hecho!'}</span>
            ) : (
              <span>✗ No es correcto. {question.feedback?.ko || `La respuesta correcta era ${question.correct.toUpperCase()}.`}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
