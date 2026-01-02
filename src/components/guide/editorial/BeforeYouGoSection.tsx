import { motion } from 'framer-motion';
import { Plane, BookOpen, CheckCircle2 } from 'lucide-react';
import { GuideConfig } from '@/types/guide-config';
import { JournalPrompts } from '../JournalPrompts';
import EditorialCard from './EditorialCard';

interface BeforeYouGoSectionProps {
  beforeYouGo: GuideConfig['beforeYouGo'];
  slug: string;
}

const BeforeYouGoSection = ({ beforeYouGo, slug }: BeforeYouGoSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Journal Prompts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <JournalPrompts prompts={beforeYouGo.journal} storageKey={slug} />
        </motion.div>

        {/* Last Minute Checklist */}
        <EditorialCard variant="bordered" delay={0.2}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[hsl(var(--dest-primary)/0.1)] flex items-center justify-center">
              <Plane className="w-6 h-6 text-[hsl(var(--dest-primary))]" />
            </div>
            <div>
              <h3 className="font-heading text-2xl text-foreground">Last Minute</h3>
              <p className="text-sm text-muted-foreground">Before you leave</p>
            </div>
          </div>

          <div className="space-y-4">
            {beforeYouGo.lastMinute.map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--dest-primary))] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </EditorialCard>
      </div>
    </div>
  );
};

export default BeforeYouGoSection;
