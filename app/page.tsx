import { Header } from '@/components/Header'
import { SkillsSection } from '@/components/sections/SkillsSection'
import Footer from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectSection } from '@/components/sections/ProjectSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-foreground/5 blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>

          <div className="container mx-auto max-w-6xl px-6">
            <HeroSection />
            <SkillsSection />
          </div>
        </section>

        <section className="w-full border-t bg-gradient-to-br from-muted/60 via-background to-muted/30 mouse-pointer-events-none">
          <div className="container mx-auto max-w-6xl px-6 py-24">
            <ProjectSection />
            <ContactSection />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}