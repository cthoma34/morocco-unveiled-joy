// ============================================================
// TRIP CONFIGURATION - MOROCCO
// ============================================================
// Three Continents. One Country. Infinite Stories.
// Update images in src/assets/morocco/ folder
// ============================================================

import { TripConfig } from "@/types/trip-config";

// ============================================================
// BASIC INFO
// ============================================================
export const moroccoConfig: TripConfig = {
  countryName: "Morocco",
  slug: "morocco",
  tagline: "MOROCCO",
  
  images: {
    hero: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920",
    heroVideo: undefined,
    host: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    cta: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920",
    ctaVideo: undefined,
  },

  host: {
    name: "Jay Cameron",
    title: "Founder, Maximum Impact Travel",
    bio: [
      "Jay Cameron founded Maximum Impact Travel after his own transformation in Africa showed him what successful professionals have been missing.",
      "Dual citizen of Ghana and Sierra Leone with experience across 50+ countries, Jay doesn't just organize trips—he opens doors that tourism can't touch. After decades of corporate success that felt empty, he discovered what matters: sensory experiences that rewire how you see the world.",
      "<em>\"Standing in Majorelle Gardens when that blue became spiritual, getting lost in medinas where every turn revealed treasures—I finally understood what it means to have all five senses awakened at once.\"</em>",
      "Now he helps professionals experience Morocco's magic.",
    ],
    philosophy: "His philosophy: Travel shouldn't just be a vacation. It should rewire how you experience the world. Because coming home different isn't about the destination. It's about finally feeling alive.",
    travelerCount: "2,500+",
  },

  hero: {
    headline: "Three Continents. One Country.",
    subheadline: "Infinite Stories.",
    description: "You've been dreaming about Morocco's colors, sounds, and mysteries for years. Join Jay Cameron for a sensory journey that rewires how you experience the world.",
    ctaText: "Join Free Morocco Info Session",
    ctaSubtext: "Feel Morocco before you go",
  },

  story: {
    sectionLabel: "SENSORY OVERLOAD IN THE BEST WAY",
    headline: "You've Been Dreaming About This for Years.",
    paragraphs: [
      "Someday you'll walk through the blue streets of Chefchaouen. Someday you'll sleep under Sahara stars so bright you can read by them. Someday you'll understand why Morocco makes seasoned travelers feel like beginners again.",
      "But you keep pushing it off. Waiting for the \"right time.\" Waiting to feel ready for that much beauty. Waiting for permission to be overwhelmed.",
    ],
    costIntro: "Here's what waiting costs you:",
    costParagraphs: [
      "It costs you sunrise camel rides into golden dunes. It costs you getting lost in Marrakech medinas where every turn reveals treasures. It costs you that moment in Majorelle Gardens when blue becomes spiritual. It costs you tasting tagines you've been mispronouncing for years.",
      "Every year you wait, another year of beige. Every year you wait, another year of predictable. And the part of you craving sensory awakening keeps sleeping.",
    ],
    quote: {
      text: "Morocco doesn't just show you beauty. It rewires how you experience the world. I came back seeing colors I never noticed before.",
      author: "Sarah L.",
      title: "creative director",
    },
  },

  features: {
    sectionLabel: "WHY THIS INFO SESSION MATTERS",
    headline: "",
    subheadline: "",
    items: [
      {
        title: "You'll Feel Morocco Before You Go",
        description: "Footage that captures the sensory overload—the colors, sounds, energy that photos can't convey.",
      },
      {
        title: "You'll Understand the Journey Flow",
        description: "From Casablanca's elegance to Sahara's silence to Marrakech's beautiful chaos.",
      },
      {
        title: "You'll Learn What to Expect",
        description: "The medina navigation, the haggling culture, the moments that overwhelm in the best way.",
      },
      {
        title: "You'll Know If You're Ready for This",
        description: "Morocco isn't subtle. Tonight shows you if you're ready for full sensory immersion.",
      },
      {
        title: "You'll Meet Others Craving More",
        description: "Join professionals ready to have all five senses awakened at once.",
      },
    ],
  },

  registration: {
    headline: "FREE MOROCCO INFO SESSION",
    subheadline: "Feel Morocco before you go",
    badge: "100% FREE",
    footerText: "Colors, sounds, magic—Morocco is waiting. Next session fills fast.",
    discoverItems: [
      "Complete sensory journey details",
      "Medina navigation tips",
      "Exclusive bonuses and early bird pricing",
      "Live Q&A with Jay Cameron",
    ],
    sessionDuration: "Sensory session",
    webinar: {
      scriptUrl: "https://malong.webinargeek.com/malong.embed.js",
      functionName: "mw_REPLACE_ME",
      identifier: "REPLACE-ME-WITH-MOROCCO-WEBINAR-ID",
    },
  },

  gallery: {
    sectionLabel: "MOROCCO MAGIC",
    headline: "What You'll Experience",
    items: [
      { image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800", caption: "Chefchaouen Blue" },
      { image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800", caption: "Sahara Sunrises" },
      { image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800", caption: "Marrakech Medinas" },
      { image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=800", caption: "Majorelle Gardens" },
      { image: "https://images.unsplash.com/photo-1545167496-5a0e855cd5e8?w=800", caption: "Tagine Feasts" },
      { image: "https://images.unsplash.com/photo-1548018560-c7196e91a0b5?w=800", caption: "Desert Camps" },
    ],
  },

  testimonials: {
    sectionLabel: "TRAVELERS WHO FELT IT FIRST",
    headline: "They Came for Photos. They Left Transformed.",
    subheadline: "Imagine yourself in Morocco... having all five senses awakened at once.",
    videos: [
      "https://www.youtube.com/embed/e8BlCByxgWU",
      "https://www.youtube.com/embed/UJMCv0svJIc",
    ],
    items: [
      {
        category: "Sensory Awakening",
        description: "Experiencing colors, sounds, and textures that rewire how you see the world.",
        quote: "Morocco doesn't just show you beauty. It rewires how you experience the world. I came back seeing colors I never noticed before.",
        author: "Sarah L.",
        location: "Creative Director",
      },
      {
        category: "Getting Lost Right",
        description: "Discovering that getting lost in Marrakech is part of the magic.",
        quote: "I was terrified of getting lost. Turns out, getting lost in the medina was the best part. Every wrong turn revealed something beautiful.",
        author: "David K.",
        location: "Attorney",
      },
      {
        category: "Desert Peace",
        description: "Finding silence in the Sahara that changes everything.",
        quote: "The Sahara at night. No light pollution, no noise, just stars you can read by. I cried. I didn't know beauty could do that.",
        author: "Patricia M.",
        location: "Executive",
      },
      {
        category: "Cultural Immersion",
        description: "Living the rhythm of Morocco, not just observing it.",
        quote: "The cooking class, the mint tea rituals, the medina guides who became friends—Maximum Impact Travel doesn't show you Morocco. They let you live it.",
        author: "Angela R.",
        location: "Healthcare Executive",
      },
    ],
  },

  destinations: {
    sectionLabel: "WHERE MAGIC HAPPENS",
    headline: "Your Morocco Journey",
    items: [
      { name: "Casablanca", description: "Elegance & Entry", image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800" },
      { name: "Chefchaouen", description: "The Blue City", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800" },
      { name: "Sahara Desert", description: "Stars & Silence", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800" },
      { name: "Marrakech", description: "Beautiful Chaos", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800" },
    ],
  },

  finalCta: {
    sectionLabel: "BEAUTY IS WAITING",
    headline: "Stop Living in Beige.",
    subheadline: "Morocco Is Calling.",
    description: "Join the free Morocco Info Session and discover what it feels like to have all five senses awakened at once.",
    ctaText: "Join Free Morocco Info Session",
    ctaSubtext: "Sensory overload in the best way",
  },

  faq: {
    sectionLabel: "COMMON QUESTIONS",
    headline: "Everything You Need to Know",
    items: [
      {
        question: "What makes the Morocco Experience with Maximum Impact Travel different?",
        answer: "You get immersion, not just tourism. The Maximum Impact team guides you through the medinas, the culture, and the moments most visitors miss. Everything's planned so you can focus on feeling Morocco.",
      },
      {
        question: "Do I need a visa to visit Morocco?",
        answer: "US citizens can visit Morocco visa-free for up to 90 days. Just bring your passport.",
      },
      {
        question: "Do I need a passport?",
        answer: "Yes. Your passport needs at least six months remaining from travel date. Don't have one? We'll tell you exactly how to get it.",
      },
      {
        question: "Can I travel alone?",
        answer: "Yes. Many travelers come alone and leave with friends who understand why Morocco changes everything. Maximum Impact Travel trips feel like family, not strangers.",
      },
      {
        question: "What is included?",
        answer: "Hotels, daily breakfast, activities, transportation, and guided experiences through medinas, deserts, and cities. You also get support before and during the trip.",
      },
      {
        question: "Do we have free time?",
        answer: "Yes. You'll have time to get lost in medinas, shop in souks, and experience Morocco at your own pace.",
      },
      {
        question: "What will I learn in the info session?",
        answer: "You'll feel Morocco before you go—the colors, sounds, energy. You'll understand the journey flow and know if you're ready for full sensory immersion.",
      },
      {
        question: "Is this the right time for me to go?",
        answer: "Every year you wait, another year of beige. Every year you wait, another year of predictable. If you're craving sensory awakening, you're ready. Stop waiting.",
      },
    ],
  },
};
