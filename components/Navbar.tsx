"use client"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

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
      <div className="flex md:hidden items-center justify-between px-4">
        <div className="flex items-center hover-scale">
          <img src="/Logo.svg" alt="PRINTCASE" className="w-24 h-6" />
        </div>

        <div className="flex items-center gap-2">
          {/* ... языки ... */}
        </div>
      </div>

      {/* Tablet Layout (md, lg) */}
      <div className="hidden md:flex xl:hidden items-center justify-between px-4">
        <div className="flex items-center hover-scale">
          <img src="/Logo.svg" alt="PRINTCASE" className="w-32 h-8" />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">{/* ... языки ... */}</div>

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

        {/* 👇 ЭТОТ БЛОК БЫЛ ПРОПУЩЕН - ТЕПЕРЬ ОН НА МЕСТЕ */}
        <nav className="flex items-center gap-8 min-w-[480px]">
          <a
            href="#about"
            className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap min-w-[80px] text-center"
          >
            {t("about")}
          </a>
          <a
            href="#how-it-works"
            className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap min-w-[140px] text-center"
          >
            {t("howItWorks")}
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap min-w-[120px] text-center"
          >
            {t("gallery")}
          </a>
          <a
            href="#contacts"
            className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap min-w-[80px] text-center"
          >
            {t("contacts")}
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("lv")}
              className={`text-sm transition-colors px-2 py-1 rounded min-w-[28px] ${
                language === "lv" ? "bg-white text-blue-900" : "text-white hover:text-sky-200"
              }`}
            >
              LV
            </button>
            <button
              onClick={() => setLanguage("ru")}
              className={`text-sm transition-colors px-2 py-1 rounded min-w-[28px] ${
                language === "ru" ? "bg-white text-blue-900" : "text-white hover:text-sky-200"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-sm transition-colors px-2 py-1 rounded min-w-[28px] ${
                language === "en" ? "bg-white text-blue-900" : "text-white hover:text-sky-200"
              }`}
            >
              EN
            </button>
          </div>

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