import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import StoryCard from '../components/sections/StoryCard'
import { stories } from '../data/stories'
import conversationIllustration from '../assets/images/couple_talking.png'

export default function Stories() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist-50">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-clay-200/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-harbor-200/30 blur-3xl" aria-hidden="true" />
        <div className="container-page relative grid items-start gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="eyebrow mb-4">Real neighbors, real accounts</p>
            <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              What actually happens when gentle density moves in?{' '}
              <span className="text-clay-500">Ask the neighbors.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-800/70">
              Hear how gentle density is shaping communities through the voices of the people who
              actually live there &mdash; before and after a project was built.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/explore" variant="primary">Explore Related Projects</Button>
              <Button to="/for-developers" variant="ghost">Partner With Us</Button>
            </div>
          </div>
          <img
            src={conversationIllustration}
            alt="An illustration of two neighbors having a friendly conversation"
            className="mx-auto max-w-md lg:ml-auto lg:mr-0 lg:mt-2 lg:max-w-lg"
          />
        </div>
      </section>

      <section className="bg-mist-100 pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="First-person accounts"
            title="The human side of housing, told firsthand"
            description="These are real accounts collected from residents living in or near gentle density and affordable housing developments."
          />
          <div className="mt-10 space-y-6">
            {stories.map((s) => (
              <StoryCard key={s.name} story={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-harbor-700">
        <div className="container-page py-16 text-center text-white lg:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">
            The patterns we see across neighborhoods
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-harbor-100/85">
            Initial concerns about traffic, parking, or changing character often don't
            materialize. Instead, neighbors consistently report improved walkability, stronger
            social connections, and housing options that let people stay in the communities they
            love.
          </p>
        </div>
      </section>
    </>
  )
}
