"use client"

import React from "react"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Send } from "lucide-react"

export function NewsletterSection() {
  const { t, locale, dir } = useLanguage()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section dir={dir} className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {t.newsletter.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {t.newsletter.description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.newsletter.placeholder}
            required
            className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Send className="h-4 w-4" />
            {t.newsletter.button}
          </button>
        </form>

        {submitted && (
          <p className="text-primary mt-4 text-sm font-medium">
            {locale === "en"
              ? "Thank you for subscribing!"
              : "شكراً لاشتراكك!"}
          </p>
        )}
      </div>
    </section>
  )
}
