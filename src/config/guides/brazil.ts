import { GuideConfig } from '@/types/guide-config';

// Hero & Welcome Images
import heroImage from '@/assets/brazil/pelourinho-streets.jpg';
import welcomeImage from '@/assets/brazil/bahiana-woman.jpg';

// Pelourinho & Salvador
import pelourinhoNight from '@/assets/brazil/pelourinho-night.jpg';
import lacerdaElevator from '@/assets/brazil/lacerda-elevator.jpg';
import bayView from '@/assets/brazil/bay-view.jpg';
import groupPelourinho from '@/assets/brazil/group-pelourinho.jpg';

// Culture & Spirituality
import capoeiraBench from '@/assets/brazil/capoeira-beach.jpg';
import candombleCeremony from '@/assets/brazil/candomble-ceremony.jpg';
import candombleBeads from '@/assets/brazil/candomble-beads.jpg';
import bonfimRibbons from '@/assets/brazil/bonfim-ribbons.jpg';
import tyingRibbons from '@/assets/brazil/tying-ribbons.jpg';
import berimbauPlayer from '@/assets/brazil/berimbau-player.jpg';
import olodumDrums from '@/assets/brazil/olodum-drums.jpg';
import sambaDancers from '@/assets/brazil/samba-dancers.jpg';

// Rio de Janeiro
import christRedeemer from '@/assets/brazil/christ-redeemer.jpg';
import copacabanaPromenade from '@/assets/brazil/copacabana-promenade.jpg';
import selaronSteps from '@/assets/brazil/selaron-steps.jpg';
import favelaArt from '@/assets/brazil/favela-art.jpg';

// Food & Drinks
import feijoada from '@/assets/brazil/feijoada-dish.jpg';
import moqueca from '@/assets/brazil/moqueca-dish.jpg';
import acaraje from '@/assets/brazil/acaraje-vendor.jpg';
import acai from '@/assets/brazil/acai-bowl.jpg';
import paoDeQueijo from '@/assets/brazil/pao-de-queijo.jpg';
import caipirinha from '@/assets/brazil/caipirinha-beach.jpg';

// Shopping
import mercadoModelo from '@/assets/brazil/mercado-modelo.jpg';

