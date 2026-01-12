import { GuideConfig } from '@/types/guide-config';

// Dubai images
import palmJumeirahView from '@/assets/dubai/palm-jumeirah-view.jpg';
import dubaiFountain from '@/assets/dubai/dubai-fountain.jpg';
import sheikhZayedMosque from '@/assets/dubai/sheikh-zayed-mosque.jpg';
import burjKhalifaView from '@/assets/dubai/burj-khalifa-view.jpg';
import goldSouk from '@/assets/dubai/gold-souk.jpg';
import falconrySafari from '@/assets/dubai/falconry-safari.jpg';
import desertDressSunrise from '@/assets/dubai/desert-dress-sunrise.jpg';

export const dubaiGuide: GuideConfig = {
  slug: 'dubai',
  destinationName: 'Dubai',
  tagline: 'Where Tradition Meets Tomorrow',

  theme: {
    primary: '210 100% 31%',      // Deep blue
    secondary: '45 100% 50%',     // Gold
    accent: '210 29% 24%',        // Dark slate
    sand: '39 50% 94%',           // Warm sand
  },

  hero: {
    title: 'Your Freedom Blueprint: DUBAI',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: sheikhZayedMosque,
  },

  welcome: {
    greeting: 'Family,',
    message: [
      "After helping over 2,500 people experience the magic of international travel, I've learned something important: the difference between a good trip and a life-changing journey often comes down to preparation.",
      "Dubai is unlike anywhere you've ever been. It's a place where you can have breakfast overlooking ancient souks, lunch in the world's tallest building, and dinner under the stars in the desert—all in the same day.",
      "This guide is my gift to you. Everything I wish I knew before my first visit, all the insider tips my team has gathered, and the honest truths nobody tells you about traveling to the UAE.",
      "Let's make this journey unforgettable."
    ],
    signature: 'Jay Cameron',
    signatureTitle: 'Founder, Maximum Impact Travel',
  },

  basics: {
    documents: {
      title: 'What You Need',
      items: [
        'Valid passport (6+ months validity)',
        'US citizens get visa on arrival (30 days)',
        'Printed or digital hotel confirmation',
        'Return flight confirmation',
        'Travel insurance (recommended)',
      ],
    },
    health: {
      title: 'Health & Safety',
      items: [
        'No required vaccinations for US travelers',
        'Tap water is safe but bottled preferred',
        'Excellent healthcare facilities',
        'Bring prescription meds in original containers',
        'Strong sun protection essential (SPF 50+)',
      ],
    },
    money: {
      currency: 'UAE Dirham',
      currencyCode: 'AED',
      tips: [
        'Credit cards widely accepted',
        'ATMs everywhere, use bank ATMs to avoid fees',
        'Tipping not required but appreciated (10-15%)',
        'Haggling expected in souks, not in malls',
        'Keep small bills for tips and small purchases',
      ],
    },
    weather: {
      bestMonths: 'November - March',
      temperature: 'Year-round sunshine',
      seasons: [
        {
          period: 'November - March',
          title: 'The Outdoor Season',
          tagline: 'When Dubai\'s pools, beaches, and desert come alive',
          experiences: ['Perfect beach days', 'Outdoor brunches', 'Desert adventures', 'Al fresco dining'],
          perks: 'World-class weather, peak festival season, rooftop experiences',
          travelNotes: 'Bring layers—outdoor warmth meets refreshing air-conditioned interiors'
        },
        {
          period: 'April - May',
          title: 'The Transition Season',
          tagline: 'When rates soften and pools warm up',
          experiences: ['Pool weather arrives', 'Ramadan cultural experiences', 'Sunset desert drives'],
          perks: 'Better rates begin, beach clubs buzzing, cultural depth',
          travelNotes: 'Morning and evening outdoor activities, midday indoor escapes'
        },
        {
          period: 'June - September',
          title: 'The Luxe Season',
          tagline: 'When Dubai\'s indoor wonders become your playground',
          experiences: ['World\'s best malls', 'Aquariums and attractions', 'Spa retreats', 'Night swimming'],
          perks: 'Presidential suite prices at regular rates, private shopping, pools perfect at night',
          travelNotes: 'Early morning desert drives are magical—embrace the indoor/evening lifestyle'
        },
        {
          period: 'October',
          title: 'The Awakening Season',
          tagline: 'When Dubai emerges with renewed energy',
          experiences: ['Outdoor spaces reopen', 'Festival season begins', 'Beach club openings'],
          perks: 'Shoulder season rates, excitement building, beautiful evenings',
          travelNotes: 'The city comes alive—transition from summer to peak season'
        }
      ],
    },
    packing: [
      { item: 'Passport & copies', category: 'documents', essential: true },
      { item: 'Travel insurance docs', category: 'documents', essential: true },
      { item: 'Light, modest clothing', category: 'clothing', essential: true },
      { item: 'Scarf/shawl for mosques', category: 'clothing', essential: true },
      { item: 'Comfortable walking shoes', category: 'clothing', essential: true },
      { item: 'Swimsuit', category: 'clothing' },
      { item: 'Sunglasses', category: 'essentials', essential: true },
      { item: 'SPF 50+ sunscreen', category: 'health', essential: true },
      { item: 'Light cardigan for AC', category: 'clothing', essential: true },
      { item: 'Power adapter (Type G)', category: 'tech', essential: true },
      { item: 'Phone charger & power bank', category: 'tech' },
      { item: 'Camera', category: 'tech' },
      { item: 'Prescription medications', category: 'health' },
      { item: 'Hand sanitizer', category: 'health' },
      { item: 'Lip balm (dry climate)', category: 'comfort' },
      { item: 'Reusable water bottle', category: 'comfort' },
    ],
  },

  culture: {
    language: {
      name: 'Arabic',
      greetings: [
        { word: 'As-salamu alaykum', pronunciation: 'as-sa-LAA-mu a-LAY-kum', translation: 'Peace be upon you (Hello)' },
        { word: 'Wa alaykumu s-salam', pronunciation: 'wa a-LAY-ku-mu s-sa-LAAM', translation: 'And upon you peace (Response)' },
        { word: 'Shukran', pronunciation: 'SHOOK-ran', translation: 'Thank you' },
        { word: 'Afwan', pronunciation: 'AF-wan', translation: "You're welcome" },
        { word: 'Marhaba', pronunciation: 'MAR-ha-ba', translation: 'Hello (informal)' },
        { word: 'Ma\'a salama', pronunciation: 'ma-a sa-LAA-ma', translation: 'Goodbye' },
        { word: 'Inshallah', pronunciation: 'in-SHAAL-lah', translation: 'God willing' },
        { word: 'Yalla', pronunciation: 'YAL-la', translation: "Let's go!" },
      ],
    },
    food: {
      intro: 'Dubai is a culinary melting pot with incredible variety. Here are must-try experiences:',
      items: [
        { name: 'Shawarma', description: 'Spiced meat wrapped in flatbread with garlic sauce', mustTry: true },
        { name: 'Al Machboos', description: 'Traditional Emirati spiced rice with meat', mustTry: true },
        { name: 'Luqaimat', description: 'Sweet fried dumplings with date syrup', mustTry: true },
        { name: 'Arabic Coffee (Gahwa)', description: 'Cardamom-spiced coffee, a sign of hospitality' },
        { name: 'Camel Milk Chocolate', description: 'Unique Dubai specialty, surprisingly delicious' },
        { name: 'Fresh Dates', description: 'UAE is famous for premium dates, try them all' },
        { name: 'Manakish', description: 'Flatbread with za\'atar, cheese, or meat toppings' },
        { name: 'Karak Chai', description: 'Sweet, spiced tea—the local addiction' },
      ],
    },
    customs: {
      title: 'Cultural Etiquette',
      items: [
        'Dress modestly in public (shoulders and knees covered)',
        'Remove shoes before entering mosques and some homes',
        'Use right hand for greetings and eating',
        'Public displays of affection are frowned upon',
        'Ask permission before photographing locals',
        'During Ramadan, avoid eating/drinking in public during daylight',
        'Alcohol only in licensed venues (hotels, restaurants)',
        'Friday is the holy day—some businesses close',
      ],
    },
    shopping: {
      intro: 'From traditional souks to the world\'s largest mall, Dubai is a shopper\'s paradise.',
      tips: [
        'Gold Souk: Compare prices at multiple shops before buying',
        'Spice Souk: Perfect for saffron, dates, and Arabic coffee',
        'Dubai Mall: Over 1,200 stores—wear comfortable shoes!',
        'Haggling expected in souks, not in malls',
        'Tax-free shopping for tourists (keep receipts)',
        'Best buys: Gold, spices, perfumes, electronics',
        'Beware of fake designer goods',
      ],
    },
  },

  photos: {
    intro: 'Dubai is incredibly photogenic. Here are the spots that will make your feed legendary:',
    spots: [
      {
        name: 'Burj Khalifa',
        description: 'The world\'s tallest building, stunning at sunset',
        tips: 'Book At the Top tickets in advance. Golden hour is magic.',
      },
      {
        name: 'Dubai Frame',
        description: 'Unique architectural landmark with panoramic views',
        tips: 'Go early morning to avoid crowds. Amazing symmetry shots.',
      },
      {
        name: 'Al Fahidi Historical Neighborhood',
        description: 'Old Dubai with wind towers and narrow lanes',
        tips: 'Best light in the morning. Wear something colorful against the sand walls.',
      },
      {
        name: 'Desert Safari',
        description: 'Golden dunes at sunset—absolutely iconic',
        tips: 'Book a private safari for the best photo opportunities.',
      },
      {
        name: 'Palm Jumeirah',
        description: 'The famous man-made island',
        tips: 'Helicopter or drone views are spectacular. Atlantis makes a great backdrop.',
      },
      {
        name: 'Dubai Marina',
        description: 'Modern skyline meets waterfront',
        tips: 'Blue hour (just after sunset) is perfect. Try The Walk for street-level shots.',
      },
    ],
  },

  realTalk: {
    intro: 'Let me keep it real with you. Here are things nobody tells you about Dubai:',
    items: [
      {
        topic: 'The Heat',
        honest: 'Summer in Dubai is no joke. 115°F with humidity that hits different.',
        tip: 'Plan outdoor activities for early morning or after sunset. Embrace the AC lifestyle.',
      },
      {
        topic: 'It\'s Expensive',
        honest: 'Dubai can drain your wallet fast. Hotels, restaurants, activities—it adds up.',
        tip: 'Mix high-end experiences with budget finds. Street shawarma is just as good as fancy restaurants.',
      },
      {
        topic: 'Dress Code',
        honest: 'While Dubai is modern, it\'s still a Muslim country. Dress modestly outside resorts and beaches.',
        tip: 'Carry a scarf or cardigan. You\'ll need it for mosques AND aggressive AC.',
      },
      {
        topic: 'It\'s Not All Glitz',
        honest: 'Beyond the luxury, there\'s a whole other side to Dubai—labor camps, wealth disparity.',
        tip: 'Visit Old Dubai for authentic culture. Support local businesses when possible.',
      },
      {
        topic: 'Getting Around',
        honest: 'Dubai is massive and spread out. Walking between attractions isn\'t realistic.',
        tip: 'Use the metro (it\'s excellent), Uber, or taxis. Renting a car is only worth it for desert trips.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 1, prompt: 'What does luxury mean to you? How will Dubai challenge or confirm that definition?' },
      { day: 2, prompt: 'Write about a time you experienced a different culture. What surprised you?' },
      { day: 3, prompt: 'What are you most excited to experience? What makes you nervous?' },
      { day: 4, prompt: 'How do you want to feel when you return home? What stories do you want to tell?' },
      { day: 5, prompt: 'What will you do differently on this trip compared to past vacations?' },
    ],
    lastMinute: [
      'Download offline maps for Dubai',
      'Save hotel and emergency contacts in your phone',
      'Take photos of all important documents',
      'Notify your bank of travel dates',
      'Check luggage weight limits',
      'Charge all devices and power banks',
      'Pack snacks for the flight',
      'Arrive at airport 3 hours early for international flights',
    ],
  },

  finalWords: {
    message: [
      'Dubai is going to blow your mind. The scale, the ambition, the sheer audacity of it all—there\'s nowhere else like it on Earth.',
      'But more than the buildings and the luxury, what I want you to experience is the feeling. The feeling of being somewhere completely different, of pushing your comfort zone, of realizing that the world is bigger and more beautiful than you imagined.',
      'You\'ve got this. And we\'ve got you.',
      'See you in the desert. 🏜️',
    ],
    callToAction: {
      text: 'Ready to make this happen?',
      buttonText: 'Join Our Next Info Session',
      link: '/dubai',
    },
  },

  images: {
    hero: sheikhZayedMosque,
    welcome: palmJumeirahView,
    culture: goldSouk,
    food: falconrySafari,
    gallery: [
      palmJumeirahView,
      dubaiFountain,
      burjKhalifaView,
      goldSouk,
      falconrySafari,
      desertDressSunrise,
    ],
    interludes: {
      afterWelcome: [palmJumeirahView, burjKhalifaView],
      afterBasics: [dubaiFountain, goldSouk],
      afterCulture: [falconrySafari, desertDressSunrise],
    },
  },
};

export default dubaiGuide;
