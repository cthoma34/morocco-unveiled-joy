import Navbar from "@/components/morocco/Navbar";
import Footer from "@/components/morocco/Footer";
import {
  HeroSection,
  StorySection,
  FeaturesGrid,
  RegistrationForm,
  GallerySection,
  TestimonialsSection,
  MeetHostSection,
  DestinationsSection,
  FinalCTASection,
  TrustBadges,
  FAQSection,
} from "@/components/trip";
import { TripConfig } from "@/types/trip-config";

interface DestinationPageProps {
  config: TripConfig;
}

const DestinationPage = ({ config }: DestinationPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection 
        backgroundImage={config.images.hero}
        backgroundVideo={config.images.heroVideo}
        tagline={config.tagline}
        headline={config.hero.headline}
        subheadline={config.hero.subheadline}
        description={config.hero.description}
        ctaText={config.hero.ctaText}
        ctaSubtext={config.hero.ctaSubtext}
      />
      
      <TrustBadges />
      
      {/* Two Column Section */}
      <section className="bg-background py-16 md:py-20 px-5 md:px-15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-start">
            {/* Left Column - Content */}
            <div className="lg:w-[70%] lg:pr-6">
              <StorySection {...config.story} />
              <FeaturesGrid {...config.features} />
            </div>
            
            {/* Right Column - Registration Form (sticky) */}
            <div className="lg:w-[30%] lg:sticky lg:top-24 lg:self-start">
              <RegistrationForm 
                hostImage={config.images.host}
                hostName={config.host.name}
                hostTitle={config.host.title}
                headline={config.registration.headline}
                subheadline={config.registration.subheadline}
                badge={config.registration.badge}
                footerText={config.registration.footerText}
                discoverItems={config.registration.discoverItems}
                sessionDuration={config.registration.sessionDuration}
                webinar={config.registration.webinar}
              />
            </div>
          </div>
        </div>
      </section>
      
      <GallerySection {...config.gallery} />
      
      <TestimonialsSection {...config.testimonials} />
      
      <MeetHostSection 
        image={config.images.host}
        name={config.host.name}
        bio={config.host.bio}
        philosophy={config.host.philosophy}
      />
      
      <DestinationsSection {...config.destinations} />
      
      <FAQSection {...config.faq} />
      
      <FinalCTASection 
        backgroundImage={config.images.cta}
        backgroundVideo={config.images.ctaVideo}
        {...config.finalCta}
      />
      
      <Footer />
    </div>
  );
};

export default DestinationPage;
