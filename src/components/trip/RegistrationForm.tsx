import { useEffect } from "react";
import { Check, Clock } from "lucide-react";

interface WebinarConfig {
  scriptUrl: string;
  functionName: string;
  identifier: string;
}

interface RegistrationFormProps {
  hostImage: string;
  hostName: string;
  hostTitle: string;
  headline: string;
  subheadline: string;
  badge: string;
  footerText: string;
  discoverItems?: string[];
  sessionDuration?: string;
  webinar: WebinarConfig;
}

const RegistrationForm = ({ 
  hostImage, 
  hostName,
  hostTitle,
  headline,
  subheadline,
  badge,
  footerText,
  discoverItems,
  sessionDuration,
  webinar,
}: RegistrationFormProps) => {
  useEffect(() => {
    const gn = webinar.functionName;
    const containerId = `${gn}_webinargeek`;

    // Ensure the target container exists (otherwise WebinarGeek may render at the end of <body>)
    const containerEl = document.getElementById(containerId);
    if (!containerEl) return;

    // Clear any previous embed markup before re-init
    containerEl.innerHTML = "";

    // Create/keep the queueing function (matches WebinarGeek snippet behavior)
    const w = window as any;
    w[gn] = w[gn] || function (...args: any[]) {
      (w[gn].q = w[gn].q || []).push(args);
    };

    // Load the external embed script once per function name
    if (!document.getElementById(gn)) {
      const se = document.createElement("script");
      se.id = gn;
      se.async = true;
      se.src = `${webinar.scriptUrl}?t=${new Date().toISOString().slice(0, -9)}`;
      document.head.appendChild(se);
    }

    // Init (queued until the external script is ready)
    w[gn]("init", {
      project: "registration",
      identifier: webinar.identifier,
      shape: "inline",
    });
  }, [webinar]);

  return (
    <div id="register" className="animate-slide-in-right sticky top-24" style={{ animationDelay: "0.4s" }}>
      <div className="bg-card border border-border overflow-hidden">
        <div className="text-center p-5 border-b border-border">
          <h3 className="font-heading text-xl md:text-2xl mb-1">
            {headline}
          </h3>
          <p className="text-muted-foreground text-sm">{subheadline}</p>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border">
            <div
              className="w-12 h-12 rounded-full border-2 border-primary bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url('${hostImage}')` }}
            />
            <div>
              <h4 className="font-heading text-base font-medium">{hostName}</h4>
              <p className="text-xs text-muted-foreground">
                {hostTitle}
              </p>
            </div>
          </div>

          <div className="text-center mb-5">
            <span className="inline-block bg-primary/15 border border-primary/25 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-2">
              {badge}
            </span>
          </div>

          {/* What You'll Discover Section */}
          {discoverItems && discoverItems.length > 0 && (
            <div className="mb-5 p-4 bg-background/50 border border-border">
              <h4 className="font-heading text-sm font-semibold mb-3 text-foreground">
                What You'll Discover:
              </h4>
              <ul className="space-y-2">
                {discoverItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {sessionDuration && (
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{sessionDuration}</span>
                </div>
              )}
            </div>
          )}

          {/* WebinarGeek Form Container - ID must match function name */}
          <div
            id={`${webinar.functionName}_webinargeek`}
            className="webinargeek-embed min-h-[240px]"
          />

          <p className="mt-5 text-xs md:text-sm text-foreground/75 text-center">
            {footerText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
