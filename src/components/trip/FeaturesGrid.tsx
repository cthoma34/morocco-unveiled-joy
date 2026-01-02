interface Feature {
  title: string;
  description: string;
}

interface FeaturesGridProps {
  sectionLabel: string;
  headline?: string;
  subheadline?: string;
  items: Feature[];
}

const FeaturesGrid = ({ sectionLabel, headline, subheadline, items }: FeaturesGridProps) => {
  return (
    <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-6 block">
        {sectionLabel}
      </span>
      {headline && (
        <h2 className="text-2xl md:text-4xl font-heading mb-2">
          {headline}
        </h2>
      )}
      {subheadline && (
        <p className="text-foreground/85 text-base md:text-lg leading-relaxed mb-8">{subheadline}</p>
      )}
      
      <div className="grid grid-cols-1 gap-4">
        {items.map((feature, index) => (
          <div 
            key={feature.title}
            className="p-6 animate-fade-in"
            style={{ 
              animationDelay: `${0.6 + index * 0.1}s`,
              backgroundColor: 'hsl(43 35% 88%)'
            }}
          >
            <h4 className="font-semibold text-lg md:text-xl mb-3 text-neutral-900">
              {feature.title}
            </h4>
            <p className="text-neutral-800 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
