import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import Badge from '../ui/Badge'
import Arrow from '../ui/Arrow'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/explore/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-card transition-transform hover:-translate-y-1"
    >
      <div className="h-52 w-full shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1 text-sm text-ink-800/60">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 13s4.5-4.2 4.5-7.5A4.5 4.5 0 0 0 2.5 5.5C2.5 8.8 7 13 7 13Z" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="7" cy="5.5" r="1.6" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          {project.city}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold text-ink-900">{project.name}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge tone={project.status === 'Completed' ? 'sage' : 'clay'}>{project.status}</Badge>
          <Badge tone="harbor">{project.housingType}</Badge>
          <Badge tone="neutral">{project.units}</Badge>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-800/70">{project.description}</p>
        <span className="mt-auto inline-flex items-center gap-1 border-t border-mist-100 pt-4 text-sm font-semibold text-harbor-700">
          View full visualization <Arrow />
        </span>
      </div>
    </Link>
  )
}
