import { GuideConfig } from '@/types/guide-config';

// Egypt Images
import heroImage from '@/assets/egypt/pyramids-sunrise.jpg';
import welcomeImage from '@/assets/egypt/nile-sunset-group.jpg';
import cultureImage from '@/assets/egypt/khan-bazaar.jpg';
import foodImage from '@/assets/egypt/cruise-dinner.jpg';

// Videos
import heroVideo from '@/assets/egypt/hero-pyramids.mp4';
import ctaVideo from '@/assets/egypt/cta-sunset-pyramids.mp4';

import abuSimbelApproach from '@/assets/egypt/abu-simbel-approach.jpg';
import abuSimbelScale from '@/assets/egypt/abu-simbel-scale.jpg';
import balloonValley from '@/assets/egypt/balloon-valley.jpg';
import cairoRooftop from '@/assets/egypt/cairo-rooftop.jpg';
import cairoSkyline from '@/assets/egypt/cairo-skyline.jpg';
import cruiseContemplation from '@/assets/egypt/cruise-contemplation.jpg';
import feluccaNile from '@/assets/egypt/felucca-nile.jpg';
import feluccaSunset from '@/assets/egypt/felucca-sunset.jpg';
import firstPyramidView from '@/assets/egypt/first-pyramid-view.jpg';
import gizaGroup from '@/assets/egypt/giza-group.jpg';
import hatshepsutTemple from '@/assets/egypt/hatshepsut-temple.jpg';
import karnakHall from '@/assets/egypt/karnak-hall.jpg';
import luxorNight from '@/assets/egypt/luxor-night.jpg';
import museumInterior from '@/assets/egypt/museum-interior.jpg';
import nubianHouse from '@/assets/egypt/nubian-house.jpg';
import nubianTea from '@/assets/egypt/nubian-tea.jpg';
import nubianVillage from '@/assets/egypt/nubian-village.jpg';
import nubianWelcome from '@/assets/egypt/nubian-welcome.jpg';
import pyramidTouch from '@/assets/egypt/pyramid-touch.jpg';
import sphinxCouple from '@/assets/egypt/sphinx-couple.jpg';
import spiceMarket from '@/assets/egypt/spice-market.jpg';
import tombInterior from '@/assets/egypt/tomb-interior.jpg';
import tutankhamunExhibit from '@/assets/egypt/tutankhamun-exhibit.jpg';
import valleyKingsEntrance from '@/assets/egypt/valley-kings-entrance.jpg';

