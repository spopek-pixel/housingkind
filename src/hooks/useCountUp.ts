import { useEffect, useRef, useState } from 'react'

/** Animates the first number found in `value` (e.g. "4.7M", "72%", "10,000/day") up from 0. */
export default function useCountUp(value: string, trigger: boolean, duration = 1400) {
  const [display, setDisplay] = useState(value)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!trigger || hasRun.current) return
    hasRun.current = true

    const match = value.match(/[\d,]+\.?\d*/)
    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    const raw = match[0]
    const target = parseFloat(raw.replace(/,/g, ''))
    const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
    const hasComma = raw.includes(',')
    const start = performance.now()
    let frame: number

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      const formatted = hasComma
        ? Math.round(current).toLocaleString('en-US')
        : current.toFixed(decimals)
      setDisplay(value.replace(raw, formatted))
      if (progress < 1) frame = requestAnimationFrame(tick)
      else setDisplay(value)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [trigger, value, duration])

  return display
}
