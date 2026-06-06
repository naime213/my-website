/**
 * content.js — Bilingual content data (AR/EN)
 * All site text, film data, partners, book, and blog entries live here.
 */

const CONTENT = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      works: "أعمالي",
      blog: "المدونة",
      contact: "تواصل",
      cta: "تحميل السيرة الذاتية",
      book: "الكتاب"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "عبد المنعم بركاتي",
      title: "صانع أفلام وثائقية",
      subtitle: "مدير تصوير · مونتاج قصصي · ما بعد الإنتاج",
      tagline: "أحوّل اللحظات الحقيقية إلى حكايات بصرية لا تُنسى.",
      cta_works: "شاهد أعمالي",
      cta_contact: "تواصل معي",
      scroll: "تمرير للاستكشاف"
    },
    about: {
      label: "عن صانع الأفلام",
      section_title: "من أنا",
      bio: "صانع أفلام وثائقية بخبرة تتجاوز عشر سنوات في الإخراج والتصوير وما بعد الإنتاج. عملت على أفلام وبرامج وثائقية لكبرى المحطات العالمية كقناة الجزيرة الوثائقية والعربي. أعمالي تجمع بين العمق البصري والجودة السردية والتميز التقني، وقد نالت اعترافاً دولياً في مهرجانات كبرى.",
      stats: [
        { number: "10+", label: "سنوات خبرة" },
        { number: "100+", label: "عمل مكتمل" },
        { number: "7", label: "جوائز دولية" },
        { number: "+100M", label: "مشاهدة" }
      ],
      skills_title: "المهارات",
      skills: ["تصوير سينمائي", "مونتاج قصصي", "إخراج وثائقي", "ما بعد الإنتاج", "تطوير المحتوى", "توجيه بصري", "تصحيح اللون", "تصميم صوتي"]
    },
    works: {
      label: "الأعمال الوثائقية",
      section_title: "أعمالي",
      filter_all: "الكل",
      filter_aljazeera: "الجزيرة",
      filter_alaraby: "العربي",
      filter_ajplus: "AJ+ عربي",
      filter_other: "أخرى",
      view_film: "شاهد الفيلم",
      role_label: "الدور"
    },
    awards: {
      label: "الاعترافات الدولية",
      section_title: "المهرجانات والجوائز",
      items: [
        { icon: "🏆", festival: "مهرجان إسماعيلية الدولي", detail: "ثاني أفضل وثائقي 2023 — طحطوح" },
        { icon: "🥇", festival: "بيروت العربي للأفلام القصيرة", detail: "أفضل وثائقي 2024 — طحطوح" },
        { icon: "🦁", festival: "مهرجان وهران الدولي", detail: "الأسد الذهبي 2024 — طحطوح" },
        { icon: "⭐", festival: "مهرجان بركة الوثائقي", detail: "أفضل فيلم 2022 — حزام الشرف" },
        { icon: "🎖️", festival: "Telly Awards — USA", detail: "3 جوائز — AJ+ عربي 2023" },
        { icon: "🏅", festival: "مهرجان عنابة للفيلم المتوسطي", detail: "مشاركة رسمية 2026 — أوليفيا زمور" },
        { icon: "🎗️", festival: "مهرجان عنابة للفيلم المتوسطي", detail: "تنويه خاص 2026 — لويزة إيغيل أحريز" },
        { icon: "🌹", festival: "مهرجان سعيدة للسينما وأدب المرأة", detail: "مشاركة بالمسابقة الرسمية 2026" }
      ]
    },
    partners: {
      label: "شراكات إعلامية",
      section_title: "شركاء النجاح",
      subtitle: "مؤسسات إعلامية عالمية ثقت بي وعملت معها"
    },
    book: {
      section_title: "الكتاب الإلكتروني",
      format_badge: "كتاب إلكتروني — PDF",
      title: "صناعة الفيلم الوثائقي",
      title_line2: "من الفكرة إلى الشاشة",
      subtitle: "بقلم صانع أفلام تعامل مع قنوات عربية ودولية كبرى",
      description: "كل ما تحتاجه لصناعة فيلم وثائقي احترافي — من اختيار القصة إلى الشاشة.",
      features: [
        "أسرار التصوير الاحترافي للأفلام الوثائقية",
        "بناء الحكاية من الصفر حتى المونتاج النهائي",
        "العمل مع الشبكات الكبرى: خبرتي مع الجزيرة والعربي",
        "أدوات وتقنيات ما بعد الإنتاج للمبتدئين والمحترفين",
        "كيف تفوز بجوائز المهرجانات الوثائقية"
      ],
      price: "$9.99",
      cta: "اقتن الكتاب الآن",
      cta_buy: "اشترِ الآن",
      badge: "إصدار جديد",
      trust_delivery: "تسليم فوري بعد الدفع",
      trust_refund: "ضمان استرداد كامل خلال 7 أيام",
      preview_label: "معاينة مجانية",
      preview_title: "اقرأ أول 3 صفحات",
      preview_lock: "انتهت المعاينة المجانية — اقتن الكتاب للوصول الكامل",
      start_journey: "ابدأ رحلتك الآن",
      delivery_note: "PDF عالي الجودة — تسليم فوري عبر البريد الإلكتروني"
    },
    blog: {
      label: "خلف الكاميرا",
      section_title: "المدونة",
      subtitle: "قصص من وراء الكاميرا",
      read_more: "اقرأ المزيد",
      back: "العودة للمدونة",
      watch_film: "شاهد الفيلم كاملاً على يوتيوب",
      related: "مقالات مشابهة"
    },
    contact: {
      section_title: "تواصل معي",
      subtitle: "هل لديك مشروع وثائقي؟ لنتحدث.",
      email_label: "البريد الإلكتروني",
      location_label: "الموقع",
      form: {
        name: "اسمك الكامل",
        email: "بريدك الإلكتروني",
        subject: "موضوع الرسالة",
        message: "رسالتك...",
        submit: "أرسل الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال رسالتك بنجاح!",
        error: "حدث خطأ، حاول مجدداً."
      },
      info: {
        email: "naimbarkati@gmail.com",
        location: "الجزائر العاصمة، الجزائر"
      }
    },
    footer: {
      tagline: "صانع قصص بصرية منذ 2013",
      links: ["الرئيسية", "أعمالي", "المدونة", "تواصل"],
      rights: "© 2026 عبد المنعم بركاتي. جميع الحقوق محفوظة."
    }
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      works: "Works",
      blog: "Blog",
      contact: "Contact",
      cta: "Download CV",
      book: "Book"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Abdelmonaim Barkati",
      title: "Documentary Filmmaker",
      subtitle: "Director of Photography · Story Editor · Post-Production",
      tagline: "I turn real moments into unforgettable visual stories.",
      cta_works: "View My Work",
      cta_contact: "Get in Touch",
      scroll: "Scroll to Explore"
    },
    about: {
      label: "About the Filmmaker",
      section_title: "About Me",
      bio: "Documentary filmmaker with over ten years of experience in directing, cinematography, and post-production. I have worked on documentary films and programs for major networks such as Al Jazeera Documentary and Al Araby TV. My contributions span award-winning films recognized for their visual depth, narrative quality, and technical excellence.",
      stats: [
        { number: "10+", label: "Years Experience" },
        { number: "100+", label: "Completed Works" },
        { number: "7", label: "Int'l Awards" },
        { number: "+100M", label: "Views" }
      ],
      skills_title: "Skills",
      skills: ["Cinematography", "Story Editing", "Documentary Direction", "Post-Production", "Content Development", "Visual Direction", "Color Grading", "Sound Design"]
    },
    works: {
      label: "Documentary Works",
      section_title: "My Works",
      filter_all: "All",
      filter_aljazeera: "Al Jazeera",
      filter_alaraby: "Al Araby",
      filter_ajplus: "AJ+ Arabic",
      filter_other: "Other",
      view_film: "Watch Film",
      role_label: "Role"
    },
    awards: {
      label: "International Recognition",
      section_title: "Festivals & Awards",
      items: [
        { icon: "🏆", festival: "Ismailia International Festival", detail: "2nd Best Documentary 2023 — Tahtouh" },
        { icon: "🥇", festival: "Beirut Arab Short Film Festival", detail: "Best Documentary 2024 — Tahtouh" },
        { icon: "🦁", festival: "Oran International Arab Film Festival", detail: "Golden Lion 2024 — Tahtouh" },
        { icon: "⭐", festival: "Baraka National Documentary Festival", detail: "Best Film 2022 — Belt of Honor" },
        { icon: "🎖️", festival: "Telly Awards — USA", detail: "3 Awards — AJ+ Arabic 2023" },
        { icon: "🏅", festival: "Annaba Mediterranean Film Festival", detail: "Official Selection 2026 — Olivia Zemour" },
        { icon: "🎗️", festival: "Annaba Mediterranean Film Festival", detail: "Special Mention 2026 — Louiza Aïgil Ahriz" },
        { icon: "🌹", festival: "Saïda Cinema & Women's Literature Festival", detail: "Official Competition 2026 — Saïda" }
      ]
    },
    partners: {
      label: "Media Partnerships",
      section_title: "Trusted Partners",
      subtitle: "Global media institutions I have proudly collaborated with"
    },
    book: {
      section_title: "E-Book",
      format_badge: "E-Book — PDF",
      title: "Documentary Filmmaking",
      title_line2: "From Concept to Screen",
      subtitle: "By a filmmaker who worked with major Arab and international networks",
      description: "Everything you need to make a professional documentary — from story to screen.",
      features: [
        "Secrets of professional cinematography for documentaries",
        "Building narrative from scratch through final cut",
        "Working with major networks: my Al Jazeera & Al Araby experience",
        "Post-production tools and techniques for beginners and pros",
        "How to win awards at documentary film festivals"
      ],
      price: "$9.99",
      cta: "Get the Book Now",
      cta_buy: "Buy Now",
      badge: "New Release",
      trust_delivery: "Instant delivery after payment",
      trust_refund: "Full refund guarantee within 7 days",
      preview_label: "Free Preview",
      preview_title: "Read the First 3 Pages",
      preview_lock: "Free preview ended — buy the book for full access",
      start_journey: "Start Your Journey Now",
      delivery_note: "High-quality PDF — instant delivery by email"
    },
    blog: {
      label: "Behind the Camera",
      section_title: "Blog",
      subtitle: "Stories from behind the camera",
      read_more: "Read More",
      back: "Back to Blog",
      watch_film: "Watch the Full Film on YouTube",
      related: "Related Articles"
    },
    contact: {
      section_title: "Get in Touch",
      subtitle: "Have a documentary project? Let's talk.",
      email_label: "Email",
      location_label: "Location",
      form: {
        name: "Your Full Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your message...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Your message was sent successfully!",
        error: "Something went wrong. Please try again."
      },
      info: {
        email: "naimbarkati@gmail.com",
        location: "Algiers, Algeria"
      }
    },
    footer: {
      tagline: "Visual storyteller since 2013",
      links: ["Home", "Works", "Blog", "Contact"],
      rights: "© 2026 Abdelmonaim Barkati. All rights reserved."
    }
  }
};

