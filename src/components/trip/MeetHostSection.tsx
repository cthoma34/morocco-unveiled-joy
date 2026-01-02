interface MeetHostSectionProps {
  image: string;
  name: string;
  bio: string[];
  philosophy: string;
}

const MeetHostSection = ({ image, name, bio, philosophy }: MeetHostSectionProps) => {
  return (
    <section className="gradient-gold-subtle py-16 md:py-20 px-5 md:px-15">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div 
            className="w-full max-w-lg lg:w-[550px] h-[500px] lg:h-[680px] bg-cover bg-center rounded flex-shrink-0"
            style={{ backgroundImage: `url('${image}')` }}
          />
          
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
              YOUR HOST
            </span>
            <h2 className="text-2xl md:text-4xl font-heading mb-6">
              Meet {name}
            </h2>
            
            <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed">
              {bio.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
              <p className="text-primary font-medium">
                {philosophy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetHostSection;
