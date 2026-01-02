import { ReactNode } from 'react';

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ icon, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--dest-primary)/0.15)] flex items-center justify-center text-[hsl(var(--dest-primary))]">
          {icon}
        </div>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-muted-foreground ml-16">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
