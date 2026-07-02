"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"

export default function Materials() {
  const { language } = useLanguage()

  const content = {
    en: {
      heroTitle: "Building the Caribbean from Ocean Waste",
      heroSubtitle:
        "We transform sargassum seaweed and recycled plastics into high-performance composite materials — rot resistant, marine durable, and carbon negative.",
      productsTitle: "Our Products",
      productsSubtitle: "Engineered composites that outperform traditional materials",
      products: [
        {
          name: "Composite Boards",
          description:
            "Structural and decorative boards made from sargassum fiber and recycled plastic matrix. Ideal for walls, ceilings, partitions, and interior finishing in residential and commercial construction.",
          specs: ["Rot & termite resistant", "Waterproof", "Lightweight", "Machinable — cuts, drills, screws like wood"],
          image: "/composite-boards.jpg",
        },
        {
          name: "Composite Tiles",
          description:
            "Durable flooring and roofing tiles engineered for tropical climates. UV-stable coloring throughout the material — no paint or coating required.",
          specs: ["UV stable", "Slip resistant", "No sealing required", "Available in multiple profiles"],
          image: "/composite-tiles.jpg",
        },
        {
          name: "Structural Profiles",
          description:
            "Beams, posts, joists, and decking for structural applications. Engineered to meet Caribbean building codes for wind and seismic resistance.",
          specs: ["Load-bearing capacity", "Corrosion proof", "25+ year lifespan", "No maintenance"],
        },
        {
          name: "Pellets & Raw Feedstock",
          description:
            "Composite pellets for manufacturers who want to mold their own products. Consistent quality feedstock for injection molding, extrusion, and compression molding.",
          specs: ["Consistent melt flow", "Custom formulations", "Bulk supply available", "Compatible with standard equipment"],
        },
      ],
      benefitsTitle: "Why Blue Carbon Materials Composites",
      benefitsSubtitle: "Performance that traditional materials can't match in tropical environments",
      benefits: [
        {
          title: "Rot & Pest Resistant",
          description:
            "Unlike wood, our composites don't rot, warp, or attract termites. Zero chemical treatment needed — the material is inherently resistant.",
        },
        {
          title: "Marine Durable",
          description:
            "Engineered for saltwater environments. Our materials withstand constant marine exposure without degradation — ideal for docks, seawalls, and coastal infrastructure.",
        },
        {
          title: "Lightweight & Strong",
          description:
            "30-40% lighter than concrete with comparable structural performance. Easier to transport, handle, and install — reducing construction time and labor costs.",
        },
        {
          title: "Carbon Negative",
          description:
            "Every board sequesters carbon from ocean waste and diverts plastic from landfills. The manufacturing process itself runs on renewable energy from our own sargassum conversion.",
        },
        {
          title: "Weather Proof",
          description:
            "Hurricane-rated performance. UV stable, waterproof, and dimensionally stable through extreme heat, humidity, and salt air.",
        },
        {
          title: "Zero Maintenance",
          description:
            "No painting, staining, sealing, or chemical treatment — ever. The color goes all the way through. Pressure wash and go.",
        },
      ],
      applicationsTitle: "Applications",
      applicationsSubtitle: "From homes to harbors — built to last in the Caribbean",
      applications: [
        {
          sector: "Residential Construction",
          uses: "Walls, roofing, flooring, decking, fencing, outdoor furniture",
          why: "Affordable, durable housing materials that withstand hurricanes and tropical conditions without ongoing maintenance costs.",
        },
        {
          sector: "Marine & Coastal",
          uses: "Docks, boardwalks, seawalls, marine signage, boat components",
          why: "The only material engineered specifically for constant saltwater exposure from Caribbean ocean waste itself.",
        },
        {
          sector: "Commercial & Infrastructure",
          uses: "Public buildings, schools, hospitals, bridges, utility poles, retaining walls",
          why: "Government and institutional projects benefit from 25+ year lifespan, zero maintenance budgets, and carbon-negative procurement.",
        },
        {
          sector: "Tourism & Hospitality",
          uses: "Resort decking, beach furniture, pool areas, signage, landscaping features",
          why: "Hotels and resorts get beautiful, durable materials with a compelling sustainability story for eco-conscious travelers.",
        },
      ],
      sustainabilityTitle: "The Sustainability Advantage",
      sustainabilitySubtitle: "Every product we make solves multiple environmental problems simultaneously",
      sustainabilityPoints: [
        {
          stat: "2x",
          label: "Problems Solved Per Product",
          detail: "Each composite board removes sargassum from beaches AND diverts plastic from landfills and oceans.",
        },
        {
          stat: "100%",
          label: "Renewable Energy Manufacturing",
          detail: "Our production facilities run on syngas generated from sargassum — the same feedstock as our products.",
        },
        {
          stat: "Net -",
          label: "Carbon Negative Lifecycle",
          detail: "Designed for a carbon-negative lifecycle, with third-party lifecycle analysis currently in development.",
        },
      ],
      visionTitle: "Building a Circular Caribbean",
      visionText:
        "Imagine every new home, school, dock, and resort in the Caribbean built from the very waste that washes up on its shores. That's not a distant dream — it's what we're building right now. Sargassum and landfill plastic become walls, roofs, and infrastructure. Ocean waste becomes economic opportunity. Environmental cleanup becomes construction supply chain.",
      visionCta: "Partner With Us",
      ctaTitle: "Ready to Build With Blue Carbon Materials?",
      ctaSubtitle:
        "Whether you're a developer, contractor, government agency, or distributor — we want to hear from you.",
      ctaButton: "Get in Touch",
      ctaSamples: "Request Samples",
    },
    es: {
      heroTitle: "Construyendo el Caribe con Residuos del Océano",
      heroSubtitle:
        "Transformamos sargazo y plásticos reciclados en materiales compuestos de alto rendimiento — resistentes a la putrefacción, duraderos en ambiente marino y carbono negativos.",
      productsTitle: "Nuestros Productos",
      productsSubtitle: "Compuestos diseñados que superan a los materiales tradicionales",
      products: [
        {
          name: "Tableros Compuestos",
          description:
            "Tableros estructurales y decorativos hechos de fibra de sargazo y matriz de plástico reciclado. Ideales para paredes, techos, particiones y acabados interiores en construcción residencial y comercial.",
          specs: ["Resistente a putrefacción y termitas", "Impermeable", "Ligero", "Maquinable — corta, perfora y atornilla como madera"],
          image: "/composite-boards.jpg",
        },
        {
          name: "Tejas Compuestas",
          description:
            "Tejas duraderas para pisos y techos diseñadas para climas tropicales. Color estable a UV en todo el material — sin pintura ni recubrimiento necesario.",
          specs: ["Estable a UV", "Antideslizante", "No requiere sellado", "Disponible en múltiples perfiles"],
          image: "/composite-tiles.jpg",
        },
        {
          name: "Perfiles Estructurales",
          description:
            "Vigas, postes, viguetas y pisos para aplicaciones estructurales. Diseñados para cumplir con los códigos de construcción del Caribe para resistencia a viento y sismos.",
          specs: ["Capacidad de carga", "A prueba de corrosión", "Vida útil de 25+ años", "Sin mantenimiento"],
        },
        {
          name: "Pellets y Materia Prima",
          description:
            "Pellets compuestos para fabricantes que quieran moldear sus propios productos. Materia prima de calidad consistente para moldeo por inyección, extrusión y compresión.",
          specs: ["Flujo de fusión consistente", "Formulaciones personalizadas", "Suministro a granel", "Compatible con equipos estándar"],
        },
      ],
      benefitsTitle: "Por Qué Compuestos Blue Carbon Materials",
      benefitsSubtitle: "Rendimiento que los materiales tradicionales no pueden igualar en ambientes tropicales",
      benefits: [
        {
          title: "Resistente a Putrefacción y Plagas",
          description:
            "A diferencia de la madera, nuestros compuestos no se pudren, deforman ni atraen termitas. Cero tratamiento químico necesario.",
        },
        {
          title: "Durabilidad Marina",
          description:
            "Diseñados para ambientes de agua salada. Nuestros materiales resisten exposición marina constante sin degradación.",
        },
        {
          title: "Ligero y Resistente",
          description:
            "30-40% más ligero que el concreto con rendimiento estructural comparable. Más fácil de transportar, manejar e instalar.",
        },
        {
          title: "Carbono Negativo",
          description:
            "Cada tablero secuestra carbono de residuos oceánicos y desvía plástico de vertederos. La manufactura funciona con energía renovable.",
        },
        {
          title: "A Prueba de Clima",
          description:
            "Rendimiento clasificado para huracanes. Estable a UV, impermeable y dimensionalmente estable en calor extremo y humedad.",
        },
        {
          title: "Cero Mantenimiento",
          description:
            "Sin pintar, teñir, sellar ni tratamiento químico — nunca. El color penetra todo el material.",
        },
      ],
      applicationsTitle: "Aplicaciones",
      applicationsSubtitle: "De hogares a puertos — construido para durar en el Caribe",
      applications: [
        {
          sector: "Construcción Residencial",
          uses: "Paredes, techos, pisos, terrazas, cercas, muebles de exterior",
          why: "Materiales de vivienda asequibles y duraderos que resisten huracanes y condiciones tropicales sin costos de mantenimiento.",
        },
        {
          sector: "Marino y Costero",
          uses: "Muelles, paseos marítimos, muros de contención, señalización marina, componentes de embarcaciones",
          why: "El único material diseñado específicamente para exposición constante al agua salada, hecho de los propios residuos oceánicos del Caribe.",
        },
        {
          sector: "Comercial e Infraestructura",
          uses: "Edificios públicos, escuelas, hospitales, puentes, postes de servicios, muros de contención",
          why: "Proyectos gubernamentales e institucionales con vida útil de 25+ años, cero presupuesto de mantenimiento y adquisición carbono-negativa.",
        },
        {
          sector: "Turismo y Hospitalidad",
          uses: "Terrazas de resort, muebles de playa, áreas de piscina, señalización, paisajismo",
          why: "Hoteles y resorts obtienen materiales hermosos y duraderos con una historia de sostenibilidad convincente.",
        },
      ],
      sustainabilityTitle: "La Ventaja de Sostenibilidad",
      sustainabilitySubtitle: "Cada producto que fabricamos resuelve múltiples problemas ambientales simultáneamente",
      sustainabilityPoints: [
        {
          stat: "2x",
          label: "Problemas Resueltos por Producto",
          detail: "Cada tablero compuesto remueve sargazo de playas Y desvía plástico de vertederos y océanos.",
        },
        {
          stat: "100%",
          label: "Manufactura con Energía Renovable",
          detail: "Nuestras instalaciones funcionan con gas de síntesis generado del sargazo — la misma materia prima que nuestros productos.",
        },
        {
          stat: "Neto -",
          label: "Ciclo de Vida Carbono Negativo",
          detail: "Diseñado para un ciclo de vida carbono-negativo, con análisis de ciclo de vida por terceros actualmente en desarrollo.",
        },
      ],
      visionTitle: "Construyendo un Caribe Circular",
      visionText:
        "Imagina cada nuevo hogar, escuela, muelle y resort en el Caribe construido con los mismos residuos que llegan a sus costas. Eso no es un sueño lejano — es lo que estamos construyendo ahora mismo. El sargazo y el plástico de vertedero se convierten en paredes, techos e infraestructura.",
      visionCta: "Asóciate con Nosotros",
      ctaTitle: "¿Listo para Construir con Blue Carbon Materials?",
      ctaSubtitle:
        "Ya seas desarrollador, contratista, agencia gubernamental o distribuidor — queremos saber de ti.",
      ctaButton: "Contáctanos",
      ctaSamples: "Solicitar Muestras",
    },
  }

  const c = content[language]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0066CC] to-[#004A99]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed">
              {c.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.productsTitle}</h2>
              <p className="text-lg text-muted-foreground">{c.productsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {c.products.map((product, index) => (
                <div
                  key={product.name}
                  className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] hover:border-[#0066CC]/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Product visual — real photo when available, otherwise conceptual placeholder */}
                  {product.image ? (
                    <div className="relative h-48 rounded-xl mb-6 overflow-hidden border border-[#E5DFD3]">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="h-48 rounded-xl bg-gradient-to-br from-[#0066CC]/5 to-[#2d8a6e]/10 mb-6 flex items-center justify-center border border-[#E5DFD3]">
                      <div className="text-center">
                        <div className={`text-5xl font-bold mb-2 ${index % 2 === 0 ? "text-[#0066CC]/20" : "text-[#2d8a6e]/20"}`}>
                          {["◫", "⬡", "▦", "●"][index]}
                        </div>
                        <p className="text-sm text-muted-foreground/60 font-medium">{product.name}</p>
                      </div>
                    </div>
                  )}
                  <div className={`w-12 h-1 ${index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} mb-4 rounded-full`} />
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          index % 2 === 0
                            ? "bg-[#0066CC]/10 text-[#0066CC]"
                            : "bg-[#2d8a6e]/10 text-[#2d8a6e]"
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Benefits */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.benefitsTitle}</h2>
              <p className="text-lg text-muted-foreground">{c.benefitsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {c.benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-8 rounded-2xl bg-white border border-[#E5DFD3] hover:border-[#0066CC]/30 transition-all duration-300"
                >
                  <div className={`w-10 h-1 ${index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} mb-4 rounded-full`} />
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.applicationsTitle}</h2>
              <p className="text-lg text-muted-foreground">{c.applicationsSubtitle}</p>
            </div>

            <div className="space-y-6">
              {c.applications.map((app, index) => (
                <div
                  key={app.sector}
                  className="grid md:grid-cols-3 gap-6 p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3]"
                >
                  <div>
                    <div className={`w-10 h-1 ${index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} mb-4 rounded-full`} />
                    <h3 className="text-xl font-bold">{app.sector}</h3>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      {language === "en" ? "Products" : "Productos"}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{app.uses}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      {language === "en" ? "Why It Works" : "Por Qué Funciona"}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{app.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.sustainabilityTitle}</h2>
              <p className="text-lg text-muted-foreground">{c.sustainabilitySubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {c.sustainabilityPoints.map((point, index) => (
                <div key={point.label} className="text-center p-10 rounded-2xl bg-white border border-[#E5DFD3]">
                  <div className={`text-5xl font-bold mb-4 ${index === 1 ? "text-[#2d8a6e]" : "text-[#0066CC]"}`}>
                    {point.stat}
                  </div>
                  <p className="text-lg font-semibold mb-3">{point.label}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0066CC]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{c.visionTitle}</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-10">{c.visionText}</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#0066CC] font-semibold rounded-xl hover:bg-[#F5F0E8] transition-colors"
            >
              {c.visionCta}
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-10">{c.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#0066CC] text-white font-semibold rounded-lg hover:bg-[#0052A3] transition-colors text-lg"
              >
                {c.ctaButton}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#0066CC] text-[#0066CC] font-semibold rounded-lg hover:bg-[#0066CC] hover:text-white transition-colors text-lg"
              >
                {c.ctaSamples}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
