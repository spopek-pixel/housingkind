import { useEffect, useRef, useState } from 'react'

/**
 * Reveals content once it enters the viewport. Falls back to visible after
 * a timeout no matter what, so content can never get stuck hidden if
 * IntersectionObserver misbehaves in a given browser/embedding context.
 */
export default function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let done = false

    const reveal = () => {
      if (done) return
      done = true
      setInView(true)
      observer.disconnect()
      clearTimeout(fallback)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold: 0.15, ...options }
    )
    observer.observe(node)

    // Timer is armed before any synchronous reveal() call below can fire.
    const fallback = setTimeout(reveal, 2500)

    const checkGeometry = () => {
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) reveal()
    }

    // Already on-screen at mount (common on first paint above the fold),
    // or the browser is slow/unable to fire the observer callback.
    checkGeometry()

    // A backgrounded tab (opened but not yet switched to) can suppress
    // IntersectionObserver updates entirely; re-check once it's foregrounded.
    document.addEventListener('visibilitychange', checkGeometry)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
      document.removeEventListener('visibilitychange', checkGeometry)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, inView }
}
