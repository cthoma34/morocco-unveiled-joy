import { GuideConfig } from '@/types/guide-config';

// Hero and Section Images
import heroImage from '@/assets/tanzania/balloon-serengeti-dawn.jpg';
import welcomeImage from '@/assets/tanzania/champagne-toast.jpg';
import cultureImage from '@/assets/tanzania/maasai-exchange.jpg';
import foodImage from '@/assets/tanzania/rooftop-dinner-sunset.jpg';

// Gallery Images
import balloonSunriseJoy from '@/assets/tanzania/balloon-sunrise-joy.jpg';
import balloonAerialView from '@/assets/tanzania/balloon-aerial-view.jpg';
import balloonInflationGroup from '@/assets/tanzania/balloon-inflation-group.jpg';
import luxuryCampArrival from '@/assets/tanzania/luxury-camp-arrival.jpg';
import luxuryTentInterior from '@/assets/tanzania/luxury-tent-interior.jpg';
import tentSunsetCouple from '@/assets/tanzania/tent-sunset-couple.jpg';
import campfireStories from '@/assets/tanzania/campfire-stories.jpg';
import safariDinner from '@/assets/tanzania/safari-dinner.jpg';
import maasaiBoma from '@/assets/tanzania/maasai-boma.jpg';
import maasaiChildren from '@/assets/tanzania/maasai-children.jpg';
import dhowCruise from '@/assets/tanzania/dhow-cruise.jpg';
import dhowSunsetSilhouette from '@/assets/tanzania/dhow-sunset-silhouette.jpg';
import beachSunsetSilhouettes from '@/assets/tanzania/beach-sunset-silhouettes.jpg';
import zanzibarSplashPlay from '@/assets/tanzania/zanzibar-splash-play.jpg';
import beachCoupleWalk from '@/assets/tanzania/beach-couple-walk.jpg';
import beachDaybedRelaxation from '@/assets/tanzania/beach-daybed-relaxation.jpg';
import beachWalkBraids from '@/assets/tanzania/beach-walk-braids.jpg';
import stonetownOrnateDoor from '@/assets/tanzania/stonetown-ornate-door.jpg';
import stonetownCoupleExplore from '@/assets/tanzania/stonetown-couple-explore.jpg';
import darajaniMarket from '@/assets/tanzania/darajani-market.jpg';
import spiceFarmWelcome from '@/assets/tanzania/spice-farm-welcome.jpg';
import spiceTasting from '@/assets/tanzania/spice-tasting.jpg';
import cinnamonBarkSmelling from '@/assets/tanzania/cinnamon-bark-smelling.jpg';
import nutmegDiscovery from '@/assets/tanzania/nutmeg-discovery.jpg';
import kilimanjaroSunrise from '@/assets/tanzania/kilimanjaro-sunrise.jpg';

