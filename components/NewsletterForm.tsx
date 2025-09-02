"use client"
// FILE: components/NewsletterForm.tsx

// We need to import some hooks from React to handle the form state
import { useRef } from "react";
// Import the hook for language translations
import { useLanguage } from "@/hooks/use-language";
// Import the server action for form submission
import { submitForm } from "@/app/actions";
// This is a custom hook for showing popups, we will need to create it.
// For now, we will use a simple alert.
// import { useToast } from "@/hooks/use-toast";

// This is a reusable component for the newsletter signup form.
export default function NewsletterForm() {
  // Get the translation function from our language hook
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  // This function handles the form submission and shows a confirmation alert
  async function handleSubmit(formData: FormData) {
    await submitForm(formData);

    // Show a simple success alert for now.
    // Later we can implement a more stylish "toast" notification.
    alert(t("newsletterSuccessMessage"));

    // Reset the form after submission
    formRef.current?.reset();
  }

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
              {t("newsletterTitle")}
            </h2>
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
              {t("newsletterSubtitle")}
            </p>
          </div>

          <form
            ref={formRef}
            action={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder={t("emailPlaceholder")}
              required
              className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/20 border-none outline-none text-white text-base sm:text-lg hover-scale transition-all font-sans placeholder:text-white/70"
            />
            <button
              type="submit"
              className="btn-hover px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-[#0B388A] font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors whitespace-nowrap font-sans"
            >
              {t("subscribeButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
