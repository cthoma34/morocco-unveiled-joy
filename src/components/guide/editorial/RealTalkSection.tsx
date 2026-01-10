import { motion } from 'framer-motion';
import { MessageCircle, Info } from 'lucide-react';
import { GuideConfig } from '@/types/guide-config';

interface RealTalkSectionProps {
  realTalk: GuideConfig['realTalk'];
}

const RealTalkSection = ({ realTalk }: RealTalkSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      {/* Disclaimer at top */}
      <motion.div
        className="mb-12 p-4 bg-muted/30 border border-border/30 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            The following observations are based on our travel experiences and are for educational purposes only. 
            Every traveler's experience is unique. We encourage you to do your own research and make decisions 
            that feel right for you.
          </p>
        </div>
      </motion.div>

      {/* Simplified card grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {realTalk.items.map((item, i) => (
          <motion.div
            key={i}
            className="bg-card/50 backdrop-blur-sm border border-border/30 p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Topic header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--dest-primary)/0.1)] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
              </div>
              <h3 className="font-heading text-xl text-foreground">
                {item.topic}
              </h3>
            </div>

            {/* Observation */}
            <p className="text-foreground/80 leading-relaxed mb-4">
              {item.honest}
            </p>

            {/* General suggestion - simplified */}
            <p className="text-sm text-muted-foreground italic">
              {item.tip}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom disclaimer */}
      <motion.p
        className="text-center text-xs text-muted-foreground mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        These insights reflect general observations and may not apply to every situation.
      </motion.p>
    </div>
  );
};

export default RealTalkSection;
