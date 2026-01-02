import { FoodItem } from '@/types/guide-config';
import { Star } from 'lucide-react';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className="p-4 rounded-xl bg-card/30 border border-border/20 hover:border-[hsl(var(--dest-primary)/0.3)] transition-all">
      <div className="flex items-start gap-3">
        {food.mustTry && (
          <Star className="w-5 h-5 text-[hsl(var(--dest-primary))] fill-[hsl(var(--dest-primary))] flex-shrink-0 mt-1" />
        )}
        <div>
          <p className="font-heading text-lg text-foreground">{food.name}</p>
          <p className="text-sm text-muted-foreground">{food.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
