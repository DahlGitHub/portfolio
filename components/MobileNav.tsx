import Link from "next/link"
import { cn } from "@/lib/utils"

const links = [
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
]

type MobileNavProps = {
    closeMenu?: () => void
}

export function MobileNav({ closeMenu }: MobileNavProps) {
    return (
        <div className="fixed inset-x-0 top-16 z-50 p-4 md:hidden">
            <nav className="grid gap-1 rounded-xl border bg-popover p-2 text-popover-foreground shadow-lg">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                            "rounded-lg px-4 py-3 text-sm font-medium",
                            "text-muted-foreground transition-colors",
                            "hover:bg-muted hover:text-foreground"
                        )}
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
        </div>
    )
}