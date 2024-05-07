import { Package } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ThemeToggler'
import WritingChex from './WritingChex'

function RootHeader() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 justify-between">
    <nav className=" font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <WritingChex/>
      </Link>
    </nav>
    <ModeToggle/>
  </header>
  )
}

export default RootHeader