import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FullBleedImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'cinematic' | 'wide' | 'standard' | 'tall';
  parallax?: boolean;
}

const aspectClasses = {
  cinematic: 'aspect-[2.35/1]',
  wide: 'aspect-[16/9]',
  standard: 'aspect-[4/3]',
  tall: 'aspect-[3/4]',
};

const FullBleedImage = ({ 
  src, 
  alt, 
  caption, 
  aspectRatio = 'wide',
  parallax = true 
}: FullBleedImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['0%', '20%'] : ['0%', '0%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div 
        className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y, scale }}
        />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
      </motion.div>

      {caption && (
        <motion.div 
          className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground italic">
            {caption}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default FullBleedImage;
