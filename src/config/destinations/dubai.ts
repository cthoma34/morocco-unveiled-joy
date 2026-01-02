// ============================================================
// TRIP CONFIGURATION - DUBAI
// ============================================================
// Ambition Without Apology
// Update images in src/assets/dubai/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// TODO: Add Dubai-specific image imports here
// Example:
// import heroVideo from "@/assets/dubai/hero-burj.mp4";
// import yachtDinner from "@/assets/dubai/yacht-dinner.jpg";
// ============================================================

// ============================================================
// BASIC INFO
// ============================================================
export const dubaiConfig: TripConfig = {
  // Country/Trip name (used throughout the page)
  countryName: "Dubai",
  
  // URL slug for routing
  slug: "dubai",
  
  // Tagline shown in hero
  tagline: "DUBAI",
  
  // ============================================================
  // IMAGES (External URLs or imported images)
  // Replace these with your actual hero/host/CTA images
  // ============================================================
  images: {
    hero: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920",
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
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: seeing what's possible when vision has no limits.",
      "<em>\"Standing at the top of Burj Khalifa, watching what 50 years of unlimited ambition created from nothing—I finally understood that all my excuses were just excuses.\"</em>",
      "Now he helps professionals stop playing small.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should challenge every limit you've accepted. Because coming home different isn't about the destination. It's about finally understanding what's possible.",
    travelerCount: "2,500+",
  },

  // ============================================================
  // HERO SECTION
  // ============================================================
  hero: {
    headline: "50 Years Ago This Was Desert.",
    subheadline: "Now Look.",
    description: "You've been watching Dubai's impossible rise from afar. Join Jay Cameron to understand why Dubai proves all your excuses are just excuses.",
    ctaText: "Join Free Dubai Info Session",
    ctaSubtext: "See what ambition creates",
  },

  // ============================================================
  // STORY SECTION
  // ============================================================
  story: {
    sectionLabel: "AMBITION WITHOUT APOLOGY",
    headline: "You've Been Playing Too Small.",
    paragraphs: [
      "Someday you'll stand at the top of Burj Khalifa understanding what unlimited ambition creates. Someday you'll meet African millionaires who built empires here. Someday you'll understand why Dubai proves all your excuses are just excuses.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to feel successful enough. Waiting for permission to dream that big.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you sunset from a yacht while Dubai Marina lights up. It costs you walking gold souks where wealth isn't hidden. It costs you meeting African expats who said \"why not me?\" and meant it. It costs you seeing what 50 years of vision can build.",
      "Every year you wait, another year playing small. Every year you wait, another year of reasonable goals. And the version of yourself ready to think bigger stays stuck.",
    ],
    quote: {
      text: "Dubai didn't inspire me. It embarrassed me. If they built this from nothing in 50 years, what's my excuse?",
      author: "Jerome T.",
      title: "tech executive",
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
        title: "You'll See How Africans Thrive in Dubai",
        description: "Meet the expats, hear their stories, understand how they built wealth in the desert.",
      },
      {
        title: "You'll Understand Dubai's Real Power",
        description: "Beyond the glamour—the strategy, the positioning, why money flows here.",
      },
      {
        title: "You'll Feel the Energy Before You Go",
        description: "Dubai footage that shows what ambition without limits actually looks like.",
      },
      {
        title: "You'll Know If You Think Big Enough",
        description: "Dubai isn't for everyone. It's for those ready to stop making excuses.",
      },
      {
        title: "You'll Join Others Who Get It",
        description: "Connect with professionals who see Dubai as inspiration, not intimidation.",
      },
    ],
  },

  // ============================================================
  // REGISTRATION FORM
  // ============================================================
  registration: {
    headline: "FREE DUBAI INFO SESSION",
    subheadline: "See what ambition creates",
    badge: "100% FREE",
    footerText: "50 years from desert to destination. What's your excuse? Next session fills fast.",
    discoverItems: [
      "How Africans build wealth in Dubai",
      "Complete luxury journey details",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Ambition session",
    // WebinarGeek settings (TODO: update for Dubai webinar)
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME", // TODO: Replace with Dubai webinar function
      identifier: "REPLACE-ME-WITH-DUBAI-WEBINAR-ID", // TODO: Replace with Dubai webinar ID
    },
  },

  // ============================================================
  // GALLERY SECTION
  // TODO: Replace with actual Dubai images
  // ============================================================
  gallery: {
    sectionLabel: "DUBAI AMBITION",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800", caption: "Burj Khalifa Views" },
      { image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800", caption: "Yacht Dinners" },
      { image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800", caption: "Desert Luxury" },
      { image: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800", caption: "Gold Souk Negotiations" },
      { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800", caption: "Marina Nights" },
      { image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800", caption: "Flying Dress Shoots" },
      { image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800", caption: "African Expat Success" },
      { image: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800", caption: "Unlimited Ambition" },
    ],
  },

  // ============================================================
  // TESTIMONIALS SECTION
  // ============================================================
  testimonials: {
    sectionLabel: "AMBITIOUS TRAVELERS WHO WENT BEFORE YOU",
    headline: "They Came to See. They Left Thinking Bigger.",
    subheadline: "Imagine yourself in Dubai... not as a tourist, but as someone who finally stops making excuses.",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Thinking Bigger",
        description: "Standing at the top of Burj Khalifa, finally understanding what unlimited ambition creates.",
        quote: "Dubai didn't inspire me. It embarrassed me. If they built this from nothing in 50 years, what's my excuse?",
        author: "Jerome T.",
        location: "Tech Executive",
      },
      {
        category: "Meeting Success",
        description: "Connecting with African millionaires who built empires in the desert.",
        quote: "The Africans I met in Dubai weren't lucky. They just stopped asking for permission. That changed everything.",
        author: "Keisha M.",
        location: "Entrepreneur",
      },
      {
        category: "Owning Luxury",
        description: "Yacht dinners, gold souks, flying dress shoots—finally not apologizing for wanting more.",
        quote: "I used to feel guilty about wanting luxury. Dubai showed me that ambition isn't something to apologize for.",
        author: "Marcus R.",
        location: "Executive",
      },
      {
        category: "Expanding Vision",
        description: "Understanding why money flows to Dubai and what that means for your own positioning.",
        quote: "I came back with a completely different business strategy. Dubai showed me I was thinking too small.",
        author: "Denise L.",
        location: "Business Owner",
      },
    ],
  },

  // ============================================================
  // DESTINATIONS SECTION
  // TODO: Replace with actual Dubai destination images
  // ============================================================
  destinations: {
    sectionLabel: "WHERE AMBITION HAS NO CEILING",
    headline: "Your Dubai Journey",
    items: [
      { name: "Burj Khalifa", description: "The View from the Top", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800" },
      { name: "Dubai Marina", description: "Yacht Life & Nightlife", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800" },
      { name: "Desert Safari", description: "Luxury in the Dunes", image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800" },
      { name: "Gold Souk", description: "Where Wealth Isn't Hidden", image: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800" },
    ],
  },

  // ============================================================
  // FINAL CTA SECTION
  // ============================================================
  finalCta: {
    sectionLabel: "AMBITION IS WAITING",
    headline: "Stop Making Excuses.",
    subheadline: "Start Thinking Bigger.",
    description: "Join the free Dubai Info Session and discover what's possible when vision has no limits.",
    ctaText: "Join Free Dubai Info Session",
    ctaSubtext: "Ambition without apology",
  },

  // ============================================================
  // FAQ SECTION
  // ============================================================
  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Dubai Experience with Maximum Impact Travel different?",
        answer: "You get inspiration, not just tourism. The Maximum Impact team connects you with African expats building empires, shows you the strategy behind the glamour, and challenges you to think bigger. Everything's planned so you can focus on expanding your vision.",
      },
      {
        question: "Do I need a visa to visit Dubai?",
        answer: "Most US citizens get a free 30-day visa on arrival. Just show up with your passport. We'll confirm your eligibility.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many ambitious travelers come alone and leave with new connections who understand why thinking bigger matters. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Luxury hotels, daily breakfast, activities, transportation, and curated experiences. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore, shop, and experience Dubai at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see how Africans thrive in Dubai, understand the real power behind the glamour, and know if you're ready to stop making excuses.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, another year playing small. Every year you wait, another year of reasonable goals. If you're asking, you're ready. Stop waiting.",
      },
    ],
  },
};
