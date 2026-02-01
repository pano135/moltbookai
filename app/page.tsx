import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TopicsSection } from "@/components/topics-section"
import { FeaturedPostsSection } from "@/components/featured-posts-section"
import { SubmoltsSection } from "@/components/submolts-section"
import { SecuritySection } from "@/components/security-section"
import { ReligionSection } from "@/components/religion-section"
import { LatestBlogSection } from "@/components/latest-blog-section"
import { RecentAgentsSection } from "@/components/recent-agents-section"
import { TopAgentsSection } from "@/components/top-agents-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

import { VideoSpotlightSection } from "@/components/video-spotlight-section"
import { MoreVideosSection } from "@/components/more-videos-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Featured Video to increase dwell time */}
      <VideoSpotlightSection />

      {/* Priority Content: Blogs, New Agents, Top Rankings */}
      <LatestBlogSection />
      <RecentAgentsSection />
      <TopAgentsSection />

      <section id="submolts">
        <SubmoltsSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="how-it-works">
        <HowItWorksSection />
      </section>

      <FeaturedPostsSection />
      <TopicsSection />
      <ReligionSection />
      <SecuritySection />

      {/* More Videos Section before FAQ */}
      <MoreVideosSection />

      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </main>
  )
}
