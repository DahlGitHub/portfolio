import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { SectionHeader } from "../SectionHeader";

export function ContactSection() {
    return (
        <section className="relative overflow-hidden py-24">
            <Icon name="Logo" className="absolute -right-80 top-1/2 h-[1080px] w-[1080px] -translate-y-2/5 text-foreground/[0.04]" />


            <div className="container relative mx-auto px-6">
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/40 dark:bg-background/70 p-8 shadow-sm backdrop-blur md:p-12 lg:p-16">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        {/* left */}
                        <div>

                            <SectionHeader title="Contact" />
                            <h2 className="max-w-xl text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                                Let&apos;s build
                                <br />
                                something great.
                            </h2>
                        </div>

                        {/* right */}
                        <div className="space-y-8">
                            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                                I&apos;m currently available for freelance projects,
                                collaborations, and new opportunities. Have an idea, role, or
                                project in mind? Let&apos;s talk.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="group h-12 rounded-full px-6 uppercase tracking-widest"
                                >
                                    <Link href="mailto:your@email.com">
                                        Get in touch
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}