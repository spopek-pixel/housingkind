import { Link } from 'react-router-dom'
import logo from '../../assets/images/housingkind_logo.png'

const explore = [
  { label: 'Explore Developments', to: '/explore' },
  { label: 'Neighbor Stories', to: '/stories' },
  { label: 'Visualize Your Street', to: '/visualize-your-street' },
  { label: 'Learn the Basics', to: '/learn' },
]
const resources = [
  { label: 'Myths vs. Facts', to: '/myths-vs-facts' },
  { label: 'Resources & Glossary', to: '/resources' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
]
const partner = [
  { label: 'For Developers', to: '/for-developers' },
  { label: 'About Housingkind', to: '/about' },
]

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-ink-800/70 hover:text-harbor-700 transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-harbor-50 text-ink-900">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img src={logo} alt="Housingkind" className="h-8 w-auto" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-800/70">
            A public resource helping communities see, understand, and discuss affordable and
            missing-middle housing before it's built &mdash; because people fear what they can't see.
          </p>
        </div>
        <FooterColumn title="Explore" links={explore} />
        <FooterColumn title="Understand" links={resources} />
        <FooterColumn title="Partner" links={partner} />
      </div>
      <div className="border-t border-harbor-200/60">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-ink-800/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Housingkind. A public resource for understanding gentle, affordable density.</p>
          <p>Built as a graduate capstone project &middot; Not affiliated with any single city or developer.</p>
        </div>
      </div>
    </footer>
  )
}
