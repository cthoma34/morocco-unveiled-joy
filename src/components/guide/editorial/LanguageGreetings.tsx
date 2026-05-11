import { motion } from 'framer-motion';
import { GuideConfig } from '@/types/guide-config';

interface LanguageGreetingsProps {
  language: GuideConfig['culture']['language'];
}

const LanguageGreetings = ({ language }: LanguageGreetingsProps) => {
  if (!language?.greetings?.length) return null;

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--dest-primary))] mb-4 font-medium">
            {language.name}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-3">
            Speak Like a Local
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body italic">
            A few words go a long way.
          </p>
        </div>

        {/* Mobile: horizontal scroll. Desktop: grid */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto">
          <div className="flex gap-4 pb-2 snap-x snap-mandatory">
            {language.greetings.map((g, i) => (
              <GreetingCard key={i} {...g} index={i} className="min-w-[260px] snap-start" />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {language.greetings.map((g, i) => (
            <GreetingCard key={i} {...g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GreetingCardProps {
  word: string;
  pronunciation: string;
  translation: string;
  index: number;
  className?: string;
}

const GreetingCard = ({ word, pronunciation, translation, index, className = '' }: GreetingCardProps) => {
  return (
    <motion.div
      className={`bg-card/40 border border-border/40 rounded-sm p-6 md:p-8 transition-colors hover:border-[hsl(var(--dest-primary)/0.4)] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <p className="font-heading text-3xl md:text-4xl text-foreground mb-2 leading-tight">
        {word}
      </p>
      <p className="text-base text-[hsl(var(--dest-primary))] italic mb-3">
        {pronunciation}
      </p>
      <p className="text-sm text-muted-foreground tracking-wide">
        {translation}
      </p>
    </motion.div>
  );
};

export default LanguageGreetings;