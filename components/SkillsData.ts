import type { IconKey } from "@/components/ui/svgs"

export type SkillCategory = "Skill" | "Frontend" | "Backend" | "Tool";

export interface Skill {
    id: number
    name: string
    icon: IconKey
    darkIcon?: IconKey
    category: SkillCategory
}
export const skillsData: Skill[] = [
    { id: 5, name: "Java", icon: "Java", category: "Skill" },
    { id: 1, name: "JavaScript", icon: "Javascript", category: "Skill" },
    { id: 2, name: "TypeScript", icon: "Typescript", category: "Skill" },
    { id: 9, name: "Python", icon: "Python", category: "Skill" },
    { id: 10, name: "PHP", icon: "Php", darkIcon: "PhpDark", category: "Skill" },
    { id: 11, name: "Kotlin", icon: "Kotlin", category: "Skill" },

    { id: 14, name: "React", icon: "ReactDark", category: "Frontend" },
    { id: 15, name: "Next.js", icon: "NextjsIconDark", category: "Frontend" },
    { id: 16, name: "Bootstrap", icon: "Bootstrap", category: "Frontend" },
    { id: 17, name: "TailwindCSS", icon: "Tailwindcss", category: "Frontend" },
    { id: 22, name: "shadcn/ui", icon: "shadcnUi", category: "Frontend" },


    { id: 7, name: "PostgreSQL", icon: "Postgresql", category: "Backend" },
    { id: 3, name: "MySQL", icon: "MysqlIconLight", darkIcon: "MysqlIconDark", category: "Backend" },
    { id: 6, name: "Supabase", icon: "Supabase", category: "Backend" },
    { id: 8, name: "Firebase", icon: "Firebase", category: "Backend" },
    { id: 4, name: "Node.js", icon: "Nodejs", category: "Backend" },

    { id: 12, name: "Git", icon: "Git", category: "Tool" },
    { id: 18, name: "VS Code", icon: "Vscode", category: "Tool" },
    { id: 19, name: "IntelliJ IDEA", icon: "Intellijidea", category: "Tool" },
    { id: 20, name: "Vercel", icon: "Vercel", darkIcon: "VercelDark", category: "Tool" },
    { id: 13, name: "Figma", icon: "Figma", category: "Tool" },
    { id: 21, name: "Linux", icon: "Linux", category: "Tool" },

];