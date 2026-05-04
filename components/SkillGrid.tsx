"use client"

import { SkillItem } from "@/components/SkillItem"
import type { Skill } from "@/components/SkillsData"
import { Icon } from "@/components/icon"

export function SkillGrid({ items }: { items: Skill[] }) {
    return (
        <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3">
            {items.map((item) => (
                <SkillItem
                    key={item.id}
                    name={item.name}
                    icon={<Icon name={item.icon} />}
                />
            ))}
        </div>
    )
}