export const egyptGuide: GuideConfig = {
  slug: 'egypt',
  destinationName: 'Egypt',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '45 80% 45%',
    secondary: '0 65% 40%',
    accent: '25 85% 50%',
    sand: '40 45% 90%',
  },

  hero: {
    title: 'Your Freedom Blueprint: EGYPT',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: heroImage,
    backgroundVideo: heroVideo,
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'Egypt is where human civilization reached for the sky.',
      "I've taken 2,500 people around the world, and standing at the pyramids never gets old. This is where our ancestors built monuments that still stand 4,500 years later.",
      'This guide is everything real. Everything that helps.',
      "Let's get you ready for the pharaohs.",
    ],
    signature: 'Jay Cameron',
    signatureTitle: 'Founder & CEO, Maximum Impact Travel',
    hostImage: 'https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg',
  },

  basics: {
    documents: {
      title: 'Documents You Need',
      items: [
        'Passport (valid 6+ months)',
        'Egypt visa ($25 on arrival or e-visa)',
        'Return ticket',
        'Travel insurance (recommended)',
        'Hotel confirmation',
        'Passport copies',
        'Cash for visa fee',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'No required vaccinations',
        'Hepatitis A & B recommended',
        'Typhoid recommended',
        'Stomach medicine (essential)',
        'Sunscreen SPF 50+',
        'Electrolyte packets',
        'Hand sanitizer',
        'Prescription meds in original containers',
      ],
    },
    money: {
      currency: 'Egyptian Pound',
      currencyCode: 'EGP',
      tips: [
        'Bring $600-1000 USD cash',
        'Exchange at official banks only',
        'ATMs available in cities',
        'Small bills essential for tips',
        'Bargaining expected everywhere',
        'Meal: $5-15',
        'Taxi: $3-10',
        'Temple tip: $2-5',
        'Cruise tip: $10-20/day',
      ],
    },
    weather: {
      bestMonths: 'October - April (Cool Season)',
      temperature: '60-95°F depending on season',
      tips: [
        'Winter (Oct-Feb): Perfect, cool nights',
        'Spring (Mar-Apr): Warm, occasional dust',
        'Summer (May-Sep): Extremely hot 100°F+',
        'Cruise: Winter is ideal',
      ],
    },
    packing: [
      { item: 'Modest clothing', category: 'clothing', essential: true },
      { item: 'Comfortable walking shoes', category: 'clothing', essential: true },
      { item: 'Hat with strap', category: 'clothing', essential: true },
      { item: 'Light layers', category: 'clothing' },
      { item: 'Swimsuit for Nile cruise', category: 'clothing' },
      { item: 'Warm layer for desert nights', category: 'clothing' },
      { item: 'Power adapter (Type C)', category: 'tech', essential: true },
      { item: 'Camera with zoom', category: 'tech' },
      { item: 'Stomach medicine', category: 'health', essential: true },
      { item: 'Sunscreen SPF 50+', category: 'health', essential: true },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'Visa fee in cash', category: 'documents', essential: true },
    ],
  },

  culture: {
    language: {
      name: 'Arabic',
      greetings: [
        { word: 'Salaam', pronunciation: 'sah-LAHM', translation: 'Hello/Peace' },
        { word: 'Shukran', pronunciation: 'SHOO-krahn', translation: 'Thank you' },
        { word: 'Aiwa', pronunciation: 'EYE-wah', translation: 'Yes' },
        { word: 'La', pronunciation: 'LAH', translation: 'No' },
        { word: 'Yalla', pronunciation: 'YAH-lah', translation: 'Let\'s go' },
      ],
    },
    food: {
      intro: 'Egyptian cuisine blends ancient traditions with Mediterranean flavors.',
      items: [
        { name: 'Koshari', description: 'Egypt\'s national dish - pasta, rice, lentils, chickpeas', mustTry: true },
        { name: 'Ful Medames', description: 'Fava bean breakfast staple', mustTry: true },
        { name: 'Shawarma', description: 'Rotisserie meat in pita' },
        { name: 'Ta\'ameya', description: 'Egyptian falafel - made with fava beans' },
        { name: 'Molokhia', description: 'Green soup with rabbit or chicken', mustTry: true },
        { name: 'Mahshi', description: 'Stuffed vegetables' },
        { name: 'Baklava', description: 'Sweet phyllo pastry' },
        { name: 'Hibiscus Tea', description: 'Karkade - sweet and refreshing' },
      ],
    },
    customs: {
      title: 'Cultural Customs',
      items: [
        'Dress modestly (knees and shoulders covered)',
        'Right hand for eating and greetings',
        'Remove shoes in mosques',
        'Friday is holy day',
        'Bargain at markets - it\'s expected',
        'Tipping is essential everywhere',
        'Ask before photographing people',
        'Respect prayer times',
      ],
    },
    shopping: {
      intro: 'Khan el-Khalili has been a bazaar for 600 years.',
      tips: [
        'Papyrus art - get certified authentic',
        'Alabaster - from Luxor artisans',
        'Spices - cumin, saffron, hibiscus',
        'Perfume oils - traditional scents',
        'Cotton - Egypt is famous for it',
        'Gold and silver jewelry',
        'Start at 25% of asking price',
        'Walk away technique works',
        'Khan el-Khalili for everything',
      ],
    },
  },

  photos: {
    intro: 'Egypt offers some of the most iconic photo opportunities on Earth.',
    spots: [
      { name: 'Pyramids of Giza', description: 'Sunrise or sunset with the pyramids', tips: 'Panoramic point for all three' },
      { name: 'The Sphinx', description: 'The guardian of the pyramids', tips: 'Best light in morning' },
      { name: 'Abu Simbel', description: 'Ramesses II\'s massive temples', tips: 'Arrive at 4am for sunrise alignment' },
      { name: 'Valley of the Kings', description: 'Tomb interiors when allowed', tips: 'No flash, be respectful' },
      { name: 'Karnak Temple', description: 'Hypostyle Hall columns', tips: 'Morning or late afternoon light' },
      { name: 'Nile Felucca', description: 'Traditional sailboat at sunset', tips: 'Golden hour is magic' },
      { name: 'Luxor Temple', description: 'Illuminated at night', tips: 'Go after dark for drama' },
      { name: 'Hot Air Balloon', description: 'Aerial view of Luxor', tips: 'Worth the early wakeup' },
    ],
  },

  realTalk: {
    intro: 'What you need to know to navigate Egypt confidently.',
    items: [
      {
        topic: 'Tipping Culture',
        honest: 'Everyone expects baksheesh (tips). Guards, bathroom attendants, everyone.',
        tip: 'Keep 5-10 EGP notes ready at all times. Budget $20-30/day for tips.',
      },
      {
        topic: 'The Heat',
        honest: 'It gets brutally hot. 100°F+ in summer. Even winter sun is strong.',
        tip: 'Start early, rest midday, carry water always. Hat and sunscreen non-negotiable.',
      },
      {
        topic: 'Vendors',
        honest: 'They are persistent. Very persistent. "Looking is free" is their opener.',
        tip: 'Polite but firm "la shukran" (no thank you). Keep walking. Don\'t engage if not interested.',
      },
      {
        topic: 'Stomach Issues',
        honest: 'Egyptian tummy happens. Water and street food are usually the cause.',
        tip: 'Bottled water only. Avoid ice. Skip raw vegetables first few days. Bring Imodium.',
      },
      {
        topic: 'Photography',
        honest: 'Many sites charge camera fees. Some tombs ban photos entirely.',
        tip: 'Budget for camera tickets. Respect the no-photo signs. Phone cameras often fine.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What does ancient history mean to me?' },
      { day: 0, prompt: 'What am I most excited to see?' },
      { day: 1, prompt: 'How did the pyramids make me feel?' },
      { day: 2, prompt: 'What surprised me today?' },
      { day: 3, prompt: 'What moment took my breath away?' },
      { day: 99, prompt: 'What do I want to remember forever?' },
      { day: 99, prompt: 'How did Egypt change me?' },
    ],
    lastMinute: [
      'Download XE Currency app',
      'Download Google Translate (Arabic offline)',
      'Download WhatsApp',
      'Print hotel confirmation',
      'Have visa fee in USD cash',
      'Pack stomach medicine',
      'Notify bank of travel',
      'Charge all batteries',
    ],
  },

  finalWords: {
    message: [
      'Egypt humbles you.',
      'You stand where pharaohs stood. You touch stones that have seen 4,500 years. You float on the river that fed the greatest civilization in history.',
      'This isn\'t a vacation. It\'s a pilgrimage to human greatness.',
    ],
    callToAction: {
      text: 'Ready for Egypt?',
      buttonText: 'Check out our Egypt info session →',
      link: 'https://www.travelwithmit.com/egypt',
    },
  },

  images: {
    hero: heroImage,
    heroVideo: heroVideo,
    ctaVideo: ctaVideo,
    welcome: welcomeImage,
    culture: cultureImage,
    food: foodImage,
    // Each image used only once - distributed across sections
    gallery: [
      cairoSkyline,
      karnakHall,
      tombInterior,
      valleyKingsEntrance,
    ],
    interludes: {
      afterWelcome: [firstPyramidView, pyramidTouch, gizaGroup],
      afterBasics: [feluccaSunset, cruiseContemplation, feluccaNile],
      afterCulture: [nubianWelcome, nubianTea, nubianVillage],
      afterPhotos: [balloonValley, abuSimbelScale, hatshepsutTemple],
      afterRealTalk: [luxorNight, cairoRooftop, sphinxCouple],
    },
    strips: {
      safari: [
        { src: abuSimbelApproach, caption: 'Abu Simbel approach' },
        { src: museumInterior, caption: 'Egyptian Museum' },
        { src: tutankhamunExhibit, caption: 'Tutankhamun treasures' },
      ],
      culture: [
        { src: nubianHouse, caption: 'Nubian house' },
        { src: spiceMarket, caption: 'Spice market' },
      ],
    },
  },
};
