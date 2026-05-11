import { motion } from 'framer-motion';

interface FunFactsProps {
  funFacts: string[];
  images?: string[];
}

const FunFacts = ({ funFacts, images = [] }: FunFactsProps) => {
  if (!funFacts || funFacts.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {funFacts.map((fact, i) => {
          const bg = images.length > 0 ? images[i % images.length] : null;
          return (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-sm min-h-[320px] md:min-h-[420px] flex items-end p-8 md:p-12 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {bg ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${bg})` }}
                />
              ) : (
                <div className="absolute inset-0 bg-[hsl(var(--dest-primary)/0.4)]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />

              <div className="relative z-10">
                <p className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--dest-primary))] mb-4 font-medium">
                  Fact {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-white leading-snug italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  {fact}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FunFacts;