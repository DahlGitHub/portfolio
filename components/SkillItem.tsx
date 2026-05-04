import { Icons } from "@/components/icons";
import { ReactNode } from "react";


type SkillItemProps = {

    name: string;
    icon: ReactNode;

}

export function SkillItem({ name, icon }: SkillItemProps) {
    return (
        <div className="flex flex-col items-center gap-2 px-2 py-1 w-24">
            <span className="flex h-8 w-8 items-center justify-center">
                {icon}
            </span>

            <span className="w-full truncate text-center text-xs font-medium">
                {name}
            </span>
        </div>
    )
}