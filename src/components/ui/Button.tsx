import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outlineLight'
type Props = {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  icon?: ReactNode
  type?: 'button' | 'submit'
  className?: string
}

const styles: Record<Variant, string> = {
  primary: 'bg-harbor-600 text-white hover:bg-harbor-700 shadow-card',
  secondary: 'bg-clay-400 text-ink-900 hover:bg-clay-500',
  ghost: 'bg-transparent text-harbor-700 hover:bg-harbor-50 border border-harbor-200',
  outlineLight: 'bg-transparent text-white border border-white/70 hover:bg-white/10',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  icon,
  type = 'button',
  className = '',
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap'
  const classes = `${base} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  )
}
