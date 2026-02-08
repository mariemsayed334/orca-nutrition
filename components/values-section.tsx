"use client"

import { useLanguage } from "@/context/language-context"
import { Eye, TrendingUp, Lightbulb, Award } from "lucide-react"

const icons = [Eye, TrendingUp, Lightbulb, Award]

export function ValuesSection() {
  const { t, locale, dir } = useLanguage()

  return (
    <section dir={dir} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          {t.values.title}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-14 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.values.items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
