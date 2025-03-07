import { NavLink as MantineNavLink } from "@mantine/core"
import { Link, LinkProps, useRouterState } from "@tanstack/react-router"
import { CSSProperties, ReactNode } from "react"

interface NavLinkProps extends LinkProps {
  icon: ReactNode
  label?: string | false
  style?: CSSProperties
  activeOverride?: boolean
}

const NavLink = ({ icon, label, to, style, activeOverride, ...rest }: NavLinkProps) => {
  const currentPath = useRouterState({
    select: (state) => state.location.pathname,
  })

  const active = to && currentPath.includes(to)
  
  return (
    <Link 
      to={to} 
      {...rest}
      style={{ 
        textDecoration: 'none', 
        color: 'inherit',
        ...style
      }}
    >
      <MantineNavLink
        leftSection={icon}
        label={label}
        style={{ whiteSpace: 'nowrap'}}
        component="span"
        active={activeOverride ? activeOverride : active}
      />
    </Link>
  )
}

export default NavLink