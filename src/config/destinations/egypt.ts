// ============================================================
// TRIP CONFIGURATION - EGYPT
// ============================================================
// Truth Over Tourism - Black Pharaohs & Hidden History
// ============================================================

import { TripConfig } from "@/types/trip-config";

// Egypt image imports
import pyramidsSunrise from "@/assets/egypt/pyramids-sunrise.jpg";
import firstPyramidView from "@/assets/egypt/first-pyramid-view.jpg";
import gizaGroup from "@/assets/egypt/giza-group.jpg";
import sphinxCouple from "@/assets/egypt/sphinx-couple.jpg";
import karnakHall from "@/assets/egypt/karnak-hall.jpg";
import luxorNight from "@/assets/egypt/luxor-night.jpg";
import tombInterior from "@/assets/egypt/tomb-interior.jpg";
import balloonValley from "@/assets/egypt/balloon-valley.jpg";
import abuSimbelApproach from "@/assets/egypt/abu-simbel-approach.jpg";
import abuSimbelScale from "@/assets/egypt/abu-simbel-scale.jpg";
import nubianVillage from "@/assets/egypt/nubian-village.jpg";
import nubianTea from "@/assets/egypt/nubian-tea.jpg";
import feluccaNile from "@/assets/egypt/felucca-nile.jpg";
import nileSunsetGroup from "@/assets/egypt/nile-sunset-group.jpg";
import khanBazaar from "@/assets/egypt/khan-bazaar.jpg";
import museumInterior from "@/assets/egypt/museum-interior.jpg";
import cairoSkyline from "@/assets/egypt/cairo-skyline.jpg";
import spiceMarket from "@/assets/egypt/spice-market.jpg";
import cruiseDinner from "@/assets/egypt/cruise-dinner.jpg";
import nubianWelcome from "@/assets/egypt/nubian-welcome.jpg";
import hatshepsutTemple from "@/assets/egypt/hatshepsut-temple.jpg";
import valleyKingsEntrance from "@/assets/egypt/valley-kings-entrance.jpg";
import feluccaSunset from "@/assets/egypt/felucca-sunset.jpg";
import cairoRooftop from "@/assets/egypt/cairo-rooftop.jpg";
import tutankhamunExhibit from "@/assets/egypt/tutankhamun-exhibit.jpg";
import pyramidTouch from "@/assets/egypt/pyramid-touch.jpg";
import nubianHouse from "@/assets/egypt/nubian-house.jpg";
import cruiseContemplation from "@/assets/egypt/cruise-contemplation.jpg";

// Egypt video imports
import heroVideo from "@/assets/egypt/hero-pyramids.mp4";
import ctaVideo from "@/assets/egypt/cta-sunset-pyramids.mp4";

