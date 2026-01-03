import { GuideConfig } from '@/types/guide-config';

// Using Tanzania images contextually - Kenya shares the East African safari/beach experience
// HERO & SECTIONS (unique, never reused)
import heroImage from '@/assets/tanzania/kilimanjaro-sunrise.jpg';
import welcomeImage from '@/assets/tanzania/group-laugh.jpg';
import cultureImage from '@/assets/tanzania/maasai-exchange.jpg';
import foodImage from '@/assets/tanzania/safari-dinner.jpg';

// Videos
import heroVideo from '@/assets/tanzania/hero-safari.mp4';
import ctaVideo from '@/assets/tanzania/giraffe-cta.mp4';

// Safari & Balloon Experience (unique set)
import balloonAerial from '@/assets/tanzania/balloon-aerial.jpg';
import balloonInflation from '@/assets/tanzania/balloon-inflation.jpg';
import balloonJoyPortrait from '@/assets/tanzania/balloon-joy-portrait.jpg';
import lionReaction from '@/assets/tanzania/lion-reaction.jpg';
import safariVehicle from '@/assets/tanzania/safari-vehicle.jpg';
import serengetiDrive from '@/assets/tanzania/serengeti-drive.jpg';

// Ngorongoro & Landscapes (unique set)
import craterDawn from '@/assets/tanzania/crater-dawn.jpg';
import craterRim from '@/assets/tanzania/crater-rim.jpg';
import craterView from '@/assets/tanzania/crater-view.jpg';
import flamingosNgorongoro from '@/assets/tanzania/flamingos-ngorongoro.jpg';
import flamingoLake from '@/assets/tanzania/flamingo-lake.jpg';

// Maasai Cultural Experience (unique set)
import maasaiBoma from '@/assets/tanzania/maasai-boma.jpg';
import maasaiChildren from '@/assets/tanzania/maasai-children.jpg';
import maasaiDancing from '@/assets/tanzania/maasai-dancing.jpg';
import maasaiWelcome from '@/assets/tanzania/maasai-welcome.jpg';

// Luxury Camp Experience (unique set)
import luxuryCamp from '@/assets/tanzania/luxury-camp.jpg';
import luxuryTent from '@/assets/tanzania/luxury-tent-interior.jpg';
import campfire from '@/assets/tanzania/campfire-stories.jpg';
import sunsetToast from '@/assets/tanzania/sunset-toast.jpg';
import tentSunsetCouple from '@/assets/tanzania/tent-sunset-couple.jpg';
import sunriseCoffee from '@/assets/tanzania/sunrise-coffee.jpg';

// Beach/Coast (unique set for Mombasa/Diani context)
import dhowSunset from '@/assets/tanzania/dhow-sunset-silhouette.jpg';
import beachSunset from '@/assets/tanzania/beach-sunset-silhouettes.jpg';
import zanzibarParadise from '@/assets/tanzania/zanzibar-paradise.jpg';
import beachDinner from '@/assets/tanzania/beach-dinner.jpg';
import beachArrival from '@/assets/tanzania/beach-arrival.jpg';
import beachDaybedRelaxation from '@/assets/tanzania/beach-daybed-relaxation.jpg';

// Emotional moments (unique set)
import arrivalEmbrace from '@/assets/tanzania/arrival-embrace.jpg';
import champagneToast from '@/assets/tanzania/champagne-toast.jpg';

