"use client"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  headline: string
  subheadline: string
  cta?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export function HeroSection({ headline, subheadline, cta, backgroundImage }: HeroSectionProps) {
  return (
    <section
      className="relative w-full py-20 sm:py-32 overflow-hidden bg-primary"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : {}
      }
    >
      {/* Overlay */}
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance mb-6 text-white">{headline}</h1>
        <p className="text-xl sm:text-2xl text-white/90 text-balance mb-8 max-w-2xl">{subheadline}</p>
        {cta && (
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <a href={cta.href}>{cta.text}</a>
          </Button>
        )}
      </div>
    </section>
  )
}
