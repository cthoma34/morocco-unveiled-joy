import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "This trip changed everything. I came home a different person — calmer, clearer, and connected to what actually matters.",
    author: "Sarah M.",
    title: "Marketing Executive"
  },
  {
    quote: "I've traveled extensively, but nothing compares to this experience. The attention to detail, the authentic connections — it's transformative.",
    author: "David K.",
    title: "Tech Entrepreneur"
  },
  {
    quote: "Best investment I've made in myself in years. The community, the culture, the moments — I'm already planning my return.",
    author: "Michelle R.",
    title: "Healthcare Professional"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-16 md:py-20 px-5 md:px-15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl md:text-4xl font-heading">
            What Travelers Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 text-base leading-relaxed mb-6 font-heading italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
