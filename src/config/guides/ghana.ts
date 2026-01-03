import { GuideConfig } from '@/types/guide-config';

export const ghanaGuide: GuideConfig = {
  slug: 'ghana',
  destinationName: 'Ghana',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '45 100% 40%',
    secondary: '120 30% 25%',
    accent: '0 70% 45%',
    sand: '45 30% 90%',
  },

  hero: {
    title: 'Your Freedom Blueprint: GHANA',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: '/placeholder.svg',
  },

  welcome: {
    greeting: 'Family,',
    message: [
      "You're not going to Ghana. You're going home.",
      "After taking 2,500 people around the world, I can tell you - Ghana hits different. It's where millions of our ancestors took their last steps on African soil. Now you're walking back in.",
      "This guide has everything I learned from every trip. The real stuff that actually helps.",
      "Ghana doesn't just show you history. It shows you that you've always belonged somewhere.",
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
        'Ghana visa (we handle this)',
        'Yellow fever certificate (REQUIRED)',
        'Return ticket',
        'Travel insurance (recommended)',
        'Passport copies',
        'Emergency contacts',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'Yellow fever vaccine (get 10+ days before) - REQUIRED',
        'Malaria prevention recommended',
        'Hepatitis A & B recommended',
        'Typhoid recommended',
        'Mosquito spray (DEET 30%+)',
        'Sunscreen',
        'Stomach medicine',
        'Pain relievers',
        'Hand sanitizer',
      ],
    },
    money: {
      currency: 'Ghanaian Cedi',
      currencyCode: 'GHS',
      tips: [
        'Bring $500-800 cash',
        'Small bills for tips',
        'ATMs available in cities',
        'Cards work in major establishments',
        'Street food: $3-5',
        'Restaurant meal: $10-20',
        'Taxi ride: $5-10',
        'Kente cloth: $50-300',
        'Crafts: $10-100',
      ],
    },
    weather: {
      bestMonths: 'December - March (Dry Season)',
      temperature: '75-95°F (Hot all year, always humid)',
      tips: [
        'Rainy season: April-June, Sept-Nov',
        'Dry season: Dec-March',
        'Light, breathable clothes essential',
        'Dress modest for villages',
      ],
    },
    packing: [
      { item: 'Light, breathable clothes', category: 'clothing', essential: true },
      { item: 'Modest clothing for villages', category: 'clothing', essential: true },
      { item: 'Walking shoes (2 pairs)', category: 'clothing', essential: true },
      { item: 'Sandals', category: 'clothing' },
      { item: 'Light rain jacket', category: 'clothing' },
      { item: 'Power adapter (Type G)', category: 'tech', essential: true },
      { item: 'Mosquito spray (DEET 30%+)', category: 'health', essential: true },
      { item: 'Sunscreen', category: 'health', essential: true },
      { item: 'Stomach medicine', category: 'health' },
      { item: 'Pain relievers', category: 'health' },
      { item: 'Hand sanitizer', category: 'health' },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'Yellow fever certificate', category: 'documents', essential: true },
      { item: 'Visa documents', category: 'documents', essential: true },
      { item: 'Travel insurance docs', category: 'documents' },
    ],
  },

  culture: {
    language: {
      name: 'Twi',
      greetings: [
        { word: 'Akwaaba', pronunciation: 'ah-kwah-bah', translation: 'Welcome' },
        { word: 'Medaase', pronunciation: 'meh-dah-see', translation: 'Thank you' },
        { word: 'Me din de', pronunciation: 'meh-deen-day', translation: 'My name is' },
        { word: 'Ɛte sɛn?', pronunciation: 'eh-teh-sen', translation: 'How are you?' },
        { word: 'Eye', pronunciation: 'eh-yeh', translation: "It's good" },
        { word: 'Aane', pronunciation: 'ah-neh', translation: 'Yes' },
        { word: 'Daabi', pronunciation: 'dah-bee', translation: 'No' },
      ],
    },
    food: {
      intro: "Ghana's cuisine is rich with bold flavors and communal dining traditions.",
      items: [
        { name: 'Jollof Rice', description: 'The original - spiced tomato rice', mustTry: true },
        { name: 'Banku & Tilapia', description: 'Fermented corn dough with grilled fish', mustTry: true },
        { name: 'Fufu & Light Soup', description: 'Pounded cassava/plantain with aromatic broth', mustTry: true },
        { name: 'Kelewele', description: 'Spiced fried plantains - perfect street snack' },
        { name: 'Red Red', description: 'Black-eyed peas with fried plantains' },
        { name: 'Waakye', description: 'Rice and beans with spicy pepper sauce' },
        { name: 'Roasted Plantains', description: 'Safe and delicious street food' },
        { name: 'Sobolo', description: 'Refreshing hibiscus drink' },
      ],
    },
    customs: {
      title: 'Cultural Customs',
      items: [
        'Respect elders always - greet them first',
        'Use right hand for greetings and eating',
        'Dress modestly in villages and sacred sites',
        'Bargain with smiles - it\'s expected and fun',
        'Accept hospitality graciously',
        'Ask permission before photographing people',
      ],
    },
    shopping: {
      intro: "Ghana offers incredible handcrafted goods and cultural treasures.",
      tips: [
        'Kente cloth - authentic handwoven fabric',
        'Shea butter - pure and unrefined',
        'Black soap - traditional beauty secret',
        'Adinkra symbols - meaningful art',
        'Wood carvings - skilled craftsmanship',
        'Beads - especially at Koforidua (Thursday)',
        'Makola Market - Everything under the sun',
        'Arts Centre - Tourist friendly, easier bargaining',
        'Start at 40% of asking price',
        'Walking away often works',
        'Bundle purchases for better deals',
      ],
    },
  },

  photos: {
    intro: 'Capture the moments that matter most on your journey home.',
    spots: [
      { name: 'Door of No Return', description: 'The most powerful moment', tips: 'Early morning for fewer crowds and softer light' },
      { name: 'Independence Arch', description: 'Symbol of African freedom', tips: 'Best at sunset with the arch silhouetted' },
      { name: 'Kente Portrait', description: 'You draped in tradition', tips: 'Natural light, solid background' },
      { name: 'Cape Coast Castle', description: 'Powerful history preserved', tips: 'Exterior shots with ocean backdrop' },
      { name: 'Market Colors', description: 'Overhead shot of vibrant goods', tips: 'Ask permission, tip vendors' },
      { name: 'Elmina Castle', description: 'Ocean view from fortress walls', tips: 'Blue hour for dramatic contrast' },
      { name: 'Kakum Canopy Walk', description: 'If you\'re brave - 130 feet up', tips: 'Go early before crowds' },
      { name: 'Black Star Square', description: 'Independence monument', tips: 'Wide angle to capture scale' },
      { name: 'Local Family', description: 'New connections made', tips: 'Always ask permission first' },
      { name: 'Beach Sunset', description: 'Atlantic memories', tips: 'Labadi Beach at golden hour' },
    ],
  },

  realTalk: {
    intro: 'The honest truths that help you prepare mentally and physically.',
    items: [
      {
        topic: 'Safety',
        honest: 'Ghana is very safe for travelers. English is widely spoken. People are genuinely welcoming.',
        tip: 'Basic travel smarts apply - watch belongings in crowded markets.',
      },
      {
        topic: 'Emotional Journey',
        honest: 'The castles will affect you deeply. Some travelers cry. Some go silent. All feel it.',
        tip: 'Give yourself time to process. Journal that evening.',
      },
      {
        topic: 'Heat & Humidity',
        honest: "It's hot. Really hot. And humid. Your body will need time to adjust.",
        tip: 'Stay hydrated. Take breaks in shade. Light, loose clothing.',
      },
      {
        topic: 'Communication',
        honest: 'Get an MTN or Vodafone SIM card. WhatsApp is how everyone communicates.',
        tip: 'WiFi is available at hotels. Data is affordable.',
      },
      {
        topic: 'Time & Pace',
        honest: 'Things move on Ghana time. Schedules are flexible. Patience is essential.',
        tip: 'Embrace the slower pace. It\'s part of the experience.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What am I looking for on this journey?' },
      { day: 0, prompt: 'What parts of me need healing?' },
      { day: 0, prompt: 'What questions do I carry about my ancestors?' },
      { day: 1, prompt: 'What feels familiar here?' },
      { day: 2, prompt: 'What emotions came up today?' },
      { day: 3, prompt: 'Who did I connect with?' },
      { day: 99, prompt: 'What came home with me?' },
      { day: 99, prompt: 'What will I build from this experience?' },
      { day: 99, prompt: 'When will I return?' },
    ],
    lastMinute: [
      'Download XE Currency app',
      'Download Uber (works in Accra)',
      'Download WhatsApp',
      'Download Google Translate (add Twi offline)',
      'Save emergency contact numbers',
      'Confirm yellow fever certificate',
      'Print hotel confirmations',
      'Notify bank of travel dates',
    ],
  },

  finalWords: {
    message: [
      'Ghana teaches you something: You\'ve always had a home.',
      "Even if you never knew the address. Even if nobody told you. Your DNA knew.",
      "That's what the Door of No Return is really about. It's not about leaving. It's about coming back.",
    ],
    callToAction: {
      text: 'Ready to come home?',
      buttonText: 'Check out our Ghana info session →',
      link: 'https://www.travelwithmit.com/ghana',
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
