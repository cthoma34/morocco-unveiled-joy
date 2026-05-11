import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DestinationClockProps {
  timeZone: string;
  destinationName: string;
}

const DestinationClock = ({ timeZone, destinationName }: DestinationClockProps) => {
  const formatTime = () => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(new Date());
    } catch {
      return new Date().toLocaleTimeString();
    }
  };

  const [time, setTime] = useState<string>(formatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return (
    <section className="bg-background py-20 md:py-28">
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs tracking-[0.4em] uppercase text-[hsl(var(--dest-primary))] mb-6 font-medium">
          Right Now In {destinationName}
        </p>
        <p className="font-heading text-6xl md:text-7xl lg:text-8xl text-foreground tabular-nums tracking-tight mb-8">
          {time}
        </p>
        <p className="font-heading text-xl md:text-2xl text-muted-foreground italic">
          Your journey starts the moment you say yes.
        </p>
      </motion.div>
    </section>
  );
};

export default DestinationClock;