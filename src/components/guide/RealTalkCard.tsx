import { RealTalkItem } from '@/types/guide-config';
import { MessageCircle, Lightbulb } from 'lucide-react';
import BentoCard from './BentoCard';

interface RealTalkCardProps {
  item: RealTalkItem;
  index: number;
}

const RealTalkCard = ({ item, index }: RealTalkCardProps) => {
  const isLarge = index === 0;
  
  return (
    <BentoCard 
      variant="glass" 
      size={isLarge ? 'lg' : 'md'} 
      span={isLarge ? 'col-2' : 'col-1'}
      className="group"
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[hsl(var(--dest-primary)/0.15)] flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
          </div>
          <h4 className="font-heading text-xl text-foreground">{item.topic}</h4>
        </div>
        
        <p className="text-muted-foreground flex-1 leading-relaxed">{item.honest}</p>
        
        <div className="mt-4 pt-4 border-t border-border/30 flex items-start gap-3">
          <Lightbulb className="w-4 h-4 text-[hsl(var(--dest-primary))] flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground">
            <span className="text-[hsl(var(--dest-primary))] font-medium">Tip:</span> {item.tip}
          </p>
        </div>
      </div>
    </BentoCard>
  );
};

export default RealTalkCard;
