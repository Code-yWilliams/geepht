import { createFileRoute, Navigate } from '@tanstack/react-router'
import useCurrentUser from '@hooks/currentUser'

const Index = () => {
  const { username } = useCurrentUser()

  return (
    <Navigate to={username}/>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})