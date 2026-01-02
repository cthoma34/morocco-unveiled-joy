// ============================================================
// TRIP CONFIGURATION - BRAZIL
// ============================================================
// Africa Never Left. It Just Moved Across the Ocean.
// Update images in src/assets/brazil/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// BASIC INFO
// ============================================================
export const brazilConfig: TripConfig = {
  countryName: "Brazil",
  slug: "brazil",
  tagline: "BRAZIL",
  
  images: {
    hero: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920",
    ctaVideo: undefined,
  },

  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: experiencing how Africa survived everywhere it was taken.",
      "<em>\"Watching capoeira circles in Salvador, experiencing Candomblé where Yoruba gods survived—I finally understood that Africa never died in Brazil. It transformed into something powerful.\"</em>",
      "Now he helps professionals discover Africa's diaspora survival story.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should show you how Africa survived everything. Because coming home different isn't about the destination. It's about finally understanding joy as resistance.",
    travelerCount: "2,500+",
  },

  hero: {
    headline: "Africa Never Left.",
    subheadline: "It Just Moved Across the Ocean.",
    description: "You know Brazil has the largest African diaspora outside Africa. But knowing isn't feeling. Join Jay Cameron to discover how enslaved Africans transformed suffering into samba, resistance into rhythm.",
    ctaText: "Join Free Brazil Info Session",
    ctaSubtext: "Where Africa lives loudest",
  },

  story: {
    sectionLabel: "JOY AS RESISTANCE",
    headline: "You Know About Brazil. You Haven't Felt It.",
    paragraphs: [
      "Someday you'll watch capoeira understanding it was fighting disguised as dancing. Someday you'll experience Salvador where Yoruba gods survived Catholic conversion. Someday you'll understand how enslaved Africans transformed suffering into samba, resistance into rhythm.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to be ready for that much history. Waiting for permission to celebrate survival.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you standing at Valongo Wharf where two million Africans entered Brazil. It costs you experiencing Candomblé ceremonies keeping Africa alive. It costs you Salvador's Pelourinho where every building holds memory. It costs you understanding how Africa's rhythm became Brazil's heartbeat.",
      "Every year you wait, connections fade. Every year you wait, traditions modernize. And the African Brazil that survived everything risks being forgotten.",
    ],
    quote: {
      text: "I went to see Christ the Redeemer. I discovered Africa never died in Brazil—it transformed into something powerful.",
      author: "Robert K.",
      title: "musician",
    },
  },

  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll See Africa in Brazil",
        description: "Not just influences—living African culture that survived 500 years.",
      },
      {
        title: "You'll Understand the Numbers",
        description: "Why Brazil received more enslaved Africans than anywhere else and what survived.",
      },
      {
        title: "You'll Feel the Rhythm",
        description: "How drums they tried to ban became the soundtrack of a nation.",
      },
      {
        title: "You'll Meet Others Seeking Connection",
        description: "Join professionals exploring the diaspora's strongest survival story.",
      },
      {
        title: "You'll Know If You're Ready",
        description: "Brazil's African story isn't subtle. Tonight shows if you're prepared for that intensity.",
      },
    ],
  },

  registration: {
    headline: "FREE BRAZIL INFO SESSION",
    subheadline: "Where Africa lives loudest",
    badge: "100% FREE",
    footerText: "Drums they couldn't silence. Culture that survived. Brazil is waiting.",
    discoverItems: [
      "Africa's survival in Brazil",
      "Complete Salvador + Rio journey",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Survival session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME",
      identifier: "REPLACE-ME-WITH-BRAZIL-WEBINAR-ID",
    },
  },

  gallery: {
    sectionLabel: "BRAZIL'S AFRICAN SOUL",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800", caption: "Salvador's Pelourinho" },
      { image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800", caption: "Capoeira Circles" },
      { image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800", caption: "Candomblé Ceremonies" },
      { image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800", caption: "Favela Creativity" },
      { image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800", caption: "Samba Rhythms" },
      { image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800", caption: "Christ Overlooking All" },
    ],
  },

  testimonials: {
    sectionLabel: "TRAVELERS WHO FELT AFRICA IN BRAZIL",
    headline: "They Came for Carnival. They Found Survival.",
    subheadline: "Imagine yourself discovering how Africa survived across the Atlantic...",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Feeling Survival",
        description: "Discovering that Africa didn't just survive in Brazil—it transformed into something powerful.",
        quote: "I went to see Christ the Redeemer. I discovered Africa never died in Brazil—it transformed into something powerful.",
        author: "Robert K.",
        location: "Musician",
      },
      {
        category: "Understanding Resistance",
        description: "Seeing how capoeira, samba, and Candomblé were all forms of survival.",
        quote: "Capoeira was fighting they called dancing. Candomblé was faith they disguised as Catholicism. Everything was survival.",
        author: "Angela T.",
        location: "Professor",
      },
      {
        category: "Connecting History",
        description: "Standing where millions arrived and seeing what they created despite everything.",
        quote: "Valongo Wharf broke me. Then Salvador rebuilt me. Understanding what survived the crossing—that's transformative.",
        author: "Marcus L.",
        location: "Executive",
      },
      {
        category: "Celebrating Joy",
        description: "Understanding that joy itself became the ultimate act of resistance.",
        quote: "Samba isn't just music. It's victory. They tried to break everything, and the response was the most joyful culture on earth.",
        author: "Denise K.",
        location: "Artist",
      },
    ],
  },

  destinations: {
    sectionLabel: "WHERE AFRICA SURVIVED",
    headline: "Your Brazil Journey",
    items: [
      { name: "Salvador", description: "Africa's Heartbeat", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800" },
      { name: "Pelourinho", description: "Memory in Every Stone", image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800" },
      { name: "Rio de Janeiro", description: "Triumph Over All", image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800" },
      { name: "Valongo Wharf", description: "Where They Arrived", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800" },
    ],
  },

  finalCta: {
    sectionLabel: "AFRICA IS WAITING",
    headline: "Stop Reading About Survival.",
    subheadline: "Feel It for Yourself.",
    description: "Join the free Brazil Info Session and discover how Africa transformed suffering into the world's most joyful culture.",
    ctaText: "Join Free Brazil Info Session",
    ctaSubtext: "Joy as resistance",
  },

  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Brazil Experience with Maximum Impact Travel different?",
        answer: "You get Africa's survival story, not just tourism. The Maximum Impact team takes you beyond carnival to capoeira circles, Candomblé ceremonies, and the real Salvador. Everything's planned so you can feel what survived.",
      },
      {
        question: "Do I need a visa to visit Brazil?",
        answer: "US citizens need a visa for Brazil. You can apply online for an e-visa. We provide full guidance.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many travelers come alone and leave with friends who understand why Africa's survival matters. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Hotels, daily breakfast, activities, transportation, and cultural experiences from capoeira to Candomblé. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore Salvador, experience Rio, and process what you're discovering at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see Africa in Brazil—living culture that survived 500 years. You'll understand the numbers and know if you're ready for that intensity.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, connections fade. Every year you wait, traditions modernize. If you want to experience Africa's survival story, go now.",
      },
    ],
  },
};
