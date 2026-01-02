// ============================================================
// TRIP CONFIGURATION TYPE DEFINITION
// ============================================================
// Use this type when creating new destination configs
// ============================================================

export interface TripConfig {
  // Basic Info
  countryName: string;
  tagline: string;
  slug: string; // URL slug like "tanzania", "morocco", "ghana"

  // Images
  images: {
    hero: string;
    heroVideo?: string;
    host: string;
    cta: string;
    ctaVideo?: string;
  };

  // Host Info
  host: {
    name: string;
    title: string;
    bio: string[];
    philosophy: string;
    travelerCount: string;
  };

  // Hero Section
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    ctaText: string;
    ctaSubtext: string;
  };

  // Story Section
  story: {
    sectionLabel: string;
    headline: string;
    paragraphs: string[];
    costIntro: string;
    costParagraphs: string[];
    quote: {
      text: string;
      author: string;
      title: string;
    };
  };

  // Features Section
  features: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  // Registration Form
  registration: {
    headline: string;
    subheadline: string;
    badge: string;
    footerText: string;
    discoverItems: string[];
    sessionDuration: string;
    webinar: {
      scriptUrl: string;
      functionName: string;
      identifier: string;
    };
  };

  // Gallery Section
  gallery: {
    sectionLabel: string;
    headline: string;
    items: {
      image: string;
      caption: string;
    }[];
  };

  // Testimonials Section
  testimonials: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    videos: string[];
    items: {
      category: string;
      description: string;
      quote: string;
      author: string;
      location: string;
    }[];
  };

  // Destinations Section
  destinations: {
    sectionLabel: string;
    headline: string;
    items: {
      name: string;
      description: string;
      image: string;
    }[];
  };

  // Final CTA Section
  finalCta: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    description: string;
    ctaText: string;
    ctaSubtext: string;
  };

  // FAQ Section
  faq: {
    sectionLabel: string;
    headline: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}
