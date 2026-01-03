// ============================================================
// DIGITAL GUIDE CONFIGURATION TYPE DEFINITION
// ============================================================
// Use this type when creating destination guide configs
// These are interactive travel guides with audio, checklists, etc.
// ============================================================

export interface PronunciationItem {
  word: string;
  pronunciation: string;
  translation: string;
}

export interface FoodItem {
  name: string;
  description: string;
  mustTry?: boolean;
  image?: string;
}

export interface PackingItem {
  item: string;
  category: 'essentials' | 'clothing' | 'tech' | 'health' | 'documents' | 'comfort';
  essential?: boolean;
}

export interface JournalPrompt {
  day: number;
  prompt: string;
}

export interface PhotoSpot {
  name: string;
  description: string;
  tips: string;
  image?: string;
}

export interface RealTalkItem {
  topic: string;
  honest: string;
  tip: string;
}

// Editorial color palette for masculine luxury theming
export interface EditorialColorPalette {
  primary: string;      // HSL values - Main brand color (e.g., "25 73% 31%")
  accent: string;       // HSL values - Contrasting color
  neutral: string;      // HSL values - Background/text base
  highlight: string;    // HSL values - CTAs, special elements
  mood: 'warm-sophisticated' | 'bold-heritage' | 'modern-luxury' | 'adventure-refined' | 'vibrant-sophisticated' | 'earthy-bold' | 'safari-modern' | 'ancient-contemporary';
}

// Editorial configuration for magazine-style presentation
export interface EditorialConfig {
  issueNumber: string;       // e.g., "Guide No. 01"
  coverLine: string;         // e.g., "Where centuries collide"
  colorPalette: EditorialColorPalette;
}

// Pre-defined destination palettes (masculine luxury)
export const destinationPalettes: Record<string, EditorialColorPalette> = {
  morocco: {
    primary: '25 73% 31%',      // Saddle Brown (leather)
    accent: '213 52% 24%',      // Deep Navy
    neutral: '40 23% 94%',      // Warm white
    highlight: '30 57% 50%',    // Bronze
    mood: 'warm-sophisticated',
  },
  ghana: {
    primary: '210 26% 24%',     // Charcoal Blue
    accent: '43 80% 38%',       // Goldenrod
    neutral: '60 20% 98%',      // Off-white
    highlight: '348 86% 47%',   // Crimson
    mood: 'bold-heritage',
  },
  dubai: {
    primary: '240 100% 25%',    // Navy
    accent: '51 100% 50%',      // Gold
    neutral: '240 100% 99%',    // Ghost White
    highlight: '225 73% 57%',   // Royal Blue
    mood: 'modern-luxury',
  },
  southafrica: {
    primary: '147 26% 29%',     // Hunter Green
    accent: '17 100% 60%',      // Sunset Orange
    neutral: '25 100% 97%',     // Linen
    highlight: '24 100% 27%',   // Sienna
    mood: 'adventure-refined',
  },
  brazil: {
    primary: '156 54% 24%',     // Deep Forest
    accent: '44 97% 53%',       // Brazilian Gold
    neutral: '60 100% 97%',     // Ivory
    highlight: '221 100% 33%',  // Cobalt
    mood: 'vibrant-sophisticated',
  },
  ethiopia: {
    primary: '25 51% 28%',      // Coffee Brown
    accent: '351 88% 43%',      // Strong Red
    neutral: '9 100% 97%',      // Seashell
    highlight: '41 100% 50%',   // Amber
    mood: 'earthy-bold',
  },
  tanzania: {
    primary: '75 35% 22%',      // Army Green
    accent: '31 85% 53%',       // Carrot Orange
    neutral: '60 20% 97%',      // Off-white
    highlight: '219 79% 66%',   // Cornflower
    mood: 'safari-modern',
  },
  egypt: {
    primary: '200 29% 33%',     // Slate Blue
    accent: '30 45% 64%',       // Tan/Gold
    neutral: '50 100% 98%',     // Papyrus
    highlight: '19 66% 41%',    // Sienna
    mood: 'ancient-contemporary',
  },
  gullah: {
    primary: '200 60% 25%',     // Deep Sea Blue
    accent: '30 70% 55%',       // Sweetgrass Gold
    neutral: '40 30% 95%',      // Sandy White
    highlight: '15 80% 50%',    // Coral
    mood: 'warm-sophisticated',
  },
  caribbean: {
    primary: '195 80% 30%',     // Caribbean Blue
    accent: '45 90% 55%',       // Sunset Gold
    neutral: '180 20% 97%',     // Sea Foam
    highlight: '350 70% 50%',   // Hibiscus
    mood: 'vibrant-sophisticated',
  },
  blp: {
    primary: '0 0% 15%',        // Charcoal
    accent: '45 70% 50%',       // Classic Gold
    neutral: '0 0% 97%',        // Pure White
    highlight: '220 60% 45%',   // Royal Blue
    mood: 'modern-luxury',
  },
};

