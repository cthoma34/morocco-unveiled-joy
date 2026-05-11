import { useEffect } from 'react';
import { GuideConfig, getDestinationThemeVars, getEditorialPalette } from '@/types/guide-config';
import { 
  EditorialHero,
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
import FunFacts from '@/components/guide/editorial/FunFacts';
import DestinationClock from '@/components/guide/editorial/DestinationClock';
import LanguageGreetings from '@/components/guide/editorial/LanguageGreetings';
import { fireRegistrationWebhooks } from '@/lib/webhooks';

interface GuidePageProps {
  config?: GuideConfig;
}

const GuidePage = ({ config }: GuidePageProps) => {
  if (!config) return <NotFound />;

  const guide = config;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') ?? '';
    const email = params.get('email') ?? '';
    const phone = params.get('phone') ?? '';
    const destination = window.location.pathname.replace(/^\//, '');

    void fireRegistrationWebhooks({
      name,
      email,
      phone,
      destination,
      ghlTag: guide.tags?.ghl ?? `${destination} Info Session`,
      ccTag: guide.tags?.cc ?? `${destination} Info Session`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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

      <JayWelcomeBlock
        welcome={guide.welcome}
        jayVideo={(guide as any).jayVideo ?? null}
        funFacts={guide.funFacts ?? []}
      />

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
        label="Did You Know"
        title={`${guide.destinationName} Isn't Waiting for Someday`}
        subtitle="Neither should you."
      >
        <FunFacts
          funFacts={guide.funFacts ?? []}
          images={(guide.images.strips?.culture ?? guide.images.strips?.safari ?? []).map(
            (img: any) => (typeof img === 'string' ? img : img.src)
          )}
        />
      </PhotoEssaySection>

      {/* Essentials - standalone */}
      <PhotoEssaySection
        label="What You Need to Know"
        title="Before You Arrive"
        subtitle="The essentials, nothing extra"
      >
        <EssentialsGrid basics={guide.basics} slug={guide.slug} />
      </PhotoEssaySection>

      <LanguageGreetings language={guide.culture.language} />

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

      {/* Destination Clock */}
      <DestinationClock
        timeZone={guide.timeZone ?? 'UTC'}
        destinationName={guide.destinationName}
      />

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
