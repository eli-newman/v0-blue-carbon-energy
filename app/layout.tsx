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
    default: "Blue Carbon Materials - Turning Ocean Waste Into High-Performance Building Materials",
    template: "%s | Blue Carbon Materials",
  },
  description:
    "Blue Carbon Materials converts sargassum seaweed and recycled plastics into composite building materials, agricultural inputs, and clean energy through carbon-negative manufacturing.",
  keywords: [
    "composite building materials",
    "sargassum",
    "recycled plastic composites",
    "sustainable construction",
    "carbon negative manufacturing",
    "biochar",
    "biostimulant",
    "Caribbean construction materials",
    "marine durable composites",
    "renewable energy",
    "climate tech",
  ],
  metadataBase: new URL("https://bluecarbon.org"),
  openGraph: {
    title: "Blue Carbon Materials - Turning Ocean Waste Into High-Performance Building Materials",
    description:
      "Converting sargassum and recycled plastics into composites, agricultural inputs, and energy through carbon-negative manufacturing.",
    url: "https://bluecarbon.org",
    siteName: "Blue Carbon Materials",
    type: "website",
  },
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
