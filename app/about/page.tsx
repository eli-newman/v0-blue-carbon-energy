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
        {/* Hero: title + opening line */}
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
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.02] mb-10 sm:mb-14">{c.storyTitle}</h1>
            <div className="grid md:grid-cols-12">
              <p className="md:col-start-5 md:col-span-8 font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-white/90 leading-snug text-pretty border-t border-white/30 pt-8">
                {c.storyP1}
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F3EA]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
            <div className="md:col-start-5 md:col-span-7 space-y-7">
              <p className="text-xl text-foreground/85 leading-[1.75] first-letter:font-[family-name:var(--font-display)] first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-[#0E4A5A]">
                {c.storyP2}
              </p>
              <p className="text-xl text-foreground/85 leading-[1.75]">{c.storyP3}</p>
              <p className="text-xl text-foreground/85 leading-[1.75]">{c.storyP4}</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0E4A5A]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 md:gap-0">
            <div className="md:pr-16">
              <h2 className="text-sm uppercase tracking-[0.2em] text-[#9FD0AE] mb-6 font-[family-name:var(--font-sans)] font-normal">{c.missionTitle}</h2>
              <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-white leading-snug text-pretty">{c.missionText}</p>
            </div>
            <div className="md:pl-16 md:border-l border-white/25">
              <h2 className="text-sm uppercase tracking-[0.2em] text-[#9FD0AE] mb-6 font-[family-name:var(--font-sans)] font-normal">{c.visionTitle}</h2>
              <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-white leading-snug text-pretty">{c.visionText}</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 text-4xl sm:text-5xl leading-[1.1]">{c.valuesTitle}</h2>
            <div className="md:col-span-8 border-t border-foreground/80">
              {c.values.map((value, index) => (
                <div
                  key={value.title}
                  className="group grid sm:grid-cols-[3rem_1fr_1.4fr] gap-x-6 gap-y-2 py-6 border-b border-[#D8CFBB] transition-colors hover:bg-[#F7F3EA]"
                >
                  <span className="font-[family-name:var(--font-display)] text-sm tracking-widest text-[#4A7A55] pt-1.5">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F3EA]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-medium mb-4">{c.teamTitle}</h2>
              <p className="text-muted-foreground">{c.teamSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div key={member.name} className="flex gap-6 p-6 rounded-sm bg-white border border-[#D8CFBB]">
                  <div className="flex-shrink-0 w-28 h-28 rounded-sm overflow-hidden relative bg-gradient-to-br from-[#0E4A5A]/20 to-[#4A7A55]/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-sm text-[#0E4A5A] font-medium mb-2">{member.role}</p>
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
