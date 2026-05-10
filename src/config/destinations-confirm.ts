export interface ConfirmDestinationConfig {
  slug: string;
  name: string;
  eventLabel: string;
  confirmationLine: string;
  heroImage: string;
  jayVideo: string | null;
  jayPhoto: string;
  watchLink: string;
  calendarLink: string;
  bookingLink: string;
  tags: {
    ghl: string;
    constantContact: string;
  };
  welcomeLetter: string[];
  gifts: {
    cookbook: string | null;
    passportToFreedom: string | null;
    dosAndDonts: string | null;
    childrensBook: string | null;
  };
  essentials: {
    visa: string;
    passport: string;
    vaccines: string;
    currency: string;
    currencyCode: string;
  };
  funFacts: string[];
  funFactsHeading: string;
  funFactsSubheading: string;
  timeZone: string;
  images: {
    strip: string[];
  };
}

const placeholderHero = "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920";
const placeholderStrip = [
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200",
  "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200",
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200",
  "https://images.unsplash.com/photo-1502780402662-acc01917738e?w=1200",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200",
  "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200",
];

const stub = (slug: string, name: string, timeZone = "UTC"): ConfirmDestinationConfig => ({
  slug,
  name,
  eventLabel: `${name} Virtual Event`,
  confirmationLine: "Your seat is locked in. We'll see you there.",
  heroImage: placeholderHero,
  jayVideo: null,
  jayPhoto: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
  watchLink: "",
  calendarLink: "",
  bookingLink: "https://maximumimpacttravel.com",
  tags: { ghl: `${name} Info Session`, constantContact: `${name} Info Session` },
  welcomeLetter: [
    "Family,",
    `${name} is calling.`,
    "Your spot is locked in. Between now and the session, explore everything below. Come ready to be inspired.",
    "Let's get you ready for the magic.",
  ],
  gifts: { cookbook: null, passportToFreedom: null, dosAndDonts: null, childrensBook: null },
  essentials: {
    visa: "Check requirements for your nationality",
    passport: "Valid 6+ months from travel date",
    vaccines: "Consult your doctor before travel",
    currency: "Local currency",
    currencyCode: "USD",
  },
  funFacts: [
    `${name} is full of stories that have been waiting for you.`,
    `The culture, the food, the people of ${name} will change how you see the world.`,
    `${name} has been shaping civilization in ways most travelers never learn.`,
    `Every corner of ${name} is a chance to remember who you are.`,
    `Travelers say ${name} is the trip they wish they'd taken sooner.`,
  ],
  funFactsHeading: `${name} Isn't Waiting for Someday`,
  funFactsSubheading: "Neither should you.",
  timeZone,
  images: { strip: placeholderStrip },
});

export const destinationsConfirm: Record<string, ConfirmDestinationConfig> = {
  tanzania: {
    slug: "tanzania",
    name: "Tanzania",
    eventLabel: "Tanzania Virtual Event",
    confirmationLine: "Your seat is locked in. We'll see you there.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920",
    jayVideo: null,
    jayPhoto: "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/69538e8aec06c504ac9c62ca.jpg",
    watchLink: "",
    calendarLink: "",
    bookingLink: "https://maximumimpacttravel.com/destination/tanzania-zanzibar/",
    tags: { ghl: "Tanzania Info Session", constantContact: "Tanzania Info Session" },
    welcomeLetter: [
      "Family,",
      "Tanzania is where the world began.",
      "I've taken over 2,500 travelers around the world, and Tanzania still takes my breath away. The Serengeti shows you what Earth looked like before we complicated it. Zanzibar shows you what peace feels like.",
      "Your spot is locked in. Between now and the session, explore everything below. Come ready to be inspired.",
      "Let's get you ready for the magic.",
      "— Jay Cameron",
      "Travel Architect and Founder of Maximum Impact Travel",
    ],
    gifts: { cookbook: null, passportToFreedom: null, dosAndDonts: null, childrensBook: null },
    essentials: {
      visa: "Visa on arrival or e-visa available",
      passport: "Valid 6+ months from travel date",
      vaccines: "Yellow fever may be required — confirm with your doctor",
      currency: "Tanzanian Shilling",
      currencyCode: "TZS",
    },
    funFacts: [
      "The Serengeti hosts the largest animal migration on Earth — over 2 million wildebeest move together every single year.",
      "Zanzibar was once the spice capital of the world. You can still smell cloves and vanilla in the air.",
      "Tanzania is home to Kilimanjaro — the tallest freestanding mountain on the planet.",
      "The Ngorongoro Crater is the world's largest intact volcanic caldera — and it holds an entire ecosystem inside it.",
      "Zanzibar's Indian Ocean water is so clear you can see 30 feet down on a calm day.",
      "The Serengeti has barely changed in 10,000 years. You are looking at the same landscape our ancestors did.",
    ],
    funFactsHeading: "Tanzania Isn't Waiting for Someday",
    funFactsSubheading: "Neither should you.",
    timeZone: "Africa/Dar_es_Salaam",
    images: {
      strip: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200",
        "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200",
        "https://images.unsplash.com/photo-1502780402662-acc01917738e?w=1200",
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200",
        "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200",
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200",
      ],
    },
  },
  zanzibar: stub("zanzibar", "Zanzibar", "Africa/Dar_es_Salaam"),
  ghana: stub("ghana", "Ghana", "Africa/Accra"),
  southafrica: stub("southafrica", "South Africa", "Africa/Johannesburg"),
  kenya: stub("kenya", "Kenya", "Africa/Nairobi"),
  ethiopia: stub("ethiopia", "Ethiopia", "Africa/Addis_Ababa"),
  egypt: stub("egypt", "Egypt", "Africa/Cairo"),
  morocco: stub("morocco", "Morocco", "Africa/Casablanca"),
  dubai: stub("dubai", "Dubai", "Asia/Dubai"),
  brazil: stub("brazil", "Brazil", "America/Sao_Paulo"),
  caribbean: stub("caribbean", "The Caribbean", "America/Barbados"),
  gullah: stub("gullah", "Gullah Geechee", "America/New_York"),
};

export const defaultConfirmDestination: ConfirmDestinationConfig = {
  ...stub("default", "Maximum Impact Travel"),
  eventLabel: "Maximum Impact Travel Virtual Event",
  funFactsHeading: "The World Isn't Waiting for Someday",
};

export const getConfirmDestination = (slug?: string): ConfirmDestinationConfig => {
  if (!slug) return defaultConfirmDestination;
  return destinationsConfirm[slug.toLowerCase()] ?? defaultConfirmDestination;
};