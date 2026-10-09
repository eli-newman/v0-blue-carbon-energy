"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { submitInquiry } from "@/lib/submit-inquiry"

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
  const [sending, setSending] = useState(false)
  const [sendFailed, setSendFailed] = useState(false)
  const [honeypot, setHoneypot] = useState("")
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
      phoneValue: "+1 (970) 389-2220",
      phoneNote: "Mark Mathis, Principal — Monday–Friday, 9 AM–5 PM EST",
      office: "Office",
      officeValue: "Fajardo–Humacao Corridor, Puerto Rico",
      officeNote: "Correspondence via email",
      formTitle: "Send us a Message",
      formSubtitle: "We're here to help and discuss how we can work together",
      successTitle: "Thank you! Your message has been sent.",
      successText: "We'll get back to you as soon as possible.",
      errorTitle: "Sorry, we couldn't send your message.",
      errorText: "Please try again, or email us directly at",
      sending: "Sending...",
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
      phoneValue: "+1 (970) 389-2220",
      phoneNote: "Mark Mathis, Principal — Lunes–Viernes, 9 AM–5 PM EST",
      office: "Oficina",
      officeValue: "Corredor Fajardo–Humacao, Puerto Rico",
      officeNote: "Correspondencia por correo electrónico",
      formTitle: "Envíanos un Mensaje",
      formSubtitle: "Estamos aquí para ayudar y discutir cómo podemos trabajar juntos",
      successTitle: "¡Gracias! Tu mensaje ha sido enviado.",
      successText: "Te responderemos lo antes posible.",
      errorTitle: "Lo sentimos, no pudimos enviar tu mensaje.",
      errorText: "Inténtalo de nuevo o escríbenos directamente a",
      sending: "Enviando...",
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
    if (sending) return
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSending(true)
    setSendFailed(false)
    const ok = await submitInquiry({ source: "contact", ...formData, website: honeypot })
    setSending(false)
    if (!ok) {
      setSendFailed(true)
      return
    }
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", organization: "", type: "inquiry", message: "" })
    setTimeout(() => setSubmitted(false), 8000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Contact Info - starts directly */}
        <section className="pt-28 pb-24 sm:pt-36 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-medium text-foreground mb-4">{c.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{c.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="p-6 sm:p-8 min-w-0 break-words rounded-sm bg-[#F7F3EA] border border-[#D8CFBB] text-center">
                <h3 className="text-lg font-medium mb-3">{c.email}</h3>
                <a href={`mailto:${c.emailMark}`} className="block text-[#0E4A5A] hover:underline text-sm mb-1">
                  {c.emailMark}
                </a>
                <a href={`mailto:${c.emailLuke}`} className="block text-[#0E4A5A] hover:underline text-sm">
                  {c.emailLuke}
                </a>
                <p className="text-sm text-muted-foreground mt-2">{c.emailNote}</p>
              </div>

              <div className="p-6 sm:p-8 min-w-0 break-words rounded-sm bg-[#F7F3EA] border border-[#D8CFBB] text-center">
                <h3 className="text-lg font-medium mb-3">{c.phone}</h3>
                <a href="tel:+19703892220" className="text-[#4A7A55] hover:underline">
                  {c.phoneValue}
                </a>
                <p className="text-sm text-muted-foreground mt-2">{c.phoneNote}</p>
              </div>

              <div className="p-6 sm:p-8 min-w-0 break-words rounded-sm bg-[#F7F3EA] border border-[#D8CFBB] text-center">
                <h3 className="text-lg font-medium mb-3">{c.office}</h3>
                <p className="text-[#0E4A5A]">{c.officeValue}</p>
                <p className="text-sm text-muted-foreground mt-2">{c.officeNote}</p>
              </div>
            </div>

            {/* Form */}
            <div className="max-w-2xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-medium mb-2">{c.formTitle}</h2>
                <p className="text-muted-foreground">{c.formSubtitle}</p>
              </div>

              {submitted && (
                <div
                  className="mb-6 p-4 rounded-sm bg-[#4A7A55]/10 border border-[#4A7A55] text-[#4A7A55]"
                  role="alert"
                >
                  <p className="font-semibold">{c.successTitle}</p>
                  <p className="text-sm">{c.successText}</p>
                </div>
              )}

              {sendFailed && (
                <div className="mb-6 p-4 rounded-sm bg-red-50 border border-red-300 text-red-800" role="alert">
                  <p className="font-semibold">{c.errorTitle}</p>
                  <p className="text-sm">
                    {c.errorText}{" "}
                    <a href={`mailto:${c.emailMark}`} className="underline font-medium">
                      {c.emailMark}
                    </a>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>
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
                      className={`w-full px-4 py-3 rounded-sm border ${errors.name ? "border-red-500" : "border-[#D8CFBB]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4A5A]/50 transition-all`}
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
                      className={`w-full px-4 py-3 rounded-sm border ${errors.email ? "border-red-500" : "border-[#D8CFBB]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4A5A]/50 transition-all`}
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
                      className="w-full px-4 py-3 rounded-sm border border-[#D8CFBB] bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4A5A]/50 transition-all"
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
                      className="w-full px-4 py-3 rounded-sm border border-[#D8CFBB] bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4A5A]/50 transition-all"
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
                    className="w-full px-4 py-3 rounded-sm border border-[#D8CFBB] bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4A5A]/50 transition-all"
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
                    className={`w-full px-4 py-3 rounded-sm border ${errors.message ? "border-red-500" : "border-[#D8CFBB]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4A5A]/50 transition-all resize-vertical`}
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#0E4A5A] hover:bg-[#0A3541] text-white py-6 rounded-sm text-lg disabled:opacity-70"
                >
                  {sending ? c.sending : c.submit}
                </Button>

                <p className="text-xs text-muted-foreground text-center">{c.privacy}</p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F3EA]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-12">{c.faqTitle}</h2>
            <div className="space-y-4">
              {c.faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-sm bg-white border border-[#D8CFBB]">
                  <h3 className="font-medium mb-3">{faq.q}</h3>
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
