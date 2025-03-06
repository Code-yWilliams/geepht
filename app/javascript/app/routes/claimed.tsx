import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/claimed')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/claimed"!</div>
}
