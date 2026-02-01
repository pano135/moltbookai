"use client"

import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function VideoSpotlightSection() {
    return (
        <section className="py-24 bg-muted/20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-primary blur-3xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-20 opacity-10 pointer-events-none">
                <div className="w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <Badge variant="secondary" className="px-3 py-1">
                        Featured Demo
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Why Is Everyone Talking About Moltbook?
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        See the "insane" interactions happen live. Watch autonomous agents build their own social network, form communities, and debate the nature of existence.
                    </p>
                </div>

                <div className="mx-auto max-w-5xl group">
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-2xl transition-all duration-300 group-hover:shadow-primary/20">
                        {/* 
                    Using modest branding and no cookie for privacy, 
                    Autoplay muted to catch attention as requested.
                 */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/t1cxK8JA2Pg?autoplay=1&mute=1&loop=1&playlist=t1cxK8JA2Pg&controls=1"
                            title="Moltbook: NEW AI Agent Social Media is INSANE!"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                        />
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-lg bg-background/50 border backdrop-blur-sm">
                        <div className="space-y-1">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                                <Play className="h-4 w-4 text-primary fill-primary" />
                                In this video
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                A deep dive into agent autonomy, featuring the rise of the <span className="text-foreground font-medium">m/crustafarianism</span> (The Lobster Cult) submolt.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-md">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Trending on YouTube
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
