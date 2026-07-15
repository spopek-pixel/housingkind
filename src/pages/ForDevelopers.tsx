import { useState } from 'react'
import Button from '../components/ui/Button'
import Arrow from '../components/ui/Arrow'
import SectionHeading from '../components/ui/SectionHeading'
import StepCard from '../components/sections/StepCard'
import heroImage from '../assets/images/developers_home.png'

const tiers = [
  {
    name: 'Single Project',
    blurb: 'For developers with one project seeking community buy-in.',
    features: ['Up to 3 high-quality visualizations', 'Before/after context views', 'Digital files for presentations', 'Basic community meeting support', 'Post-completion story collection'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Project Series',
    blurb: 'For developers with multiple projects in the same region.',
    features: ['Unlimited visualizations for 3–5 projects', 'Neighborhood context studies', 'Presentation templates', 'On-site community meeting attendance', 'Priority turnaround times', 'Featured in public library'],
    cta: 'Learn More',
    highlighted: true,
  },
  {
    name: 'Advocacy Partner',
    blurb: 'For organizations working on policy change and public education.',
    features: ['Custom visualization library', 'Educational materials', 'Data analysis and reporting', 'Training for your team', 'Co-branded resources'],
    cta: 'Partner With Us',
    highlighted: false,
  },
]

export default function ForDevelopers() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', projectType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="bg-harbor-700">
        <div className="container-page grid items-center gap-10 py-16 text-white lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Partner with Housingkind to build <span className="text-clay-300">community support</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-harbor-100/85">
              We help developers and housing advocates reduce neighborhood opposition through
              clear, realistic visualizations that show how missing middle housing fits into real
              communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#inquiry" className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-400 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-clay-500">
                Schedule a Consultation <Arrow />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                See Options
              </a>
            </div>
          </div>
          <img src={heroImage} alt="A modern fourplex development at dusk" className="w-full" />
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          eyebrow="Partnership process"
          title="From initial consultation to post-completion documentation"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StepCard number="01" title="Initial Consultation" description="Share your project details, location, and community context. We'll discuss your goals and timeline." />
          <StepCard number="02" title="Visualization Development" description="We create accurate, neighborhood-scale visualizations showing how your project fits into the existing context." />
          <StepCard number="03" title="Community Engagement" description="Use visuals in neighborhood meetings, city council presentations, and planning reviews to support productive conversations." />
          <StepCard number="04" title="Post-Completion Documentation" description="After construction, we return to document neighbor experiences and add your project to our public library." />
        </div>
      </section>

      <section id="pricing" className="bg-mist-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Partnership options" title="Flexible pricing for developers and advocacy organizations" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  t.highlighted ? 'border-harbor-500 bg-white shadow-soft ring-1 ring-harbor-500' : 'border-mist-200 bg-white'
                }`}
              >
                {t.highlighted && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-sage-50 px-3 py-1 text-xs font-semibold text-sage-600">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-ink-900">{t.name}</h3>
                <p className="mt-1 text-sm text-ink-800/65">{t.blurb}</p>
                <p className="mt-4 font-semibold text-ink-900">Contact for pricing</p>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-800/75">
                      <span className="mt-0.5 text-sage-500" aria-hidden="true">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={t.highlighted ? 'primary' : 'ghost'}
                  className="mt-6 w-full justify-center"
                  href="#inquiry"
                >
                  {t.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="relative overflow-hidden bg-harbor-700 py-16 lg:py-24">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-harbor-500/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-clay-400/20 blur-3xl" aria-hidden="true" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="text-white">
            <p className="eyebrow mb-4 text-clay-300">Let's talk</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to reduce opposition and build community support?
            </h2>
            <p className="mt-4 max-w-md text-harbor-100/85">
              Schedule a consultation to discuss your project and how Housingkind can help you
              engage neighbors and navigate the approval process.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Free initial consultation, no obligation',
                'We reply within two business days',
                'Options from single projects to advocacy partnerships',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-harbor-100/90">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs"
                    aria-hidden="true"
                  >
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            {submitted ? (
              <p className="py-10 text-center font-display text-lg text-ink-900" role="status">
                Thanks &mdash; your inquiry has been noted. We'll follow up by email shortly.
              </p>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-800/80">Name</label>
                  <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-800/80">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-ink-800/80">Organization</label>
                  <input id="organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-ink-800/80">Project Type</label>
                  <input id="projectType" value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800/80">Tell us about your project</label>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm" />
                </div>
                <Button type="submit" variant="primary" className="w-full justify-center">Submit Inquiry</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
