import useInView from '../../hooks/useInView'
import useCountUp from '../../hooks/useCountUp'

export default function StatCard({
  value,
  label,
  description,
}: {
  value: string
  label: string
  description: string
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const display = useCountUp(value, inView)

  return (
    <div ref={ref} className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
      <p className="font-display text-3xl font-semibold text-clay-300">{display}</p>
      <p className="mt-2 text-sm font-semibold text-white">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-harbor-100/75">{description}</p>
    </div>
  )
}
