// ============================================================
// TRIP CONFIGURATION - LONDON + PARIS
// ============================================================
// Your People Are Building Empires in Europe.
// Update images in src/assets/blp/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// BASIC INFO
// ============================================================
export const blpConfig: TripConfig = {
  countryName: "London + Paris",
  slug: "blp",
  tagline: "LONDON + PARIS",
  
  images: {
    hero: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920",
    ctaVideo: undefined,
  },

  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: seeing Black excellence thriving everywhere.",
      "<em>\"Walking through Brixton's renaissance, sitting in the cafés where Baldwin and Baker became legends—I finally understood that our people are building empires in Europe, and always have been.\"</em>",
      "Now he helps professionals discover Black London and Black Paris.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should show you excellence thriving across the Atlantic. Because coming home different isn't about the destination. It's about finally seeing your people everywhere.",
    travelerCount: "2,500+",
  },

  hero: {
    headline: "Your People Are Building Empires in Europe.",
    subheadline: "Black London. Black Paris.",
    description: "You know London and Paris. You don't know Black London and Black Paris. Join Jay Cameron to discover how Black excellence shapes Europe's greatest cities.",
    ctaText: "Join Free London + Paris Info Session",
    ctaSubtext: "See excellence everywhere",
  },

  story: {
    sectionLabel: "BUILDING EMPIRES ABROAD",
    headline: "You Know These Cities. Not Like This.",
    paragraphs: [
      "Someday you'll understand how the Windrush generation rebuilt Britain. Someday you'll sit where Josephine Baker became royalty and Baldwin found his voice. Someday you'll see how Black excellence shapes Europe's greatest cities.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to feel sophisticated enough. Waiting for permission to claim space in European capitals.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you Brixton's renaissance and Notting Hill's real story. It costs you African restaurants earning Michelin stars. It costs you understanding how Black British and Black French culture lead global trends. It costs you seeing your people thriving where they said we couldn't.",
      "Every year you wait, another year of incomplete Europe. Every year you wait, excellence goes unwitnessed. And European success stories stay untold.",
    ],
    quote: {
      text: "I've been to London five times. This was my first time seeing Black London. The creativity, success, and influence—hiding in plain sight.",
      author: "Gregory H.",
      title: "marketing director",
    },
  },

  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll See Excellence Everywhere",
        description: "From afternoon tea to jazz clubs, West End to Latin Quarter—Black influence shapes it all.",
      },
      {
        title: "You'll Understand Both Cities' Stories",
        description: "How London and Paris became Black cultural capitals differently.",
      },
      {
        title: "You'll Experience Premium Europe",
        description: "Luxury hotels, fine dining, theater—excellence celebrating excellence.",
      },
      {
        title: "You'll Meet Sophisticated Travelers",
        description: "Join professionals who appreciate culture with champagne.",
      },
      {
        title: "You'll Know Your Europe",
        description: "This reveals if you're ready to see Europe through accomplished African eyes.",
      },
    ],
  },

  registration: {
    headline: "FREE LONDON + PARIS INFO SESSION",
    subheadline: "See excellence everywhere",
    badge: "100% FREE",
    footerText: "Black excellence in Europe's greatest cities. Your journey is waiting.",
    discoverItems: [
      "Black London & Black Paris revealed",
      "Complete luxury journey details",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Excellence session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME",
      identifier: "REPLACE-ME-WITH-BLP-WEBINAR-ID",
    },
  },

  gallery: {
    sectionLabel: "BLACK EXCELLENCE IN EUROPE",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800", caption: "Brixton Renaissance" },
      { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", caption: "Paris Jazz Clubs" },
      { image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800", caption: "West End Theater" },
      { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", caption: "Latin Quarter Cafés" },
      { image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800", caption: "Michelin Excellence" },
      { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", caption: "Seine Dinner Cruises" },
    ],
  },

  testimonials: {
    sectionLabel: "TRAVELERS WHO SAW EXCELLENCE",
    headline: "They Knew Europe. Not Like This.",
    subheadline: "Imagine yourself seeing Black excellence thriving in Europe's greatest cities...",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Seeing New Cities",
        description: "Discovering the Black London and Black Paris that tourist guides skip.",
        quote: "I've been to London five times. This was my first time seeing Black London. The creativity, success, and influence—hiding in plain sight.",
        author: "Gregory H.",
        location: "Marketing Director",
      },
      {
        category: "Understanding History",
        description: "Learning how Windrush and jazz made these cities what they are.",
        quote: "Josephine Baker's Paris. The Windrush generation's London. I finally understood why Black culture shapes everything here.",
        author: "Patricia M.",
        location: "Executive",
      },
      {
        category: "Experiencing Premium",
        description: "Enjoying luxury while celebrating excellence.",
        quote: "Michelin restaurants run by Africans. Theater celebrating Black British stories. This is how to see Europe.",
        author: "Marcus T.",
        location: "Entrepreneur",
      },
      {
        category: "Feeling Belonging",
        description: "Discovering that Black excellence has always belonged in these spaces.",
        quote: "Afternoon tea. West End shows. Champagne on the Seine. This wasn't tourism—it was claiming space that's always been ours.",
        author: "Denise K.",
        location: "Investment Banker",
      },
    ],
  },

  destinations: {
    sectionLabel: "WHERE EXCELLENCE LIVES",
    headline: "Your London + Paris Journey",
    items: [
      { name: "Brixton", description: "Renaissance & Innovation", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800" },
      { name: "Notting Hill", description: "The Real Story", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800" },
      { name: "Latin Quarter", description: "Where Baldwin Wrote", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
      { name: "Montmartre", description: "Baker's Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
    ],
  },

  finalCta: {
    sectionLabel: "EXCELLENCE IS WAITING",
    headline: "Stop Seeing Tourist Europe.",
    subheadline: "See Your People Thriving.",
    description: "Join the free London + Paris Info Session and discover Black excellence building empires in Europe's greatest cities.",
    ctaText: "Join Free London + Paris Info Session",
    ctaSubtext: "Thriving across the Atlantic",
  },

  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the London + Paris Experience with Maximum Impact Travel different?",
        answer: "You get Black excellence, not just tourism. The Maximum Impact team takes you through Brixton, Notting Hill, the Latin Quarter, and places tourists never see. Everything's planned so you can witness your people thriving.",
      },
      {
        question: "Do I need a visa for UK and France?",
        answer: "US citizens don't need visas for tourist visits up to 90 days in UK and Schengen area.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many travelers come alone and leave with friends who appreciate culture and excellence. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Luxury hotels, daily breakfast, activities, Eurostar between cities, and curated experiences from theater to fine dining. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore, shop, and experience both cities at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see Black London and Black Paris—how excellence shapes Europe's greatest cities. You'll understand both stories and know if you're ready.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, another year of incomplete Europe. If you want to see your people thriving abroad, you're ready. Stop waiting.",
      },
    ],
  },
};