export const tanzaniaGuide: GuideConfig = {
  slug: 'tanzania-guide',
  destinationName: 'Tanzania',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '35 80% 45%',
    secondary: '120 40% 30%',
    accent: '25 90% 50%',
    sand: '40 35% 88%',
  },

  hero: {
    title: 'Your Freedom Blueprint: TANZANIA',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: heroImage,
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'Tanzania is where the world began.',
      "I've taken 2,500 people around the world, and Tanzania still takes my breath away. The Serengeti shows you what Earth looked like before we complicated it. Zanzibar shows you what peace feels like.",
      'This guide is everything real. Everything that helps.',
      "Let's get you ready for the magic.",
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
        'Tanzania visa ($50 on arrival or online)',
        'Yellow fever certificate',
        'Return ticket',
        'Travel insurance (recommended)',
        'Vaccination records',
        'Cash for visa',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'Yellow fever vaccine - REQUIRED',
        'Malaria pills (take them seriously)',
        'Hepatitis A & B recommended',
        'Typhoid recommended',
        'Malaria prevention medication',
        'Sunscreen SPF 50+',
        'Stomach medicine',
        'Antihistamine (for dust on safari)',
        'Bug spray with DEET',
      ],
    },
    money: {
      currency: 'Tanzanian Shilling',
      currencyCode: 'TZS',
      tips: [
        'Bring $800-1200 USD cash',
        'Small bills essential for tips',
        'ATMs only in cities',
        'USD widely accepted for tourism',
        'Meal: $5-15',
        'Taxi: $5-10',
        'Crafts: $10-50',
        'Spices: $5-20',
        'Safari tip: $10-20/day per guide',
      ],
    },
    weather: {
      bestMonths: 'June - October (Dry Season)',
      temperature: '70-85°F depending on region',
      tips: [
        'Dry season: June-October (perfect for safari)',
        'Short rains: Nov-Dec (still good)',
        'Hot season: Jan-March',
        'Avoid: April-May (heavy rain)',
      ],
    },
    packing: [
      { item: 'Neutral colored clothing', category: 'clothing', essential: true },
      { item: 'Long sleeves and pants', category: 'clothing', essential: true },
      { item: 'Hat with strap', category: 'clothing', essential: true },
      { item: 'Beach clothes for Zanzibar', category: 'clothing' },
      { item: 'Modest wear for Stone Town', category: 'clothing' },
      { item: 'Reef shoes', category: 'clothing' },
      { item: 'Swimsuits (3+)', category: 'clothing' },
      { item: 'Binoculars', category: 'tech', essential: true },
      { item: 'Camera with zoom lens', category: 'tech', essential: true },
      { item: 'Dust bag for camera', category: 'tech' },
      { item: 'Malaria prevention', category: 'health', essential: true },
      { item: 'Sunscreen SPF 50+', category: 'health', essential: true },
      { item: 'Bug spray', category: 'health', essential: true },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'Yellow fever certificate', category: 'documents', essential: true },
      { item: 'Visa payment (cash)', category: 'documents', essential: true },
    ],
  },

  culture: {
    language: {
      name: 'Swahili',
      greetings: [
        { word: 'Jambo', pronunciation: 'JAM-bo', translation: 'Hello' },
        { word: 'Asante sana', pronunciation: 'ah-SAHN-tay SAH-nah', translation: 'Thank you very much' },
        { word: 'Karibu', pronunciation: 'kah-REE-boo', translation: 'Welcome' },
        { word: 'Pole pole', pronunciation: 'POH-lay POH-lay', translation: 'Slowly slowly' },
        { word: 'Hakuna matata', pronunciation: 'hah-KOO-nah mah-TAH-tah', translation: 'No worries' },
      ],
    },
    food: {
      intro: 'Tanzania offers incredible flavors from the mainland to the spice islands.',
      items: [
        { name: 'Ugali', description: 'Cornmeal base - staple of East Africa', mustTry: true },
        { name: 'Nyama Choma', description: 'Grilled meat - a celebration food', mustTry: true },
        { name: 'Chapati', description: 'Flaky flatbread - perfect with everything' },
        { name: 'Samosas', description: 'Spiced triangular pastries' },
        { name: 'Fresh Fruit', description: 'Tropical abundance everywhere' },
        { name: 'Zanzibar Seafood', description: 'Fresh from the Indian Ocean', mustTry: true },
        { name: 'Zanzibar Pizza', description: 'Unique local creation - must try' },
        { name: 'Spiced Coconut Curry', description: 'Zanzibar specialty' },
        { name: 'Sugar Cane Juice', description: 'Fresh pressed refreshment' },
      ],
    },
    customs: {
      title: 'Cultural Customs',
      items: [
        'Greet elders with respect',
        'Dress modestly in Stone Town',
        'Remove shoes when entering homes',
        'Right hand for greetings and eating',
        'Respect prayer times in Muslim areas',
        'Ask before photographing people',
      ],
    },
    shopping: {
      intro: 'From gemstones to spices, Tanzania has treasures found nowhere else.',
      tips: [
        'Tanzanite - only found here in the world',
        'Maasai blankets - authentic craftsmanship',
        'Wood carvings - Makonde tradition',
        'Coffee - some of the best in Africa',
        'Zanzibar spices - cloves, vanilla, cardamom',
        'Arusha Central Market for variety',
        'Stone Town market for spices',
        'Maasai markets for authentic goods',
        'Bargaining expected everywhere',
      ],
    },
  },

  photos: {
    intro: 'Capture the wild beauty and peaceful shores of Tanzania.',
    spots: [
      { name: 'Serengeti Sunrise', description: 'Acacia tree silhouette against golden sky', tips: 'Wake early - golden hour is magic' },
      { name: 'Big Five Close-up', description: 'Lion, elephant, rhino, leopard, buffalo', tips: 'Patience and a good zoom lens' },
      { name: 'Maasai Warrior', description: 'Traditional dress and jumping', tips: 'Always ask permission and tip' },
      { name: 'Balloon Safari', description: 'Aerial view of the Serengeti', tips: 'Worth the splurge for once-in-a-lifetime shots' },
      { name: 'Ngorongoro Crater', description: 'Panoramic view of the world\'s largest caldera', tips: 'Early morning for best visibility' },
      { name: 'Zanzibar Dhow', description: 'Traditional sailboat at sunset', tips: 'Beach or from the water' },
      { name: 'Stone Town Doors', description: 'Each one unique and historic', tips: 'Early morning for empty streets' },
      { name: 'Spice Market', description: 'Colors and textures pop', tips: 'Natural light is best' },
      { name: 'Beach Paradise', description: 'Crystal clear Zanzibar waters', tips: 'Nungwi or Kendwa at sunset' },
      { name: 'Kilimanjaro', description: 'Africa\'s highest peak if weather permits', tips: 'Best visibility early morning' },
    ],
  },

  realTalk: {
    intro: 'What you need to know to stay safe and comfortable.',
    items: [
      {
        topic: 'Safari Safety',
        honest: 'The animals are wild. This is their home. Guides know what they\'re doing.',
        tip: 'Listen to guides, stay in vehicle, no sudden movements, check shoes before wearing, zip tents.',
      },
      {
        topic: 'Zanzibar Comfort',
        honest: 'Stone Town is conservative. Beaches are relaxed. Know which zone you\'re in.',
        tip: 'Dress modestly in Stone Town, relax on beaches, respect prayer times.',
      },
      {
        topic: 'Communication',
        honest: 'Lodge WiFi works. Cell service is spotty on safari.',
        tip: 'Get local SIM. WhatsApp is essential. Embrace being unplugged on safari.',
      },
      {
        topic: 'Dust & Heat',
        honest: 'Safari vehicles kick up dust. It gets hot. Dry season means dry everything.',
        tip: 'Bring antihistamines, dust bag for camera, bandana for face.',
      },
      {
        topic: 'The Pace',
        honest: 'Pole pole - slowly slowly. Nothing happens fast. That\'s the point.',
        tip: 'Embrace the rhythm. You\'re in Africa now.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What does "wild" mean to me?' },
      { day: 0, prompt: 'What do I want to see most?' },
      { day: 1, prompt: 'What moved me today?' },
      { day: 2, prompt: 'When did I feel small in the best way?' },
      { day: 3, prompt: 'What did nature teach me?' },
      { day: 99, prompt: 'What wildness stayed with me?' },
      { day: 99, prompt: 'How am I different now?' },
    ],
    lastMinute: [
      'Download XE Currency app',
      'Download Seek app (identify animals)',
      'Download WhatsApp',
      'Download tide charts for Zanzibar',
      'Confirm malaria medication',
      'Pack neutral colors only',
      'Charge all camera batteries',
      'Notify bank of travel dates',
    ],
  },

  finalWords: {
    message: [
      'Tanzania shows you time differently.',
      "The animals don't rush. The ocean doesn't hurry. \"Pole pole\" - slowly slowly - isn't just words. It's wisdom.",
      "You'll understand why they call it Safari - journey. Not to see animals. A journey to remember what matters.",
    ],
    callToAction: {
      text: 'Ready for your safari?',
      buttonText: 'Check out our Tanzania info session →',
      link: 'https://www.travelwithmit.com/tanzania',
    },
  },

  images: {
    hero: heroImage,
    welcome: welcomeImage,
    culture: cultureImage,
    food: foodImage,
    gallery: [
      balloonSunriseJoy,
      balloonAerialView,
      balloonInflationGroup,
      luxuryCampArrival,
      luxuryTentInterior,
      tentSunsetCouple,
      campfireStories,
      safariDinner,
      maasaiBoma,
      maasaiChildren,
      dhowCruise,
      dhowSunsetSilhouette,
      beachSunsetSilhouettes,
      zanzibarSplashPlay,
      beachCoupleWalk,
      beachDaybedRelaxation,
      beachWalkBraids,
      stonetownOrnateDoor,
      stonetownCoupleExplore,
      darajaniMarket,
      spiceFarmWelcome,
      spiceTasting,
      cinnamonBarkSmelling,
      nutmegDiscovery,
      kilimanjaroSunrise,
    ],
  },
};
