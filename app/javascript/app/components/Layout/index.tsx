import { AppShell, Stack } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { IconBrandSafari, IconCircleCheck, IconSearch, IconSettings, IconUserCircle, IconUsers } from "@tabler/icons-react"
import { FileRoutesByPath, Link, Outlet } from "@tanstack/react-router"
import { ReactElement } from "react"
import NavLink from "./NavLink"

type ValidPaths = keyof FileRoutesByPath

const LINKS = new Map<string, { path: ValidPaths, icon: ReactElement }>([
  ['My Lists', { path: '/profile', icon: <IconUserCircle size={35}/> }],
  ['Friends', { path: '/friends', icon: <IconUsers size={35}/> }],
  ['Claimed Items', { path: '/claimed', icon: <IconCircleCheck size={35}/> }],
  ['Explore', { path: '/explore', icon: <IconBrandSafari size={35}/> }],
  ['Search', { path: '/search', icon: <IconSearch size={35}/> }],
])

const Layout = () => {
  const { hovered: navHovered, ref: navHoveredRef } = useHover()

  return (
    <AppShell navbar={{width: navHovered ? 200 : 60, breakpoint: 'sm', collapsed: { mobile: true}}} padding="md">
      <AppShell.Navbar p={0} ref={navHoveredRef} style={{transition: 'width 0.2s ease'}}>
        <Stack justify="center" style={{height: '100%'}}>
            {Array.from(LINKS.entries()).map(([label, {path, icon}]) => <NavLink label={label} to={path} icon={icon} />)}
        </Stack>
          <NavLink
            label={navHovered && "Settings"}
            to="/settings"
            icon={<IconSettings size={35}/>}
          />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </AppShell.Main>
  </AppShell>
  )
}

export default Layout