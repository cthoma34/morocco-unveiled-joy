// ============================================================
// DESTINATIONS INDEX
// ============================================================
// All 13 destination configs for subdomain routing
// Subdomains: ghana, southafrica, ghanaandsa, tanzania, kenya,
//             ethiopia, egypt, morocco, dubai, blp, afrocruise,
//             brazil, gullah
// ============================================================

import { TripConfig } from "@/types/trip-config";
import { tanzaniaConfig } from "./tanzania";
import { egyptConfig } from "./egypt";
import { ghanaConfig } from "./ghana";
import { southafricaConfig } from "./southafrica";
import { ghanaandsaConfig } from "./ghanaandsa";
import { kenyaConfig } from "./kenya";
import { ethiopiaConfig } from "./ethiopia";
import { moroccoConfig } from "./morocco";
import { dubaiConfig } from "./dubai";
import { blpConfig } from "./blp";
import { afrocruiseConfig } from "./afrocruise";
import { brazilConfig } from "./brazil";
import { gullahConfig } from "./gullah";

// Export individual configs
export { tanzaniaConfig } from "./tanzania";
export { egyptConfig } from "./egypt";
export { ghanaConfig } from "./ghana";
export { southafricaConfig } from "./southafrica";
export { ghanaandsaConfig } from "./ghanaandsa";
export { kenyaConfig } from "./kenya";
export { ethiopiaConfig } from "./ethiopia";
export { moroccoConfig } from "./morocco";
export { dubaiConfig } from "./dubai";
export { blpConfig } from "./blp";
export { afrocruiseConfig } from "./afrocruise";
export { brazilConfig } from "./brazil";
export { gullahConfig } from "./gullah";

// All destinations array for routing
export const allDestinations: TripConfig[] = [
  tanzaniaConfig,
  egyptConfig,
  ghanaConfig,
  southafricaConfig,
  ghanaandsaConfig,
  kenyaConfig,
  ethiopiaConfig,
  moroccoConfig,
  dubaiConfig,
  blpConfig,
  afrocruiseConfig,
  brazilConfig,
  gullahConfig,
];

// Helper to find a destination by slug
export const getDestinationBySlug = (slug: string): TripConfig | undefined => {
  return allDestinations.find((dest) => dest.slug === slug);
};

// Default destination (Tanzania)
export const defaultDestination = tanzaniaConfig;