// ─── Films Data ───────────────────────────────────────────────────────────────
const FILMS = [

  // ════════════════════════════════════════════════════════════════
  //  الجزيرة الوثائقية  (category: "aljazeera") — newest first
  // ════════════════════════════════════════════════════════════════
  { id:"rakb-tawati",    category:"aljazeera", year:2026, size:"hero",
    poster:"assets/posters/rakb-tawati.webp",   youtube:"https://www.aljazeera360.com/video/947268",
    ar:{ title:"الركب التواتي: حجاج الصحراء", network:"الجزيرة الوثائقية",
         description:"رحلة ملحمية ترصد قافلة الحج التواتية العريقة وهي تشق طريقها من قلب الصحراء الجزائرية نحو مكة المكرمة.",
         role:"مدير تصوير ومشرف على ما بعد الإنتاج" },
    en:{ title:"The Touat Caravan: Pilgrims of the Desert", network:"Al Jazeera Documentary",
         description:"An epic journey following the historic Touat Hajj caravan as it crosses the Algerian Sahara toward Mecca.",
         role:"Director of Photography & Post-Production Supervisor" } },

  { id:"olivia-zemour",  category:"aljazeera", year:2025, size:"wide",
    poster:"assets/posters/olivia-zemour.webp",
    youtube:"https://www.aljazeera360.com/video/911283",
    platform:{ ar:"الجزيرة 360", en:"Al Jazeera 360" },
    ar:{ title:"أوليفيا زمور في مواجهة الصمت", network:"الجزيرة الوثائقية",
         description:"وثائقي يحكي مسيرة أوليفيا زمور ونضالها في مواجهة الصمت والنسيان.",
         role:"تصوير وما بعد الإنتاج" },
    en:{ title:"Olivia Zemour: Against the Silence", network:"Al Jazeera Documentary",
         description:"A documentary following Olivia Zemour's struggle against silence and erasure.",
         role:"Cinematography & Post-Production" } },

  { id:"radio-people",   category:"aljazeera", year:2024, size:"wide",
    poster:"assets/posters/radio.webp",
    youtube:"https://www.aljazeera360.com/video/918628",
    platform:{ ar:"الجزيرة 360", en:"Al Jazeera 360" },
    ar:{ title:"الإذاعة والناس", network:"الجزيرة الوثائقية",
         description:"وثائقي يتتبع تطور الإذاعة الجزائرية عبر العقود — من أداة استعمارية إلى صوت للمقاومة.",
         role:"مدير تصوير، تطوير القصة، الإشراف الكامل على ما بعد الإنتاج" },
    en:{ title:"Radio and the People", network:"Al Jazeera Documentary",
         description:"A documentary tracing the evolution of Algerian radio from a colonial tool to a voice of resistance.",
         role:"Director of Photography, Story Development & Full Post-Production Supervision" } },

  { id:"sebiba",         category:"aljazeera", year:2023, size:"wide",
    poster:"assets/posters/sebiba.webp",
    youtube:"https://www.youtube.com/watch?v=ozaKOG2tWRE",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"السبيبة: فرح الصحراء", network:"الجزيرة الوثائقية",
         description:"رحلة ثقافية إلى مجتمع الطوارق في الجزائر، تستكشف تقليداً عمره 1500 عام.",
         role:"تطوير القصة وما بعد الإنتاج الكامل" },
    en:{ title:"Sebiba: Desert Celebration", network:"Al Jazeera Documentary",
         description:"A cultural journey into the Tuareg community of Algeria, exploring a 1,500-year-old tradition.",
         role:"Story Development & Full Post-Production" } },

  { id:"chibanis",       category:"aljazeera", year:2023, size:"small",
    poster:"assets/posters/chibanis.webp",
    youtube:"https://www.youtube.com/watch?v=RfSpz-O0E9k",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"الشيباني", network:"الجزيرة الوثائقية",
         description:"صورة مؤثرة للمهاجرين الشماليين الأفارقة الذين أعادوا بناء فرنسا بعد الحرب وشاخوا بعيداً عن أوطانهم.",
         role:"تطوير القصة وما بعد الإنتاج" },
    en:{ title:"The Chibanis", network:"Al Jazeera Documentary",
         description:"A moving portrait of North African immigrants who rebuilt post-war France and grew old far from their homelands.",
         role:"Story Development & Post-Production" } },

  { id:"mohammed-dib",   category:"aljazeera", year:2023, size:"small",
    poster:"assets/posters/dib.webp",
    youtube:"https://www.aljazeera360.com/video/729968",
    platform:{ ar:"الجزيرة 360", en:"Al Jazeera 360" },
    ar:{ title:"محمد ديب: كاتب بين ضفتين", network:"الجزيرة الوثائقية",
         description:"وثائقي يحتفي بمحمد ديب، أحد أبرز الكتّاب الجزائريين الذي وثّق روح الأمة تحت الاستعمار.",
         role:"تصوير وما بعد الإنتاج الكامل" },
    en:{ title:"Mohammed Dib: The Voice of Algeria", network:"Al Jazeera Documentary",
         description:"A documentary celebrating Mohammed Dib, one of Algeria's most influential writers.",
         role:"Cinematography & Full Post-Production" } },

  { id:"tahtouh",        category:"aljazeera", year:2021, size:"wide", impact:"🏆🥇🦁",
    poster:"assets/posters/tahtouh.webp",
    youtube:"https://www.youtube.com/watch?v=placeholder-tahtouh", /* ← ضع هنا الرابط الحقيقي */
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"طحطوح: ضمير القرية", network:"الجزيرة",
         description:"قصة مؤثرة لآخر من بقي لإحياء قريته المهجورة خلال العشرية السوداء في الجزائر.",
         role:"تصوير، تطوير القصة، ما بعد الإنتاج",
         award:"أفضل فيلم وثائقي قصير — إسماعيلية، بيروت، الأسد الذهبي" },
    en:{ title:"Tahtouh: The Conscience of a Village", network:"Al Jazeera",
         description:"A moving story of the last man who stayed to revive his abandoned village during Algeria's Black Decade.",
         role:"Cinematography, Story Development & Post-Production",
         award:"Best Short Documentary — Ismailia, Beirut & Golden Lion (Oran)" } },

  { id:"chaoui-wedding", category:"aljazeera", year:2020, size:"small", impact:"2.5M+",
    poster:"assets/posters/chaoui.webp",
    youtube:"https://www.youtube.com/watch?v=hL5bWglygDY",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"العرس الشاوي", network:"الجزيرة الوثائقية",
         description:"غوص عميق في طقوس الزواج الشاوي في الجزائر، يتتبع جذوره الأمازيغية عبر التاريخ.",
         role:"تطوير القصة وما بعد الإنتاج الكامل",
         impact:"أكثر من 2.5 مليون مشاهدة على يوتيوب" },
    en:{ title:"Chaoui Wedding", network:"Al Jazeera Documentary",
         description:"A deep dive into Chaoui wedding rituals in Algeria, tracing Amazigh roots to the colonial era.",
         role:"Story Development & Full Post-Production",
         impact:"Over 2.5M views on YouTube" } },

  { id:"vava-inouva",    category:"aljazeera", year:2019, size:"small",
    poster:"assets/posters/vava.webp",
    youtube:"https://www.youtube.com/watch?v=V_XGph3WDt8&t=185s",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"أ فافا إينوفا — الأغنية الخالدة", network:"الجزيرة الوثائقية",
         description:"وثائقي يستكشف أصول وتأثير أغنية إيدير الأيقونية ودورها الجامع بين الأجيال.",
         role:"تطوير القصة والإشراف الكامل على ما بعد الإنتاج" },
    en:{ title:"A Vava Inouva — The Eternal Song", network:"Al Jazeera Documentary",
         description:"A documentary exploring the origins and cultural impact of Idir's iconic song.",
         role:"Story Development & Full Post-Production Supervision" } },

  { id:"yalmiima",       category:"aljazeera", year:2019, size:"small",
    poster:"assets/posters/yalmiima.webp",
    youtube:"https://www.aljazeera360.com/video/630028",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"يالميمة متبكيش — حكاية أغنية", network:"الجزيرة الوثائقية",
         description:"وثائقي يروي حكاية الأغنية الجزائرية العريقة 'يالميمة متبكيش' ويستكشف أبعادها الإنسانية والتراثية.",
         role:"مخرج" },
    en:{ title:"Ya L-Mima Ma Tbkish — A Song's Story", network:"Al Jazeera Documentary",
         description:"A documentary telling the story of the iconic Algerian song 'Ya L-Mima Ma Tbkish' and exploring its human and cultural dimensions.",
         role:"Director" } },

  { id:"poisoned-legacy", category:"aljazeera", year:2018, size:"wide",
    poster:"assets/posters/poisoned.webp", youtube:"https://www.aljazeera360.com/video/815120",
    ar:{ title:"الإرث المسموم", network:"الجزيرة الوثائقية",
         description:"فيلم يكشف الأسماء المهينة التي فُرضت على الجزائريين في عهد الاستعمار الفرنسي.",
         role:"ما بعد الإنتاج الكامل — تطوير القصة، المونتاج، اللون، الصوت" },
    en:{ title:"The Poisoned Legacy", network:"Al Jazeera Documentary",
         description:"A film exposing the derogatory names imposed on Algerians under French colonial rule.",
         role:"Full Post-Production — Story, Editing, Color & Sound" } },

  // ════════════════════════════════════════════════════════════════
  //  تلفزيون العربي  (category: "alaraby") — newest first
  // ════════════════════════════════════════════════════════════════
  { id:"algeria-fires",  category:"alaraby", year:2023, size:"wide",
    poster:"assets/posters/algeria-fires.webp",
    youtube:"https://www.youtube.com/watch?v=zld2h2ZV6uE&t=307s",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"حرائق الجزائر", network:"تلفزيون العربي",
         description:"وثائقي يرصد حرائق الغابات المأساوية التي اجتاحت الجزائر، ويوثّق معاناة السكان وجهود الإنقاذ.",
         role:"الإشراف الكامل على ما بعد الإنتاج" },
    en:{ title:"Algeria on Fire", network:"Al Araby TV",
         description:"A documentary chronicling the devastating wildfires that swept Algeria, documenting the human toll and rescue efforts.",
         role:"Full Post-Production Supervision" } },

  { id:"moving-palaces", category:"alaraby", year:2023, size:"hero",
    poster:"assets/posters/palaces.webp",
    youtube:"https://www.youtube.com/watch?v=-z0W-xFrI_4&t=1248s",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"القصور الحمراء المتحركة", network:"تلفزيون العربي",
         description:"وثائقي يكشف غموض 'القصور المتحركة' في تيميمون، حيث تكشف الكثبان عن هياكل حمراء قديمة.",
         role:"إشراف كامل على ما بعد الإنتاج" },
    en:{ title:"The Moving Palaces", network:"Al Araby TV",
         description:"A documentary uncovering the mystery of the 'moving palaces' of Timimoun.",
         role:"Full Post-Production Supervision" } },

  { id:"hammam",         category:"alaraby", year:2022, size:"wide",
    poster:"assets/posters/hammam.webp",
    youtube:"https://www.youtube.com/watch?v=PYfPDnJcDgs&t=1071s",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"حمام المسخوطين", network:"تلفزيون العربي",
         description:"وثائقي يستكشف حمام المسخوطين الأسطوري في الجزائر، يمزج الأسطورة بالتاريخ والتراث.",
         role:"مدير تصوير والإشراف الكامل على ما بعد الإنتاج" },
    en:{ title:"Hammam Meskhoutine", network:"Al Araby TV",
         description:"A documentary exploring the legendary Hammam Meskhoutine, blending myth, folklore, and history.",
         role:"Director of Photography & Full Post-Production Supervision" } },

  { id:"bouteflika-fall", category:"alaraby", year:2021, size:"wide",
    poster:"assets/posters/bouteflika-fall.webp",
    youtube:"https://www.youtube.com/watch?v=MbhHINiXeDU&t=729s",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"سقوط بوتفليقة", network:"تلفزيون العربي",
         description:"وثائقي يوثّق سقوط الرئيس الجزائري عبد العزيز بوتفليقة إثر الحراك الشعبي، ويرصد لحظات التحول التاريخي.",
         role:"مدير تصوير والإشراف الكامل على ما بعد الإنتاج" },
    en:{ title:"The Fall of Bouteflika", network:"Al Araby TV",
         description:"A documentary capturing the fall of Algerian President Abdelaziz Bouteflika following the popular uprising and its historic turning points.",
         role:"Director of Photography & Full Post-Production Supervision" } },

  { id:"theatre-assassination", category:"alaraby", year:2020, size:"wide",
    poster:"assets/posters/theatre-assassination.webp",
    youtube:"https://www.youtube.com/watch?v=JZ5iShVucgw&t=233s",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"اغتيال المسرح", network:"تلفزيون العربي",
         description:"وثائقي يرصد واقع المسرح الجزائري وما آل إليه من تراجع، ويطرح تساؤلات حول مستقبل الفن والثقافة.",
         role:"الإشراف الكامل على ما بعد الإنتاج" },
    en:{ title:"Assassination of the Theatre", network:"Al Araby TV",
         description:"A documentary examining the decline of Algerian theatre and raising questions about the future of art and culture.",
         role:"Full Post-Production Supervision" } },

  { id:"slogans",        category:"alaraby", year:2019, size:"wide",
    poster:"assets/posters/slogans.webp",
    youtube:"https://www.youtube.com/watch?v=T7apmqfWbWY&t=745s",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"الشعارات المتمردة", network:"تلفزيون العربي",
         description:"وثائقي يدرس شعارات الحراك الشعبي الجزائري وأبعادها السياسية والثقافية.",
         role:"مدير تصوير والإشراف الكامل على ما بعد الإنتاج" },
    en:{ title:"Rebellious Slogans", network:"Al Araby TV",
         description:"A documentary examining the slogans of Algeria's popular movement and their cultural dimensions.",
         role:"Director of Photography & Full Post-Production Supervision" } },

  // ════════════════════════════════════════════════════════════════
  //  AJ+ عربي  (category: "ajplus") — newest first
  // ════════════════════════════════════════════════════════════════
  { id:"first-sight",    category:"ajplus", year:2024, size:"wide",
    poster:"assets/posters/first-sight.webp",
    youtube:"https://www.youtube.com/watch?v=ODu-yJWR6-I",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"قصة إنسان — من أول نظرة", network:"AJ+ عربي",
         description:"قصة حب جزائرية استثنائية نشأت من نظرة واحدة وتحوّلت إلى قصة عمر كامل.",
         role:"مصور ومحرر قصصي" },
    en:{ title:"Human Story — Love at First Sight", network:"AJ+ Arabic",
         description:"An exceptional Algerian love story that began with a single glance and grew into a lifelong bond.",
         role:"Cinematographer & Story Editor" } },

  { id:"grandchildren",  category:"ajplus", year:2024, size:"wide",
    poster:"assets/posters/grandchildren.webp",
    youtube:"https://www.youtube.com/watch?v=jlMPKNKnAZg",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"قصة إنسان — أحب أحفادي", network:"AJ+ عربي",
         description:"وثائقي إنساني يرصد علاقة جد جزائري بأحفاده، ويكشف جمال الروابط الأسرية عبر الأجيال.",
         role:"مصور ومحرر قصصي" },
    en:{ title:"Human Story — I Love My Grandchildren", network:"AJ+ Arabic",
         description:"A human documentary capturing an Algerian grandfather's bond with his grandchildren and the beauty of intergenerational family ties.",
         role:"Cinematographer & Story Editor" } },

  { id:"radhia-deghali", category:"ajplus", year:2023, size:"wide", impact:"",
    poster:"assets/posters/radhia.webp",
    youtube:"https://www.youtube.com/watch?v=taeEkxaUIfw",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"قصة إنسان — بعين واحدة", network:"AJ+ عربي",
         description:"رضية دغالي — مصممة أزياء جزائرية فقدت بصر إحدى عينيها ولم تتوقف، فتحولت محنتها إلى إلهام لعلامة تجارية ناجحة.",
         role:"مصور ومحرر قصصي", award:"Telly Awards 2023" },
    en:{ title:"Human Story — With One Eye", network:"AJ+ Arabic",
         description:"Radhia Deghali — an Algerian fashion designer who lost sight in one eye and turned her ordeal into inspiration, building a successful brand.",
         role:"Cinematographer & Story Editor", award:"Telly Awards 2023" } },

  { id:"zohia",          category:"ajplus", year:2022, size:"small", impact:"Telly 2023",
    poster:"assets/posters/zohia.webp",
    youtube:"https://www.youtube.com/watch?v=ozNGOZkj_gI",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"قصة إنسان — لا أستطيع العيش بدونه", network:"AJ+ عربي",
         description:"قصة امرأة جزائرية أُخذت من عائلتها صغيرة وعاشت دهراً بعيدة عنهم، ولقاؤها بهم بعد عقود من الفراق.",
         role:"مصور ومحرر قصصي" },
    en:{ title:"Human Story — I Can't Live Without Him", network:"AJ+ Arabic",
         description:"The story of an Algerian woman taken from her family as a child, who lived decades apart before an emotional reunion.",
         role:"Cinematographer & Story Editor" } },

  { id:"the-teacher",    category:"ajplus", year:2022, size:"small",
    poster:"assets/posters/teacher.webp",
    youtube:"https://www.youtube.com/watch?v=wP1aghjlVPk",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"قصة إنسان — المعلم", network:"AJ+ عربي",
         description:"معلم جزائري بسيط علّم الآلاف في قرى نائية على مدى عقود، وترك أثراً لا يُمحى في حياة أجيال كاملة.",
         role:"مصور ومحرر قصصي" },
    en:{ title:"Human Story — The Teacher", network:"AJ+ Arabic",
         description:"A humble Algerian teacher who educated thousands across remote villages for decades, leaving an indelible mark on generations.",
         role:"Cinematographer & Story Editor" } },

  { id:"fethi-nourine",  category:"ajplus", year:2021, size:"wide",
    poster:"assets/posters/fethi.webp",
    youtube:"https://www.youtube.com/watch?v=MvULzq82vBU",
    platform:{ ar:"يوتيوب", en:"YouTube" },
    ar:{ title:"قصة إنسان — فتحي نورين", network:"AJ+ عربي",
         description:"قصة بطل الجودو الجزائري الذي رفض المنافسة ضد لاعب إسرائيلي في أولمبياد طوكيو 2020، وضحّى بحلمه الأولمبي من أجل مبدأ.",
         role:"مصور ومحرر قصصي", award:"Telly Awards 2023" },
    en:{ title:"Human Story — Fethi Nourine", network:"AJ+ Arabic",
         description:"The story of Algerian judo champion Fethi Nourine who refused to compete against an Israeli athlete at Tokyo 2020, sacrificing his Olympic dream for a principle.",
         role:"Cinematographer & Story Editor", award:"Telly Awards 2023" } },

  // ════════════════════════════════════════════════════════════════
  //  وزارة المجاهدين  (category: "other") — newest first
  // ════════════════════════════════════════════════════════════════
  { id:"louisa-ighil",   category:"other", year:2025, size:"wide", impact:"🎗️",
    poster:"assets/posters/louisa-ighil.webp",  youtube:"#",
    ar:{ title:"لويزة إيغيل أحريز", network:"وزارة المجاهدين",
         description:"وثائقي يروي سيرة المناضلة الجزائرية لويزة إيغيل أحريز، شاهدة على تاريخ الثورة ورمزٌ لصمود المرأة.",
         role:"مدير تصوير ومشرف على ما بعد الإنتاج" },
    en:{ title:"Louisa Ighil Ahriz", network:"Ministry of Mujahideen",
         description:"A documentary on Algerian resistance fighter Louisa Ighil Ahriz — a witness to the revolution and a symbol of women's resilience.",
         role:"Director of Photography & Post-Production Supervisor" } },

  { id:"skulls",         category:"other", year:2023, size:"wide",
    poster:"assets/posters/skulls.webp", youtube:"https://www.youtube.com/watch?v=placeholder-skulls",
    ar:{ title:"جماجم مهجّرة", network:"وزارة المجاهدين",
         description:"وثائقي يكشف نقل جماجم المقاومين الجزائريين إلى متحف الإنسان في باريس والنضال لاسترجاعها.",
         role:"مدير تصوير ومشرف على ما بعد الإنتاج" },
    en:{ title:"Skulls of Resistance", network:"Ministry of Mujahideen",
         description:"A documentary revealing the transfer of Algerian resistance fighters' skulls to the Museum of Man in Paris.",
         role:"Director of Photography & Post-Production Supervisor" } },

];

