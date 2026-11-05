"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { currentVersion, portfolioVersions } from "@/lib/versions"

export function VersionSelector() {
  const pathname = usePathname()
  const selected = portfolioVersions.find(({ id }) => pathname === `/${id}`)?.id ?? currentVersion

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label={`Portfolio version: ${selected}`}>
          {selected}
          <ChevronDown className="size-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Portfolio version</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Latest ({currentVersion})
            {pathname === "/" && <Check className="ml-auto size-4" aria-hidden="true" />}
          </Link>
        </DropdownMenuItem>
        {portfolioVersions.map(({ id, label }) => (
          <DropdownMenuItem key={id} asChild>
            <Link href={`/${id}`} aria-current={pathname === `/${id}` ? "page" : undefined}>
              {label}
              {pathname === `/${id}` && <Check className="ml-auto size-4" aria-hidden="true" />}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
