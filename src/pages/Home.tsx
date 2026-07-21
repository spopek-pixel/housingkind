import Button from '../components/ui/Button'
import Arrow from '../components/ui/Arrow'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import StatCard from '../components/sections/StatCard'
import StepCard from '../components/sections/StepCard'
import ProjectCard from '../components/sections/ProjectCard'
import { projects } from '../data/projects'
import heroPhoto from '../assets/images/gentle1.png'
import neighborsPhoto from '../assets/images/community1.png'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mist-50">
        <div className="container-page grid items-center gap-8 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="eyebrow mb-4">People fear what they cannot see</p>
            <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl">
              See how <span className="text-clay-500">gentle density</span> could actually
              fit into your neighborhood
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-800/70">
              Housingkind turns abstract housing proposals into clear, neighborhood-scale
              visualizations and real neighbor stories &mdash; so residents can form an opinion based
              on what's really being built, not what they imagine.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/learn" variant="primary" icon={<Arrow />}>
                Learn the Basics
              </Button>
              <Button to="/visualize-your-street" variant="ghost">
                Visualize Your Street
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0 lg:max-w-md">
            <img
              src={heroPhoto}
              alt="A row of historic homes on a residential street, similar to where gentle density projects are built"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className="bg-harbor-800">
        <div className="container-page py-16">
          <SectionHeading
            tone="dark"
            eyebrow="Why this matters"
            title="The housing challenge we all live with"
            description="Four forces are colliding at once, and most people never see them laid out together."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0}>
              <StatCard
                value="4.7M"
                label="Homes short"
                description="The U.S. is short an estimated 4.7 million homes where people actually want and need to live."
              />
            </Reveal>
            <Reveal delay={100}>
              <StatCard
                value="10,000/day"
                label="People turning 65"
                description="More people want to downsize and stay near family, but the right-sized homes often aren't there."
              />
            </Reveal>
            <Reveal delay={200}>
              <StatCard
                value="1 in 3"
                label="Renter cost-burdened"
                description="Roughly a third of renter households spend more than 30% of income on housing."
              />
            </Reveal>
            <Reveal delay={300}>
              <StatCard
                value="72%"
                label="Support it up close"
                description="Support for new housing often rises once people can see exactly what's being proposed."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What is gentle density */}
      <section className="container-page pt-16 pb-10 lg:pt-24 lg:pb-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src={neighborsPhoto}
              alt="Neighbors talking and laughing together outdoors"
              className="rounded-2xl shadow-card"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-5 shadow-soft sm:left-auto sm:right-6 sm:max-w-xs">
              <p className="font-display text-sm italic leading-snug text-ink-900">
                &ldquo;You get to know your neighbors a lot faster when there are more front
                porches on the block.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-ink-800/60">
                &mdash; A resident, on gentle density in practice
              </p>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">The vocabulary, plainly explained</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">What "gentle density" actually means</h2>
            <p className="mt-4 text-ink-800/70 leading-relaxed">
              Gentle density describes small-scale housing types &mdash; duplexes, fourplexes,
              townhomes, and accessory dwelling units (ADUs). These buildings are similar in
              height and footprint to single-family homes, but quietly add more housing options
              over time, without the wholesale transformation people often picture.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" aria-hidden="true" />
                <span><strong className="text-ink-900">Height-matched.</strong> Typically 1&ndash;3 stories, close to the homes around them.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-clay-400" aria-hidden="true" />
                <span><strong className="text-ink-900">Context-sensitive.</strong> The same housing type looks different depending on the street it's on.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-harbor-400" aria-hidden="true" />
                <span><strong className="text-ink-900">Gradual.</strong> Neighborhoods evolve home by home, not tower by tower.</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button to="/learn" variant="ghost" icon={<Arrow />}>
                Learn more about housing types
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-mist-50 pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How Housingkind works"
            title="From proposal to informed conversation"
            description="We partner with developers and advocates to create visualizations and stories that reduce fear and support better conversations."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0}>
              <StepCard number="01" title="Partner" description="Developers and advocates bring real, proposed projects and site details." />
            </Reveal>
            <Reveal delay={100}>
              <StepCard number="02" title="Visualize" description="We build clear visuals showing exactly how a project fits into its existing block." />
            </Reveal>
            <Reveal delay={200}>
              <StepCard number="03" title="Engage" description="Visuals become tools for neighborhood meetings and planning reviews." />
            </Reveal>
            <Reveal delay={300}>
              <StepCard number="04" title="Document" description="After completion, we return to record how neighbors actually experienced the change." />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-page py-16 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="See it for yourself"
            title="Real projects, real neighborhoods"
            description="Browse completed and in-progress gentle density projects across the country."
          />
          <Button to="/explore" variant="ghost" icon={<Arrow />} className="shrink-0">
            Browse all projects
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-harbor-700">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center text-white lg:py-20">
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            Ready to see what's possible on your street?
          </h2>
          <p className="max-w-xl text-harbor-100/85">
            Browse real projects, read neighbor stories, or try our visualization tool to explore
            how gentle density could fit where you live.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/visualize-your-street" variant="secondary">
              Visualize Your Street
            </Button>
            <Button to="/explore" variant="outlineLight">
              Explore Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
