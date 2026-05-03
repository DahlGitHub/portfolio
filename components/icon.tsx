"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { icons, themeIconMap } from "@/components/ui/svgs"
import type { IconKey } from "@/components/ui/svgs"
import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconKey
}

export function Icon({ name, ...props }: IconProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const iconKey =
    mounted && resolvedTheme === "dark" && themeIconMap[name]
      ? themeIconMap[name]
      : name

  const Svg = icons[iconKey]

  return <Svg {...props} />
}