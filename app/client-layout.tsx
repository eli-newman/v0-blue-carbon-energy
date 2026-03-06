"use client"

import type React from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="font-sans antialiased min-h-screen">{children}</div>
}
