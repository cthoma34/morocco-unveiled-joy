import { GuideConfig } from '@/types/guide-config';

interface JayWelcomeBlockProps {
  welcome: GuideConfig['welcome'];
  jayVideo: string | null;
  funFacts?: string[];
}

function getEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace('www.', '');

    // YouTube
    if (host === 'youtu.be') {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host.endsWith('youtube.com')) {
      if (u.pathname === '/watch') {
        const id = u.searchParams.get('v');
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      if (u.pathname.startsWith('/embed/') || u.pathname.startsWith('/shorts/')) {
        const id = u.pathname.split('/')[2];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
    }

    // Vimeo
    if (host.endsWith('vimeo.com')) {
      const id = u.pathname.split('/').filter(Boolean)[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }

    return url;
  } catch {
    return null;
  }
}

const JayWelcomeBlock = ({ welcome, jayVideo, funFacts = [] }: JayWelcomeBlockProps) => {
  const embedUrl = jayVideo ? getEmbedUrl(jayVideo) : null;
  const bullets = funFacts.slice(0, 6);

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Media */}
          <div className="relative w-full">
            {embedUrl ? (
              <div className="relative w-full overflow-hidden rounded-sm shadow-2xl" style={{ aspectRatio: '16 / 9' }}>
                <iframe
                  src={embedUrl}
                  title="A welcome from Jay"
                  className="absolute inset-0 w-full h-full"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative w-full overflow-hidden rounded-sm shadow-2xl" style={{ aspectRatio: '4 / 5' }}>
                {welcome.hostImage && (
                  <img
                    src={welcome.hostImage}
                    alt={welcome.signature}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border/30">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/70 font-medium">
                    Video Coming Soon
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Welcome Letter */}
          <div className="text-foreground">
            <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-[hsl(var(--dest-primary))] mb-8 italic">
              {welcome.greeting}
            </p>

            <div className="space-y-6 text-foreground/85 font-body text-lg leading-relaxed">
              {welcome.message.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-heading text-2xl text-foreground italic">
                {welcome.signature}
              </p>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">
                {welcome.signatureTitle}
              </p>
            </div>

            {bullets.length > 0 && (
              <div className="mt-12 pt-10 border-t border-border/40">
                <div className="mb-5 flex items-center gap-3">
                  <span className="block h-px w-8 bg-[hsl(var(--dest-primary))]" />
                  <span className="text-[11px] tracking-[0.25em] uppercase text-[hsl(var(--dest-primary))] font-medium">
                    A Few Things You Should Know
                  </span>
                </div>
                <ul className="space-y-3 font-body text-base md:text-lg leading-relaxed text-foreground/85">
                  {bullets.map((fact, i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--dest-primary))]" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JayWelcomeBlock;