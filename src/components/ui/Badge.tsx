import type { ReactNode } from 'react'

type Props = { children: ReactNode; tone?: 'harbor' | 'clay' | 'sage' | 'neutral' }
const tones = {
  harbor: 'bg-harbor-50 text-harbor-700',
  clay: 'bg-clay-50 text-clay-700',
  sage: 'bg-sage-50 text-sage-600',
  neutral: 'bg-mist-100 text-ink-800',
}
export default function Badge({ children, tone = 'harbor' }: Props) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}
