"use client"

import type { ReactNode } from "react"
import { LanguageProvider, useLanguage } from "@/context/language-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

function ShellInner({ children }: { children: ReactNode }) {
  const { dir, locale } = useLanguage()

  return (
    <div dir={dir} className={locale === "ar" ? "font-arabic" : "font-sans"}>
      <Navbar />
      <main className="min-h-screen pt-[73px]">{children}</main>
      <Footer />
    </div>
  )
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ShellInner>{children}</ShellInner>
    </LanguageProvider>
  )
}
