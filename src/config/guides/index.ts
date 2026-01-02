import { GuideConfig } from '@/types/guide-config';
import { dubaiGuide } from './dubai';

// Export all guide configs
export { dubaiGuide };

// All guides array for subdomain routing
export const allGuides: GuideConfig[] = [
  dubaiGuide,
];

// Get guide by slug (for subdomain detection)
export const getGuideBySlug = (slug: string): GuideConfig | undefined => {
  return allGuides.find(guide => guide.slug.toLowerCase() === slug.toLowerCase());
};

// Default guide (fallback)
export const defaultGuide = dubaiGuide;
