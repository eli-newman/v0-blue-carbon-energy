"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"

export default function Technology() {
  const { language } = useLanguage()

  const content = {
    en: {
      heroTitle: "Technology & Process",
      heroSubtitle:
        "A vertically integrated system that converts sargassum and waste plastics into building materials, agricultural products, and clean energy — all in one carbon-negative facility.",
      processTitle: "The Complete Process",
      processSubtitle: "From beach to value: a closed-loop system",
      steps: [
        {
          step: "Collection",
          details:
            "Sargassum is harvested from beaches using environmentally conscious methods. Our marine-safe collection process protects ecosystems while removing excess biomass that would otherwise decompose and release methane.",
          image: "/get_weed.png",
        },
        {
          step: "Drying & Pre-processing",
          details:
            "Collected seaweed is transported to our facilities for mechanical drying and preliminary processing. Sand, salt, and contaminants are removed. Recycled plastics are sorted and shredded for composite blending.",
          image: "/dry_da_weed.jpeg",
        },
        {
          step: "Thermochemical Conversion",
          details:
            "Advanced pyrolysis converts dried sargassum into biochar, bio-oil, and synthesis gas. The syngas powers our manufacturing facility — making the entire operation energy self-sufficient and carbon negative.",
          image: "/process.png",
        },
        {
          step: "Composite Manufacturing",
          details:
            "Sargassum fiber and recycled plastic are compounded into composite pellets, then extruded or molded into boards, tiles, and structural profiles. Biochar and biostimulants are refined for agricultural markets.",
          image: "/factory.jpg",
        },
      ],
      outputsTitle: "What Comes Out",
      outputsSubtitle: "Multiple value streams from one integrated process",
      outputs: [
        {
          name: "Composite Building Materials",
          description: "Boards, tiles, structural profiles, and pellets made from sargassum fiber + recycled plastic.",
          link: "/materials",
          linkText: "View Materials",
        },
        {
          name: "Biochar & Biostimulants",
          description: "Carbon-negative soil amendments and plant growth enhancers for regenerative agriculture.",
          link: "/agriculture",
          linkText: "View Agriculture Products",
        },
        {
          name: "Renewable Energy",
          description: "Syngas-powered electricity that runs the facility and feeds surplus back to local grids.",
          link: "/impact",
          linkText: "View Impact",
        },
      ],
      safetyTitle: "Technology & Safety Standards",
      safetyP1:
        "Our thermochemical conversion process is engineered to the highest international standards, ensuring minimal environmental impact and maximum energy efficiency.",
      safetyItems: [
        "ISO 9001 & 14001 certified processes",
        "Zero-waste production methodology",
        "Real-time monitoring and emissions control",
        "Third-party environmental audits",
      ],
      innovationTitle: "Continuous Innovation",
      innovationText:
        "We invest 20% of revenue back into R&D, partnering with leading universities to improve conversion efficiency, reduce costs, develop new composite formulations, and expand agricultural product applications.",
      innovationAreas: [
        "Higher-strength composite formulations",
        "New biochar activation methods",
        "Waste plastic sorting automation",
        "Process energy efficiency optimization",
      ],
    },
    es: {
      heroTitle: "Tecnología y Proceso",
      heroSubtitle:
        "Un sistema verticalmente integrado que convierte sargazo y plásticos residuales en materiales de construcción, productos agrícolas y energía limpia — todo en una instalación carbono-negativa.",
      processTitle: "El Proceso Completo",
      processSubtitle: "De la playa al valor: un sistema de ciclo cerrado",
      steps: [
        {
          step: "Recolección",
          details:
            "El sargazo se cosecha de las playas utilizando métodos ambientalmente conscientes. Nuestro proceso protege los ecosistemas mientras elimina biomasa excedente que de otro modo se descompondría liberando metano.",
          image: "/get_weed.png",
        },
        {
          step: "Secado y Preprocesamiento",
          details:
            "Las algas recolectadas se transportan a nuestras instalaciones para secado mecánico y procesamiento preliminar. Se eliminan arena, sal y contaminantes. Los plásticos reciclados se clasifican y trituran para mezcla de compuestos.",
          image: "/dry_da_weed.jpeg",
        },
        {
          step: "Conversión Termoquímica",
          details:
            "La pirólisis avanzada convierte el sargazo seco en biocarbón, bio-aceite y gas de síntesis. El gas alimenta nuestra instalación de manufactura — haciendo toda la operación autosuficiente energéticamente y carbono negativa.",
          image: "/process.png",
        },
        {
          step: "Manufactura de Compuestos",
          details:
            "La fibra de sargazo y plástico reciclado se componen en pellets, luego se extruyen o moldean en tableros, tejas y perfiles estructurales. El biocarbón y bioestimulantes se refinan para mercados agrícolas.",
          image: "/factory.jpg",
        },
      ],
      outputsTitle: "Lo Que Producimos",
      outputsSubtitle: "Múltiples flujos de valor de un proceso integrado",
      outputs: [
        {
          name: "Materiales de Construcción Compuestos",
          description: "Tableros, tejas, perfiles estructurales y pellets de fibra de sargazo + plástico reciclado.",
          link: "/materials",
          linkText: "Ver Materiales",
        },
        {
          name: "Biocarbón y Bioestimulantes",
          description: "Enmiendas de suelo carbono-negativas y mejoradores de crecimiento para agricultura regenerativa.",
          link: "/agriculture",
          linkText: "Ver Productos Agrícolas",
        },
        {
          name: "Energía Renovable",
          description: "Electricidad alimentada por gas de síntesis que opera la instalación y alimenta redes locales.",
          link: "/impact",
          linkText: "Ver Impacto",
        },
      ],
      safetyTitle: "Tecnología y Estándares de Seguridad",
      safetyP1:
        "Nuestro proceso de conversión termoquímica está diseñado con los más altos estándares internacionales, asegurando un impacto ambiental mínimo y máxima eficiencia energética.",
      safetyItems: [
        "Procesos certificados ISO 9001 y 14001",
        "Metodología de producción cero residuos",
        "Monitoreo en tiempo real y control de emisiones",
        "Auditorías ambientales de terceros",
      ],
      innovationTitle: "Innovación Continua",
      innovationText:
        "Invertimos el 20% de los ingresos en I+D, asociándonos con universidades líderes para mejorar eficiencia, reducir costos, desarrollar nuevas formulaciones de compuestos y expandir aplicaciones agrícolas.",
      innovationAreas: [
        "Formulaciones de compuestos de mayor resistencia",
        "Nuevos métodos de activación de biocarbón",
        "Automatización de clasificación de plásticos",
        "Optimización de eficiencia energética del proceso",
      ],
    },
  }

  const c = content[language]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto text-balance leading-relaxed">
              {c.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{c.processTitle}</h2>
              <p className="text-lg text-muted-foreground">{c.processSubtitle}</p>
            </div>

            <div className="space-y-16">
              {c.steps.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="relative h-96 bg-white rounded-3xl overflow-hidden">
                        <Image src={item.image} alt={item.step} fill className="object-contain p-4" />
                      </div>
                      <div className="p-8 rounded-2xl bg-[#FAF8F5]">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`flex items-center justify-center h-12 w-12 rounded-xl ${
                              index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"
                            } text-white font-bold flex-shrink-0`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-2xl font-semibold">{item.step}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base">{item.details}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-8 rounded-2xl bg-[#FAF8F5]">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`flex items-center justify-center h-12 w-12 rounded-xl ${
                              index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"
                            } text-white font-bold flex-shrink-0`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-2xl font-semibold">{item.step}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base">{item.details}</p>
                      </div>
                      <div className="relative h-96 bg-white rounded-3xl overflow-hidden">
                        <Image src={item.image} alt={item.step} fill className="object-contain p-4" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Output Streams */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.outputsTitle}</h2>
              <p className="text-muted-foreground">{c.outputsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {c.outputs.map((output, index) => (
                <div
                  key={output.name}
                  className="p-8 rounded-2xl bg-white border border-[#E5DFD3] hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className={`w-12 h-1 ${index === 1 ? "bg-[#2d8a6e]" : "bg-[#0066CC]"} mb-6 rounded-full`} />
                  <h3 className="text-xl font-bold mb-4">{output.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">{output.description}</p>
                  <Link
                    href={output.link}
                    className={`text-sm font-semibold ${
                      index === 1 ? "text-[#2d8a6e] hover:text-[#1d6b4f]" : "text-[#0066CC] hover:text-[#0052A3]"
                    } transition-colors`}
                  >
                    {output.linkText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Standards */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{c.safetyTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{c.safetyP1}</p>
              <ul className="space-y-4">
                {c.safetyItems.map((item, index) => (
                  <li key={item} className="flex gap-3 items-center justify-center">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full ${
                        index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"
                      } flex items-center justify-center`}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Innovation */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0066CC]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{c.innovationTitle}</h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8">{c.innovationText}</p>
              </div>
              <div className="space-y-4">
                {c.innovationAreas.map((area, index) => (
                  <div key={area} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-white/90 text-sm">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
