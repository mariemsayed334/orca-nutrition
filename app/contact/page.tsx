"use client"

import React, { useState } from "react"
import { SiteShell } from "@/components/site-shell"
import { useLanguage } from "@/context/language-context"
import { Phone, MapPin, Building2, Send } from "lucide-react"

function ContactContent() {
  const { t, locale, dir } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div dir={dir} className={locale === "ar" ? "font-arabic" : "font-sans"}>
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(197_100%_47%/0.08)_0%,_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            {t.contact.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  className="bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors self-start"
              >
                <Send className="h-4 w-4" />
                {t.contact.form.submit}
              </button>

              {submitted && (
                <p className="text-sm text-primary font-medium">
                  {locale === "en"
                    ? "Thank you! Your message has been sent."
                    : "شكراً لك! تم إرسال رسالتك."}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8 flex flex-col gap-8">
              <h2 className="text-lg font-bold text-foreground">
                {t.contact.info.title}
              </h2>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.contact.info.phoneLabel}
                  </p>
                  <p className="text-sm text-muted-foreground" dir="ltr">
                    {t.contact.info.phone}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.contact.info.addressLabel}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.info.address}
                  </p>
                </div>
              </div>

              {/* Official distributor */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Official distributor in Iraq
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fitness City
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactContent />
    </SiteShell>
  )
}
