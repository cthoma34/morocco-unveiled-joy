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

export interface GuideConfig {
  // Basic Info
  slug: string;
  destinationName: string;
  tagline: string;
  
  // Theme
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

  // Welcome Section (Jay's intro)
  welcome: {
    greeting: string;
    message: string[];
    signature: string;
    signatureTitle: string;
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

  // Images throughout
  images: {
    hero: string;
    welcome?: string;
    culture?: string;
    food?: string;
    gallery: string[];
  };
}

// Destination theme CSS variables for dynamic theming
export const getDestinationThemeVars = (theme: GuideConfig['theme']) => ({
  '--dest-primary': theme.primary,
  '--dest-secondary': theme.secondary,
  '--dest-accent': theme.accent,
  '--dest-sand': theme.sand,
} as React.CSSProperties);
