import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { LiveLeaderboard } from '@/components/LiveLeaderboard'
import { PredictionMarkets } from '@/components/PredictionMarkets'
import { Features } from '@/components/Features'
// import { CreatorShowcase } from '@/components/CreatorShowcase'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background SVG */}
      <div 
        className="fixed inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: "url('/Tangerine.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Light overlay for text contrast */}
      <div className="fixed inset-0 bg-black/30 pointer-events-none" />
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <HowItWorks />
        <LiveLeaderboard />
        <PredictionMarkets />
        <Features />
        {/* <CreatorShowcase /> */}
        <CallToAction />
        <Footer />
      </div>
    </div>
  )
}