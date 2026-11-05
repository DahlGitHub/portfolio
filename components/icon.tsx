"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { icons, themeIconMap } from "@/components/ui/svgs"
import type { IconKey } from "@/components/ui/svgs"
import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconKey
}

const subscribe = () => () => {}

export function Icon({ name, ...props }: IconProps) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const { resolvedTheme } = useTheme()

  const iconKey =
    mounted && resolvedTheme === "dark" && themeIconMap[name]
      ? themeIconMap[name]
      : name

  const Svg = icons[iconKey]

  return <Svg {...props} />
}