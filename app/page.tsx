"use client"
import { useLanguage } from "@/hooks/use-language"
import Marquee from "react-fast-marquee"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#0B388A" strokeWidth="2" fill="none" />
    <line x1="12" y1="18" x2="12.01" y2="18" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const UploadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      stroke="#0B388A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline points="7,10 12,15 17,10" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="15" x2="12" y2="3" stroke="#0B388A" strokeWidth="2" />
  </svg>
)

const PaymentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="#0B388A" strokeWidth="2" fill="none" />
    <line x1="1" y1="10" x2="23" y2="10" stroke="#0B388A" strokeWidth="2" />
  </svg>
)

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="20,6 9,17 4,12" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      stroke="#0B388A"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#0B388A" strokeWidth="2" fill="none" />
    <circle cx="12" cy="10" r="3" stroke="#0B388A" strokeWidth="2" fill="none" />
  </svg>
)

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="#0B388A"
      strokeWidth="2"
      fill="none"
    />
    <polyline points="22,6 12,13 2,6" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PhoneContactIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      stroke="#0B388A"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

export default function HomePage() {
  const { language, setLanguage, t } = useLanguage()

  const caseImages = [
    { src: "/clear-case-5.png", alt: "Clear case with building design" },
    { src: "/Phone_Case_4.png", alt: "Phone case with sunset car design" },
    { src: "/clear-case-4.png", alt: "Clear case with couple photo" },
    { src: "/clear-case-3.png", alt: "Clear case with bird illustration" },
    { src: "/Phone_Case_3.png", alt: "Phone case with mother and child" },
    { src: "/Phone_Case_2.png", alt: "Phone case with orange cat" },
    { src: "/clear-case.png", alt: "Clear case with sunset silhouette" },
    { src: "/Phone_Case_1.png", alt: "Phone case with vintage birds" },
    { src: "/clear-case-2.png", alt: "Clear case with dog in sunglasses" },
    { src: "/Phone_Case_5.png", alt: "Phone case with cat design" },
  ]

  return (
    <div className="min-h-screen text-white relative grid-pattern bg-[#0B388A]">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <section
        className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto animate-fade-in"
        id="how-it-works"
      >
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2
            className="text-white text-center font-black uppercase tracking-[-0.64px]
            text-[32px] leading-[32px]
            sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px]
            md:text-[40px] md:leading-[40px] md:tracking-[-0.8px]
            lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px]
            xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px]
            mb-4 sm:mb-6 font-sans"
          >
            {t("howItWorksTitle")}
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl">{t("howItWorksSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Step 1 - Choose Model */}
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale">
              <PhoneIcon />
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 whitespace-pre-line">
              {t("step1Title")}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{t("step1Description")}</p>
          </div>

          {/* Step 2 - Upload Photo */}
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-100 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale">
              <UploadIcon />
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 whitespace-pre-line">
              {t("step2Title")}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{t("step2Description")}</p>
          </div>

          {/* Step 3 - Payment */}
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-200 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale">
              <PaymentIcon />
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 whitespace-pre-line">
              {t("step3Title")}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{t("step3Description")}</p>
          </div>

          {/* Step 4 - Get Case */}
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-300 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale">
              <CheckIcon />
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 whitespace-pre-line">
              {t("step4Title")}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{t("step4Description")}</p>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-24 max-w-7xl mx-auto animate-fade-in" id="locations">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2
            className="text-white text-center font-black uppercase tracking-[-0.64px]
            text-[32px] leading-[32px]
            sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px]
            md:text-[40px] md:leading-[40px] md:tracking-[-0.8px]
            lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px]
            xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px]
            mb-4 sm:mb-6 font-sans"
          >
            {t("locationsTitle")}
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl">{t("locationsSubtitle")}</p>
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Origo */}
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 hover-scale">
              <LocationIcon />
            </div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">ORIGO</h3>
            <p className="text-white/70 text-sm mb-3 sm:mb-4">Привокзальная площадь 2, Рига</p>
            <button
              onClick={() => window.open("https://maps.google.com/?q=Origo+Riga", "_blank")}
              className="text-white text-sm font-semibold flex items-center hover:text-[#aae0f5] transition-colors btn-hover"
            >
              {t("getDirections")}
              <svg width="14" height="14" className="sm:w-4 sm:h-4 ml-2" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Galerija Centrs */}
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-100 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 hover-scale">
              <LocationIcon />
            </div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">GALERIJA CENTRS</h3>
            <p className="text-white/70 text-sm mb-3 sm:mb-4">ул. Аудею 16, Рига</p>
            <button
              onClick={() => window.open("https://maps.google.com/?q=Galerija+Centrs+Riga", "_blank")}
              className="text-white text-sm font-semibold flex items-center hover:text-[#aae0f5] transition-colors btn-hover"
            >
              {t("getDirections")}
              <svg width="14" height="14" className="sm:w-4 sm:h-4 ml-2" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Domina Shopping */}
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-200 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 hover-scale">
              <LocationIcon />
            </div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">DOMINA SHOPPING</h3>
            <p className="text-white/70 text-sm mb-3 sm:mb-4">Иерикю 3, Рига</p>
            <button
              onClick={() => window.open("https://maps.google.com/?q=Domina+Shopping+Riga", "_blank")}
              className="text-white text-sm font-semibold flex items-center hover:text-[#aae0f5] transition-colors btn-hover"
            >
              {t("getDirections")}
              <svg width="14" height="14" className="sm:w-4 sm:h-4 ml-2" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

         {/* Ditton */}
