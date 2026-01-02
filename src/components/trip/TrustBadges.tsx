import { Star, Users, CreditCard, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { processLogoForDarkBackground } from "@/lib/removeWhiteBackground";

import bmwkLogo from "@/assets/logos/bmwk-enterprise.png";
import wusa9Logo from "@/assets/logos/wusa9.png";
import wpgcLogo from "@/assets/logos/wpgc.png";
import blackEnterpriseLogo from "@/assets/logos/black-enterprise.png";
import whurLogo from "@/assets/logos/whur.png";
import abc7Logo from "@/assets/logos/abc7.png";
import jamzLogo from "@/assets/logos/103jamz.png";
import msnLogo from "@/assets/logos/msn.png";

const logoSources = [
  { src: bmwkLogo, alt: "BMWK Enterprise" },
  { src: wusa9Logo, alt: "WUSA 9" },
  { src: wpgcLogo, alt: "WPGC 95.5 FM" },
  { src: blackEnterpriseLogo, alt: "Black Enterprise" },
  { src: whurLogo, alt: "WHUR 96.3" },
  { src: abc7Logo, alt: "ABC 7 News" },
  { src: jamzLogo, alt: "103 JAMZ" },
  { src: msnLogo, alt: "MSN" },
];

const TrustBadges = () => {
  const [processedLogos, setProcessedLogos] = useState<{ src: string; alt: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processLogos = async () => {
      try {
        const processed = await Promise.all(
          logoSources.map(async (logo) => {
            const transparentSrc = await processLogoForDarkBackground(logo.src, 230);
            return { src: transparentSrc, alt: logo.alt };
          })
        );
        setProcessedLogos(processed);
      } catch (error) {
        console.error("Error processing logos:", error);
        // Fallback to original logos if processing fails
        setProcessedLogos(logoSources);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogos();
  }, []);

  const badges = [
    {
      icon: Users,
      text: "2,500+ Travelers Since 2019",
    },
    {
      icon: Star,
      text: "Google Reviews: 4.9/5 Average",
    },
    {
      icon: CreditCard,
      text: "$199 Secures Your Spot",
    },
    {
      icon: Calendar,
      text: "Payment Plans Available",
    },
  ];

  const logos = processedLogos.length > 0 ? processedLogos : logoSources;

  return (
    <div className="bg-card/50 border border-border py-8 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Big scrolling text - opposite direction */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee-reverse" style={{ width: 'max-content' }}>
            {[...Array(4)].map((_, i) => (
              <span 
                key={i} 
                className="text-sm md:text-base font-body uppercase tracking-[3px] text-primary/80 whitespace-nowrap px-12"
              >
                Maximum Impact Travel. Serving over 2,500 travelers since 2019.
              </span>
            ))}
          </div>
        </div>

        {/* As Seen On Marquee */}
        <div className="pt-6">
          <p className="text-center text-xs font-semibold tracking-[3px] uppercase text-muted-foreground mb-6">
            AS SEEN ON
          </p>
          <div className="overflow-hidden relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling track */}
            <div 
              className={`flex items-center gap-16 ${isProcessing ? '' : 'animate-marquee'}`}
              style={{
                width: 'max-content',
              }}
            >
              {/* First set */}
              {logos.map((logo, index) => (
                <img 
                  key={`a-${index}`}
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-14 md:h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <img 
                  key={`b-${index}`}
                  src={logo.src} 
                  alt=""
                  aria-hidden="true"
                  className="h-14 md:h-16 w-auto opacity-90"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
