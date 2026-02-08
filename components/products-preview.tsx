"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { products } from "@/data/products"
import { ArrowRight, ArrowLeft } from "lucide-react"

export function ProductsPreview() {
  const { t, locale, dir } = useLanguage()
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight
  const displayProducts = products.slice(0, 4)

  return (
    <section dir={dir} className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase text-center mb-2">
          {t.products.subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          {t.products.title}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-14 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => {
            const data = product[locale]
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block rounded-xl bg-background border border-border hover:border-primary/40 transition-all overflow-hidden"
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

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            {t.products.allProducts}
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
