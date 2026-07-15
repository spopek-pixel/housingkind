import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center gap-6 py-24 text-center">
      <p className="font-display text-6xl font-semibold text-harbor-200">404</p>
      <h1 className="text-3xl font-semibold">We couldn't find that page</h1>
      <p className="max-w-md text-ink-800/70">
        The page you're looking for may have moved. Try heading back home or exploring our
        current housing projects.
      </p>
      <div className="flex gap-4">
        <Button to="/" variant="primary">Back to Home</Button>
        <Button to="/explore" variant="ghost">Explore Projects</Button>
      </div>
    </section>
  )
}
