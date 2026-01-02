import { GuideConfig } from '@/types/guide-config';
import BentoCard from './BentoCard';

interface WelcomeCardProps {
  welcome: GuideConfig['welcome'];
  className?: string;
}

const WelcomeCard = ({ welcome, className }: WelcomeCardProps) => {
  return (
    <BentoCard variant="gradient" size="lg" span="col-2" className={className}>
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="text-3xl md:text-4xl font-heading text-[hsl(var(--dest-primary))] mb-6">
            {welcome.greeting}
          </p>
          <div className="space-y-4">
            {welcome.message.slice(0, 3).map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border/30">
          <p className="text-[hsl(var(--dest-primary))] font-heading text-xl">
            — {welcome.signature}
          </p>
          <p className="text-sm text-muted-foreground">{welcome.signatureTitle}</p>
        </div>
      </div>
    </BentoCard>
  );
};

export default WelcomeCard;
