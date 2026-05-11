import { Download } from 'lucide-react';

interface GiftsConfig {
  cookbook?: string | null;
  passportToFreedom?: string | null;
  dosAndDonts?: string | null;
  childrensBook?: string | null;
}

interface WelcomeGiftsProps {
  gifts: GiftsConfig;
}

const BURGUNDY = '#8B1A1A';

const WelcomeGifts = ({ gifts }: WelcomeGiftsProps) => {
  const items: { name: string; description: string; url: string | null | undefined }[] = [
    {
      name: 'Digital Cookbook',
      description: 'Taste the destination before you arrive',
      url: gifts.cookbook,
    },
    {
      name: 'Passport to Freedom',
      description: "Jay's blueprint for traveling with purpose",
      url: gifts.passportToFreedom,
    },
    {
      name: "Do's and Don'ts Guide",
      description: "Everything they don't tell you before you go",
      url: gifts.dosAndDonts,
    },
    {
      name: "Children's Book Collection",
      description: 'Pass the legacy to the next generation',
      url: gifts.childrensBook,
    },
  ];

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-14 max-w-3xl">
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            style={{ color: BURGUNDY }}
          >
            While You Wait — Start Here
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body">
            Jay put these together for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-card/40 border border-border/40 rounded-sm p-8 md:p-10 flex flex-col justify-between gap-8 transition-colors hover:border-border/70"
            >
              <div>
                <h3
                  className="font-heading text-2xl md:text-3xl mb-3"
                  style={{ color: BURGUNDY }}
                >
                  {item.name}
                </h3>
                <p className="text-foreground/75 font-body leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-white font-medium tracking-wide transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BURGUNDY }}
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 border border-border/40 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeGifts;