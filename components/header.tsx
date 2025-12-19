import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "./modetoggle"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export function Header() {

    return (
        <header className="bg-background sticky top-0 z-50 w-full">
            <div className="container-wrapper 3xl:fixed:px-0 px-6">
                <div className="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:!h-4">
                    <div className="flex lg:hidden">MobileNav</div>
                    <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="hidden size-8 lg:flex"
                    >
                        <Link href="/">
                            <Icons.gitHub className="size-5" />

                        </Link>
                    </Button>
                    <Navbar />
                    <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                        <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">

                        </div>
                        <Separator
                            orientation="vertical"
                            className="ml-2 hidden lg:block"
                        />
                        <Link href="/">
                            Hello
                        </Link>
                        <Separator orientation="vertical" className="3xl:flex hidden" />
                        <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
                            <Link href="/" target="_blank" rel="noreferrer">
                                <Icons.gitHub />

                            </Link>
                        </Button>
                        <Separator orientation="vertical" />
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}