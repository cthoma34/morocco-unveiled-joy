import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PhotoGalleryStripProps {
  images: { src: string; caption?: string }[];
  direction?: 'left' | 'right';
}

const PhotoGalleryStrip = ({ images, direction = 'left' }: PhotoGalleryStripProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax scroll effect
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === 'left' ? ['5%', '-15%'] : ['-15%', '5%']
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-8 md:py-12">
      <motion.div 
        className="flex gap-4 md:gap-6"
        style={{ x }}
      >
        {/* Duplicate images for seamless feel */}
        {[...images, ...images.slice(0, 3)].map((image, i) => (
          <motion.div
            key={i}
            className="relative flex-shrink-0 w-[280px] md:w-[400px] lg:w-[500px] group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.3) }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={image.src}
                alt={image.caption || `Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Caption on hover */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/90 text-sm font-body">{image.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoGalleryStrip;
