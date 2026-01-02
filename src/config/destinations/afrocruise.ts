// ============================================================
// TRIP CONFIGURATION - CARIBBEAN CRUISE
// ============================================================
// Seven Islands. Seven Stories. One Journey Through the African Atlantic.
// Update images in src/assets/afrocruise/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// BASIC INFO
// ============================================================
export const afrocruiseConfig: TripConfig = {
  countryName: "Caribbean Cruise",
  slug: "afrocruise",
  tagline: "CARIBBEAN CRUISE",
  
  images: {
    hero: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920",
    ctaVideo: undefined,
  },

  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: connecting the dots across the African Atlantic.",
      "<em>\"Visiting seven islands and seeing how each one kept Africa alive differently—I finally understood that the Caribbean isn't just paradise. It's seven survival stories.\"</em>",
      "Now he helps professionals discover the Caribbean through African eyes.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should connect the diaspora dots. Because coming home different isn't about the destination. It's about finally understanding how Africa survived across water.",
    travelerCount: "2,500+",
  },

  hero: {
    headline: "Seven Islands. Seven Stories.",
    subheadline: "One Journey Through the African Atlantic.",
    description: "You've vacationed in the Caribbean. But you've never seen it through African eyes. Join Jay Cameron to discover how each island kept Africa alive differently.",
    ctaText: "Join Free Caribbean Cruise Info Session",
    ctaSubtext: "One ship, seven stories",
  },

  story: {
    sectionLabel: "CONNECTING THE DIASPORA DOTS",
    headline: "You've Vacationed Here. You Haven't Really Seen It.",
    paragraphs: [
      "Someday you'll understand how each island kept Africa alive differently. Someday you'll trace the routes that scattered one people across seven nations. Someday you'll see how beaches everyone visits hold stories nobody tells.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to be ready to see paradise differently. Waiting for permission to mix education with vacation.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you Barbados's slavery museum steps from perfect beaches. It costs you discovering rum distilleries that funded empires. It costs you understanding how each island's drums tell different survival stories. It costs you connecting the dots across the African Atlantic.",
      "Every year you wait, another cruise seeing surfaces. Every year you wait, stories stay untold. And the Caribbean remains a postcard, not a profound connection.",
    ],
    quote: {
      text: "I've cruised before. This wasn't that. This was understanding how Africa survived across water. Every port revealed another piece.",
      author: "William T.",
      title: "retired executive",
    },
  },

  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll See Beyond Beaches",
        description: "The heritage sites, cultural connections, and stories that typical cruises skip.",
      },
      {
        title: "You'll Understand Each Island's Story",
        description: "How Tortola, St. Kitts, Barbados, St. Lucia, St. Maarten, and St. Thomas each preserved Africa differently.",
      },
      {
        title: "You'll Learn the Cruise Difference",
        description: "How Maximum Impact Travel transforms a cruise into cultural discovery.",
      },
      {
        title: "You'll Meet Others Who Want More",
        description: "Join professionals who want Caribbean depth, not just Caribbean sun.",
      },
      {
        title: "You'll Know If This Is Your Journey",
        description: "Not every cruise passenger wants this depth. Tonight shows if you do.",
      },
    ],
  },

  registration: {
    headline: "FREE CARIBBEAN CRUISE INFO SESSION",
    subheadline: "One ship, seven stories",
    badge: "100% FREE",
    footerText: "Seven islands. Seven survival stories. Your cruise is waiting.",
    discoverItems: [
      "Seven islands, seven stories",
      "Heritage sites beyond beaches",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Diaspora session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME",
      identifier: "REPLACE-ME-WITH-AFROCRUISE-WEBINAR-ID",
    },
  },

  gallery: {
    sectionLabel: "SEVEN ISLANDS, SEVEN STORIES",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800", caption: "Cruise Luxury" },
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", caption: "Barbados Heritage" },
      { image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800", caption: "St. Lucia Mountains" },
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", caption: "Cultural Performances" },
      { image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800", caption: "Rum History" },
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", caption: "Island Connections" },
    ],
  },

  testimonials: {
    sectionLabel: "CRUISERS WHO SAW DEEPER",
    headline: "They Came for Vacation. They Found Connection.",
    subheadline: "Imagine yourself seeing the Caribbean through African eyes...",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Connecting Dots",
        description: "Understanding how Africa survived across seven different islands.",
        quote: "I've cruised before. This wasn't that. This was understanding how Africa survived across water. Every port revealed another piece.",
        author: "William T.",
        location: "Retired Executive",
      },
      {
        category: "Seeing Depth",
        description: "Discovering the stories that typical cruises skip entirely.",
        quote: "Same beaches, completely different experience. I finally understood why rum exists and what those drums are actually saying.",
        author: "Angela M.",
        location: "Attorney",
      },
      {
        category: "Mixing Learning & Luxury",
        description: "Experiencing cruise luxury while discovering diaspora history.",
        quote: "Heritage by day, luxury by night. Maximum Impact Travel figured out how to do both. Every port taught me something.",
        author: "Marcus K.",
        location: "Executive",
      },
      {
        category: "Finding Heritage",
        description: "Tracing the routes that scattered one people across seven nations.",
        quote: "I thought I knew Caribbean history. Seeing it through African eyes changed everything. Now I understand why each island feels different.",
        author: "Denise R.",
        location: "Professor",
      },
    ],
  },

  destinations: {
    sectionLabel: "SEVEN PORTS, SEVEN STORIES",
    headline: "Your Caribbean Journey",
    items: [
      { name: "Barbados", description: "Where Slavery Was Perfected", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
      { name: "St. Lucia", description: "Maroon Mountains", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800" },
      { name: "St. Kitts", description: "Sugar & Survival", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
      { name: "St. Thomas", description: "Trade Hub History", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800" },
    ],
  },

  finalCta: {
    sectionLabel: "THE DIASPORA IS WAITING",
    headline: "Stop Cruising Surfaces.",
    subheadline: "See What's Really There.",
    description: "Join the free Caribbean Cruise Info Session and discover how one ship and seven ports reveal Africa's survival across water.",
    ctaText: "Join Free Caribbean Cruise Info Session",
    ctaSubtext: "Seven islands, seven stories",
  },

  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Caribbean Cruise with Maximum Impact Travel different?",
        answer: "You get diaspora depth, not just vacation. The Maximum Impact team guides you through heritage sites, cultural connections, and the stories that typical cruises skip. Everything's planned so you can connect the dots.",
      },
      {
        question: "Do I need a visa for the Caribbean?",
        answer: "US citizens don't need visas for any ports on this cruise. Just your passport.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many cruisers come alone and leave with friends who understand why the Caribbean is more than beaches. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Cruise accommodations, meals onboard, port excursions with cultural depth, and guided experiences at each island. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to enjoy beaches, shop, and experience each island at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see beyond beaches—how each island preserved Africa differently. You'll understand the cruise difference and know if you want this depth.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, another cruise seeing surfaces. If you want Caribbean depth, not just Caribbean sun, you're ready. Stop waiting.",
      },
    ],
  },
};
