'use client'
import { ReactNode } from 'react';
import Link from 'next/link';

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

export const NavLink = ({ children, href }: NavLinkProps) => (
  <Link href={href}>
    {children}
  </Link>
);
