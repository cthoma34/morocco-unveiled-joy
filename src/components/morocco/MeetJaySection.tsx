interface MeetJaySectionProps {
  image: string;
}

const MeetJaySection = ({ image }: MeetJaySectionProps) => {
  return (
    <section className="gradient-gold-subtle py-16 md:py-20 px-5 md:px-15">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div 
            className="w-full max-w-sm lg:w-96 h-96 lg:h-[480px] bg-cover bg-center rounded flex-shrink-0"
            style={{ backgroundImage: `url('${image}')` }}
          />
          
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
              YOUR HOST
            </span>
            <h2 className="text-2xl md:text-4xl font-heading mb-6">
              Meet Jay Cameron
            </h2>
            
            <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed">
              <p>
                Jay Cameron founded Maximum Impact Travel after a transformative experience in Morocco that changed the trajectory of his life.
              </p>
              <p>
                What started as a personal journey became a mission: helping busy professionals escape the grind and rediscover themselves through carefully curated travel experiences.
              </p>
              <p>
                Over the past decade, Jay has guided <strong className="text-foreground">2,500+ travelers</strong> through Morocco, creating connections that last far beyond the trip itself.
              </p>
              <p className="text-primary font-medium">
                His philosophy: Travel shouldn't just be a vacation. It should be a catalyst for the life you've been putting off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetJaySection;
