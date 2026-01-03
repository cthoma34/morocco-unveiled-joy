import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { GuideConfig } from '@/types/guide-config';

interface EditorialCTAProps {
  finalWords: GuideConfig['finalWords'];
  destinationName: string;
  ctaVideo?: string;
  ctaImage?: string;
}

const EditorialCTA = ({ finalWords, destinationName, ctaVideo, ctaImage }: EditorialCTAProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  const hasMedia = ctaVideo || ctaImage;

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background video or image */}
      {hasMedia && (
        <div className="absolute inset-0">
          {ctaVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={ctaVideo} type="video/mp4" />
            </video>
          ) : ctaImage ? (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${ctaImage})` }}
            />
          ) : null}
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
      )}

      {/* Background gradient (fallback when no media) */}
      {!hasMedia && (
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(var(--dest-primary)/0.05)] to-background" />
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[hsl(var(--dest-primary))] to-transparent" />

      <motion.div 
        className="relative max-w-4xl mx-auto px-6 md:px-12 text-center"
        style={{ opacity, scale }}
      >
        {/* Final message */}
        <div className="space-y-8 mb-16">
          {finalWords.message.map((paragraph, i) => (
            <motion.p 
              key={i}
              className={`font-heading leading-relaxed ${
                i === 0 
                  ? 'text-3xl md:text-4xl lg:text-5xl text-foreground' 
                  : 'text-xl md:text-2xl text-muted-foreground'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-lg text-foreground/70 mb-8">
            {finalWords.callToAction.text}
          </p>

          <a 
            href={finalWords.callToAction.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-[hsl(var(--dest-primary))] text-background font-body font-semibold text-lg tracking-wide hover:scale-105 transition-transform duration-300 group"
          >
            {finalWords.callToAction.buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Destination name as watermark */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <span className="font-heading text-8xl md:text-9xl text-[hsl(var(--dest-primary)/0.05)] uppercase tracking-widest">
            {destinationName}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default EditorialCTA;
