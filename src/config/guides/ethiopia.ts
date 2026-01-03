import { GuideConfig } from '@/types/guide-config';

export const ethiopiaGuide: GuideConfig = {
  slug: 'ethiopia',
  destinationName: 'Ethiopia',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '120 45% 30%',
    secondary: '50 80% 50%',
    accent: '0 70% 45%',
    sand: '45 25% 88%',
  },

  hero: {
    title: 'Your Freedom Blueprint: ETHIOPIA',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: '/placeholder.svg',
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'Ethiopia is the only African country that wrote its own story.',
      "After 2,500 travelers, Ethiopia still stands alone. Never colonized (we don't count Italy's 5 years). Christianity since 330 AD. Their own alphabet. Their own time system. Their own coffee ceremony.",
      'This guide is the truth about Ethiopia. The real preparation.',
      "Let's get you ready for the root of it all.",
    ],
    signature: 'Jay Cameron',
    signatureTitle: 'Founder, Maximum Impact Travel',
  },

  basics: {
    documents: {
      title: 'Documents You Need',
      items: [
        'Passport (valid 6+ months)',
        'Ethiopia e-visa ($52-82 online)',
        'Return ticket',
        'Yellow fever cert (if coming from risk country)',
        'Travel insurance (recommended)',
        'Vaccination record',
        'Passport copies',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'Yellow fever vaccine recommended',
        'Hepatitis A & B recommended',
        'Typhoid recommended',
        'Malaria pills (lowlands only)',
        'Altitude sickness medication (Addis is 7,700 ft)',
        'Sunscreen (high altitude sun is strong)',
        'Lip balm',
        'Stomach medicine',
        'Basic first aid',
      ],
    },
    money: {
      currency: 'Ethiopian Birr',
      currencyCode: 'ETB',
      tips: [
        'Bring $500-800 USD cash',
        'ATMs in cities only',
        'Cards rarely work',
        'Injera meal: $3-10',
        'Coffee ceremony: $2-5',
        'Taxi: $5-10',
        'Crafts: $10-50',
        'Church entry: $5-20',
      ],
    },
    weather: {
      bestMonths: 'October - May (Dry Season)',
      temperature: '50-80°F (varies greatly by altitude)',
      tips: [
        'Dry season: Oct-May (best)',
        'Rainy season: June-Sept',
        'Highlands cool always',
        'Lowlands hot always',
        'Layers essential',
      ],
    },
    packing: [
      { item: 'Layers (temperature varies by altitude)', category: 'clothing', essential: true },
      { item: 'Modest clothes (religious country)', category: 'clothing', essential: true },
      { item: 'Walking shoes', category: 'clothing', essential: true },
      { item: 'Scarf for churches', category: 'clothing', essential: true },
      { item: 'Sunglasses', category: 'clothing' },
      { item: 'Light jacket', category: 'clothing' },
      { item: 'Altitude medicine', category: 'health', essential: true },
      { item: 'Sunscreen (high altitude)', category: 'health', essential: true },
      { item: 'Lip balm', category: 'health' },
      { item: 'Stomach meds', category: 'health' },
      { item: 'Basic first aid', category: 'health' },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'E-visa printout', category: 'documents', essential: true },
      { item: 'Cash USD', category: 'documents', essential: true },
    ],
  },

  culture: {
    language: {
      name: 'Amharic',
      greetings: [
        { word: 'Selam', pronunciation: 'seh-LAHM', translation: 'Hello/Peace' },
        { word: 'Ameseginalehu', pronunciation: 'ah-meh-seh-gih-NAH-leh-hu', translation: 'Thank you' },
        { word: 'Awo', pronunciation: 'ah-WOH', translation: 'Yes' },
        { word: 'Aye', pronunciation: 'AH-yeh', translation: 'No' },
        { word: 'Tinish', pronunciation: 'tih-NISH', translation: 'A little' },
        { word: 'Betam', pronunciation: 'beh-TAHM', translation: 'Very/A lot' },
        { word: 'Injera', pronunciation: 'in-JEH-rah', translation: 'Bread of life' },
      ],
    },
    food: {
      intro: 'Ethiopian cuisine is communal, flavorful, and unlike anything else in the world.',
      items: [
        { name: 'Injera', description: 'Spongy sourdough bread - you eat everything on it', mustTry: true },
        { name: 'Doro Wat', description: 'Spicy chicken stew with egg - the national dish', mustTry: true },
        { name: 'Kitfo', description: 'Ethiopian steak tartare (raw or rare beef)', mustTry: true },
        { name: 'Shiro', description: 'Smooth chickpea stew - comfort food' },
        { name: 'Tibs', description: 'Sautéed meat with vegetables' },
        { name: 'Coffee Ceremony', description: 'Three cups minimum - this is sacred', mustTry: true },
      ],
    },
    customs: {
      title: 'Eating & Cultural Customs',
      items: [
        'Eat with right hand only',
        'Share from one plate - this is communion',
        'Gursha - feeding each other shows love',
        'Coffee ceremony takes time - embrace it',
        'Remove shoes in churches',
        'No photos during religious services',
        'Respect fasting days (Wednesday, Friday)',
        'Dress conservatively always',
      ],
    },
    shopping: {
      intro: "Ethiopia's treasures are ancient, sacred, and found nowhere else.",
      tips: [
        'Coffee - birthplace of coffee, the best',
        'Orthodox crosses - intricate, ancient designs',
        'Traditional clothes - white cotton with borders',
        'Handwoven scarves - beautiful craftsmanship',
        'Ancient books - leather-bound manuscripts',
        'Frankincense - used for centuries',
        'Merkato - largest open market in Africa',
        'Shiro Meda - traditional clothes',
        'Entoto Market - local crafts',
        'Bargaining expected but gentle',
      ],
    },
  },

  photos: {
    intro: 'Capture the ancient wonders and living traditions of unconquered Ethiopia.',
    spots: [
      { name: 'Lalibela Churches', description: 'Rock-hewn churches carved from solid stone', tips: 'Early morning light, hire a guide' },
      { name: 'Coffee Ceremony', description: 'Three rounds of tradition', tips: 'Ask permission, capture the pour' },
      { name: 'Blue Nile Falls', description: 'Power of water', tips: 'Rainy season for best flow' },
      { name: 'Simien Mountains', description: 'Roof of Africa', tips: 'Sunrise for dramatic light' },
      { name: 'Harar Walls', description: 'Ancient walled city', tips: 'Hyena feeding at night' },
      { name: 'Priest with Cross', description: 'Living tradition', tips: 'Always ask permission and tip' },
      { name: 'Injera Spread', description: 'Colorful feast photography', tips: 'Overhead shot, natural light' },
      { name: 'Traditional Dress', description: 'White cotton beauty', tips: 'Sunday church for best outfits' },
      { name: 'Timkat Festival', description: 'Epiphany celebration', tips: 'January timing required' },
      { name: "Lucy's Bones", description: 'Our 3-million-year-old ancestor', tips: 'National Museum, no flash' },
    ],
  },

  realTalk: {
    intro: 'What you need to know about this unique, unconquered nation.',
    items: [
      {
        topic: 'Altitude',
        honest: 'Addis Ababa is at 7,700 feet. You will feel it. Take it slow the first day.',
        tip: 'Drink water. Move slowly. Altitude medication helps.',
      },
      {
        topic: 'Time System',
        honest: 'Ethiopia uses its own calendar (13 months) and clock (sunrise = 1:00). It takes adjustment.',
        tip: 'Confirm times in "European time" for clarity.',
      },
      {
        topic: 'Church Etiquette',
        honest: 'Orthodox Christianity is the soul of Ethiopia. Churches are sacred, not museums.',
        tip: 'Dress conservative. Remove shoes. No photos during service. Scarves for women.',
      },
      {
        topic: 'Communication',
        honest: 'Ethio Telecom is the only carrier. WiFi can be spotty outside Addis.',
        tip: 'Get SIM at airport. WhatsApp when connected. Embrace being unplugged.',
      },
      {
        topic: 'Getting Around',
        honest: 'Domestic flights are the best way to cover distances. Roads can be rough.',
        tip: 'Ethiopian Airlines flies everywhere. Book internal flights in advance.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What does "unconquered" mean to me?' },
      { day: 0, prompt: 'What traditions do I keep no matter what?' },
      { day: 1, prompt: 'What does faith look like here?' },
      { day: 2, prompt: 'How does time feel different?' },
      { day: 3, prompt: 'What has survived for thousands of years?' },
      { day: 99, prompt: 'What traditions will I protect?' },
      { day: 99, prompt: 'What will I refuse to give up?' },
    ],
    lastMinute: [
      'Download XE Currency app',
      'Download WhatsApp',
      'Download Google Translate (add Amharic)',
      'Book Ethiopian Airlines internal flights',
      'Print e-visa',
      'Bring cash USD',
      'Pack altitude medication',
      'Notify bank of travel dates',
    ],
  },

  finalWords: {
    message: [
      'Ethiopia teaches you about keeping your own.',
      'Your calendar. Your alphabet. Your faith. Your food. When the whole world says change, sometimes power means saying no.',
      "13 months of sunshine. Time moves different here. Maybe that's the secret.",
    ],
    callToAction: {
      text: 'Ready to see unconquered?',
      buttonText: 'Book Your Ethiopia Trip →',
      link: 'https://maximumimpacttravel.com/destination/ethiopia/',
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
