"use client"

import { useLanguage } from "@/context/language-context"
import {
  Zap,
  Shield,
  Flame,
  Dumbbell,
  Battery,
  Heart,
} from "lucide-react"

const icons = [Zap, Shield, Flame, Dumbbell, Battery, Heart]

export function BenefitsSection() {
  const { t, locale, dir } = useLanguage()

  return (
    <section dir={dir} className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          {t.benefits.title}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-14 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.benefits.items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/40 transition-all"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
