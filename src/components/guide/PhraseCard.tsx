import { PronunciationItem } from '@/types/guide-config';
import { Volume2 } from 'lucide-react';
import { useState, useCallback } from 'react';

interface PhraseCardProps {
  phrase: PronunciationItem;
  languageName: string;
}

const PhraseCard = ({ phrase, languageName }: PhraseCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = useCallback(() => {
    if ('speechSynthesis' in window && !isPlaying) {
      setIsPlaying(true);
      const utterance = new SpeechSynthesisUtterance(phrase.word);
      utterance.rate = 0.7;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  }, [phrase.word, isPlaying]);

  return (
    <button
      onClick={speak}
      className="group w-full text-left p-4 rounded-xl bg-card/50 border border-border/30 hover:border-[hsl(var(--dest-primary)/0.5)] transition-all duration-300 hover:bg-card/70"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xl font-heading text-foreground truncate">{phrase.word}</p>
          <p className="text-sm text-[hsl(var(--dest-primary))] font-mono">{phrase.pronunciation}</p>
          <p className="text-sm text-muted-foreground mt-1">{phrase.translation}</p>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isPlaying ? 'bg-[hsl(var(--dest-primary))] text-background' : 'bg-muted/30 text-muted-foreground group-hover:text-[hsl(var(--dest-primary))]'}`}>
          <Volume2 className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
};

export default PhraseCard;
