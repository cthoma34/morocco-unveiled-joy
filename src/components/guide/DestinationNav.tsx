import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { allGuides } from '@/config/guides';
import { cn } from '@/lib/utils';

interface DestinationNavProps {
  currentSlug: string;
}

const DestinationNav = ({ currentSlug }: DestinationNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentGuide = allGuides.find(guide => guide.slug === currentSlug);
  const otherDestinations = allGuides.filter(guide => guide.slug !== currentSlug);

  return (
    <>
      {/* Floating Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-background/90 backdrop-blur-md border border-border rounded-full shadow-lg hover:bg-background transition-all group"
      >
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground hidden sm:inline">
          Explore Destinations
        </span>
        <Menu className="w-5 h-5 text-foreground/80 group-hover:text-foreground" />
      </button>

      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Panel */}
      <div 
        className={cn(
          "fixed top-0 right-0 z-[101] h-full w-full sm:w-[420px] bg-background border-l border-border shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Maximum Impact Travel
            </p>
            <h2 className="font-heading text-2xl text-foreground">
              Our Destinations
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Current Destination */}
        {currentGuide && (
          <div className="p-6 border-b border-border bg-muted/30">
            <p className="text-xs uppercase tracking-[0.15em] text-[hsl(var(--dest-primary))] mb-2">
              Currently Viewing
            </p>
            <h3 className="font-heading text-xl text-foreground">
              {currentGuide.destinationName}
            </h3>
          </div>
        )}

        {/* Destinations List */}
        <div className="overflow-y-auto h-[calc(100%-220px)]">
          <div className="p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground px-2 mb-4">
              Explore Other Guides
            </p>
            <div className="space-y-1">
              {otherDestinations.map((guide) => (
                <a
                  key={guide.slug}
                  href={`/${guide.slug}`}
                  className="flex items-center justify-between px-4 py-4 rounded-lg hover:bg-muted transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg font-medium text-foreground group-hover:text-[hsl(var(--dest-primary))] transition-colors">
                    {guide.destinationName}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[hsl(var(--dest-primary))] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-background">
          <a 
            href="https://maximumimpacttravel.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[hsl(var(--dest-primary))] text-[hsl(var(--dest-primary-foreground))] rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View All Trips
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default DestinationNav;
