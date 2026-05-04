"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card"
import { Icon } from "@/components/icon"
import type { IconKey } from "@/components/ui/svgs"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export type ProjectTech = {
    icon: IconKey
    label?: string
}

type ProjectCardProps = {
    title: string
    description: string
    type: string
    techStack: ProjectTech[]
    image: string
    imageAlt?: string
    githubUrl: string
    liveUrl?: string
}

export function ProjectCard({
    title,
    description,
    type,
    techStack,
    image,
    imageAlt = title,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <Card className="overflow-hidden pt-0 bg-background/40 backdrop-blur-md border border-border/50 shadow-sm flex flex-col">

            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                />
            </div>

            <CardHeader>
                <div className="mb-2">
                    <Badge variant="secondary">{type}</Badge>
                </div>

                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
                <TooltipProvider>
                    <div className="flex flex-wrap items-center gap-3">
                        {techStack.map(({ icon, label }) => (
                            <Tooltip key={`${title}-${icon}`}>
                                <TooltipTrigger asChild>
                                    <div className="flex h-8 w-8 items-center justify-center transition">
                                        <Icon name={icon} className="h-6 w-6" />
                                    </div>
                                </TooltipTrigger>

                                <TooltipContent>
                                    <p>{label ?? icon}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </CardContent>

            <CardFooter className="flex items-center justify-between">

                <Link
                    href={githubUrl}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
                >
                    <Icon name="GitHub" className="h-4 w-4" />
                    GitHub
                </Link>

                {liveUrl && (
                    <Link
                        href={liveUrl}
                        target="_blank"
                        className="flex items-center gap-1 text-sm text-muted-foreground font-medium hover:text-foreground"
                    >
                        Demo ↗
                    </Link>
                )}
            </CardFooter>
        </Card>
    )
}