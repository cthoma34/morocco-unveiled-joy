import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { GuideConfig } from '@/types/guide-config';

interface PhotoSpotsMasonryProps {
  photos: GuideConfig['photos'];
}

const PhotoSpotsMasonry = ({ photos }: PhotoSpotsMasonryProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      {/* Masonry grid with varied sizing */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.spots.map((spot, i) => {
          // Vary card sizes for visual interest
          const isLarge = i === 0 || i === 3 || i === 7;
          
          return (
            <motion.div
              key={i}
              className="break-inside-avoid group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div 
                className={`relative overflow-hidden bg-card border border-border/30 hover:border-[hsl(var(--dest-primary)/0.3)] transition-all duration-500 ${
                  isLarge ? 'p-10 md:p-12' : 'p-8'
                }`}
              >
                {/* Spot number */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <span className="font-heading text-6xl text-[hsl(var(--dest-primary))]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Camera className="w-4 h-4 text-[hsl(var(--dest-primary))]" />
                    <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                      Photo Spot
                    </span>
                  </div>

                  <h3 className={`font-heading text-foreground mb-3 group-hover:text-[hsl(var(--dest-primary))] transition-colors ${
                    isLarge ? 'text-3xl' : 'text-2xl'
                  }`}>
                    {spot.name}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {spot.description}
                  </p>

                  {/* Tip - Reveals on hover */}
                  <div className="overflow-hidden">
                    <motion.div 
                      className="flex items-start gap-2 pt-4 border-t border-border/30"
                      initial={{ opacity: 0.5 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <span className="text-[hsl(var(--dest-primary))] text-lg">💡</span>
                      <p className="text-sm text-[hsl(var(--dest-primary))]">{spot.tips}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoSpotsMasonry;
