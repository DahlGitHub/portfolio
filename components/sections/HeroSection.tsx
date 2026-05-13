import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Icon } from "@/components/icon"
import { CardSection } from "../CardSection"

function AvailabilityBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
      </span>
      <span className="font-medium text-foreground">Available for Work</span>
    </div>
  )
}

function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/10 to-transparent" />
    </>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-3 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-border/60 bg-card/40 px-6 py-14 md:px-14 lg:px-20">
          <HeroBackground />

          <div className="relative z-10 grid min-h-[420px] grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <AvailabilityBadge />

              <h1 className="text-6xl font-semibold leading-none tracking-[-0.06em] text-foreground md:text-7xl lg:text-8xl">
                AdrianD.
              </h1>
              <h2 className="text-3xl font-semibold leading-none tracking-[-0.06em] text-foreground md:text-4xl lg:text-5xl">
                Design. Build. Deploy.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground md:text-xl">
                Software developer focused on building clean, reliable, and
                practical web experiences.
              </p>

              <Link
                href="#projects"
                className="group mt-10 inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.24em] text-foreground"
              >
                <span className="border-b border-foreground/40 pb-3 transition-colors group-hover:border-foreground">
                  View Projects
                </span>
                <ArrowRight className="size-5 stroke-[1.5] transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="relative hidden min-h-[420px] items-center justify-center md:flex">
              <Icon
                name="Logo"
                className="absolute -translate-x-2/3 h-[360px] w-[360px] opacity-5 lg:h-[460px] lg:w-[460px]"
              />

              <div className="relative h-[380px] w-full translate-x-12 lg:translate-x-24">
                <CardSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}