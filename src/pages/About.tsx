import Button from '../components/ui/Button'
import Arrow from '../components/ui/Arrow'
import SectionHeading from '../components/ui/SectionHeading'
import aboutHero from '../assets/images/about_house.png'

const mission = [
  {
    title: 'Reduce Fear & Uncertainty',
    description: "Help people see what's actually being proposed, not what they imagine.",
    tone: 'harbor',
  },
  {
    title: 'Create Understanding',
    description: 'Show how missing middle housing fits into real neighborhood contexts.',
    tone: 'sage',
  },
  {
    title: 'Support Dialogue',
    description: 'Give neighbors, developers, and policymakers tools for productive conversations.',
    tone: 'clay',
  },
  {
    title: 'Build a Public Resource',
    description: 'Create a library of visuals and stories that make gentle density easier to build.',
    tone: 'harbor',
  },
] as const

const why = [
  {
    title: 'Housing Shortage',
    body: "The U.S. is short an estimated 4.7 million homes where people actually want to live. When supply doesn't keep up, prices rise beyond what many households can afford. Gentle density is part of the solution, but only if we can build it.",
  },
  {
    title: 'Aging Population',
    body: 'More people want to downsize and stay in their neighborhoods, close to services and family, but the right housing options often aren’t there. Missing middle housing provides those options.',
  },
  {
    title: 'Climate & Equity',
    body: 'Low-density sprawl increases car dependence, emissions, and land use. It also segregates communities by income. Gentle density creates more integrated, sustainable neighborhoods.',
  },
]

const different = [
  {
    title: 'Public Resource, Not Private Tool',
    body: 'While we partner with developers, our long-term goal is a public library of visualizations and stories usable by advocates, policymakers, and community members, not just paying clients.',
  },
  {
    title: 'Neighborhood-Scale, Not Architectural Renders',
    body: "We don't create glossy marketing materials. We create accurate, context-sensitive visualizations that show how projects fit into existing neighborhoods, at human scale, with real surroundings.",
  },
  {
    title: 'Story-Driven, Not Data-Driven Alone',
    body: 'We collect first-person stories from neighbors after projects are built, documenting how gentle density actually affects daily life. Stories shift perception in ways that statistics alone cannot.',
  },
  {
    title: 'Process-Focused, Not Outcome-Focused',
    body: "We're not trying to guarantee approvals or eliminate all opposition. We're trying to make conversations more productive, informed, and grounded in reality rather than fear.",
  },
]

const missionTones: Record<string, string> = {
  harbor: 'bg-harbor-100 text-harbor-700',
  sage: 'bg-sage-50 text-sage-600',
  clay: 'bg-clay-100 text-clay-700',
}

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist-50">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-clay-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-harbor-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow mb-4">Our mission</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              We're working to shift <span className="text-clay-500">perception</span>, not
              advocate for density
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-800/70">
              Housingkind exists because the conversation around housing has become stuck: filled
              with fear, abstraction, and resistance. We believe that when people can actually see
              how gentle density fits into real neighborhoods, productive conversations become
              possible.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/for-developers" variant="primary">Partner With Us</Button>
              <Button to="/explore" variant="ghost" icon={<Arrow />}>Explore Projects</Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <img
              src={aboutHero}
              alt="A collage of a colorful historic row of homes and a tree-lined modern townhome street"
              className="w-full"
            />
            <a
              href="#mindset"
              className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white/95 p-5 shadow-soft backdrop-blur transition-shadow hover:shadow-card sm:left-8 sm:right-auto sm:max-w-xs"
            >
              <p className="eyebrow mb-1.5">Read more</p>
              <p className="flex items-center gap-2 font-display text-base text-ink-900">
                About our mindset <Arrow />
              </p>
            </a>
          </div>
        </div>
      </section>

      <section id="mindset" className="relative overflow-hidden bg-ink-900 py-20 lg:py-28">
        <span
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-display text-[14rem] leading-none text-white/5"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <div className="container-page relative mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-clay-300">Our mindset</p>
          <h2 className="font-display text-3xl font-semibold leading-snug text-white sm:text-4xl lg:text-5xl">
            From Fear to Understanding
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            We're not here to convince anyone that density is the answer. We're here to make sure
            people understand what's actually being proposed before they decide how they feel
            about it.
          </p>
        </div>
      </section>

      <section className="bg-mist-100 py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="A recurring pattern" title="The perception gap" />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative rounded-2xl bg-white p-6 shadow-soft sm:p-8">
              <span className="absolute -top-5 left-6 font-display text-6xl text-harbor-200" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="pt-4">
                <p className="font-display text-xl italic leading-snug text-ink-900 sm:text-2xl">
                  People will visit cities and walk around, absolutely loving the scale, the
                  walkability, the mix of housing &mdash; but when they come home, they often
                  fight very similar housing types being built in their own neighborhoods.
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-mist-200 pt-5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-harbor-100 text-sm font-semibold text-harbor-700"
                  aria-hidden="true"
                >
                  DW
                </span>
                <p className="text-sm">
                  <span className="block font-semibold text-ink-900">Darrin Wasniewski</span>
                  <span className="text-ink-800/60">AARP</span>
                </p>
              </div>
            </div>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-harbor-100 bg-gradient-to-br from-harbor-50 to-white p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-ink-800/70">
                This contradiction tells us something important: the resistance isn't really about
                density itself. It's about perception, uncertainty, and difficulty imagining how
                change will actually look and feel. When abstract proposals become concrete
                visualizations in familiar contexts, conversations shift. Fear gives way to
                understanding. Opposition becomes productive dialogue.
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-harbor-200/60 pt-5">
                <p className="shrink-0 font-display text-4xl font-semibold text-harbor-700">72%</p>
                <p className="text-sm leading-relaxed text-ink-800/65">
                  of people report higher support for new housing once they can see exactly
                  what's being proposed &mdash; the same shift Housingkind is built to create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Our mission"
          title="Making housing conversations more productive through clarity and visualization"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {mission.map((m) => (
            <div key={m.title} className="rounded-2xl bg-harbor-50 p-6 transition-shadow hover:shadow-card">
              <span
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${missionTones[m.tone]}`}
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2 3 6.5v9h4v-5h4v5h4v-9L9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="font-semibold text-ink-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist-50 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-2xl font-semibold sm:text-3xl">Why this matters now</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {why.map((w, i) => (
              <div key={w.title} className={`border-l-4 pl-5 ${['border-harbor-400', 'border-clay-400', 'border-sage-400'][i]}`}>
                <h3 className="font-semibold text-ink-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          align="left"
          eyebrow="Our approach"
          title="How we're different"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {different.map((d, i) => (
            <div
              key={d.title}
              className="group relative overflow-hidden rounded-2xl border border-mist-200 bg-white p-6 shadow-card transition-shadow hover:shadow-soft sm:p-8"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 ${
                  ['bg-harbor-400', 'bg-clay-400', 'bg-sage-400', 'bg-harbor-600'][i]
                }`}
                aria-hidden="true"
              />
              <span className="font-display text-sm font-semibold text-harbor-300">{`0${i + 1}`}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-800/70">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-harbor-700">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center text-white lg:py-20">
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            Join us in making housing conversations more productive
          </h2>
          <p className="max-w-xl text-harbor-100/85">
            Whether you're a developer, advocate, neighbor, or policymaker, Housingkind is here to
            support clearer, more human-centered conversations about how our neighborhoods grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/for-developers" variant="secondary">Partner With Us</Button>
            <Button to="/explore" variant="outlineLight">Explore Projects</Button>
          </div>
        </div>
      </section>
    </>
  )
}
