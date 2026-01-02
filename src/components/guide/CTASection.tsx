import { GuideConfig } from '@/types/guide-config';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  finalWords: GuideConfig['finalWords'];
  destinationName: string;
}

const CTASection = ({ finalWords, destinationName }: CTASectionProps) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--dest-primary)/0.08)] via-transparent to-[hsl(var(--dest-secondary)/0.05)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--dest-primary)/0.05)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[hsl(var(--dest-secondary)/0.05)] rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="space-y-6 mb-10">
          {finalWords.message.map((p, i) => (
            <p key={i} className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        
        <p className="text-2xl md:text-3xl font-heading text-[hsl(var(--dest-primary))] mb-8">
          {finalWords.callToAction.text}
        </p>
        
        <Button
          asChild
          size="lg"
          className="bg-[hsl(var(--dest-primary))] hover:bg-[hsl(var(--dest-primary)/0.9)] text-background font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[hsl(var(--dest-primary)/0.25)]"
        >
          <a href={finalWords.callToAction.link} target="_blank" rel="noopener noreferrer">
            {finalWords.callToAction.buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
