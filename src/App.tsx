import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import DestinationPage from "./pages/DestinationPage";
import GuidePage from "./pages/GuidePage";
import { allDestinations, getDestinationBySlug, defaultDestination } from "./config/destinations";
import { getGuideBySlug } from "./config/guides";
import { GuideConfig } from "./types/guide-config";
import { TripConfig } from "./types/trip-config";

const queryClient = new QueryClient();

// ============================================================
// SUBDOMAIN DETECTION
// ============================================================
// Detects subdomain from hostname and returns matching content
// Supports both destinations and guides via subdomain patterns:
//
// Destinations:
//   egypt.travelwithmit.com → egyptConfig
//   tanzania.travelwithmit.com → tanzaniaConfig
//
// Guides (with -guide suffix):
//   dubai-guide.travelwithmit.com → dubaiGuide
//   egypt-guide.travelwithmit.com → egyptGuide
//
// Root domain:
//   travelwithmit.com → defaultDestination (Tanzania)
//   localhost:5173 → null (use path-based routing for dev)
// ============================================================

type SubdomainResult = 
  | { type: 'destination'; config: TripConfig }
  | { type: 'guide'; config: GuideConfig }
  | null;

const getContentFromSubdomain = (): SubdomainResult => {
  const hostname = window.location.hostname;
  
  // Development: localhost or Lovable preview
  if (
    hostname === "localhost" ||
    hostname.includes("lovable.app") ||
    hostname.includes("lovableproject.com")
  ) {
    return null; // Use path-based routing in development
  }
  
  // Production: extract subdomain from travelwithmit.com
  const parts = hostname.split(".");
  
  // If we have a subdomain (e.g., egypt.travelwithmit.com = 3 parts)
  if (parts.length >= 3) {
    const subdomain = parts[0].toLowerCase();
    
    // Check if it's a guide subdomain (ends with -guide)
    if (subdomain.endsWith('-guide')) {
      const guideSlug = subdomain.replace('-guide', '');
      const guide = getGuideBySlug(guideSlug);
      if (guide) {
        return { type: 'guide', config: guide };
      }
    }
    
    // Check if it's a destination subdomain
    const destination = getDestinationBySlug(subdomain);
    if (destination) {
      return { type: 'destination', config: destination };
    }
  }
  
  // No subdomain or unrecognized subdomain → default destination
  return { type: 'destination', config: defaultDestination };
};

const App = () => {
  const subdomainContent = getContentFromSubdomain();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 
              If on a subdomain, show that content on all routes
              Otherwise, use path-based routing for development/preview
            */}
            {subdomainContent ? (
              // Subdomain detected → show appropriate content
              subdomainContent.type === 'guide' ? (
                <Route path="*" element={<GuidePage config={subdomainContent.config} />} />
              ) : (
                <Route path="*" element={<DestinationPage config={subdomainContent.config} />} />
              )
            ) : (
              <>
                {/* Development/Preview: path-based routing */}
                <Route path="/" element={<DestinationPage config={defaultDestination} />} />
                
                {/* Dynamic destination routes */}
                {allDestinations.map((destination) => (
                  <Route
                    key={destination.slug}
                    path={`/${destination.slug}`}
                    element={<DestinationPage config={destination} />}
                  />
                ))}
                
                {/* Catch-all for 404 */}
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
