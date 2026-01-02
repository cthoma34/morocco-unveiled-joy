import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import DestinationPage from "./pages/DestinationPage";
import { allDestinations, getDestinationBySlug, defaultDestination } from "./config/destinations";

const queryClient = new QueryClient();

// ============================================================
// SUBDOMAIN DETECTION
// ============================================================
// Detects subdomain from hostname and returns matching destination
// Examples:
//   egypt.travelwithmit.com → egyptConfig
//   tanzania.travelwithmit.com → tanzaniaConfig
//   travelwithmit.com → defaultDestination (Tanzania)
//   localhost:5173 → defaultDestination (for development)
// ============================================================
const getDestinationFromSubdomain = () => {
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
    const destination = getDestinationBySlug(subdomain);
    if (destination) {
      return destination;
    }
  }
  
  // No subdomain or unrecognized subdomain → default
  return defaultDestination;
};

const App = () => {
  const subdomainDestination = getDestinationFromSubdomain();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 
              If on a subdomain (egypt.travelwithmit.com), show that destination
              Otherwise, use path-based routing for development/preview
            */}
            {subdomainDestination ? (
              // Subdomain detected → show that destination on all routes
              <Route path="*" element={<DestinationPage config={subdomainDestination} />} />
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
