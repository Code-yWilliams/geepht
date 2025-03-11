import { useIsMobile } from '@hooks/style'
import { NavLink as MantineNavLink } from '@mantine/core'
import { Link, LinkProps, useRouterState } from '@tanstack/react-router'
import { CSSProperties, ReactNode } from 'react'

interface NavLinkProps extends LinkProps {
  icon: ReactNode
  label?: string | false
  style?: CSSProperties
  activeOverride?: boolean
  children?: ReactNode
}

const NavLink = ({
  icon,
  label,
  to,
  style,
  activeOverride,
  children,
  ...rest
}: NavLinkProps) => {
  const currentPath = useRouterState({
    select: state => state.location.pathname,
  })

  const active = to && currentPath.includes(to)
  const isMobile = useIsMobile()

  return (
    <Link
      to={to}
      {...rest}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flex: isMobile ? 1 : 0,
        ...style,
      }}
    >
      <MantineNavLink
        leftSection={isMobile ? undefined : icon}
        label={isMobile ? icon : label}
        style={{
          whiteSpace: 'nowrap',
          lineHeight: 1,
          textAlign: isMobile ? 'center' : 'left',
          height: 70,
        }}
        component='span'
        active={activeOverride ? activeOverride : active}
      />
    </Link>
  )
}

export default NavLink
