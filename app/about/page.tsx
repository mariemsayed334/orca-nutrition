"use client"

import { SiteShell } from "@/components/site-shell"
import { useLanguage } from "@/context/language-context"
import { Target, Eye, Shield, FlaskConical, Users, Award } from "lucide-react"

function AboutContent() {
  const { t, locale, dir } = useLanguage()

  return (
    <div dir={dir} className={locale === "ar" ? "font-arabic" : "font-sans"}>
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(197_100%_47%/0.08)_0%,_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            {t.about.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            {t.about.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.about.story}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                {t.about.mission.title}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.mission.description}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                {t.about.vision.title}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.vision.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Orca */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 text-balance">
            {t.about.whyUs.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {t.about.whyUs.items.map((item, i) => {
              const icons = [Shield, FlaskConical, Users, Award]
              const Icon = icons[i % icons.length]
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-background border border-border rounded-lg p-6"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutContent />
    </SiteShell>
  )
}
