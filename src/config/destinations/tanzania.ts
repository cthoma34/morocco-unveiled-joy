// ============================================================
// TRIP CONFIGURATION - TANZANIA + ZANZIBAR
// ============================================================
// Safari + Beach Luxury Experience
// Update images in src/assets/tanzania/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// Hero video import
import heroVideo from "@/assets/tanzania/hero-safari.mp4";

// CTA section giraffe video
import ctaVideo from "@/assets/tanzania/giraffe-cta.mp4";

// Documentary-style images - authentic traveler moments
import arrivalEmbrace from "@/assets/tanzania/arrival-embrace.jpg";
import sunriseCoffee from "@/assets/tanzania/sunrise-coffee.jpg";
import maasaiDancing from "@/assets/tanzania/maasai-dancing.jpg";
import sunsetToast from "@/assets/tanzania/sunset-toast.jpg";
import beachArrival from "@/assets/tanzania/beach-arrival.jpg";
import beachDinner from "@/assets/tanzania/beach-dinner.jpg";
import lionReaction from "@/assets/tanzania/lion-reaction.jpg";
import cookingClass from "@/assets/tanzania/cooking-class.jpg";
import craterView from "@/assets/tanzania/crater-view.jpg";
import spiceMarket from "@/assets/tanzania/spice-market.jpg";
import safariVehicle from "@/assets/tanzania/safari-vehicle.jpg";
import groupLaugh from "@/assets/tanzania/group-laugh.jpg";

// New powerful visuals - hot air balloons, luxury, culture
import balloonAerial from "@/assets/tanzania/balloon-aerial.jpg";
import balloonBasketView from "@/assets/tanzania/balloon-basket-view.jpg";
import balloonWomanJoy from "@/assets/tanzania/balloon-woman-joy.jpg";
import balloonChampagne from "@/assets/tanzania/balloon-champagne.jpg";
import balloonInflation from "@/assets/tanzania/balloon-inflation.jpg";
import maasaiWelcome from "@/assets/tanzania/maasai-welcome.jpg";
import luxuryCamp from "@/assets/tanzania/luxury-camp.jpg";
import craterDawn from "@/assets/tanzania/crater-dawn.jpg";
import zanzibarSplash from "@/assets/tanzania/zanzibar-splash.jpg";
import dhowBoat from "@/assets/tanzania/dhow-boat.jpg";
import beachSunsetGroup from "@/assets/tanzania/beach-sunset-group.jpg";
import stonetownAlley from "@/assets/tanzania/stonetown-alley.jpg";
import flamingosNgorongoro from "@/assets/tanzania/flamingos-ngorongoro.jpg";
import champagneBreakfast from "@/assets/tanzania/champagne-breakfast.jpg";
import balloonJoyPortrait from "@/assets/tanzania/balloon-joy-portrait.jpg";
import zanzibarSplashJoy from "@/assets/tanzania/zanzibar-splash-joy.jpg";
import stoneTownRooftop from "@/assets/tanzania/stone-town-rooftop.jpg";

// Unique destination images (different from gallery)
import serengetiDrive from "@/assets/tanzania/serengeti-drive.jpg";
import craterRim from "@/assets/tanzania/crater-rim.jpg";
import stonetownStreets from "@/assets/tanzania/stonetown-streets.jpg";
import zanzibarParadise from "@/assets/tanzania/zanzibar-paradise.jpg";

