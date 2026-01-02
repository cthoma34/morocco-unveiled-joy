// ============================================================
// TRIP CONFIGURATION - GULLAH GEECHEE
// ============================================================
// Africa Survived in America. Hidden in Plain Sight.
// Update images in src/assets/gullah/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// BASIC INFO
// ============================================================
export const gullahConfig: TripConfig = {
  countryName: "Gullah Geechee",
  slug: "gullah",
  tagline: "GULLAH GEECHEE",
  
  images: {
    hero: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920",
    ctaVideo: undefined,
  },

  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: finding Africa where you least expect it.",
      "<em>\"Watching sweetgrass baskets woven with techniques from Sierra Leone, hearing language that survived the Middle Passage—I finally understood that Africa never left America. It was hiding in plain sight.\"</em>",
      "Now he helps professionals discover Africa in America.",
    ],
    philosophy: "His philosophy: Travel shouldn't require a passport to transform you. Sometimes heritage is closer than you think. Because coming home different isn't about the destination. It's about finally seeing what was always there.",
    travelerCount: "2,500+",
  },

  hero: {
    headline: "Africa Survived in America.",
    subheadline: "Hidden in Plain Sight.",
    description: "You've been to Charleston and Savannah. But you've never really seen them. Join Jay Cameron to discover how the Gullah Geechee preserved African languages, traditions, and culture on American soil.",
    ctaText: "Join Free Gullah Geechee Info Session",
    ctaSubtext: "Africa in America",
  },

  story: {
    sectionLabel: "HERITAGE HIDING IN PLAIN SIGHT",
    headline: "You've Been There. You Haven't Seen It.",
    paragraphs: [
      "Someday you'll understand how the Gullah Geechee preserved African languages on American soil. Someday you'll watch sweetgrass baskets being woven with techniques from Sierra Leone. Someday you'll taste rice dishes that survived the Middle Passage in braided hair.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to be ready for heritage so close to home. Waiting for permission to discover Africa in America.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you Penn Center where MLK planned the movement. It costs you Sapelo Island's community fighting to preserve what slavery couldn't kill. It costs you First African Baptist Church's Underground Railroad beneath your feet. It costs you discovering Africa survived in your own backyard.",
      "Every year you wait, another tradition holder passes. Every year you wait, development threatens sacred land. And America's strongest African retention stays hidden.",
    ],
    quote: {
      text: "I traveled to Africa to find my heritage. Then Gullah Geechee showed me it never left. It was here, preserved, waiting.",
      author: "Monica R.",
      title: "attorney",
    },
  },

  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll Discover Hidden Heritage",
        description: "African retention you never learned about in American history.",
      },
      {
        title: "You'll Understand the Preservation",
        description: "How isolation preserved what integration might have erased.",
      },
      {
        title: "You'll See Living Culture",
        description: "Not museums—communities still speaking, cooking, weaving Africa.",
      },
      {
        title: "You'll Meet Others Seeking American Africa",
        description: "Join professionals discovering heritage doesn't require a passport.",
      },
      {
        title: "You'll Know If You're Ready",
        description: "This challenges what you know about American history. Tonight shows if you're prepared.",
      },
    ],
  },

  registration: {
    headline: "FREE GULLAH GEECHEE INFO SESSION",
    subheadline: "Africa in America",
    badge: "100% FREE",
    footerText: "Heritage without a passport. Gullah Geechee is waiting.",
    discoverItems: [
      "Hidden African heritage revealed",
      "Complete Sea Islands journey",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Heritage session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME",
      identifier: "REPLACE-ME-WITH-GULLAH-WEBINAR-ID",
    },
  },

  gallery: {
    sectionLabel: "AFRICA IN AMERICA",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", caption: "Sweetgrass Weaving" },
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", caption: "Penn Center History" },
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", caption: "First African Baptist" },
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", caption: "Sapelo Island" },
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", caption: "Traditional Foods" },
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", caption: "Living Culture" },
    ],
  },

  testimonials: {
    sectionLabel: "TRAVELERS WHO FOUND HERITAGE AT HOME",
    headline: "They Looked Abroad. They Found America.",
    subheadline: "Imagine yourself discovering Africa never left...",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Finding Home",
        description: "Discovering that Africa survived right here in America.",
        quote: "I traveled to Africa to find my heritage. Then Gullah Geechee showed me it never left. It was here, preserved, waiting.",
        author: "Monica R.",
        location: "Attorney",
      },
      {
        category: "Seeing Preservation",
        description: "Understanding how isolation protected what might have been erased.",
        quote: "The Sea Islands kept Africa alive because the mainland couldn't reach them. That isolation became preservation. Genius.",
        author: "David K.",
        location: "Professor",
      },
      {
        category: "Meeting Keepers",
        description: "Connecting with those who still speak, cook, and weave Africa.",
        quote: "Sweetgrass baskets woven with Sierra Leone techniques. Rice dishes that crossed the Atlantic in braided hair. This is living heritage.",
        author: "Patricia T.",
        location: "Executive",
      },
      {
        category: "Understanding Urgency",
        description: "Realizing that this heritage is endangered and witnessing it matters now.",
        quote: "Development is threatening Sapelo Island. The elders are aging. This heritage won't wait forever. I'm grateful I went now.",
        author: "Angela M.",
        location: "Historian",
      },
    ],
  },

  destinations: {
    sectionLabel: "WHERE AFRICA SURVIVED",
    headline: "Your Gullah Geechee Journey",
    items: [
      { name: "Charleston", description: "Gateway to Heritage", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" },
      { name: "Penn Center", description: "Where MLK Planned", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" },
      { name: "Sapelo Island", description: "Living Community", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" },
      { name: "Savannah", description: "First African Baptist", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" },
    ],
  },

  finalCta: {
    sectionLabel: "HERITAGE IS WAITING",
    headline: "Stop Looking Abroad.",
    subheadline: "Africa Never Left.",
    description: "Join the free Gullah Geechee Info Session and discover that the heritage you've been seeking is hiding in plain sight.",
    ctaText: "Join Free Gullah Geechee Info Session",
    ctaSubtext: "No passport required",
  },

  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Gullah Geechee Experience with Maximum Impact Travel different?",
        answer: "You get living heritage, not museums. The Maximum Impact team connects you with tradition keepers, takes you to communities still practicing African culture, and reveals the America they never taught you.",
      },
      {
        question: "Do I need special documents?",
        answer: "This is domestic travel. No passport required, just valid US identification.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many travelers come alone and leave with friends who understand why this heritage matters. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Hotels, daily breakfast, activities, transportation, and experiences from Penn Center to Sapelo Island. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore Charleston, Savannah, and the Sea Islands at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll discover hidden African heritage—how Gullah Geechee preserved what the mainland couldn't. You'll understand the preservation and know if you're ready.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, another tradition holder passes. Every year you wait, development threatens sacred land. If you want to see living heritage, go now.",
      },
    ],
  },
};
