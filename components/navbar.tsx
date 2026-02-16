"use client"

import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Globe, Menu, X } from "lucide-react"
import Image from "next/image";


export function Navbar() {
  const { t, locale, toggleLocale, dir } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border ${locale === "ar" ? "font-arabic" : "font-sans"}`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
  <img src="/logo.jpg" width="20" />

</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/products"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            {t.nav.products}
          </Link>
          <Link
            href="/about"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            {t.nav.contact}
          </Link>
          <button
            onClick={toggleLocale}
            className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Globe className="h-4 w-4" />
            {t.nav.langSwitch}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          dir={dir}
          className={`md:hidden bg-background border-t border-border px-6 pb-6 ${locale === "ar" ? "font-arabic" : "font-sans"}`}
        >
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.products}
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.contact}
            </Link>
            <button
              onClick={() => {
                toggleLocale()
                setMobileOpen(false)
              }}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              {t.nav.langSwitch}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
