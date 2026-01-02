// ============================================================
// TRIP CONFIGURATION - SOUTH AFRICA
// ============================================================
// From Prisoner to President in One Generation
// Update images in src/assets/southafrica/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// BASIC INFO
// ============================================================
export const southafricaConfig: TripConfig = {
  countryName: "South Africa",
  slug: "southafrica",
  tagline: "SOUTH AFRICA",
  
  images: {
    hero: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920",
    ctaVideo: undefined,
  },

  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: witnessing triumph and resilience through the people who lived it.",
      "<em>\"Standing in Mandela's cell, then meeting people who fought apartheid and chose forgiveness—I finally understood what resilience becoming excellence actually looks like.\"</em>",
      "Now he helps professionals witness South Africa's triumph story.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should show you what's possible when resilience becomes excellence. Because coming home different isn't about the destination. It's about finally understanding strength.",
    travelerCount: "2,500+",
  },

  hero: {
    headline: "From Prisoner to President in One Generation.",
    subheadline: "This Is South Africa.",
    description: "You've been wanting to witness South Africa's triumph story firsthand. Join Jay Cameron for a journey through the country that went from apartheid to rainbow nation while you were alive to witness it.",
    ctaText: "Join Free South Africa Info Session",
    ctaSubtext: "See the full story",
  },

  story: {
    sectionLabel: "TRIUMPH OVER EVERYTHING",
    headline: "You've Been Wanting to Witness This.",
    paragraphs: [
      "Someday you'll stand in Mandela's cell understanding 27 years of patience. Someday you'll sip wine in Stellenbosch knowing the soil's complicated history. Someday you'll understand how a country went from apartheid to rainbow nation while you were alive to witness it.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to be ready for that much history. Waiting for permission to witness triumph and pain together.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you walking Soweto streets where resistance became renaissance. It costs you standing where two oceans meet at Cape Point. It costs you safari mornings where Africa's big five rule. It costs you understanding resilience through people who lived it, not books about it.",
      "Every year you wait, the witnesses grow fewer. Every year you wait, the stories get diluted. And the lessons South Africa has to teach stay unlearned.",
    ],
    quote: {
      text: "I thought I knew about apartheid. Then I met people who lived it, fought it, and forgave it. South Africa changed my definition of strength.",
      author: "Marcus P.",
      title: "executive",
    },
  },

  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll See the Full Story",
        description: "Not just struggle, not just safari—the complete South African journey from townships to wine country.",
      },
      {
        title: "You'll Understand Why Now Matters",
        description: "Why visiting while the generation who changed everything can still tell their story.",
      },
      {
        title: "You'll Feel the Complexity",
        description: "How South Africa holds triumph and challenge, beauty and history, all at once.",
      },
      {
        title: "You'll Meet Others Ready for Truth",
        description: "Connect with professionals who want the real South Africa, not the tourist version.",
      },
      {
        title: "You'll Know If You're Prepared",
        description: "South Africa is emotionally complex. Tonight shows if you're ready for that depth.",
      },
    ],
  },

  registration: {
    headline: "FREE SOUTH AFRICA INFO SESSION",
    subheadline: "See the full story",
    badge: "100% FREE",
    footerText: "Triumph, resilience, beauty—South Africa is waiting. Next session fills fast.",
    discoverItems: [
      "Complete journey from townships to wine country",
      "Why now matters more than ever",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Triumph session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME",
      identifier: "REPLACE-ME-WITH-SOUTHAFRICA-WEBINAR-ID",
    },
  },

  gallery: {
    sectionLabel: "SOUTH AFRICA TRIUMPH",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800", caption: "Table Mountain Majesty" },
      { image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800", caption: "Soweto Pride" },
      { image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800", caption: "Robben Island History" },
      { image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800", caption: "Wine Country Beauty" },
      { image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800", caption: "Cape Point Where Oceans Meet" },
      { image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800", caption: "Safari Mornings" },
    ],
  },

  testimonials: {
    sectionLabel: "TRAVELERS WHO WITNESSED TRIUMPH",
    headline: "They Came for Safari. They Left Understanding Strength.",
    subheadline: "Imagine yourself in South Africa... witnessing resilience becoming excellence.",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Understanding Strength",
        description: "Meeting people who lived apartheid, fought it, and chose forgiveness.",
        quote: "I thought I knew about apartheid. Then I met people who lived it, fought it, and forgave it. South Africa changed my definition of strength.",
        author: "Marcus P.",
        location: "Executive",
      },
      {
        category: "Feeling Complexity",
        description: "Experiencing how South Africa holds triumph and pain together beautifully.",
        quote: "Wine tasting in lands that once oppressed. Townships that became art districts. South Africa doesn't simplify—it transforms.",
        author: "Angela T.",
        location: "Professor",
      },
      {
        category: "Witnessing History",
        description: "Standing where history happened while the witnesses can still share their stories.",
        quote: "Robben Island with a former prisoner as guide. Soweto with someone who marched. The stories are alive. Go while they still are.",
        author: "David K.",
        location: "Attorney",
      },
      {
        category: "Embracing Beauty",
        description: "Discovering that South Africa's natural beauty makes emotional depth easier to process.",
        quote: "Table Mountain at sunset after a heavy day in Soweto. South Africa knows how to hold you. Every hard moment has a beautiful release.",
        author: "Patricia R.",
        location: "Healthcare Executive",
      },
    ],
  },

  destinations: {
    sectionLabel: "WHERE TRIUMPH LIVES",
    headline: "Your South Africa Journey",
    items: [
      { name: "Cape Town", description: "Beauty & Complexity", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" },
      { name: "Soweto", description: "Resistance & Renaissance", image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800" },
      { name: "Robben Island", description: "Prison to Monument", image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800" },
      { name: "Wine Country", description: "Sophistication & History", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800" },
    ],
  },

  finalCta: {
    sectionLabel: "TRIUMPH IS WAITING",
    headline: "The Witnesses Are Still Here.",
    subheadline: "Don't Wait Until They're Not.",
    description: "Join the free South Africa Info Session and discover what it means to witness resilience becoming excellence.",
    ctaText: "Join Free South Africa Info Session",
    ctaSubtext: "From prisoner to president",
  },

  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the South Africa Experience with Maximum Impact Travel different?",
        answer: "You get the full story, not just safari. The Maximum Impact team connects you with people who lived the history, takes you from townships to wine country, and shows you how South Africa holds triumph and complexity together.",
      },
      {
        question: "Do I need a visa to visit South Africa?",
        answer: "US citizens get 90 days visa-free. Just arrive with your passport and at least two blank pages.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many travelers come alone and leave with friends who understand why South Africa's story matters. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Hotels, daily breakfast, activities, transportation, and guided experiences from Robben Island to Soweto to wine country. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore Cape Town, shop, and process what you're experiencing at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see the full South African journey—triumph and complexity together. You'll understand why now matters and know if you're ready for that depth.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, the witnesses grow fewer. Every year you wait, the stories get diluted. If you want to meet the generation who changed everything, go now.",
      },
    ],
  },
};