export interface GuideConfig {
  // Basic Info
  slug: string;
  destinationName: string;
  tagline: string;
  
  // Editorial Configuration (magazine-style)
  editorial?: EditorialConfig;
  
  // Theme (legacy - still supported)
  theme: {
    primary: string;      // HSL values e.g., "210 100% 31%"
    secondary: string;
    accent: string;
    sand: string;
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    backgroundVideo?: string;
  };

  // Welcome Section (Jay's intro / Editor's Letter)
  welcome: {
    greeting: string;
    message: string[];
    signature: string;
    signatureTitle: string;
    hostImage?: string;  // Optional: Jay's portrait for Editor's Letter
    image?: string;      // Optional: Section background/feature image
  };

  // Basics Section
  basics: {
    documents: {
      title: string;
      items: string[];
    };
    health: {
      title: string;
      items: string[];
    };
    money: {
      currency: string;
      currencyCode: string;
      tips: string[];
    };
    weather: {
      bestMonths: string;
      temperature: string;
      tips: string[];
    };
    packing: PackingItem[];
  };

  // Culture Section
  culture: {
    language: {
      name: string;
      greetings: PronunciationItem[];
    };
    food: {
      intro: string;
      items: FoodItem[];
    };
    customs: {
      title: string;
      items: string[];
    };
    shopping: {
      intro: string;
      tips: string[];
    };
  };

  // Photo Spots Section
  photos: {
    intro: string;
    spots: PhotoSpot[];
  };

  // Real Talk Section (honest truths)
  realTalk: {
    intro: string;
    items: RealTalkItem[];
  };

  // Before You Go Section
  beforeYouGo: {
    journal: JournalPrompt[];
    lastMinute: string[];
  };

  // Final Words
  finalWords: {
    message: string[];
    callToAction: {
      text: string;
      buttonText: string;
      link: string;
    };
  };

  // Images and videos throughout - organized by section for magazine-style layouts
  images: {
    hero: string;
    heroVideo?: string;           // Hero section video
    ctaVideo?: string;            // CTA section video
    welcome?: string;
    culture?: string;
    food?: string;
    gallery: string[];
    // New: Section interludes for photo magazine feel
    interludes?: {
      afterWelcome?: string[];    // Images after Editor's Letter
      afterBasics?: string[];     // Images after Essentials
      afterCulture?: string[];    // Images after Culture Spread
      afterPhotos?: string[];     // Images after Photo Spots
      afterRealTalk?: string[];   // Images after Real Talk
    };
    // New: Horizontal photo strips (flexible categories)
    strips?: {
      safari?: { src: string; caption?: string }[];
      beach?: { src: string; caption?: string }[];
      culture?: { src: string; caption?: string }[];
      architecture?: { src: string; caption?: string }[];
      shopping?: { src: string; caption?: string }[];
      food?: { src: string; caption?: string }[];
      adventure?: { src: string; caption?: string }[];
      heritage?: { src: string; caption?: string }[];
    };
    // Additional unique images for specific sections
    photoSpots?: string[];
  };
}

// Get editorial palette for a destination, with fallback
export const getEditorialPalette = (slug: string): EditorialColorPalette => {
  // Extract base destination name from slug
  const baseSlug = slug.replace('-guide', '').replace('-', '');
  return destinationPalettes[baseSlug] || destinationPalettes.tanzania;
};

// Destination theme CSS variables for dynamic theming
export const getDestinationThemeVars = (theme: GuideConfig['theme'], editorial?: EditorialConfig) => {
  // If editorial palette exists, use it for primary theming
  const palette = editorial?.colorPalette;
  
  return {
    // Legacy theme vars
    '--dest-primary': theme.primary,
    '--dest-secondary': theme.secondary,
    '--dest-accent': theme.accent,
    '--dest-sand': theme.sand,
    // Editorial palette vars (override when available)
    '--editorial-primary': palette?.primary || theme.primary,
    '--editorial-accent': palette?.accent || theme.accent,
    '--editorial-neutral': palette?.neutral || theme.sand,
    '--editorial-highlight': palette?.highlight || theme.accent,
  } as React.CSSProperties;
};
