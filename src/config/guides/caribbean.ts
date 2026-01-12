import { GuideConfig } from '@/types/guide-config';

// Caribbean Cruise images - Ship Life
import shipDeparture from '@/assets/caribbean/ship-departure.jpg';
import promenadeSunset from '@/assets/caribbean/promenade-sunset.jpg';
import mitDinner from '@/assets/caribbean/mit-dinner.jpg';
import spaOceanView from '@/assets/caribbean/spa-ocean-view.jpg';
import dancingStars from '@/assets/caribbean/dancing-stars.jpg';
import cocktailToast from '@/assets/caribbean/cocktail-toast.jpg';
import balconyCoffee from '@/assets/caribbean/balcony-coffee.jpg';
import gourmetDinner from '@/assets/caribbean/gourmet-dinner.jpg';
import infinityPool from '@/assets/caribbean/infinity-pool.jpg';
import embarkationFamily from '@/assets/caribbean/embarkation-family.jpg';

// Ship & Cruise Experience
import embarkationBoarding from '@/assets/caribbean/embarkation-boarding.jpg';
import shipSailing from '@/assets/caribbean/ship-sailing.jpg';
import balconySunrise from '@/assets/caribbean/balcony-sunrise.jpg';
import poolDeck from '@/assets/caribbean/pool-deck.jpg';
import formalDinner from '@/assets/caribbean/formal-dinner.jpg';
import deckSunset from '@/assets/caribbean/deck-sunset.jpg';
import spaTreatment from '@/assets/caribbean/spa-treatment.jpg';
import shipTheater from '@/assets/caribbean/ship-theater.jpg';

// Island Experiences
import beachShipView from '@/assets/caribbean/beach-ship-view.jpg';
import snorkeling from '@/assets/caribbean/snorkeling.jpg';
import islandExcursion from '@/assets/caribbean/island-excursion.jpg';
import pitonsView from '@/assets/caribbean/pitons-view.jpg';
import colorfulHouses from '@/assets/caribbean/colorful-houses.jpg';
import islandMarket from '@/assets/caribbean/island-market.jpg';

// Culture & Music
import steelDrums from '@/assets/caribbean/steel-drums.jpg';
import reggaeBar from '@/assets/caribbean/reggae-bar.jpg';

// Food & Drink
import jerkStand from '@/assets/caribbean/jerk-stand.jpg';
import rumBar from '@/assets/caribbean/rum-bar.jpg';
import flyingFish from '@/assets/caribbean/flying-fish.jpg';
import doubles from '@/assets/caribbean/doubles.jpg';

