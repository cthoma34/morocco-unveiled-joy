import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

interface GalleryItem {
  image: string;
  caption: string;
}

interface GallerySectionProps {
  sectionLabel: string;
  headline: string;
  items: GalleryItem[];
  ctaText?: string;
}

const GallerySection = ({ sectionLabel, headline, items, ctaText = "Reserve Your Spot" }: GallerySectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      if (!isPaused) {
        scrollPosition += speed;
        
        // Reset position when we've scrolled through the first set of items
        const singleSetWidth = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section className="bg-dark-card py-16 md:py-20">
      <div className="px-5 md:px-15 mb-10 max-w-7xl mx-auto">
        <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
          {sectionLabel}
        </span>
        <h2 className="text-2xl md:text-4xl font-heading">
          {headline}
        </h2>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden px-5 md:px-15"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-72 md:w-80 h-96 md:h-[425px] relative overflow-hidden group"
          >
            <img 
              src={item.image} 
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-center">
              <p className="font-heading text-lg text-foreground">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 px-5">
        <Button 
          onClick={scrollToRegister}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
};

export default GallerySection;