// ============================================================
// BASIC INFO
// ============================================================
export const tanzaniaConfig: TripConfig = {
  // Country/Trip name (used throughout the page)
  countryName: "Tanzania + Zanzibar",
  
  // URL slug for routing
  slug: "tanzania",
  
  // Tagline shown in hero
  tagline: "TANZANIA + ZANZIBAR",
  
  // ============================================================
  // IMAGES (External URLs or imported images)
  // Replace these with your actual hero/host/CTA images
  // ============================================================
  images: {
    hero: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920",
    heroVideo: heroVideo,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920",
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
      "<em>\"Watching the sun rise over the Serengeti, then ending on Zanzibar's beaches—I finally understood balance. Real balance. The kind that reconnects you to who you actually are.\"</em>",
      "Now he helps executives and professionals find the same awakening.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should be the transformation you've been putting off. Because coming home different isn't about the destination. It's about finally coming home to yourself.",
    travelerCount: "2,500+",
  },

  // ============================================================
  // HERO SECTION
  // ============================================================
  hero: {
    headline: "Where the Wild Meets the Ocean.",
    subheadline: "And You Meet Yourself.",
    description: "Join Jay Cameron for an exclusive Tanzania + Zanzibar experience reveal — discover the safari and beach journey that's transformed travelers who were tired of waiting for \"someday.\"",
    ctaText: "Join Free Tanzania Info Session",
    ctaSubtext: "Exclusive preview with Jay Cameron",
  },

  // ============================================================
  // STORY SECTION
  // ============================================================
  story: {
    sectionLabel: "WHY YOU NEED TO BE THERE LIVE",
    headline: "Africa Has Been Calling You for Years. It's Time to Answer.",
    paragraphs: [
      "You've been telling yourself \"someday\" for years.",
      "Someday you'll watch the sunrise over the Serengeti as lions wake. Someday you'll stand at the edge of Ngorongoro Crater feeling smaller than you've ever felt. Someday you'll understand why Tanzania makes busy professionals extend their trips and come back different.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting for life to slow down. Waiting for permission you don't actually need.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you the sunrise game drive where you lock eyes with a lioness. It costs you spice tours through Stone Town with families who've traded here for centuries. It costs you discovering why Zanzibar's turquoise waters heal something words can't describe.",
      "Every year you wait, Africa continues without you. And the version of yourself that needs this transformation keeps waiting, too.",
    ],
    quote: {
      text: "I thought I was going to see Africa. I didn't realize Africa would show me who I was before success made me forget.",
      author: "Marcus T.",
      title: "returning traveler",
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
        title: "You'll See What Nobody Else Shows You",
        description: "Watch actual footage of travelers discovering what Tanzania really does to successful people who finally stop waiting.",
      },
      {
        title: "You'll Feel It Before You Go",
        description: "Experience the transformation through the eyes of professionals just like you who came back different.",
      },
      {
        title: "You'll Know If You're Ready",
        description: "This session shows you exactly what happens. No sales pitch. Just truth about whether you're ready for this.",
      },
    ],
  },

  // ============================================================
  // REGISTRATION FORM
  // ============================================================
  registration: {
    headline: "FREE TANZANIA + ZANZIBAR INFO SESSION",
    subheadline: "Exclusive preview with Jay Cameron",
    badge: "100% FREE",
    footerText: "Discover what's waiting for you in Tanzania + Zanzibar. Next session fills fast.",
    discoverItems: [
      "Complete Safari + Beach journey details",
      "Exclusive bonuses and early bird pricing",
      "Deposit details & payment plans",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Exclusive preview session",
    // WebinarGeek settings (update for your Tanzania webinar)
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_xV45FSSBhgX",
      identifier: "c26c69a5-f50b-440b-97fb-34e679a6c233",
    },
  },

  // ============================================================
  // GALLERY SECTION
  // ============================================================
  gallery: {
    sectionLabel: "TANZANIA + ZANZIBAR MOMENTS",
    headline: "A Taste of What Awaits",
    items: [
      { image: balloonAerial, caption: "Floating Over the Serengeti" },
      { image: balloonBasketView, caption: "Views from Above" },
      { image: balloonWomanJoy, caption: "Pure Joy at Sunrise" },
      { image: balloonJoyPortrait, caption: "Sunrise Serenity" },
      { image: champagneBreakfast, caption: "Champagne Breakfast" },
      { image: flamingosNgorongoro, caption: "Flamingos at Ngorongoro" },
      { image: maasaiWelcome, caption: "Maasai Welcome Dance" },
      { image: maasaiDancing, caption: "Cultural Exchange" },
      { image: luxuryCamp, caption: "Luxury Tented Camp" },
      { image: craterDawn, caption: "Ngorongoro at Dawn" },
      { image: lionReaction, caption: "First Wildlife Encounter" },
      { image: sunsetToast, caption: "Sunset Celebration" },
      { image: safariVehicle, caption: "Safari Adventure" },
      { image: groupLaugh, caption: "Making Memories Together" },
      { image: dhowBoat, caption: "Zanzibar Dhow Cruise" },
      { image: stoneTownRooftop, caption: "Stone Town Sunset" },
      { image: stonetownAlley, caption: "Stone Town Discovery" },
      { image: zanzibarSplashJoy, caption: "Crystal Waters" },
      { image: zanzibarSplash, caption: "Beach Joy" },
      { image: beachSunsetGroup, caption: "Sunset on the Beach" },
      { image: beachDinner, caption: "Dinner Under the Stars" },
    ],
  },

  // ============================================================
  // TESTIMONIALS SECTION
  // ============================================================
  testimonials: {
    sectionLabel: "WHY TRAVELERS CHOOSE MAXIMUM IMPACT TRAVEL",
    headline: "A Journey That Changes You",
    subheadline: "Imagine yourself in Tanzania... not as a tourist, but as someone finally breathing again.",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Sharing Stories",
        description: "Laughing and connecting over local cuisine, with new friends who quickly become family.",
        quote: "I came alone and didn't know a soul... but by the first dinner, I had family. I left with lifelong friends.",
        author: "David",
        location: "USA",
      },
      {
        category: "Exploring History",
        description: "Standing in ancient places, feeling the weight of the past and the healing of reconnection.",
        quote: "I usually stress about planning trips, but this time all I had to do was show up. Every detail was handled, and I could just be present.",
        author: "Sarah",
        location: "USA",
      },
      {
        category: "Finding Clarity",
        description: "Gaining fresh perspective on life, opportunities, and even pathways like dual citizenship.",
        quote: "I was nervous about going to Africa, but the moment I arrived, I felt cared for and safe. The team thought of everything.",
        author: "Monique",
        location: "USA",
      },
      {
        category: "Awakening Your Senses",
        description: "Immersed in the colors, rhythms, and energy of African culture, fashion, food, music, and art.",
        quote: "I almost talked myself out of it... told myself I'd do it someday. But saying yes now changed my life. Don't wait... it's worth it.",
        author: "Michelle",
        location: "USA",
      },
    ],
  },

  // ============================================================
  // DESTINATIONS SECTION
  // ============================================================
  destinations: {
    sectionLabel: "DESTINATIONS",
    headline: "Where We'll Take You",
    items: [
      { name: "Serengeti", description: "Endless Plains", image: balloonInflation },
      { name: "Ngorongoro", description: "The Crater", image: craterDawn },
      { name: "Stone Town", description: "UNESCO Heritage", image: stonetownAlley },
      { name: "Zanzibar", description: "Island Paradise", image: dhowBoat },
    ],
  },

  // ============================================================
  // FINAL CTA SECTION
  // ============================================================
  finalCta: {
    sectionLabel: "YOUR JOURNEY AWAITS",
    headline: "Stop Waiting for Someday.",
    subheadline: "Someday Is Now.",
    description: "Join the free Tanzania + Zanzibar Experience Reveal and discover why travelers chose to stop waiting and start living.",
    ctaText: "Join Free Tanzania Info Session",
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
        question: "What makes the Tanzania + Zanzibar Experience with Maximum Impact Travel different?",
        answer: "You get culture, comfort, and guidance from start to finish. The Maximum Impact team guides you through the history, influence, and stories most visitors never hear. Everything's planned so you can relax and transform.",
      },
      {
        question: "Do I need a visa to visit Tanzania?",
        answer: "Yes, most travelers need a visa. You can get a Visa on Arrival when you land in Tanzania. We guide you through everything you need.",
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
        answer: "Yes. You'll have time to explore, shop, relax, or experience Tanzania at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll see the full itinerary, understand what to expect, discover the real Tanzania + Zanzibar, and hear why this journey means so much to travelers.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "If you're asking, you already know. Stop waiting.",
      },
    ],
  },
};
