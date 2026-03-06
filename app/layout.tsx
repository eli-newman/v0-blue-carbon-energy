import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import ClientLayout from "./client-layout"

import { Inter, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "BlueCarbon Energy - Sargassum to Energy Solution",
    template: "%s | BlueCarbon Energy",
  },
  description:
    "Sustainable energy from sargassum seaweed. Transform coastal waste into clean power, biochar, and growth products.",
  keywords: ["sargassum", "renewable energy", "biochar", "climate tech", "sustainable agriculture"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0066CC" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
