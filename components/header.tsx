"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      // Consider scrolled if we've scrolled more than 100px
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const isHomePage = pathname === "/"
  const isTransparent = isHomePage && !isScrolled

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isTransparent
        ? "bg-transparent"
        : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-[#E5DFD3]"
    }`}>
      <nav className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo - White when transparent, colored when solid */}
        <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity" onClick={handleNavClick}>
          <span className={`text-xl font-bold transition-colors ${isTransparent ? "text-white" : "text-[#0066CC]"}`}>Blue</span>
          <span className={`text-xl font-bold transition-colors ${isTransparent ? "text-white" : "text-[#2d8a6e]"}`}>Carbon</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-[#0066CC]"
            }`}
            onClick={handleNavClick}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-[#0066CC]"
            }`}
            onClick={handleNavClick}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/solution"
            className={`text-sm font-medium transition-colors ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-[#0066CC]"
            }`}
            onClick={handleNavClick}
          >
            {t("nav.solution")}
          </Link>
          <Link
            href="/impact"
            className={`text-sm font-medium transition-colors ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-[#0066CC]"
            }`}
            onClick={handleNavClick}
          >
            {t("nav.impact")}
          </Link>
          <Link
            href="/partners"
            className={`text-sm font-medium transition-colors ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-[#0066CC]"
            }`}
            onClick={handleNavClick}
          >
            {t("nav.partners")}
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-[#0066CC]"
            }`}
            onClick={handleNavClick}
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Language Toggle & CTA */}
        <div className="flex items-center gap-4">
          <div className={`flex items-center rounded-lg overflow-hidden transition-all ${
            isTransparent
              ? "border border-white/30 bg-white/10 backdrop-blur-sm"
              : "border border-[#E5DFD3]"
          }`}>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                language === "en"
                  ? isTransparent
                    ? "bg-white text-[#0066CC]"
                    : "bg-[#0066CC] text-white"
                  : isTransparent
                    ? "bg-transparent text-white hover:bg-white/20"
                    : "bg-transparent text-muted-foreground hover:bg-[#FAF8F5]"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                language === "es"
                  ? isTransparent
                    ? "bg-white text-[#0066CC]"
                    : "bg-[#0066CC] text-white"
                  : isTransparent
                    ? "bg-transparent text-white hover:bg-white/20"
                    : "bg-transparent text-muted-foreground hover:bg-[#FAF8F5]"
              }`}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
          </div>
          <Button asChild className={`hidden sm:inline-flex transition-all ${
            isTransparent
              ? "bg-white text-[#0066CC] hover:bg-[#0066CC] hover:text-white"
              : "bg-[#0066CC] hover:bg-[#0052A3] text-white"
          }`}>
            <Link href="/contact" onClick={handleNavClick}>
              {t("nav.cta")}
            </Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 py-4 transition-colors ${
          isTransparent
            ? "bg-black/90 backdrop-blur-lg border-t border-white/20"
            : "bg-white border-t border-[#E5DFD3]"
        }`}>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium py-2 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
              onClick={handleNavClick}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium py-2 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
              onClick={handleNavClick}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/solution"
              className={`text-sm font-medium py-2 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
              onClick={handleNavClick}
            >
              {t("nav.solution")}
            </Link>
            <Link
              href="/impact"
              className={`text-sm font-medium py-2 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
              onClick={handleNavClick}
            >
              {t("nav.impact")}
            </Link>
            <Link
              href="/partners"
              className={`text-sm font-medium py-2 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
              onClick={handleNavClick}
            >
              {t("nav.partners")}
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium py-2 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
              onClick={handleNavClick}
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
