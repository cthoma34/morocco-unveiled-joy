import { motion } from 'framer-motion';
import { Volume2, Utensils, ShoppingBag, BookOpen, History } from 'lucide-react';
import { GuideConfig } from '@/types/guide-config';
import EditorialCard from './EditorialCard';
import { AudioButton } from '../AudioButton';

interface CultureSpreadProps {
  culture: GuideConfig['culture'];
}

const CultureSpread = ({ culture }: CultureSpreadProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      {/* History Section - Only shown if history data exists */}
      {culture.history && (
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <History className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
            <span className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--dest-primary))]">
              {culture.history.title}
            </span>
          </div>

          <p className="text-xl text-foreground/80 mb-12 max-w-4xl leading-relaxed">
            {culture.history.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culture.history.items.map((item, i) => (
              <motion.div
                key={i}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <EditorialCard variant="bordered" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="font-heading text-4xl text-[hsl(var(--dest-primary)/0.3)] group-hover:text-[hsl(var(--dest-primary))] transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-2xl text-foreground mb-1">{item.name}</h4>
                      <p className="text-xs tracking-[0.2em] uppercase text-[hsl(var(--dest-primary))] mb-4">
                        {item.period}
                      </p>
                      <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                        {item.story}
                      </p>
                      <div className="flex items-start gap-2 pt-4 border-t border-border/30">
                        <BookOpen className="w-4 h-4 text-[hsl(var(--dest-primary))] mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-foreground/60 italic">
                          Legacy: {item.legacy}
                        </p>
                      </div>
                    </div>
                  </div>
                </EditorialCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Language Section - Full width hero treatment */}
      <motion.div 
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <Volume2 className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--dest-primary))]">
            Essential {culture.language.name}
          </span>
        </div>

        {/* Phrases as large typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {culture.language.greetings.map((phrase, i) => (
          <motion.div
            key={i}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <AudioButton 
              word={phrase.word} 
              pronunciation={phrase.pronunciation} 
              translation={phrase.translation}
              className="bg-transparent border-0 hover:bg-card/50"
            />
            <div className="h-px w-full bg-border/30 mt-4" />
          </motion.div>
        ))}
        </div>
      </motion.div>

      {/* Food & Shopping - Magazine spread layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Food - Takes more space */}
        <div className="lg:col-span-7">
          <EditorialCard variant="elevated" className="h-full">
            <div className="flex items-center gap-3 mb-8">
              <Utensils className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
              <h3 className="font-heading text-2xl text-foreground">Food & Dining</h3>
            </div>
            
            <p className="text-foreground/80 mb-8 text-lg">
              {culture.food.intro}
            </p>

            {/* Food items in editorial list */}
            <div className="space-y-6">
              {culture.food.items.map((food, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="font-heading text-3xl text-[hsl(var(--dest-primary)/0.3)] group-hover:text-[hsl(var(--dest-primary))] transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-heading text-xl text-foreground">{food.name}</h4>
                      {food.mustTry && (
                        <span className="px-2 py-0.5 text-xs uppercase tracking-wider bg-[hsl(var(--dest-primary))] text-[hsl(var(--dest-primary-foreground,var(--background)))] rounded-sm">
                          Must Try
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/70 text-sm mt-1">{food.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </EditorialCard>
        </div>

        {/* Shopping & Customs */}
        <div className="lg:col-span-5 space-y-8">
          {/* Shopping */}
          <EditorialCard variant="bordered">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
              <h3 className="font-heading text-xl text-foreground">Shopping</h3>
            </div>
            <p className="text-foreground/80 mb-6">{culture.shopping.intro}</p>
            <div className="space-y-3">
              {culture.shopping.tips.slice(0, 6).map((tip, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-[hsl(var(--dest-primary))]">→</span>
                  <span className="text-sm text-foreground/70">{tip}</span>
                </motion.div>
              ))}
            </div>
          </EditorialCard>

          {/* Customs */}
          <EditorialCard variant="glass">
            <h3 className="font-heading text-xl text-foreground mb-6">{culture.customs.title}</h3>
            <div className="space-y-4">
              {culture.customs.items.map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-3 text-foreground/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-[hsl(var(--dest-primary))] text-lg">✦</span>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </EditorialCard>
        </div>
      </div>
    </div>
  );
};

export default CultureSpread;
