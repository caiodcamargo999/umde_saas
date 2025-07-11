import HeroSection from './components/HeroSection'
import AnimatedMockup from './components/AnimatedMockup'
import FeaturesSection from './components/FeaturesSection'
import CarouselSection from './components/CarouselSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <main className="bg-[#0D1A3A] text-white min-h-screen font-sans">
      <HeroSection />
      <AnimatedMockup />
      <FeaturesSection />
      <CarouselSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