// ─── Partners Data ─────────────────────────────────────────────────────────────
const PARTNERS = [
  { name: "Al Jazeera Documentary", logo: "assets/logos/aljazeera-doc.png", ar: "الجزيرة الوثائقية" },
  { name: "Al Jazeera", logo: "assets/logos/aljazeera.png", ar: "الجزيرة" },
  { name: "AJ+ Arabic", logo: "assets/logos/ajplus.png", ar: "AJ+ عربي" },
  { name: "Al Araby TV", logo: "assets/logos/alaraby.png", ar: "العربي" },
  { name: "Ministry of Mujahideen", logo: "assets/logos/mujahideen.png", ar: "وزارة المجاهدين" },
  { name: "Al Jazeera Media Institute", logo: "assets/logos/ajmi.png", ar: "معهد الجزيرة الإعلامي" },
  { name: "Djimas Production",          logo: "assets/logos/djimas.png",   ar: "Djimas Production" },
  { name: "Woojy Media",                logo: "assets/logos/woojy.png",    ar: "Woojy Media" },
  { name: "Media DZ",                   logo: "assets/logos/mediadz.png",  ar: "Media DZ" },
  { name: "Dakira Film",                logo: "assets/logos/dakira.png",   ar: "Dakira Film" }
];

// ─── Book Data ─────────────────────────────────────────────────────────────────
const BOOK = {
  cover: "assets/book/cover.webp",
  purchase_url: "https://www.amazon.com/dp/B0H488DHPG"
};

