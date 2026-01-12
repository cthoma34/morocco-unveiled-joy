import { GuideConfig } from '@/types/guide-config';

// Hero and Section Images
import heroImage from '@/assets/ghana/door-of-no-return.jpg';

// Videos
import heroVideo from '@/assets/ghana/hero-castle.mp4';
import ctaVideo from '@/assets/ghana/cta-sunset.mp4';
import welcomeImage from '@/assets/ghana/group-cape-coast.jpg';
import cultureImage from '@/assets/ghana/kente-weaving.jpg';
import foodImage from '@/assets/ghana/jollof-rice.jpg';

// Castle & Heritage Sites
import capeCoastAerial from '@/assets/ghana/cape-coast-aerial.jpg';
import elminaCastle from '@/assets/ghana/elmina-castle.jpg';
import castleDungeon from '@/assets/ghana/castle-dungeon.jpg';
import castleSunset from '@/assets/ghana/castle-sunset.jpg';
import doorTouch from '@/assets/ghana/door-touch.jpg';

// Cultural Experiences
import kentePortrait from '@/assets/ghana/kente-portrait.jpg';
import kenteWeaving from '@/assets/ghana/kente-weaving.jpg';
import adinkraMaking from '@/assets/ghana/adinkra-making.jpg';
import drummingDance from '@/assets/ghana/drumming-dance.jpg';
import namingCeremony from '@/assets/ghana/naming-ceremony.jpg';
import chiefMeeting from '@/assets/ghana/chief-meeting.jpg';

// Accra & Landmarks
import independenceArchSunset from '@/assets/ghana/independence-arch-sunset.jpg';
import blackStarSquare from '@/assets/ghana/black-star-square.jpg';
import nkrumahMemorial from '@/assets/ghana/nkrumah-memorial.jpg';
import jamestownLighthouse from '@/assets/ghana/jamestown-lighthouse.jpg';

// Markets & Shopping
import makolaMarket from '@/assets/ghana/makola-market.jpg';
import artsCentre from '@/assets/ghana/arts-centre.jpg';
import beadMarket from '@/assets/ghana/bead-market.jpg';

// Food
import jollofRice from '@/assets/ghana/jollof-rice.jpg';
import bankuTilapia from '@/assets/ghana/banku-tilapia.jpg';
import kelewele from '@/assets/ghana/kelewele.jpg';
import fufuSoup from '@/assets/ghana/fufu-soup.jpg';
import redRed from '@/assets/ghana/red-red.jpg';
import saboloDrink from '@/assets/ghana/sobolo-drink.jpg';

// Nature & Beach
import kakumCanopy from '@/assets/ghana/kakum-canopy.jpg';
import labadiBeach from '@/assets/ghana/labadi-beach.jpg';
import fishingBoats from '@/assets/ghana/fishing-boats.jpg';

// People & Connections
import villageConnection from '@/assets/ghana/village-connection.jpg';

