import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const metadata: Metadata = {
  title: "PrintCase Express - Персонализированные чехлы за 3 минуты",
  description:
    "Создайте уникальный чехол для телефона с собственным дизайном за 3 минуты. Доступно в популярных торговых центрах Риги.",
  keywords: "чехлы для телефона, персонализированные чехлы, печать на чехлах, Рига, PrintCase Express",
  authors: [{ name: "PrintCase Express" }],
  creator: "PrintCase Express",
  publisher: "PrintCase Express",
  robots: "index, follow",
  openGraph: {
    title: "PrintCase Express - Персонализированные чехлы за 3 минуты",
    description: "Создайте уникальный чехол для телефона с собственным дизайном за 3 минуты",
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["lv_LV", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintCase Express - Персонализированные чехлы за 3 минуты",
    description: "Создайте уникальный чехол для телефона с собственным дизайном за 3 минуты",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <meta name="theme-color" content="#0B388A" />
        <meta name="msapplication-TileColor" content="#0B388A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
