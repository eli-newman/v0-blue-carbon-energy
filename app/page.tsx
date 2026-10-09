"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const impactRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [metric1, setMetric1] = useState(0)
  const [metric2, setMetric2] = useState(0)
  const [metric3, setMetric3] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const heroHeight = rect.height
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / heroHeight)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate impact numbers when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            // Animate first metric to 50000
            const duration1 = 2000
            const steps1 = 60
            const increment1 = 50000 / steps1
            let current1 = 0
            const timer1 = setInterval(() => {
              current1 += increment1
              if (current1 >= 50000) {
                setMetric1(50000)
                clearInterval(timer1)
              } else {
                setMetric1(Math.floor(current1))
              }
            }, duration1 / steps1)

            // Animate second metric to 15000
            const duration2 = 2000
            const steps2 = 60
            const increment2 = 15000 / steps2
            let current2 = 0
            const timer2 = setInterval(() => {
              current2 += increment2
              if (current2 >= 15000) {
                setMetric2(15000)
                clearInterval(timer2)
              } else {
                setMetric2(Math.floor(current2))
              }
            }, duration2 / steps2)

            // Animate third metric to 200
            const duration3 = 2000
            const steps3 = 60
            const increment3 = 200 / steps3
            let current3 = 0
            const timer3 = setInterval(() => {
              current3 += increment3
              if (current3 >= 200) {
                setMetric3(200)
                clearInterval(timer3)
              } else {
                setMetric3(Math.floor(current3))
              }
            }, duration3 / steps3)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (impactRef.current) {
      observer.observe(impactRef.current)
    }

    return () => {
      if (impactRef.current) {
        observer.unobserve(impactRef.current)
      }
    }
  }, [hasAnimated])

  const processSteps = [
    { step: "01", titleKey: "home.process.step1.title", descKey: "home.process.step1.desc", image: "/sargassum-harvest.jpg" },
    { step: "02", titleKey: "home.process.step2.title", descKey: "home.process.step2.desc", image: "/process.png" },
    { step: "03", titleKey: "home.process.step3.title", descKey: "home.process.step3.desc", image: "/factory.jpg" },
    { step: "04", titleKey: "home.process.step4.title", descKey: "home.process.step4.desc", image: "/cucs.jpg" },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-beach.jpg"
              alt="Sargassum seaweed and plastic waste washed up on a Caribbean beach"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[88%_center] md:object-[65%_center]"
              quality={85}
            />
          </div>

          {/* Scrims: dark on the text side, plus top and bottom, so text stays readable on any screen */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance leading-[1.1] drop-shadow-md">
                {t("home.hero.headline").replace(/-/g, "‑")}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#0066CC] bg-white/95 inline-block px-4 py-2 rounded-lg mb-6 text-balance">
                {t("home.hero.tagline")}
              </p>
              <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-xl text-pretty drop-shadow">
                {t("home.hero.subheadline")}
              </p>
              <Link
                href="/materials"
                className="inline-block px-8 py-4 bg-white text-[#0066CC] font-semibold rounded-lg hover:bg-[#0066CC] hover:text-white transition-all text-lg border-2 border-white shadow-lg hover:shadow-xl"
              >
                {t("home.hero.cta")}
              </Link>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-[#0066CC]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              {t("home.why.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-[#0066CC] text-4xl font-bold flex-shrink-0">→</div>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("home.why.bullet1")}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#0066CC] text-4xl font-bold flex-shrink-0">→</div>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("home.why.bullet2")}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#0066CC] text-4xl font-bold flex-shrink-0">→</div>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("home.why.bullet3")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">{t("home.challenge.title")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("home.challenge.p1")}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("home.challenge.p2")}</p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-[#E5DFD3]">
                <Image
                  src="/sargassum-seaweed-on-tropical-beach-aerial-view.jpg"
                  alt="Sargassum accumulation on beach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t("home.process.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("home.process.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col rounded-2xl bg-white border border-[#E5DFD3] hover:border-[#0066CC]/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-[#0066CC]/10 to-[#2d8a6e]/10">
                    <Image
                      src={item.image}
                      alt={t(item.titleKey)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-5xl font-bold text-[#0066CC] mb-6">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{t(item.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section ref={impactRef} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t("home.impact.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("home.impact.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-10 rounded-2xl bg-[#FAF8F5]">
                <div className="text-6xl font-bold text-[#0066CC] mb-4">
                  {(metric1 / 1000).toFixed(0)}K+
                </div>
                <p className="text-lg text-muted-foreground">{t("home.impact.metric1")}</p>
              </div>
              <div className="text-center p-10 rounded-2xl bg-[#FAF8F5]">
                <div className="text-6xl font-bold text-[#0066CC] mb-4">
                  {(metric2 / 1000).toFixed(0)}K
                </div>
                <p className="text-lg text-muted-foreground">{t("home.impact.metric2")}</p>
              </div>
              <div className="text-center p-10 rounded-2xl bg-[#FAF8F5]">
                <div className="text-6xl font-bold text-[#0066CC] mb-4">
                  {metric3}+
                </div>
                <p className="text-lg text-muted-foreground">{t("home.impact.metric3")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0066CC]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white text-balance">{t("home.cta.title")}</h2>
            <p className="text-xl text-white/90 mb-10 text-balance">{t("home.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/materials"
                className="px-8 py-4 bg-white text-[#0066CC] font-semibold rounded-lg hover:bg-[#0052A3] hover:text-white transition-colors text-lg"
              >
                {t("home.cta.learn")}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0066CC] transition-colors text-lg"
              >
                {t("home.cta.contact")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
