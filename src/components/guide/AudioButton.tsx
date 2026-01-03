import { useState, useCallback, useRef } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioButtonProps {
  word: string;
  pronunciation: string;
  translation: string;
  className?: string;
}

export const AudioButton = ({ word, pronunciation, translation, className }: AudioButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speak = useCallback(async () => {
    if (isPlaying || isLoading) return;

    setIsLoading(true);

    try {
      // Call ElevenLabs edge function
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text: word }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to generate audio');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Clean up previous audio
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };
      audio.onerror = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();
    } catch (error) {
      console.error('ElevenLabs TTS error:', error);
      // Fallback to browser speech synthesis
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.rate = 0.7;
        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
      }
    } finally {
      setIsLoading(false);
    }
  }, [word, isPlaying, isLoading]);

  return (
    <button
      onClick={speak}
      disabled={isLoading}
      className={cn(
        'group flex items-center gap-3 p-4 rounded-lg',
        'bg-card/50 hover:bg-card border border-border/50 hover:border-primary/30',
        'transition-all duration-300 text-left w-full',
        isPlaying && 'ring-2 ring-primary/50 bg-card',
        isLoading && 'opacity-70',
        className
      )}
    >
      <div className={cn(
        'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
        'bg-primary/10 group-hover:bg-primary/20 transition-colors',
        isPlaying && 'bg-primary/30 animate-pulse'
      )}>
        {isLoading ? (
          <Loader2 className="w-5 h-5 text-primary animate-spin" />
        ) : isPlaying ? (
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
          <span className="text-sm text-foreground/70 font-body">
            [{pronunciation}]
          </span>
        </div>
        <p className="text-sm text-foreground/70 mt-0.5">
          {translation}
        </p>
      </div>
    </button>
  );
};
