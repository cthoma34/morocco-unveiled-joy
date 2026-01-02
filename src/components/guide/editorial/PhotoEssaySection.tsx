import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PhotoEssaySectionProps {
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const PhotoEssaySection = ({ label, title, subtitle, children }: PhotoEssaySectionProps) => {
  return (
    <section className="relative py-20 md:py-32">
      {/* Section Header - Magazine style */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-[0.5em] uppercase text-[hsl(var(--dest-primary))] font-medium">
              {label}
            </span>
            <div className="h-px flex-1 bg-border/30 max-w-24" />
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground font-body">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Content */}
      {children}
    </section>
  );
};

export default PhotoEssaySection;
