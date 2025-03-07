import { AppShell } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { Outlet } from "@tanstack/react-router"
import TanStackRouterDevTools from "@components/TanStackRouterDevTools"
import NavBar from "./NavBar"

const Layout = () => {
  const { hovered: navHovered, ref: navBarRef } = useHover()

  return (
    <AppShell navbar={{width: navHovered ? 200 : 60, breakpoint: 'sm', collapsed: { mobile: true}}} padding="md">
      <NavBar ref={navBarRef} hideLabels={!navHovered}/>
      <AppShell.Main>
        <Outlet />
        <TanStackRouterDevTools />
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout