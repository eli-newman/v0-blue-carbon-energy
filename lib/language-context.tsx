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
  "nav.about": { en: "About Us", es: "Nosotros" },
  "nav.solution": { en: "Our Solution", es: "Nuestra Solución" },
  "nav.impact": { en: "Impact", es: "Impacto" },
  "nav.partners": { en: "Partners", es: "Socios" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.cta": { en: "Get Involved", es: "Participa" },

  // Home Page
  "home.hero.headline": {
    en: "Turning Coastal Waste into Clean Energy & Climate-Smart Soil Solutions",
    es: "Convirtiendo Residuos Costeros en Energía Limpia y Soluciones Inteligentes para el Suelo",
  },
  "home.hero.subheadline": {
    en: "BCE converts sargassum into renewable power and carbon-negative agricultural inputs for your community.",
    es: "BCE convierte el sargazo en energía renovable e insumos agrícolas carbono-negativos para tu comunidad.",
  },
  "home.hero.tagline": {
    en: "Saving the world is HARD. Let's go!",
    es: "Salvar el mundo es DIFÍCIL. ¡Vamos!",
  },
  "home.hero.cta": { en: "See How It Works", es: "Ver Cómo Funciona" },

  // Why It Matters Section
  "home.why.title": { en: "Why It Matters for Your Community", es: "Por Qué Importa para Tu Comunidad" },
  "home.why.bullet1": {
    en: "Clean your beaches while generating renewable energy that powers local economies.",
    es: "Limpia tus playas mientras generas energía renovable que impulsa las economías locales.",
  },
  "home.why.bullet2": {
    en: "Create jobs and economic opportunity in coastal communities most affected by sargassum blooms.",
    es: "Crea empleos y oportunidades económicas en comunidades costeras más afectadas por el sargazo.",
  },
  "home.why.bullet3": {
    en: "Produce carbon-negative soil amendments that boost food security and agricultural yields.",
    es: "Produce enmiendas del suelo carbono-negativas que mejoran la seguridad alimentaria y rendimientos agrícolas.",
  },

  // Sargassum Challenge Section
  "home.challenge.title": { en: "The Sargassum Crisis", es: "La Crisis del Sargazo" },
  "home.challenge.p1": {
    en: "Massive sargassum blooms are overwhelming Caribbean and Atlantic coasts, damaging tourism, threatening marine life, and costing communities millions in cleanup efforts.",
    es: "Enormes floraciones de sargazo están abrumando las costas del Caribe y el Atlántico, dañando el turismo, amenazando la vida marina y costando a las comunidades millones en esfuerzos de limpieza.",
  },
  "home.challenge.p2": {
    en: "These blooms are accelerating due to climate change and nutrient runoff. Your beaches need a sustainable solution—and we have one.",
    es: "Estas floraciones se aceleran debido al cambio climático y la escorrentía de nutrientes. Tus playas necesitan una solución sostenible—y nosotros la tenemos.",
  },
  "home.process.title": { en: "How It Works", es: "Cómo Funciona" },
  "home.process.subtitle": {
    en: "From your beaches to clean energy and healthier soil",
    es: "De tus playas a energía limpia y suelo más saludable",
  },
  "home.process.step1.title": { en: "Harvest", es: "Cosecha" },
  "home.process.step1.desc": {
    en: "We harvest from shorelines, beaches, and marinas. Seaweed is cleaned and dried on-site.",
    es: "Cosechamos de costas, playas y marinas. El alga se limpia y seca en el lugar.",
  },
  "home.process.step2.title": { en: "Convert", es: "Conversión" },
  "home.process.step2.desc": {
    en: "Thermochemical processing transforms dried sargassum into renewable syngas for energy generation.",
    es: "El procesamiento termoquímico transforma el sargazo seco en gas de síntesis renovable para generar energía.",
  },
  "home.process.step3.title": { en: "Generate Power", es: "Generar Energía" },
  "home.process.step3.desc": {
    en: "Clean, renewable electricity powers local communities while capturing carbon in biochar.",
    es: "Electricidad limpia y renovable alimenta comunidades locales mientras captura carbono en biocarbón.",
  },
  "home.process.step4.title": { en: "Create Value", es: "Crear Valor" },
  "home.process.step4.desc": {
    en: "Carbon-negative biochar and biostimulants improve crop yields and soil health for local farmers.",
    es: "Biocarbón carbono-negativo y bioestimulantes mejoran rendimientos y salud del suelo para agricultores locales.",
  },
  "home.impact.title": { en: "Our Progress", es: "Nuestro Progreso" },
  "home.impact.subtitle": {
    en: "Real results from pilot operations and field trials",
    es: "Resultados reales de operaciones piloto y pruebas de campo",
  },
  "home.impact.metric1": { en: "Tons Sargassum Processed (Target)", es: "Toneladas de Sargazo Procesadas (Meta)" },
  "home.impact.metric2": { en: "Tons CO₂ Equivalent Captured (Target)", es: "Toneladas CO₂ Equivalente Capturado (Meta)" },
  "home.impact.metric3": { en: "Coastal Jobs Created (Target)", es: "Empleos Costeros Creados (Meta)" },

  // CTA Section
  "home.cta.title": { en: "Partner with Us to Clean Your Beaches", es: "Asóciate con Nosotros para Limpiar Tus Playas" },
  "home.cta.subtitle": {
    en: "Join municipalities and communities turning sargassum from a crisis into clean energy and economic opportunity.",
    es: "Únete a municipios y comunidades que convierten el sargazo de una crisis en energía limpia y oportunidad económica.",
  },
  "home.cta.learn": { en: "Explore the Solution", es: "Explorar la Solución" },
  "home.cta.contact": { en: "Start a Conversation", es: "Iniciar una Conversación" },

  // Footer
  "footer.description": {
    en: "Transforming coastal waste into sustainable energy and agricultural products.",
    es: "Transformando residuos costeros en energía sostenible y productos agrícolas.",
  },
  "footer.navigation": { en: "Navigation", es: "Navegación" },
  "footer.connect": { en: "Connect", es: "Conectar" },
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
