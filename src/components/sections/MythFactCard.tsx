import type { MythFact } from '../../data/myths'
import Badge from '../ui/Badge'

export default function MythFactCard({ item }: { item: MythFact }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-mist-200 bg-white">
      <div className="border-b border-mist-100 px-6 py-4">
        <Badge tone="neutral">{item.category}</Badge>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-mist-100 p-6 sm:border-b-0 sm:border-r">
          <p className="eyebrow text-clay-600">Myth</p>
          <p className="mt-2 font-display text-lg leading-snug text-ink-900">{item.myth}</p>
        </div>
        <div className="bg-harbor-50/50 p-6">
          <p className="eyebrow">Fact</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-800/80">{item.fact}</p>
        </div>
      </div>
    </div>
  )
}
