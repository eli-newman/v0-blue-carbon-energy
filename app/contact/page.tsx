"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    type: "inquiry",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const content = {
    en: {
      title: "Get in Touch",
      subtitle:
        "Questions about our solution, partnership opportunities, or just want to chat? We'd love to hear from you.",
      email: "Email",
      emailMark: "Mark.Mathis@bluecarbonmaterials.com",
      emailLuke: "luke.mathis@bluecarbonmaterials.com",
      emailNote: "Response within 24 hours",
      phone: "Phone",
      phoneValue: "+1 (809) 555-1234",
      phoneNote: "Monday–Friday, 9 AM–5 PM EST",
      office: "Office",
      officeValue: "Santo Domingo, Dominican Republic",
      officeNote: "Regional operations across Caribbean",
      formTitle: "Send us a Message",
      formSubtitle: "We're here to help and discuss how we can work together",
      successTitle: "Thank you! Your message has been sent.",
      successText: "We'll get back to you as soon as possible.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      orgLabel: "Organization",
      typeLabel: "Inquiry Type",
      typeOptions: [
        "General Inquiry",
        "Partnership Interest",
        "Research Collaboration",
        "Investment Opportunity",
        "Other",
      ],
      messageLabel: "Message",
      submit: "Send Message",
      privacy: "We respect your privacy. We'll only use your information to respond to your inquiry.",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "How long does it take to see environmental impact?",
          a: "We begin seeing measurable ecosystem recovery within 3-6 months of sargassum reduction. Carbon sequestration impact is quantified immediately through biochar production data.",
        },
        {
          q: "Can municipalities use biochar for their own projects?",
          a: "Absolutely. Revenue sharing agreements include municipal rights to use biochar for coastal restoration, public lands improvement, and community projects.",
        },
        {
          q: "What happens if sargassum blooms decline?",
          a: "Our process can adapt to other sustainable biomass sources. We continuously research new feedstock opportunities aligned with circular economy principles.",
        },
      ],
    },
    es: {
      title: "Contáctanos",
      subtitle:
        "¿Preguntas sobre nuestra solución, oportunidades de asociación, o simplemente quieres conversar? Nos encantaría saber de ti.",
      email: "Correo Electrónico",
      emailMark: "Mark.Mathis@bluecarbonmaterials.com",
      emailLuke: "luke.mathis@bluecarbonmaterials.com",
      emailNote: "Respuesta en 24 horas",
      phone: "Teléfono",
      phoneValue: "+1 (809) 555-1234",
      phoneNote: "Lunes–Viernes, 9 AM–5 PM EST",
      office: "Oficina",
      officeValue: "Santo Domingo, República Dominicana",
      officeNote: "Operaciones regionales en el Caribe",
      formTitle: "Envíanos un Mensaje",
      formSubtitle: "Estamos aquí para ayudar y discutir cómo podemos trabajar juntos",
      successTitle: "¡Gracias! Tu mensaje ha sido enviado.",
      successText: "Te responderemos lo antes posible.",
      nameLabel: "Nombre Completo",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Número de Teléfono",
      orgLabel: "Organización",
      typeLabel: "Tipo de Consulta",
      typeOptions: [
        "Consulta General",
        "Interés en Asociación",
        "Colaboración de Investigación",
        "Oportunidad de Inversión",
        "Otro",
      ],
      messageLabel: "Mensaje",
      submit: "Enviar Mensaje",
      privacy: "Respetamos tu privacidad. Solo usaremos tu información para responder a tu consulta.",
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          q: "¿Cuánto tiempo toma ver el impacto ambiental?",
          a: "Comenzamos a ver una recuperación medible del ecosistema dentro de 3-6 meses de reducción de sargazo. El impacto del secuestro de carbono se cuantifica inmediatamente a través de datos de producción de biocarbón.",
        },
        {
          q: "¿Pueden los municipios usar biocarbón para sus propios proyectos?",
          a: "Absolutamente. Los acuerdos de participación en ingresos incluyen derechos municipales para usar biocarbón para restauración costera, mejora de tierras públicas y proyectos comunitarios.",
        },
        {
          q: "¿Qué pasa si las floraciones de sargazo disminuyen?",
          a: "Nuestro proceso puede adaptarse a otras fuentes de biomasa sostenible. Investigamos continuamente nuevas oportunidades de materia prima alineadas con los principios de economía circular.",
        },
      ],
    },
  }

  const c = content[language]

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", organization: "", type: "inquiry", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Contact Info - starts directly */}
        <section className="pt-16 pb-24 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{c.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{c.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-center">
                <div className="w-12 h-1 bg-[#0066CC] mx-auto mb-6 rounded-full" />
                <h3 className="text-lg font-semibold mb-3">{c.email}</h3>
                <a href={`mailto:${c.emailMark}`} className="block text-[#0066CC] hover:underline text-sm mb-1">
                  {c.emailMark}
                </a>
                <a href={`mailto:${c.emailLuke}`} className="block text-[#0066CC] hover:underline text-sm">
                  {c.emailLuke}
                </a>
                <p className="text-sm text-muted-foreground mt-2">{c.emailNote}</p>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-center">
                <div className="w-12 h-1 bg-[#2d8a6e] mx-auto mb-6 rounded-full" />
                <h3 className="text-lg font-semibold mb-3">{c.phone}</h3>
                <a href="tel:+18095551234" className="text-[#2d8a6e] hover:underline">
                  {c.phoneValue}
                </a>
                <p className="text-sm text-muted-foreground mt-2">{c.phoneNote}</p>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-center">
                <div className="w-12 h-1 bg-[#0066CC] mx-auto mb-6 rounded-full" />
                <h3 className="text-lg font-semibold mb-3">{c.office}</h3>
                <p className="text-[#0066CC]">{c.officeValue}</p>
                <p className="text-sm text-muted-foreground mt-2">{c.officeNote}</p>
              </div>
            </div>

            {/* Form */}
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-2">{c.formTitle}</h2>
                <p className="text-muted-foreground">{c.formSubtitle}</p>
              </div>

              {submitted && (
                <div
                  className="mb-6 p-4 rounded-xl bg-[#2d8a6e]/10 border border-[#2d8a6e] text-[#2d8a6e]"
                  role="alert"
                >
                  <p className="font-semibold">{c.successTitle}</p>
                  <p className="text-sm">{c.successText}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      {c.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-500" : "border-[#E5DFD3]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all`}
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      {c.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
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
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      {c.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold mb-2">
                      {c.orgLabel}
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-semibold mb-2">
                    {c.typeLabel}
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all"
                  >
                    <option value="inquiry">{c.typeOptions[0]}</option>
                    <option value="partnership">{c.typeOptions[1]}</option>
                    <option value="research">{c.typeOptions[2]}</option>
                    <option value="investment">{c.typeOptions[3]}</option>
                    <option value="other">{c.typeOptions[4]}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    {c.messageLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-500" : "border-[#E5DFD3]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all resize-vertical`}
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0066CC] hover:bg-[#004A99] text-white py-6 rounded-xl text-lg"
                >
                  {c.submit}
                </Button>

                <p className="text-xs text-muted-foreground text-center">{c.privacy}</p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{c.faqTitle}</h2>
            <div className="space-y-4">
              {c.faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-[#E5DFD3]">
                  <h3 className="font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
