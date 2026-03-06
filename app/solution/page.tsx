"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export default function Solution() {
  const { language } = useLanguage()

  const content = {
    en: {
      processTitle: "The Complete Process",
      processSubtitle: "From beach to value: a closed-loop system",
      steps: [
        {
          step: "Collection",
          details:
            "Sargassum is harvested from beaches using environmentally conscious methods. Our marine-safe collection process protects ecosystems while removing excess biomass.",
          image: "/get_weed.png",
        },
        {
          step: "Drying & Pre-processing",
          details:
            "The collected seaweed is transported to our facilities where it undergoes mechanical drying and preliminary processing to remove moisture and contaminants.",
          image: "/dry_da_weed.jpeg",
        },
        {
          step: "Thermochemical Conversion",
          details:
            "Advanced pyrolysis converts dried sargassum into biochar, bio-oil, and synthesis gas. This generates renewable energy while creating valuable carbon-rich products.",
          image: "/process.png",
        },
        {
          step: "Product Refinement",
          details:
            "Biochar and biostimulants are refined, tested, and certified for agricultural and environmental applications. All products meet international standards.",
          image: "/refine.jpg",
        },
      ],
      productsTitle: "Our Products",
      productsSubtitle: "Multiple value streams from one sustainable source",
      products: [
        {
          name: "Biochar",
          benefits: [
            "Carbon sequestration and soil restoration",
            "Improves water retention in soil",
            "Enhances microbial activity",
            "Long-term carbon storage (100+ years)",
          ],
          applications: ["Agriculture", "Forestry", "Environmental Remediation"],
        },
        {
          name: "Biostimulant",
          benefits: [
            "Natural plant growth enhancement",
            "Increased crop yields",
            "Improved nutrient uptake",
            "Reduced dependency on synthetic fertilizers",
          ],
          applications: ["Sustainable Farming", "Organic Agriculture", "Horticulture"],
        },
        {
          name: "Renewable Energy",
          benefits: [
            "Clean electricity generation",
            "Reduced energy costs for communities",
            "Local energy independence",
            "Zero fossil fuel emissions",
          ],
          applications: ["Coastal Communities", "Agricultural Operations", "Regional Grids"],
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
      researchTitle: "Continuous Research & Innovation",
      researchText:
        "We invest 20% of revenue back into R&D, partnering with leading universities to improve conversion efficiency, reduce costs, and expand product applications.",
    },
    es: {
      processTitle: "El Proceso Completo",
      processSubtitle: "De la playa al valor: un sistema de ciclo cerrado",
      steps: [
        {
          step: "Recolección",
          details:
            "El sargazo se cosecha de las playas utilizando métodos ambientalmente conscientes. Nuestro proceso de recolección seguro para el mar protege los ecosistemas mientras elimina el exceso de biomasa.",
          image: "/get_weed.png",
        },
        {
          step: "Secado y Preprocesamiento",
          details:
            "Las algas recolectadas se transportan a nuestras instalaciones donde se someten a secado mecánico y procesamiento preliminar para eliminar la humedad y los contaminantes.",
          image: "/dry_da_weed.jpeg",
        },
        {
          step: "Conversión Termoquímica",
          details:
            "La pirólisis avanzada convierte el sargazo seco en biocarbón, bio-aceite y gas de síntesis. Esto genera energía renovable mientras crea productos valiosos ricos en carbono.",
          image: "/process.png",
        },
        {
          step: "Refinamiento de Productos",
          details:
            "El biocarbón y los bioestimulantes se refinan, prueban y certifican para aplicaciones agrícolas y ambientales. Todos los productos cumplen con estándares internacionales.",
          image: "/refine.jpg",
        },
      ],
      productsTitle: "Nuestros Productos",
      productsSubtitle: "Múltiples flujos de valor de una fuente sostenible",
      products: [
        {
          name: "Biocarbón",
          benefits: [
            "Secuestro de carbono y restauración del suelo",
            "Mejora la retención de agua en el suelo",
            "Mejora la actividad microbiana",
            "Almacenamiento de carbono a largo plazo (100+ años)",
          ],
          applications: ["Agricultura", "Silvicultura", "Remediación Ambiental"],
        },
        {
          name: "Bioestimulante",
          benefits: [
            "Mejora natural del crecimiento de plantas",
            "Mayor rendimiento de cultivos",
            "Mejor absorción de nutrientes",
            "Menor dependencia de fertilizantes sintéticos",
          ],
          applications: ["Agricultura Sostenible", "Agricultura Orgánica", "Horticultura"],
        },
        {
          name: "Energía Renovable",
          benefits: [
            "Generación de electricidad limpia",
            "Reducción de costos energéticos para comunidades",
            "Independencia energética local",
            "Cero emisiones de combustibles fósiles",
          ],
          applications: ["Comunidades Costeras", "Operaciones Agrícolas", "Redes Regionales"],
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
      researchTitle: "Investigación e Innovación Continua",
      researchText:
        "Invertimos el 20% de los ingresos en I+D, asociándonos con universidades líderes para mejorar la eficiencia de conversión, reducir costos y expandir las aplicaciones de productos.",
    },
  }

  const c = content[language]

  return (
    <>
      <Header />
      <main>
        {/* Process Section - starts directly */}
        <section className="pt-16 pb-24 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{c.processTitle}</h1>
              <p className="text-lg text-muted-foreground">{c.processSubtitle}</p>
            </div>

            <div className="space-y-16">
              {c.steps.map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  {/* Alternate image position: left for even, right for odd */}
                  {index % 2 === 0 ? (
                    <>
                      <div className={`relative h-96 bg-white ${index !== 2 ? "rounded-3xl overflow-hidden" : ""}`}>
                        <Image
                          src={item.image}
                          alt={item.step}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-8 rounded-2xl bg-[#FAF8F5]">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`flex items-center justify-center h-12 w-12 rounded-xl ${index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} text-white font-bold flex-shrink-0`}
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
                            className={`flex items-center justify-center h-12 w-12 rounded-xl ${index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} text-white font-bold flex-shrink-0`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-2xl font-semibold">{item.step}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base">{item.details}</p>
                      </div>
                      <div className={`relative h-96 bg-white ${index !== 2 ? "rounded-3xl overflow-hidden" : ""}`}>
                        <Image
                          src={item.image}
                          alt={item.step}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.productsTitle}</h2>
              <p className="text-muted-foreground">{c.productsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {c.products.map((product, index) => (
                <div
                  key={product.name}
                  className="p-8 rounded-2xl bg-white border border-[#E5DFD3] hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-1 ${index === 1 ? "bg-[#2d8a6e]" : "bg-[#0066CC]"} mb-6 rounded-full`} />
                  <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex gap-2">
                        <span className={`${index === 1 ? "text-[#2d8a6e]" : "text-[#0066CC]"} flex-shrink-0`}>•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className={`text-xs px-3 py-1 ${index === 1 ? "bg-[#2d8a6e]/10 text-[#2d8a6e]" : "bg-[#0066CC]/10 text-[#0066CC]"} rounded-full`}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
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
                      className={`flex-shrink-0 w-6 h-6 rounded-full ${index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} flex items-center justify-center`}
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

        {/* Research */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0066CC]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{c.researchTitle}</h2>
            <p className="text-lg text-white/90 leading-relaxed">{c.researchText}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
