import { AppShell, Flex } from '@mantine/core'
import NavLink from './NavLink'
import useCurrentUser from '@hooks/currentUser'
import { useRouterState } from '@tanstack/react-router'
import {
  IconBrandSafari,
  IconCircleCheck,
  IconSearch,
  IconSettings,
  IconUserCircle,
  IconUsers,
} from '@tabler/icons-react'
import { useIsMobile } from '@hooks/style'

const BottomNav = () => {
  const { username } = useCurrentUser()

  const currentPath = useRouterState({
    select: state => state.location.pathname,
  })

  const isMobile = useIsMobile()
  if (!isMobile) return null

  return (
    <AppShell.Footer hiddenFrom='desktop'>
      <Flex justify='space-around' style={{ height: '100%' }}>
        <NavLink
          to='/$username'
          params={{ username }}
          icon={<IconUserCircle size={35} />}
          activeOverride={currentPath.includes(username)}
        />
        <NavLink to='/friends' icon={<IconUsers size={35} />} />
        <NavLink to='/claimed' icon={<IconCircleCheck size={35} />} />
        <NavLink to='/explore' icon={<IconBrandSafari size={35} />} />
        <NavLink to='/settings' icon={<IconSettings size={35} />} />
      </Flex>
    </AppShell.Footer>
  )
}

export default BottomNav
