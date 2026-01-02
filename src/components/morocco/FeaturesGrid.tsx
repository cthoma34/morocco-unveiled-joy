const features = [
  {
    title: "Everything Handled",
    description: "From your arrival in Casablanca to your luxury desert camp. No logistics. No stress. Just transformation."
  },
  {
    title: "Real Morocco",
    description: "Skip the tourist traps. We sit with Berber families. This is Morocco as Moroccans live it."
  },
  {
    title: "Your People Travel Too",
    description: "Travel with successful professionals who get it. These are your future friends."
  },
  {
    title: "Premium Comfort",
    description: "4-star riads. Luxury desert camps. Transformation you can enjoy, not endure."
  }
];

const FeaturesGrid = () => {
  return (
    <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
        THE EXPERIENCE
      </span>
      <h2 className="text-2xl md:text-4xl font-heading mb-6">
        What Makes This Different
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="bg-card border border-border p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          >
            <h4 className="font-heading text-lg md:text-xl mb-3 text-foreground">
              {feature.title}
            </h4>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
