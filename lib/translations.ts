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

    // About section
    aboutTitle: "Kas ir Printcase Express?",
    aboutSubtitle: "Revolucionāra personalizētu telefona vāciņu ražošanas tehnoloģija",
    aboutDescription: "Aizmirstiet par ilgu gaidīšanu. Mūsu modernie automāti ļauj izveidot unikālu vāciņu ar savu dizainu vai izvēlēties no gatavas galerijas. Tas ir ātri, kvalitatīvi un ērti.",

    // How it works
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

    // Locations
    locationsSubtitle: "Mūsu automāti atrodas populāros tirdzniecības centros",
    getDirections: "Kā nokļūt",
    
    // Gallery (Section exists, but removed from Navbar)
    galleryTitle: "IEDVESMA JŪSU IDEJĀM",
    gallerySubtitle: "Iedvesmojieties ar mūsu populārajiem dizainiem",

    // FAQ
    faqTitle: "BIEŽI UZDOTIE JAUTĀJUMI",
    faq1Question: "Kādus telefonu modeļus jūs atbalstāt?",
    faq1Answer: "Mūsu automāti drukā vāciņus populārākajiem iPhone, Samsung Galaxy un Xiaomi Redmi modeļiem. Pieejamo modeļu saraksts tiek regulāri atjaunināts.",
    faq2Question: "Vai es varu augšupielādēt savu dizainu vai foto?",
    faq2Answer: "Jā, protams! Jūs varat augšupielādēt jebkuru foto vai attēlu tieši no sava telefona, izmantojot QR kodu.",
    faq3Question: "Cik ilga ir vāciņa drukāšana?",
    faq3Answer: "Dizaina izvēles laiks ir pilnībā atkarīgs no jums. Tiklīdz jūs apstiprināsiet savu gala maketu, vāciņa automātiskā apdruka aizņems tikai 3 minūtes.",
    faq4Question: "No kāda materiāla ir izgatavoti vāciņi?",
    faq4Answer: "Mēs izmantojam augstas kvalitātes un izturīgus materiālus, kas nodrošina drošu aizsardzību jūsu telefonam. Cenā ir iekļauts jauns vāciņš ar druku.",

    // Newsletter
    newsletterTitleDiscount: "SAŅEMIET 10% ATLAIDI!",
    newsletterSubtitleDiscount: "Abonējiet un saņemiet 10% atlaides kodu savam pirmajam pasūtījumam.",
    getDiscountButton: "Saņemt atlaidi",
    emailPlaceholder: "Jūsu e-pasts",
    
    // Contact
    contactTitle: "SAZINIETIES AR MUMS",
    email: "E-PASTS",
    phone: "TĀLRUNIS",

    // Footer
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

    // About section
    aboutTitle: "Что такое Printcase Express?",
    aboutSubtitle: "Революционная технология изготовления персонализированных чехлов",
    aboutDescription: "Забудьте о долгом ожидании. Наши современные автоматы позволяют создать уникальный чехол с вашим дизайном или выбрать из готовой галереи. Это быстро, качественно и удобно.",

    // How it works
    howItWorksTitle: "КАК ЭТО РАБОТАЕТ?",
    howItWorksSubtitle: "Простые 4 шага до чехла твоей мечты",
    step1Title: "ВЫБЕРИТЕ\nМОДЕЛЬ",
    step1Description: "Apple iPhone, Samsung Galaxy, Xiaomi Redmi",
    step2Title: "ЗАГРУЗИТЕ\nФОТО/ДИЗАЙН",
    step2Description: "Отсканируйте QR-код, чтобы загрузить любое фото или дизайн.",
    step3Title: "ОПЛАТИТЕ\nЗАКАЗ",
    step3Description: "Быстро и безопасно Apple Pay, Google Pay, Карта",
    step4Title: "ПОЛУЧИТЕ\nЧЕХОЛ",
    step4Description: "Ваш новый уникальный чехол будет готов всего за 3 минуты!",

    // Locations
    locationsSubtitle: "Наши автоматы находятся в популярных торговых центрах",
    getDirections: "Как добраться",

    // Gallery
    galleryTitle: "ВДОХНОВЕНИЕ ДЛЯ ВАШИХ ИДЕЙ",
    gallerySubtitle: "Вдохновитесь нашими популярными дизайнами",

    // FAQ
    faqTitle: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
    faq1Question: "Какие модели телефонов вы поддерживаете?",
    faq1Answer: "Наши автоматы печатают чехлы для самых популярных моделей iPhone, Samsung Galaxy и Xiaomi Redmi. Список доступных моделей регулярно обновляется.",
    faq2Question: "Могу ли я загрузить свой дизайн или фото?",
    faq2Answer: "Да, конечно! Вы можете загрузить любое фото или изображение прямо с телефона через QR-код.",
    faq3Question: "Сколько времени занимает печать чехла?",
    faq3Answer: "Время на выбор дизайна полностью зависит от вас. Как только вы утвердите свой макет, автоматическая печать чехла займёт всего 3 минуты.",
    faq4Question: "Из какого материала сделаны чехлы?",
    faq4Answer:"Мы используем высококачественные и прочные материалы, которые обеспечивают надежную защиту для вашего телефона. В стоимость входит новый чехол с печатью.",

    // Newsletter
    newsletterTitleDiscount: "ПОЛУЧИТЕ СКИДКУ 10%!",
    newsletterSubtitleDiscount: "Подпишитесь и получите промокод на 10% для вашего первого заказа.",
    getDiscountButton: "Получить скидку",
    emailPlaceholder: "Ваш e-mail",

    // Contact
    contactTitle: "СВЯЖИТЕСЬ С НАМИ",
    email: "EMAIL",
    phone: "ТЕЛЕФОН",

    // Footer
    followUs: "Следите за нами:",
    copyright: "© 2025 PRINTCASE EXPRESS. Все права защищены.",
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

    // About section
    aboutTitle: "What is Printcase Express?",
    aboutSubtitle: "Revolutionary technology for personalized phone cases",
    aboutDescription: "Forget the long wait. Our modern machines allow you to create a unique case with your own design or choose from a ready-made gallery. It's fast, high-quality, and convenient.",

    // How it works
    howItWorksTitle: "HOW IT WORKS?",
    howItWorksSubtitle: "Simple 4 steps to your dream case",
    step1Title: "CHOOSE\nMODEL",
    step1Description: "Apple iPhone, Samsung Galaxy, Xiaomi Redmi",
    step2Title: "UPLOAD\nPHOTO/DESIGN",
    step2Description: "Scan the QR code to upload your photo or design.",
    step3Title: "PAY FOR\nORDER",
    step3Description: "Fast and secure with Apple Pay, Google Pay, or Card.",
    step4Title: "GET YOUR\nCASE",
    step4Description: "Your new custom case will be ready in as little as 3 minutes!",

    // Locations
    locationsSubtitle: "Our machines are located in popular shopping centers.",
    getDirections: "Get directions",

    // Gallery
    galleryTitle: "INSPIRATION FOR YOUR IDEAS",
    gallerySubtitle: "Get inspired by our popular designs",

    // FAQ
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    faq1Question: "What phone models do you support?",
    faq1Answer: "Our machines print cases for the most popular iPhone, Samsung Galaxy, and Xiaomi Redmi models. The list of available models is regularly updated.",
    faq2Question: "Can I upload my own design or photo?",
    faq2Answer: "Yes, of course! You can upload any photo or image directly from your phone via QR code.",
    faq3Question: "How long does it take to print a case?",
    faq3Answer: "The time spent choosing the design is entirely up to you. Once you approve your final layout, the automated printing of the case takes just 3 minutes.",
    faq4Question: "What material are the cases made of?",
    faq4Answer: "We use high-quality, durable materials that provide reliable protection for your phone. The price includes a new case with your print.",

    // Newsletter
    newsletterTitleDiscount: "GET 10% OFF!",
    newsletterSubtitleDiscount: "Subscribe and receive a 10% discount code for your first order.",
    getDiscountButton: "Get Discount",
    emailPlaceholder: "Your e-mail",

    // Contact
    contactTitle: "CONTACT US",
    email: "EMAIL",
    phone: "PHONE",

    // Footer
    followUs: "Follow us:",
    copyright: "© 2025 PRINTCASE EXPRESS. All rights reserved.",
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

    // About section
    aboutTitle: "Mis on Printcase Express?",
    aboutSubtitle: "Revolutsiooniline tehnoloogia isikupärastatud telefoniümbriste valmistamiseks",
    aboutDescription: "Unustage pikk ootamine. Meie kaasaegsed automaadid võimaldavad teil luua unikaalse ümbrise oma disainiga või valida valmisgaleriist. See on kiire, kvaliteetne ja mugav.",

    // How it works
    howItWorksTitle: "KUIDAS SEE TÖÖTAB?",
    howItWorksSubtitle: "Lihtsalt 4 sammu sinu unistuste ümbriseni",
    step1Title: "VALI\nMUDEL",
    step1Description: "Apple iPhone, Samsung Galaxy, Xiaomi Redmi",
    step2Title: "LAADI ÜLES\nFOTO/DISAIN",
    step2Description: "Skaneeri QR-kood, et üles laadida oma foto või disain.",
    step3Title: "MAKSA\nTELLIMUSE EEST",
    step3Description: "Kiire ja turvaline Apple Pay, Google Pay, kaardimakse.",
    step4Title: "SAA ÜMBRIS\nKÄTTE",
    step4Description: "Sinu uus ja eriline ümbris valmib vaid 3 minutiga!",

    // Locations
    locationsSubtitle: "Meie automaadid asuvad populaarsetes kaubanduskeskustes.",
    getDirections: "Vaata teekonda",

    // Gallery
    galleryTitle: "INSPIRATSIOON SINU IDEEDELE",
    gallerySubtitle: "Saa inspiratsiooni meie populaarsetest disainidest",

    // FAQ
    faqTitle: "KORDUMA KIPPUVAD KÜSIMUSED",
    faq1Question: "Milliseid telefonimudeleid te toetate?",
    faq1Answer: "Meie automaadid prindivad ümbriseid kõige populaarsematele iPhone, Samsung Galaxy ja Xiaomi Redmi mudelitele. Saadaolevate mudelite nimekirja uuendatakse regulaarselt.",
    faq2Question: "Kas ma saan üles laadida oma disaini või foto?",
    faq2Answer: "Jah, muidugi! Saate üles laadida mis tahes foto või pildi otse oma telefonist, kasutades QR-koodi.",
    faq3Question: "Kui kaua võtab ümbrise printimine aega?",
    faq3Änswer: "Disaini valimisele kuluv aeg sõltub täielikult sinust. Kui olete oma lõpliku kujunduse kinnitanud, võtab ümbrise automaatne printimine aega vaid 3 minutit.",
    faq4Question: "Mis materjalist on ümbrised valmistatud?",
    faq4Answer: "Kasutame kvaliteetseid ja vastupidavaid materjale, mis pakuvad teie telefonile usaldusväärset kaitset. Hind sisaldab uut prinditud ümbrist.",

    // Newsletter
    newsletterTitleDiscount: "SAA 10% ALLAHINDLUST!",
    newsletterSubtitleDiscount: "Telli uudiskiri ja saa 10% sooduskood oma esimesele tellimusele.",
    getDiscountButton: "Saa allahindlust",
    emailPlaceholder: "Sinu e-post",

    // Contact
    contactTitle: "VÕTA MEIEGA ÜHENDUST",
    email: "E-POST",
    phone: "TELEFON",

    // Footer
    followUs: "Jälgi meid:",
    copyright: "© 2025 PRINTCASE EXPRESS. Kõik õigused kaitstud.",
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

    // About section
    aboutTitle: "Kas yra Printcase Express?",
    aboutSubtitle: "Revoliucinė personalizuotų telefono dėklų gamybos technologija",
    aboutDescription: "Pamirškite ilgą laukimą. M