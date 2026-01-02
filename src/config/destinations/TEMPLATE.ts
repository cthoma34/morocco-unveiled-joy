// ============================================================
// TRIP CONFIGURATION TEMPLATE
// ============================================================
// INSTRUCTIONS:
// 1. Copy this file and rename it (e.g., ghana.ts, morocco.ts)
// 2. Update all the content below with your destination details
// 3. Add images to src/assets/[destination-name]/ folder
// 4. Export the config from src/config/destinations/index.ts
// 5. Add it to the allDestinations array
// ============================================================

import { TripConfig } from "@/types/trip-config";

// Import your images here:
// import heroVideo from "@/assets/[destination]/hero.mp4";
// import ctaVideo from "@/assets/[destination]/cta.mp4";
// import image1 from "@/assets/[destination]/image1.jpg";
// ... etc

export const destinationConfig: TripConfig = {
  // ============================================================
  // BASIC INFO
  // ============================================================
  countryName: "Destination Name",
  slug: "destination-slug", // URL path: /destination-slug
  tagline: "DESTINATION NAME",

  // ============================================================
  // IMAGES
  // ============================================================
  images: {
    hero: "https://images.unsplash.com/...", // Hero background image
    heroVideo: undefined, // Optional: import and use video
    host: "https://...", // Host profile image
    cta: "https://images.unsplash.com/...", // CTA section background
    ctaVideo: undefined, // Optional: import and use video
  },

  // ============================================================
  // HOST INFO
  // ============================================================
  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Paragraph 1 about the host...",
      "Paragraph 2 about their experience...",
      "<em>\"A quote from the host about this destination.\"</em>",
      "Final paragraph...",
    ],
    philosophy: "The host's travel philosophy...",
    travelerCount: "2,500+",
  },

  // ============================================================
  // HERO SECTION
  // ============================================================
  hero: {
    headline: "Your Compelling Headline.",
    subheadline: "Your Subheadline.",
    description: "A compelling description of the info session...",
    ctaText: "Join Free Info Session",
    ctaSubtext: "Exclusive preview with Jay Cameron",
  },

  // ============================================================
  // STORY SECTION
  // ============================================================
  story: {
    sectionLabel: "WHY YOU NEED TO BE THERE LIVE",
    headline: "Your Story Headline Here.",
    paragraphs: [
      "Opening paragraph that hooks the reader...",
      "Second paragraph building the narrative...",
      "Third paragraph creating urgency...",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "First cost paragraph with emotional impact...",
      "Second cost paragraph reinforcing the message...",
    ],
    quote: {
      text: "A powerful testimonial quote...",
      author: "First Name L.",
      title: "returning traveler",
    },
  },

  // ============================================================
  // FEATURES SECTION
  // ============================================================
  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "Feature 1 Title",
        description: "Description of what they'll learn or experience...",
      },
      {
        title: "Feature 2 Title",
        description: "Description of what they'll learn or experience...",
      },
      {
        title: "Feature 3 Title",
        description: "Description of what they'll learn or experience...",
      },
      {
        title: "Feature 4 Title",
        description: "Description of what they'll learn or experience...",
      },
    ],
  },

  // ============================================================
  // REGISTRATION FORM
  // ============================================================
  registration: {
    headline: "FREE [DESTINATION] INFO SESSION",
    subheadline: "Exclusive preview with Jay Cameron",
    badge: "100% FREE",
    footerText: "Discover what's waiting for you in [Destination]. Next session fills fast.",
    discoverItems: [
      "Complete journey details",
      "Exclusive bonuses and early bird pricing",
      "Deposit details & payment plans",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Exclusive preview session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "YOUR_FUNCTION_NAME", // Get from WebinarGeek
      identifier: "YOUR_IDENTIFIER", // Get from WebinarGeek
    },
  },

  // ============================================================
  // GALLERY SECTION
  // ============================================================
  gallery: {
    sectionLabel: "[DESTINATION] MOMENTS",
    headline: "A Taste of What Awaits",
    items: [
      { image: "https://...", caption: "Caption 1" },
      { image: "https://...", caption: "Caption 2" },
      // Add 10-12 gallery images total
    ],
  },

  // ============================================================
  // TESTIMONIALS SECTION
  // ============================================================
  testimonials: {
    sectionLabel: "WHY TRAVELERS CHOOSE MAXIMUM IMPACT TRAVEL",
    headline: "A Journey That Changes You",
    subheadline: "Imagine yourself in [Destination]... not as a tourist, but as someone finally breathing again.",
    videos: [
      "https://www.youtube.com/embed/VIDEO_ID_1",
      "https://www.youtube.com/embed/VIDEO_ID_2",
    ],
    items: [
      {
        category: "Category Name",
        description: "Description of this experience type...",
        quote: "Testimonial quote...",
        author: "First Name",
        location: "Country",
      },
      // Add 3-4 testimonials
    ],
  },

  // ============================================================
  // DESTINATIONS SECTION
  // ============================================================
  destinations: {
    sectionLabel: "DESTINATIONS",
    headline: "Where We'll Take You",
    items: [
      { name: "Location 1", description: "Short Description", image: "https://..." },
      { name: "Location 2", description: "Short Description", image: "https://..." },
      { name: "Location 3", description: "Short Description", image: "https://..." },
      { name: "Location 4", description: "Short Description", image: "https://..." },
    ],
  },

  // ============================================================
  // FINAL CTA SECTION
  // ============================================================
  finalCta: {
    sectionLabel: "YOUR JOURNEY AWAITS",
    headline: "Stop Waiting for Someday.",
    subheadline: "Someday Is Now.",
    description: "Join the free [Destination] Experience Reveal and discover why travelers chose to stop waiting and start living.",
    ctaText: "Join Free Info Session",
    ctaSubtext: "Exclusive preview with Jay Cameron",
  },

  // ============================================================
  // FAQ SECTION
  // ============================================================
  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the [Destination] Experience with Maximum Impact Travel different?",
        answer: "You get culture, comfort, and guidance from start to finish. The Maximum Impact team guides you through the history, influence, and stories most visitors never hear. Everything's planned so you can relax and transform.",
      },
      {
        question: "Do I need a visa to visit [Destination]?",
        answer: "[Destination specific]. We guide you through everything you need.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many travelers come alone and leave with new friends. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Hotels, daily breakfast, activities, transportation, and guided experiences. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore, shop, relax, or experience the destination at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see the full itinerary, understand what to expect, discover the real [Destination], and hear why this journey means so much to travelers.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "If you're asking, you already know. Stop waiting.",
      },
    ],
  },
};
