import { GuideConfig } from '@/types/guide-config';
import { dubaiGuide } from './dubai';
import { ghanaGuide } from './ghana';
import { tanzaniaGuide } from './tanzania';
import { southafricaGuide } from './southafrica';
import { brazilGuide } from './brazil';
import { ethiopiaGuide } from './ethiopia';
import { caribbeanGuide } from './caribbean';
import { blpGuide } from './blp';
import { gullahGuide } from './gullah';

// Export all guide configs
export {
  dubaiGuide,
  ghanaGuide,
  tanzaniaGuide,
  southafricaGuide,
  brazilGuide,
  ethiopiaGuide,
  caribbeanGuide,
  blpGuide,
  gullahGuide,
};

// All guides array for subdomain routing
export const allGuides: GuideConfig[] = [
  dubaiGuide,
  ghanaGuide,
  tanzaniaGuide,
  southafricaGuide,
  brazilGuide,
  ethiopiaGuide,
  caribbeanGuide,
  blpGuide,
  gullahGuide,
];

// Get guide by slug (for subdomain detection)
export const getGuideBySlug = (slug: string): GuideConfig | undefined => {
  return allGuides.find(guide => guide.slug.toLowerCase() === slug.toLowerCase());
};

// Default guide (fallback)
export const defaultGuide = dubaiGuide;
