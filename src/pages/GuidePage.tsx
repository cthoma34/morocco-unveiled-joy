import { GuideConfig, getDestinationThemeVars } from '@/types/guide-config';
import { 
  EditorialHero,
  EditorLetter,
  PhotoEssaySection,
  EssentialsGrid,
  CultureSpread,
  PhotoSpotsMasonry,
  RealTalkSection,
  BeforeYouGoSection,
  EditorialCTA,
  EditorialFooter,
} from '@/components/guide/editorial';
import { PackingChecklist } from '@/components/guide';
import NotFound from './NotFound';

interface GuidePageProps {
  config?: GuideConfig;
}

const GuidePage = ({ config }: GuidePageProps) => {
  if (!config) return <NotFound />;

  const guide = config;
  const themeStyle = getDestinationThemeVars(guide.theme);

  return (
    <div style={themeStyle} className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero - Full screen parallax */}
      <EditorialHero config={guide} />

      {/* Editor's Letter */}
      <EditorLetter welcome={guide.welcome} destinationName={guide.destinationName} />

      {/* The Essentials - Photo Essay Style */}
      <PhotoEssaySection 
        label="01 — The Basics"
        title="Before You Board"
        subtitle="Everything you need to know before you leave"
      >
        <EssentialsGrid basics={guide.basics} slug={guide.slug} />
        
        {/* Packing Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-16">
          <PackingChecklist items={guide.basics.packing} storageKey={guide.slug} />
        </div>
      </PhotoEssaySection>

      {/* Culture & Language - Magazine Spread */}
      <PhotoEssaySection
        label="02 — Culture"
        title="Connect Deeper"
        subtitle={`Essential ${guide.culture.language.name} phrases and cultural insights`}
      >
        <CultureSpread culture={guide.culture} />
      </PhotoEssaySection>

      {/* Photo Spots - Masonry Grid */}
      <PhotoEssaySection
        label="03 — Through the Lens"
        title="Photo Spots"
        subtitle={guide.photos.intro}
      >
        <PhotoSpotsMasonry photos={guide.photos} />
      </PhotoEssaySection>

      {/* Real Talk - Editorial Interview Style */}
      <PhotoEssaySection
        label="04 — Real Talk"
        title="What They Don't Tell You"
        subtitle={guide.realTalk.intro}
      >
        <RealTalkSection realTalk={guide.realTalk} />
      </PhotoEssaySection>

      {/* Before You Go */}
      <PhotoEssaySection
        label="05 — Preparation"
        title="Before You Go"
        subtitle="Prep your mind and spirit for the journey"
      >
        <BeforeYouGoSection beforeYouGo={guide.beforeYouGo} slug={guide.slug} />
      </PhotoEssaySection>

      {/* Final CTA */}
      <EditorialCTA finalWords={guide.finalWords} destinationName={guide.destinationName} />

      {/* Footer */}
      <EditorialFooter />
    </div>
  );
};

export default GuidePage;
