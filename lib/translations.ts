// FILE: lib/translations.ts

// Add 'et' and 'lt' to the Language type
export type Language = "lv" | "ru" | "en" | "et" | "lt"

export const translations = {
  // --- LATVIAN (LV) ---
  lv: {
    // Header
    about: "PAR MUMS",
    howItWorks: "KĀ TAS DARBOJAS",
    locationsTitle: "KUR MŪS ATRAST",
    contacts: "KONTAKTI",

    // Hero
    heroTitle: "TAVS STILS\nPAR 3 MINŪTĒM!",
    heroSubtitle: "Mēs pārvēršam tavas idejas realitātē dažu minūšu laikā.",
    findLocationButton: "ATRAST APARĀTU",

    // ... (rest of the translations are the same)
    aboutTitle: "Kas ir Printcase Express?",
    aboutSubtitle: "Revolucionāra personalizētu telefona vāciņu ražošanas tehnoloģija",
    aboutDescription: "Aizmirstiet par ilgu gaidīšanu. Mūsu modernie automāti ļauj izveidot unikālu vāciņu ar savu dizainu vai izvēlēties no gatavas galerijas. Tas ir ātri, kvalitatīvi un ērti.",
    howItWorksTitle: "KĀ TAS DARBOJAS?",
    howItWorksSubtitle: "Vienkārši 4 soļi līdz tavu sapņu vāciņam",
    step1Title: "IZVĒLIETIES\nMODELI",
    step1Description: "Apple iPhone, Samsung Galaxy, Xiaomi Redmi",
    step2Title: "AUGŠUPIELĀDĒJIET\nFOTO/DIZAINU",
    step2Description: "Noskenējiet QR kodu, lai augšupielādētu savu fotoattēlu vai dizainu",
    step3Title: "APMAKSĀJIET\nPASŪTĪJUMU",
    step3Description: "Ātri un droši Apple Pay, Google Pay, Karte",
    step4Title: "SAŅEMIET\nVĀCIŅU",
    step4Description: "Saņemiet savu pilnīgi jauno vāciņu, gatavu tikai 3 minūšu laikā!",
    locationsSubtitle: "Mūsu automāti atrodas populāros tirdzniecības centros",
    getDirections: "Kā nokļūt",
    galleryTitle: "IEDVESMA JŪSU IDEJĀM",
    gallerySubtitle: "Iedvesmojieties ar mūsu populārajiem dizainiem",
    faqTitle: "BIEŽI UZDOTIE JAUTĀJUMI",
    faq1Question: "Kādus telefonu modeļus jūs atbalstāt?",
    faq1Answer: "Mūsu automāti drukā vāciņus populārākajiem iPhone, Samsung Galaxy un Xiaomi Redmi modeļiem. Pieejamo modeļu saraksts tiek regulāri atjaunināts.",
    faq2Question: "Vai es varu augšupielādēt savu dizainu vai foto?",
    faq2Answer: "Jā, protams! Jūs varat augšupielādēt jebkuru foto vai attēlu tieši no sava telefona, izmantojot QR kodu.",
    faq3Question: "Cik ilga ir vāciņa drukāšana?",
    faq3Answer: "Dizaina izvēles laiks ir pilnībā atkarīgs no jums. Tiklīdz jūs apstiprināsiet savu gala maketu, vāciņa automātiskā apdruka aizņems tikai 3 minūtes.",
    faq4Question: "No kāda materiāla ir izgatavoti vāciņi?",
    faq4Answer: "Mēs izmantojam augstas kvalitātes un izturīgus materiālus, kas nodrošina drošu aizsardzību jūsu telefonam. Cenā ir iekļauts jauns vāciņš ar druku.",
    newsletterTitleDiscount: "SAŅEMIET 10% ATLAIDI!",
    newsletterSubtitleDiscount: "Abonējiet un saņemiet 10% atlaides kodu savam pirmajam pasūtījumam.",
    getDiscountButton: "Saņemt atlaidi",
    emailPlaceholder: "Jūsu e-pasts",
    contactTitle: "SAZINIETIES AR MUMS",
    email: "E-PASTS",
    phone: "TĀLRUNIS",
    followUs: "Sekojiet mums:",
    copyright: "© 2025 PRINTCASE EXPRESS. Visas tiesības aizsargātas.",
  },
  // --- RUSSIAN (RU) ---
  ru: {
    // Header
    about: "О НАС",
    howItWorks: "КАК ЭТО РАБОТАЕТ",
    locationsTitle: "ГДЕ НАС НАЙТИ",
    contacts: "КОНТАКТЫ",
    // Hero
    heroTitle: "ТВОЙ СТИЛЬ\nЗА 3 МИНУТЫ!",
    heroSubtitle: "Мы превращаем твои идеи в реальность за считанные минуты.",
    findLocationButton: "НАЙТИ АППАРАТ",
    // ... (rest of the translations)
  },
  // --- ENGLISH (EN) ---
  en: {
    // Header
    about: "ABOUT US",
    howItWorks: "HOW IT WORKS",
    locationsTitle: "WHERE TO FIND US",
    contacts: "CONTACTS",
    // Hero
    heroTitle: "YOUR STYLE\nIN 3 MINUTES!",
    heroSubtitle: "We turn your ideas into reality in a matter of minutes.",
    findLocationButton: "FIND A MACHINE",
    // ... (rest of the translations)
  },
  // --- ESTONIAN (ET) ---
  et: {
    // Header
    about: "MEIST",
    howItWorks: "KUIDAS SEE TÖÖTAB",
    locationsTitle: "KUST MEID LEIDA",
    contacts: "KONTAKTID",
    // Hero
    heroTitle: "SINU STIIL\n3 MINUTIGA!",
    heroSubtitle: "Teeme sinu ideed teoks vaid mõne minutiga.",
    findLocationButton: "LEIA AUTOMAAT",
    // ... (rest of the translations)
  },
  // --- LITHUANIAN (LT) ---
  lt: {
    // Header
    about: "APIE MUS",
    howItWorks: "KAIP TAI VEIKIA",
    locationsTitle: "KUR MUS RASTI",
    contacts: "KONTAKTAI",
    // Hero
    heroTitle: "TAVO STILIUS\nPER 3 MINUTES!",
    heroSubtitle: "Paversime jūsų idėjas realybe vos per kelias minutes.",
    findLocationButton: "RASTI APARATĄ",
    // ... (rest of the translations)
  },
}

// This function remains the same
export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split(".")
  let value: any = translations[language]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}