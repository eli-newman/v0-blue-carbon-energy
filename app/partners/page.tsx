"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Partners() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = language === "en" ? "Name is required" : "El nombre es requerido"
    if (!formData.email.trim()) newErrors.email = language === "en" ? "Email is required" : "El correo es requerido"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = language === "en" ? "Invalid email address" : "Correo electrónico inválido"
    if (!formData.message.trim())
      newErrors.message = language === "en" ? "Message is required" : "El mensaje es requerido"
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setFormData({ name: "", email: "", company: "", projectType: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const content = {
    en: {
      modelTitle: "Partnership Model",
      modelP1:
        "We don't believe in one-size-fits-all solutions. Each partnership is customized to local contexts, capacities, and goals. Whether you're a coastal municipality, research institution, or agricultural cooperative, we work together to develop sustainable sargassum solutions.",
      modelP2:
        "Our model prioritizes long-term, equitable relationships where all partners benefit financially, technically, and environmentally.",
      howTitle: "How We Partner",
      partnerTypes: [
        {
          title: "Municipalities",
          description:
            "Coastal cities and regional governments partner with us to solve sargassum challenges, create jobs, and generate municipal revenue through biochar sales and carbon credits.",
          focus: ["Waste management", "Local employment", "Carbon markets"],
        },
        {
          title: "Research Institutions",
          description:
            "Universities and research centers collaborate on process optimization, product development, and environmental monitoring. We provide real-world data and facilities.",
          focus: ["Process innovation", "Product development", "Environmental data"],
        },
        {
          title: "Agricultural Partners",
          description:
            "Farmers and agricultural networks integrate our biochar and biostimulants into regenerative practices. We provide technical support and market linkages.",
          focus: ["Soil health", "Yield optimization", "Sustainability"],
        },
      ],
      activeTitle: "Our Active Partners",
      activeSubtitle: "Building solutions across the Caribbean and Atlantic",
      municipalities: {
        title: "Municipalities",
        list: [
          { name: "Municipality of Punta Cana, Dominican Republic", focus: "Collection operations, waste management" },
          { name: "Puerto Plata Municipal Government", focus: "Processing facility development, employment" },
          { name: "Belizean Coast Conservation Authority", focus: "Marine restoration, research partnership" },
          { name: "Barbados Environmental Ministry", focus: "Regional coordination, policy development" },
        ],
      },
      research: {
        title: "Research Institutions",
        list: [
          { name: "University of the West Indies", focus: "Marine biology, carbon cycling research" },
          { name: "Instituto Tecnológico de Santo Domingo", focus: "Process engineering optimization" },
          { name: "Caribbean Institute for Marine Research", focus: "Ecosystem monitoring, biodiversity studies" },
          { name: "Global Biochar Initiative", focus: "Product certification, standards development" },
        ],
      },
      buildTitle: "Build With Us",
      buildSubtitle: "Interested in using our materials or working with us on a project? Tell us what you're building.",
      buildNameLabel: "Full Name",
      buildEmailLabel: "Email Address",
      buildCompanyLabel: "Company / Organization",
      buildProjectLabel: "What are you looking to build?",
      buildProjectOptions: [
        "Select a project type",
        "Residential Construction",
        "Commercial Construction",
        "Agricultural Application",
        "Research & Development",
        "Investment Partnership",
        "Other",
      ],
      buildMessageLabel: "Tell us more about your project",
      buildSubmit: "Send Application",
      buildSuccess: "Thanks! We'll be in touch shortly.",
      buildSuccessText: "Our team will review your application and reach out within 2 business days.",
      ctaTitle: "Interested in Partnering?",
      ctaText:
        "We're actively seeking partners—municipalities, research institutions, and agricultural networks—ready to scale sustainable sargassum solutions.",
      ctaButton: "Explore Partnership Opportunities",
    },
    es: {
      modelTitle: "Modelo de Asociación",
      modelP1:
        "No creemos en soluciones únicas para todos. Cada asociación se personaliza según los contextos locales, capacidades y objetivos. Ya seas un municipio costero, institución de investigación o cooperativa agrícola, trabajamos juntos para desarrollar soluciones sostenibles de sargazo.",
      modelP2:
        "Nuestro modelo prioriza relaciones a largo plazo y equitativas donde todos los socios se benefician financiera, técnica y ambientalmente.",
      howTitle: "Cómo Nos Asociamos",
      partnerTypes: [
        {
          title: "Municipalidades",
          description:
            "Las ciudades costeras y los gobiernos regionales se asocian con nosotros para resolver los desafíos del sargazo, crear empleos y generar ingresos municipales a través de ventas de biocarbón y créditos de carbono.",
          focus: ["Gestión de residuos", "Empleo local", "Mercados de carbono"],
        },
        {
          title: "Instituciones de Investigación",
          description:
            "Universidades y centros de investigación colaboran en optimización de procesos, desarrollo de productos y monitoreo ambiental. Proporcionamos datos del mundo real e instalaciones.",
          focus: ["Innovación de procesos", "Desarrollo de productos", "Datos ambientales"],
        },
        {
          title: "Socios Agrícolas",
          description:
            "Agricultores y redes agrícolas integran nuestro biocarbón y bioestimulantes en prácticas regenerativas. Proporcionamos soporte técnico y vínculos de mercado.",
          focus: ["Salud del suelo", "Optimización del rendimiento", "Sostenibilidad"],
        },
      ],
      activeTitle: "Nuestros Socios Activos",
      activeSubtitle: "Construyendo soluciones en el Caribe y el Atlántico",
      municipalities: {
        title: "Municipalidades",
        list: [
          {
            name: "Municipalidad de Punta Cana, República Dominicana",
            focus: "Operaciones de recolección, gestión de residuos",
          },
          { name: "Gobierno Municipal de Puerto Plata", focus: "Desarrollo de instalaciones de procesamiento, empleo" },
          {
            name: "Autoridad de Conservación de la Costa de Belice",
            focus: "Restauración marina, asociación de investigación",
          },
          { name: "Ministerio de Medio Ambiente de Barbados", focus: "Coordinación regional, desarrollo de políticas" },
        ],
      },
      research: {
        title: "Instituciones de Investigación",
        list: [
          {
            name: "Universidad de las Indias Occidentales",
            focus: "Biología marina, investigación del ciclo del carbono",
          },
          { name: "Instituto Tecnológico de Santo Domingo", focus: "Optimización de ingeniería de procesos" },
          {
            name: "Instituto Caribeño de Investigación Marina",
            focus: "Monitoreo de ecosistemas, estudios de biodiversidad",
          },
          { name: "Iniciativa Global de Biocarbón", focus: "Certificación de productos, desarrollo de estándares" },
        ],
      },
      buildTitle: "Construye Con Nosotros",
      buildSubtitle: "¿Interesado en usar nuestros materiales o trabajar con nosotros en un proyecto? Cuéntanos qué estás construyendo.",
      buildNameLabel: "Nombre Completo",
      buildEmailLabel: "Correo Electrónico",
      buildCompanyLabel: "Empresa / Organización",
      buildProjectLabel: "¿Qué quieres construir?",
      buildProjectOptions: [
        "Selecciona un tipo de proyecto",
        "Construcción Residencial",
        "Construcción Comercial",
        "Aplicación Agrícola",
        "Investigación y Desarrollo",
        "Asociación de Inversión",
        "Otro",
      ],
      buildMessageLabel: "Cuéntanos más sobre tu proyecto",
      buildSubmit: "Enviar Solicitud",
      buildSuccess: "¡Gracias! Nos pondremos en contacto pronto.",
      buildSuccessText: "Nuestro equipo revisará tu solicitud y se comunicará contigo en 2 días hábiles.",
      ctaTitle: "¿Interesado en Asociarte?",
      ctaText:
        "Estamos buscando activamente socios—municipalidades, instituciones de investigación y redes agrícolas—listos para escalar soluciones sostenibles de sargazo.",
      ctaButton: "Explorar Oportunidades de Asociación",
    },
  }

  const c = content[language]

  return (
    <>
      <Header />
      <main>
        {/* Partnership Model - starts directly */}
        <section className="pt-16 pb-24 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">{c.modelTitle}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.modelP1}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{c.modelP2}</p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden bg-[#F5F0E8]">
                <Image src="/partnership-collaboration-meeting-sustainable-busi.jpg" alt="Partnership collaboration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* How We Partner */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">{c.howTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {c.partnerTypes.map((type, index) => (
                <div
                  key={type.title}
                  className="p-8 rounded-2xl bg-white border border-[#E5DFD3] hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-1 ${index === 1 ? "bg-[#2d8a6e]" : "bg-[#0066CC]"} mb-6 rounded-full`} />
                  <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.focus.map((area) => (
                      <span
                        key={area}
                        className={`text-xs px-3 py-1 ${index === 1 ? "bg-[#2d8a6e]/10 text-[#2d8a6e]" : "bg-[#0066CC]/10 text-[#0066CC]"} rounded-full`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Partners */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.activeTitle}</h2>
              <p className="text-muted-foreground">{c.activeSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-[#0066CC] rounded-full" />
                  <h3 className="text-xl font-bold text-[#0066CC]">{c.municipalities.title}</h3>
                </div>
                <div className="space-y-4">
                  {c.municipalities.list.map((partner) => (
                    <div key={partner.name} className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3]">
                      <h4 className="font-semibold mb-1">{partner.name}</h4>
                      <p className="text-sm text-muted-foreground">{partner.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-[#2d8a6e] rounded-full" />
                  <h3 className="text-xl font-bold text-[#2d8a6e]">{c.research.title}</h3>
                </div>
                <div className="space-y-4">
                  {c.research.list.map((partner) => (
                    <div key={partner.name} className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3]">
                      <h4 className="font-semibold mb-1">{partner.name}</h4>
                      <p className="text-sm text-muted-foreground">{partner.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build With Us */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.buildTitle}</h2>
              <p className="text-muted-foreground text-lg">{c.buildSubtitle}</p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#2d8a6e]/10 border border-[#2d8a6e] text-[#2d8a6e]" role="alert">
                <p className="font-semibold">{c.buildSuccess}</p>
                <p className="text-sm">{c.buildSuccessText}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-[#E5DFD3]" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="build-name" className="block text-sm font-semibold mb-2">
                    {c.buildNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="build-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-500" : "border-[#E5DFD3]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all`}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="build-email" className="block text-sm font-semibold mb-2">
                    {c.buildEmailLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="build-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-[#E5DFD3]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all`}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="build-company" className="block text-sm font-semibold mb-2">
                    {c.buildCompanyLabel}
                  </label>
                  <input
                    type="text"
                    id="build-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="build-project" className="block text-sm font-semibold mb-2">
                    {c.buildProjectLabel}
                  </label>
                  <select
                    id="build-project"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all"
                  >
                    {c.buildProjectOptions.map((opt, i) => (
                      <option key={i} value={i === 0 ? "" : opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="build-message" className="block text-sm font-semibold mb-2">
                  {c.buildMessageLabel} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="build-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-500" : "border-[#E5DFD3]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all resize-vertical`}
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full bg-[#0066CC] hover:bg-[#004A99] text-white py-6 rounded-xl text-lg">
                {c.buildSubmit}
              </Button>
            </form>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#2d8a6e]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{c.ctaTitle}</h2>
            <p className="text-lg text-white/90 mb-10">{c.ctaText}</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#2d8a6e] font-semibold rounded-xl hover:bg-[#F5F0E8] transition-colors"
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
