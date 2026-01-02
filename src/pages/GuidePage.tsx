import { GuideConfig } from '@/types/guide-config';
import { 
  AudioButton, 
  CurrencyConverter, 
  PackingChecklist, 
  ExpandableSection,
  JournalPrompts 
} from '@/components/guide';
import { 
  FileText, Heart, Utensils, ShoppingBag, Camera, 
  MessageCircle, Plane, Sparkles, MapPin, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

interface GuidePageProps {
  config?: GuideConfig;
}

const GuidePage = ({ config }: GuidePageProps) => {
  if (!config) return <NotFound />;

  const guide = config;

  const themeStyle = {
    '--dest-primary': guide.theme.primary,
    '--dest-secondary': guide.theme.secondary,
    '--dest-accent': guide.theme.accent,
  } as React.CSSProperties;

  return (
    <div style={themeStyle} className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10" />
        <div className="absolute inset-0 bg-[hsl(var(--dest-primary)/0.2)]" />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4">Maximum Impact Travel</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4">
            {guide.hero.title}
          </h1>
          <p className="text-xl text-white/90">{guide.hero.subtitle}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Welcome */}
        <section className="prose prose-invert max-w-none">
          <p className="text-2xl font-heading text-primary">{guide.welcome.greeting}</p>
          {guide.welcome.message.map((p, i) => (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
          ))}
          <p className="text-primary font-heading text-xl mt-8">
            — {guide.welcome.signature}<br />
            <span className="text-sm text-muted-foreground">{guide.welcome.signatureTitle}</span>
          </p>
        </section>

        {/* Basics */}
        <section>
          <h2 className="font-heading text-3xl mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" /> The Basics
          </h2>
          <div className="space-y-4">
            <ExpandableSection title="Documents & Entry" icon={<FileText className="w-5 h-5" />} defaultOpen>
              <ul className="space-y-2">
                {guide.basics.documents.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </ExpandableSection>

            <ExpandableSection title="Health & Safety" icon={<Heart className="w-5 h-5" />}>
              <ul className="space-y-2">
                {guide.basics.health.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </ExpandableSection>

            <CurrencyConverter 
              currencyCode={guide.basics.money.currencyCode}
              currencyName={guide.basics.money.currency}
            />

            <PackingChecklist 
              items={guide.basics.packing}
              storageKey={guide.slug}
            />
          </div>
        </section>

        {/* Culture & Language */}
        <section>
          <h2 className="font-heading text-3xl mb-6 flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-primary" /> Culture & Language
          </h2>
          
          <div className="mb-8">
            <h3 className="font-heading text-xl mb-4">Essential {guide.culture.language.name} Phrases</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {guide.culture.language.greetings.map((phrase, i) => (
                <AudioButton key={i} {...phrase} />
              ))}
            </div>
          </div>

          <ExpandableSection title="Food & Dining" icon={<Utensils className="w-5 h-5" />}>
            <p className="text-muted-foreground mb-4">{guide.culture.food.intro}</p>
            <div className="space-y-3">
              {guide.culture.food.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={item.mustTry ? 'text-primary' : 'text-muted-foreground'}>
                    {item.mustTry ? '⭐' : '•'}
                  </span>
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-muted-foreground"> — {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableSection>
        </section>

        {/* Real Talk */}
        <section>
          <h2 className="font-heading text-3xl mb-4 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" /> Real Talk
          </h2>
          <p className="text-muted-foreground mb-6">{guide.realTalk.intro}</p>
          <div className="space-y-4">
            {guide.realTalk.items.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-card/50 border border-border/50">
                <h4 className="font-heading text-lg font-semibold text-primary mb-2">{item.topic}</h4>
                <p className="text-muted-foreground mb-2">{item.honest}</p>
                <p className="text-sm"><span className="text-primary font-medium">Tip:</span> {item.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before You Go */}
        <section>
          <h2 className="font-heading text-3xl mb-6 flex items-center gap-3">
            <Plane className="w-8 h-8 text-primary" /> Before You Go
          </h2>
          <JournalPrompts prompts={guide.beforeYouGo.journal} storageKey={guide.slug} />
        </section>

        {/* Final CTA */}
        <section className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50">
          {guide.finalWords.message.map((p, i) => (
            <p key={i} className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">{p}</p>
          ))}
          <p className="text-xl font-heading text-primary mt-8 mb-4">{guide.finalWords.callToAction.text}</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to={guide.finalWords.callToAction.link}>
              {guide.finalWords.callToAction.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default GuidePage;
