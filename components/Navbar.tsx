"use client"
// FILE: components/Navbar.tsx

// Import useState and useEffect for managing the dropdown
import { useState, useEffect, useRef } from "react"
// Import hooks and components
import { useLanguage, Language } from "@/hooks/use-language" // Assuming Language type is exported from use-language
import Link from "next/link"

// ... (Your HamburgerIcon and CloseIcon components should be here) ...
const HamburgerIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> )
const CloseIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> )


// Main Navbar component
export default function Navbar() {
  // State for the main mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // State for the new language dropdown
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // This effect closes the dropdown if you click outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])

  // Array of available languages for the dropdown
  const availableLanguages: { code: Language; name: string }[] = [
    { code: "lv", name: "LV" },
    { code: "ru", name: "RU" },
    { code: "en", name: "EN" },
    { code: "et", name: "ET" },
    { code: "lt", name: "LT" },
  ]

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
        {/* --- MOBILE LAYOUT --- */}
        <div className="flex md:hidden items-center justify-between px-4">
            <Link href="/" className="flex items-center hover-scale">
              <img src="/Logo.svg" alt="PRINTCASE" className="w-32 h-8" />
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HamburgerIcon />
            </button>
        </div>

        {/* --- TABLET & DESKTOP LAYOUTS --- */}
        <div className="hidden md:flex items-center justify-between xl:gap-8 px-4 xl:px-8">
            <div className="flex items-center hover-scale xl:min-w-[120px]">
              <Link href="/">
                <img src="/Logo.svg" alt="PRINTCASE" className="w-32 h-8 xl:w-40 xl:h-10" />
              </Link>
            </div>
            <nav className="hidden xl:flex items-center gap-8 min-w-[480px]">
                <a href="#about" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("about")}</a>
                <a href="#how-it-works" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("howItWorks")}</a>
                <a href="#locations" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("locationsTitle")}</a>
                <a href="#contacts" className="text-white hover:text-sky-200 transition-colors text-sm whitespace-nowrap text-center">{t("contacts")}</a>
            </nav>
            <div className="flex items-center gap-6" ref={dropdownRef}>
                
                {/* --- NEW LANGUAGE DROPDOWN --- */}
                <div className="relative">
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex items-center justify-center text-sm transition-colors px-3 py-1 rounded bg-white text-blue-900 min-w-[50px]"
                  >
                    {language.toUpperCase()}
                    <svg className={`w-4 h-4 ml-1 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>

                  {isLangDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-10">
                      {availableLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code)
                            setIsLangDropdownOpen(false)
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-blue-900 hover:bg-sky-100"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
        <nav className="flex flex-col items-center justify-center h-full -mt-16 gap-8">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">{t("about")}</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">{t("howItWorks")}</a>
          <a href="#locations" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">{t("locationsTitle")}</a>
          <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">{t("contacts")}</a>
          <div className="flex items-center gap-4 pt-8">
            {availableLanguages.map((lang) => (
              <button key={lang.code} onClick={() => { setLanguage(lang.code); setIsMenuOpen(false); }} className={`text-xl transition-colors px-3 py-2 rounded-lg ${language === lang.code ? "bg-white text-blue-900" : "text-white"}`}>
                {lang.name}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}