export const caribbeanGuide: GuideConfig = {
  slug: 'caribbean',
  destinationName: 'Afro-Caribbean Cruise',
  tagline: 'Eight Nations. One Diaspora. Your Freedom Blueprint.',
  theme: { 
    primary: '195 80% 45%', 
    secondary: '45 90% 55%', 
    accent: '340 70% 50%', 
    sand: '45 40% 92%' 
  },
  hero: { 
    title: 'AFRO-CARIBBEAN CRUISE', 
    subtitle: 'Eight Nations of the Diaspora — Everything You Need Before You Board', 
    backgroundImage: shipDeparture 
  },
  welcome: { 
    greeting: 'Family,', 
    message: [
      'One ship. Seven islands. One unbroken story of African survival.',
      "After 2,500 travelers, this cruise is different. It's not just vacation—it's education. Every island we visit holds a chapter of our diaspora story. The same people, scattered by the same history, who built seven different nations from the same spirit.",
      "Jamaica's Maroons who never surrendered. Barbados where they called us 'Redlegs' because we worked alongside the Irish. Trinidad where Carnival became resistance. St. Lucia where Creole kept African rhythms alive. Each island is a lesson.",
      'This guide prepares you for every port. Real history. Real food. Real culture. Real preparation.',
      "Let's sail through our story."
    ], 
    signature: 'Jay Cameron', 
    signatureTitle: 'Founder, Maximum Impact Travel',
    image: embarkationBoarding
  },
  basics: { 
    documents: { 
      title: 'Documents You Need', 
      items: [
        'Passport (valid 6+ months)', 
        'No visas needed (cruise passengers)', 
        'Cruise documents', 
        'Return flight info', 
        'Travel insurance (recommended)', 
        'Passport copies', 
        'Emergency contacts'
      ] 
    }, 
    health: { 
      title: 'Health & Comfort', 
      items: [
        'Consult your doctor before travel',
        'Seasickness medicine', 
        'Sunscreen SPF 50+', 
        'Aloe vera for sunburn', 
        'Bug spray for shore days'
      ] 
    },
    money: { 
      currency: 'Varies by Island', 
      currencyCode: 'USD', 
      tips: [
        'Most islands accept USD', 
        'Eastern Caribbean Dollar (EC$) on some islands', 
        'Jamaican Dollar (JMD)', 
        'Barbados Dollar (BBD)', 
        'Bring $100-150 per port day', 
        'Small bills essential', 
        'Credit cards work in tourist areas', 
        'Beach chair: $10-20', 
        'Local lunch: $10-20', 
        'Taxi tour: $30-50', 
        'Rum punch: $5-10'
      ] 
    }, 
    weather: { 
      bestMonths: 'November - May', 
      temperature: 'Tropical paradise year-round', 
      seasons: [
        {
          period: 'December - May',
          title: 'The Trade Wind Season',
          tagline: 'When perfect breezes and calm seas await',
          experiences: ['Ideal sailing conditions', 'Crystal clear waters', 'Peak festival season'],
          perks: 'Trade winds keep it comfortable, perfect beach days, calm seas for cruising',
          travelNotes: 'Bring layers for air-conditioned ships'
        },
        {
          period: 'June - November',
          title: 'The Emerald Season',
          tagline: 'When islands turn lush and beaches become yours',
          experiences: ['Lush green landscapes', 'Afternoon rainbows', 'Uncrowded beaches'],
          perks: 'Luxury cruises become accessible, locals have time to share stories, vibrant vegetation',
          travelNotes: 'Brief afternoon showers mean perfect morning adventures—the sea stays warm and inviting'
        }
      ]
    },
    packing: [
      { item: 'Formal night outfit', category: 'clothing', essential: true }, 
      { item: 'Swimsuits (3+)', category: 'clothing', essential: true }, 
      { item: 'Cover-ups', category: 'clothing' }, 
      { item: 'Walking shoes', category: 'clothing', essential: true }, 
      { item: 'Sandals', category: 'clothing' }, 
      { item: 'Light layers (ship AC is cold)', category: 'clothing' }, 
      { item: 'Power strip (limited outlets)', category: 'tech' }, 
      { item: 'Waterproof phone case', category: 'tech' }, 
      { item: 'Seasickness medicine', category: 'health', essential: true }, 
      { item: 'Sunscreen SPF 50+', category: 'health', essential: true }, 
      { item: 'Aloe vera', category: 'health' }, 
      { item: 'Bug spray', category: 'health' }, 
      { item: 'Passport', category: 'documents', essential: true }, 
      { item: 'Cruise documents', category: 'documents', essential: true }
    ] 
  },
  culture: { 
    language: { 
      name: 'Various Caribbean', 
      greetings: [
        { word: 'Wah gwaan', pronunciation: 'wah-GWAHN', translation: "What's up (Jamaica)" }, 
        { word: 'Lime', pronunciation: 'lyme', translation: 'Hang out (Trinidad)' }, 
        { word: 'Fete', pronunciation: 'fet', translation: 'Party (everywhere)' }, 
        { word: 'Irie', pronunciation: 'EYE-ree', translation: "Everything's good" }, 
        { word: 'Big up', pronunciation: 'big up', translation: 'Respect' }, 
        { word: 'Small ting', pronunciation: 'small ting', translation: 'No problem' }
      ] 
    }, 
    history: {
      title: 'Eight Nations of the Diaspora',
      intro: 'Each island tells a different chapter of the same African survival story. From the first enslaved Africans who arrived in the 1500s to the communities that thrive today, these eight nations represent adaptation, resistance, and cultural preservation against all odds.',
      items: [
        {
          name: 'Puerto Rico (San Juan)',
          period: 'Settled 1508 (Spanish)',
          story: 'Our starting and stopping point—and a crucial chapter of Afro-Caribbean history. Enslaved Africans arrived in 1513 to build the fortress of El Morro and work sugar, coffee, and tobacco plantations. The town of Loíza, known as the "capital of Black Puerto Rico," preserves bomba drumming, vejigante mask traditions, and African spiritual practices. San Juan\'s La Perla neighborhood holds deep Afro-Boricua history.',
          legacy: 'Bomba music, Plena rhythms, Vejigante masks, Loíza culture, El Morro fortress'
        },
        {
          name: 'Jamaica',
          period: 'Settled 1509 (Spanish), 1655 (British)',
          story: 'Home to the Maroons—escaped enslaved Africans who established free communities in the Blue Mountains and fought the British to a standstill. The 1739 peace treaty made them the first free Black nation in the Western Hemisphere. Reggae, dancehall, and Rastafari all emerged from this spirit of resistance. Over 90% of Jamaicans are of African descent.',
          legacy: 'Maroon resistance, Reggae music, Rastafari movement, Marcus Garvey'
        },
        {
          name: 'Barbados',
          period: 'Settled 1627 (British)',
          story: 'The first major English slave society in the Caribbean. Over 600,000 Africans were brought here—more than to all of North America combined. The 1816 Bussa Rebellion was the largest slave uprising in Barbadian history. Today, 92% of the population is Afro-Barbadian, and Crop Over festival maintains African harvest traditions.',
          legacy: 'Bussa Rebellion, Crop Over festival, Landship tradition, Tuk band music'
        },
        {
          name: 'Trinidad & Tobago',
          period: 'Settled 1592 (Spanish), 1797 (British)',
          story: 'The most ethnically diverse Caribbean nation—African, Indian, Chinese, Syrian, European, and Indigenous peoples created something unique. Carnival was born here when French planters arrived with enslaved Africans who transformed the masquerade into resistance. Calypso and steel pan are direct African innovations.',
          legacy: 'Carnival, Steel Pan invention, Calypso music, Orisha tradition'
        },
        {
          name: 'St. Lucia',
          period: 'Settled 1635 (French), changed hands 14 times',
          story: 'Called "Helen of the West Indies" because France and Britain fought over her for 150 years. This constant change meant African culture blended with French Creole in unique ways. The Brigands—freedom fighters and escaped enslaved people—controlled the island during the French Revolution. Kwéyòl language preserves African-French fusion.',
          legacy: 'Brigands resistance, Kwéyòl Creole language, Jazz Festival, Nobel laureates'
        },
        {
          name: 'Antigua & Barbuda',
          period: 'Settled 1632 (British)',
          story: 'The sugar industry was so brutal here that by 1736, enslaved Africans outnumbered Europeans 10 to 1. That year, Prince Klaas (Tacky) organized a rebellion to overthrow the British—it was discovered and crushed, but his legacy lives on. After emancipation in 1834, formerly enslaved people refused to work sugar and became fishermen and farmers.',
          legacy: 'Prince Klaas Rebellion, Carnival, Cricket culture, Pan music'
        },
        {
          name: 'Grenada',
          period: 'Settled 1649 (French)',
          story: 'Known as the "Spice Island" for nutmeg, mace, cinnamon, and cloves brought from Africa and Asia. In 1795, Julien Fédon, a free colored planter, led the largest slave rebellion in the Eastern Caribbean. Today, 82% of Grenadians are of African descent. The Big Drum dance directly preserves West African rhythms.',
          legacy: "Fédon's Rebellion, Big Drum tradition, Spice production, Jab Jab carnival"
        },
        {
          name: 'Cayman Islands',
          period: 'Settled 1734 (British)',
          story: 'Unlike other islands, the Caymans were never a plantation economy—too small and remote. This meant a unique society developed where formerly enslaved people, shipwrecked sailors, and pirates lived together. African-descended Caymanians became master shipbuilders and turtle hunters. Today, Cayman culture blends African seafaring traditions with island innovation.',
          legacy: 'Seafaring tradition, Catboat building, Turtle fishing, Jump-up dancing'
        }
      ]
    },
    food: { 
      intro: 'Each island has its own signature flavors rooted in African, European, and Indigenous traditions.', 
      items: [
        { name: 'Jerk Everything (Jamaica)', description: 'Spiced, smoked perfection—technique descended from Maroon cooking', mustTry: true, image: jerkStand }, 
        { name: 'Flying Fish (Barbados)', description: 'National dish with cou cou—cornmeal from West African fufu tradition', mustTry: true, image: flyingFish }, 
        { name: 'Doubles (Trinidad)', description: 'Curried chickpeas in fried bread—Indian-African fusion street food', mustTry: true, image: doubles }, 
        { name: 'Green Fig & Saltfish (St. Lucia)', description: 'Banana and salted cod—provisions that kept Africans alive' }, 
        { name: 'Fungie & Pepperpot (Antigua)', description: 'Cornmeal with stew—West African one-pot tradition' }, 
        { name: 'Oil Down (Grenada)', description: 'One-pot coconut stew—the national dish of resistance' }, 
        { name: 'Turtle Stew (Cayman)', description: 'Island specialty from the seafaring tradition' }
      ] 
    }, 
    customs: { 
      title: 'Island Etiquette', 
      items: [
        'Greet people - "Good morning" goes far', 
        'Respect the pace - island time is real', 
        'Ask before photographing locals', 
        'Haggle politely in markets', 
        'Tip for good service', 
        "Don't just stay on the ship - explore",
        'Learn the local history before each port'
      ] 
    }, 
    shopping: { 
      intro: 'Each island has its own specialty—collect treasures as you go.', 
      tips: [
        'Jamaica: Blue Mountain coffee, rum, wood carvings', 
        'Barbados: Mount Gay rum, hot sauce, pottery', 
        'Trinidad: Pepper sauce, steel pans, soca CDs', 
        'St. Lucia: Cocoa, banana ketchup, batik', 
        'Grenada: Nutmeg everything (the spice island)', 
        'Antigua: Black pineapple, hand-dyed cloth', 
        'Cayman: Rum cake, caymanite jewelry', 
        'Bargaining expected in markets', 
        'Duty-free shopping available'
      ] 
    } 
  },
  photos: { 
    intro: 'Capture the turquoise waters, vibrant culture, and island magic.', 
    spots: [
      { name: 'Ship Arrival', description: 'Each port entrance is unique', tips: 'Top deck early morning', image: shipSailing }, 
      { name: 'Beach Paradise', description: 'Crystal clear Caribbean water', tips: 'Underwater camera for snorkeling', image: snorkeling }, 
      { name: 'Local Market', description: 'Colors and characters', tips: 'Ask permission for portraits', image: islandMarket }, 
      { name: 'Rum Punch Sunset', description: 'Classic cruise moment', tips: 'Golden hour on deck', image: cocktailToast }, 
      { name: 'Steel Drums', description: 'Trinidad especially', tips: 'Capture the movement', image: steelDrums }, 
      { name: 'Colorful Houses', description: 'Every island has them', tips: 'Morning light is best', image: colorfulHouses }, 
      { name: 'The Pitons', description: 'St. Lucia volcanic peaks', tips: 'Early morning clarity', image: pitonsView }, 
      { name: 'Group Ship Photo', description: 'Formal night memories', tips: 'Book photographer early', image: mitDinner }
    ] 
  },
  realTalk: { 
    intro: 'What you need to know about cruising and port days.', 
    items: [
      { topic: 'Port Safety', honest: "Ship tours are safest but limit exploration. Independent travel is fine with common sense.", tip: "Be back 1 hour before sailing. Stick to tourist areas. Don't buy drugs (setups). Watch the rum punch." }, 
      { topic: 'Ship Life', honest: 'Ships are floating cities. Germs spread. Crowds happen. But the convenience is unmatched.', tip: 'Hand sanitizer always. Take stairs not elevators. Book restaurants early. Tip room steward daily.' }, 
      { topic: 'Time Management', honest: "Port time is limited. You can't see everything. Choose what matters most to you.", tip: 'Research ports in advance. Book excursions early. Have a plan B for weather.' }, 
      { topic: 'Communication', honest: 'Ship WiFi is expensive and slow. Port WiFi at cafes works.', tip: 'Buy local SIM if needed. WhatsApp when connected. Embrace being unplugged.' }, 
      { topic: 'Seasickness', honest: 'It happens. Modern ships have stabilizers but rough seas occur.', tip: 'Dramamine or prescription patches. Ginger helps. Mid-ship cabins rock less.' },
      { topic: 'History Ignorance', honest: 'Most cruise activities skip the real African diaspora story. They show beaches, not rebellions.', tip: 'Use this guide. Research each island before arrival. Connect with local historians and tour guides who know the real story.' }
    ] 
  },
  beforeYouGo: { 
    journal: [
      { day: 0, prompt: 'What do I know about African survival in the Caribbean?' }, 
      { day: 0, prompt: 'Which island history resonates most with me?' }, 
      { day: 1, prompt: 'What surprised me about the first port?' }, 
      { day: 2, prompt: 'How does resistance show up differently on each island?' }, 
      { day: 3, prompt: 'Where do I see Africa in the food, music, and faces?' }, 
      { day: 99, prompt: 'Which island calls me back and why?' }, 
      { day: 99, prompt: 'How has this journey changed how I see the diaspora?' }
    ], 
    lastMinute: [
      'Download Ship Mate app (cruise schedules)', 
      'Download XE Currency app', 
      'Download WhatsApp', 
      'Download island maps offline', 
      'Pack seasickness medication', 
      'Confirm cruise check-in', 
      'Print cruise documents', 
      'Pack power strip for cabin',
      'Research each island African history',
      'Download diaspora history podcasts'
    ] 
  },
  finalWords: { 
    message: [
      'The Caribbean teaches you about adaptation.',
      "Eight nations. Eight solutions. Same people. Same history. Same unbroken spirit.",
      "From San Juan's bomba drums to Jamaica's Maroons who never surrendered. Bussa rose up in Barbados. Fédon almost won in Grenada. The steel pan was invented in Trinidad when they banned drums. Carnival became resistance. Reggae became revolution.",
      "Each island kept something different. Together, they kept everything. The drums never stopped. The spice never left. The resistance never died.",
      "Eight nations, one story: We're still here."
    ],
    callToAction: { 
      text: 'Ready to cruise the diaspora?', 
      buttonText: 'Book Your Afro-Caribbean Cruise →', 
      link: 'https://maximumimpacttravel.com/destination/afro-caribbean-cruise/' 
    }
  },
  images: { 
    // Hero - unique image
    hero: shipDeparture, 
    // Welcome - unique image
    welcome: embarkationBoarding, 
    // Culture - unique image
    culture: steelDrums, 
    // Food - unique image
    food: jerkStand, 
    // Gallery - all unique images (used in various spots)
    gallery: [
      shipSailing,
      poolDeck,
      formalDinner,
      deckSunset,
      beachShipView,
      islandExcursion,
      reggaeBar,
      spaTreatment,
      shipTheater,
      rumBar,
      doubles,
      flyingFish,
      embarkationFamily,
      balconyCoffee,
      gourmetDinner,
      infinityPool,
      promenadeSunset,
      dancingStars
    ],
    strips: {
      // Ship Life Strip - all unique to this strip
      shipLife: [
        { src: balconySunrise, caption: 'Sunrise at Sea' },
        { src: spaOceanView, caption: 'Spa with Ocean Views' },
        { src: mitDinner, caption: 'MIT Family Dinner' },
        { src: cocktailToast, caption: 'Sunset Toasts' },
        { src: promenadeSunset, caption: 'Promenade Magic' },
        { src: dancingStars, caption: 'Dancing Under Stars' },
      ],
      // Island Life Strip - all unique to this strip
      islandLife: [
        { src: snorkeling, caption: 'Underwater Adventures' },
        { src: pitonsView, caption: 'The Pitons, St. Lucia' },
        { src: colorfulHouses, caption: 'Caribbean Colors' },
        { src: islandMarket, caption: 'Spice Market Finds' },
        { src: islandExcursion, caption: 'Island Exploration' },
        { src: beachShipView, caption: 'Paradise Port Day' },
      ],
      // Culture Strip - all unique to this strip  
      culture: [
        { src: reggaeBar, caption: 'Jamaica Vibes' },
        { src: rumBar, caption: 'Caribbean Spirits' },
        { src: doubles, caption: 'Trinidad Street Food' },
        { src: flyingFish, caption: 'Barbados Flavors' },
        { src: gourmetDinner, caption: 'Fusion Cuisine' },
        { src: infinityPool, caption: 'Poolside Culture' },
      ]
    },
    interludes: { 
      // After Welcome - 2 unique images
      afterWelcome: [shipSailing, deckSunset],
      // After Basics - 2 unique images
      afterBasics: [poolDeck, formalDinner], 
      // After Culture - 2 unique images
      afterCulture: [embarkationFamily, balconyCoffee],
      // After Photos - 1 unique image for full bleed
      afterPhotos: [shipTheater],
      // After Real Talk - 2 unique images
      afterRealTalk: [spaTreatment, promenadeSunset],
      afterRealTalkQuote: {
        text: "Eight nations, one story: We're still here.",
        attribution: "Jay Cameron"
      }
    } 
  },
};
