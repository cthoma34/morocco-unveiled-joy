interface GalleryItem {
  image: string;
  caption: string;
}

interface GallerySectionProps {
  items: GalleryItem[];
}

const GallerySection = ({ items }: GallerySectionProps) => {
  return (
    <section className="bg-dark-card py-16 md:py-20">
      <div className="px-5 md:px-15 mb-10 max-w-7xl mx-auto">
        <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
          GLIMPSES
        </span>
        <h2 className="text-2xl md:text-4xl font-heading">
          A Taste of What Awaits
        </h2>
      </div>
      
      <div className="flex gap-4 overflow-x-auto px-5 md:px-15 pb-4 scrollbar-thin">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-72 md:w-80 h-96 md:h-[425px] relative overflow-hidden group"
          >
            <img 
              src={item.image} 
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-center">
              <p className="font-heading text-lg text-foreground">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
