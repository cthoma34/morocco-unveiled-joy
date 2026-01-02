import { motion } from 'framer-motion';
import { GuideConfig } from '@/types/guide-config';

interface EditorLetterProps {
  welcome: GuideConfig['welcome'];
  destinationName: string;
}

const EditorLetter = ({ welcome, destinationName }: EditorLetterProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(var(--dest-primary)/0.03)] to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - Label */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-32">
              <div className="h-px w-12 bg-[hsl(var(--dest-primary))] mb-6" />
              <p className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--dest-primary))] font-medium mb-2">
                Editor's Letter
              </p>
              <p className="text-sm text-muted-foreground font-body">
                A personal note from your host
              </p>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div 
            className="lg:col-span-9"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Greeting - Large editorial style */}
            <p className="font-heading text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--dest-primary))] mb-12 leading-tight">
              {welcome.greeting}
            </p>

            {/* Message body */}
            <div className="space-y-6 max-w-3xl">
              {welcome.message.map((paragraph, i) => (
                <motion.p 
                  key={i}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div 
              className="mt-16 pt-8 border-t border-border/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-heading text-3xl text-[hsl(var(--dest-primary))] italic mb-2">
                — {welcome.signature}
              </p>
              <p className="text-sm text-muted-foreground tracking-wide uppercase">
                {welcome.signatureTitle}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditorLetter;
