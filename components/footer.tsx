"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#EDE5D3] py-16 sm:py-20">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-medium text-[#0E4A5A] mb-4">Blue Carbon Materials</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">{t("footer.navigation")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/materials" className="text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors">
                  {t("nav.materials")}
                </Link>
              </li>
              <li>
                <Link href="/agriculture" className="text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors">
                  {t("nav.agriculture")}
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors">
                  {t("nav.technology")}
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors">
                  {t("nav.impact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">{t("footer.connect")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors">
                  {t("nav.partners")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Mark.Mathis@bluecarbonmaterials.com"
                  className="break-words text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors"
                >
                  Mark.Mathis@bluecarbonmaterials.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19703892220"
                  className="text-sm text-muted-foreground hover:text-[#0E4A5A] transition-colors"
                >
                  +1 (970) 389-2220
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#D8CFBB] text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Blue Carbon Materials. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
