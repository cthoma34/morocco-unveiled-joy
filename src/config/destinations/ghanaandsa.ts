// ============================================================
// TRIP CONFIGURATION - GHANA & SOUTH AFRICA REAL ESTATE
// ============================================================
// Two Countries. Two Opportunities. Building African Legacy.
// Update images in src/assets/ghanaandsa/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// BASIC INFO
// ============================================================
export const ghanaandsaConfig: TripConfig = {
  countryName: "Ghana & South Africa",
  slug: "ghanaandsa",
  tagline: "GHANA & SOUTH AFRICA",
  
  images: {
    hero: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=1920",
    ctaVideo: undefined,
  },

  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: building something permanent on the continent.",
      "<em>\"Watching professionals break ground on their compounds in Ghana, seeing them discover Cape Town's investment potential—I finally understood what 'building legacy' actually means.\"</em>",
      "Now he helps professionals stop talking about Africa and start building in it.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should be the beginning of your African portfolio. Because coming home different isn't about the destination. It's about finally building what you've been dreaming about.",
    travelerCount: "2,500+",
  },

  hero: {
    headline: "Two Countries. Two Opportunities.",
    subheadline: "Your African Journey Starts Here.",
    description: "You've been thinking about investing in Africa for years. Join Jay Cameron to discover how successful professionals are establishing themselves on the continent now, not later.",
    ctaText: "Join Free Info Session",
    ctaSubtext: "See real opportunities tonight",
  },

  story: {
    sectionLabel: "BUILD YOUR AFRICAN LEGACY",
    headline: "You've Been Thinking About This for Years.",
    paragraphs: [
      "Someday you'll walk through your own compound in Ghana. Someday you'll own property overlooking Cape Town. Someday you'll understand why successful professionals are establishing themselves on the continent now, not later.",
      "But you keep pushing it off. Waiting for the \"perfect time.\" Waiting for the right opportunity. Waiting while others build what you're still considering.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you watching Ghana transform while you research. It costs you Cape Town's opportunities while you hesitate. It costs you learning how diaspora professionals are building in Accra and investing in the Cape. It costs you discovering these aren't just trips—they're transformation and opportunity combined.",
      "Every year you wait, opportunities change. Every year you wait, others establish what you're considering. And your African connection remains a dream, not reality.",
    ],
    quote: {
      text: "I went to explore. I came back with perspective on both countries and clear next steps. Now I know exactly what's possible.",
      author: "Angela M.",
      title: "returning traveler",
    },
  },

  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll See Real Opportunities",
        description: "What's actually happening in Ghana and South Africa. Not concepts—real examples from those who've already taken action.",
      },
      {
        title: "You'll Understand Both Countries",
        description: "Ghana's building process. South Africa's investment landscape. How professionals approach both.",
      },
      {
        title: "You'll Meet Others Ready to Build",
        description: "Connect with professionals who aren't just dreaming—they're ready to explore African opportunities.",
      },
      {
        title: "You'll Get Your Questions Answered",
        description: "The process, the timeline, the reality. Honest answers from someone who's guided hundreds.",
      },
      {
        title: "You'll Know If You're Ready",
        description: "This journey shows you exactly what's possible. Tonight determines if you're ready to explore it.",
      },
    ],
  },

  registration: {
    headline: "FREE GHANA & SA INFO SESSION",
    subheadline: "See real opportunities tonight",
    badge: "100% FREE",
    footerText: "Two countries, two opportunities. Your African journey starts now.",
    discoverItems: [
      "Real opportunities in both countries",
      "Investment landscape explained",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Investment session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME",
      identifier: "REPLACE-ME-WITH-GHANAANDSA-WEBINAR-ID",
    },
  },

  gallery: {
    sectionLabel: "BUILDING IN AFRICA",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=800", caption: "Ghana Land Opportunities" },
      { image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800", caption: "Cape Town Properties" },
      { image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800", caption: "Meeting with Developers" },
      { image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800", caption: "Cultural Connections" },
    ],
  },

  testimonials: {
    sectionLabel: "INVESTORS WHO WENT BEFORE YOU",
    headline: "They Came to Explore. They Left Building.",
    subheadline: "Imagine yourself discovering opportunities in both Ghana and South Africa...",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Taking Action",
        description: "Finally moving from research to reality across two countries.",
        quote: "I went to explore. I came back with perspective on both countries and clear next steps. Now I know exactly what's possible.",
        author: "Angela M.",
        location: "Investor",
      },
      {
        category: "Seeing Potential",
        description: "Understanding how professionals approach African investment.",
        quote: "Ghana for legacy, South Africa for income. Jay showed me how they work together in a real portfolio.",
        author: "Marcus T.",
        location: "Executive",
      },
      {
        category: "Making Connections",
        description: "Meeting the developers, attorneys, and partners who make it real.",
        quote: "I met more useful contacts in ten days than five years of online research. These are the people who actually make deals happen.",
        author: "David R.",
        location: "Entrepreneur",
      },
      {
        category: "Understanding Both Markets",
        description: "Learning what makes Ghana and South Africa different—and complementary.",
        quote: "They're not the same opportunity. They're complementary ones. Understanding that distinction changed my entire strategy.",
        author: "Patricia K.",
        location: "Financial Advisor",
      },
    ],
  },

  destinations: {
    sectionLabel: "WHERE YOU'LL BUILD",
    headline: "Your Two-Country Journey",
    items: [
      { name: "Accra, Ghana", description: "Legacy & Development", image: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=800" },
      { name: "Cape Town, SA", description: "Investment & Lifestyle", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" },
    ],
  },

  finalCta: {
    sectionLabel: "YOUR JOURNEY AWAITS",
    headline: "Stop Thinking About Africa.",
    subheadline: "Start Building in It.",
    description: "Join the free Ghana & South Africa Info Session and discover what's possible when you stop waiting.",
    ctaText: "Join Free Info Session",
    ctaSubtext: "Two countries, one journey",
  },

  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Ghana & South Africa Experience different?",
        answer: "You get real opportunities, not just tourism. The Maximum Impact team connects you with developers, shows you investment landscapes, and guides you through both countries' processes. Everything's planned so you can focus on opportunities.",
      },
      {
        question: "Do I need a visa to visit Ghana?",
        answer: "Yes. Ghana requires visas for US citizens. We guide you through the entire process.",
      },
      {
        question: "Do I need a visa to visit South Africa?",
        answer: "US citizens get 90 days visa-free in South Africa. Just show up with your passport.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date plus multiple blank pages for stamps.",
      },
      {
        question: "Can Americans invest in Ghana?",
        answer: "Yes, through specific structures. We connect you with professionals who've handled diaspora investments.",
      },
      {
        question: "Can Americans invest in South Africa?",
        answer: "Yes, foreigners can own property in South Africa with some restrictions we'll explain.",
      },
      {
        question: "What will I learn about real estate?",
        answer: "You'll understand both markets, meet key players, see real opportunities, and learn the process for each country.",
      },
      {
        question: "Is this just about real estate?",
        answer: "No. This is a complete Maximum Impact Travel transformation that includes real estate education alongside cultural experiences.",
      },
    ],
  },
};
