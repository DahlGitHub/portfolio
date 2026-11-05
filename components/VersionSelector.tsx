"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { currentVersion, portfolioVersions } from "@/lib/versions"

export function VersionSelector() {
  const pathname = usePathname()
  const selected = portfolioVersions.find(({ id }) => pathname === `/${id}`)?.id ?? currentVersion

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 gap-1 rounded-full bg-muted px-2.5 text-xs font-semibold text-foreground hover:bg-accent data-[state=open]:bg-accent"
          aria-label={`Portfolio version: ${selected}`}
        >
          {selected}
          <ChevronDown className="size-3 text-muted-foreground" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} aria-label="Portfolio versions" className="min-w-28 rounded-xl border-border/60 p-1.5 shadow-lg">
        {portfolioVersions.map(({ id, label }) => (
          <DropdownMenuItem key={id} asChild className="rounded-md px-2 py-1.5 text-xs font-semibold">
            <Link href={`/${id}`} aria-current={selected === id ? "page" : undefined}>
              {label}
              {selected === id && <Check className="ml-auto size-3.5" aria-hidden="true" />}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
