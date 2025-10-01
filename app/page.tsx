import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TheorySection } from "@/components/theory-section"
import { Timeline } from "@/components/timeline"
import { MatrixSection } from "@/components/matrix-section"
import { YouthSection } from "@/components/youth-section"
import { FAQSection } from "@/components/faq-section"
import { ResourcesSection } from "@/components/resources-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f3]">
      <Header />
      <Hero />
      <TheorySection />
      <Timeline />
      <MatrixSection />
      <YouthSection />
      <FAQSection />
      <ResourcesSection />
      <Footer />
    </main>
  )
}
