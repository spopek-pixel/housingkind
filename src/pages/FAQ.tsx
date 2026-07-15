import SectionHeading from '../components/ui/SectionHeading'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import { faqs } from '../data/faq'

export default function FAQ() {
  return (
    <>
      <section className="bg-mist-50">
        <div className="container-page py-16 lg:py-20">
          <SectionHeading align="left" eyebrow="Questions" title="Frequently Asked Questions" description="If you can't find your answer here, reach out through our Contact page." />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
          <div className="mt-10 rounded-2xl bg-harbor-50 p-8 text-center">
            <h2 className="text-xl font-semibold text-ink-900">Still have a question?</h2>
            <p className="mt-2 text-sm text-ink-800/70">We're happy to help point you in the right direction.</p>
            <div className="mt-5">
              <Button to="/contact" variant="primary">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
