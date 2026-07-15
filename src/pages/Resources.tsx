import SectionHeading from '../components/ui/SectionHeading'
import { glossary } from '../data/glossary'

const links = [
  { title: 'Local Housing Element (find your city)', desc: 'Every city is required to plan for future housing needs. Search "[your city] housing element" to find your local plan.' },
  { title: 'HUD: Affordable Housing Basics', desc: 'The U.S. Department of Housing and Urban Development publishes plain-language guides on income-restricted housing programs.' },
  { title: 'Your City Planning Department', desc: 'The best source for information on a specific proposed project near you, including comment periods and hearing dates.' },
  { title: 'Missing Middle Housing (Opticos Design)', desc: 'One of the original resources popularizing the "missing middle" housing framework.' },
]

export default function Resources() {
  return (
    <>
      <section className="bg-mist-50">
        <div className="container-page py-16 lg:py-20">
          <SectionHeading align="left" eyebrow="Reference" title="Resources & Glossary" description="A plain-language glossary of housing terms, plus links to go deeper." />
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Glossary</h2>
        <dl className="mt-8 divide-y divide-mist-200 rounded-2xl border border-mist-200">
          {glossary.map((g) => (
            <div key={g.term} className="grid gap-2 p-6 sm:grid-cols-[240px_1fr] sm:gap-8">
              <dt className="font-semibold text-ink-900">{g.term}</dt>
              <dd className="text-sm leading-relaxed text-ink-800/70">{g.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-mist-50 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-2xl font-semibold sm:text-3xl">Go deeper</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {links.map((l) => (
              <div key={l.title} className="rounded-2xl bg-white p-6 shadow-card">
                <h3 className="font-semibold text-ink-900">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
