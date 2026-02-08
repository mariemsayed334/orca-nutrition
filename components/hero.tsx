"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { ArrowRight, ArrowLeft } from "lucide-react"

export function Hero() {
  const { t, locale, dir } = useLanguage()
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight

  return (
    <section dir={dir} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(197_100%_47%/0.08)_0%,_transparent_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-44 flex flex-col items-center text-center">
        <p className="text-primary font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
          {t.hero.subtitle}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-6">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
          {t.hero.description}
        </p>
        <Link
          href="/products"
          className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all"
        >
          {t.hero.cta}
          <Arrow className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Decorative badge */}
        <div className="mt-16 flex items-center gap-6 text-muted-foreground text-sm">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">100%</span>
            <span>{locale === "en" ? "British Made" : "صنع بريطاني"}</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">14+</span>
            <span>{locale === "en" ? "Products" : "منتج"}</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">10K+</span>
            <span>{locale === "en" ? "Athletes" : "رياضي"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
