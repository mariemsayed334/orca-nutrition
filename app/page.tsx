"use client"

import { SiteShell } from "@/components/site-shell"
import { Hero } from "@/components/hero"
import { BenefitsSection } from "@/components/benefits-section"
import { ValuesSection } from "@/components/values-section"
import { ProductsPreview } from "@/components/products-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <BenefitsSection />
      <ValuesSection />
      <ProductsPreview />
      <TestimonialsSection />
      <NewsletterSection />
    </SiteShell>
  )
}
