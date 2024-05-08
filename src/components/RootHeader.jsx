import { Menu, Package } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ThemeToggler";
import WritingChex from "./WritingChex";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import NavLinks from "./NavLinks";
const navLinks = [
  { id: 0, href: "/dahsboard", title: "Dashboard" },
  { id: 1, href: "/blog", title: "Blog" },
  { id: 2, href: "/services", title: "Services" },
  { id: 3, href: "/terms", title: "Terms" },
  { id: 4, href: "/privacy", title: "Privacy" },
];
function RootHeader() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <WritingChex />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <NavLinks/>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <WritingChex />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <NavLinks/>
          </nav>
        </SheetContent>
      </Sheet>
      <ModeToggle />
    </header>
  );
}

export default RootHeader;
