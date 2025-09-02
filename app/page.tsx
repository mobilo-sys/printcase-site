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
          <h2 className="text-white text-center font-black uppercase ...">{t("locationsTitle")}</h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl">{t("locationsSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="card-hover flex flex-col ..."><div className="..."><LocationIcon /></div><h3 className="...">ORIGO</h3><p>Stacijas laukums 2, Rīga</p><button onClick={() => window.open("...url...")} className="...">{t("getDirections")}<svg>...</svg></button></div>
          <div className="card-hover flex flex-col ..."><div className="..."><LocationIcon /></div><h3 className="...">GALERIJA CENTRS</h3><p>Audēju iela 16, Rīga</p><button onClick={() => window.open("...url...")} className="...">{t("getDirections")}<svg>...</svg></button></div>
          <div className="card-hover flex flex-col ..."><div className="..."><LocationIcon /></div><h3 className="...">DOMINA SHOPPING</h3><p>Ieriķu iela 3, Rīga</p><button onClick={() => window.open("...url...")} className="...">{t("getDirections")}<svg>...</svg></button></div>
          <div className="card-hover flex flex-col ..."><div className="..."><LocationIcon /></div><h3 className="...">DITTON</h3><p>Cietokšņa iela 60, Daugavpils</p><button onClick={() => window.open("...url...")} className="...">{t("getDirections")}<svg>...</svg></button></div>
        </div>
        <div className="w-full h-64 ..."><iframe src="..." ...></iframe></div>
      </section>

      {/* --- Gallery Section --- */}
      <section className="relative sm:py-32 md:py-24 w-full overflow-hidden animate-fade-in" id="gallery">
        <div className="absolute inset-0 ..." style={{ backgroundImage: "url(/Vector.svg)" }} />
        <div className="relative z-10">
          <div className="text-center ..."><h2 className="...">{t("galleryTitle")}</h2><p className="...">{t("gallerySubtitle")}</p></div>
          <div className="w-full marquee-container">
            <Marquee speed={50} pauseOnHover={false} gradient={false} direction="left">
              {caseImages.map((image, index) => (
                <div key={index} className="flex-none mx-3 sm:mx-6">
                  <div className="flex items-center justify-center">
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-64 sm:h-80 md:h-96 lg:h-[500px] ..."/>
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
          <div className="text-center ..."><h2 className="...">{t("faqTitle")}</h2></div>
          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            <AccordionItem value="item-1"><div className="..."><AccordionTrigger>{t("faq1Question")}</AccordionTrigger><AccordionContent>{t("faq1Answer")}</AccordionContent></div></AccordionItem>
            <AccordionItem value="item-2"><div className="..."><AccordionTrigger>{t("faq2Question")}</AccordionTrigger><AccordionContent>{t("faq2Answer")}</AccordionContent></div></AccordionItem>
            <AccordionItem value="item-3"><div className="..."><AccordionTrigger>{t("faq3Question")}</AccordionTrigger><AccordionContent>{t("faq3Answer")}</AccordionContent></div></AccordionItem>
            <AccordionItem value="item-4"><div className="..."><AccordionTrigger>{t("faq4Question")}</AccordionTrigger><AccordionContent>{t("faq4Answer")}</AccordionContent></div></AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* --- Newsletter Section --- */}
      <NewsletterForm />

      {/* --- Contacts Section --- */}
      <section className="relative py-12 sm:py-16 md:py-24 w-full ... rounded-b-[80px]" id="contacts">
        <div className="max-w-7xl mx-auto ...">
          <div className="text-center ..."><h2 className="...">{t("contactTitle")}</h2></div>
          <div className="flex flex-col md:flex-row ...">
            <div className="card-hover ..."><div className="..."><EmailIcon /></div><h3>{t("email")}</h3><a href="mailto:info@printcase.lv">info@printcase.lv</a></div>
            <div className="card-hover ..."><div className="..."><PhoneContactIcon /></div><h3>{t("phone")}</h3><a href="tel:+37129022999">+371 29022999</a></div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black py-8 sm:py-12 md:py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto ...">
          <div className="flex flex-col md:flex-row ...">
            <div><img src="/Logo-white.png" ... /></div>
            <div className="flex ..."><span>{t("followUs")}</span><div><a href="#"><svg>...</svg></a></div></div>
          </div>
          <div className="mt-8 ... text-center">
            <p className="text-white/50 text-xs sm:text-sm">{t("copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

