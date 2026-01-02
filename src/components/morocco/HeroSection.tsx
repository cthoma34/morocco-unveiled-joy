import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center text-center px-5 pt-20"
      style={{
        background: `linear-gradient(rgba(20,20,20,0.5), rgba(20,20,20,0.7)), url('${backgroundImage}') center/cover no-repeat`
      }}
    >
      <div className="max-w-4xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <span className="inline-block text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-6">
          MOROCCO
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight">
          Where Africa Meets the Mediterranean.
          <br />
          <span className="text-primary italic">And You Meet Yourself.</span>
        </h1>
        <p className="text-base md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join Jay Cameron for an exclusive Morocco experience reveal — discover the journey that's transformed over 2,500 travelers who were tired of waiting for "someday."
        </p>
        <Button size="lg" asChild className="group">
          <a href="#register">
            Reserve My Free Seat
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
