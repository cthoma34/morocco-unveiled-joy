import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import GuidePage from "./pages/GuidePage";
import { allGuides, getGuideBySlug, defaultGuide } from "./config/guides";
import { GuideConfig } from "./types/guide-config";

const queryClient = new QueryClient();

// ============================================================
// SUBDOMAIN DETECTION FOR GUIDES
// ============================================================
// Detects subdomain from hostname and returns matching guide
// Patterns:
//   ghana-guide.travelwithmit.com → ghanaGuide
//   tanzania-guide.travelwithmit.com → tanzaniaGuide
//   guide.travelwithmit.com → defaultGuide
//   localhost:5173 → null (use path-based routing for dev)
// ============================================================

const getGuideFromSubdomain = (): GuideConfig | null => {
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
  
  // If we have a subdomain (e.g., ghana-guide.travelwithmit.com = 3 parts)
  if (parts.length >= 3) {
    const subdomain = parts[0].toLowerCase();
    
    // Check if it's a guide subdomain (ends with -guide)
    if (subdomain.endsWith('-guide')) {
      const guideSlug = subdomain.replace('-guide', '');
      const guide = getGuideBySlug(guideSlug);
      if (guide) return guide;
    }
    
    // Check direct slug match
    const directGuide = getGuideBySlug(subdomain);
    if (directGuide) return directGuide;
  }
  
  // No valid subdomain → default guide
  return defaultGuide;
};

const App = () => {
  const subdomainGuide = getGuideFromSubdomain();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {subdomainGuide ? (
              // Subdomain detected → show that guide on all routes
              <Route path="*" element={<GuidePage config={subdomainGuide} />} />
            ) : (
              <>
                {/* Development/Preview: path-based routing */}
                <Route path="/" element={<GuidePage config={defaultGuide} />} />
                
                {/* Dynamic guide routes */}
                {allGuides.map((guide) => (
                  <Route
                    key={guide.slug}
                    path={`/${guide.slug}`}
                    element={<GuidePage config={guide} />}
                  />
                ))}
                
                {/* Also support short slugs without -guide suffix */}
                {allGuides.map((guide) => (
                  <Route
                    key={`short-${guide.slug}`}
                    path={`/${guide.slug.replace('-guide', '')}`}
                    element={<GuidePage config={guide} />}
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
