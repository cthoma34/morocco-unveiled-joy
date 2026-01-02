import { motion } from 'framer-motion';
import { FileText, Heart, DollarSign, Thermometer, CheckCircle2 } from 'lucide-react';
import { GuideConfig } from '@/types/guide-config';
import EditorialCard from './EditorialCard';
import { CurrencyConverter } from '../CurrencyConverter';

interface EssentialsGridProps {
  basics: GuideConfig['basics'];
  slug: string;
}

const EssentialsGrid = ({ basics, slug }: EssentialsGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      {/* Main grid - asymmetric magazine layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left column - Quick facts stack */}
        <div className="lg:col-span-4 space-y-6">
          {/* Weather Card */}
          <EditorialCard variant="bordered">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--dest-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                <Thermometer className="w-6 h-6 text-[hsl(var(--dest-primary))]" />
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Best Time</p>
                <p className="font-heading text-2xl text-foreground">{basics.weather.bestMonths}</p>
                <p className="text-sm text-muted-foreground mt-1">{basics.weather.temperature}</p>
              </div>
            </div>
          </EditorialCard>

          {/* Currency Quick Card */}
          <EditorialCard variant="bordered" delay={0.1}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--dest-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-[hsl(var(--dest-primary))]" />
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Currency</p>
                <p className="font-heading text-2xl text-foreground">{basics.money.currencyCode}</p>
                <p className="text-sm text-muted-foreground mt-1">{basics.money.currency}</p>
              </div>
            </div>
          </EditorialCard>

          {/* Currency Converter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CurrencyConverter 
              currencyCode={basics.money.currencyCode}
              currencyName={basics.money.currency}
            />
          </motion.div>
        </div>

        {/* Right column - Documents and Health */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Documents */}
          <EditorialCard variant="glass" delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
              <h3 className="font-heading text-xl text-foreground">{basics.documents.title}</h3>
            </div>
            <ul className="space-y-3">
              {basics.documents.items.map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--dest-primary))] flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </EditorialCard>

          {/* Health */}
          <EditorialCard variant="glass" delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
              <h3 className="font-heading text-xl text-foreground">{basics.health.title}</h3>
            </div>
            <ul className="space-y-3">
              {basics.health.items.slice(0, 7).map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--dest-primary))] flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </EditorialCard>

          {/* Money Tips - Spans full width */}
          <div className="md:col-span-2">
            <EditorialCard variant="bordered" delay={0.3}>
              <p className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--dest-primary))] mb-4">Money Tips</p>
              <div className="flex flex-wrap gap-3">
                {basics.money.tips.map((tip, i) => (
                  <motion.span 
                    key={i}
                    className="px-4 py-2 bg-[hsl(var(--dest-primary)/0.08)] text-sm text-foreground rounded-full border border-[hsl(var(--dest-primary)/0.15)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.03 * i }}
                  >
                    {tip}
                  </motion.span>
                ))}
              </div>
            </EditorialCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialsGrid;
