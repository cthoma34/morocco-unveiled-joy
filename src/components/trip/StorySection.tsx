interface StorySectionProps {
  sectionLabel: string;
  headline: string;
  paragraphs: string[];
  costIntro: string;
  costParagraphs: string[];
  quote: {
    text: string;
    author: string;
    title: string;
  };
}

const StorySection = ({
  sectionLabel,
  headline,
  paragraphs,
  costIntro,
  costParagraphs,
  quote,
}: StorySectionProps) => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
        {sectionLabel}
      </span>
      <h2 className="text-2xl md:text-4xl font-heading mb-6">
        {headline}
      </h2>
      
      <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
        
        <p className="font-semibold text-foreground">{costIntro}</p>
        
        {costParagraphs.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
      
      <blockquote className="my-8 pl-6 border-l-4 border-primary font-heading text-lg md:text-xl italic text-foreground">
        "{quote.text}"
        <footer className="mt-3 text-sm text-muted-foreground not-italic">
          — {quote.author}, {quote.title}
        </footer>
      </blockquote>
    </div>
  );
};

export default StorySection;
