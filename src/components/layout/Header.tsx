import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '../ui/Button'
import logo from '../../assets/images/housingkind_logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'Stories', to: '/stories' },
  { label: 'Visualize Your Street', to: '/visualize-your-street' },
  { label: 'About', to: '/about' },
]

const resourceItems = [
  { label: 'Learn the Basics', to: '/learn' },
  { label: 'Myths vs. Facts', to: '/myths-vs-facts' },
  { label: 'Resources & Glossary', to: '/resources' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `group relative px-2.5 py-2 text-sm font-medium transition-colors duration-200 ${
    isActive ? 'text-harbor-700' : 'text-ink-800/80 hover:text-harbor-700'
  }`

const underlineClass = (isActive: boolean) =>
  `pointer-events-none absolute inset-x-2.5 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-harbor-600 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
    isActive ? 'scale-x-100' : ''
  }`

function ResourcesMenu() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isActive = resourceItems.some((r) => r.to === location.pathname)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`group relative flex items-center gap-1 px-2.5 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive || open ? 'text-harbor-700' : 'text-ink-800/80 hover:text-harbor-700'
        }`}
      >
        Resources
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M2 3.5 5 6.5l3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={underlineClass(isActive)} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 rounded-2xl border border-mist-200 bg-white p-2 shadow-soft">
          {resourceItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive: itemActive }) =>
                `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  itemActive ? 'bg-harbor-50 text-harbor-700' : 'text-ink-800/80 hover:bg-mist-50 hover:text-harbor-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mist-200 bg-white/90 backdrop-blur">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container-page flex min-h-[4.5rem] flex-wrap items-center justify-between gap-y-2 py-3">
        <NavLink to="/" className="flex items-center shrink-0" aria-label="Housingkind home">
          <img src={logo} alt="Housingkind" className="h-10 w-auto" />
        </NavLink>

        <div className="flex flex-wrap items-center gap-6 lg:gap-8">
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-0.5 gap-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={underlineClass(isActive)} />
                  </>
                )}
              </NavLink>
            ))}
            <ResourcesMenu />
          </nav>

          <Button to="/for-developers" variant="primary" className="shrink-0">
            For Developers
          </Button>
        </div>
      </div>
    </header>
  )
}
