"use client"

import { useState, useCallback, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { testimonials } from "@/data/testimonials"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const { t, locale, dir } = useLanguage()
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  const testimonial = testimonials[current]
  const data = testimonial[locale]

  return (
    <section dir={dir} className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          {t.testimonials.title}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-14 rounded-full" />

        <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
          <Quote className="h-10 w-10 text-primary/20 mb-6" />

          <div className="min-h-[120px]">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              {data.text}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{data.name}</p>
                <p className="text-sm text-muted-foreground">{data.role}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonial.date}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
