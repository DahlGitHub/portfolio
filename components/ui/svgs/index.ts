import type { SVGProps, ComponentType } from "react"
import { Bootstrap } from "./bootstrap"
import { CssOld } from "./cssOld"
import { Discord } from "./discord"
import { Figma } from "./figma"
import { Firebase } from "./firebase"
import { Git } from "./git"
import { GitHub } from "./github"
import { Html5 } from "./html5"
import { Intellijidea } from "./intellijidea"
import { Java } from "./java"
import { Javascript } from "./javascript"
import { Kotlin } from "./kotlin"
import { Linux } from "./linux"
import { Logo } from "./logo"
import { MysqlIconDark } from "./mysqlIconDark"
import { MysqlIconLight } from "./mysqlIconLight"
import { NextjsIconDark } from "./nextjsIconDark"
import { Nodejs } from "./nodejs"
import { Php } from "./php"
import { PhpDark } from "./phpDark"
import { Postgresql } from "./postgresql"
import { Python } from "./python"
import { RaspberryPI } from "./raspberry"
import { ReactDark } from "./reactDark"
import { ReactLight } from "./reactLight"
import { shadcnUi } from "./shadcnUi"
import { Supabase } from "./supabase"
import { Tailwindcss } from "./tailwindcss"
import { Typescript } from "./typescript"
import { Vercel } from "./vercel"
import { VercelDark } from "./vercelDark"
import { Vscode } from "./vscode"

export const icons = {
    Bootstrap,
    CssOld,
    Discord,
    Figma,
    Firebase,
    Git,
    GitHub,
    Html5,
    Intellijidea,
    Java,
    Javascript,
    Kotlin,
    Linux,
    Logo,
    MysqlIconDark,
    MysqlIconLight,
    NextjsIconDark,
    Nodejs,
    Php,
    PhpDark,
    Postgresql,
    Python,
    RaspberryPI,
    ReactDark,
    ReactLight,
    shadcnUi,
    Supabase,
    Tailwindcss,
    Typescript,
    Vercel,
    VercelDark,
    Vscode,


} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>

export type IconKey = keyof typeof icons

export const themeIconMap: Partial<Record<IconKey, IconKey>> = {
  Php: "PhpDark",
  MysqlIconLight: "MysqlIconDark",
  ReactLight: "ReactDark",
  Vercel: "VercelDark",
}