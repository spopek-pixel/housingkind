import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'General question', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-mist-50">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Get in touch"
            title="Contact Housingkind"
            description="Questions about a specific project, our research, or how to bring Housingkind to your city? Send us a note."
          />
          <div className="mt-8 space-y-4 text-sm text-ink-800/75">
            <p><strong className="text-ink-900">General inquiries:</strong> hello@housingkind.org</p>
            <p><strong className="text-ink-900">Developer partnerships:</strong> partners@housingkind.org</p>
            <p><strong className="text-ink-900">Press:</strong> press@housingkind.org</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
          {submitted ? (
            <p className="py-12 text-center font-display text-lg text-ink-900" role="status">
              Thanks for reaching out &mdash; we'll get back to you within two business days.
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
                <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink-800/80">Name</label>
                <input id="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm" />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-ink-800/80">Email</label>
                <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm" />
              </div>
              <div>
                <label htmlFor="c-topic" className="mb-1.5 block text-sm font-medium text-ink-800/80">Topic</label>
                <select id="c-topic" value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm">
                  <option>General question</option>
                  <option>A specific project near me</option>
                  <option>Developer partnership</option>
                  <option>Press or media</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-ink-800/80">Message</label>
                <textarea id="c-message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg border border-mist-200 px-3 py-2.5 text-sm" />
              </div>
              <Button type="submit" variant="primary" className="w-full justify-center">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
