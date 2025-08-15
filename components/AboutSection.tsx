"use client"
import { useLanguage } from "@/hooks/use-language"

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section
      className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto mt-32 sm:mt-64 md:mt-80 lg:mt-96 xl:mt-[400px] animate-fade-in"
      id="about"
    >

<div className="flex flex-col lg:flex-row items-center lg:items-start gap-0">
  <div className="flex justify-center flex-1 animate-slide-up">
    <div>
      <img
        src="/vending-left-reflection-3.png"
        alt="PrintCase Express Vending Machine"
        className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] h-auto object-cover rounded-2xl"
      />
    </div>
  </div>

  <div className="flex-1 text-center lg:text-left animate-slide-up animate-delay-200 pt-[92px] -mt-[160px] lg:mt-0">
    <h2
      className="text-white font-black uppercase tracking-[-0.64px]
      text-[32px] leading-[32px]
      sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px]
      md:text-[40px] md:leading-[40px] md:tracking-[-0.8px]
      lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px]
      xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px]
      mb-4 sm:mb-6 font-sans"
    >
      {t("aboutTitle")}
    </h2>
    <h3 className="text-[#aae0f5] font-semibold text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
      {t("aboutSubtitle")}
    </h3>
    <p className="text-white/90 text-base sm:text-lg leading-relaxed">
      {t("aboutDescription")}
    </p>
  </div>
</div>
    </section>
  )
}
