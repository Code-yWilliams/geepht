import { AppShell } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { Outlet } from '@tanstack/react-router'
import TanStackRouterDevTools from '@components/TanStackRouterDevTools'
import LeftNav from './LeftNav'
import BottomNav from './BottomNav'

const Layout = () => {
  const { hovered: navHovered, ref: navBarRef } = useHover()

  return (
    <AppShell
      navbar={{
        width: navHovered ? 200 : 60,
        breakpoint: 'sm',
        collapsed: { mobile: true },
      }}
      footer={{
        height: { mobile: 50, desktop: 0 },
      }}
      padding='md'
    >
      <LeftNav ref={navBarRef} hideLabels={!navHovered} />
      <AppShell.Main>
        <Outlet />
        <TanStackRouterDevTools />
      </AppShell.Main>
      <BottomNav />
    </AppShell>
  )
}

export default Layout
