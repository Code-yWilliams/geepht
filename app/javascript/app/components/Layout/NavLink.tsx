import { NavLink as MantineNavLink } from "@mantine/core"
import { Link, LinkProps } from "@tanstack/react-router"
import { ReactNode } from "react"

interface NavLinkProps extends LinkProps {
  icon: ReactNode
  label?: string | false
}

const NavLink = ({ icon, label, to, ...rest }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      {...rest}
      style={{ 
        textDecoration: 'none', 
        color: 'inherit',
        display: 'block'
      }}
    >
      <MantineNavLink
        leftSection={icon}
        label={label}
        style={{ whiteSpace: 'nowrap'}}
        component="span"
      />
    </Link>
  )
}

export default NavLink