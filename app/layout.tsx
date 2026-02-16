import React from "react"
import type { Metadata } from "next"
import { Playwrite_NZ, Cairo } from "next/font/google"

import "./globals.css"

const _playwrite = Playwrite_NZ({
  variable: "--font-playwrite",
  weight: "400", // اختياري: ممكن تغيّري الوزن 100-400 حسب الخط
})


const _cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Orca Nutrition - Premium Sports Supplements",
  icons: {
    icon: "/public/images/fav.png",
  },
  description:
    "Discover cutting-edge sports nutrition products. Premium protein, mass gainers, and supplements from British manufacturers.",
    
}

export const viewport = {
  themeColor: "#0d0d0d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
  className={`${_playwrite.variable} ${_cairo.variable} font-sans antialiased bg-background text-foreground`}
>
  {children}
</body>

    </html>
  )
}
