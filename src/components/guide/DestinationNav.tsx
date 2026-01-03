import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { allGuides } from '@/config/guides';
import { cn } from '@/lib/utils';

interface DestinationNavProps {
  currentSlug: string;
}

const DestinationNav = ({ currentSlug }: DestinationNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const otherDestinations = allGuides.filter(guide => guide.slug !== currentSlug);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="https://maximumimpacttravel.com" className="font-heading text-lg md:text-xl font-semibold text-foreground">
            Maximum Impact <span className="text-[hsl(var(--dest-primary))]">Travel</span>
          </a>

          {/* Destinations Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Explore Destinations</span>
              <span className="sm:hidden">Destinations</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsOpen(false)}
                />
                
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-64 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="p-2 border-b border-border">
                    <p className="text-xs text-muted-foreground px-2">Other destinations we travel to</p>
                  </div>
                  <div className="max-h-80 overflow-y-auto py-2">
                    {otherDestinations.map((guide) => (
                      <a
                        key={guide.slug}
                        href={`/${guide.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-sm font-medium text-foreground">{guide.destinationName}</span>
                      </a>
                    ))}
                  </div>
                  <div className="p-2 border-t border-border">
                    <a 
                      href="https://maximumimpacttravel.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs text-[hsl(var(--dest-primary))] hover:underline px-2 py-1"
                    >
                      View all trips →
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DestinationNav;
