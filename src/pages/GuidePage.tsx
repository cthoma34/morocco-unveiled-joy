import { GuideConfig, getDestinationThemeVars } from '@/types/guide-config';
import { 
  HeroSection,
  WelcomeCard,
  QuickFactCard,
  SectionHeader,
  PhraseCard,
  FoodCard,
  RealTalkCard,
  CTASection,
  CurrencyConverter, 
  PackingChecklist, 
  JournalPrompts,
  BentoCard,
} from '@/components/guide';
import { 
  FileText, Heart, Utensils, ShoppingBag, Camera, 
  MessageCircle, Plane, Sparkles, Thermometer, DollarSign,
  CheckCircle2
} from 'lucide-react';
import NotFound from './NotFound';

interface GuidePageProps {
  config?: GuideConfig;
}

const GuidePage = ({ config }: GuidePageProps) => {
  if (!config) return <NotFound />;

  const guide = config;
  const themeStyle = getDestinationThemeVars(guide.theme);

  return (
    <div style={themeStyle} className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection config={guide} />

      {/* Main Content - Bento Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Welcome & Quick Facts Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <WelcomeCard welcome={guide.welcome} />
          <div className="grid gap-4">
            <QuickFactCard 
              icon={<Thermometer className="w-6 h-6" />}
              label="Best Time"
              value={guide.basics.weather.bestMonths}
              subtext={guide.basics.weather.temperature}
            />
            <QuickFactCard 
              icon={<DollarSign className="w-6 h-6" />}
              label="Currency"
              value={guide.basics.money.currencyCode}
              subtext={guide.basics.money.currency}
            />
          </div>
        </section>

        {/* The Basics Section */}
        <section>
          <SectionHeader 
            icon={<FileText className="w-6 h-6" />}
            title="The Basics"
            subtitle="Everything you need before you board that plane"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Documents Card */}
            <BentoCard variant="glass" size="md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[hsl(var(--dest-primary)/0.15)] flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[hsl(var(--dest-primary))]" />
                </div>
                <h3 className="font-heading text-xl">{guide.basics.documents.title}</h3>
              </div>
              <ul className="space-y-2">
                {guide.basics.documents.items.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--dest-primary))] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>

            {/* Health Card */}
            <BentoCard variant="glass" size="md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[hsl(var(--dest-primary)/0.15)] flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[hsl(var(--dest-primary))]" />
                </div>
                <h3 className="font-heading text-xl">{guide.basics.health.title}</h3>
              </div>
              <ul className="space-y-2">
                {guide.basics.health.items.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--dest-primary))] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>

            {/* Currency Converter */}
            <div className="md:row-span-2">
              <CurrencyConverter 
                currencyCode={guide.basics.money.currencyCode}
                currencyName={guide.basics.money.currency}
              />
            </div>

            {/* Packing Checklist - spans 2 columns */}
            <div className="md:col-span-2">
              <PackingChecklist 
                items={guide.basics.packing}
                storageKey={guide.slug}
              />
            </div>
          </div>
        </section>

        {/* Culture & Language Section */}
        <section>
          <SectionHeader 
            icon={<MessageCircle className="w-6 h-6" />}
            title="Culture & Language"
            subtitle={`Connect deeper with essential ${guide.culture.language.name} phrases`}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Language Phrases - Large Card */}
            <BentoCard variant="gradient" size="lg" span="col-2" className="p-4 md:p-6">
              <h3 className="font-heading text-2xl mb-4">Essential {guide.culture.language.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {guide.culture.language.greetings.map((phrase, i) => (
                  <PhraseCard key={i} phrase={phrase} languageName={guide.culture.language.name} />
                ))}
              </div>
            </BentoCard>

            {/* Food Card */}
            <BentoCard variant="glass" size="lg" className="md:row-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[hsl(var(--dest-primary)/0.15)] flex items-center justify-center">
                  <Utensils className="w-4 h-4 text-[hsl(var(--dest-primary))]" />
                </div>
                <h3 className="font-heading text-xl">Food & Dining</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{guide.culture.food.intro}</p>
              <div className="space-y-2 overflow-y-auto max-h-[400px] pr-2">
                {guide.culture.food.items.map((food, i) => (
                  <FoodCard key={i} food={food} />
                ))}
              </div>
            </BentoCard>

            {/* Customs Card */}
            <BentoCard variant="glass" size="md">
              <h3 className="font-heading text-xl mb-4">{guide.culture.customs.title}</h3>
              <ul className="space-y-3">
                {guide.culture.customs.items.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-[hsl(var(--dest-primary))]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>

            {/* Shopping Card */}
            <BentoCard variant="glass" size="md">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="w-5 h-5 text-[hsl(var(--dest-primary))]" />
                <h3 className="font-heading text-xl">Shopping</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{guide.culture.shopping.intro}</p>
              <div className="flex flex-wrap gap-2">
                {guide.culture.shopping.tips.slice(0, 5).map((tip, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full bg-[hsl(var(--dest-primary)/0.1)] text-[hsl(var(--dest-primary))] border border-[hsl(var(--dest-primary)/0.2)]">
                    {tip.split(' ').slice(0, 3).join(' ')}
                  </span>
                ))}
              </div>
            </BentoCard>
          </div>
        </section>

        {/* Photo Spots Section */}
        <section>
          <SectionHeader 
            icon={<Camera className="w-6 h-6" />}
            title="Photo Spots"
            subtitle={guide.photos.intro}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {guide.photos.spots.slice(0, 8).map((spot, i) => (
              <BentoCard 
                key={i} 
                variant="glass" 
                size="sm"
                span={i === 0 || i === 3 ? 'col-2' : 'col-1'}
                className="group cursor-pointer"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading text-lg text-foreground group-hover:text-[hsl(var(--dest-primary))] transition-colors">
                      {spot.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{spot.description}</p>
                  </div>
                  <p className="text-xs text-[hsl(var(--dest-primary))] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    💡 {spot.tips}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* Real Talk Section */}
        <section>
          <SectionHeader 
            icon={<Sparkles className="w-6 h-6" />}
            title="Real Talk"
            subtitle={guide.realTalk.intro}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guide.realTalk.items.map((item, i) => (
              <RealTalkCard key={i} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* Before You Go Section */}
        <section>
          <SectionHeader 
            icon={<Plane className="w-6 h-6" />}
            title="Before You Go"
            subtitle="Prep your mind and spirit for the journey"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <JournalPrompts prompts={guide.beforeYouGo.journal} storageKey={guide.slug} />
            
            <BentoCard variant="glass" size="lg">
              <h3 className="font-heading text-xl mb-4">Last Minute Checklist</h3>
              <ul className="space-y-3">
                {guide.beforeYouGo.lastMinute.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(var(--dest-primary))] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </div>
        </section>
      </main>

      {/* Final CTA */}
      <CTASection finalWords={guide.finalWords} destinationName={guide.destinationName} />

      {/* Footer */}
      <footer className="border-t border-border/30 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/mit-logo.png" alt="Maximum Impact Travel" className="h-8 w-auto opacity-80" />
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Maximum Impact Travel</span>
          </div>
          <p className="text-sm text-muted-foreground">Designed for transformative travel experiences</p>
        </div>
      </footer>
    </div>
  );
};

export default GuidePage;
