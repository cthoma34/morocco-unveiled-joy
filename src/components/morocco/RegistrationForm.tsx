import { useEffect } from "react";

interface RegistrationFormProps {
  hostImage: string;
}

const RegistrationForm = ({ hostImage }: RegistrationFormProps) => {
  useEffect(() => {
    // Load WebinarGeek script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,stn,sa,gn,se,fse){w[gn]=w[gn]||function(){(w[gn].q = w[gn].q||[]).push(arguments)};
      se=d.createElement(stn);fse=d.getElementsByTagName(stn)[0];se.id=gn;se.async=1;
      se.src=sa+"?t="+new Date().toISOString().slice(0, -9);fse.parentNode.insertBefore(se, fse);
      })(window, document, "script", "https://malong.webinargeek.com/malong.embed.js", "mw_E52w1XEhp93");
      mw_E52w1XEhp93("init", {
          project: "registration",
          identifier: "fee64b04-cd30-49df-b138-84999bab7af1",
          shape: "inline"
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="register" className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
      <div className="bg-card border border-border overflow-hidden">
        <div className="text-center p-5 border-b border-border">
          <h3 className="font-heading text-xl md:text-2xl mb-1">
            Join the Free Morocco Experience Reveal
          </h3>
          <p className="text-muted-foreground text-sm">Live Session with Jay Cameron</p>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border">
            <div
              className="w-12 h-12 rounded-full border-2 border-primary bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url('${hostImage}')` }}
            />
            <div>
              <h4 className="font-heading text-base font-medium">Jay Cameron</h4>
              <p className="text-xs text-muted-foreground">
                Founder, Maximum Impact Travel
              </p>
            </div>
          </div>

          <div className="text-center mb-5">
            <span className="inline-block bg-primary/15 border border-primary/25 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-2">
              100% FREE
            </span>
          </div>

          {/* WebinarGeek Form Container */}
          <div id="mw_E52w1XEhp93_webinargeek" className="min-h-[200px]" />

          <p className="mt-5 text-xs md:text-sm text-foreground/75 text-center">
            Discover what's waiting for you in Morocco. Next session fills fast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
