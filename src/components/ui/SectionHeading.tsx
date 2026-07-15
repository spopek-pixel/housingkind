import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export default function SectionHeading({ eyebrow, title, description, align = 'center', tone = 'light' }: Props) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${tone === 'dark' ? 'text-clay-300' : ''}`}>{eyebrow}</p>}
      <h2 className={`text-3xl sm:text-4xl font-semibold leading-tight ${tone === 'dark' ? 'text-white' : 'text-ink-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${tone === 'dark' ? 'text-harbor-100' : 'text-ink-800/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
