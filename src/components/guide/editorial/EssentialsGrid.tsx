import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Stamp, Syringe, DollarSign } from 'lucide-react';
import { GuideConfig } from '@/types/guide-config';
import EditorialCard from './EditorialCard';

interface RequirementInfo {
  required?: boolean;
  note?: string;
}

interface EssentialsGridProps {
  basics: GuideConfig['basics'];
  slug: string;
}

const resolveRequirement = (
  value: unknown,
  fallbackItems: string[] | undefined,
  defaultLabel: string
): { answer: string; note: string } => {
  if (value && typeof value === 'object') {
    const v = value as RequirementInfo;
    return {
      answer: v.required === false ? 'No' : 'Yes',
      note: v.note ?? fallbackItems?.[0] ?? defaultLabel,
    };
  }
  if (typeof value === 'string') {
    return { answer: 'Yes', note: value };
  }
  return {
    answer: 'Yes',
    note: fallbackItems?.[0] ?? defaultLabel,
  };
};

const EssentialsGrid = ({ basics }: EssentialsGridProps) => {
  const b = basics as any;

  const passport = resolveRequirement(
    b.passport,
    basics.documents?.items,
    'Valid passport required for entry.'
  );
  const visa = resolveRequirement(
    b.visa,
    basics.documents?.items,
    'Check current visa requirements before travel.'
  );
  const vaccines = resolveRequirement(
    b.vaccines,
    basics.health?.items,
    'Consult your doctor for recommended vaccines.'
  );

  const [rate, setRate] = useState<number | null>(null);
  const [rateError, setRateError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const r = data?.rates?.[basics.money.currencyCode];
        if (typeof r === 'number') setRate(r);
        else setRateError(true);
      })
      .catch(() => {
        if (!cancelled) setRateError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [basics.money.currencyCode]);

  const cards = [
    {
      icon: FileText,
      label: 'Passport',
      answer: passport.answer,
      note: passport.note,
    },
    {
      icon: Stamp,
      label: 'Visa',
      answer: visa.answer,
      note: visa.note,
    },
    {
      icon: Syringe,
      label: 'Vaccines',
      answer: vaccines.answer,
      note: vaccines.note,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const isYes = card.answer.toLowerCase() === 'yes';
          return (
            <EditorialCard key={card.label} variant="bordered" delay={i * 0.05}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--dest-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[hsl(var(--dest-primary))]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    {card.label}
                  </p>
                  <p className="font-heading text-3xl text-foreground mb-2">
                    <span
                      className={
                        isYes
                          ? 'text-[hsl(var(--dest-primary))]'
                          : 'text-foreground'
                      }
                    >
                      {card.answer}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.note}
                  </p>
                </div>
              </div>
            </EditorialCard>
          );
        })}

        {/* Currency */}
        <EditorialCard variant="bordered" delay={0.15}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[hsl(var(--dest-primary)/0.1)] flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-6 h-6 text-[hsl(var(--dest-primary))]" />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Currency
              </p>
              <p className="font-heading text-3xl text-foreground">
                {basics.money.currencyCode}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {basics.money.currency}
              </p>

              <motion.div
                className="mt-4 pt-4 border-t border-border/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {rate !== null && !rateError ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-base text-foreground/90 font-medium">
                      1 USD ={' '}
                      <span className="text-[hsl(var(--dest-primary))] font-semibold">
                        {rate.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </span>{' '}
                      {basics.money.currencyCode}
                    </p>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[hsl(var(--dest-primary)/0.1)] border border-[hsl(var(--dest-primary)/0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--dest-primary))] animate-pulse" />
                      <span className="text-[10px] tracking-[0.15em] uppercase text-[hsl(var(--dest-primary))] font-medium">
                        Live Rate
                      </span>
                    </span>
                  </div>
                ) : rateError ? null : (
                  <p className="text-sm text-muted-foreground italic">
                    Loading live rate…
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </EditorialCard>
      </div>
    </div>
  );
};

export default EssentialsGrid;
