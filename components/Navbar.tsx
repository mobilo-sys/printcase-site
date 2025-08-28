"use client"
// FILE: components/Navbar.tsx

// Import useState for managing the menu's open/close state
import { useState } from "react"
// Import the hook for language translations
import { useLanguage } from "@/hooks/use-language"
// Import the Link component for navigation
import Link from "next/link"

// SVG icon for the hamburger menu button
const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// SVG icon for the close (X) button
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Main Navbar component
export default function Navbar() {
  // State for menu visibility. 'false' means the menu is closed by default.
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <>
      <div
        className="fixed top-0 md:top-10 z-50 animate-fade-in
          w-full
          xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:w-auto xl:max-w-6xl xl:px-0
          2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:w-auto 2xl:max-w-6xl 2xl:px-0
          py-6 rounded-none md:rounded-full bg-[#0B388A]/80 backdrop-blur-xl border-b md:border border-white/10
          shadow-[0_3px_8px_0_rgba(6,44,114,0.70),0_2px_4px_0_rgba(255,255,255,0.10)_inset]"
      >
        {/* --- MOBILE LAYOUT (md:hidden) --- */}
        <div className="flex md:hidden items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center hover-scale">
            <img src="/Logo.svg" alt="PRINTCASE" className="w-32 h-8" />
          </Link>

          {/* Hamburger Menu Icon. It toggles the isMenuOpen state on click. */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HamburgerIcon />
          </button>
        </div>

        {/* --- TABLET & DESKTOP LAYOUTS (hidden md:flex) --- */}
        <div className="hidden md:flex items-center justify-between xl:gap-8 px-4 xl:px-8">
            <div className="flex items-center hover-scale xl:min-w-[120px]">
              <Link href="/">
                <img src="/Logo.svg" alt="PRINTCASE" className="w-32 h-8 xl:w-40 xl:h-10" />
              </Link>
            </div>
            <nav className="hidden xl:flex items-center gap-8 min-w-[480px]">
                <a href="#about" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("about")}</a>
                <a href="#how-it-works" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("howItWorks")}</a>
                <a href="#gallery" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("gallery")}</a>
                {/* 3. ADDED "KUR MŪS ATRAST?" link to the PC menu */}
                <a href="#locations" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("locationsTitle")}</a>
                <a href="#contacts" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("contacts")}</a>
            </nav>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <button onClick={() => setLanguage("lv")} className={`text-sm transition-colors px-2 py-1 rounded min-w-[28px] ${language === "lv" ? "bg-white text-blue-900" : "text-white hover:text-sky-200"}`}>LV</button>
                    <button onClick={() => setLanguage("ru")} className={`text-sm transition-colors px-2 py-1 rounded min-w-[28px] ${language === "ru" ? "bg-white text-blue-900" : "text-white hover:text-sky-200"}`}>RU</button>
                    <button onClick={() => setLanguage("en")} className={`text-sm transition-colors px-2 py-1 rounded min-w-[28px] ${language === "en" ? "bg-white text-blue-900" : "text-white hover:text-sky-200"}`}>EN</button>
                </div>
                <Link href="#locations" className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm font-bold whitespace-nowrap min-w-[140px]">
                    {t("findDevice")}
                </Link>
            </div>
        </div>
      </div>

      {/* --- MOBILE MENU PANEL --- */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#0B388A] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
             <img src="/Logo.svg" alt="PRINTCASE" className="w-32 h-8" />
          </Link>
          <button onClick={() => setIsMenuOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        {/* Navigation Links inside the panel */}
        <nav className="flex flex-col items-center justify-center h-full -mt-16 gap-8">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">{t("about")}</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">{t("howItWorks")}</a>
          {/* 1. REMOVED "DESIGN GALLERY" from mobile menu */}
          {/* <a href="#gallery" ... /> */}
          {/* 2. ADDED "KUR MŪS ATRAST?" to the mobile menu */}
          <a href="#locations" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">{t("locationsTitle")}</a>
          <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">{t("contacts")}</a>
          {/* 1. REMOVED "FIND DEVICE" from mobile menu */}
          {/* <Link href="#locations" ... /> */}

          {/* Language Switcher */}
          <div className="flex items-center gap-4 pt-8">
            <button onClick={() => { setLanguage("lv"); setIsMenuOpen(false); }} className={`text-xl transition-colors px-3 py-2 rounded-lg ${language === "lv" ? "bg-white text-blue-900" : "text-white"}`}>LV</button>
            <button onClick={() => { setLanguage("ru"); setIsMenuOpen(false); }} className={`text-xl transition-colors px-3 py-2 rounded-lg ${language === "ru" ? "bg-white text-blue-900" : "text-white"}`}>RU</button>
            <button onClick={() => { setLanguage("en"); setIsMenuOpen(false); }} className={`text-xl transition-colors px-3 py-2 rounded-lg ${language === "en" ? "bg-white text-blue-900" : "text-white"}`}>EN</button>
          </div>
        </nav>
      </div>
    </>
  )
}