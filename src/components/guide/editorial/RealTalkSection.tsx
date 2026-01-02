import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { GuideConfig } from '@/types/guide-config';

interface RealTalkSectionProps {
  realTalk: GuideConfig['realTalk'];
}

const RealTalkSection = ({ realTalk }: RealTalkSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      {/* Alternating layout - magazine interview style */}
      <div className="space-y-16">
        {realTalk.items.map((item, i) => {
          const isEven = i % 2 === 0;
          
          return (
            <motion.div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start ${
                isEven ? '' : 'lg:direction-rtl'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {/* Topic - Large typography side */}
              <div className={`lg:col-span-4 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                <div className="lg:sticky lg:top-32">
                  <span className="text-8xl md:text-9xl font-heading text-[hsl(var(--dest-primary)/0.15)] leading-none block mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl text-foreground">
                    {item.topic}
                  </h3>
                </div>
              </div>

              {/* Content side */}
              <div className={`lg:col-span-8 ${!isEven ? 'lg:direction-ltr' : ''}`}>
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/30 p-8 md:p-10">
                  {/* Honest take */}
                  <div className="mb-8">
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                      The Real Talk
                    </p>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed">
                      "{item.honest}"
                    </p>
                  </div>

                  {/* Pro tip */}
                  <div className="pt-6 border-t border-border/30">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--dest-primary)/0.15)] flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--dest-primary))] mb-2">
                          Jay's Tip
                        </p>
                        <p className="text-muted-foreground">
                          {item.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RealTalkSection;
