import { useState, useEffect, useCallback } from 'react';
import { ArrowRightLeft, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface CurrencyConverterProps {
  currencyCode: string;
  currencyName: string;
  className?: string;
}

// Fallback rates (updated periodically) - used if API fails
const FALLBACK_RATES: Record<string, number> = {
  AED: 3.67,
  MAD: 10.05,
  KES: 153.50,
  EGP: 30.90,
  TZS: 2510.00,
  GHS: 12.50,
  ZAR: 18.70,
  ETB: 56.50,
  BRL: 4.95,
};

export const CurrencyConverter = ({ currencyCode, currencyName, className }: CurrencyConverterProps) => {
  const [usdAmount, setUsdAmount] = useState<string>('100');
  const [localAmount, setLocalAmount] = useState<string>('');
  const [rate, setRate] = useState<number>(FALLBACK_RATES[currencyCode] || 1);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState<'usd-to-local' | 'local-to-usd'>('usd-to-local');

  // Fetch exchange rate
  useEffect(() => {
    const fetchRate = async () => {
      setIsLoading(true);
      try {
        // Using a free exchange rate API
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.rates && data.rates[currencyCode]) {
            setRate(data.rates[currencyCode]);
            setLastUpdated(new Date());
          }
        }
      } catch (error) {
        console.log('Using fallback exchange rate');
        // Fallback rate already set
      } finally {
        setIsLoading(false);
      }
    };

    fetchRate();
  }, [currencyCode]);

  // Calculate conversion
  useEffect(() => {
    if (direction === 'usd-to-local') {
      const usd = parseFloat(usdAmount) || 0;
      setLocalAmount((usd * rate).toFixed(2));
    } else {
      const local = parseFloat(localAmount) || 0;
      setUsdAmount((local / rate).toFixed(2));
    }
  }, [usdAmount, localAmount, rate, direction]);

  const handleUsdChange = (value: string) => {
    setDirection('usd-to-local');
    setUsdAmount(value);
  };

  const handleLocalChange = (value: string) => {
    setDirection('local-to-usd');
    setLocalAmount(value);
  };

  const toggleDirection = useCallback(() => {
    setDirection(prev => prev === 'usd-to-local' ? 'local-to-usd' : 'usd-to-local');
  }, []);

  // Quick conversion amounts
  const quickAmounts = [20, 50, 100, 200, 500];

  return (
    <div className={cn(
      'p-6 rounded-xl bg-card/50 border border-border/50',
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-heading text-lg font-semibold">Currency Converter</h4>
        {lastUpdated && (
          <span className="text-xs text-muted-foreground">
            Updated: {lastUpdated.toLocaleTimeString()}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 mb-4">
        {/* USD Input */}
        <div className="flex-1">
          <label className="text-xs text-muted-foreground mb-1 block">USD</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              type="number"
              value={usdAmount}
              onChange={(e) => handleUsdChange(e.target.value)}
              className="pl-7 bg-background/50"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleDirection}
          className="mt-5 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <ArrowRightLeft className="w-4 h-4 text-primary" />
        </button>

        {/* Local Currency Input */}
        <div className="flex-1">
          <label className="text-xs text-muted-foreground mb-1 block">{currencyCode}</label>
          <Input
            type="number"
            value={localAmount}
            onChange={(e) => handleLocalChange(e.target.value)}
            className="bg-background/50"
            placeholder="0.00"
          />
        </div>
      </div>

      {/* Exchange Rate Display */}
      <div className="text-center text-sm text-muted-foreground mb-4">
        {isLoading ? (
          <span className="animate-pulse">Loading rate...</span>
        ) : (
          <span>
            1 USD = {rate.toFixed(2)} {currencyCode} ({currencyName})
          </span>
        )}
      </div>

      {/* Quick Amounts */}
      <div className="flex flex-wrap gap-2 justify-center">
        {quickAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleUsdChange(amount.toString())}
            className={cn(
              'px-3 py-1 rounded-full text-sm transition-colors',
              'bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary'
            )}
          >
            ${amount}
          </button>
        ))}
      </div>
    </div>
  );
};
