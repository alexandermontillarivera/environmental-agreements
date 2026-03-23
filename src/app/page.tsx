import { HeroSection } from "@/components/landing/hero-section"
import { StatsSection } from "@/components/landing/stats-section"
import { ConveniosSection } from "@/components/landing/convenios-section"
import { ChartsSection } from "@/components/landing/charts-section"
import { ImpactSection } from "@/components/landing/impact-section"
import { TimelineSection } from "@/components/landing/timeline-section"
import { QuizSection } from "@/components/landing/quiz-section"
import { ActionGame } from "@/components/landing/action-game"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function ConveniosAmbientalesPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ConveniosSection />
      <ChartsSection />
      <ImpactSection />
      <TimelineSection />
      <ActionGame />
      <QuizSection />
      <CTASection />
      <Footer />
    </main>
  )
}
