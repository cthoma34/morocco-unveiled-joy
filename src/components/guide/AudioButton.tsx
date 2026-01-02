import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AudioButtonProps {
  word: string;
  pronunciation: string;
  translation: string;
  className?: string;
}

export const AudioButton = ({ word, pronunciation, translation, className }: AudioButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported] = useState(() => 'speechSynthesis' in window);

  const speak = () => {
    if (!isSupported) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(pronunciation);
    utterance.rate = 0.7; // Slower for learning
    utterance.pitch = 1;
    utterance.lang = 'ar-SA'; // Arabic
    
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      disabled={!isSupported}
      className={cn(
        'group flex items-center gap-3 p-4 rounded-lg',
        'bg-card/50 hover:bg-card border border-border/50 hover:border-primary/30',
        'transition-all duration-300 text-left w-full',
        isPlaying && 'ring-2 ring-primary/50 bg-card',
        className
      )}
    >
      <div className={cn(
        'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
        'bg-primary/10 group-hover:bg-primary/20 transition-colors',
        isPlaying && 'bg-primary/30 animate-pulse'
      )}>
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary animate-pulse" />
        ) : (
          <Volume2 className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-heading text-lg font-semibold text-foreground">
            {word}
          </span>
          <span className="text-sm text-muted-foreground font-body">
            [{pronunciation}]
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-0.5">
          {translation}
        </p>
      </div>
      
      {!isSupported && (
        <VolumeX className="w-4 h-4 text-muted-foreground" />
      )}
    </button>
  );
};