// ─── Blog Posts Data ───────────────────────────────────────────────────────────
const BLOG_POSTS = [
  {
    id: 1,
    slug: "rokb-touati-pilgrims-of-the-desert",
    file: "blog/post-1.html",
    cover: "assets/posters/rakb-tawati.webp",
    date_ar: "أبريل 2025",
    date_en: "April 2025",
    youtube: "https://www.aljazeera360.com/video/947268",
    ar: {
      title: "الركب التواتي: حجاج الصحراء — عالم كامل يتحرّك فوق الرمال",
      excerpt: "رحلة في ذاكرة قوافل الحج الصحراوية من واحات توات إلى الحجاز، إيماناً وحكايات وروحاً لم تمتها الصحراء.",
      read_time: "9 دقائق"
    },
    en: {
      title: "The Touat Caravan: Pilgrims of the Desert — An Entire World Moving Across the Sands",
      excerpt: "A journey into the memory of Saharan Hajj caravans from the oases of Touat to the Hijaz — faith, stories, and a spirit the desert never extinguished.",
      read_time: "9 min read"
    }
  },
  {
    id: 2,
    slug: "sebiba-filming-in-the-desert",
    file: "blog/post-2.html",
    cover: "assets/posters/sebiba.webp",
    date_ar: "يناير 2024",
    date_en: "January 2024",
    youtube: "https://www.youtube.com/watch?v=ozaKOG2tWRE",
    ar: {
      title: "السبيبة: تحدي تصوير تقليد عمره ألف وخمسمئة عام في قلب الصحراء",
      excerpt: "كيف تُصوّر احتفالاً طوارقياً في الصحراء الكبرى بكاميرا واحدة وطاقم صغير؟ هذا ما تعلمته.",
      read_time: "6 دقائق"
    },
    en: {
      title: "Sebiba: The Challenge of Filming a 1,500-Year-Old Tradition in the Sahara",
      excerpt: "How do you capture a Tuareg celebration in the middle of the Sahara with a single camera and small crew? Here's what I learned.",
      read_time: "6 min read"
    }
  },
  {
    id: 3,
    slug: "chaoui-wedding-25m-views",
    file: "blog/post-3.html",
    cover: "assets/posters/chaoui.webp",
    date_ar: "سبتمبر 2023",
    date_en: "September 2023",
    youtube: "https://www.youtube.com/watch?v=hL5bWglygDY",
    ar: {
      title: "العرس الشاوي: الطريق من الفكرة إلى 2.5 مليون مشاهدة",
      excerpt: "القصة الكاملة لكيفية إنتاج وثائقي تجاوزت مشاهداته 2.5 مليون على يوتيوب — ما الذي جعله يصل إلى هذا الحجم؟",
      read_time: "10 دقائق"
    },
    en: {
      title: "Chaoui Wedding: The Road from Concept to 2.5 Million Views",
      excerpt: "The full story of how we produced a documentary that reached 2.5 million views on YouTube — what made it resonate so widely?",
      read_time: "10 min read"
    }
  },
  {
    id: 4,
    slug: "radio-and-the-people-algerian-airwaves",
    file: "blog/post-4.html",
    cover: "assets/posters/radio.webp",
    date_ar: "يونيو 2024",
    date_en: "June 2024",
    youtube: "https://www.aljazeera360.com/video/918628",
    ar: {
      title: "الإذاعة والناس: عندما يصبح الصوت وثيقة تاريخية",
      excerpt: "كيف تحوّل وثائقي عن الإذاعة الجزائرية إلى رحلة في الذاكرة الجماعية — دروس في التصوير والبحث الأرشيفي.",
      read_time: "7 دقائق"
    },
    en: {
      title: "Radio and the People: When Sound Becomes a Historical Document",
      excerpt: "How a documentary about Algerian radio became a journey through collective memory — lessons in cinematography and archival research.",
      read_time: "7 min read"
    }
  }
];

// ─── BTS Photos ────────────────────────────────────────────────────────────────
// To add a photo: replace null with the file path, e.g. "assets/images/bts-01.webp"
const BTS_PHOTOS = [
  "assets/images/bts-01.webp",  // 01
  "assets/images/bts-02.webp",  // 02
  "assets/images/bts-3.webp",  // 03
  "assets/images/bts-04.webp",  // 04
  "assets/images/bts-05.webp",  // 05
  "assets/images/bts-06.webp",  // 06
  "assets/images/bts-07.webp",  // 07
  "assets/images/bts-08.webp",  // 08
  "assets/images/bts-09.webp",  // 09
  "assets/images/bts-10.webp",  // 10
];

// Export for use across files
if (typeof module !== "undefined") {
  module.exports = { CONTENT, FILMS, PARTNERS, BOOK, BLOG_POSTS, BTS_PHOTOS };
}
