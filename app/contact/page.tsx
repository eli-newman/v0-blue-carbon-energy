"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function Contact() {
  const { language } = useLanguage()
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
      phoneNote: "Mark Mathis, Principal - Monday–Friday, 9 AM–5 PM EST",
      office: "Office",
      officeValue: "Fajardo–Humacao Corridor, Puerto Rico",
      officeNote: "Correspondence via email",
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
      phoneNote: "Mark Mathis, Principal - Lunes–Viernes, 9 AM–5 PM EST",
      office: "Oficina",
      officeValue: "Corredor Fajardo–Humacao, Puerto Rico",
      officeNote: "Correspondencia por correo electrónico",
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

  const linkCls =
    "group inline-flex max-w-full items-baseline gap-3 font-[family-name:var(--font-display)] text-xl min-[420px]:text-2xl lg:text-4xl text-[#0E4A5A] [overflow-wrap:anywhere] hover:text-[#4A7A55] transition-colors"

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-[#0A3541]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full border border-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 top-10 h-[20rem] w-[20rem] rounded-full border border-white/10"
          />
          <div className="relative max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.02] mb-10 sm:mb-14">{c.title}</h1>
            <div className="grid md:grid-cols-12">
              <p className="md:col-start-5 md:col-span-8 font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-white/90 leading-snug text-pretty border-t border-white/30 pt-8">
                {c.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Ways to reach us */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F3EA]">
          <div className="max-w-7xl mx-auto border-t border-foreground/80">
            <div className="grid md:grid-cols-12 gap-3 md:gap-10 py-10 border-b border-[#D8CFBB]">
              <h2 className="md:col-span-4 text-sm uppercase tracking-[0.2em] text-[#4A7A55] font-[family-name:var(--font-sans)] font-normal pt-3">
                {c.email}
              </h2>
              <div className="md:col-span-8 min-w-0 space-y-3">
                {[c.emailMark, c.emailLuke].map((addr) => (
                  <div key={addr}>
                    <a href={`mailto:${addr}`} className={linkCls}>
                      {addr}
                      <span aria-hidden className="text-xl transition-transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                  </div>
                ))}
                <p className="text-muted-foreground pt-2">{c.emailNote}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-3 md:gap-10 py-10 border-b border-[#D8CFBB]">
              <h2 className="md:col-span-4 text-sm uppercase tracking-[0.2em] text-[#4A7A55] font-[family-name:var(--font-sans)] font-normal pt-3">
                {c.phone}
              </h2>
              <div className="md:col-span-8 min-w-0 space-y-3">
                <a href="tel:+19703892220" className={linkCls}>
                  {c.phoneValue}
                  <span aria-hidden className="text-xl transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
                <p className="text-muted-foreground">{c.phoneNote}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-3 md:gap-10 py-10 border-b border-[#D8CFBB]">
              <h2 className="md:col-span-4 text-sm uppercase tracking-[0.2em] text-[#4A7A55] font-[family-name:var(--font-sans)] font-normal pt-1">
                {c.office}
              </h2>
              <div className="md:col-span-8 min-w-0 space-y-3">
                <p className="font-[family-name:var(--font-display)] text-2xl lg:text-4xl text-foreground">
                  {c.officeValue}
                </p>
                <p className="text-muted-foreground">{c.officeNote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 text-4xl sm:text-5xl leading-[1.1]">{c.faqTitle}</h2>
            <div className="md:col-span-8 border-t border-foreground/80">
              {c.faqs.map((faq, index) => (
                <details key={index} className="group border-b border-[#D8CFBB]" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-xl sm:text-2xl">{faq.q}</h3>
                    <span
                      aria-hidden
                      className="mt-1 shrink-0 text-2xl leading-none text-[#4A7A55] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-muted-foreground leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
