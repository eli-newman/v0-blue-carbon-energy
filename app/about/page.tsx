"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export default function About() {
  const { t, language } = useLanguage()

  const content = {
    en: {
      storyTitle: "Our Story",
      storyP1:
        "Founded in 2021, Blue Carbon Materials emerged from conversations between marine scientists, climate technologists, and coastal community leaders. We recognized an urgent opportunity: sargassum—a natural resource often seen as a burden—could become the foundation for sustainable energy and agricultural products.",
      storyP2:
        "Our research-backed approach combines decades of marine biology, thermochemical engineering, and environmental policy expertise. We partner with universities, municipalities, and NGOs to develop scalable, community-centered solutions.",
      storyP3:
        "Today, BlueCarbon operates across multiple Caribbean and Atlantic locations, directly supporting coastal economies while addressing one of the ocean's greatest challenges.",
      missionTitle: "Our Mission",
      missionText:
        "To create sustainable solutions that transform environmental challenges into economic opportunities for coastal communities, while generating clean energy and restoring ecosystems.",
      visionTitle: "Our Vision",
      visionText:
        "A world where coastal waste becomes a valued resource, driving renewable energy, regenerative agriculture, and thriving ecosystems—all while empowering local communities to lead their own transformation.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Science-Driven",
          description: "Every solution is grounded in peer-reviewed research and rigorous environmental data.",
        },
        {
          title: "Community-Centered",
          description: "We partner with and empower coastal communities to lead their own sustainability journey.",
        },
        {
          title: "Climate Committed",
          description:
            "Our work directly contributes to carbon sequestration, emission reduction, and ecosystem restoration.",
        },
        {
          title: "Transparent",
          description: "We openly share our impact metrics, challenges, and successes with all stakeholders.",
        },
        {
          title: "Scalable",
          description: "Every model we develop is designed to replicate across regions and adapt to local contexts.",
        },
        {
          title: "Innovative",
          description: "We continuously explore new technologies and partnerships to maximize impact and efficiency.",
        },
      ],
      teamTitle: "Our Team",
      teamSubtitle: "Experts dedicated to ocean and climate solutions",
    },
    es: {
      storyTitle: "Nuestra Historia",
      storyP1:
        "Fundada en 2021, Blue Carbon Materials surgió de conversaciones entre científicos marinos, tecnólogos climáticos y líderes comunitarios costeros. Reconocimos una oportunidad urgente: el sargazo—un recurso natural a menudo visto como una carga—podría convertirse en la base para energía sostenible y productos agrícolas.",
      storyP2:
        "Nuestro enfoque respaldado por investigación combina décadas de experiencia en biología marina, ingeniería termoquímica y política ambiental. Nos asociamos con universidades, municipios y ONGs para desarrollar soluciones escalables centradas en la comunidad.",
      storyP3:
        "Hoy, BlueCarbon opera en múltiples ubicaciones del Caribe y el Atlántico, apoyando directamente las economías costeras mientras aborda uno de los mayores desafíos del océano.",
      missionTitle: "Nuestra Misión",
      missionText:
        "Crear soluciones sostenibles que transformen los desafíos ambientales en oportunidades económicas para las comunidades costeras, mientras generamos energía limpia y restauramos ecosistemas.",
      visionTitle: "Nuestra Visión",
      visionText:
        "Un mundo donde los desechos costeros se conviertan en un recurso valioso, impulsando energía renovable, agricultura regenerativa y ecosistemas prósperos—todo mientras empoderamos a las comunidades locales para liderar su propia transformación.",
      valuesTitle: "Nuestros Valores",
      values: [
        {
          title: "Basado en Ciencia",
          description:
            "Cada solución está fundamentada en investigación revisada por pares y datos ambientales rigurosos.",
        },
        {
          title: "Centrado en la Comunidad",
          description:
            "Nos asociamos y empoderamos a las comunidades costeras para liderar su propio camino hacia la sostenibilidad.",
        },
        {
          title: "Comprometidos con el Clima",
          description:
            "Nuestro trabajo contribuye directamente al secuestro de carbono, reducción de emisiones y restauración de ecosistemas.",
        },
        {
          title: "Transparentes",
          description:
            "Compartimos abiertamente nuestras métricas de impacto, desafíos y éxitos con todas las partes interesadas.",
        },
        {
          title: "Escalables",
          description:
            "Cada modelo que desarrollamos está diseñado para replicarse en distintas regiones y adaptarse a contextos locales.",
        },
        {
          title: "Innovadores",
          description:
            "Exploramos continuamente nuevas tecnologías y asociaciones para maximizar el impacto y la eficiencia.",
        },
      ],
      teamTitle: "Nuestro Equipo",
      teamSubtitle: "Expertos dedicados a soluciones oceánicas y climáticas",
    },
  }

  const c = content[language]

  const team = [
    { name: "Mark Mathis", role: "CEO", image: "/mark_mathis.jpeg" },
    { name: "Luke Mathis", role: "Co-Founder", image: "/placeholder-user.jpg" },
    {
      name: 'John "Cade" Johnson',
      role: "Environmental Engineering Advisor",
      bio: "B.S. Chemical Engineering, Georgia Tech (1983); Certificate in Biochemistry. 40+ years in industrial environmental engineering — wastewater treatment, air emissions, hazardous waste, and contaminated site remediation. Former corporate VP managing a 40-person consulting office. Now focused on carbon dioxide removal, climate justice, and STEM education.",
      image: "/placeholder-user.jpg",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Our Story - starts directly */}
        <section className="pt-16 pb-24 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-[#F5F0E8]">
                <Image
                  src="/team-working-on-sustainable-ocean-research-laborat.jpg"
                  alt="BlueCarbon research and development team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">{c.storyTitle}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.storyP1}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.storyP2}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{c.storyP3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-2xl bg-white border border-[#E5DFD3]">
                <div className="w-12 h-1 bg-[#0066CC] mb-6 rounded-full" />
                <h2 className="text-2xl font-bold mb-4">{c.missionTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{c.missionText}</p>
              </div>
              <div className="p-10 rounded-2xl bg-white border border-[#E5DFD3]">
                <div className="w-12 h-1 bg-[#2d8a6e] mb-6 rounded-full" />
                <h2 className="text-2xl font-bold mb-4">{c.visionTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{c.visionText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">{c.valuesTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {c.values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] hover:border-[#0066CC]/30 transition-all duration-300"
                >
                  <div className={`w-10 h-1 ${index % 2 === 0 ? "bg-[#0066CC]" : "bg-[#2d8a6e]"} mb-4 rounded-full`} />
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.teamTitle}</h2>
              <p className="text-muted-foreground">{c.teamSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="mb-4 w-32 h-32 mx-auto rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#0066CC]/20 to-[#2d8a6e]/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  {"bio" in member && member.bio && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                  )}
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
