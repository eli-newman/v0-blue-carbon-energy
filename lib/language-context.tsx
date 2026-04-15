"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<string, { en: string; es: string }> = {
  // Navigation & UI
  "nav.home": { en: "Home", es: "Inicio" },
  "nav.materials": { en: "Materials", es: "Materiales" },
  "nav.agriculture": { en: "Agriculture", es: "Agricultura" },
  "nav.technology": { en: "Technology", es: "Tecnología" },
  "nav.impact": { en: "Impact", es: "Impacto" },
  "nav.about": { en: "About Us", es: "Nosotros" },
  "nav.partners": { en: "Partners", es: "Socios" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.cta": { en: "Get Involved", es: "Participa" },

  // Home Page - Hero
  "home.hero.headline": {
    en: "Turning Ocean Waste Into High-Performance Building Materials",
    es: "Convirtiendo Residuos Oceánicos en Materiales de Construcción de Alto Rendimiento",
  },
  "home.hero.subheadline": {
    en: "We convert sargassum seaweed and recycled plastics into composite building materials, agricultural inputs, and clean energy — all through carbon-negative manufacturing.",
    es: "Convertimos sargazo y plásticos reciclados en materiales de construcción compuestos, insumos agrícolas y energía limpia — todo mediante manufactura carbono-negativa.",
  },
  "home.hero.tagline": {
    en: "Building the Caribbean from ocean waste.",
    es: "Construyendo el Caribe con residuos oceánicos.",
  },
  "home.hero.cta": { en: "Explore Our Materials", es: "Explorar Nuestros Materiales" },

  // Why It Matters Section
  "home.why.title": { en: "Three Problems. One Integrated Solution.", es: "Tres Problemas. Una Solución Integrada." },
  "home.why.bullet1": {
    en: "Sargassum is overwhelming Caribbean coastlines — we turn it into rot-resistant, marine-durable composite boards and tiles.",
    es: "El sargazo está abrumando las costas del Caribe — lo convertimos en tableros y tejas compuestas resistentes a la putrefacción y al ambiente marino.",
  },
  "home.why.bullet2": {
    en: "Plastic waste clogs landfills and oceans — we compound it with sargassum fiber into high-performance building products.",
    es: "Los residuos plásticos saturan vertederos y océanos — los combinamos con fibra de sargazo en productos de construcción de alto rendimiento.",
  },
  "home.why.bullet3": {
    en: "Importing construction materials is expensive and carbon-heavy — we manufacture locally from local waste streams.",
    es: "Importar materiales de construcción es caro y genera mucho carbono — fabricamos localmente con flujos de residuos locales.",
  },

  // Sargassum Challenge Section
  "home.challenge.title": { en: "The Sargassum Crisis", es: "La Crisis del Sargazo" },
  "home.challenge.p1": {
    en: "Massive sargassum blooms are overwhelming Caribbean and Atlantic coasts, damaging tourism, threatening marine life, and costing communities millions in cleanup efforts.",
    es: "Enormes floraciones de sargazo están abrumando las costas del Caribe y el Atlántico, dañando el turismo, amenazando la vida marina y costando a las comunidades millones en esfuerzos de limpieza.",
  },
  "home.challenge.p2": {
    en: "These blooms are accelerating due to climate change and nutrient runoff. Instead of disposal, we see a raw material — feedstock for composites, biochar, and energy.",
    es: "Estas floraciones se aceleran debido al cambio climático y la escorrentía de nutrientes. En lugar de desecharlo, vemos una materia prima — insumo para compuestos, biocarbón y energía.",
  },

  // Process Section
  "home.process.title": { en: "How It Works", es: "Cómo Funciona" },
  "home.process.subtitle": {
    en: "From beach cleanup to building materials, agricultural products, and clean energy",
    es: "De la limpieza de playas a materiales de construcción, productos agrícolas y energía limpia",
  },
  "home.process.step1.title": { en: "Harvest", es: "Cosecha" },
  "home.process.step1.desc": {
    en: "Sargassum is collected from beaches using environmentally conscious methods. Recycled plastics are sorted and shredded.",
    es: "El sargazo se recolecta de las playas usando métodos ambientalmente conscientes. Los plásticos reciclados se clasifican y trituran.",
  },
  "home.process.step2.title": { en: "Convert", es: "Conversión" },
  "home.process.step2.desc": {
    en: "Advanced pyrolysis converts dried sargassum into biochar, bio-oil, and syngas that powers the entire facility.",
    es: "La pirólisis avanzada convierte el sargazo seco en biocarbón, bio-aceite y gas de síntesis que alimenta toda la instalación.",
  },
  "home.process.step3.title": { en: "Manufacture", es: "Manufactura" },
  "home.process.step3.desc": {
    en: "Sargassum fiber and recycled plastic are compounded into composite boards, tiles, and structural profiles.",
    es: "La fibra de sargazo y plástico reciclado se combinan en tableros, tejas y perfiles estructurales compuestos.",
  },
  "home.process.step4.title": { en: "Grow", es: "Cultivar" },
  "home.process.step4.desc": {
    en: "Biochar and biostimulants improve crop yields and soil health — carbon-negative agriculture from the same process.",
    es: "Biocarbón y bioestimulantes mejoran rendimientos y salud del suelo — agricultura carbono-negativa del mismo proceso.",
  },

  // Impact Section
  "home.impact.title": { en: "Our Progress", es: "Nuestro Progreso" },
  "home.impact.subtitle": {
    en: "Real results from pilot operations and field trials",
    es: "Resultados reales de operaciones piloto y pruebas de campo",
  },
  "home.impact.metric1": { en: "Tons Sargassum Processed (Target)", es: "Toneladas de Sargazo Procesadas (Meta)" },
  "home.impact.metric2": { en: "Tons CO₂ Equivalent Captured (Target)", es: "Toneladas CO₂ Equivalente Capturado (Meta)" },
  "home.impact.metric3": { en: "Coastal Jobs Created (Target)", es: "Empleos Costeros Creados (Meta)" },

  // CTA Section
  "home.cta.title": { en: "Build With Us", es: "Construye Con Nosotros" },
  "home.cta.subtitle": {
    en: "Whether you need sustainable building materials, agricultural inputs, or want to invest in carbon-negative manufacturing — let's talk.",
    es: "Ya sea que necesites materiales de construcción sostenibles, insumos agrícolas o quieras invertir en manufactura carbono-negativa — hablemos.",
  },
  "home.cta.learn": { en: "View Our Materials", es: "Ver Nuestros Materiales" },
  "home.cta.contact": { en: "Contact & Investors", es: "Contacto e Inversores" },

  // Footer
  "footer.description": {
    en: "Converting sargassum and recycled plastics into composite building materials, agricultural inputs, and clean energy.",
    es: "Convirtiendo sargazo y plásticos reciclados en materiales de construcción compuestos, insumos agrícolas y energía limpia.",
  },
  "footer.navigation": { en: "Products", es: "Productos" },
  "footer.connect": { en: "Company", es: "Empresa" },
  "footer.rights": { en: "All rights reserved.", es: "Todos los derechos reservados." },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
