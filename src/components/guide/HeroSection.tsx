import { GuideConfig } from '@/types/guide-config';

interface HeroSectionProps {
  config: GuideConfig;
}

const HeroSection = ({ config }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {config.hero.backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={config.hero.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${config.hero.backgroundImage})` }}
          />
        )}
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-[hsl(var(--dest-primary)/0.15)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.4em] uppercase text-[hsl(var(--dest-primary))] mb-4 animate-fade-in">
            Maximum Impact Travel
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-fade-in [animation-delay:0.1s]">
            {config.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in [animation-delay:0.2s]">
            {config.hero.subtitle}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[hsl(var(--dest-primary))] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
