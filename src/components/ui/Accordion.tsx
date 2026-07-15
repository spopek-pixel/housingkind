import { useState, type ReactNode } from 'react'

type Item = { question: string; answer: ReactNode }
export default function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-mist-200 rounded-2xl border border-mist-200 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const panelId = `accordion-panel-${i}`
        const buttonId = `accordion-button-${i}`
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-ink-900">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 rounded-full border border-harbor-200 text-harbor-600 w-7 h-7 flex items-center justify-center transition-transform ${isOpen ? 'rotate-45 bg-harbor-50' : ''}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5 text-ink-800/75 leading-relaxed"
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
