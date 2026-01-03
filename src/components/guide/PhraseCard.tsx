import { PronunciationItem } from '@/types/guide-config';
import { Volume2, Loader2 } from 'lucide-react';
import { useState, useCallback, useRef } from 'react';

interface PhraseCardProps {
  phrase: PronunciationItem;
  languageName: string;
}

const PhraseCard = ({ phrase, languageName }: PhraseCardProps) => {
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
          body: JSON.stringify({ text: phrase.word }),
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
        const utterance = new SpeechSynthesisUtterance(phrase.word);
        utterance.rate = 0.7;
        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
      }
    } finally {
      setIsLoading(false);
    }
  }, [phrase.word, isPlaying, isLoading]);

  return (
    <button
      onClick={speak}
      disabled={isLoading}
      className="group w-full text-left p-4 rounded-xl bg-card/50 border border-border/30 hover:border-[hsl(var(--dest-primary)/0.5)] transition-all duration-300 hover:bg-card/70 disabled:opacity-70"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xl font-heading text-foreground truncate">{phrase.word}</p>
          <p className="text-sm text-[hsl(var(--dest-primary))] font-mono">{phrase.pronunciation}</p>
          <p className="text-sm text-muted-foreground mt-1">{phrase.translation}</p>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isPlaying ? 'bg-[hsl(var(--dest-primary))] text-background' : isLoading ? 'bg-muted/50' : 'bg-muted/30 text-muted-foreground group-hover:text-[hsl(var(--dest-primary))]'}`}>
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </div>
      </div>
    </button>
  );
};

export default PhraseCard;
