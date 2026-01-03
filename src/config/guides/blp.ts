import { GuideConfig } from '@/types/guide-config';

// Black London + Paris images - NO EIFFEL TOWER
import jazzClub from '@/assets/blp/jazz-club.jpg';
import seineRiverGroup from '@/assets/blp/seine-river-group.jpg';
import leMaraisShopping from '@/assets/blp/le-marais-shopping.jpg';
import parisCafeCouple from '@/assets/blp/paris-cafe-couple.jpg';
import londonHistoryTour from '@/assets/blp/london-history-tour.jpg';
import brixtonMarket from '@/assets/blp/brixton-market.jpg';

export const blpGuide: GuideConfig = {
  slug: 'blp',
  destinationName: 'Black London + Paris',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '220 70% 35%',
    secondary: '0 70% 45%',
    accent: '45 85% 50%',
    sand: '220 15% 92%',
  },

  hero: {
    title: 'Your Freedom Blueprint: BLACK LONDON + PARIS',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: jazzClub,
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'Your cousins been building empires in Europe.',
      "After 2,500 travelers, London and Paris hit different when you see them through Black eyes. Notting Hill Carnival. Little Africa in Paris. Jazz clubs. African restaurants. Power moves in banking and fashion.",
      "This guide shows you the Europe they don't advertise.",
      "Let's get you ready.",
    ],
    signature: 'Jay Cameron',
    signatureTitle: 'Founder, Maximum Impact Travel',
  },

  basics: {
    documents: {
      title: 'Documents You Need',
      items: [
        'Passport (valid 6+ months)',
        'No visa needed (US citizens, 90 days)',
        'Return ticket',
        'Hotel proof',
        'Travel insurance (recommended)',
        'Eurostar tickets (if doing both)',
        'Oyster card (London)',
        'Paris Metro pass',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'No vaccines required',
        'Pharmacies everywhere',
        'NHS/hospitals are excellent',
        'Pack basic medications',
        'Adapter plugs (different for each country)',
        'Umbrella (especially London)',
        'Comfortable walking shoes',
      ],
    },
    money: {
      currency: 'British Pound (London) / Euro (Paris)',
      currencyCode: 'GBP',
      tips: [
        'Cards work everywhere',
        'Some cash for markets',
        'Contactless payment is king',
        'Meal: $15-40',
        'Tube/Metro: $3-5',
        'Museum: Free-$25',
        'Theatre: $40-150',
      ],
    },
    weather: {
      bestMonths: 'May - September',
      temperature: '50-75°F (Cool to mild)',
      tips: [
        'Rainy often in both cities',
        'Summer is best: 60-75°F',
        'Winter is cold: 35-50°F',
        'Layers always',
        'Umbrella essential',
      ],
    },
    packing: [
      { item: 'Layers (weather changes)', category: 'clothing', essential: true },
      { item: 'Rain jacket', category: 'clothing', essential: true },
      { item: 'Scarf', category: 'clothing' },
      { item: 'Good walking shoes', category: 'clothing', essential: true },
      { item: 'Nice outfit for restaurants', category: 'clothing' },
      { item: 'Crossbody bag (anti-theft)', category: 'clothing' },
      { item: 'UK power adapter (Type G)', category: 'tech', essential: true },
      { item: 'EU power adapter (Type C/E)', category: 'tech', essential: true },
      { item: 'Basic medications', category: 'health' },
      { item: 'Umbrella', category: 'essentials', essential: true },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'Eurostar tickets', category: 'documents' },
    ],
  },

  culture: {
    language: {
      name: 'English (London) / French (Paris)',
      greetings: [
        { word: 'Wagwan', pronunciation: 'wag-WAHN', translation: "What's going on (London)" },
        { word: 'Innit', pronunciation: 'IN-it', translation: "Isn't it (London)" },
        { word: 'Bruv', pronunciation: 'bruv', translation: 'Brother/friend (London)' },
        { word: 'Safe', pronunciation: 'sayf', translation: 'Thanks/goodbye (London)' },
        { word: 'Bonjour', pronunciation: 'bon-ZHOOR', translation: 'Hello (Paris - always say first)' },
        { word: 'Merci', pronunciation: 'mair-SEE', translation: 'Thank you (Paris)' },
        { word: "S'il vous plaît", pronunciation: 'see voo PLEH', translation: 'Please (Paris)' },
        { word: 'Pardon', pronunciation: 'par-DON', translation: 'Excuse me (Paris)' },
      ],
    },
    food: {
      intro: 'Both cities have thriving African and Caribbean food scenes alongside European classics.',
      items: [
        { name: 'Brixton Village (London)', description: 'Everything from jerk to Nigerian suya', mustTry: true },
        { name: 'Peckham (London)', description: 'Nigerian food capital of UK', mustTry: true },
        { name: 'Dalston (London)', description: 'Caribbean excellence' },
        { name: 'Château Rouge (Paris)', description: 'Little Africa - West African paradise', mustTry: true },
        { name: 'Belleville (Paris)', description: 'Mixed African cuisines' },
        { name: 'Goutte d\'Or (Paris)', description: 'North and West African' },
      ],
    },
    customs: {
      title: 'City Navigation',
      items: [
        'London: Queue properly (this is serious)',
        'London: Stand right on escalators',
        'Paris: Always greet with "Bonjour" first',
        'Paris: Dress well - style matters',
        'Both: Respect personal space on transit',
        'Both: Tipping is appreciated but not mandatory',
      ],
    },
    shopping: {
      intro: 'African markets, fashion, and culture goods abound in both cities.',
      tips: [
        'London: Brixton Market',
        'London: Ridley Road Market',
        'London: Afro hair shops everywhere',
        'London: African fabric shops in Peckham',
        'Paris: Château Rouge market',
        'Paris: African fashion designers',
        'Paris: Marché Dejean',
        'Both: Support Black-owned businesses',
      ],
    },
  },

  photos: {
    intro: 'Capture Black excellence thriving in European capitals.',
    spots: [
      { name: 'Notting Hill Colors', description: 'Carnival or the colorful houses', tips: 'August for Carnival, anytime for houses' },
      { name: 'Brixton Mural', description: 'Black history wall art', tips: 'Electric Avenue area' },
      { name: 'London Eye', description: 'Thames River panoramic', tips: 'Sunset or night for best views' },
      { name: 'Paris Café', description: 'Classic street scene', tips: 'Morning coffee culture' },
      { name: 'Seine River Walk', description: 'Golden hour along the water', tips: 'Best light at sunset' },
      { name: 'Black Paris Tour', description: 'Hidden history locations', tips: 'Book a guide for context' },
      { name: 'British Museum', description: 'African galleries (contested)', tips: 'Know the history of what you\'re seeing' },
      { name: 'Sacré-Cœur', description: 'City view from Montmartre', tips: 'Early morning for fewer crowds' },
      { name: 'Street Art', description: 'Both cities have incredible murals', tips: 'Shoreditch (London), Belleville (Paris)' },
      { name: 'Jazz Club', description: 'Night vibes in either city', tips: 'Ronnie Scott\'s (London), Le Caveau (Paris)' },
    ],
  },

  realTalk: {
    intro: 'What you need to know about navigating Europe as a Black traveler.',
    items: [
      {
        topic: 'Safety',
        honest: 'Both cities are mostly safe. Different neighborhoods have different vibes. Pickpockets target tourists.',
        tip: 'Crossbody bags. Don\'t flash valuables. Trust your instincts. Different vibes in different areas.',
      },
      {
        topic: 'Being Black in Europe',
        honest: 'Your cousins have been here for generations. You\'ll see yourself reflected. But racism exists here too.',
        tip: 'Connect with local Black communities. Ask for recommendations. Support Black businesses.',
      },
      {
        topic: 'Getting Around',
        honest: 'Both cities have excellent public transit. Walking is the best way to discover.',
        tip: 'London: Oyster card, Citymapper app. Paris: Metro pass, walking. Uber works in both.',
      },
      {
        topic: 'Language in Paris',
        honest: 'French is required. English works in tourist areas but trying French goes far.',
        tip: 'Always start with "Bonjour." Learn basic phrases. Google Translate helps.',
      },
      {
        topic: 'The History',
        honest: 'Both empires colonized Africa and the Caribbean. The wealth you see has that history.',
        tip: 'Seek out the real history. Black Paris tours. African galleries. Know the full story.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What do I expect to find in Black London and Paris?' },
      { day: 0, prompt: 'Who are my European cousins?' },
      { day: 1, prompt: 'Where do I see us thriving?' },
      { day: 2, prompt: 'What surprises me about Black life here?' },
      { day: 3, prompt: 'How is the diaspora experience different from home?' },
      { day: 99, prompt: 'What does "global" mean to me now?' },
      { day: 99, prompt: 'Where else is our family building?' },
    ],
    lastMinute: [
      'Download Citymapper app',
      'Download Uber app',
      'Download Google Translate (add French offline)',
      'Download WhatsApp',
      'Book Eurostar if doing both cities',
      'Get Oyster card on arrival (London)',
      'Notify bank of travel dates',
    ],
  },

  finalWords: {
    message: [
      "London and Paris show you something powerful: We don't just survive. We lead.",
      'From Brixton to Belleville. From grime to galleries. From markets to Parliament. Your cousins been busy.',
      'This is what global Black looks like.',
    ],
    callToAction: {
      text: 'Ready to see the empire?',
      buttonText: 'Book Your London + Paris Trip →',
      link: 'https://maximumimpacttravel.com/destination/black-london-black-paris/',
    },
  },

  images: {
    hero: jazzClub,
    welcome: parisCafeCouple,
    culture: brixtonMarket,
    food: leMaraisShopping,
    gallery: [
      seineRiverGroup,
      londonHistoryTour,
      parisCafeCouple,
      brixtonMarket,
      leMaraisShopping,
    ],
    interludes: {
      afterWelcome: [seineRiverGroup, londonHistoryTour],
      afterBasics: [parisCafeCouple, brixtonMarket],
      afterCulture: [leMaraisShopping, jazzClub],
    },
  },
};
