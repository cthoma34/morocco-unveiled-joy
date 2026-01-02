import { Button } from "@/components/ui/button";

interface Testimonial {
  category: string;
  description: string;
  quote: string;
  author: string;
  location: string;
}

interface TestimonialsSectionProps {
  sectionLabel: string;
  headline: string;
  subheadline?: string;
  videos?: string[];
  items: Testimonial[];
  ctaText?: string;
}

const TestimonialsSection = ({ sectionLabel, headline, subheadline, videos, items, ctaText = "Join the Free Info Session" }: TestimonialsSectionProps) => {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-background py-16 md:py-20 px-5 md:px-15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
            {sectionLabel}
          </span>
          <h2 className="text-2xl md:text-4xl font-heading mb-4">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-foreground/75 text-base md:text-lg max-w-2xl mx-auto">
              {subheadline}
            </p>
          )}
        </div>

        {/* Video Grid */}
        {videos && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {videos.map((videoUrl, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  src={videoUrl}
                  title={`Testimonial video ${index + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Testimonial Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((testimonial, index) => (
            <div 
              key={index}
              className="text-center space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-heading text-primary">
                {testimonial.category}
              </h3>
              <p className="text-foreground/85 text-base leading-relaxed">
                {testimonial.description}
              </p>
              <blockquote className="text-foreground/90 italic font-heading text-base md:text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-muted-foreground text-sm">
                — {testimonial.author}, {testimonial.location}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToRegister}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
