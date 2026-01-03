import { GuideConfig } from '@/types/guide-config';

export const southafricaGuide: GuideConfig = {
  slug: 'southafrica',
  destinationName: 'South Africa',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '120 50% 30%',
    secondary: '45 80% 50%',
    accent: '0 70% 50%',
    sand: '45 25% 90%',
  },

  hero: {
    title: 'Your Freedom Blueprint: SOUTH AFRICA',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: '/placeholder.svg',
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'South Africa is proof that change is possible.',
      "After 2,500 travelers, I've seen how South Africa hits people. It's beautiful and complex. Painful history, powerful present. Wine country and townships. Penguins and protests.",
      'This guide is the real deal. What actually matters.',
      "Let's get you ready for the Rainbow Nation.",
    ],
    signature: 'Jay Cameron',
    signatureTitle: 'Founder, Maximum Impact Travel',
  },

  basics: {
    documents: {
      title: 'Documents You Need',
      items: [
        'Passport (valid 30 days past return)',
        'No visa needed (US citizens, 90 days)',
        'Return ticket',
        'Two blank passport pages',
        'Travel insurance (recommended)',
        'Yellow fever cert (if coming from risk country)',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'Hepatitis A & B recommended',
        'Typhoid recommended',
        'Malaria pills (only for Kruger area)',
        'Sunscreen SPF 50+',
        'Basic first aid supplies',
        'Stomach medicine',
        'Allergy medication',
      ],
    },
    money: {
      currency: 'South African Rand',
      currencyCode: 'ZAR',
      tips: [
        'Bring $500-1000 cash',
        'Cards work everywhere',
        'ATMs everywhere',
        'Meal: $8-20',
        'Wine tasting: $5-10',
        'Taxi/Uber: $5-15',
        'Crafts: $10-100',
      ],
    },
    weather: {
      bestMonths: 'September - November (Spring) or March - May (Fall)',
      temperature: '50-85°F depending on season',
      tips: [
        'Seasons opposite to US',
        'Summer: Dec-Feb (hot)',
        'Fall: March-May (perfect)',
        'Winter: June-Aug (cool)',
        'Spring: Sept-Nov (beautiful)',
      ],
    },
    packing: [
      { item: 'Layers (weather changes fast)', category: 'clothing', essential: true },
      { item: 'Walking shoes', category: 'clothing', essential: true },
      { item: 'Dressy outfit (Cape Town is stylish)', category: 'clothing' },
      { item: 'Swimsuit', category: 'clothing' },
      { item: 'Windbreaker', category: 'clothing', essential: true },
      { item: 'Power adapter (Type M)', category: 'tech', essential: true },
      { item: 'Sunscreen SPF 50+', category: 'health', essential: true },
      { item: 'Basic first aid', category: 'health' },
      { item: 'Stomach meds', category: 'health' },
      { item: 'Allergy medicine', category: 'health' },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'Travel insurance docs', category: 'documents' },
    ],
  },

  culture: {
    language: {
      name: 'Multiple (11 official languages)',
      greetings: [
        { word: 'Sawubona', pronunciation: 'sah-woo-BOH-nah', translation: 'Hello (Zulu)' },
        { word: 'Enkosi', pronunciation: 'en-KOH-see', translation: 'Thank you (Xhosa)' },
        { word: 'Howzit', pronunciation: 'HOW-zit', translation: 'How are you (slang)' },
        { word: 'Lekker', pronunciation: 'LACK-er', translation: 'Great/nice' },
        { word: 'Shame', pronunciation: 'shaym', translation: 'Sympathy/cute' },
        { word: 'Just now', pronunciation: 'just now', translation: 'Later (not now)' },
        { word: 'Now now', pronunciation: 'now now', translation: 'Soon' },
        { word: 'Braai', pronunciation: 'BRY', translation: 'BBQ' },
      ],
    },
    food: {
      intro: 'South African cuisine reflects its diverse heritage - Dutch, Malay, African, Indian.',
      items: [
        { name: 'Braai', description: 'BBQ culture - way of life here', mustTry: true },
        { name: 'Biltong', description: 'Dried cured meat - better than jerky', mustTry: true },
        { name: 'Boerewors', description: 'Spiced sausage spiral', mustTry: true },
        { name: 'Bunny Chow', description: 'Curry served in hollowed bread', mustTry: true },
        { name: 'Bobotie', description: 'Spiced minced meat with egg topping' },
        { name: 'Koeksisters', description: 'Syrup-soaked twisted doughnuts' },
        { name: 'Wine', description: 'World class - especially Stellenbosch', mustTry: true },
      ],
    },
    customs: {
      title: 'Cultural Customs',
      items: [
        'Ubuntu philosophy - "I am because we are"',
        'Respect for elders is paramount',
        'Handshakes can be elaborate',
        'Braai is a social institution',
        'Township tours should be guided and respectful',
        'Acknowledge the history while celebrating the progress',
      ],
    },
    shopping: {
      intro: 'From world-class wines to traditional crafts, South Africa offers unique treasures.',
      tips: [
        'Wine - world-renowned quality',
        'Diamonds - buy certified',
        'African art - vibrant and meaningful',
        'Beadwork - Zulu craftsmanship',
        'Leather goods - quality craftsmanship',
        'Rooibos tea - only grows here',
        'V&A Waterfront for upscale shopping',
        'Greenmarket Square for crafts',
        'Neighbourgoods Market for local goods',
      ],
    },
  },

  photos: {
    intro: 'Capture the stunning beauty and powerful history of the Rainbow Nation.',
    spots: [
      { name: 'Table Mountain', description: 'Cable car or hike - iconic view', tips: 'Early morning before clouds roll in' },
      { name: 'Cape of Good Hope', description: 'Edge of Africa', tips: 'Dramatic lighthouse shots' },
      { name: 'Penguins at Boulders', description: 'Yes, African penguins exist', tips: 'Early morning for active penguins' },
      { name: 'Robben Island', description: "Mandela's cell - powerful history", tips: 'Respectful, documentary style' },
      { name: 'Wine Country', description: 'Stellenbosch rolling vineyards', tips: 'Golden hour for vineyard shots' },
      { name: 'Township Art', description: 'Colorful houses of Bo-Kaap', tips: 'Early morning light' },
      { name: 'Clifton Beach', description: 'Perfect white sand', tips: 'Sunset with Twelve Apostles backdrop' },
      { name: 'Big Five', description: 'If you do Kruger', tips: 'Patience and good guide' },
      { name: 'District Six Museum', description: 'Powerful history exhibit', tips: 'Check photo policies' },
      { name: 'Signal Hill Sunset', description: 'City lights from above', tips: 'Stay for blue hour' },
    ],
  },

  realTalk: {
    intro: 'What you need to know to navigate South Africa safely and respectfully.',
    items: [
      {
        topic: 'City Safety',
        honest: 'Crime exists like any major city. Common sense applies.',
        tip: "Uber everywhere. Don't flash valuables. Day tours for townships. Avoid downtown at night. Trust your guides.",
      },
      {
        topic: 'The History',
        honest: 'Apartheid ended in 1994. The country is still healing. The progress is real. The work continues.',
        tip: 'Listen. Learn. Ask respectful questions. Understand the complexity.',
      },
      {
        topic: 'Communication',
        honest: 'Everyone speaks English. Communication is easy.',
        tip: 'Get Vodacom SIM. WiFi everywhere. WhatsApp is king.',
      },
      {
        topic: 'Load Shedding',
        honest: 'Scheduled power outages happen. Hotels and restaurants have generators.',
        tip: 'Download the load shedding app. Carry a power bank.',
      },
      {
        topic: 'The Beauty',
        honest: 'It will take your breath away. Table Mountain. The wine lands. The coast. All of it.',
        tip: 'Bring extra camera batteries. You\'ll use them.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What do I know about apartheid?' },
      { day: 0, prompt: 'What does reconciliation mean to me?' },
      { day: 1, prompt: 'What beauty surprised me today?' },
      { day: 2, prompt: 'What history hurt to learn?' },
      { day: 3, prompt: 'How do people here move forward?' },
      { day: 99, prompt: 'What conversations do I need to have at home?' },
      { day: 99, prompt: 'What changes are possible when people decide to change?' },
    ],
    lastMinute: [
      'Download Uber (essential)',
      'Download XE Currency app',
      'Download WhatsApp',
      'Download load shedding app',
      'Check visa requirements if not US citizen',
      'Notify bank of travel dates',
      'Pack layers - weather changes fast',
    ],
  },

  finalWords: {
    message: [
      'South Africa teaches you that beauty and pain can live in the same place.',
      'Wine grows where slaves died. Penguins swim where prisoners looked. Democracy rises where apartheid ruled.',
      "It's complicated. It's gorgeous. It's real.",
    ],
    callToAction: {
      text: 'Ready to see resilience?',
      buttonText: 'Check out our South Africa info session →',
      link: 'https://www.travelwithmit.com/southafrica',
    },
  },

  images: {
    hero: '/placeholder.svg',
    welcome: '/placeholder.svg',
    culture: '/placeholder.svg',
    food: '/placeholder.svg',
    gallery: [],
  },
};
