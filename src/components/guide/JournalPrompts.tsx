import { useState, useEffect } from 'react';
import { BookOpen, Save, RotateCcw } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { JournalPrompt } from '@/types/guide-config';

interface JournalPromptsProps {
  prompts: JournalPrompt[];
  storageKey: string;
  className?: string;
}

export const JournalPrompts = ({ prompts, storageKey, className }: JournalPromptsProps) => {
  const [entries, setEntries] = useState<Record<number, string>>({});
  const [activeDay, setActiveDay] = useState<number>(1);
  const [saved, setSaved] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`journal-${storageKey}`);
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved journal');
      }
    }
  }, [storageKey]);

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem(`journal-${storageKey}`, JSON.stringify(entries));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleChange = (day: number, value: string) => {
    setEntries(prev => ({
      ...prev,
      [day]: value,
    }));
  };

  const handleReset = (day: number) => {
    setEntries(prev => {
      const newEntries = { ...prev };
      delete newEntries[day];
      return newEntries;
    });
  };

  const activePrompt = prompts.find(p => p.day === activeDay);
  const hasEntry = (day: number) => entries[day] && entries[day].trim().length > 0;

  return (
    <div className={cn('rounded-xl bg-card/50 border border-border/50 overflow-hidden', className)}>
      {/* Header */}
      <div className="p-4 border-b border-border/50 bg-card/30">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-primary" />
          <h4 className="font-heading text-lg font-semibold">Pre-Trip Journal</h4>
        </div>

        {/* Day Selector */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {prompts.map((prompt) => (
            <button
              key={prompt.day}
              onClick={() => setActiveDay(prompt.day)}
              className={cn(
                'flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                'relative',
                activeDay === prompt.day
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
              )}
            >
              Day {prompt.day}
              {hasEntry(prompt.day) && activeDay !== prompt.day && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Journal Entry */}
      {activePrompt && (
        <div className="p-4">
          <p className="text-muted-foreground mb-4 italic font-heading text-lg">
            "{activePrompt.prompt}"
          </p>

          <Textarea
            value={entries[activeDay] || ''}
            onChange={(e) => handleChange(activeDay, e.target.value)}
            placeholder="Write your thoughts here..."
            className="min-h-[150px] bg-background/50 resize-none mb-4"
          />

          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleReset(activeDay)}
              className="text-muted-foreground hover:text-destructive"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Clear
            </Button>
            
            <Button
              onClick={handleSave}
              size="sm"
              className={cn(
                'transition-colors',
                saved && 'bg-green-600 hover:bg-green-600'
              )}
            >
              <Save className="w-4 h-4 mr-1" />
              {saved ? 'Saved!' : 'Save Entry'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
