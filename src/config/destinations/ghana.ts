// ============================================================
// TRIP CONFIGURATION - GHANA
// ============================================================
// Building Futures, Not Mourning Pasts
// Update images in src/assets/ghana/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// TODO: Add Ghana-specific image imports here
// Example:
// import heroVideo from "@/assets/ghana/hero-accra.mp4";
// import compoundBuilding from "@/assets/ghana/compound-building.jpg";
// ============================================================

// ============================================================
// BASIC INFO
// ============================================================
export const ghanaConfig: TripConfig = {
  // Country/Trip name (used throughout the page)
  countryName: "Ghana",
  
  // URL slug for routing
  slug: "ghana",
  
  // Tagline shown in hero
  tagline: "GHANA",
  
  // ============================================================
  // IMAGES (External URLs or imported images)
  // Replace these with your actual hero/host/CTA images
  // ============================================================
  images: {
    hero: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=1920",
    ctaVideo: undefined,
  },

  // ============================================================
  // HOST INFO
  // ============================================================
  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: connection to something deeper than conference rooms.",
      "<em>\"Standing in Ghana, watching professionals receive their Akan names from elders, watching them break ground on their compounds—I finally understood what 'building legacy' actually means.\"</em>",
      "Now he helps professionals stop talking about Africa and start building in it.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should be the beginning of something permanent. Because coming home different isn't about the destination. It's about finally building what you've been dreaming about.",
    travelerCount: "2,500+",
  },

  // ============================================================
  // HERO SECTION
  // ============================================================
  hero: {
    headline: "What If Your Future Had an Address in Africa?",
    subheadline: "Stop Talking. Start Building.",
    description: "You've been talking about building something in Africa for years. Join Jay Cameron to discover how successful professionals are establishing their African base—not just visiting.",
    ctaText: "Join Free Ghana Info Session",
    ctaSubtext: "See real opportunities tonight",
  },

  // ============================================================
  // STORY SECTION
  // ============================================================
  story: {
    sectionLabel: "BUILDING FUTURES, NOT MOURNING PASTS",
    headline: "You've Been Talking About This for Years.",
    paragraphs: [
      "Someday you'll walk through your own compound in Ghana. Someday you'll have that base in Africa you keep dreaming about. Someday you'll understand why successful professionals are building their futures here, not just visiting.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting for the market to be perfect. Waiting for permission you don't actually need.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you watching others build while you research. It costs you the naming ceremony where elders give you your Akan name—your permanent connection. It costs you standing in the Door of Return knowing you can actually return. It costs you discovering Ghana is about your future, not just history.",
      "Every year you wait, plots get more expensive. Every year you wait, others establish what you're still considering. And the version of yourself ready to build something permanent keeps waiting, too.",
    ],
    quote: {
      text: "I came to explore. I left with land and a plan. Ghana showed me the difference between visiting Africa and building in Africa.",
      author: "David M.",
      title: "returning investor",
    },
  },

  // ============================================================
  // FEATURES SECTION (Why This Info Session Matters)
  // ============================================================
  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll See Real Estate Opportunities",
        description: "Actual plots, real prices, success stories from diaspora who've already built. Not theory—real opportunities.",
      },
      {
        title: "You'll Understand the Building Process",
        description: "Timelines, costs, trusted partners, what \"building not owning\" really means for diaspora investors.",
      },
      {
        title: "You'll Meet Others Ready to Build",
        description: "Connect with professionals who aren't just dreaming—they're ready to establish their African base.",
      },
      {
        title: "You'll Get Your Questions Answered",
        description: "The visa, the process, the investment, the timeline. Real answers from someone who's guided hundreds through this.",
      },
      {
        title: "You'll Decide Tonight or Wait Another Year",
        description: "Ghana opportunities close at midnight. After that, another year of watching others build what you're still considering.",
      },
    ],
  },

  // ============================================================
  // REGISTRATION FORM
  // ============================================================
  registration: {
    headline: "FREE GHANA INFO SESSION",
    subheadline: "See real opportunities tonight",
    badge: "100% FREE",
    footerText: "Your future address in Africa is waiting. Next session fills fast.",
    discoverItems: [
      "Real estate opportunities & pricing",
      "The building process explained",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Building futures session",
    // WebinarGeek settings (TODO: update for Ghana webinar)
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME", // TODO: Replace with Ghana webinar function
      identifier: "REPLACE-ME-WITH-GHANA-WEBINAR-ID", // TODO: Replace with Ghana webinar ID
    },
  },

  // ============================================================
  // GALLERY SECTION
  // TODO: Replace with actual Ghana images
  // ============================================================
  gallery: {
    sectionLabel: "BUILDING IN GHANA",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=800", caption: "Modern Accra Skyline" },
      { image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800", caption: "Meeting with Chiefs" },
      { image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800", caption: "Land Opportunities" },
      { image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800", caption: "Naming Ceremonies" },
      { image: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=800", caption: "Construction Sites" },
      { image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800", caption: "Cultural Connections" },
      { image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800", caption: "Drumming Circles" },
      { image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800", caption: "Door of Return" },
    ],
  },

  // ============================================================
  // TESTIMONIALS SECTION
  // ============================================================
  testimonials: {
    sectionLabel: "BUILDERS WHO WENT BEFORE YOU",
    headline: "They Came to Visit. They Left Building.",
    subheadline: "Imagine yourself in Ghana... not as a tourist, but as someone establishing their African future.",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Building Legacy",
        description: "Walking through their own compound, finally turning dreams into addresses.",
        quote: "I came to explore. I left with land and a plan. Ghana showed me the difference between visiting Africa and building in Africa.",
        author: "David M.",
        location: "Investor",
      },
      {
        category: "Receiving Identity",
        description: "The naming ceremony where elders gave them their Akan name—permanent connection.",
        quote: "When the chief gave me my name, I finally understood what 'coming home' means. Now I have a reason to return.",
        author: "Michelle T.",
        location: "Executive",
      },
      {
        category: "Taking Action",
        description: "Watching others build while finally deciding to stop researching and start doing.",
        quote: "I'd been researching for five years. One week in Ghana with Jay and I finally stopped talking and started building.",
        author: "Robert K.",
        location: "Entrepreneur",
      },
      {
        category: "Creating Future",
        description: "Understanding that Ghana isn't about the past—it's about what you're building next.",
        quote: "The dungeons were one day. The rest was about my future. That's what nobody tells you about Ghana.",
        author: "Angela S.",
        location: "Professional",
      },
    ],
  },

  // ============================================================
  // DESTINATIONS SECTION
  // TODO: Replace with actual Ghana destination images
  // ============================================================
  destinations: {
    sectionLabel: "WHERE YOU'LL BUILD",
    headline: "Your Ghana Journey",
    items: [
      { name: "Accra", description: "Modern Power & Opportunities", image: "https://images.unsplash.com/photo-1580746738764-5196674aa4db?w=800" },
      { name: "Cape Coast", description: "History & Reckoning", image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800" },
      { name: "Kumasi", description: "Culture & Chiefs", image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800" },
      { name: "Eastern Region", description: "Land & Development", image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800" },
    ],
  },

  // ============================================================
  // FINAL CTA SECTION
  // ============================================================
  finalCta: {
    sectionLabel: "YOUR FUTURE IS WAITING",
    headline: "Stop Talking About Africa.",
    subheadline: "Start Building in It.",
    description: "Join the free Ghana Info Session and discover how to establish your African base—not just visit it.",
    ctaText: "Join Free Ghana Info Session",
    ctaSubtext: "Building futures, not mourning pasts",
  },

  // ============================================================
  // FAQ SECTION
  // ============================================================
  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Ghana Experience with Maximum Impact Travel different?",
        answer: "You get building opportunities, not just tourism. The Maximum Impact team guides you through real estate, naming ceremonies, and connections most visitors never access. Everything's planned so you can focus on establishing your future.",
      },
      {
        question: "Do I need a visa to visit Ghana?",
        answer: "Yes. Ghana requires visas for US citizens. We guide you through the entire process—it's simpler than you think.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many builders come alone and leave with new connections who understand why establishing an African base matters. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Hotels, daily breakfast, activities, transportation, and guided experiences with real estate partners and cultural leaders. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore opportunities, meet with partners, and experience Ghana at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see real estate opportunities, understand the building process, and meet others ready to establish their African base. You'll know if you're ready to stop talking and start building.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, plots get more expensive. Every year you wait, others establish what you're still considering. If you're asking, you're ready. Stop waiting.",
      },
    ],
  },
};
