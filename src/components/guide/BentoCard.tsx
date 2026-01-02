import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'solid' | 'gradient' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  span?: 'col-1' | 'col-2' | 'col-3' | 'row-2';
  hover?: boolean;
  style?: React.CSSProperties;
}

const sizeClasses = {
  sm: 'min-h-[180px]',
  md: 'min-h-[240px]',
  lg: 'min-h-[320px]',
  xl: 'min-h-[400px]',
  full: 'min-h-[480px]',
};

const spanClasses = {
  'col-1': '',
  'col-2': 'md:col-span-2',
  'col-3': 'md:col-span-3',
  'row-2': 'md:row-span-2',
};

const variantClasses = {
  default: 'bg-card border border-border/50',
  glass: 'bg-card/40 backdrop-blur-xl border border-border/30',
  solid: 'bg-[hsl(var(--dest-primary))]',
  gradient: 'bg-gradient-to-br from-card via-card/80 to-[hsl(var(--dest-primary)/0.1)]',
  image: 'bg-cover bg-center overflow-hidden',
};

const BentoCard = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  span = 'col-1',
  hover = true,
  style,
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        'relative rounded-2xl p-6 overflow-hidden transition-all duration-300',
        sizeClasses[size],
        spanClasses[span],
        variantClasses[variant],
        hover && 'hover:scale-[1.02] hover:shadow-xl hover:border-[hsl(var(--dest-primary)/0.3)]',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default BentoCard;
