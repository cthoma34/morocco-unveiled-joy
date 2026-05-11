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
import NotFound from './NotFound';
import JayWelcomeBlock from '@/components/guide/editorial/JayWelcomeBlock';
import WelcomeGifts from '@/components/guide/editorial/WelcomeGifts';

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
      {/* Hero - Full screen parallax */}
      <EditorialHero config={guide} />

      {/* Editor's Letter */}
      <EditorLetter welcome={guide.welcome} destinationName={guide.destinationName} />

      <JayWelcomeBlock welcome={guide.welcome} jayVideo={(guide as any).jayVideo ?? null} />

      <WelcomeGifts gifts={guide.gifts ?? {} as any} />

      {/* PHOTO INTERLUDE: After Welcome - Safari Strip */}
      {strips?.safari && strips.safari.length > 0 && (
        <PhotoGalleryStrip images={strips.safari} direction="left" />
      )}

      {/* Image Interlude: Landscapes */}
      {interludes?.afterWelcome && interludes.afterWelcome.length > 0 && (
        <ImageInterlude 
          images={interludes.afterWelcome}
          layout={interludes.afterWelcome.length === 2 ? "duo" : "trio"}
          quote={interludes.afterWelcomeQuote?.text}
          attribution={interludes.afterWelcomeQuote?.attribution}
        />
      )}

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
        <></>
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

      {/* PHOTO STRIP: Beach experiences */}
      {strips?.beach && strips.beach.length > 0 && (
        <PhotoGalleryStrip images={strips.beach} direction="left" />
      )}

      {/* Full Bleed Image: After Photos */}
      {interludes?.afterPhotos && interludes.afterPhotos[0] && (
        <FullBleedImage 
          src={interludes.afterPhotos[0]}
          alt={`${guide.destinationName} landscape`}
          aspectRatio="cinematic"
        />
      )}

      {/* Image Interlude: After Real Talk - Emotional moments */}
      {interludes?.afterRealTalk && interludes.afterRealTalk.length > 0 && (
        <ImageInterlude 
          images={interludes.afterRealTalk}
          layout={interludes.afterRealTalk.length === 2 ? "duo" : "trio"}
          quote={interludes.afterRealTalkQuote?.text}
          attribution={interludes.afterRealTalkQuote?.attribution}
        />
      )}

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
