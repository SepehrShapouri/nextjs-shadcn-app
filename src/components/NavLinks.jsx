'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
const navLinks = [
    { id: 0, href: "/", title: "Home" },
    { id: 1, href: "/dashboard", title: "Dashboard" },
    { id: 2, href: "/blog", title: "Blog" },
    { id: 3, href: "/services", title: "Services" },
    { id: 4, href: "/terms", title: "Terms" },
    { id: 5, href: "/privacy", title: "Privacy" },
  ];
function NavLinks() {
    const pathname = usePathname()
  return (
    <>
    {navLinks.map((link) => {
      return (
        <Link
          key={link.id}
          href={link.href}
          className={clsx('text-muted-foreground transition-colors hover:text-foreground',{
            'text-foreground' : pathname === link.href
          })}
        >
          {link.title}
        </Link>
      );
    })}
  </>
  )
}

export default NavLinks