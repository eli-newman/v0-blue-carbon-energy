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
        "Though Blue Carbon Materials is a new company, the idea behind it has been years in the making.",
      storyP2:
        "When our founder moved to Puerto Rico in 2022, he quickly fell in love with the island's natural beauty, vibrant culture, and rich coastal ecosystems. What he didn't love was the overwhelming presence of rotting sargassum, a growing environmental problem that fouled the beaches, disrupted marine ecosystems, and filled the air with an unpleasant odor while he fished along the island's eastern coast and throughout his neighborhood during the summer months.",
      storyP3:
        "Inspired by this increasingly urgent challenge, he leveraged his background in sustainable materials processing to found Blue Carbon Materials. Drawing on his experience developing environmentally focused processing technologies, he set out to transform an ecological nuisance into valuable, sustainable products that create both environmental and economic impact.",
      storyP4:
        "While addressing the sargassum crisis, Blue Carbon Materials is also committed to strengthening local communities by creating jobs, improving agricultural productivity, developing sustainable building materials, and helping restore these vital coastal ecosystems to their natural beauty.",
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
        "Aunque Blue Carbon Materials es una empresa nueva, la idea detrás de ella lleva años gestándose.",
      storyP2:
        "Cuando nuestro fundador se mudó a Puerto Rico en 2022, rápidamente se enamoró de la belleza natural de la isla, su cultura vibrante y sus ricos ecosistemas costeros. Lo que no le gustó fue la abrumadora presencia de sargazo en descomposición, un problema ambiental creciente que ensuciaba las playas, alteraba los ecosistemas marinos y llenaba el aire de un olor desagradable mientras pescaba a lo largo de la costa este de la isla y por su vecindario durante los meses de verano.",
      storyP3:
        "Inspirado por este desafío cada vez más urgente, aprovechó su experiencia en el procesamiento sostenible de materiales para fundar Blue Carbon Materials. Basándose en su experiencia desarrollando tecnologías de procesamiento con enfoque ambiental, se propuso transformar una molestia ecológica en productos valiosos y sostenibles que generan impacto tanto ambiental como económico.",
      storyP4:
        "Además de abordar la crisis del sargazo, Blue Carbon Materials también está comprometida con el fortalecimiento de las comunidades locales mediante la creación de empleos, la mejora de la productividad agrícola, el desarrollo de materiales de construcción sostenibles y la restauración de estos vitales ecosistemas costeros a su belleza natural.",
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
    {
      name: "Mark Mathis",
      role: "Founder & CEO",
      bio: "Mark Mathis is the Founder & CEO of Blue Carbon Materials, where he leads strategic vision, operational execution, and commercialization efforts. With a long history in entrepreneurship and industrial operations, Mark has designed, built, and operated multiple multi-million-dollar materials processing facilities throughout the Rocky Mountain region. His experience in manufacturing, systems development, and operations management led him to the sargassum issue impacting Puerto Rico and the broader Caribbean.",
      image: "/mark_mathis.jpeg",
    },
    {
      name: "Luke Mathis",
      role: "Founding Executive & Strategy Director",
      bio: "Luke Mathis is the Co-Founder of Blue Carbon Materials and a recent graduate of the Daniels College of Business at the University of Denver. Since BCM's early development stages, Luke has worked closely with leadership on financial planning, operational organization, and growth strategy. His primary focus includes supporting financing initiatives, scalable business development, and investor-facing materials, while also overseeing BCM's social media presence and public brand positioning.",
      image: "/luke_mathis.jpg",
    },
    {
      name: "Julianne Collazo",
      role: "Director of Communications",
      bio: "A board member of the largest airport development project in the Caribbean, Julianne Collazo is a multilingual entrepreneur and business leader fluent in English, Spanish, and Italian, with over two decades of experience turning connections into results across Latin America and the Caribbean. As founder and president of Commercial Banking Group and Midwest Holdings Investment for 19 years, Julianne built deep expertise in financial management, institutional negotiations, and strategic partnerships.",
      image: "/julianne_collazo.jpg",
    },
    {
      name: "Rosalind Humphreys Pérez",
      role: "Permit Compliance Lead",
      bio: "Rosalind Humphreys Pérez serves as Permit Compliance Lead, ensuring all permitting requirements are met and maintained across coastal environmental operations. She brings decades of experience in program management and operations, including startup environments where she built and managed systems from the ground up. She oversees adherence to permit conditions throughout project execution, proactively identifying risk and ensuring operations remain within regulatory limits.",
      image: "/rosalind_humphreys.jpg",
    },
    {
      name: 'John "Cade" Johnson',
      role: "Chemist",
      bio: 'John "Cade" Johnson holds a Bachelor of Chemical Engineering from Georgia Tech (1983) with a certificate in biochemistry. He worked in the field of environmental engineering consulting until retirement — which was official some years ago, but seems to be a difficult profession to quit. During his years of gainful employment, he focused on industrial environmental issues — wastewater treatment, air emission controls and permitting, hazardous and toxic waste management, and contaminated site remediation. He managed projects with expenditures in the millions of dollars and directed engineering teams of dozens. He served as a corporate vice president and managed a consulting office of 40 employees. In recent years, he has shifted focus to climate change mitigation efforts. His interests are in carbon dioxide removal, climate justice, and sustainability improvements. He has gained extensive experience training youth in STEM (Science, Technology, Engineering and Mathematics).',
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
                  alt="Blue Carbon Materials research and development team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">{c.storyTitle}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.storyP1}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.storyP2}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.storyP3}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{c.storyP4}</p>
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
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div key={member.name} className="flex gap-6 p-6 rounded-2xl bg-white border border-[#E5DFD3]">
                  <div className="flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#0066CC]/20 to-[#2d8a6e]/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-[#0066CC] font-medium mb-2">{member.role}</p>
                    {"bio" in member && member.bio && (
                      <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                    )}
                  </div>
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
