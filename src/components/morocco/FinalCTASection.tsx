import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTASectionProps {
  backgroundImage: string;
}

const FinalCTASection = ({ backgroundImage }: FinalCTASectionProps) => {
  return (
    <section 
      className="py-24 md:py-32 px-5 text-center"
      style={{
        background: `linear-gradient(rgba(20,20,20,0.7), rgba(20,20,20,0.9)), url('${backgroundImage}') center/cover no-repeat`
      }}
    >
      <div className="max-w-3xl mx-auto">
        <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-6 block">
          YOUR JOURNEY AWAITS
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
          Stop Waiting for Someday.<br />
          <span className="text-primary italic">Someday Is Now.</span>
        </h2>
        <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
          Join the free Morocco Experience Reveal and discover why 2,500+ travelers chose to stop waiting and start living.
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

export default FinalCTASection;
