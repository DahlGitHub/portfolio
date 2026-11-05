"use client"

import Link from "next/link"
import { Button } from "./ui/button"

const navItems = [
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-3">

        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>
                {item.title}
              </Link>
            </Button>
          ))}
        </div>

      </div>
    </nav>
  )
}
