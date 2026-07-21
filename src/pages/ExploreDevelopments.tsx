import { useMemo, useState } from 'react'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import ProjectCard from '../components/sections/ProjectCard'
import { projects } from '../data/projects'
import heroBackground from '../assets/images/business_construction.jpg'

export default function ExploreDevelopments() {
  const [city, setCity] = useState('All')
  const [type, setType] = useState('All')

  const cities = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.city)))], [])
  const types = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.housingType)))], [])

  const filtered = projects.filter(
    (p) => (city === 'All' || p.city === city) && (type === 'All' || p.housingType === type)
  )

  return (
    <>
      <section className="relative isolate overflow-hidden bg-harbor-900">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-harbor-900 via-harbor-900/75 to-harbor-900/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-harbor-900/90 via-harbor-900/40 to-transparent" aria-hidden="true" />
        <div className="container-page relative flex min-h-[480px] flex-col justify-end py-16 lg:min-h-[560px] lg:py-20">
          <p className="eyebrow mb-4 text-clay-300">See it before it's built</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Explore real <span className="text-clay-300">affordable housing</span> projects
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Browse neighborhood-scale projects that are complete or in progress. See how missing
            middle housing fits into real communities through visualizations, context photos, and
            neighbor stories.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white">{projects.length}</p>
              <p className="text-xs font-medium text-white/70">Projects to explore</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white">{cities.length - 1}</p>
              <p className="text-xs font-medium text-white/70">Cities represented</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page -mt-8 rounded-t-3xl bg-white pt-10">
        <div className="rounded-2xl border border-mist-200 p-6 shadow-card">
          <p className="mb-4 flex items-center gap-2 font-semibold text-ink-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 3h12M4 8h8M6.5 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Filter Projects
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              <span className="mb-1.5 block font-medium text-ink-800/80">City</span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              <span className="mb-1.5 block font-medium text-ink-800/80">Housing Type</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm"
              >
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <p className="mt-8 text-sm font-medium text-ink-800/60" aria-live="polite">
          Showing {filtered.length} project{filtered.length === 1 ? '' : 's'}
        </p>
        <div className="mt-4 grid gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-ink-800/60">
            No projects match those filters yet. Try a different city or housing type.
          </p>
        )}
      </section>

      <section className="bg-harbor-700">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center text-white">
          <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">
            Want to see how this could work on your street?
          </h2>
          <Button to="/visualize-your-street" variant="secondary">Try the Visualization Tool</Button>
        </div>
      </section>
    </>
  )
}
