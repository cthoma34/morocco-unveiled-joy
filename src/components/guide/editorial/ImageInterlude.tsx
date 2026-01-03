import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ImageInterludeProps {
  images: string[];
  quote?: string;
  attribution?: string;
  layout?: 'single' | 'duo' | 'trio' | 'grid';
}

const ImageInterlude = ({ 
  images, 
  quote, 
  attribution,
  layout = 'single' 
}: ImageInterludeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['-5%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const renderLayout = () => {
    switch (layout) {
      case 'duo':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div 
              className="relative aspect-[4/5] overflow-hidden"
              style={{ y: y1 }}
            >
              <img
                src={images[0]}
                alt="Editorial image 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="relative aspect-[4/5] overflow-hidden md:mt-16"
              style={{ y: y2 }}
            >
              <img
                src={images[1] || images[0]}
                alt="Editorial image 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        );

      case 'trio':
        return (
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <motion.div 
              className="col-span-12 md:col-span-7 relative aspect-[4/3] overflow-hidden"
              style={{ y: y1 }}
            >
              <img
                src={images[0]}
                alt="Editorial image 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4 md:gap-6">
              <motion.div 
                className="relative aspect-[3/2] overflow-hidden"
                style={{ y: y2 }}
              >
                <img
                  src={images[1] || images[0]}
                  alt="Editorial image 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="relative aspect-[3/2] overflow-hidden"
                style={{ y: y3 }}
              >
                <img
                  src={images[2] || images[0]}
                  alt="Editorial image 3"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {images.slice(0, 4).map((img, i) => (
              <motion.div
                key={i}
                className="relative aspect-square overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <img
                  src={img}
                  alt={`Editorial image ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        );

      default: // single
        return (
          <motion.div 
            className="relative aspect-[21/9] overflow-hidden"
            style={{ y: y1, opacity }}
          >
            <img
              src={images[0]}
              alt="Editorial image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10" />
          </motion.div>
        );
    }
  };

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {renderLayout()}
        
        {quote && (
          <motion.div 
            className="mt-12 md:mt-16 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic">
              "{quote}"
            </blockquote>
            {attribution && (
              <p className="mt-4 text-sm text-foreground/60 uppercase tracking-widest">
                — {attribution}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ImageInterlude;
