import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTASectionProps {
  backgroundImage: string;
  backgroundVideo?: string;
  sectionLabel: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaSubtext?: string;
}

const FinalCTASection = ({ 
  backgroundImage, 
  backgroundVideo,
  sectionLabel,
  headline,
  subheadline,
  description,
  ctaText,
  ctaSubtext,
}: FinalCTASectionProps) => {
  return (
    <section className="relative py-24 md:py-32 px-5 text-center overflow-hidden">
      {/* Video Background */}
      {backgroundVideo ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={backgroundImage}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/90" />
        </>
      ) : (
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(rgba(20,20,20,0.7), rgba(20,20,20,0.9)), url('${backgroundImage}') center/cover no-repeat`
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-6 block">
          {sectionLabel}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
          {headline}<br />
          <span className="text-primary italic">{subheadline}</span>
        </h2>
        <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
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

export default FinalCTASection;