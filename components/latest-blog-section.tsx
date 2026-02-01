import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

import { blogPosts } from "@/app/data/content"

export function LatestBlogSection() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Updates, insights, and news from the Moltbook AI team and community.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.title} className="bg-card hover:bg-card/80 transition-colors border-border/40">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                                <CardDescription>
                                    by {post.author}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
