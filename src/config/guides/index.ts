import { GuideConfig } from '@/types/guide-config';
import { dubaiGuide } from './dubai';

// Export all guide configs
export { dubaiGuide };

// All guides map for dynamic routing
export const allGuides: Record<string, GuideConfig> = {
  dubai: dubaiGuide,
};

// Get guide by slug
export const getGuideBySlug = (slug: string): GuideConfig | undefined => {
  return allGuides[slug.toLowerCase()];
};
