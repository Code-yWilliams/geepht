import { AppShell, Flex, Stack } from '@mantine/core'
import {
  IconBrandSafari,
  IconCircleCheck,
  IconSearch,
  IconSettings,
  IconUserCircle,
  IconUsers,
} from '@tabler/icons-react'
import NavLink from './NavLink'
import useCurrentUser from '@hooks/currentUser'
import { RefObject } from 'react'
import { useRouterState } from '@tanstack/react-router'

interface NavBarProps {
  ref: RefObject<HTMLElement>
  hideLabels?: boolean
}

const NavBar = ({ ref }: NavBarProps) => {
  const { username } = useCurrentUser()

  const currentPath = useRouterState({
    select: state => state.location.pathname,
  })

  return (
    <>
      <AppShell.Navbar
        p={0}
        ref={ref}
        style={{ transition: 'width 0.2s ease' }}
      >
        <Stack
          justify='center'
          gap={0}
          style={{ height: '100%', maxWidth: 200, textAlign: 'start' }}
        >
          <NavLink
            label={'My Lists'}
            to='/$username'
            params={{ username }}
            icon={<IconUserCircle size={35} />}
            activeOverride={currentPath.includes(username)}
          />
          <NavLink
            label={'Friends'}
            to='/friends'
            icon={<IconUsers size={35} />}
          />
          <NavLink
            label={'Claimed Items'}
            to='/claimed'
            icon={<IconCircleCheck size={35} />}
          />
          <NavLink
            label={'Explore'}
            to='/explore'
            icon={<IconBrandSafari size={35} />}
          />
          <NavLink
            label={'Search'}
            to='/search'
            icon={<IconSearch size={35} />}
          />
        </Stack>
        <NavLink
          label={'Settings'}
          to='/settings'
          icon={<IconSettings size={35} />}
          style={{ marginBottom: 30 }}
        />
      </AppShell.Navbar>
    </>
  )
}

export default NavBar
