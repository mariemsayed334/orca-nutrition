"use client"

import Link from "next/link"
import Image from "next/image"
import { SiteShell } from "@/components/site-shell"
import { useLanguage } from "@/context/language-context"
import { products } from "@/data/products"
import { ArrowRight, ArrowLeft } from "lucide-react"

function ProductsGrid() {
  const { t, locale, dir } = useLanguage()
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight

  return (
    <div dir={dir}>
      {/* Page Header */}
      <section className="py-16 md:py-24 text-center">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
          {t.products.subtitle}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t.products.allProducts}
        </h1>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Grid */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const data = product[locale]
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group block rounded-xl bg-card border border-border hover:border-primary/40 transition-all overflow-hidden"
                >
                  <div className="aspect-square relative bg-secondary overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={data.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {data.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {data.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-3">
                      {t.products.readMore}
                      <Arrow className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <SiteShell>
      <ProductsGrid />
    </SiteShell>
  )
}
