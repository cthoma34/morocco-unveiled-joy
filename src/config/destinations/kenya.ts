// ============================================================
// TRIP CONFIGURATION - KENYA + ZANZIBAR
// ============================================================
// Silicon Savannah Meets Spice Island Paradise
// Update images in src/assets/kenya/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// BASIC INFO
// ============================================================
export const kenyaConfig: TripConfig = {
  countryName: "Kenya + Zanzibar",
  slug: "kenya",
  tagline: "KENYA + ZANZIBAR",
  
  images: {
    hero: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920",
    ctaVideo: undefined,
  },

  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: experiencing Africa's full range, not just the documentary version.",
      "<em>\"Seeing giraffes with Nairobi's tech skyline behind them, then transitioning to Zanzibar's turquoise peace—I finally understood Africa's range is wider than anyone imagines.\"</em>",
      "Now he helps professionals discover the Africa they didn't know existed.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should challenge your assumptions about what's possible. Because coming home different isn't about the destination. It's about finally seeing Africa as it actually is.",
    travelerCount: "2,500+",
  },

  hero: {
    headline: "Silicon Savannah Meets Spice Island Paradise.",
    subheadline: "The Africa You Didn't Know.",
    description: "You think you know Kenya from documentaries. You don't. Join Jay Cameron to discover tech hubs and ancient wisdom, safari dust and turquoise waters—Africa's full spectrum.",
    ctaText: "Join Free Kenya + Zanzibar Info Session",
    ctaSubtext: "See Africa's real range",
  },

  story: {
    sectionLabel: "THE AFRICA NOBODY SHOWS YOU",
    headline: "You Think You Know Kenya. You Don't.",
    paragraphs: [
      "Someday you'll see Nairobi's tech scene thriving while giraffes graze in the background. Someday you'll transition from safari dust to Zanzibar's turquoise waters. Someday you'll understand why Kenya is building Africa's future while preserving its past.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to be ready for that much range. Waiting for permission to be surprised by Africa.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you feeding giraffes with the city skyline behind them. It costs you discovering Nairobi's innovation hubs. It costs you Stone Town's carved doors telling centuries of stories. It costs you learning that Africa's range is wider than you imagined.",
      "Every year you wait, Kenya advances without you witnessing it. Every year you wait, you miss Africa's real story. And your outdated image of the continent stays unchallenged.",
    ],
    quote: {
      text: "I expected animals and beaches. I discovered tech hubs and ancient wisdom. Kenya and Zanzibar showed me Africa's full spectrum.",
      author: "Jennifer T.",
      title: "tech investor",
    },
  },

  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll See the Kenya Nobody Shows You",
        description: "Tech hubs, innovation centers, modern Nairobi—alongside the wildlife you expect.",
      },
      {
        title: "You'll Understand the Perfect Pairing",
        description: "Why Kenya's energy needs Zanzibar's peace for complete transformation.",
      },
      {
        title: "You'll Experience the Range",
        description: "From Maasai traditions to Swahili culture, safari mornings to spice tours.",
      },
      {
        title: "You'll Meet Modern Africa Explorers",
        description: "Join professionals ready to see Africa as it actually is.",
      },
      {
        title: "You'll Feel the Shift Coming",
        description: "From hustle to peace, from wild to serene—the journey's rhythm revealed.",
      },
    ],
  },

  registration: {
    headline: "FREE KENYA + ZANZIBAR INFO SESSION",
    subheadline: "See Africa's real range",
    badge: "100% FREE",
    footerText: "Tech meets tradition. Safari meets sea. Kenya + Zanzibar is waiting.",
    discoverItems: [
      "The Kenya nobody shows you",
      "Complete journey from Nairobi to Zanzibar",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Discovery session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME",
      identifier: "REPLACE-ME-WITH-KENYA-WEBINAR-ID",
    },
  },

  gallery: {
    sectionLabel: "KENYA + ZANZIBAR RANGE",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800", caption: "Giraffes & Skylines" },
      { image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800", caption: "Nairobi Tech Scene" },
      { image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800", caption: "Maasai Traditions" },
      { image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800", caption: "Stone Town Doors" },
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", caption: "Zanzibar Paradise" },
      { image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800", caption: "Spice Tours" },
    ],
  },

  testimonials: {
    sectionLabel: "TRAVELERS WHO SAW THE RANGE",
    headline: "They Expected Documentaries. They Got Reality.",
    subheadline: "Imagine yourself discovering Africa's full spectrum...",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Seeing Reality",
        description: "Discovering the Africa that challenges every assumption you brought.",
        quote: "I expected animals and beaches. I discovered tech hubs and ancient wisdom. Kenya and Zanzibar showed me Africa's full spectrum.",
        author: "Jennifer T.",
        location: "Tech Investor",
      },
      {
        category: "Feeling the Shift",
        description: "Experiencing how Kenya's energy transitions perfectly to Zanzibar's peace.",
        quote: "Safari adrenaline to Zanzibar calm. The pairing makes both experiences deeper. You need both.",
        author: "Marcus R.",
        location: "Executive",
      },
      {
        category: "Updating Assumptions",
        description: "Finally seeing Africa as it actually is, not as documentaries show it.",
        quote: "My image of Africa was 20 years outdated. Kenya's innovation alongside Zanzibar's history—this is what Africa actually is.",
        author: "David L.",
        location: "Entrepreneur",
      },
      {
        category: "Finding Connection",
        description: "Discovering the rhythm of both modern hustle and ancient peace.",
        quote: "Nairobi showed me Africa's future. Zanzibar showed me its timeless soul. Maximum Impact Travel understood I needed both.",
        author: "Angela K.",
        location: "Creative Director",
      },
    ],
  },

  destinations: {
    sectionLabel: "WHERE RANGE LIVES",
    headline: "Your Kenya + Zanzibar Journey",
    items: [
      { name: "Nairobi", description: "Silicon Savannah", image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800" },
      { name: "Maasai Mara", description: "Wildlife & Tradition", image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800" },
      { name: "Stone Town", description: "Carved Doors & History", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800" },
      { name: "Zanzibar Beaches", description: "Turquoise Peace", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
    ],
  },

  finalCta: {
    sectionLabel: "AFRICA'S RANGE IS WAITING",
    headline: "Stop Believing Documentaries.",
    subheadline: "See Africa for Yourself.",
    description: "Join the free Kenya + Zanzibar Info Session and discover what happens when tech meets tradition and safari meets sea.",
    ctaText: "Join Free Kenya + Zanzibar Info Session",
    ctaSubtext: "The Africa you didn't know existed",
  },

  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Kenya + Zanzibar Experience different?",
        answer: "You get Africa's full range, not just safari. The Maximum Impact team shows you Nairobi's tech scene, Maasai traditions, Stone Town's history, and Zanzibar's peace. Everything's planned so you can experience the spectrum.",
      },
      {
        question: "Do I need a visa to visit Kenya?",
        answer: "Yes. Kenya requires an eTA (electronic travel authorization) for US citizens. Simple online process we'll guide you through.",
      },
      {
        question: "Do I need a visa for Zanzibar?",
        answer: "Zanzibar is part of Tanzania. US citizens need a visa—available on arrival or online. We handle the guidance.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many travelers come alone and leave with friends who share their new understanding of Africa. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Hotels, daily breakfast, activities, transportation, safari experiences, and Zanzibar relaxation. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore Nairobi, enjoy Zanzibar beaches, and experience both destinations at your own pace.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, your outdated image of Africa stays unchallenged. If you're ready to see what's really happening, you're ready. Stop waiting.",
      },
    ],
  },
};
