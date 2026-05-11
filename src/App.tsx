import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import GuidePage from "./pages/GuidePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import { allGuides, getGuideBySlug, defaultGuide } from "./config/guides";
import { GuideConfig } from "./types/guide-config";

const queryClient = new QueryClient();

// ============================================================
// GUIDE DOMAIN DETECTION
// ============================================================
// Production: guide.travelwithmit.com with path-based routing
//   guide.travelwithmit.com/tanzania → tanzaniaGuide
//   guide.travelwithmit.com/dubai → dubaiGuide
//   guide.travelwithmit.com/blp → blpGuide
// Development: Same path-based routing on localhost/preview
// ============================================================

const isGuideDomain = (): boolean => {
  const hostname = window.location.hostname;
  
  // Development environments always use path-based routing
  if (
    hostname === "localhost" ||
    hostname.includes("lovable.app") ||
    hostname.includes("lovableproject.com")
  ) {
    return true;
  }
  
  // Production: check if on guide.travelwithmit.com
  return hostname.startsWith("guide.");
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Root: default guide */}
            <Route path="/" element={<GuidePage config={defaultGuide} />} />

            {/* Post-registration confirmation pages */}
            <Route path="/confirm" element={<ConfirmationPage />} />
            <Route path="/confirm/tanzania" element={<ConfirmationPage />} />
            <Route path="/confirm/zanzibar" element={<ConfirmationPage />} />
            <Route path="/confirm/ghana" element={<ConfirmationPage />} />
            <Route path="/confirm/southafrica" element={<ConfirmationPage />} />
            <Route path="/confirm/kenya" element={<ConfirmationPage />} />
            <Route path="/confirm/ethiopia" element={<ConfirmationPage />} />
            <Route path="/confirm/egypt" element={<ConfirmationPage />} />
            <Route path="/confirm/morocco" element={<ConfirmationPage />} />
            <Route path="/confirm/dubai" element={<ConfirmationPage />} />
            <Route path="/confirm/brazil" element={<ConfirmationPage />} />
            <Route path="/confirm/caribbean" element={<ConfirmationPage />} />
            <Route path="/confirm/gullah" element={<ConfirmationPage />} />
            <Route path="/confirm/:destination" element={<ConfirmationPage />} />
            
            {/* Path-based guide routes: /tanzania, /dubai, /blp, etc. */}
            {allGuides.map((guide) => (
              <Route
                key={guide.slug}
                path={`/${guide.slug}`}
                element={<GuidePage config={guide} />}
              />
            ))}
            
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
