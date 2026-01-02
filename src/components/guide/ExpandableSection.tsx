import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpandableSectionProps {
  title: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ExpandableSection = ({ 
  title, 
  icon, 
  defaultOpen = false, 
  children,
  className 
}: ExpandableSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className={cn(
      'rounded-xl border border-border/50 overflow-hidden transition-all',
      isOpen ? 'bg-card/30' : 'bg-card/10 hover:bg-card/20',
      className
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-primary">{icon}</span>
          )}
          <h3 className="font-heading text-lg font-semibold">{title}</h3>
        </div>
        <ChevronDown 
          className={cn(
            'w-5 h-5 text-muted-foreground transition-transform duration-300',
            isOpen && 'rotate-180'
          )} 
        />
      </button>
      
      <div
        style={{
          maxHeight: isOpen ? contentHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div ref={contentRef} className="p-4 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
};
