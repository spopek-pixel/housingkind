export default function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="relative rounded-2xl border border-mist-200 bg-white p-6">
      <span className="font-display text-sm font-semibold text-clay-500">{number}</span>
      <h3 className="mt-2 font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{description}</p>
    </div>
  )
}
