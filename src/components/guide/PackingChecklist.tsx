import { useState, useEffect } from 'react';
import { Check, RotateCcw, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { PackingItem } from '@/types/guide-config';

interface PackingChecklistProps {
  items: PackingItem[];
  storageKey: string;
  className?: string;
}

const categoryLabels: Record<PackingItem['category'], string> = {
  essentials: '✨ Essentials',
  clothing: '👕 Clothing',
  tech: '📱 Tech & Gadgets',
  health: '💊 Health & Hygiene',
  documents: '📄 Documents',
  comfort: '🛋️ Comfort Items',
};

const categoryOrder: PackingItem['category'][] = [
  'documents',
  'essentials',
  'clothing',
  'tech',
  'health',
  'comfort',
];

export const PackingChecklist = ({ items, storageKey, className }: PackingChecklistProps) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`packing-${storageKey}`);
    if (saved) {
      try {
        setChecked(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved packing list');
      }
    }
  }, [storageKey]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(`packing-${storageKey}`, JSON.stringify(checked));
  }, [checked, storageKey]);

  const toggleItem = (item: string) => {
    setChecked(prev => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const resetAll = () => {
    setChecked({});
  };

  const handlePrint = () => {
    window.print();
  };

  // Group items by category
  const groupedItems = categoryOrder.reduce((acc, category) => {
    const categoryItems = items.filter(item => item.category === category);
    if (categoryItems.length > 0) {
      acc[category] = categoryItems;
    }
    return acc;
  }, {} as Record<string, PackingItem[]>);

  // Calculate progress
  const totalItems = items.length;
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progressPercent = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  return (
    <div className={cn('rounded-xl bg-card/50 border border-border/50 overflow-hidden', className)}>
      {/* Header */}
      <div className="p-4 border-b border-border/50 bg-card/30">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-heading text-lg font-semibold">Packing Checklist</h4>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrint}
              className="text-muted-foreground hover:text-foreground"
            >
              <Printer className="w-4 h-4 mr-1" />
              Print
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetAll}
              className="text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Progress value={progressPercent} className="flex-1 h-2" />
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
            {checkedCount}/{totalItems}
          </span>
        </div>
      </div>

      {/* Checklist */}
      <div className="p-4 space-y-6 max-h-[500px] overflow-y-auto">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category}>
            <h5 className="text-sm font-semibold text-muted-foreground mb-2">
              {categoryLabels[category as PackingItem['category']]}
            </h5>
            <div className="space-y-1">
              {categoryItems.map((item) => (
                <button
                  key={item.item}
                  onClick={() => toggleItem(item.item)}
                  className={cn(
                    'w-full flex items-center gap-3 p-2 rounded-lg transition-all text-left',
                    'hover:bg-muted/30',
                    checked[item.item] && 'opacity-60'
                  )}
                >
                  <div className={cn(
                    'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0',
                    'transition-colors',
                    checked[item.item]
                      ? 'bg-primary border-primary'
                      : 'border-muted-foreground/30'
                  )}>
                    {checked[item.item] && (
                      <Check className="w-3 h-3 text-primary-foreground" />
                    )}
                  </div>
                  <span className={cn(
                    'flex-1 text-sm',
                    checked[item.item] && 'line-through text-muted-foreground'
                  )}>
                    {item.item}
                    {item.essential && (
                      <span className="ml-2 text-xs text-primary font-medium">Essential</span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
