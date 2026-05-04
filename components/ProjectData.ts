import type { ProjectTech } from "@/components/ProjectCard"

export type Project = {
    id: string
    title: string
    description: string
    type: string
    image: string
    techStack: ProjectTech[]
    githubUrl: string
    liveUrl?: string
}

export const projectsData: Project[] = [
    {
        id: "event-website",
        title: "Event Website",
        description: "Showcasing events and activities with a built-in dashboard for new students.",
        type: "Fullstack",
        image: "/fadderuka.png",
        techStack: [
            { icon: "NextjsIconDark", label: "Next.js" },
            { icon: "Typescript", label: "TypeScript" },
            { icon: "Tailwindcss", label: "Tailwind CSS" },
            { icon: "shadcnUi", label: "shadcn/ui" },
            { icon: "Firebase", label: "Firebase" },

        ],
        githubUrl: "https://github.com/yourusername/your-repo",
        liveUrl: "https://your-live-url.com",
    },
    {
        id: "tracker-website",
        title: "Tracker Website",
        description: "Track your training and calories with Norwegian products.",
        type: "Fullstack",
        image: "/trackerapp.png",
        techStack: [
            { icon: "NextjsIconDark", label: "Next.js" },
            { icon: "Tailwindcss", label: "Tailwind CSS" },
            { icon: "shadcnUi", label: "shadcn/ui" },
            { icon: "Typescript", label: "TypeScript" },
            { icon: "Firebase", label: "Firebase" },
        ],
        githubUrl: "https://github.com/yourusername/api-dashboard",
    },
    {
        id: "discord-bot",
        title: "Discord Bot",
        description: "A bot for managing and interacting with Discord servers.",
        type: "Backend",
        image: "/discordpython.png",
        techStack: [
            { icon: "Python", label: "Python" },
            { icon: "Discord", label: "Discord" },
            { icon: "Supabase", label: "Supabase" },
            { icon: "RaspberryPI", label: "Raspberry Pi" },
        ],
        githubUrl: "https://github.com/yourusername/discord-bot",
    },
]