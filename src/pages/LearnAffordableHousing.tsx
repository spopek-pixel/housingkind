import Button from '../components/ui/Button'
import Arrow from '../components/ui/Arrow'
import SectionHeading from '../components/ui/SectionHeading'

const housingTypes = [
  { name: 'ADU', desc: 'A smaller home on the same lot as a house, often above a garage or in a backyard. Invisible from the street.', scale: '1 unit · 1–1.5 stories' },
  { name: 'Duplex', desc: 'Two homes side by side or stacked, often indistinguishable from a single house.', scale: '2 units · similar to single-family' },
  { name: 'Fourplex', desc: 'Four units within one building that maintains a residential scale and single roofline.', scale: '4 units · 1.5–2.5 stories' },
  { name: 'Townhomes', desc: 'Attached single-family homes, each with an individual entrance and small yard.', scale: '3–6 units · 2–3 stories' },
  { name: 'Mixed-Use', desc: 'Retail or commercial space at street level with housing above.', scale: '4–12 units · 2–4 stories' },
]

const process = [
  { step: 'Proposal', desc: 'A developer or housing agency submits a project to the local planning department.' },
  { step: 'Public Notice', desc: 'Nearby residents are notified by mail, sign posting, or public listing, depending on local rules.' },
  { step: 'Public Comment', desc: 'Residents can submit written comments or speak at a public hearing.' },
  { step: 'Planning Review', desc: 'City staff and a planning commission review the project against zoning and design standards.' },
  { step: 'Decision', desc: 'The project is approved, approved with conditions, or denied.' },
  { step: 'Construction', desc: 'If approved, construction typically takes 6 months to 2 years depending on project size.' },
]

export default function LearnAffordableHousing() {
  return (
    <>
      <section className="bg-mist-50">
        <div className="container-page py-16 lg:py-20">
          <SectionHeading
            align="left"
            eyebrow="Start here"
            title="Learn about affordable & missing-middle housing"
            description="Plain-language explanations of the housing types, terms, and process you'll encounter when a project is proposed near you."
          />
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Housing types, from smallest to largest</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-mist-200">
          {housingTypes.map((h, i) => (
            <div key={h.name} className={`grid gap-2 p-6 sm:grid-cols-[160px_1fr_220px] sm:items-center sm:gap-8 ${i % 2 === 1 ? 'bg-mist-50' : 'bg-white'}`}>
              <h3 className="font-semibold text-ink-900">{h.name}</h3>
              <p className="text-sm leading-relaxed text-ink-800/70">{h.desc}</p>
              <p className="text-xs font-medium text-ink-800/50">{h.scale}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist-50 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-2xl font-semibold sm:text-3xl">How a housing project actually gets approved</h2>
          <p className="mt-3 max-w-2xl text-ink-800/70">
            Every city's process differs slightly, but most proposed developments move through
            these general stages before a shovel hits the ground.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <li key={p.step} className="rounded-2xl border border-mist-200 bg-white p-6">
                <span className="font-display text-sm font-semibold text-clay-500">Step {i + 1}</span>
                <h3 className="mt-1.5 font-semibold text-ink-900">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-harbor-50 p-8">
            <h3 className="text-xl font-semibold text-ink-900">What "affordable housing" actually means</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-800/75">
              "Affordable housing" typically refers to homes with rents or prices restricted to be
              affordable for households earning below a set percentage of the Area Median Income
              (AMI) &mdash; often 60&ndash;80%. Not all missing middle housing is income-restricted, but
              smaller unit types are naturally more affordable to build and to rent than
              single-family homes or large complexes.
            </p>
          </div>
          <div className="rounded-2xl bg-clay-50 p-8">
            <h3 className="text-xl font-semibold text-ink-900">Who typically lives in this housing</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-800/75">
              Missing middle and affordable housing residents are often the people already part of
              your community: essential workers, teachers, young families, adult children moving
              back home, and older neighbors looking to downsize without leaving the area.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-harbor-700">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center text-white">
          <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">Ready to go deeper?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/myths-vs-facts" variant="secondary">Myths vs. Facts</Button>
            <Button to="/resources" variant="outlineLight" icon={<Arrow />}>Glossary & Resources</Button>
          </div>
        </div>
      </section>
    </>
  )
}
