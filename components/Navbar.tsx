"use client"

import Link from "next/link"
import { Button } from "./ui/button"

const navItems = [
  { title: "Skills", href: "/skills" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
]

export function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-3">

        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-foreground">
              <Button variant="ghost" size="sm">
                {item.title}
              </Button>
            </Link>
          ))}
        </div>

      </div>
    </nav>
  )
}
