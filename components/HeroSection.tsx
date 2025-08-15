"use client"
import { useLanguage } from "@/hooks/use-language"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <main className="relative px-4 sm:px-6 py-8 sm:py-16 pt-20 sm:pt-32 max-w-7xl mx-auto sm:mb-80 mb-16">
      <div className="text-center relative">
        {/* Hero Image */}
        <div className="relative mb-8 sm:mb-16 animate-scale-in">
          <img
            src="/hero.png"
            alt="PrintCase Express Hero"
            className="mx-auto w-[calc(100vw-2rem)] sm:w-full max-w-none sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl img-hover relative top-10 sm:top-20 md:top-32 lg:top-40 xl:top-48 h-auto"
          />
        </div>

        {/* Hero Content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-6 animate-slide-up animate-delay-200 -mt-10 top-[200px] sm:top-[400px] md:top-[500px] lg:top-[600px] xl:top-[620px]">
          <h1
            className="text-white text-center font-black 
            text-[32px] leading-[36px] tracking-[-0.64px]
            sm:text-[56px] sm:leading-[52px] sm:tracking-[-1.12px]
            md:text-[64px] md:leading-[60px] md:tracking-[-1.28px]
            lg:text-[80px] lg:leading-[76px] lg:tracking-[-1.6px]
            xl:text-[96px] xl:leading-[88px] xl:tracking-[-1.92px]
            uppercase mb-6 whitespace-pre-line font-sans"
          >
            {t("heroTitle")}
          </h1>

          <p
            className="text-white/80 text-center font-normal
            text-lg leading-6
            sm:text-xl sm:leading-7
            md:text-xl md:leading-7
            lg:text-2xl lg:leading-8
            xl:text-2xl xl:leading-8
            max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-10 font-sans"
          >
            {t("heroSubtitle")}
          </p>

          <div className="flex justify-center animate-fade-in animate-delay-400">
            <button className="btn-hover bg-white text-[#0b388a] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-full hover:bg-gray-200 transition-colors text-sm sm:text-base md:text-lg lg:text-xl font-black font-sans tracking-wide uppercase">
              {t("findDevice")}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
