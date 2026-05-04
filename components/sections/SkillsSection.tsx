import { skillsData } from "@/components/SkillsData"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeXml, Box, ALargeSmall, Blocks } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Separator } from "@/components/ui/separator"
import { CodeSnippet } from "@/components/CodeSnippet"
import { SkillGrid } from "@/components/SkillGrid"

export function SkillsSection() {
  const skillGroups = [
    { title: "Languages", category: "Skill", icon: <ALargeSmall /> },
    { title: "Frontend", category: "Frontend", icon: <CodeXml /> },
    { title: "Backend", category: "Backend", icon: <Box /> },
    { title: "Tools", category: "Tool", icon: <Blocks /> },
  ]

  return (
    <section className="py-20">
      <div className="grid gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="max-w-md space-y-4">
          <SectionHeader title="Skills" />

          <p className="text-muted-foreground">
            Technologies and tools I’ve used throughout my academic and personal
            projects.
          </p>

          <CodeSnippet />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const items = skillsData.filter(
              (skill) => skill.category === group.category
            )

            return (
              <Card
                key={group.title}
                className="
                  relative overflow-hidden
                  border border-border/80
                  backdrop-blur-md">
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-black/[0.01]
                    via-transparent
                    to-transparent
                    dark:from-white/[0.02]"/>

                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/70 shadow-sm dark:bg-muted/30">
                      {group.icon}
                    </div>

                    <CardTitle className="text-lg">{group.title}</CardTitle>
                  </div>
                </CardHeader>

                <Separator className="relative" />

                <CardContent className="relative py-2 px-3">
                  <SkillGrid items={items} />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}