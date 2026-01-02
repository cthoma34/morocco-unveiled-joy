import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AsymmetricGridProps {
  children: ReactNode;
  layout?: 'left-heavy' | 'right-heavy' | 'balanced' | 'stacked';
  className?: string;
}

const layoutClasses = {
  'left-heavy': 'grid-cols-1 lg:grid-cols-12 [&>*:first-child]:lg:col-span-7 [&>*:last-child]:lg:col-span-5',
  'right-heavy': 'grid-cols-1 lg:grid-cols-12 [&>*:first-child]:lg:col-span-5 [&>*:last-child]:lg:col-span-7',
  'balanced': 'grid-cols-1 md:grid-cols-2',
  'stacked': 'grid-cols-1',
};

const AsymmetricGrid = ({ 
  children, 
  layout = 'balanced',
  className 
}: AsymmetricGridProps) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-24 ${className || ''}`}>
      <motion.div 
        className={`grid gap-8 lg:gap-12 items-start ${layoutClasses[layout]}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AsymmetricGrid;