<div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-300 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 hover-scale">
    <LocationIcon />
  </div>
  <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">DITTON</h3>
  <p className="text-white/70 text-sm mb-3 sm:mb-4">улица Циетокшня 60, Даугавпилс</p>
  <button
    onClick={() => window.open("https://maps.app.goo.gl/K9pU7X4npxN4f5yV8", "_blank")}
    className="text-white text-sm font-semibold flex items-center hover:text-[#aae0f5] transition-colors btn-hover"
  >
    {t("getDirections")}
    <svg width="14" height="14" className="sm:w-4 sm:h-4 ml-2" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</div>
        </div>

        {/* Google Maps Integration */}
        <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden animate-fade-in animate-delay-400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.5!2d24.1!3d56.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C%20Latvia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PrintCase Express Locations in Riga"
          />
        </div>
      </section>

      <section className="relative sm:py-32 md:py-24 w-full overflow-hidden animate-fade-in" id="gallery">
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url(/Vector.svg)",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 100%",
          }}
        />

        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6 animate-slide-up">
            <h2
              className="text-white text-center font-black uppercase tracking-[-0.64px]
              text-[32px] leading-[32px]
              sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px]
              md:text-[40px] md:leading-[40px] md:tracking-[-0.8px]
              lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px]
              xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px]
              mb-4 sm:mb-6 font-sans"
            >
              {t("galleryTitle")}
            </h2>
            <p className="text-white/80 text-center font-normal text-base sm:text-lg md:text-xl leading-relaxed">
              {t("gallerySubtitle")}
            </p>
          </div>

          <div className="w-full marquee-container">
            <Marquee
              speed={50}
              pauseOnHover={false}
              gradient={false}
              direction="left"
              className="overflow-hidden marquee-content"
              onMouseEnter={(e) => {
                const marquee = e.currentTarget.querySelector('[data-testid="marquee"]') as HTMLElement
                if (marquee) {
                  marquee.style.animationDuration = "120s" // Slower animation
                }
              }}
              onMouseLeave={(e) => {
                const marquee = e.currentTarget.querySelector('[data-testid="marquee"]') as HTMLElement
                if (marquee) {
                  marquee.style.animationDuration = "48s" // Normal animation speed
                }
              }}
            >
              {caseImages.map((image, index) => (
                <div key={index} className="flex-none mx-3 sm:mx-6">
                  <div className="flex items-center justify-center">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-auto object-contain img-hover transition-transform duration-300 cursor-pointer min-w-0"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-24 w-full animate-fade-in bg-[#E781AF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2
              className="text-white text-center font-black uppercase tracking-[-0.64px]
              text-[32px] leading-[32px]
              sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px]
              md:text-[40px] md:leading-[40px] md:tracking-[-0.8px]
              lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px]
              xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px]
              mb-4 sm:mb-6 font-sans"
            >
              {t("faqTitle")}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            <AccordionItem value="item-1" className="border-none">
              <div className="card-hover animate-scale-in p-4 px-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <AccordionTrigger className="faq-question hover:no-underline text-left text-base sm:text-lg [&>svg]:text-white">
                  {t("faq1Question")}
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4">
                  {t("faq1Answer")}
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-none">
              <div className="card-hover animate-scale-in animate-delay-100 p-4 px-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <AccordionTrigger className="faq-question hover:no-underline text-left text-base sm:text-lg [&>svg]:text-white">
                  {t("faq2Question")}
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4">
                  {t("faq2Answer")}
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-none">
              <div className="card-hover animate-scale-in animate-delay-200 p-4 px-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <AccordionTrigger className="faq-question hover:no-underline text-left text-base sm:text-lg [&>svg]:text-white">
                  {t("faq3Question")}
                </AccordionTrigger>
                <AccordionContent className="text-white/90 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4">
                  {t("faq3Answer")}
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-24 w-full animate-fade-in grid-pattern bg-[#0B388A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center items-center relative">
          <div className="relative z-10 w-full max-w-4xl card-hover animate-scale-in p-8 px-6 rounded-3xl bg-gradient-to-br from-[#0B388A] to-[#1e4a8c] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="w-full text-center mb-8 sm:mb-12">
              <h2
                className="text-white text-center font-black uppercase tracking-[-0.64px]
                text-[32px] leading-[32px]
                sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px]
                md:text-[40px] md:leading-[40px] md:tracking-[-0.8px]
                lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px]
                xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px]
                mb-4 sm:mb-6 font-sans"
              >
                {t("newsletterTitle")}
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">{t("newsletterSubtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/20 border-none outline-none text-white text-base sm:text-lg hover-scale transition-all font-sans placeholder:text-white/70"
              />
              <button className="btn-hover px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-[#0B388A] font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors whitespace-nowrap font-sans">
                {t("subscribe")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-12 sm:py-16 md:py-24 w-full animate-fade-in grid-pattern bg-[#0B388A] rounded-b-[80px]"
        id="contacts"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2
              className="text-white text-center font-black uppercase tracking-[-0.64px]
              text-[32px] leading-[32px]
              sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px]
              md:text-[40px] md:leading-[40px] md:tracking-[-0.8px]
              lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px]
              xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px]
              mb-4 sm:mb-6 font-sans"
            >
              {t("contactTitle")}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <div className="card-hover flex-1 flex flex-col items-center text-center p-8 sm:p-12 animate-scale-in rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 hover-scale">
                <EmailIcon />
              </div>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6">{t("email")}</h3>
              <a
                href="mailto:info@printcase.lv"
                className="text-white/80 text-lg sm:text-xl hover:text-white transition-colors btn-hover"
              >
                info@printcase.lv
              </a>
            </div>

            {/* Phone Card */}
            <div className="card-hover flex-1 flex flex-col items-center text-center p-8 sm:p-12 animate-scale-in animate-delay-200 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 hover-scale">
                <PhoneContactIcon />
              </div>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6">{t("phone")}</h3>
              <a
                href="tel:+37129022999"
                className="text-white/80 text-lg sm:text-xl hover:text-white transition-colors btn-hover"
              >
                +371 29022999
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 sm:py-12 md:py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            {/* Logo */}
            <div className="order-1 md:order-none hover-scale">
              <img src="/Logo-white.png" alt="PrintCase Express" className="h-8 sm:h-10" />
            </div>

            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-2 md:order-none">
              <span className="text-white/70 text-sm">{t("followUs")}</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors hover-scale">
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors hover-scale">
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.059-1.69-.073-4.85-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors hover-scale">
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-xs sm:text-sm">{t("copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
