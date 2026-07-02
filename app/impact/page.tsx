"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Impact() {
  const { language } = useLanguage()
  const metricsRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [metric1, setMetric1] = useState(0)
  const [metric2, setMetric2] = useState(0)
  const [metric3, setMetric3] = useState(0)
  const [metric4, setMetric4] = useState(0)

  const content = {
    en: {
      metricsTitle: "Impact by the Numbers",
      metricsSubtitle: "Projected impact based on current pilot operations and expansion plans",
      metricsNote: "Target metrics based on full-scale deployment across partner sites",
      metrics: [
        { metric: "40K", label: "Metric Tons Annual Processing Capacity", sublabel: "(Projected)" },
        { metric: "17.5K", label: "Metric Tons CO₂ Sequestered", sublabel: "(Projected Annual)" },
        { metric: "485+", label: "Projected Jobs Created", sublabel: "(Full-Scale Target)" },
        { metric: "12", label: "Planned Operational Sites", sublabel: "(Planned)" },
      ],
      climateTitle: "Climate Impact",
      climateItems: [
        {
          title: "Carbon Sequestration",
          text: "Every ton of biochar produced sequesters approximately 3 tons of CO₂ equivalent for 100+ years in soil, permanently removing carbon from the atmosphere.",
        },
        {
          title: "Ecosystem Restoration",
          text: "By removing excess sargassum, we reduce harmful blooms, restore marine habitats, and protect coastal biodiversity while reducing methane emissions from decomposition.",
        },
        {
          title: "Renewable Energy",
          text: "Our conversion process generates 2.5 MWh of renewable electricity per ton of processed sargassum, displacing fossil fuel energy consumption.",
        },
      ],
      trialsTitle: "Proven Agricultural Results",
      trialsSubtitle: "Real field trials showing biochar effectiveness",
      trials: [
        {
          crop: "Cucumbers",
          improvement: "28% yield increase",
          details: "Field trials with biochar soil amendment showed significant growth improvement and disease resistance.",
          image: "/cucs.jpg",
        },
        {
          crop: "Tomatoes",
          improvement: "32% yield increase",
          details: "Biochar application resulted in larger fruit size, improved water retention, and healthier plant growth.",
          image: "/tomatofarm.png",
        },
      ],
      economicTitle: "Projected Economic & Community Impact",
      economicSubtitle: "Planned impact at full-scale operations",
      employment: {
        title: "Projected Local Employment",
        items: [
          "485+ jobs projected across collection, processing, and distribution at full scale",
          "Competitive wages planned above regional averages",
          "Training programs for skills development and advancement",
          "Commitment to diverse and inclusive workforce leadership",
        ],
      },
      community: {
        title: "Community Goals",
        items: [
          "Community reinvestment plan under development for education and infrastructure",
          "Research partnerships being established with regional universities",
          "Engagement with coastal municipalities for restoration initiatives",
          "Youth mentorship programs and internships planned",
        ],
      },
      ctaTitle: "Be Part of the Solution",
      ctaText:
        "Join us in scaling sustainable sargassum solutions. Whether you're a municipality, researcher, partner, or investor, there's a role for you.",
      ctaButton: "Get Involved",
    },
    es: {
      metricsTitle: "Impacto en Números",
      metricsSubtitle: "Impacto proyectado basado en operaciones piloto actuales y planes de expansión",
      metricsNote: "Métricas objetivo basadas en despliegue a escala completa en sitios asociados",
      metrics: [
        { metric: "40K", label: "Toneladas Métricas de Capacidad Anual de Procesamiento", sublabel: "(Proyectado)" },
        { metric: "17.5K", label: "Toneladas Métricas de CO₂ Secuestrado", sublabel: "(Proyectado Anual)" },
        { metric: "485+", label: "Empleos Proyectados Creados", sublabel: "(Meta a Escala Completa)" },
        { metric: "12", label: "Sitios Operativos Planificados", sublabel: "(Planificado)" },
      ],
      climateTitle: "Impacto Climático",
      climateItems: [
        {
          title: "Secuestro de Carbono",
          text: "Cada tonelada de biocarbón producido secuestra aproximadamente 3 toneladas de CO₂ equivalente por más de 100 años en el suelo, eliminando permanentemente el carbono de la atmósfera.",
        },
        {
          title: "Restauración de Ecosistemas",
          text: "Al eliminar el exceso de sargazo, reducimos las floraciones dañinas, restauramos hábitats marinos y protegemos la biodiversidad costera mientras reducimos las emisiones de metano de la descomposición.",
        },
        {
          title: "Energía Renovable",
          text: "Nuestro proceso de conversión genera 2.5 MWh de electricidad renovable por tonelada de sargazo procesado, desplazando el consumo de energía de combustibles fósiles.",
        },
      ],
      trialsTitle: "Resultados Agrícolas Comprobados",
      trialsSubtitle: "Ensayos de campo reales que demuestran la efectividad del biocarbón",
      trials: [
        {
          crop: "Pepinos",
          improvement: "28% aumento en rendimiento",
          details: "Ensayos de campo con enmienda de biocarbón mostraron mejora significativa en crecimiento y resistencia a enfermedades.",
          image: "/cucs.jpg",
        },
        {
          crop: "Tomates",
          improvement: "32% aumento en rendimiento",
          details: "La aplicación de biocarbón resultó en frutos más grandes, mejor retención de agua y crecimiento más saludable de las plantas.",
          image: "/tomatofarm.png",
        },
      ],
      economicTitle: "Impacto Económico y Comunitario Proyectado",
      economicSubtitle: "Impacto planificado a escala completa de operaciones",
      employment: {
        title: "Empleo Local Proyectado",
        items: [
          "485+ empleos proyectados en recolección, procesamiento y distribución a escala completa",
          "Salarios competitivos planificados por encima de los promedios regionales",
          "Programas de capacitación para desarrollo de habilidades",
          "Compromiso con liderazgo laboral diverso e inclusivo",
        ],
      },
      community: {
        title: "Metas Comunitarias",
        items: [
          "Plan de reinversión comunitaria en desarrollo para educación e infraestructura",
          "Asociaciones de investigación siendo establecidas con universidades regionales",
          "Coordinación con municipios costeros para iniciativas de restauración",
          "Programas de mentoría juvenil y pasantías planificados",
        ],
      },
      ctaTitle: "Sé Parte de la Solución",
      ctaText:
        "Únete a nosotros para escalar soluciones sostenibles de sargazo. Ya seas un municipio, investigador, socio o inversionista, hay un rol para ti.",
      ctaButton: "Involúcrate",
    },
  }

  const c = content[language]

  // Animate metrics when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            // Animate first metric to 40000
            const duration = 2000
            const steps = 60
            const increment1 = 40000 / steps
            let current1 = 0
            const timer1 = setInterval(() => {
              current1 += increment1
              if (current1 >= 40000) {
                setMetric1(40000)
                clearInterval(timer1)
              } else {
                setMetric1(Math.floor(current1))
              }
            }, duration / steps)

            // Animate second metric to 17500
            const increment2 = 17500 / steps
            let current2 = 0
            const timer2 = setInterval(() => {
              current2 += increment2
              if (current2 >= 17500) {
                setMetric2(17500)
                clearInterval(timer2)
              } else {
                setMetric2(Math.floor(current2))
              }
            }, duration / steps)

            // Animate third metric to 485
            const increment3 = 485 / steps
            let current3 = 0
            const timer3 = setInterval(() => {
              current3 += increment3
              if (current3 >= 485) {
                setMetric3(485)
                clearInterval(timer3)
              } else {
                setMetric3(Math.floor(current3))
              }
            }, duration / steps)

            // Animate fourth metric to 12
            const increment4 = 12 / steps
            let current4 = 0
            const timer4 = setInterval(() => {
              current4 += increment4
              if (current4 >= 12) {
                setMetric4(12)
                clearInterval(timer4)
              } else {
                setMetric4(Math.floor(current4))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (metricsRef.current) {
      observer.observe(metricsRef.current)
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <>
      <Header />
      <main>
        {/* Metrics - starts directly */}
        <section ref={metricsRef} className="pt-16 pb-24 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{c.metricsTitle}</h1>
              <p className="text-lg text-muted-foreground mb-2">{c.metricsSubtitle}</p>
              <p className="text-sm text-muted-foreground italic">{c.metricsNote}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-center">
                <div className="text-5xl font-bold text-[#0066CC] mb-3">
                  {(metric1 / 1000).toFixed(0)}K+
                </div>
                <p className="text-muted-foreground text-sm mb-1">{c.metrics[0].label}</p>
                <p className="text-xs text-muted-foreground/70">{c.metrics[0].sublabel}</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-center">
                <div className="text-5xl font-bold text-[#2d8a6e] mb-3">
                  {(metric2 / 1000).toFixed(1)}K
                </div>
                <p className="text-muted-foreground text-sm mb-1">{c.metrics[1].label}</p>
                <p className="text-xs text-muted-foreground/70">{c.metrics[1].sublabel}</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-center">
                <div className="text-5xl font-bold text-[#0066CC] mb-3">
                  {metric3}+
                </div>
                <p className="text-muted-foreground text-sm mb-1">{c.metrics[2].label}</p>
                <p className="text-xs text-muted-foreground/70">{c.metrics[2].sublabel}</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-center">
                <div className="text-5xl font-bold text-[#2d8a6e] mb-3">
                  {metric4}
                </div>
                <p className="text-muted-foreground text-sm mb-1">{c.metrics[3].label}</p>
                <p className="text-xs text-muted-foreground/70">{c.metrics[3].sublabel}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Climate Impact */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-[#E5DFD3]">
                <Image
                  src="/climate-impact-visualization-carbon-sequestration-.jpg"
                  alt="Climate impact visualization"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">{c.climateTitle}</h2>
                <div className="space-y-6">
                  {c.climateItems.map((item, index) => (
                    <div key={item.title}>
                      <div className={`w-10 h-1 ${index === 1 ? "bg-[#2d8a6e]" : "bg-[#0066CC]"} mb-3 rounded-full`} />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agricultural Trials */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.trialsTitle}</h2>
              <p className="text-muted-foreground">{c.trialsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {c.trials.map((trial, index) => (
                <div
                  key={trial.crop}
                  className="rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-64 bg-gradient-to-br from-[#0066CC]/10 to-[#2d8a6e]/10">
                    <Image
                      src={trial.image}
                      alt={`${trial.crop} field trial results`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className={`w-12 h-1 ${index === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} mb-4 rounded-full`} />
                    <h3 className="text-2xl font-bold mb-2">{trial.crop}</h3>
                    <div className={`text-3xl font-bold ${index === 0 ? "text-[#0066CC]" : "text-[#2d8a6e]"} mb-4`}>
                      {trial.improvement}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{trial.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Economic & Community */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.economicTitle}</h2>
              <p className="text-muted-foreground">{c.economicSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3]">
                <div className="w-12 h-1 bg-[#0066CC] mb-6 rounded-full" />
                <h3 className="text-xl font-bold mb-6">{c.employment.title}</h3>
                <ul className="space-y-3">
                  {c.employment.items.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground text-sm">
                      <span className="text-[#0066CC] flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3]">
                <div className="w-12 h-1 bg-[#2d8a6e] mb-6 rounded-full" />
                <h3 className="text-xl font-bold mb-6">{c.community.title}</h3>
                <ul className="space-y-3">
                  {c.community.items.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground text-sm">
                      <span className="text-[#2d8a6e] flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0066CC]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{c.ctaTitle}</h2>
            <p className="text-lg text-white/90 mb-10">{c.ctaText}</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#0066CC] font-semibold rounded-xl hover:bg-[#F5F0E8] transition-colors"
            >
              {c.ctaButton}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