export const ghanaGuide: GuideConfig = {
  slug: 'ghana',
  destinationName: 'Ghana',
  tagline: 'Your Freedom Blueprint',

  editorial: {
    issueNumber: 'Guide No. 01',
    coverLine: 'Where we come home',
    colorPalette: {
      primary: '210 26% 24%',
      accent: '43 80% 38%',
      neutral: '60 20% 98%',
      highlight: '348 86% 47%',
      mood: 'bold-heritage',
    },
  },

  theme: {
    primary: '45 100% 40%',
    secondary: '120 30% 25%',
    accent: '0 70% 45%',
    sand: '45 30% 90%',
  },

  hero: {
    title: 'Your Freedom Blueprint: GHANA',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: heroImage,
    backgroundVideo: heroVideo,
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
    image: welcomeImage,
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
      title: 'Health & Comfort',
      items: [
        'Yellow fever vaccine - REQUIRED for entry',
        'Consult your doctor for other recommendations',
        'Mosquito spray (DEET 30%+)',
        'Sunscreen',
        'Stomach medicine',
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
      bestMonths: 'December - March',
      temperature: 'Warm and welcoming year-round',
      seasons: [
        {
          period: 'December - March',
          title: 'The Harmattan Season',
          tagline: 'When cool desert breezes bring perfect festival weather',
          experiences: ['Outdoor celebrations', 'Traditional festivals', 'Comfortable explorations'],
          perks: 'Natural air conditioning from the Sahara, clear skies, festival season',
          travelNotes: 'Light layers for cool evenings, embrace the outdoor lifestyle'
        },
        {
          period: 'April - June',
          title: 'The Garden Season',
          tagline: 'When Ghana becomes lush and green',
          experiences: ['Waterfalls at full flow', 'Vibrant landscapes', 'Cozy cultural moments'],
          perks: 'Fewer visitors, incredible photography, lower rates',
          travelNotes: 'Afternoon showers bring out amazing fragrances and colors'
        },
        {
          period: 'July - August',
          title: 'The Cultural Season',
          tagline: 'When communities gather and tradition thrives',
          experiences: ['Panafest and Emancipation Day', 'Community celebrations', 'Heritage ceremonies'],
          perks: 'Major cultural events, comfortable temperatures',
          travelNotes: 'Brief breaks in rain, perfect for heritage tourism'
        },
        {
          period: 'September - November',
          title: 'The Renewal Season',
          tagline: 'When the land prepares for celebration',
          experiences: ['Harvest preparations', 'Local markets bustling', 'Intimate experiences'],
          perks: 'Quiet before festival season, authentic local interactions',
          travelNotes: 'Occasional showers create beautiful moments'
        }
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
        { name: 'Jollof Rice', description: 'The original - spiced tomato rice', mustTry: true, image: jollofRice },
        { name: 'Banku & Tilapia', description: 'Fermented corn dough with grilled fish', mustTry: true, image: bankuTilapia },
        { name: 'Fufu & Light Soup', description: 'Pounded cassava/plantain with aromatic broth', mustTry: true, image: fufuSoup },
        { name: 'Kelewele', description: 'Spiced fried plantains - perfect street snack', image: kelewele },
        { name: 'Red Red', description: 'Black-eyed peas with fried plantains', image: redRed },
        { name: 'Waakye', description: 'Rice and beans with spicy pepper sauce' },
        { name: 'Roasted Plantains', description: 'Safe and delicious street food' },
        { name: 'Sobolo', description: 'Refreshing hibiscus drink', image: saboloDrink },
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
      { name: 'Door of No Return', description: 'The most powerful moment', tips: 'Early morning for fewer crowds and softer light', image: heroImage },
      { name: 'Independence Arch', description: 'Symbol of African freedom', tips: 'Best at sunset with the arch silhouetted', image: independenceArchSunset },
      { name: 'Kente Portrait', description: 'You draped in tradition', tips: 'Natural light, solid background', image: kentePortrait },
      { name: 'Cape Coast Castle', description: 'Powerful history preserved', tips: 'Exterior shots with ocean backdrop', image: capeCoastAerial },
      { name: 'Market Colors', description: 'Overhead shot of vibrant goods', tips: 'Ask permission, tip vendors', image: makolaMarket },
      { name: 'Elmina Castle', description: 'Ocean view from fortress walls', tips: 'Blue hour for dramatic contrast', image: elminaCastle },
      { name: 'Kakum Canopy Walk', description: 'If you\'re brave - 130 feet up', tips: 'Go early before crowds', image: kakumCanopy },
      { name: 'Black Star Square', description: 'Independence monument', tips: 'Wide angle to capture scale', image: blackStarSquare },
      { name: 'Local Family', description: 'New connections made', tips: 'Always ask permission first', image: villageConnection },
      { name: 'Beach Sunset', description: 'Atlantic memories', tips: 'Labadi Beach at golden hour', image: labadiBeach },
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
      buttonText: 'Book Your Ghana Trip →',
      link: 'https://maximumimpacttravel.com/destination/ghana/',
    },
  },

  images: {
    hero: heroImage,
    heroVideo: heroVideo,
    ctaVideo: ctaVideo,
    welcome: welcomeImage,
    culture: cultureImage,
    food: foodImage,
    gallery: [
      heroImage,
      capeCoastAerial,
      elminaCastle,
      kentePortrait,
      independenceArchSunset,
      makolaMarket,
      kakumCanopy,
      labadiBeach,
    ],
    interludes: {
      // After welcome - heritage and history images
      afterWelcome: [castleDungeon, capeCoastAerial, doorTouch],
      afterWelcomeQuote: {
        text: "You're not visiting. You're returning.",
        attribution: "Jay Cameron"
      },
      // After basics - practical and landscape images
      afterBasics: [jamestownLighthouse, fishingBoats],
      // After culture - cultural experiences
      afterCulture: [drummingDance, namingCeremony, chiefMeeting],
      // After photos - beautiful landscape shots
      afterPhotos: [castleSunset, labadiBeach],
      // After real talk - emotional/reflective images
      afterRealTalk: [villageConnection, kentePortrait],
      afterRealTalkQuote: {
        text: "Ghana teaches you something: You've always had a home.",
        attribution: "Jay Cameron"
      }
    },
    strips: {
      heritage: [
        { src: heroImage, caption: 'Door of No Return' },
        { src: capeCoastAerial, caption: 'Cape Coast Castle from above' },
        { src: elminaCastle, caption: 'Elmina Castle' },
        { src: castleDungeon, caption: 'Inside the dungeons' },
        { src: doorTouch, caption: 'Touching history' },
        { src: castleSunset, caption: 'Sunset over the castle' },
      ],
      culture: [
        { src: kenteWeaving, caption: 'Kente weaving tradition' },
        { src: adinkraMaking, caption: 'Adinkra cloth making' },
        { src: drummingDance, caption: 'Traditional drumming' },
        { src: namingCeremony, caption: 'Naming ceremony' },
        { src: chiefMeeting, caption: 'Meeting a chief' },
        { src: kentePortrait, caption: 'Draped in Kente' },
      ],
      food: [
        { src: jollofRice, caption: 'Jollof Rice' },
        { src: bankuTilapia, caption: 'Banku & Tilapia' },
        { src: fufuSoup, caption: 'Fufu & Light Soup' },
        { src: kelewele, caption: 'Kelewele' },
        { src: redRed, caption: 'Red Red' },
        { src: saboloDrink, caption: 'Sobolo drink' },
      ],
      shopping: [
        { src: makolaMarket, caption: 'Makola Market' },
        { src: artsCentre, caption: 'Arts Centre' },
        { src: beadMarket, caption: 'Bead market' },
        { src: kenteWeaving, caption: 'Kente cloth shopping' },
      ],
      adventure: [
        { src: kakumCanopy, caption: 'Kakum Canopy Walk' },
        { src: labadiBeach, caption: 'Labadi Beach' },
        { src: fishingBoats, caption: 'Fishing village' },
        { src: independenceArchSunset, caption: 'Independence Arch' },
        { src: blackStarSquare, caption: 'Black Star Square' },
        { src: nkrumahMemorial, caption: 'Nkrumah Memorial' },
      ],
    },
    photoSpots: [
      heroImage,
      independenceArchSunset,
      kentePortrait,
      capeCoastAerial,
      makolaMarket,
      elminaCastle,
      kakumCanopy,
      blackStarSquare,
      villageConnection,
      labadiBeach,
    ],
  },
};