export const kenyaGuide: GuideConfig = {
  slug: 'kenya',
  destinationName: 'Kenya',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '0 65% 40%',
    secondary: '120 45% 30%',
    accent: '35 80% 50%',
    sand: '35 35% 88%',
  },

  hero: {
    title: 'Your Freedom Blueprint: KENYA',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: heroImage,
    backgroundVideo: heroVideo,
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'Kenya is where safari was born.',
      "I've taken 2,500 people around the world, and the Maasai Mara still makes my heart race. The Great Migration is the greatest wildlife show on Earth. Nairobi shows you Africa's future.",
      'This guide is everything real. Everything that helps.',
      "Let's get you ready for the wild.",
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
        'Kenya e-Visa ($51 apply online)',
        'Yellow fever certificate',
        'Return ticket',
        'Travel insurance (recommended)',
        'Vaccination records',
        'Hotel/safari confirmation',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'Yellow fever vaccine - REQUIRED',
        'Malaria pills (take them seriously)',
        'Hepatitis A & B recommended',
        'Typhoid recommended',
        'Cholera vaccine for some areas',
        'Sunscreen SPF 50+',
        'Bug spray with DEET',
        'Stomach medicine',
      ],
    },
    money: {
      currency: 'Kenyan Shilling',
      currencyCode: 'KES',
      tips: [
        'Bring $800-1200 USD cash',
        'ATMs in Nairobi/major towns',
        'USD accepted for tourism',
        'Small bills for tips essential',
        'M-Pesa mobile money widespread',
        'Meal: $5-20',
        'Taxi: $5-15',
        'Safari tip: $15-25/day guide',
        'Camp staff tip: $10-15/day',
      ],
    },
    weather: {
      bestMonths: 'July - October (Great Migration)',
      temperature: '60-85°F depending on altitude',
      tips: [
        'July-Oct: Migration in Mara (peak)',
        'Jan-Feb: Dry, good wildlife viewing',
        'Nov-Dec: Short rains, green',
        'Mar-May: Long rains (avoid)',
        'Nairobi is cooler (altitude)',
      ],
    },
    packing: [
      { item: 'Neutral colored clothing', category: 'clothing', essential: true },
      { item: 'Long sleeves and pants', category: 'clothing', essential: true },
      { item: 'Safari hat with strap', category: 'clothing', essential: true },
      { item: 'Fleece for morning drives', category: 'clothing', essential: true },
      { item: 'Beach clothes for coast', category: 'clothing' },
      { item: 'Sturdy walking shoes', category: 'clothing' },
      { item: 'Binoculars', category: 'tech', essential: true },
      { item: 'Camera with zoom lens', category: 'tech', essential: true },
      { item: 'Dust bag for camera', category: 'tech' },
      { item: 'Malaria prevention', category: 'health', essential: true },
      { item: 'Sunscreen SPF 50+', category: 'health', essential: true },
      { item: 'Bug spray with DEET', category: 'health', essential: true },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'Yellow fever certificate', category: 'documents', essential: true },
      { item: 'E-Visa printout', category: 'documents', essential: true },
    ],
  },

  culture: {
    language: {
      name: 'Swahili & English',
      greetings: [
        { word: 'Jambo', pronunciation: 'JAM-bo', translation: 'Hello' },
        { word: 'Habari', pronunciation: 'hah-BAH-ree', translation: 'How are you?' },
        { word: 'Asante sana', pronunciation: 'ah-SAHN-tay SAH-nah', translation: 'Thank you very much' },
        { word: 'Karibu', pronunciation: 'kah-REE-boo', translation: 'Welcome' },
        { word: 'Safari njema', pronunciation: 'sah-FAH-ree n-JEH-mah', translation: 'Have a good trip' },
      ],
    },
    food: {
      intro: 'Kenyan cuisine blends African, Arab, and Indian influences.',
      items: [
        { name: 'Nyama Choma', description: 'Grilled meat - Kenya\'s national dish', mustTry: true },
        { name: 'Ugali', description: 'Cornmeal staple - eat with hands', mustTry: true },
        { name: 'Sukuma Wiki', description: 'Collard greens - everyday comfort food' },
        { name: 'Chapati', description: 'Flaky flatbread from Indian influence' },
        { name: 'Pilau', description: 'Spiced rice dish' },
        { name: 'Samosas', description: 'Meat or vegetable filled pastries' },
        { name: 'Mandazi', description: 'Sweet fried dough - Swahili donut', mustTry: true },
        { name: 'Kenyan Tea', description: 'Strong, sweet, with milk - chai masala' },
      ],
    },
    customs: {
      title: 'Cultural Customs',
      items: [
        'Greet with respect - use both hands for elderly',
        'Right hand for eating and greetings',
        'Ask permission before photographing Maasai',
        'Dress modestly at coast (Muslim areas)',
        'Remove shoes when entering homes',
        'Bargaining expected at markets',
        'Punctuality is flexible - "African time"',
      ],
    },
    shopping: {
      intro: 'Kenya offers unique crafts from diverse communities.',
      tips: [
        'Maasai beadwork - support community artisans',
        'Soapstone carvings - Kisii tradition',
        'Kikoy fabric - colorful woven cloth',
        'Coffee - some of the world\'s best',
        'Macadamia nuts - Kenyan specialty',
        'Maasai Market in Nairobi (different locations daily)',
        'Kazuri Beads - women\'s cooperative',
        'Bargain at 40-50% of asking price',
      ],
    },
  },

  photos: {
    intro: 'Kenya offers unparalleled wildlife photography opportunities.',
    spots: [
      { name: 'Great Migration', description: 'Wildebeest crossing the Mara River', tips: 'July-October for crossings' },
      { name: 'Big Five', description: 'Lion, elephant, rhino, leopard, buffalo', tips: 'Patience and good guides' },
      { name: 'Maasai Warriors', description: 'Traditional dress and jumping', tips: 'Always ask permission and tip' },
      { name: 'Balloon Safari', description: 'Aerial view of the Mara', tips: 'Sunrise is magical' },
      { name: 'Flamingos', description: 'Pink lakes at Nakuru or Bogoria', tips: 'Best in large numbers' },
      { name: 'Elephant Orphanage', description: 'Baby elephants at Sheldrick Trust', tips: 'Visit 11am-12pm only' },
      { name: 'Giraffe Manor', description: 'Giraffes at breakfast', tips: 'Book months in advance' },
      { name: 'Diani Beach', description: 'Pristine white sand coast', tips: 'Golden hour for best light' },
    ],
  },

  realTalk: {
    intro: 'What you need to know to experience Kenya safely.',
    items: [
      {
        topic: 'Safari Safety',
        honest: 'The animals are wild. This is their home. Guides know what they\'re doing.',
        tip: 'Listen to guides, stay in vehicle, no sudden movements, keep quiet near animals.',
      },
      {
        topic: 'Malaria',
        honest: 'It\'s real. The Mara is a malaria zone. Don\'t skip your pills.',
        tip: 'Start medication before travel. Use DEET. Sleep under nets. Wear long sleeves at dusk.',
      },
      {
        topic: 'Nairobi Safety',
        honest: 'Like any big city, be aware. Don\'t flash valuables. Use Uber at night.',
        tip: 'Stay in recommended areas. Use reputable transport. Don\'t walk alone after dark.',
      },
      {
        topic: 'Dust & Bumps',
        honest: 'Safari roads are rough. It gets dusty. Your camera needs protection.',
        tip: 'Bring dust bag, bandana, antihistamines. Hold on during game drives.',
      },
      {
        topic: 'Tipping',
        honest: 'Tipping is expected and appreciated. Budget for it.',
        tip: 'Guide: $15-25/day. Camp staff: $10-15/day. Put tips in staff tip box to share.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What does "wild" mean to me?' },
      { day: 0, prompt: 'What animal do I most want to see?' },
      { day: 1, prompt: 'What took my breath away today?' },
      { day: 2, prompt: 'When did I feel most alive?' },
      { day: 3, prompt: 'What did the wilderness teach me?' },
      { day: 99, prompt: 'What wildness do I carry home?' },
      { day: 99, prompt: 'How am I different now?' },
    ],
    lastMinute: [
      'Download XE Currency app',
      'Download Seek app (animal identification)',
      'Download WhatsApp',
      'Print e-Visa confirmation',
      'Start malaria medication',
      'Pack neutral colors only',
      'Charge all camera batteries',
      'Notify bank of travel dates',
    ],
  },

  finalWords: {
    message: [
      'Kenya wakes something up in you.',
      'Maybe it\'s watching a million wildebeest cross the river. Maybe it\'s sitting with Maasai warriors. Maybe it\'s realizing humans started here - we\'re all coming home.',
      'The wild reminds you who you are.',
    ],
    callToAction: {
      text: 'Ready for Kenya?',
      buttonText: 'Book Your Kenya + Zanzibar Trip →',
      link: 'https://maximumimpacttravel.com/destination/kenya-seperate/',
    },
  },

  images: {
    hero: heroImage,
    heroVideo: heroVideo,
    ctaVideo: ctaVideo,
    welcome: welcomeImage,
    culture: cultureImage,
    food: foodImage,
    // Main gallery - unique images only
    gallery: [
      luxuryCamp,
      luxuryTent,
      craterView,
      flamingoLake,
      campfire,
      beachDaybedRelaxation,
      champagneToast,
    ],
    // Photo magazine interludes between sections - unique images
    interludes: {
      afterWelcome: [craterDawn, craterRim, serengetiDrive],
      afterBasics: [balloonAerial, balloonInflation, balloonJoyPortrait],
      afterCulture: [maasaiDancing, maasaiWelcome, maasaiChildren],
      afterPhotos: [zanzibarParadise, beachSunset, beachDinner],
      afterRealTalk: [sunsetToast, tentSunsetCouple, arrivalEmbrace],
    },
    // Horizontal scrolling photo strips - unique images
    strips: {
      safari: [
        { src: lionReaction, caption: 'First lion sighting' },
        { src: safariVehicle, caption: 'Game drive' },
        { src: flamingosNgorongoro, caption: 'Flamingo lake' },
        { src: sunriseCoffee, caption: 'Bush breakfast' },
      ],
      beach: [
        { src: dhowSunset, caption: 'Dhow at sunset' },
        { src: beachArrival, caption: 'Coastal arrival' },
      ],
      culture: [
        { src: maasaiBoma, caption: 'Maasai village' },
      ],
    },
  },
};
