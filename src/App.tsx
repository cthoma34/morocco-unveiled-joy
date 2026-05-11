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

const isConfirmDomain = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.location.hostname.startsWith("confirm.");
};

const CONFIRM_SLUGS = [
  "tanzania",
  "zanzibar",
  "ghana",
  "southafrica",
  "kenya",
  "ethiopia",
  "egypt",
  "morocco",
  "dubai",
  "brazil",
  "caribbean",
  "gullah",
] as const;

const App = () => {
  const confirmMode = isConfirmDomain();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {confirmMode ? (
              <>
                {/* confirm.travelwithmit.com → ConfirmationPage at /{slug} */}
                <Route path="/" element={<ConfirmationPage />} />
                <Route path="/tanzania" element={<ConfirmationPage />} />
                <Route path="/zanzibar" element={<ConfirmationPage />} />
                <Route path="/ghana" element={<ConfirmationPage />} />
                <Route path="/southafrica" element={<ConfirmationPage />} />
                <Route path="/kenya" element={<ConfirmationPage />} />
                <Route path="/ethiopia" element={<ConfirmationPage />} />
                <Route path="/egypt" element={<ConfirmationPage />} />
                <Route path="/morocco" element={<ConfirmationPage />} />
                <Route path="/dubai" element={<ConfirmationPage />} />
                <Route path="/brazil" element={<ConfirmationPage />} />
                <Route path="/caribbean" element={<ConfirmationPage />} />
                <Route path="/gullah" element={<ConfirmationPage />} />
                <Route path="/:destination" element={<ConfirmationPage />} />
                <Route path="*" element={<NotFound />} />
              </>
            ) : (
              <>
                {/* Root: default guide */}
                <Route path="/" element={<GuidePage config={defaultGuide} />} />

                {/* Preview/dev: keep confirmation pages reachable under /confirm/{slug} */}
                <Route path="/confirm" element={<ConfirmationPage />} />
                {CONFIRM_SLUGS.map((slug) => (
                  <Route
                    key={`confirm-${slug}`}
                    path={`/confirm/${slug}`}
                    element={<ConfirmationPage />}
                  />
                ))}
                <Route path="/confirm/:destination" element={<ConfirmationPage />} />

                {/* Path-based guide routes: /tanzania, /dubai, /blp, etc. */}
                {allGuides.map((guide) => (
                  <Route
                    key={guide.slug}
                    path={`/${guide.slug}`}
                    element={<GuidePage config={guide} />}
                  />
                ))}

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
