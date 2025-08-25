"use client"
// FILE: components/NewsletterForm.tsx

// Import the hook for language translations
import { useLanguage } from "@/hooks/use-language"

// This is a reusable component for the newsletter signup form.
// It uses Netlify Forms for easy email collection.
export default function NewsletterForm() {
  // Get the translation function from our language hook
  const { t } = useLanguage()

  return (
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
              {/* This key should be in your lv.json/ru.json/en.json files */}
              {t("newsletterTitleDiscount")}
            </h2>
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
              {/* This key should also be in your translation files */}
              {t("newsletterSubtitleDiscount")}
            </p>
          </div>

          {/*
           * NETLIFY FORM SETUP
           * 'data-netlify="true"' activates Netlify's form handling.
           * 'name' is the unique name for your form in the Netlify dashboard.
           * 'action' defines where the user is redirected after successful submission.
           */}
          <form
            name="newsletter"
            method="POST"
            action="/thank-you" // Redirects to a "Thank You" page with the promo code
            data-netlify="true"
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl mx-auto"
          >
            {/* This hidden input is required by Netlify to identify the form */}
            <input type="hidden" name="form-name" value="newsletter" />
            
            <input
              type="email"
              name="email" // This name is used in the Netlify form data
              placeholder={t("emailPlaceholder")}
              required
              className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/20 border-none outline-none text-white text-base sm:text-lg hover-scale transition-all font-sans placeholder:text-white/70"
            />
            <button
              type="submit"
              className="btn-hover px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-[#0B388A] font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors whitespace-nowrap font-sans"
            >
              {t("getDiscountButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}