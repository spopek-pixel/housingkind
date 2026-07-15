import { useState } from 'react'
import Button from '../components/ui/Button'
import StreetPreview from '../components/sections/StreetPreview'
import isoMap from '../assets/images/home_plan.png'

const housingTypes = [
  { id: 'duplex', name: 'Duplex', units: '2 units', height: 'Similar to single-family', desc: 'Two homes side by side or stacked, often looks like a single home.' },
  { id: 'fourplex', name: 'Fourplex', units: '4 units', height: '1.5–2.5 stories', desc: 'Four units in one building, maintains residential scale.' },
  { id: 'townhomes', name: 'Townhomes', units: '3–6 units', height: '2–3 stories', desc: 'Attached single-family homes with individual entrances.' },
  { id: 'adu', name: 'ADU', units: '1 unit', height: '1–1.5 stories', desc: 'Accessory Dwelling Unit in a backyard or above a garage, invisible from the street.' },
  { id: 'mixed', name: 'Mixed-Use', units: '4–12 units', height: '2–4 stories', desc: 'Retail or commercial on the ground floor with housing above.' },
]

const contexts = [
  { id: 'residential', name: 'Residential Street', desc: 'Primarily single-family homes.' },
  { id: 'commercial', name: 'Commercial Corridor', desc: 'Main street with shops.' },
  { id: 'transitional', name: 'Transitional Zone', desc: 'Between residential and commercial.' },
  { id: 'mixedstreet', name: 'Mixed-Use Street', desc: 'Residential and commercial in the same buildings.' },
  { id: 'pedestrian', name: 'Pedestrian-Oriented Street', desc: 'Designed for people over cars.' },
  { id: 'mainstreet', name: 'Neighborhood Main Street', desc: 'A smaller-scale commercial street within a neighborhood.' },
]

const previewCopy: Record<string, string> = {
  duplex: 'A duplex here keeps the same roofline and setback as the houses next to it — most passersby wouldn\u2019t notice a change.',
  fourplex: 'A fourplex here reads as one larger house, typically no taller than 2.5 stories, with separate entries for each home.',
  townhomes: 'A row of townhomes here matches the rhythm of individual front doors and small yards found on this kind of street.',
  adu: 'An ADU sits behind the main house — from the sidewalk, this street looks completely unchanged.',
  mixed: 'Mixed-use here brings small storefronts to street level with housing above, sized to the block\u2019s existing commercial buildings.',
}

