import { ReactNode } from 'react';
import BentoCard from './BentoCard';

interface QuickFactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subtext?: string;
}

const QuickFactCard = ({ icon, label, value, subtext }: QuickFactCardProps) => {
  return (
    <BentoCard variant="glass" size="sm">
      <div className="h-full flex flex-col justify-between">
        <div className="w-12 h-12 rounded-xl bg-[hsl(var(--dest-primary)/0.15)] flex items-center justify-center text-[hsl(var(--dest-primary))]">
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
          <p className="text-2xl font-heading text-foreground">{value}</p>
          {subtext && <p className="text-sm text-muted-foreground mt-1">{subtext}</p>}
        </div>
      </div>
    </BentoCard>
  );
};

export default QuickFactCard;
