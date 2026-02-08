"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { useLanguage } from "@/context/language-context"
import { products } from "@/data/products"
import { ArrowLeft, ArrowRight, ShoppingCart, Check } from "lucide-react"

function ProductDetail({ slug }: { slug: string }) {
  const { t, locale, dir } = useLanguage()
  const [activeTab, setActiveTab] = useState<"description" | "benefits">(
    "description"
  )

  const product = products.find((p) => p.slug === slug)
  const BackArrow = locale === "ar" ? ArrowRight : ArrowLeft

  if (!product) {
    return (
      <div dir={dir} className="py-32 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          {locale === "en" ? "Product not found" : "المنتج غير موجود"}
        </h1>
        <Link href="/products" className="text-primary hover:underline">
          {locale === "en" ? "Back to Products" : "العودة إلى المنتجات"}
        </Link>
      </div>
    )
  }

  const data = product[locale]

  const tabs = [
    { key: "description" as const, label: t.products.description },
    { key: "benefits" as const, label: t.products.benefitsTab },
  ]

  return (
    <div dir={dir}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <BackArrow className="h-4 w-4" />
          {t.products.allProducts}
        </Link>
      </div>

      {/* Product Hero */}
      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image */}
            <div className="aspect-square relative rounded-2xl bg-card border border-border overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={data.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {data.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {data.shortDescription}
              </p>

              <button className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all w-full md:w-auto">
                <ShoppingCart className="h-5 w-5" />
                {t.products.buyNow}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto gap-1 border-b border-border mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8 min-h-[200px]">
            {activeTab === "description" && (
              <p className="text-foreground leading-relaxed">
                {data.description}
              </p>
            )}
            {activeTab === "benefits" && (
              <ul className="flex flex-col gap-3">
                {data.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
            {/* ingredients and usage removed from product data; tabs simplified */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)

  return (
    <SiteShell>
      <ProductDetail slug={slug} />
    </SiteShell>
  )
}
