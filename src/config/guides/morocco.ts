import { GuideConfig } from '@/types/guide-config';

// Morocco Images - Hero & Welcome
import heroImage from '@/assets/morocco/marrakech-rooftops.jpg';
import welcomeImage from '@/assets/morocco/riad-courtyard.jpg';

// Majorelle Gardens
import majorelleGarden from '@/assets/morocco/majorelle-garden.jpg';
import majorelleCouple from '@/assets/morocco/majorelle-couple.jpg';
import majorelleDoorway from '@/assets/morocco/majorelle-doorway.jpg';
import majorelleCactiWalk from '@/assets/morocco/majorelle-cacti-walk.jpg';
import majorelleThreeWomen from '@/assets/morocco/majorelle-three-women.jpg';
import majorelleYellowDress from '@/assets/morocco/majorelle-yellow-dress.jpg';
import blueFountain from '@/assets/morocco/blue-fountain.jpg';
import yellowBenchWoman from '@/assets/morocco/yellow-bench-woman.jpg';
import yellowWallCacti from '@/assets/morocco/yellow-wall-cacti.jpg';

// Hassan II Mosque
import hassanMinaretSunrise from '@/assets/morocco/hassan-minaret-sunrise.jpg';
import hassanTilework from '@/assets/morocco/hassan-tilework.jpg';
import hassanTilesTouch from '@/assets/morocco/hassan-tiles-touch.jpg';
import hassanInterior from '@/assets/morocco/hassan-interior.jpg';
import hassanArchway from '@/assets/morocco/hassan-archway.jpg';
import hassanCourtyard from '@/assets/morocco/hassan-courtyard.jpg';
import hassanOcean from '@/assets/morocco/hassan-ocean.jpg';
import casablancaMosque from '@/assets/morocco/casablanca-mosque.jpg';
import mosqueInterior from '@/assets/morocco/mosque-interior.jpg';

// Medina & Souks
import medinaAlleyWomen from '@/assets/morocco/medina-alley-women.jpg';
import medinaDoor from '@/assets/morocco/medina-door.jpg';
import medinaEntranceCouple from '@/assets/morocco/medina-entrance-couple.jpg';
import medinaEntranceWoman from '@/assets/morocco/medina-entrance-woman.jpg';
import medinaMapGroup from '@/assets/morocco/medina-map-group.jpg';
import jemaaElFna from '@/assets/morocco/jemaa-el-fna.jpg';
import lanternShopping from '@/assets/morocco/lantern-shopping.jpg';
import lanternsGroup from '@/assets/morocco/lanterns-group.jpg';
import lanternsSilhouette from '@/assets/morocco/lanterns-silhouette.jpg';
import fabricShopping from '@/assets/morocco/fabric-shopping.jpg';
import marketShopping from '@/assets/morocco/market-shopping.jpg';
import boutiqueLaughing from '@/assets/morocco/boutique-laughing.jpg';

// Spices & Food
import spiceMarket from '@/assets/morocco/spice-market.jpg';
import spiceSmell from '@/assets/morocco/spice-smell.jpg';
import saffronHands from '@/assets/morocco/saffron-hands.jpg';
import cookingClass from '@/assets/morocco/cooking-class.jpg';
import cookingClassGroup from '@/assets/morocco/cooking-class-group.jpg';
import tagineReveal from '@/assets/morocco/tagine-reveal.jpg';
import tagineHands from '@/assets/morocco/tagine-hands.jpg';
import tagineSaffron from '@/assets/morocco/tagine-saffron.jpg';

// Tea & Hospitality
import mintTea from '@/assets/morocco/mint-tea.jpg';
import mintTeaPour from '@/assets/morocco/mint-tea-pour.jpg';
import teaConversation from '@/assets/morocco/tea-conversation.jpg';
import rooftopBreakfast from '@/assets/morocco/rooftop-breakfast.jpg';

// Sahara Desert
import saharaDuneDusk from '@/assets/morocco/sahara-dune-dusk.jpg';
import saharaSunsetWalker from '@/assets/morocco/sahara-sunset-walker.jpg';
import camelCaravan from '@/assets/morocco/camel-caravan.jpg';
import desertCamp from '@/assets/morocco/desert-camp.jpg';

