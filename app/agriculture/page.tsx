"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"

export default function Agriculture() {
  const { language } = useLanguage()

  const content = {
    en: {
      heroTitle: "Agriculture & Biostimulant",
      heroSubtitle:
        "Carbon-negative biochar and seaweed-derived biostimulants that boost crop yields, restore soil health, and reduce dependence on synthetic fertilizers.",
      productsTitle: "Our Agricultural Products",
      productsSubtitle: "Science-backed inputs for regenerative farming",
      products: [
        {
          name: "Biochar Soil Amendment",
          description:
            "High-quality biochar produced from sargassum pyrolysis. Improves soil structure, water retention, and microbial activity while permanently sequestering carbon for 100+ years.",
          benefits: [
            "Increases water retention by 30-50%",
            "Enhances nutrient availability",
            "Supports beneficial microbial communities",
            "Sequesters carbon for 100+ years",
            "Reduces fertilizer requirements by 20-30%",
          ],
          applications: ["Row crops", "Fruit orchards", "Greenhouses", "Soil remediation"],
        },
        {
          name: "Liquid Biostimulant",
          description:
            "Concentrated seaweed extract rich in natural growth hormones, micronutrients, and beneficial compounds. Applied as foliar spray or soil drench to enhance plant vigor and resilience.",
          benefits: [
            "Promotes root development",
            "Improves stress tolerance (drought, heat, salt)",
            "Enhances nutrient uptake efficiency",
            "Boosts flowering and fruit set",
            "100% organic and chemical-free",
          ],
          applications: ["Vegetable farms", "Tropical fruit", "Nurseries", "Organic agriculture"],
        },
        {
          name: "Biochar-Compost Blend",
          description:
            "Pre-charged biochar blended with locally sourced compost for immediate soil benefits. The biochar matrix holds nutrients from the compost and releases them slowly to plants.",
          benefits: [
            "Ready-to-apply — no charging period",
            "Balanced nutrient profile",
            "Improves both sandy and clay soils",
            "Reduces irrigation frequency",
            "Builds long-term soil organic matter",
          ],
          applications: ["New plantings", "Degraded soils", "Urban gardens", "Landscape restoration"],
        },
      ],
      trialsTitle: "Proven Field Results",
      trialsSubtitle: "Real data from Caribbean agricultural trials",
      trials: [
        {
          crop: "Cucumbers",
          improvement: "28%",
          unit: "yield increase",
          details: "Biochar soil amendment trials showed significant growth improvement, stronger root systems, and enhanced disease resistance compared to untreated control plots.",
          image: "/cucs.jpg",
        },
        {
          crop: "Tomatoes",
          improvement: "32%",
          unit: "yield increase",
          details: "Biochar application produced larger fruit size, improved water retention during dry periods, and healthier overall plant development.",
          image: "/tomatofarm.png",
        },
      ],
      howTitle: "How It Works",
      howSubtitle: "From ocean waste to agricultural gold",
      howSteps: [
        {
          step: "01",
          title: "Sargassum Harvest",
          description: "Seaweed is collected from beaches and processed to remove sand, salt, and contaminants.",
        },
        {
          step: "02",
          title: "Pyrolysis Conversion",
          description: "Thermochemical processing at 400-700°C converts biomass into stable biochar and bio-oils.",
        },
        {
          step: "03",
          title: "Quality Testing",
          description: "Every batch is lab-tested for carbon content, pH, nutrient profile, and heavy metals. IBI certified.",
        },
        {
          step: "04",
          title: "Application Support",
          description: "Our agronomists provide site-specific recommendations for application rates and methods.",
        },
      ],
      scienceTitle: "The Science",
      sciencePoints: [
        {
          title: "Carbon Sequestration",
          text: "Biochar locks carbon in soil for centuries. Each ton of biochar sequesters ~3 tons of CO₂ equivalent — creating a verified, permanent carbon sink.",
        },
        {
          title: "Soil Microbiome",
          text: "Biochar's porous structure provides habitat for beneficial bacteria and mycorrhizal fungi, dramatically increasing soil biological activity and nutrient cycling.",
        },
        {
          title: "Water Efficiency",
          text: "In tropical sandy soils, biochar reduces irrigation needs by 30-50% by acting as a moisture reservoir that releases water slowly to plant roots.",
        },
      ],
      ctaTitle: "Start Growing With BlueCarbon",
      ctaText:
        "Whether you're a smallholder farmer, agricultural cooperative, or commercial operation — our team provides tailored solutions and ongoing support.",
      ctaButton: "Contact Our Agronomy Team",
      ctaTrials: "Request Trial Quantities",
    },
    es: {
      heroTitle: "Agricultura y Bioestimulantes",
      heroSubtitle:
        "Biocarbón carbono-negativo y bioestimulantes derivados de algas que aumentan rendimientos, restauran la salud del suelo y reducen la dependencia de fertilizantes sintéticos.",
      productsTitle: "Nuestros Productos Agrícolas",
      productsSubtitle: "Insumos respaldados por ciencia para agricultura regenerativa",
      products: [
        {
          name: "Enmienda de Suelo con Biocarbón",
          description:
            "Biocarbón de alta calidad producido por pirólisis de sargazo. Mejora la estructura del suelo, retención de agua y actividad microbiana mientras secuestra carbono permanentemente por más de 100 años.",
          benefits: [
            "Aumenta retención de agua 30-50%",
            "Mejora disponibilidad de nutrientes",
            "Apoya comunidades microbianas beneficiosas",
            "Secuestra carbono por 100+ años",
            "Reduce requerimientos de fertilizantes 20-30%",
          ],
          applications: ["Cultivos en hileras", "Huertos frutales", "Invernaderos", "Remediación de suelos"],
        },
        {
          name: "Bioestimulante Líquido",
          description:
            "Extracto concentrado de algas rico en hormonas naturales de crecimiento, micronutrientes y compuestos beneficiosos. Se aplica como spray foliar o drench al suelo.",
          benefits: [
            "Promueve desarrollo de raíces",
            "Mejora tolerancia al estrés (sequía, calor, sal)",
            "Aumenta eficiencia de absorción de nutrientes",
            "Mejora floración y cuajado de frutos",
            "100% orgánico y libre de químicos",
          ],
          applications: ["Granjas de vegetales", "Fruta tropical", "Viveros", "Agricultura orgánica"],
        },
        {
          name: "Mezcla Biocarbón-Compost",
          description:
            "Biocarbón pre-cargado mezclado con compost local para beneficios inmediatos al suelo. La matriz de biocarbón retiene nutrientes del compost y los libera lentamente.",
          benefits: [
            "Listo para aplicar — sin período de carga",
            "Perfil de nutrientes balanceado",
            "Mejora suelos arenosos y arcillosos",
            "Reduce frecuencia de riego",
            "Construye materia orgánica a largo plazo",
          ],
          applications: ["Nuevas plantaciones", "Suelos degradados", "Jardines urbanos", "Restauración de paisajes"],
        },
      ],
      trialsTitle: "Resultados de Campo Comprobados",
      trialsSubtitle: "Datos reales de ensayos agrícolas en el Caribe",
      trials: [
        {
          crop: "Pepinos",
          improvement: "28%",
          unit: "aumento en rendimiento",
          details: "Los ensayos con enmienda de biocarbón mostraron mejora significativa en crecimiento, sistemas radiculares más fuertes y mayor resistencia a enfermedades.",
          image: "/cucs.jpg",
        },
        {
          crop: "Tomates",
          improvement: "32%",
          unit: "aumento en rendimiento",
          details: "La aplicación de biocarbón produjo frutos más grandes, mejor retención de agua durante períodos secos y desarrollo más saludable de las plantas.",
          image: "/tomatofarm.png",
        },
      ],
      howTitle: "Cómo Funciona",
      howSubtitle: "De residuos oceánicos a oro agrícola",
      howSteps: [
        {
          step: "01",
          title: "Cosecha de Sargazo",
          description: "Las algas se recolectan de las playas y se procesan para eliminar arena, sal y contaminantes.",
        },
        {
          step: "02",
          title: "Conversión por Pirólisis",
          description: "El procesamiento termoquímico a 400-700°C convierte la biomasa en biocarbón estable y bio-aceites.",
        },
        {
          step: "03",
          title: "Pruebas de Calidad",
          description: "Cada lote se analiza en laboratorio para contenido de carbono, pH, perfil de nutrientes y metales pesados.",
        },
        {
          step: "04",
          title: "Soporte de Aplicación",
          description: "Nuestros agrónomos proporcionan recomendaciones específicas para tasas y métodos de aplicación.",
        },
      ],
      scienceTitle: "La Ciencia",
      sciencePoints: [
        {
          title: "Secuestro de Carbono",
          text: "El biocarbón fija carbono en el suelo por siglos. Cada tonelada secuestra ~3 toneladas de CO₂ equivalente — creando un sumidero de carbono permanente verificado.",
        },
        {
          title: "Microbioma del Suelo",
          text: "La estructura porosa del biocarbón proporciona hábitat para bacterias beneficiosas y hongos micorrízicos, aumentando dramáticamente la actividad biológica del suelo.",
        },
        {
          title: "Eficiencia Hídrica",
          text: "En suelos tropicales arenosos, el biocarbón reduce necesidades de riego 30-50% actuando como reservorio de humedad que libera agua lentamente a las raíces.",
        },
      ],
      ctaTitle: "Empieza a Cultivar con BlueCarbon",
      ctaText:
        "Ya seas un pequeño agricultor, cooperativa agrícola u operación comercial — nuestro equipo ofrece soluciones personalizadas y soporte continuo.",
      ctaButton: "Contactar Nuestro Equipo de Agronomía",
      ctaTrials: "Solicitar Cantidades de Prueba",
    },
  }

  const c = content[language]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2d8a6e] to-[#1d6b4f]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed">
              {c.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.productsTitle}</h2>
              <p className="text-lg text-muted-foreground">{c.productsSubtitle}</p>
            </div>

            <div className="space-y-8">
              {c.products.map((product, index) => (
                <div
                  key={product.name}
                  className="grid md:grid-cols-2 gap-8 p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3]"
                >
                  <div>
                    <div className={`w-12 h-1 ${index === 1 ? "bg-[#2d8a6e]" : "bg-[#0066CC]"} mb-4 rounded-full`} />
                    <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span
                          key={app}
                          className={`text-xs px-3 py-1 rounded-full ${
                            index === 1 ? "bg-[#2d8a6e]/10 text-[#2d8a6e]" : "bg-[#0066CC]/10 text-[#0066CC]"
                          }`}
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-4 text-foreground">
                      {language === "en" ? "Key Benefits" : "Beneficios Clave"}
                    </p>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3 text-sm text-muted-foreground">
                          <span className={`flex-shrink-0 ${index === 1 ? "text-[#2d8a6e]" : "text-[#0066CC]"}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Field Trials */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.trialsTitle}</h2>
              <p className="text-muted-foreground">{c.trialsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {c.trials.map((trial, index) => (
                <div
                  key={trial.crop}
                  className="rounded-2xl bg-white border border-[#E5DFD3] overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-64 bg-gradient-to-br from-[#0066CC]/10 to-[#2d8a6e]/10">
                    <Image
                      src={trial.image}
                      alt={`${trial.crop} field trial`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className={`w-12 h-1 ${index === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} mb-4 rounded-full`} />
                    <h3 className="text-2xl font-bold mb-2">{trial.crop}</h3>
                    <div className={`text-4xl font-bold ${index === 0 ? "text-[#0066CC]" : "text-[#2d8a6e]"} mb-1`}>
                      {trial.improvement}
                    </div>
                    <p className={`text-lg font-medium ${index === 0 ? "text-[#0066CC]" : "text-[#2d8a6e]"} mb-4`}>
                      {trial.unit}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{trial.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.howTitle}</h2>
              <p className="text-muted-foreground">{c.howSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {c.howSteps.map((item, index) => (
                <div key={item.step} className="text-center p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3]">
                  <div className={`text-4xl font-bold mb-4 ${index % 2 === 0 ? "text-[#0066CC]" : "text-[#2d8a6e]"}`}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Science */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#2d8a6e]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">{c.scienceTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {c.sciencePoints.map((point, index) => (
                <div key={point.title} className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                  <p className="text-white/85 leading-relaxed text-sm">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-10">{c.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#2d8a6e] text-white font-semibold rounded-lg hover:bg-[#1d6b4f] transition-colors text-lg"
              >
                {c.ctaButton}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#2d8a6e] text-[#2d8a6e] font-semibold rounded-lg hover:bg-[#2d8a6e] hover:text-white transition-colors text-lg"
              >
                {c.ctaTrials}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
