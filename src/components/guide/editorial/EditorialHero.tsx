import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GuideConfig } from '@/types/guide-config';

interface EditorialHeroProps {
  config: GuideConfig;
}

const EditorialHero = ({ config }: EditorialHeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const opacityFade = Math.max(0, 1 - scrollY / 600);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {config.hero.backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src={config.hero.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${config.hero.backgroundImage})` }}
          />
        )}
        
        {/* Cinematic overlays - stronger gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[hsl(var(--dest-primary)/0.08)]" />
      </div>

      {/* Editorial Title Block */}
      <div 
        className="absolute inset-0 flex flex-col justify-end"
        style={{ opacity: opacityFade }}
      >
        <div className="relative z-10 pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl"
          >
            {/* Issue/Edition marker */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[hsl(var(--dest-primary))] shadow-lg" />
              <span className="text-xs tracking-[0.5em] uppercase text-[hsl(var(--dest-primary))] font-body font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Maximum Impact Travel
              </span>
            </div>

            {/* Main Title - Editorial Style */}
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-semibold text-foreground leading-[0.85] tracking-tight mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {config.destinationName}
            </h1>

            {/* Subtitle as editorial tagline */}
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground/90 max-w-2xl italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {config.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: opacityFade }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.3em] uppercase text-foreground/50">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[hsl(var(--dest-primary))] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default EditorialHero;