export const moroccoGuide: GuideConfig = {
  slug: 'morocco',
  destinationName: 'Morocco',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '0 70% 40%',
    secondary: '120 35% 35%',
    accent: '35 85% 50%',
    sand: '35 40% 88%',
  },

  hero: {
    title: 'Your Freedom Blueprint: MOROCCO',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: heroImage,
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'Morocco is where Africa meets Arabia meets the Mediterranean.',
      "I've taken 2,500 people around the world, and Morocco still surprises me. The medinas make you feel alive. The Sahara makes you feel small in the best way.",
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
        'No visa required for US citizens (90 days)',
        'Return ticket',
        'Travel insurance (recommended)',
        'Hotel confirmation',
        'Passport copies',
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
        'Motion sickness pills for mountain roads',
        'Hand sanitizer',
      ],
    },
    money: {
      currency: 'Moroccan Dirham',
      currencyCode: 'MAD',
      tips: [
        'Bring $500-800 USD cash to exchange',
        'ATMs widely available in cities',
        'Small bills essential for tips/markets',
        'Bargaining is expected everywhere',
        'Meal: $5-15',
        'Taxi: $2-5 in city',
        'Guided tour tip: $5-10',
        'Riad stay: $50-150/night',
      ],
    },
    weather: {
      bestMonths: 'March - May, September - November',
      temperature: 'Mediterranean warmth with desert magic',
      seasons: [
        {
          period: 'March - May',
          title: 'The Bloom Season',
          tagline: 'When Morocco dresses in spring colors',
          experiences: ['Rose Valley festival', 'Perfect hiking weather', 'Gardens at peak beauty'],
          perks: 'Almond blossoms, comfortable medina exploring, ideal photography',
          travelNotes: 'Layers for the temperature range—warm days, cool evenings'
        },
        {
          period: 'June - August',
          title: 'The Coastal Season',
          tagline: 'When Moroccans holiday and coastal cities shine',
          experiences: ['Beach clubs buzzing', 'Essaouira\'s cool Atlantic breezes', 'Night markets until dawn'],
          perks: 'Coastal cities stay refreshing, vibrant summer nightlife',
          travelNotes: 'The coast is perfect while inland enjoys warm evenings'
        },
        {
          period: 'September - November',
          title: 'The Golden Season',
          tagline: 'When the light turns magical',
          experiences: ['Harvest celebrations', 'Perfect city wandering', 'Desert nights at their best'],
          perks: 'Legendary photography light, olive harvest, date season',
          travelNotes: 'The sweet spot—comfortable everywhere in the country'
        },
        {
          period: 'December - February',
          title: 'The Fireside Season',
          tagline: 'When cozy riads and sunny days combine',
          experiences: ['Snow-capped Atlas views', 'Sahara sun still warm', 'Intimate hammam culture'],
          perks: 'Cozy riad evenings, clear mountain views, festive atmosphere',
          travelNotes: 'Sunny days, cool evenings—perfect for tagines and mint tea'
        }
      ],
    },
    packing: [
      { item: 'Modest clothing', category: 'clothing', essential: true },
      { item: 'Comfortable walking shoes', category: 'clothing', essential: true },
      { item: 'Scarf/shawl for mosques', category: 'clothing', essential: true },
      { item: 'Light layers', category: 'clothing' },
      { item: 'Desert outfit for photos', category: 'clothing' },
      { item: 'Warm layer for desert nights', category: 'clothing', essential: true },
      { item: 'Power adapter (Type C/E)', category: 'tech', essential: true },
      { item: 'Camera', category: 'tech' },
      { item: 'Stomach medicine', category: 'health', essential: true },
      { item: 'Sunscreen', category: 'health', essential: true },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'Cash in small bills', category: 'documents', essential: true },
    ],
  },

  culture: {
    language: {
      name: 'Arabic & French',
      greetings: [
        { word: 'Salaam', pronunciation: 'sah-LAHM', translation: 'Hello/Peace' },
        { word: 'Shukran', pronunciation: 'SHOO-krahn', translation: 'Thank you' },
        { word: 'La', pronunciation: 'LAH', translation: 'No' },
        { word: 'Naam', pronunciation: 'NAHM', translation: 'Yes' },
        { word: 'Bslemah', pronunciation: 'b-SLEH-mah', translation: 'Goodbye' },
      ],
    },
    food: {
      intro: 'Moroccan cuisine is a symphony of spices, sweetness, and hospitality.',
      items: [
        { name: 'Tagine', description: 'Slow-cooked stew with meat and vegetables', mustTry: true },
        { name: 'Couscous', description: 'Friday tradition - steamed semolina with vegetables', mustTry: true },
        { name: 'Mint Tea', description: 'Three glasses of welcome', mustTry: true },
        { name: 'Pastilla', description: 'Sweet and savory pie - chicken or seafood' },
        { name: 'Harira', description: 'Hearty soup - especially during Ramadan' },
        { name: 'Msemen', description: 'Flaky Moroccan pancakes' },
        { name: 'Fresh Orange Juice', description: 'Everywhere for $1' },
        { name: 'Moroccan Salads', description: 'Seven salads to start every meal' },
      ],
    },
    customs: {
      title: 'Cultural Customs',
      items: [
        'Remove shoes before entering homes/riads',
        'Dress modestly (knees and shoulders covered)',
        'Right hand for eating and greetings',
        'Accept tea - it\'s rude to refuse',
        'Bargain respectfully - it\'s expected',
        'Friday is holy day - mosques closed to non-Muslims',
        'Ask permission before photographing people',
      ],
    },
    shopping: {
      intro: 'The souks are sensory overload in the best way.',
      tips: [
        'Leather goods - Fes is famous for it',
        'Argan oil - get it from the source',
        'Rugs - Berber handmade traditions',
        'Ceramics - Fes blue is iconic',
        'Lanterns - metal work artistry',
        'Spices - cumin, saffron, ras el hanout',
        'Start at 40% of asking price',
        'Walk away - they\'ll call you back',
        'Morning = best prices, less crowds',
      ],
    },
  },

  photos: {
    intro: 'Morocco is impossibly photogenic at every turn.',
    spots: [
      { name: 'Jardin Majorelle', description: 'Yves Saint Laurent\'s blue paradise', tips: 'Early morning for no crowds' },
      { name: 'Sahara Dunes', description: 'Sunrise or sunset on the dunes', tips: 'Bring lens protection for sand' },
      { name: 'Medina Doors', description: 'Each one a work of art', tips: 'Morning light is magical' },
      { name: 'Jemaa el-Fna', description: 'The chaos and colors at dusk', tips: 'Rooftop cafe for overview' },
      { name: 'Riads', description: 'Courtyards, tiles, fountains', tips: 'Your accommodation IS the photo' },
      { name: 'Hassan II Mosque', description: 'Casablanca\'s masterpiece', tips: 'Golden hour exterior' },
      { name: 'Blue City', description: 'Chefchaouen\'s painted streets', tips: 'Every alley is a shot' },
      { name: 'Desert Camp', description: 'Stars and tents and silence', tips: 'Tripod for night shots' },
    ],
  },

  realTalk: {
    intro: 'What you need to know to navigate Morocco confidently.',
    items: [
      {
        topic: 'The Medina',
        honest: 'You will get lost. That\'s part of it. Touts will follow. "No thank you" works.',
        tip: 'Download offline maps. Have your riad address in Arabic. Stay calm.',
      },
      {
        topic: 'Stomach Issues',
        honest: 'It happens to almost everyone. Water and raw vegetables are usually the cause.',
        tip: 'Drink bottled water only. Avoid ice. Skip raw salads first few days. Bring Imodium.',
      },
      {
        topic: 'Bargaining',
        honest: 'If you don\'t bargain, you\'re overpaying. It\'s not rude - it\'s cultural.',
        tip: 'Start at 30-40% of asking. Walk away if needed. Know your max before you start.',
      },
      {
        topic: 'Tipping',
        honest: 'Everyone expects a little something. It\'s how the economy works.',
        tip: 'Keep small bills ready. 10-20 MAD for small services. Round up for good meals.',
      },
      {
        topic: 'Personal Space',
        honest: 'People will be in your space. Sellers will touch your arm. It\'s normal.',
        tip: 'Firm but polite. Keep walking. Don\'t engage if you\'re not interested.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What does adventure mean to me?' },
      { day: 0, prompt: 'What am I most excited about?' },
      { day: 1, prompt: 'How did the medina make me feel?' },
      { day: 2, prompt: 'What surprised me today?' },
      { day: 3, prompt: 'What kindness did I experience?' },
      { day: 99, prompt: 'What do I want to remember most?' },
      { day: 99, prompt: 'How am I different now?' },
    ],
    lastMinute: [
      'Download XE Currency app',
      'Download Google Translate (Arabic offline)',
      'Download WhatsApp',
      'Save riad address in Arabic',
      'Pack stomach medicine',
      'Notify bank of travel',
      'Small bills ready',
      'Scarf for mosques',
    ],
  },

  finalWords: {
    message: [
      'Morocco doesn\'t give you what you expect.',
      'It gives you what you need. The chaos teaches patience. The beauty reminds you to slow down. The hospitality shows you what community means.',
      'You\'ll come back different. That\'s the point.',
    ],
    callToAction: {
      text: 'Ready for Morocco?',
      buttonText: 'Book Your Morocco Trip →',
      link: 'https://maximumimpacttravel.com/destination/morocco/',
    },
  },

  images: {
    hero: heroImage,
    welcome: welcomeImage,
    culture: medinaDoor,
    food: cookingClass,
    // Gallery - Unique images showcasing Morocco highlights
    gallery: [
      hassanMinaretSunrise,
      majorelleGarden,
      jemaaElFna,
      rooftopBreakfast,
      spiceMarket,
      desertCamp,
    ],
    // Photo essay interludes between sections
    interludes: {
      // After welcome - Sahara Desert experience
      afterWelcome: [saharaSunsetWalker, camelCaravan, saharaDuneDusk],
      // After basics - Tea & Market culture  
      afterBasics: [mintTeaPour, lanternsSilhouette, medinaAlleyWomen],
      // After culture - Mosque & Architecture
      afterCulture: [hassanTilework, hassanArchway],
    },
    // Photo strips for scrolling galleries
    strips: {
      // Majorelle Gardens photo strip
      culture: [
        { src: majorelleCouple, caption: 'Majorelle Gardens' },
        { src: blueFountain, caption: 'The iconic blue fountain' },
        { src: majorelleCactiWalk, caption: 'Garden pathways' },
        { src: majorelleThreeWomen, caption: 'YSL\'s paradise' },
        { src: majorelleDoorway, caption: 'Cobalt doorways' },
        { src: yellowWallCacti, caption: 'Yellow & cacti' },
      ],
      // Hassan II Mosque photo strip
      architecture: [
        { src: casablancaMosque, caption: 'Hassan II Mosque' },
        { src: hassanInterior, caption: 'Sacred interior' },
        { src: hassanTilesTouch, caption: 'Zellige tilework' },
        { src: hassanCourtyard, caption: 'Grand courtyard' },
        { src: hassanOcean, caption: 'Ocean view' },
        { src: mosqueInterior, caption: 'Intricate details' },
      ],
      // Medina & Shopping strip
      shopping: [
        { src: medinaEntranceCouple, caption: 'Entering the medina' },
        { src: lanternShopping, caption: 'Lantern souks' },
        { src: fabricShopping, caption: 'Fabric treasures' },
        { src: marketShopping, caption: 'Market finds' },
        { src: lanternsGroup, caption: 'Metalwork artistry' },
        { src: boutiqueLaughing, caption: 'Joy in the journey' },
      ],
      // Food & Cooking strip
      food: [
        { src: tagineReveal, caption: 'Tagine reveal' },
        { src: cookingClassGroup, caption: 'Cooking class' },
        { src: spiceSmell, caption: 'Spice discovery' },
        { src: saffronHands, caption: 'Saffron gold' },
        { src: tagineSaffron, caption: 'Traditional flavors' },
        { src: tagineHands, caption: 'Hands-on cooking' },
      ],
    },
    // Additional unique images for specific sections
    photoSpots: [
      majorelleYellowDress,
      yellowBenchWoman,
      medinaEntranceWoman,
      medinaMapGroup,
      teaConversation,
      mintTea,
    ],
  },
};
