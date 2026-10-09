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

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="relative z-10 w-full max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            <div className="max-w-2xl text-left">
              <p className="flex items-center gap-3 text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-white/85 mb-6">
                <span className="h-px w-8 shrink-0 bg-white/70" />
                {t("home.hero.tagline")}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white mb-6 text-balance leading-[1.05] drop-shadow-md">
                {t("home.hero.headline").replace(/-/g, "\u2011")}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-xl text-pretty leading-relaxed drop-shadow">
                {t("home.hero.subheadline")}
              </p>
              <Link
                href="/materials"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#F7F3EA] text-[#0E4A5A] font-medium rounded-sm hover:bg-white transition-colors"
              >
                {t("home.hero.cta")}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Three problems */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F3EA]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-5xl text-foreground mb-14 max-w-3xl text-balance leading-[1.1]">
              {t("home.why.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-10">
              {(["bullet1", "bullet2", "bullet3"] as const).map((key, i) => (
                <div key={key} className="border-t border-foreground/80 pt-5">
                  <div className="font-[family-name:var(--font-display)] text-sm tracking-widest text-[#4A7A55] mb-4">
                    0{i + 1}
                  </div>
                  <p className="text-lg text-foreground/85 leading-relaxed">{t(`home.why.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="md:col-span-5">
                <h2 className="text-4xl sm:text-5xl text-foreground mb-8 leading-[1.1]">{t("home.challenge.title")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">{t("home.challenge.p1")}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("home.challenge.p2")}</p>
              </div>
              <div className="md:col-span-7 relative h-[320px] sm:h-[460px] overflow-hidden bg-[#D8CFBB]">
                <Image
                  src="/sargassum-seaweed-on-tropical-beach-aerial-view.jpg"
                  alt="Sargassum accumulation on beach"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process video */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A3541]">
          <div className="max-w-5xl mx-auto">
            <video
              className="w-full aspect-video bg-black"
              controls
              playsInline
              preload="metadata"
              poster="/how-it-works-poster.jpg"
              aria-label="How Blue Carbon Materials turns sargassum into building materials, biochar, and clean energy"
            >
              <source src="/how-it-works.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Targets */}
        <section ref={impactRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F3EA]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-end mb-14">
              <h2 className="md:col-span-6 text-4xl sm:text-5xl text-foreground leading-[1.1]">{t("home.impact.title")}</h2>
              <p className="md:col-span-6 text-lg text-muted-foreground max-w-md">{t("home.impact.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-3 border-t border-foreground/80">
              {[
                { v: `${(metric1 / 1000).toFixed(0)}K+`, k: "home.impact.metric1" },
                { v: `${(metric2 / 1000).toFixed(0)}K`, k: "home.impact.metric2" },
                { v: `${metric3}+`, k: "home.impact.metric3" },
              ].map((m, i) => (
                <div
                  key={m.k}
                  className={`py-8 md:py-10 ${i > 0 ? "md:pl-10 md:border-l border-[#D8CFBB] border-t md:border-t-0" : ""}`}
                >
                  <div className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl text-[#0E4A5A] mb-3 tabular-nums">
                    {m.v}
                  </div>
                  <p className="text-base text-muted-foreground max-w-[16rem]">{t(m.k)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0E4A5A]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <h2 className="text-4xl sm:text-6xl mb-5 text-white text-balance leading-[1.05]">{t("home.cta.title")}</h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-xl text-pretty">{t("home.cta.subtitle")}</p>
            </div>
            <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end gap-3">
              <Link
                href="/materials"
                className="px-7 py-4 text-center bg-[#F7F3EA] text-[#0E4A5A] font-medium rounded-sm hover:bg-white transition-colors"
              >
                {t("home.cta.learn")}
              </Link>
              <Link
                href="/contact"
                className="px-7 py-4 text-center border border-white/60 text-white font-medium rounded-sm hover:bg-white hover:text-[#0E4A5A] transition-colors"
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
