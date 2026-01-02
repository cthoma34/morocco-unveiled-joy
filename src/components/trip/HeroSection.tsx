import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
  backgroundVideo?: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaSubtext?: string;
}

const HeroSection = ({ 
  backgroundImage, 
  backgroundVideo,
  tagline,
  headline,
  subheadline,
  description,
  ctaText,
  ctaSubtext,
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-5 pt-20 relative overflow-hidden">
      {/* Video Background */}
      {backgroundVideo ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(20,20,20,0.5), rgba(20,20,20,0.7)), url('${backgroundImage}')`
          }}
        />
      )}

      {/* Content */}
      <div className="max-w-4xl animate-fade-in-up relative z-10" style={{ animationDelay: "0.2s" }}>
        <span className="inline-block text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-6">
          {tagline}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight">
          {headline}
          <br />
          <span className="text-primary italic">{subheadline}</span>
        </h1>
        <p className="text-base md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col items-center gap-2">
          <Button size="lg" asChild className="group">
            <a href="#register">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          {ctaSubtext && (
            <span className="text-sm text-foreground/60">{ctaSubtext}</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
