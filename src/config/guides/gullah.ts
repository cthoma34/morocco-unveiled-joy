import { GuideConfig } from '@/types/guide-config';

export const gullahGuide: GuideConfig = {
  slug: 'gullah-guide',
  destinationName: 'Gullah Geechee',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '200 60% 35%',
    secondary: '35 70% 45%',
    accent: '150 50% 40%',
    sand: '35 30% 90%',
  },

  hero: {
    title: 'Your Freedom Blueprint: GULLAH GEECHEE',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: '/placeholder.svg',
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'Africa never left the Low Country.',
      "After 2,500 travelers, the Gullah Geechee Corridor still amazes me. From North Carolina to Florida, our ancestors kept it all. Language. Food. Baskets. Beliefs. Right here in America.",
      'This guide is about finding Africa without crossing water.',
      "Let's get you ready.",
    ],
    signature: 'Jay Cameron',
    signatureTitle: 'Founder, Maximum Impact Travel',
  },

  basics: {
    documents: {
      title: 'Documents You Need',
      items: [
        "Driver's license",
        'No passport needed',
        'Hotel confirmations',
        'Travel insurance (optional)',
        'Car rental info',
        'Emergency contacts',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'No special vaccines needed',
        'Regular US healthcare applies',
        'Pharmacies everywhere',
        'Mosquito spray (serious!)',
        'Sunscreen',
        'Allergy medicine (pollen is heavy)',
        'Basic first aid',
      ],
    },
    money: {
      currency: 'US Dollar',
      currencyCode: 'USD',
      tips: [
        'Cash for small vendors',
        'Cards work most places',
        'Venmo/Cash App common',
        'Local meal: $10-20',
        'Sweetgrass basket: $50-500',
        'Tour guide tip: $20-30',
        'Crafts: $20-200',
      ],
    },
    weather: {
      bestMonths: 'October - April (cooler, less humid)',
      temperature: '60-95°F depending on season',
      tips: [
        'Hot and humid: May-September (80-95°F)',
        'Nice weather: October-April (60-80°F)',
        'Hurricane season: June-November',
        'Mosquitos: Always present',
      ],
    },
    packing: [
      { item: 'Light, breathable clothes', category: 'clothing', essential: true },
      { item: 'Rain jacket', category: 'clothing' },
      { item: 'Comfortable walking shoes', category: 'clothing', essential: true },
      { item: 'Hat for sun protection', category: 'clothing' },
      { item: 'Sunglasses', category: 'clothing' },
      { item: 'Bug spray (lots of it)', category: 'health', essential: true },
      { item: 'Sunscreen', category: 'health', essential: true },
      { item: 'Allergy medication', category: 'health' },
      { item: "Driver's license", category: 'documents', essential: true },
      { item: 'Car rental confirmation', category: 'documents', essential: true },
    ],
  },

  culture: {
    language: {
      name: 'Gullah',
      greetings: [
        { word: 'Cumya', pronunciation: 'come-YAH', translation: 'Come here' },
        { word: 'Tankya', pronunciation: 'TANK-yah', translation: 'Thank you' },
        { word: 'Hunnuh', pronunciation: 'HUN-nuh', translation: 'You all' },
        { word: 'Disya', pronunciation: 'DIS-yah', translation: 'This here' },
        { word: 'E', pronunciation: 'ee', translation: 'He/she/it' },
        { word: 'Tief', pronunciation: 'teef', translation: 'Steal' },
        { word: 'Nyam', pronunciation: 'nyam', translation: 'Eat' },
        { word: 'Geechee', pronunciation: 'GEE-chee', translation: 'The people' },
      ],
    },
    food: {
      intro: 'Gullah cuisine is the root of Southern cooking - direct links to West Africa.',
      items: [
        { name: 'Red Rice', description: 'The original - ancestor of jambalaya', mustTry: true },
        { name: "Hoppin' John", description: 'Black-eyed peas and rice - New Year tradition', mustTry: true },
        { name: 'She-Crab Soup', description: 'Creamy Low Country classic', mustTry: true },
        { name: 'Shrimp and Grits', description: 'The dish that started it all' },
        { name: 'Okra Soup', description: 'Direct from West Africa' },
        { name: 'Benne Wafers', description: 'Sesame cookies - African sesame seeds' },
        { name: 'Frogmore Stew', description: 'Low Country boil with everything' },
        { name: 'Sweet Potato Pie', description: 'Soul food essential' },
      ],
    },
    customs: {
      title: 'Respectful Visiting',
      items: [
        'This is living culture, not a museum',
        'Ask before taking photos',
        'Buy from local artisans directly',
        'Listen more than you talk',
        'Church is serious - dress and act accordingly',
        'Respect elders - they hold the knowledge',
        'Stories take time - don\'t rush',
      ],
    },
    shopping: {
      intro: 'Authentic Gullah crafts are handmade and carry generations of tradition.',
      tips: [
        'Sweetgrass baskets - expensive but worth it (takes weeks to make)',
        'Cast iron cooking tools',
        'Indigo-dyed cloth',
        'Shell art',
        'Story quilts',
        'Root work items',
        'Charleston City Market',
        'Roadside stands (often the best)',
        'Penn Center gift shop',
        'Local church sales',
      ],
    },
  },

  photos: {
    intro: 'Capture the living African traditions preserved on American soil.',
    spots: [
      { name: 'Sweetgrass Basket Weaver', description: 'Living history in their hands', tips: 'Ask permission, often requires purchase' },
      { name: 'Praise House', description: 'Small wooden churches', tips: 'Exterior shots respectful, ask before interior' },
      { name: 'Live Oaks with Moss', description: 'Iconic Southern landscape', tips: 'Early morning or golden hour' },
      { name: 'Shrimp Boats', description: 'Working waters', tips: 'Dawn when boats head out' },
      { name: 'Penn Center', description: 'Historic freedom school', tips: 'Museum has exhibits' },
      { name: 'Rice Fields', description: 'Where our expertise built wealth', tips: 'ACE Basin area' },
      { name: 'Cemetery Spirit Bottles', description: 'Protection tradition for graves', tips: 'Very respectful, never touch' },
      { name: 'Indigo Vats', description: 'Blue gold history', tips: 'Middleton Place has restored vats' },
      { name: 'Beach Sunrise', description: 'Atlantic memories', tips: 'Hunting Island or Edisto' },
      { name: 'Church Fans', description: 'Sunday tradition detail', tips: 'Ask for one as a gift' },
    ],
  },

  realTalk: {
    intro: 'What you need to know about visiting this sacred cultural corridor.',
    items: [
      {
        topic: 'Getting Around',
        honest: 'A car is absolutely necessary. GPS gets confused on islands. Ask locals for directions.',
        tip: 'Ferry schedules matter for some islands. Plan ahead.',
      },
      {
        topic: 'Cultural Sensitivity',
        honest: 'This is not a theme park. Real people live here. Their culture survived against all odds.',
        tip: 'Come as a learner, not a tourist. Support the community financially.',
      },
      {
        topic: 'Development Pressure',
        honest: 'Resorts and developers are buying land. Gullah families are fighting to stay. Your dollars matter.',
        tip: 'Stay at Gullah-owned accommodations. Eat at local restaurants. Buy from basket ladies directly.',
      },
      {
        topic: 'Communication',
        honest: 'Slow down. Listen for the rhythm of Gullah speech. Stories take time to tell.',
        tip: 'Put your phone away. Be present. The elders have so much to share.',
      },
      {
        topic: 'The Emotional Weight',
        honest: 'This is where Africa survived slavery on American soil. It\'s powerful and sometimes heavy.',
        tip: 'Give yourself space to feel. Journal. Reflect. This is your heritage too.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What parts of Africa survived in me?' },
      { day: 0, prompt: 'What did my family keep through generations?' },
      { day: 1, prompt: 'What sounds familiar to my ears?' },
      { day: 2, prompt: 'What tastes like memory?' },
      { day: 3, prompt: 'Who do these faces remind me of?' },
      { day: 99, prompt: 'What traditions will I preserve?' },
      { day: 99, prompt: 'What stories will I tell my children?' },
      { day: 99, prompt: 'What practices will I restart in my own life?' },
    ],
    lastMinute: [
      'Contact Gullah Geechee Corridor Commission for resources',
      'Research Penn Center events',
      'Find local church schedules',
      'Book heritage tour guides in advance',
      'Download offline maps (cell service spotty on islands)',
      'Pack serious bug spray',
      'Bring cash for roadside vendors',
    ],
  },

  finalWords: {
    message: [
      "The Gullah Geechee Corridor proves something: You can't steal a culture that refuses to let go.",
      'They kept the rice. The words. The baskets. The beliefs. On these islands, Africa never left.',
      "Maybe that's why it feels like home.",
    ],
    callToAction: {
      text: 'Ready to find what survived?',
      buttonText: 'Check out our Gullah Geechee info session →',
      link: 'https://www.travelwithmit.com/gullah',
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
