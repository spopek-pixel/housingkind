import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Arrow from '../components/ui/Arrow'
import { projects } from '../data/projects'
import { stories } from '../data/stories'
import StoryCard from '../components/sections/StoryCard'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/explore" replace />

  const relatedStory = stories.find((s) => s.tag && s.role.toLowerCase().includes(project.housingType.toLowerCase()))

  return (
    <>
      <section className="container-page pt-10">
        <Link to="/explore" className="inline-flex items-center gap-1 text-sm font-semibold text-harbor-700">
          <span aria-hidden="true">&larr;</span> Back to all projects
        </Link>
      </section>

      <section className="container-page py-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <img src={project.image} alt={`${project.name} in ${project.city}`} className="w-full rounded-2xl shadow-soft" />
          </div>
          <div>
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                project.status === 'Completed' ? 'bg-sage-50 text-sage-600' : 'bg-clay-50 text-clay-700'
              }`}
            >
              {project.status}
            </span>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{project.name}</h1>
            <p className="mt-1.5 text-ink-800/60">{project.city}</p>
            <div className="mt-4 flex gap-2">
              <Badge tone="harbor">{project.housingType}</Badge>
              <Badge tone="neutral">{project.units}</Badge>
            </div>
            <p className="mt-6 leading-relaxed text-ink-800/75">{project.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/visualize-your-street" variant="primary">Visualize a Similar Project</Button>
              <Button to="/contact" variant="ghost">Ask About This Project</Button>
            </div>
          </div>
        </div>
      </section>

      {relatedStory && (
        <section className="bg-mist-50 py-16">
          <div className="container-page">
            <h2 className="mb-6 text-2xl font-semibold">A neighbor's perspective</h2>
            <StoryCard story={relatedStory} />
            <div className="mt-6">
              <Button to="/stories" variant="ghost" icon={<Arrow />}>Read more neighbor stories</Button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
