import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ProjectCard"
import { SectionHeader } from "@/components/SectionHeader"
import { projectsData } from "@/components/ProjectData"
import { Icon } from "@/components/icon"

export function ProjectSection() {
  return (
    <section id="projects" className="container mx-auto max-w-6xl scroll-mt-20 py-12 px-6">
      <SectionHeader title="Featured Projects" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            type={project.type}
            image={project.image}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>

            <div className="mt-10 flex justify-center">
        <Button asChild variant="outline">
          <Link href="https://github.com/DahlGitHub?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Icon name="GitHub" className="h-4 w-4" />
            View All Projects →
          </Link>
        </Button>
      </div>
    </section>
  )
}
