import { useMemo, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import MythFactCard from '../components/sections/MythFactCard'
import { mythsAndFacts } from '../data/myths'

export default function MythsVsFacts() {
  const [category, setCategory] = useState('All')
  const categories = useMemo(() => ['All', ...Array.from(new Set(mythsAndFacts.map((m) => m.category)))], [])
  const filtered = category === 'All' ? mythsAndFacts : mythsAndFacts.filter((m) => m.category === category)

  return (
    <>
      <section className="bg-mist-50">
        <div className="container-page py-16 lg:py-20">
          <SectionHeading
            align="left"
            eyebrow="Common concerns, addressed directly"
            title="Myths vs. Facts"
            description="Housing conversations get stuck on the same handful of concerns. Here's what the evidence actually shows, category by category."
          />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === c ? 'bg-harbor-600 text-white' : 'bg-mist-100 text-ink-800/70 hover:bg-mist-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          {filtered.map((item) => (
            <MythFactCard key={item.myth} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
