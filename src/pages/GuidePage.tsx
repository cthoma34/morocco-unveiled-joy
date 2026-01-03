import { GuideConfig, getDestinationThemeVars, getEditorialPalette } from '@/types/guide-config';
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
  PhotoGalleryStrip,
  ImageInterlude,
  FullBleedImage,
} from '@/components/guide/editorial';
import { PackingChecklist } from '@/components/guide';
import DestinationNav from '@/components/guide/DestinationNav';
import NotFound from './NotFound';

interface GuidePageProps {
  config?: GuideConfig;
}

const GuidePage = ({ config }: GuidePageProps) => {
  if (!config) return <NotFound />;

  const guide = config;
  
  // Get editorial palette for this destination
  const editorialPalette = getEditorialPalette(guide.slug);
  const editorialConfig = guide.editorial || {
    issueNumber: `Guide No. 01`,
    coverLine: guide.tagline,
    colorPalette: editorialPalette,
  };
  
  const themeStyle = getDestinationThemeVars(guide.theme, editorialConfig);

  // Get image interludes and strips from config
  const interludes = guide.images.interludes;
  const strips = guide.images.strips;

  return (
    <div style={themeStyle} className="min-h-screen bg-background overflow-x-hidden">
      {/* Destination Navigation */}
      <DestinationNav currentSlug={guide.slug} />

      {/* Hero - Full screen parallax */}
      <EditorialHero config={guide} />

      {/* Editor's Letter */}
      <EditorLetter welcome={guide.welcome} destinationName={guide.destinationName} />

      {/* PHOTO INTERLUDE: After Welcome - Safari Strip */}
      {strips?.safari && strips.safari.length > 0 && (
        <PhotoGalleryStrip images={strips.safari} direction="left" />
      )}

      {/* Image Interlude: Landscapes */}
      {interludes?.afterWelcome && interludes.afterWelcome.length > 0 && (
        <ImageInterlude 
          images={interludes.afterWelcome}
          layout="trio"
          quote="The Serengeti shows you what Earth looked like before we complicated it."
          attribution="Jay Cameron"
        />
      )}

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

      {/* PHOTO INTERLUDE: After Basics - Balloon Experience Strip */}
      {interludes?.afterBasics && interludes.afterBasics.length > 0 && (
        <ImageInterlude 
          images={interludes.afterBasics}
          layout="duo"
        />
      )}

      {/* Culture & Language - Magazine Spread */}
      <PhotoEssaySection
        label="02 — Culture"
        title="Connect Deeper"
        subtitle={`Essential ${guide.culture.language.name} phrases and cultural insights`}
      >
        <CultureSpread culture={guide.culture} />
      </PhotoEssaySection>

      {/* PHOTO STRIP: Culture experiences */}
      {strips?.culture && strips.culture.length > 0 && (
        <PhotoGalleryStrip images={strips.culture} direction="right" />
      )}

      {/* Image Interlude: After Culture */}
      {interludes?.afterCulture && interludes.afterCulture.length > 0 && (
        <ImageInterlude 
          images={interludes.afterCulture}
          layout="grid"
        />
      )}

      {/* Photo Spots - Masonry Grid */}
      <PhotoEssaySection
        label="03 — Through the Lens"
        title="Photo Spots"
        subtitle={guide.photos.intro}
      >
        <PhotoSpotsMasonry photos={guide.photos} />
      </PhotoEssaySection>

      {/* PHOTO STRIP: Beach experiences */}
      {strips?.beach && strips.beach.length > 0 && (
        <PhotoGalleryStrip images={strips.beach} direction="left" />
      )}

      {/* Full Bleed Image: Beach Paradise */}
      {interludes?.afterPhotos && interludes.afterPhotos[0] && (
        <FullBleedImage 
          src={interludes.afterPhotos[0]}
          alt="Zanzibar paradise"
          caption="Where the safari meets the sea — Zanzibar awaits"
          aspectRatio="cinematic"
        />
      )}

      {/* Real Talk - Editorial Interview Style */}
      <PhotoEssaySection
        label="04 — Real Talk"
        title="What They Don't Tell You"
        subtitle={guide.realTalk.intro}
      >
        <RealTalkSection realTalk={guide.realTalk} />
      </PhotoEssaySection>

      {/* Image Interlude: After Real Talk - Emotional moments */}
      {interludes?.afterRealTalk && interludes.afterRealTalk.length > 0 && (
        <ImageInterlude 
          images={interludes.afterRealTalk}
          layout="trio"
          quote="Coming home different isn't about the destination. It's about finally coming home to yourself."
          attribution="Jay Cameron"
        />
      )}

      {/* Before You Go */}
      <PhotoEssaySection
        label="05 — Preparation"
        title="Before You Go"
        subtitle="Prep your mind and spirit for the journey"
      >
        <BeforeYouGoSection beforeYouGo={guide.beforeYouGo} slug={guide.slug} />
      </PhotoEssaySection>

      {/* Final CTA */}
      <EditorialCTA 
        finalWords={guide.finalWords} 
        destinationName={guide.destinationName}
        ctaVideo={guide.images.ctaVideo}
        ctaImage={guide.images.hero}
      />

      {/* Footer */}
      <EditorialFooter />
    </div>
  );
};

export default GuidePage;
