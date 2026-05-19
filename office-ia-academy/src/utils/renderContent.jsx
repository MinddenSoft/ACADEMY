export function renderContent(content, dotColor) {
  const lines = content.split('\n')
  const elements = []
  let inList = false
  let listItems = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-2 ml-4 my-4">
          {listItems.map((item, i) => (
            <li key={i} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
              <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${dotColor}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
      listItems = []
      inList = false
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim()

    if (!trimmed) {
      flushList()
      return
    }

    if (trimmed.startsWith('- ')) {
      inList = true
      listItems.push(trimmed.replace(/^- /, '').replace(/\*\*/g, ''))
      return
    }

    flushList()

    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(
        <h4 key={`h4-${elements.length}`} className="font-bold text-slate-900 dark:text-white text-base mt-6 mb-2">
          {trimmed.replace(/\*\*/g, '')}
        </h4>
      )
    } else if (trimmed.startsWith('**')) {
      const parts = trimmed.split(/\*\*(.*?)\*\*/)
      elements.push(
        <p key={`p-${elements.length}`} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
          {parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-900 dark:text-white">{part}</strong> : part
          )}
        </p>
      )
    } else {
      elements.push(
        <p key={`p-${elements.length}`} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
          {trimmed}
        </p>
      )
    }
  })

  flushList()
  return elements
}

export function getContentPreview(content) {
  const lines = content.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('**') && !l.startsWith('-'))
  return lines[0] || ''
}
