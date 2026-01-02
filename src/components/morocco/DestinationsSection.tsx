interface Destination {
  name: string;
  description: string;
  image: string;
}

interface DestinationsSectionProps {
  destinations: Destination[];
}

const DestinationsSection = ({ destinations }: DestinationsSectionProps) => {
  return (
    <section className="bg-dark-card py-16 md:py-20 px-5 md:px-15">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
            DESTINATIONS
          </span>
          <h2 className="text-2xl md:text-4xl font-heading">
            Where We'll Take You
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="h-64 md:h-72 lg:h-80 relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-lg md:text-xl text-foreground mb-1">
                  {destination.name}
                </h3>
                <p className="text-xs md:text-sm text-foreground/70">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
