import { useState } from 'react'
import type { Story } from '../../data/stories'
import Accordion from '../ui/Accordion'

const ring = {
  harbor: 'bg-harbor-100 text-harbor-700',
  clay: 'bg-clay-100 text-clay-700',
  sage: 'bg-sage-50 text-sage-600',
}

export default function StoryCard({ story }: { story: Story }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="rounded-2xl border border-mist-200 bg-white p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-[auto_1fr]">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-semibold ${ring[story.colorway]}`}
          aria-hidden="true"
        >
          {story.name.charAt(0)}
        </div>
        <div>
          <span className="eyebrow">{story.tag}</span>
          <p className="mt-3 font-display text-xl leading-snug text-ink-900">&ldquo;{story.quote}&rdquo;</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-800/70">{story.bio}</p>
          <p className="mt-4 text-sm font-semibold text-ink-900">
            {story.name} <span className="font-normal text-ink-800/60">&middot; {story.location} &middot; {story.role}</span>
          </p>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={`interview-${story.name.replace(/\s+/g, '-')}`}
            onClick={() => setOpen((v) => !v)}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-harbor-700 hover:text-harbor-800"
          >
            {open ? 'Hide the full interview' : 'Read the full interview'}
            <span
              aria-hidden="true"
              className={`inline-flex h-5 w-5 items-center justify-center rounded-full border border-harbor-200 text-xs transition-transform ${open ? 'rotate-180' : ''}`}
            >
              &#9662;
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id={`interview-${story.name.replace(/\s+/g, '-')}`} className="mt-6">
          <Accordion
            items={story.interview.map((qa) => ({ question: qa.question, answer: qa.answer }))}
          />
        </div>
      )}
    </article>
  )
}
