"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t, locale, dir } = useLanguage()

  return (
    <footer
      dir={dir}
      className={`bg-card border-t border-border ${locale === "ar" ? "font-arabic" : "font-sans"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">ORCA</span>
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                Nutrition
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {locale === "en"
                ? "Premium sports nutrition supplements from British manufacturers. Fuel your performance."
                : "مكملات التغذية الرياضية الممتازة من الشركات المصنعة البريطانية. زوّد أداءك بالطاقة."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.products}
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              {t.footer.followUs}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter / X
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