// ============================================================
// BASIC INFO
// ============================================================
export const egyptConfig: TripConfig = {
  // Country/Trip name (used throughout the page)
  countryName: "Egypt",
  
  // URL slug for routing
  slug: "egypt",
  
  // Tagline shown in hero
  tagline: "EGYPT",
  
  // ============================================================
  // IMAGES
  // ============================================================
  images: {
    hero: pyramidsSunrise,
    heroVideo: heroVideo,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: nileSunsetGroup,
    ctaVideo: ctaVideo,
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
      "<em>\"Standing before hieroglyphs showing Black pharaohs, watching scholars share what textbooks hide—I finally understood why they had to lie about Egypt.\"</em>",
      "Now he helps professionals find the same truth.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should replace lies with truth through your own eyes. Because coming home different isn't about the destination. It's about finally knowing what they never wanted you to know.",
    travelerCount: "2,500+",
  },

  // ============================================================
  // HERO SECTION
  // ============================================================
  hero: {
    headline: "They Lied to You About Egypt.",
    subheadline: "Let's Fix That.",
    description: "You know something's missing from the Egypt story you were taught. Join Jay Cameron for the truth they didn't want you to see—Black pharaohs, Nubian culture, and the African foundation of civilization.",
    ctaText: "Join Free Egypt Info Session",
    ctaSubtext: "See what they don't show you",
  },

  // ============================================================
  // STORY SECTION
  // ============================================================
  story: {
    sectionLabel: "THE TRUTH THEY HID",
    headline: "You Know Something's Missing. You're Right.",
    paragraphs: [
      "Someday you'll stand before hieroglyphs showing Black pharaohs. Someday you'll walk through Cairo understanding its real power. Someday you'll cruise the Nile knowing the full truth about who built civilization.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to be ready for what you might discover. Waiting for permission to question what you were taught.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you standing in temples where African genius created what Greeks called miraculous. It costs you Nubian villages where culture survived everything. It costs you that moment in the Egyptian Museum when everything clicks. It costs you replacing lies with truth through your own eyes.",
      "Every year you wait, you carry incomplete history. Every year you wait, you pass on the same lies to the next generation. And the truth about Africa's real contribution stays buried.",
    ],
    quote: {
      text: "I thought I was taking a history trip. I came back understanding why they had to lie about Egypt. The truth is too powerful.",
      author: "Patricia K.",
      title: "educator",
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
        title: "You'll See What They Don't Show You",
        description: "The Black pharaohs, the Nubian influence, the African foundation of civilization. Evidence, not theory.",
      },
      {
        title: "You'll Understand Why Egypt Matters Now",
        description: "How correcting history changes how you see everything—yourself, achievement, possibility.",
      },
      {
        title: "You'll Learn What Textbooks Won't Teach",
        description: "The real timeline, the hidden evidence, why the lies were necessary for other narratives.",
      },
      {
        title: "You'll Meet Others Seeking Truth",
        description: "Join professionals who refuse to accept incomplete history as fact.",
      },
      {
        title: "You'll Know If You're Ready for This",
        description: "Egypt isn't easy. It challenges everything. Tonight shows you if you're ready for truth.",
      },
    ],
  },

  // ============================================================
  // REGISTRATION FORM
  // ============================================================
  registration: {
    headline: "FREE EGYPT INFO SESSION",
    subheadline: "See what they don't show you",
    badge: "100% FREE",
    footerText: "The truth about Egypt is waiting. Next session fills fast.",
    discoverItems: [
      "Black pharaohs & hidden history revealed",
      "Complete Cairo + Nile journey details",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Truth-seeking session",
    // WebinarGeek settings (TODO: update for Egypt webinar)
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME", // TODO: Replace with Egypt webinar function
      identifier: "REPLACE-ME-WITH-EGYPT-WEBINAR-ID", // TODO: Replace with Egypt webinar ID
    },
  },

  // ============================================================
  // GALLERY SECTION
  // ============================================================
  gallery: {
    sectionLabel: "THE EGYPT THEY HIDE",
    headline: "What You'll Discover",
    items: [
      { image: pyramidsSunrise, caption: "Pyramids at Golden Hour" },
      { image: firstPyramidView, caption: "First View of the Impossible" },
      { image: sphinxCouple, caption: "Face to Face with History" },
      { image: karnakHall, caption: "Karnak's Towering Columns" },
      { image: luxorNight, caption: "Luxor Temple After Dark" },
      { image: tombInterior, caption: "Inside the Royal Tombs" },
      { image: balloonValley, caption: "Valley of the Kings from Above" },
      { image: hatshepsutTemple, caption: "Hatshepsut's Temple" },
      { image: abuSimbelScale, caption: "The Scale of Abu Simbel" },
      { image: nubianVillage, caption: "Colorful Nubian Village" },
      { image: nubianTea, caption: "Nubian Hospitality" },
      { image: nubianWelcome, caption: "Welcomed Like Family" },
      { image: feluccaNile, caption: "Sailing the Nile" },
      { image: feluccaSunset, caption: "Sunset on the Water" },
      { image: cruiseDinner, caption: "Elegant Nile Dining" },
      { image: cruiseContemplation, caption: "Moments of Reflection" },
      { image: khanBazaar, caption: "Khan el-Khalili by Night" },
      { image: museumInterior, caption: "Discovering the Museum" },
      { image: tutankhamunExhibit, caption: "Tutankhamun's Treasures" },
      { image: cairoRooftop, caption: "Cairo at Night" },
      { image: spiceMarket, caption: "Colors of the Spice Market" },
      { image: pyramidTouch, caption: "Touching Ancient Stone" },
    ],
  },

  // ============================================================
  // TESTIMONIALS SECTION
  // ============================================================
  testimonials: {
    sectionLabel: "TRUTH-SEEKERS WHO WENT BEFORE YOU",
    headline: "They Came for History. They Left with Truth.",
    subheadline: "Imagine yourself in Egypt... not as a tourist, but as someone finally seeing what they hid from you.",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Discovering Truth",
        description: "Standing before evidence of Black pharaohs, finally seeing what textbooks refused to show.",
        quote: "I thought I was taking a history trip. I came back understanding why they had to lie about Egypt. The truth is too powerful.",
        author: "Patricia K.",
        location: "Educator",
      },
      {
        category: "Questioning Everything",
        description: "Walking through temples where African genius created what Greeks called miraculous.",
        quote: "Everything I thought I knew about civilization got rewritten in one week. I can't unsee what I saw.",
        author: "Marcus T.",
        location: "Attorney",
      },
      {
        category: "Finding Connection",
        description: "Meeting Nubians whose culture survived everything, understanding the real Egypt.",
        quote: "The Nubian villages changed me. Culture that survived thousands of years of erasure—and they're still here.",
        author: "Denise L.",
        location: "Professor",
      },
      {
        category: "Replacing Lies",
        description: "That moment in the Egyptian Museum when incomplete history finally becomes complete.",
        quote: "I came alone and skeptical. I left with truth I can never forget and friends who understand why it matters.",
        author: "James W.",
        location: "Executive",
      },
    ],
  },

  // ============================================================
  // DESTINATIONS SECTION
  // ============================================================
  destinations: {
    sectionLabel: "THE EGYPT THEY DON'T SHOW YOU",
    headline: "Where Truth Replaces Lies",
    items: [
      { name: "Cairo", description: "Modern Power & Hidden Museums", image: cairoSkyline },
      { name: "Luxor", description: "Black Pharaoh Evidence", image: karnakHall },
      { name: "Aswan", description: "Nubian Culture Survives", image: nubianVillage },
      { name: "Abu Simbel", description: "African Genius in Stone", image: abuSimbelApproach },
    ],
  },

  // ============================================================
  // FINAL CTA SECTION
  // ============================================================
  finalCta: {
    sectionLabel: "THE TRUTH IS WAITING",
    headline: "Stop Carrying Incomplete History.",
    subheadline: "See It for Yourself.",
    description: "Join the free Egypt Info Session and discover what they didn't want you to know about who built civilization.",
    ctaText: "Join Free Egypt Info Session",
    ctaSubtext: "Truth over tourism",
  },

  // ============================================================
  // FAQ SECTION
  // ============================================================
  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Egypt Experience with Maximum Impact Travel different?",
        answer: "You get truth, not tourism. The Maximum Impact team guides you through the history, evidence, and stories most visitors never hear—Black pharaohs, Nubian influence, the African foundation of civilization. Everything's planned so you can focus on discovery.",
      },
      {
        question: "Do I need a visa to visit Egypt?",
        answer: "Yes. Egypt requires visas for US citizens. You can get a visa on arrival or we'll help you secure one in advance.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many truth-seekers come alone and leave with new friends who understand why this history matters. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Hotels, daily breakfast, activities, transportation, and guided experiences with scholars and experts. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to explore, process what you're learning, and experience Egypt at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see what they don't show you—Black pharaohs, Nubian culture, hidden evidence. You'll understand why Egypt matters now, and you'll know if you're ready for truth.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, you carry incomplete history. Every year you wait, you pass on the same lies. If you're asking, you're ready. Stop waiting.",
      },
    ],
  },
};