export default function VisualizeYourStreet() {
  const [housingType, setHousingType] = useState('duplex')
  const [context, setContext] = useState('residential')
  const [generated, setGenerated] = useState(false)

  const selectedType = housingTypes.find((h) => h.id === housingType)!
  const selectedContext = contexts.find((c) => c.id === context)!

  return (
    <>
      <section className="relative overflow-hidden bg-mist-50">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-harbor-200/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-clay-200/40 blur-3xl" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-8 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <p className="eyebrow mb-4">Try it yourself</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              <span className="text-clay-500">Visualize</span> your street
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-800/70">
              Experiment with different types of gentle density in familiar street contexts. This
              tool is designed for exploration and understanding, not persuasion &mdash; helping you
              see how missing middle housing could fit into neighborhoods you know.
            </p>
          </div>
          <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
            <img src={isoMap} alt="An illustrated isometric map of a neighborhood with several housing buildings" className="w-full" />
            <div className="absolute -bottom-5 -left-5 rounded-xl bg-white px-4 py-3 shadow-soft">
              <p className="text-2xl font-semibold text-harbor-700">{housingTypes.length * contexts.length}</p>
              <p className="text-xs font-medium text-ink-800/60">Type &amp; street combinations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-harbor-100 bg-harbor-50 p-4 text-sm text-harbor-800">
          <span aria-hidden="true">&#9432;</span>
          <p>
            This is a simplified visualization tool for exploring general concepts. For a detailed
            visualization of a specific property or project, see our{' '}
            <a href="/for-developers" className="font-semibold underline">
              partnership services
            </a>
            .
          </p>
        </div>

        <h2 className="text-2xl font-semibold sm:text-3xl">Choose a housing type and context</h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-ink-900">Housing Type</h3>
            <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Housing type">
              {housingTypes.map((h) => (
                <button
                  key={h.id}
                  role="radio"
                  aria-checked={housingType === h.id}
                  onClick={() => { setHousingType(h.id); setGenerated(false) }}
                  className={`w-full rounded-xl border p-4 text-left transition-all duration-200 ${
                    housingType === h.id ? 'border-harbor-500 bg-harbor-50 shadow-card' : 'border-mist-200 hover:border-harbor-200 hover:shadow-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink-900">{h.name}</span>
                    <span className="text-xs font-medium text-ink-800/50">{h.units}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-800/70">{h.desc}</p>
                  <p className="mt-1 text-xs text-ink-800/45">Height: {h.height}</p>
                </button>
              ))}
            </div>

            <h3 className="mb-3 mt-8 font-semibold text-ink-900">Street Context</h3>
            <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Street context">
              {contexts.map((c) => (
                <button
                  key={c.id}
                  role="radio"
                  aria-checked={context === c.id}
                  onClick={() => { setContext(c.id); setGenerated(false) }}
                  className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                    context === c.id ? 'border-harbor-500 bg-harbor-50 shadow-card' : 'border-mist-200 hover:border-harbor-200 hover:shadow-card'
                  }`}
                >
                  <span className="font-semibold text-ink-900">{c.name}</span>
                  <p className="mt-1 text-sm text-ink-800/70">{c.desc}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <Button
                variant="ghost"
                onClick={() => { setHousingType('duplex'); setContext('residential'); setGenerated(false) }}
              >
                Reset Options
              </Button>
              <Button variant="primary" onClick={() => setGenerated(true)} className="flex-1 justify-center">
                Generate Visualization
              </Button>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <h3 className="mb-3 font-semibold text-ink-900">Preview</h3>
            <div className="relative overflow-hidden rounded-2xl border border-mist-200 bg-gradient-to-br from-harbor-50 via-mist-50 to-white shadow-card">
              {!generated ? (
                <div key="empty" className="flex min-h-[420px] flex-col items-center justify-center p-8 text-center animate-[fadeIn_0.3s_ease-out]">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="mx-auto text-ink-800/25" aria-hidden="true">
                    <path d="M12 3 3 10v11h6v-7h6v7h6V10L12 3Z" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                  <p className="mt-4 text-ink-800/60">
                    Select a housing type and context, then click "Generate Visualization" to see a preview.
                  </p>
                </div>
              ) : (
                <div key={`${housingType}-${context}`} className="animate-[fadeIn_0.35s_ease-out]">
                  <StreetPreview housingType={housingType} context={context} />
                  <div className="p-6 text-left sm:p-8">
                    <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-sage-50 px-3 py-1 text-xs font-semibold text-sage-600">
                      Visualization ready
                    </span>
                    <p className="eyebrow mb-2">{selectedType.name} &middot; {selectedContext.name}</p>
                    <p className="font-display text-xl leading-snug text-ink-900">
                      {previewCopy[selectedType.id]}
                    </p>
                    <p className="mt-4 text-sm text-ink-800/60">
                      On a {selectedContext.name.toLowerCase()}, a {selectedType.name.toLowerCase()} generally
                      reads as a natural extension of what's already there, sized to {selectedType.height.toLowerCase()}.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist-100 py-16">
        <div className="container-page">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Understanding scale and fit</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h3 className="font-semibold text-ink-900">Height Matters</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800/70">Gentle density maintains similar heights to surrounding buildings, typically 1.5 to 3 stories in residential areas.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h3 className="font-semibold text-ink-900">Context Sensitive</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800/70">The same housing type looks different on a residential street versus a commercial corridor &mdash; both can work.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h3 className="font-semibold text-ink-900">Gradual Change</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800/70">Neighborhoods evolve slowly. Gentle density adds options without wholesale transformation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-harbor-700">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center text-white">
          <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">Want to see real examples?</h2>
          <p className="max-w-xl text-harbor-100/85">Explore completed projects and read stories from neighbors near gentle density developments.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/explore" variant="secondary">Browse Projects</Button>
            <Button to="/stories" variant="outlineLight">Real Neighbor Stories</Button>
          </div>
        </div>
      </section>
    </>
  )
}
