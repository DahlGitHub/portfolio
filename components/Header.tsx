"use client"

import { useState } from "react"
import Link from "next/link"
import { AlignLeft, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/modetoggle"
import { Navbar } from "@/components/Navbar"
import { MobileNav } from "@/components/MobileNav"
import { Icon } from "@/components/icon"

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-6xl items-center px-6">

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() => setShowMobileMenu((open) => !open)}
            aria-label="Toggle menu"
          >
            {showMobileMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <AlignLeft className="h-5 w-5" />
            )}
          </Button>

          <Link href="/" className="flex items-center">
            <Icon name="Logo" className="h-10 w-10" />
          </Link>
        </div>


        <div className="ml-auto flex items-center gap-2">
          <div className="hidden lg:flex">
            <Navbar />
          </div>
          <div className="self-stretch">
            <Separator orientation="vertical" className="mx-2 hidden h-6 lg:block" />
          </div>
          <Button asChild size="icon" variant="ghost">
            <Link href="/" target="_blank">
              <Icon name="GitHub" className="h-5 w-5" />
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </div>

      {showMobileMenu && (
        <MobileNav closeMenu={() => setShowMobileMenu(false)} />
      )}
    </header>
  )
}
