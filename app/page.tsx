"use client"
// FILE: app/page.tsx

// Import necessary hooks and components
import { useLanguage } from "@/hooks/use-language";
import Marquee from "react-fast-marquee";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NewsletterForm from "@/components/NewsletterForm";

// Import all icons from their dedicated file
import { 
  PhoneIcon, 
  UploadIcon, 
  PaymentIcon, 
  CheckIcon, 
  LocationIcon, 
  EmailIcon, 
  PhoneContactIcon 
} from "@/components/icons";

// Import the gallery data from its dedicated file
import { caseImages } from "@/lib/gallery-data";


// This is the main component for your homepage
export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-white relative grid-pattern bg-[#0B388A]">
      <Navbar />
      <HeroSection />
      <AboutSection />

      {/* --- How It Works Section --- */}
      <section
        className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto animate-fade-in"
        id="how-it-works"
      >
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-white text-center font-black uppercase tracking-[-0.64px] text-[32px] leading-[32px] sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px] xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px] mb-4 sm:mb-6 font-sans">
            {t("howItWorksTitle")}
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl">{t("howItWorksSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale"><PhoneIcon /></div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 whitespace-pre-line">{t("step1Title")}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{t("step1Description")}</p>
          </div>
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-100 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale"><UploadIcon /></div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 whitespace-pre-line">{t("step2Title")}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{t("step2Description")}</p>
          </div>
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-200 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale"><PaymentIcon /></div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 whitespace-pre-line">{t("step3Title")}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{t("step3Description")}</p>
          </div>
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-300 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale"><CheckIcon /></div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 whitespace-pre-line">{t("step4Title")}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{t("step4Description")}</p>
          </div>
        </div>
      </section>

      {/* --- Locations Section --- */}
      <section className="relative py-12 sm:py-16 md:py-24 max-w-7xl mx-auto animate-fade-in" id="locations">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-white text-center font-black uppercase tracking-[-0.64px] text-[32px] leading-[32px] sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px] xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px] mb-4 sm:mb-6 font-sans">{t("locationsTitle")}</h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl">{t("locationsSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"><div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 hover-scale"><LocationIcon /></div><h3 className="text-white font-bold text-xl sm:text-2xl mb-2">ORIGO</h3><p className="text-white/70 text-sm mb-3 sm:mb-4">Stacijas laukums 2, Rīga</p><button onClick={() => window.open("https://maps.google.com/?q=Origo+Riga", "_blank")} className="text-white text-sm font-semibold flex items-center hover:text-[#aae0f5] transition-colors btn-hover">{t("getDirections")}<svg width="14" height="14" className="sm:w-4 sm:h-4 ml-2" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div>
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-100 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"><div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 hover-scale"><LocationIcon /></div><h3 className="text-white font-bold text-xl sm:text-2xl mb-2">GALERIJA CENTRS</h3><p className="text-white/70 text-sm mb-3 sm:mb-4">Audēju iela 16, Rīga</p><button onClick={() => window.open("https://maps.google.com/?q=Galerija+Centrs+Riga", "_blank")} className="text-white text-sm font-semibold flex items-center hover:text-[#aae0f5] transition-colors btn-hover">{t("getDirections")}<svg width="14" height="14" className="sm:w-4 sm:h-4 ml-2" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div>
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-200 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"><div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 hover-scale"><LocationIcon /></div><h3 className="text-white font-bold text-xl sm:text-2xl mb-2">DOMINA SHOPPING</h3><p className="text-white/70 text-sm mb-3 sm:mb-4">Ieriķu iela 3, Rīga</p><button onClick={() => window.open("https://maps.google.com/?q=Domina+Shopping+Riga", "_blank")} className="text-white text-sm font-semibold flex items-center hover:text-[#aae0f5] transition-colors btn-hover">{t("getDirections")}<svg width="14" height="14" className="sm:w-4 sm:h-4 ml-2" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div>
          <div className="card-hover flex flex-col items-center text-center p-6 sm:p-8 animate-scale-in animate-delay-300 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"><div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 hover-scale"><LocationIcon /></div><h3 className="text-white font-bold text-xl sm:text-2xl mb-2">DITTON</h3><p className="text-white/70 text-sm mb-3 sm:mb-4">Cietokšņa iela 60, Daugavpils</p><button onClick={() => window.open("https://maps.google.com/?cid=9063482418870463111", "_blank")} className="text-white text-sm font-semibold flex items-center hover:text-[#aae0f5] transition-colors btn-hover">{t("getDirections")}<svg width="14" height="14" className="sm:w-4 sm:h-4 ml-2" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div>
        </div>
        <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden animate-fade-in animate-delay-400"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.5!2d24.1!3d56.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C%20Latvia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" width="100%" height="100%" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="PrintCase Express Locations in Riga"></iframe></div>
      </section>

      {/* --- Gallery Section --- */}
      <section className="relative sm:py-32 md:py-24 w-full overflow-hidden animate-fade-in" id="gallery">
        <div className="absolute inset-0 w-full h-full z-0" style={{ backgroundImage: "url(/Vector.svg)", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center 100%" }} />
        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6 animate-slide-up"><h2 className="text-white text-center font-black uppercase tracking-[-0.64px] text-[32px] leading-[32px] sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px] xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px] mb-4 sm:mb-6 font-sans">{t("galleryTitle")}</h2><p className="text-white/80 text-center font-normal text-base sm:text-lg md:text-xl leading-relaxed">{t("gallerySubtitle")}</p></div>
          <div className="w-full marquee-container">
            <Marquee speed={50} pauseOnHover={false} gradient={false} direction="left" className="overflow-hidden marquee-content">
              {caseImages.map((image, index) => (
                <div key={index} className="flex-none mx-3 sm:mx-6">
                  <div className="flex items-center justify-center">
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-auto object-contain img-hover transition-transform duration-300 cursor-pointer min-w-0" />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="relative py-12 sm:py-16 md:py-24 w-full animate-fade-in bg-[#E781AF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up"><h2 className="text-white text-center font-black uppercase tracking-[-0.64px] text-[32px] leading-[32px] sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px] xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px] mb-4 sm:mb-6 font-sans">{t("faqTitle")}</h2></div>
          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            <AccordionItem value="item-1" className="border-none"><div className="card-hover animate-scale-in p-4 px-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"><AccordionTrigger className="faq-question hover:no-underline text-left text-base sm:text-lg [&>svg]:text-white">{t("faq1Question")}</AccordionTrigger><AccordionContent className="text-white/90 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4">{t("faq1Answer")}</AccordionContent></div></AccordionItem>
            <AccordionItem value="item-2" className="border-none"><div className="card-hover animate-scale-in animate-delay-100 p-4 px-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"><AccordionTrigger className="faq-question hover:no-underline text-left text-base sm:text-lg [&>svg]:text-white">{t("faq2Question")}</AccordionTrigger><AccordionContent className="text-white/90 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4">{t("faq2Answer")}</AccordionContent></div></AccordionItem>
            <AccordionItem value="item-3" className="border-none"><div className="card-hover animate-scale-in animate-delay-200 p-4 px-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"><AccordionTrigger className="faq-question hover:no-underline text-left text-base sm:text-lg [&>svg]:text-white">{t("faq3Question")}</AccordionTrigger><AccordionContent className="text-white/90 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4">{t("faq3Answer")}</AccordionContent></div></AccordionItem>
            <AccordionItem value="item-4" className="border-none"><div className="card-hover animate-scale-in animate-delay-300 p-4 px-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"><AccordionTrigger className="faq-question hover:no-underline text-left text-base sm:text-lg [&>svg]:text-white">{t("faq4Question")}</AccordionTrigger><AccordionContent className="text-white/90 text-sm sm:text-base leading-relaxed pt-3 sm:pt-4">{t("faq4Answer")}</AccordionContent></div></AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* --- Newsletter Section --- */}
      <NewsletterForm />

      {/* --- Contacts Section --- */}
      <section className="relative py-12 sm:py-16 md:py-24 w-full animate-fade-in grid-pattern bg-[#0B388A] rounded-b-[80px]" id="contacts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up"><h2 className="text-white text-center font-black uppercase tracking-[-0.64px] text-[32px] leading-[32px] sm:text-[36px] sm:leading-[36px] sm:tracking-[-0.72px] md:text-[40px] md:leading-[40px] md:tracking-[-0.8px] lg:text-[44px] lg:leading-[44px] lg:tracking-[-0.88px] xl:text-[48px] xl:leading-[48px] xl:tracking-[-0.96px] mb-4 sm:mb-6 font-sans">{t("contactTitle")}</h2></div>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="card-hover flex-1 flex flex-col items-center text-center p-8 sm:p-12 animate-scale-in rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"><div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 hover-scale"><EmailIcon /></div><h3 className="text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6">{t("email")}</h3><a href="mailto:info@printcase.lv" className="text-white/80 text-lg sm:text-xl hover:text-white transition-colors btn-hover">info@printcase.lv</a></div>
            <div className="card-hover flex-1 flex flex-col items-center text-center p-8 sm:p-12 animate-scale-in animate-delay-200 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"><div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 hover-scale"><PhoneContactIcon /></div><h3 className="text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6">{t("phone")}</h3><a href="tel:+37129022999" className="text-white/80 text-lg sm:text-xl hover:text-white transition-colors btn-hover">+371 29022999</a></div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black py-8 sm:py-12 md:py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="order-1 md:order-none hover-scale"><img src="/Logo-white.png" alt="PrintCase Express" className="h-8 sm:h-10" /></div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-2 md:order-none"><span className="text-white/70 text-sm">{t("followUs")}</span><div className="flex items-center space-x-4"><a href="#" className="text-white/70 hover:text-white transition-colors hover-scale"><svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg></a><a href="#" className="text-white/70 hover:text-white transition-colors hover-scale"><svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.059-1.69-.073-4.85-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a><a href="#" className="text-white/70 hover:text-white transition-colors hover-scale"><svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a></div></div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-xs sm:text-sm">{t("copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

