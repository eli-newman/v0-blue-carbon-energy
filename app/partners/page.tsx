"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"

const partnerLogos = [
  { src: "/logos/reclaim-nature.png", alt: "Reclaim Nature" },
  { src: "/logos/usace.png", alt: "U.S. Army Corps of Engineers" },
  { src: "/logos/ddec-pr.png", alt: "Puerto Rico DDEC" },
]

export default function Partners() {
  const { language } = useLanguage()
  const content = {
    en: {
      modelTitle: "Our Partners",
      modelP1:
        "Blue Carbon Materials works with government agencies, operational partners, and research institutions to develop and scale sustainable sargassum solutions in Puerto Rico and the broader Caribbean.",
      modelP2:
        "Our partnerships are built on shared commitment to environmental restoration, regulatory compliance, and community benefit. We are actively expanding our partner network as operations scale.",
      howTitle: "How We Partner",
      partnerTypes: [
        {
          title: "Government & Regulatory",
          description:
            "We work with federal and territorial agencies to secure permits, ensure environmental compliance, and align operations with public policy goals.",
          focus: ["Permitting", "Environmental compliance", "Policy alignment"],
        },
        {
          title: "Operational Partners",
          description:
            "Confirmed operational partners collaborate on sargassum collection, processing logistics, and facility development across coastal sites.",
          focus: ["Collection operations", "Processing", "Facility development"],
        },
        {
          title: "Research & Academic",
          description:
            "Universities conducting field trials help validate biochar applications in agriculture and environmental restoration.",
          focus: ["Field trials", "Product validation", "Environmental monitoring"],
        },
      ],
      activeTitle: "Confirmed Partners & Engagements",
      activeSubtitle: "Current partnerships and active regulatory engagements",
      operationalPartners: {
        title: "Operational & Government",
        list: [
          { name: "Reclaim Nature, Inc.", focus: "Confirmed operational partner per signed USACE Letter of Intent" },
          { name: "USACE Caribbean District", focus: "Active regulatory engagement — Letter of Intent signed" },
          { name: "Puerto Rico DDEC", focus: "Potential collaboration on economic development and permitting" },
        ],
      },
      researchPartners: {
        title: "Research & Field Trials",
        list: [
          { name: "University partners conducting biochar field trials", focus: "Agricultural applications, yield improvement studies" },
        ],
      },
      becomePartnerTitle: "Become a Partner",
      becomePartnerText: "We are actively seeking partnerships with coastal municipalities, research institutions, agricultural cooperatives, and environmental organizations across the Caribbean. If your organization shares our commitment to sustainable sargassum solutions, we'd like to hear from you.",
      buildTitle: "Build With Us",
      buildSubtitle: "Interested in using our materials or working with us on a project? Tell us what you're building.",
      ctaTitle: "Interested in Partnering?",
      ctaText:
        "We're actively seeking partners—municipalities, research institutions, and agricultural networks—ready to scale sustainable sargassum solutions.",
      ctaButton: "Explore Partnership Opportunities",
    },
    es: {
      modelTitle: "Nuestros Socios",
      modelP1:
        "Blue Carbon Materials trabaja con agencias gubernamentales, socios operativos e instituciones de investigación para desarrollar y escalar soluciones sostenibles de sargazo en Puerto Rico y el Caribe en general.",
      modelP2:
        "Nuestras asociaciones se basan en un compromiso compartido con la restauración ambiental, el cumplimiento regulatorio y el beneficio comunitario. Estamos expandiendo activamente nuestra red de socios a medida que crecen las operaciones.",
      howTitle: "Cómo Nos Asociamos",
      partnerTypes: [
        {
          title: "Gobierno y Regulación",
          description:
            "Trabajamos con agencias federales y territoriales para asegurar permisos, garantizar el cumplimiento ambiental y alinear operaciones con objetivos de políticas públicas.",
          focus: ["Permisos", "Cumplimiento ambiental", "Alineación de políticas"],
        },
        {
          title: "Socios Operativos",
          description:
            "Socios operativos confirmados colaboran en la recolección de sargazo, logística de procesamiento y desarrollo de instalaciones en sitios costeros.",
          focus: ["Operaciones de recolección", "Procesamiento", "Desarrollo de instalaciones"],
        },
        {
          title: "Investigación y Academia",
          description:
            "Universidades realizando ensayos de campo ayudan a validar aplicaciones de biocarbón en agricultura y restauración ambiental.",
          focus: ["Ensayos de campo", "Validación de productos", "Monitoreo ambiental"],
        },
      ],
      activeTitle: "Socios y Compromisos Confirmados",
      activeSubtitle: "Asociaciones actuales y compromisos regulatorios activos",
      operationalPartners: {
        title: "Operativos y Gobierno",
        list: [
          { name: "Reclaim Nature, Inc.", focus: "Socio operativo confirmado según Carta de Intención firmada con USACE" },
          { name: "USACE Distrito del Caribe", focus: "Compromiso regulatorio activo — Carta de Intención firmada" },
          { name: "DDEC Puerto Rico", focus: "Colaboración potencial en desarrollo económico y permisos" },
        ],
      },
      researchPartners: {
        title: "Investigación y Ensayos de Campo",
        list: [
          { name: "Socios universitarios realizando ensayos de biocarbón", focus: "Aplicaciones agrícolas, estudios de mejora de rendimiento" },
        ],
      },
      becomePartnerTitle: "Conviértete en Socio",
      becomePartnerText: "Estamos buscando activamente asociaciones con municipios costeros, instituciones de investigación, cooperativas agrícolas y organizaciones ambientales en todo el Caribe. Si tu organización comparte nuestro compromiso con soluciones sostenibles de sargazo, nos gustaría saber de ti.",
      buildTitle: "Construye Con Nosotros",
      buildSubtitle: "¿Interesado en usar nuestros materiales o trabajar con nosotros en un proyecto? Cuéntanos qué estás construyendo.",
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
        <section className="pt-28 pb-24 sm:pt-36 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-medium text-foreground mb-8">{c.modelTitle}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.modelP1}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{c.modelP2}</p>
              </div>
              <div className="relative h-96 rounded-sm overflow-hidden bg-[#EDE5D3]">
                <Image
                  src="/partners-hero.jpg"
                  alt="Project partners reviewing plans on a Caribbean beach while an excavator clears sargassum"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How We Partner */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F3EA]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-medium mb-14">{c.howTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {c.partnerTypes.map((type, index) => (
                <div
                  key={type.title}
                  className="p-8 rounded-sm bg-white border border-[#D8CFBB] transition-all duration-300"
                >
                  <h3 className="text-xl font-medium mb-4">{type.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.focus.map((area) => (
                      <span
                        key={area}
                        className={`text-xs px-3 py-1 ${index === 1 ? "bg-[#4A7A55]/10 text-[#4A7A55]" : "bg-[#0E4A5A]/10 text-[#0E4A5A]"} rounded-sm`}
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
            <div className="mb-14 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-medium mb-4">{c.activeTitle}</h2>
              <p className="text-muted-foreground">{c.activeSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-[#0E4A5A] rounded-full" />
                  <h3 className="text-xl font-medium text-[#0E4A5A]">{c.operationalPartners.title}</h3>
                </div>
                <div className="space-y-4">
                  {c.operationalPartners.list.map((partner, i) => (
                    <div
                      key={partner.name}
                      className="flex items-center gap-5 p-5 rounded-sm bg-[#F7F3EA] border border-[#D8CFBB]"
                    >
                      <div className="relative shrink-0 w-28 h-24 sm:w-40 sm:h-28 bg-white border border-[#D8CFBB] rounded-sm">
                        <Image
                          src={partnerLogos[i].src}
                          alt={`${partnerLogos[i].alt} logo`}
                          fill
                          sizes="160px"
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold mb-1">{partner.name}</h4>
                        <p className="text-sm text-muted-foreground">{partner.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-[#4A7A55] rounded-full" />
                  <h3 className="text-xl font-medium text-[#4A7A55]">{c.researchPartners.title}</h3>
                </div>
                <div className="space-y-4">
                  {c.researchPartners.list.map((partner) => (
                    <div key={partner.name} className="p-5 rounded-sm bg-[#F7F3EA] border border-[#D8CFBB]">
                      <h4 className="font-semibold mb-1">{partner.name}</h4>
                      <p className="text-sm text-muted-foreground">{partner.focus}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-sm bg-[#4A7A55]/10 border border-[#4A7A55]/30">
                  <h4 className="font-semibold text-[#4A7A55] mb-2">{c.becomePartnerTitle}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.becomePartnerText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build With Us */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F3EA]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-medium mb-4">{c.buildTitle}</h2>
              <p className="text-muted-foreground text-lg">{c.buildSubtitle}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:Mark.Mathis@bluecarbonmaterials.com?subject=${encodeURIComponent(language === "en" ? "Project inquiry" : "Consulta de proyecto")}`}
                className="px-7 py-4 text-center bg-[#0E4A5A] text-white font-medium rounded-sm hover:bg-[#0A3541] transition-colors break-all sm:break-normal"
              >
                Mark.Mathis@bluecarbonmaterials.com
              </a>
              <a
                href="tel:+19703892220"
                className="px-7 py-4 text-center border border-[#0E4A5A] text-[#0E4A5A] font-medium rounded-sm hover:bg-[#0E4A5A] hover:text-white transition-colors"
              >
                +1 (970) 389-2220
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#4A7A55]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-white mb-6">{c.ctaTitle}</h2>
            <p className="text-lg text-white/90 mb-10">{c.ctaText}</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#4A7A55] font-semibold rounded-sm hover:bg-[#EDE5D3] transition-colors"
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
