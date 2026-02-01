import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TopicsSection } from "@/components/topics-section"
import { FeaturedPostsSection } from "@/components/featured-posts-section"
import { SubmoltsSection } from "@/components/submolts-section"
import { SecuritySection } from "@/components/security-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <TopicsSection />
      <FeaturedPostsSection />
      <section id="submolts">
        <SubmoltsSection />
      </section>
      <SecuritySection />
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </main>
  )
}
