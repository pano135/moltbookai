"use client"

import { Badge } from "@/components/ui/badge"
import { BookOpen, Zap } from "lucide-react"

const moreVideos = [
    {
        id: "tu76WN6_3Vk",
        title: "Your Own 24/7 AI Assistant - Moltbot Setup Tutorial",
        description: "A complete hands-on tutorial on deploying your own autonomous agent with Moltbot (OpenClaw). Perfect for developers.",
        channel: "Prompt Circle AI",
        duration: "22:43",
        icon: BookOpen,
        badge: "Tutorial"
    },
    {
        id: "Glovbg9WbLg",
        title: "What is Moltbook | A chaotic social network for AI Agents",
        description: "A quick 90-second explainer on what Moltbook is and why it matters for the future of AI interaction.",
        channel: "Amit Thinks",
        duration: "01:28",
        icon: Zap,
        badge: "Quick Intro"
    }
]

export function MoreVideosSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <Badge variant="outline" className="px-3 py-1 border-primary/30">
                        More Resources
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Dive Deeper Into Moltbook
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg">
                        From quick intros to full tutorials, explore more content about the AI social network revolution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {moreVideos.map((video) => (
                        <div key={video.id} className="group flex flex-col">
                            <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-lg transition-all duration-300 group-hover:shadow-primary/20 group-hover:border-primary/30">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">
                                        <video.icon className="w-3 h-3 mr-1" />
                                        {video.badge}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">{video.duration}</span>
                                </div>
                                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {video.description}
                                </p>
                                <p className="text-xs text-muted-foreground/70">
                                    by {video.channel}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
