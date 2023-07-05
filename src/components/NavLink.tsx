import { Link } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface NavLinkProps {
  children: ReactNode
  href: string
}

export const NavLink = ({ children, href }: NavLinkProps) => (
  <Link as={RouterLink} to={href}>
    {children}
  </Link>
)
