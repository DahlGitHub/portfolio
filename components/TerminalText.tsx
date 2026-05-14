'use client';

import { TerminalIcon } from "lucide-react";
import TextType from "@/components/TextType";

const bootCommand = "boot portfolio.skills";

const skillLines = [
  { label: "Languages", value: "Java · TypeScript · Python", status: "loaded" },
  { label: "Frontend", value: "React · Next.js · Tailwind", status: "ready" },
  { label: "Backend", value: "Node · PostgreSQL · Supabase", status: "connected" },
  { label: "Tools", value: "Git · VS Code · Figma", status: "configured" },
];

export function Terminal() {
  return (
    <div
      className="
        pointer-events-none relative select-none overflow-hidden rounded-2xl
        border border-black/10 bg-white/80 p-4 font-mono text-xs
        shadow-xl shadow-black/5 backdrop-blur-xl
        dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-2xl dark:shadow-black/30
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.025] via-transparent to-transparent dark:from-white/[0.045]" />
      <div className="absolute -left-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl dark:bg-primary/10" />
      <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-zinc-500/10 blur-3xl dark:bg-white/5" />

      <div className="relative mb-4 flex items-center justify-between border-b border-black/10 pb-3 dark:border-white/10">
        <div className="flex items-center gap-2 text-foreground/70">
          <TerminalIcon className="size-3.5 text-primary/80" />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Terminal
          </span>
        </div>

        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80">
          skills
        </span>
      </div>

      <div className="relative space-y-3">
        <p className="text-muted-foreground/95">
          <span className="mr-2 text-primary">&gt;</span>
          <TextType
            as="span"
            text={bootCommand}
            typingSpeed={45}
            initialDelay={250}
            loop={false}
            showCursor={false}
            className="inline"
          />
        </p>

        <div className="space-y-2 pt-1">
          {skillLines.map((line, index) => (
            <div
              key={line.label}
              className="
                grid grid-cols-[80px_1fr_auto] items-center gap-3 rounded-lg
                border border-black/[0.08] bg-black/[0.035] px-3 py-2
                dark:border-white/[0.08] dark:bg-white/[0.05]
              "
            >
              <span className="text-muted-foreground/95">{line.label}</span>

              <span className="truncate text-foreground/90">
                <TextType
                  as="span"
                  text={line.value}
                  typingSpeed={28}
                  initialDelay={700 + index * 420}
                  loop={false}
                  showCursor={false}
                  className="inline"
                />
              </span>

              <span className="text-[10px] font-medium text-emerald-700 dark:text-emerald-400/90">
                <TextType
                  as="span"
                  text={line.status}
                  typingSpeed={22}
                  initialDelay={1200 + index * 420}
                  loop={false}
                  showCursor={false}
                  className="inline"
                />
              </span>
            </div>
          ))}
        </div>

        <p className="pt-1 text-muted-foreground/95">
          <span className="mr-2 text-primary">&gt;</span>
          <TextType
            as="span"
            text="ready"
            typingSpeed={45}
            initialDelay={3000}
            loop={false}
            showCursor
            cursorCharacter="|"
            cursorClassName="text-primary"
            className="inline"
          />
        </p>
      </div>
    </div>
  );
}