export const brazilGuide: GuideConfig = {
  slug: 'brazil',
  destinationName: 'Brazil',
  tagline: 'Your Freedom Blueprint',

  theme: {
    primary: '120 60% 35%',
    secondary: '50 90% 50%',
    accent: '210 80% 50%',
    sand: '50 30% 90%',
  },

  hero: {
    title: 'Your Freedom Blueprint: BRAZIL',
    subtitle: 'Everything You Need to Know Before You Go',
    backgroundImage: heroImage,
  },

  welcome: {
    greeting: 'Family,',
    message: [
      'Brazil has more Africans than any country outside Africa.',
      "Let that sit. After 2,500 travelers, Brazil still amazes me. It's where Africa survived slavery and thrived. Where samba meets soul. Where Candomblé kept our ancestors alive.",
      'This guide is everything real about Brazil. Not the postcards.',
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
        'Brazil visa (e-visa online, $80)',
        'Return ticket',
        'Hotel proof',
        'Travel insurance (recommended)',
        'Yellow fever recommended',
        'Vaccination record',
      ],
    },
    health: {
      title: 'Health & Medicine',
      items: [
        'Yellow fever vaccine recommended',
        'Hepatitis A & B recommended',
        'Typhoid recommended',
        'Malaria (Amazon only)',
        'Mosquito spray',
        'Sunscreen SPF 50+',
        'Stomach medicine',
        'Band-aids (cobblestones can cause blisters)',
      ],
    },
    money: {
      currency: 'Brazilian Real',
      currencyCode: 'BRL',
      tips: [
        'Bring $600-1000 cash',
        'Cards work most places',
        'ATMs everywhere',
        'Street food: $3-8',
        'Restaurant: $15-30',
        'Taxi/Uber: $5-20',
        'Capoeira class: $20',
        'Crafts: $10-50',
      ],
    },
    weather: {
      bestMonths: 'August - March (Dry Season)',
      temperature: '75-95°F (Hot year-round, always humid)',
      tips: [
        'Rainy season: April-July',
        'Dry season: August-March',
        'Hot and humid always',
        'Light, breathable clothes essential',
      ],
    },
    packing: [
      { item: 'Light, breathable clothes', category: 'clothing', essential: true },
      { item: 'Comfortable sandals', category: 'clothing', essential: true },
      { item: 'Walking shoes', category: 'clothing', essential: true },
      { item: 'Swimsuit', category: 'clothing' },
      { item: 'Rain jacket', category: 'clothing' },
      { item: 'Modest option for temples', category: 'clothing' },
      { item: 'Mosquito spray', category: 'health', essential: true },
      { item: 'Sunscreen SPF 50+', category: 'health', essential: true },
      { item: 'Stomach medicine', category: 'health' },
      { item: 'Band-aids', category: 'health' },
      { item: 'Passport', category: 'documents', essential: true },
      { item: 'Visa documents', category: 'documents', essential: true },
      { item: 'Travel insurance docs', category: 'documents' },
    ],
  },

  culture: {
    language: {
      name: 'Portuguese',
      greetings: [
        { word: 'Oi', pronunciation: 'oy', translation: 'Hi' },
        { word: 'Obrigado/a', pronunciation: 'oh-bree-GAH-doo/dah', translation: 'Thank you (male/female)' },
        { word: 'Por favor', pronunciation: 'por fah-VOR', translation: 'Please' },
        { word: 'Com licença', pronunciation: 'kom lee-SEN-sah', translation: 'Excuse me' },
        { word: 'Tudo bem?', pronunciation: 'TOO-doo baym', translation: 'How are you?' },
        { word: 'Sim', pronunciation: 'seem', translation: 'Yes' },
        { word: 'Não', pronunciation: 'now', translation: 'No' },
      ],
    },
    food: {
      intro: 'Brazilian cuisine is African soul food with Portuguese and Indigenous influences.',
      items: [
        { name: 'Feijoada', description: 'Black bean stew with pork - Saturday tradition', mustTry: true, image: feijoada },
        { name: 'Moqueca', description: 'Coconut seafood stew - Bahian specialty', mustTry: true, image: moqueca },
        { name: 'Acarajé', description: 'Black-eyed pea fritters - street food queen', mustTry: true, image: acaraje },
        { name: 'Pão de Queijo', description: 'Cheese bread - addictive snack', image: paoDeQueijo },
        { name: 'Coxinha', description: 'Chicken croquette - perfect bar snack' },
        { name: 'Açaí Bowl', description: 'Amazonian superfood - breakfast of champions', mustTry: true, image: acai },
        { name: 'Caipirinha', description: 'National cocktail - made with cachaça', mustTry: true, image: caipirinha },
      ],
    },
    customs: {
      title: 'Cultural Customs',
      items: [
        'Brazilians greet with hugs and cheek kisses',
        'Personal space is smaller - closeness is normal',
        'Meals are social events, not rushed',
        'Dress code is relaxed but stylish',
        'Candomblé ceremonies require respectful observation',
        'Ask permission before photographing religious events',
      ],
    },
    shopping: {
      intro: 'From iconic flip-flops to sacred instruments, Brazil has treasures for every traveler.',
      tips: [
        'Havaianas flip-flops - the original',
        'Brazilian swimwear - world famous',
        'Cachaça - for caipirinhas at home',
        'Coffee - some of the world\'s best',
        'Gemstones - amethyst, aquamarine, topaz',
        'Berimbau - capoeira instrument',
        'African art - especially in Salvador',
        'Mercado Modelo (Salvador) for crafts',
        'São Joaquim Market for authentic goods',
        'Rio Hippie Fair on Sundays',
      ],
    },
  },

  photos: {
    intro: 'Capture the rhythm, colors, and African soul of Brazil.',
    spots: [
      { name: 'Pelourinho Colors', description: 'Colonial Salvador\'s painted buildings', tips: 'Early morning for empty streets' },
      { name: 'Christ the Redeemer', description: 'Rio\'s iconic statue', tips: 'Go early or at sunset' },
      { name: 'Capoeira Circle', description: 'Martial art in motion', tips: 'Action shots need fast shutter' },
      { name: 'Candomblé Ceremony', description: 'Sacred ritual if permitted', tips: 'Always ask permission first' },
      { name: 'Favela Art', description: 'Colorful community murals', tips: 'Guided tour only - respect the space' },
      { name: 'Beach Football', description: 'Copacabana culture', tips: 'Golden hour on the sand' },
      { name: 'Samba Dancing', description: 'Pure joy in motion', tips: 'Night shots need steady hand' },
      { name: 'Açaí Bowl', description: 'Perfect food photography', tips: 'Natural light, bright colors' },
      { name: 'Escadaria Selarón', description: 'Famous tiled steps', tips: 'Go very early for empty stairs' },
      { name: 'Sunset at Elevador', description: 'Salvador\'s famous elevator', tips: 'Panoramic city and bay views' },
    ],
  },

  realTalk: {
    intro: 'The honest truths about navigating Brazil safely and meaningfully.',
    items: [
      {
        topic: 'Street Safety',
        honest: 'Crime exists in cities. Common sense applies. Tourist areas are generally safe.',
        tip: "Don't wear jewelry. Phone in pocket. Uber after dark. Beach vendors hustle. Stay in groups.",
      },
      {
        topic: 'Language Barrier',
        honest: 'Portuguese only in most places. English is rare outside tourist hotels.',
        tip: 'Download Google Translate offline. Learn basic phrases. Patience and smiles work.',
      },
      {
        topic: 'The African Connection',
        honest: "Salvador feels more African than some African cities. It's powerful and emotional.",
        tip: 'Give yourself time to process. This is heritage, not just tourism.',
      },
      {
        topic: 'Communication',
        honest: 'Get TIM or Claro SIM. WhatsApp is everything here.',
        tip: 'WiFi in hotels. Data is affordable. Stay connected.',
      },
      {
        topic: 'The Rhythm',
        honest: 'Brazil runs on its own clock. Music, dance, joy - it\'s in the air.',
        tip: 'Let go. Join in. This is what survival looks like.',
      },
    ],
  },

  beforeYouGo: {
    journal: [
      { day: 0, prompt: 'What parts of my culture survived?' },
      { day: 0, prompt: 'What do I know about resistance?' },
      { day: 1, prompt: 'Where do I see Africa here?' },
      { day: 2, prompt: 'What rhythms feel familiar?' },
      { day: 3, prompt: 'How did culture survive slavery?' },
      { day: 99, prompt: 'What strength did I find in myself?' },
      { day: 99, prompt: 'What traditions will I preserve?' },
    ],
    lastMinute: [
      'Download Uber app',
      'Download Google Translate (add Portuguese offline)',
      'Download XE Currency app',
      'Download 99 app (local Uber)',
      'Download WhatsApp',
      'Confirm visa is approved',
      'Notify bank of travel dates',
    ],
  },

  finalWords: {
    message: [
      'Brazil shows you what survival looks like.',
      "They tried to break the culture. The culture said no. The drums kept playing. The ancestors kept speaking. The resistance became art.",
      "That's in your DNA too.",
    ],
    callToAction: {
      text: 'Ready to feel the rhythm?',
      buttonText: 'Book Your Brazil Trip →',
      link: 'https://maximumimpacttravel.com/destination/brazil/',
    },
  },

  images: {
    hero: heroImage,
    welcome: welcomeImage,
    culture: candombleCeremony,
    food: feijoada,
    gallery: [
      pelourinhoNight,
      capoeiraBench,
      christRedeemer,
      copacabanaPromenade,
      selaronSteps,
      sambaDancers,
      olodumDrums,
      mercadoModelo,
      bonfimRibbons,
      bayView,
    ],
    interludes: {
      // After welcome - unique Salvador images
      afterWelcome: [groupPelourinho, lacerdaElevator],
      afterWelcomeQuote: {
        text: "Salvador feels more African than some African cities. That's not an accident—it's survival.",
        attribution: 'Jay Cameron',
      },
      // After basics - culture images
      afterBasics: [berimbauPlayer, tyingRibbons],
      // After culture - food grid
      afterCulture: [moqueca, acaraje, acai, paoDeQueijo],
      // After photos - single dramatic image
      afterPhotos: [favelaArt],
    },
    strips: {
      culture: [
        { src: capoeiraBench, caption: 'Capoeira on the Beach' },
        { src: sambaDancers, caption: 'Samba Dancers' },
        { src: olodumDrums, caption: 'Olodum Drummers' },
        { src: candombleBeads, caption: 'Sacred Beads' },
      ],
      food: [
        { src: feijoada, caption: 'Feijoada' },
        { src: moqueca, caption: 'Moqueca' },
        { src: caipirinha, caption: 'Caipirinha' },
      ],
      heritage: [
        { src: candombleCeremony, caption: 'Candomblé Temple' },
        { src: bonfimRibbons, caption: 'Bonfim Church' },
      ],
      architecture: [
        { src: christRedeemer, caption: 'Christ the Redeemer' },
        { src: copacabanaPromenade, caption: 'Copacabana Beach' },
        { src: selaronSteps, caption: 'Selarón Steps' },
        { src: pelourinhoNight, caption: 'Pelourinho at Night' },
      ],
      shopping: [
        { src: mercadoModelo, caption: 'Mercado Modelo' },
        { src: berimbauPlayer, caption: 'Berimbau Instruments' },
      ],
    },
    photoSpots: [
      lacerdaElevator,
      christRedeemer,
      selaronSteps,
      copacabanaPromenade,
      favelaArt,
      sambaDancers,
      pelourinhoNight,
      bonfimRibbons,
    ],
  },
};
