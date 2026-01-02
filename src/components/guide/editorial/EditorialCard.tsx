import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EditorialCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  delay?: number;
}

const variantStyles = {
  default: 'bg-card',
  elevated: 'bg-card shadow-2xl shadow-black/20',
  bordered: 'bg-transparent border border-border/50',
  glass: 'bg-card/60 backdrop-blur-xl border border-border/20',
};

const EditorialCard = ({ 
  children, 
  className, 
  variant = 'default',
  delay = 0 
}: EditorialCardProps) => {
  return (
    <motion.div
      className={cn(
        'relative p-8 md:p-10',
        variantStyles[variant],
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default EditorialCard;
