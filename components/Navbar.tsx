"use client"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link" // <-- 1. ДОБАВЛЕНО ЗДЕСЬ

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      className="fixed top-10 z-50 animate-fade-in
        w-full
        xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:w-auto xl:max-w-6xl xl:px-0
        2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:w-auto 2xl:max-w-6xl 2xl:px-0
        py-6 rounded-full bg-[#0B388A]/80 backdrop-blur-xl border border-white/10
        shadow-[0_3px_8px_0_rgba(6,44,114,0.70),0_2px_4px_0_rgba(255,255,255,0.10)_inset]"
    >
      {/* Mobile Layout (sm only) */}
      <div className="flex md:hidden items-center justify-between px-4">{/* ... без изменений ... */}</div>

      {/* Tablet Layout (md, lg) */}
      <div className="hidden md:flex xl:hidden items-center justify-between px-4">
        <div className="flex items-center hover-scale">
          <img src="/Logo.svg" alt="PRINTCASE" className="w-32 h-8" />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">{/* ... языки без изменений ... */}</div>

          {/* 👇 2. ИЗМЕНЕНО ЗДЕСЬ */}
          <Link
            href="#locations"
            className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm font-bold whitespace-nowrap min-w-[140px]"
          >
            {t("findDevice")}
          </Link>
        </div>
      </div>

      {/* Desktop Layout (xl+) */}
      <div className="hidden xl:flex items-center justify-between gap-8 px-8">
        <div className="flex items-center hover-scale min-w-[120px]">
          <img src="/Logo.svg" alt="PRINTCASE" className="w-40 h-10" />
        </div>

        <nav className="flex items-center gap-8 min-w-[480px]">{/* ... навигация без изменений ... */}</nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">{/* ... языки без изменений ... */}</div>

          {/* 👇 3. ИЗМЕНЕНО ЗДЕСЬ */}
          <Link
            href="#locations"
            className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm font-bold whitespace-nowrap min-w-[140px]"
          >
            {t("findDevice")}
          </Link>
        </div>
      </div>
    </div>
  )
}