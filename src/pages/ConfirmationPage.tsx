import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  ConfirmDestinationConfig,
  getConfirmDestination,
} from "@/config/destinations-confirm";
import { fireAllWebhooks } from "@/lib/webhooks";

const MIT_LOGO =
  "https://storage.googleapis.com/msgsndr/KSmohoW4bdBXMkPu9h7U/media/mit-logo.png";

const COLORS = {
  bg: "#0a0a0a",
  burgundy: "#8B1A1A",
  text: "#F5F0E8",
  muted: "#8a8a8a",
};

const fontHeading = { fontFamily: "'Playfair Display', serif" };
const fontBody = { fontFamily: "'Inter', sans-serif" };

function fireWebhooks(config: ConfirmDestinationConfig, params: Record<string, string>) {
  void fireAllWebhooks({
    name: params.name,
    email: params.email,
    phone: params.phone,
    destination: config.slug,
    source: "confirmation-page",
    ghlTag: config.tags.ghl,
    ccTag: config.tags.constantContact,
  });
}

function useLiveClock(timeZone: string) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now);
  } catch {
    return now.toLocaleTimeString();
  }
}

function useExchangeRate(currencyCode: string) {
  const [rate, setRate] = useState<number | null>(null);
  useEffect(() => {
    if (!currencyCode || currencyCode === "USD") return;
    let cancelled = false;
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const r = data?.rates?.[currencyCode];
        if (typeof r === "number") setRate(r);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [currencyCode]);
  return rate;
}

const Btn = ({
  children,
  onClick,
  variant = "primary",
  disabled,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "muted";
  disabled?: boolean;
  className?: string;
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wider uppercase transition-all duration-300";
  const styles =
    variant === "primary"
      ? "text-white hover:opacity-90"
      : variant === "muted"
      ? "border border-white/20 text-white/60 cursor-not-allowed"
      : "border border-white/40 text-white hover:bg-white/10";
  const bg = variant === "primary" ? { backgroundColor: COLORS.burgundy } : undefined;
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${base} ${styles} ${className}`}
      style={{ ...fontBody, ...bg }}
    >
      {children}
    </button>
  );
};

const openLink = (url: string) => {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
};

const PhotoStrip = ({ images }: { images: string[] }) => {
  const list = [...images, ...images];
  return (
    <section className="w-full overflow-hidden py-10" style={{ backgroundColor: COLORS.bg }}>
      <div className="relative group">
        <div
          className="flex gap-6 animate-[scroll_45s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {list.map((src, i) => (
            <div
              key={i}
              className="relative h-72 w-[28rem] flex-shrink-0 overflow-hidden rounded-sm"
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

const GiftCard = ({
  title,
  desc,
  url,
}: {
  title: string;
  desc: string;
  url: string | null;
}) => (
  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-7 flex flex-col">
    <div
      className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
      style={{ backgroundColor: COLORS.burgundy }}
    >
      <span className="text-xl">★</span>
    </div>
    <h3 className="text-2xl mb-2" style={{ ...fontHeading, color: COLORS.text }}>
      {title}
    </h3>
    <p className="text-sm mb-6 flex-1" style={{ ...fontBody, color: COLORS.muted }}>
      {desc}
    </p>
    {url ? (
      <Btn onClick={() => openLink(url)}>Download</Btn>
    ) : (
      <Btn variant="muted" disabled>
        Coming Soon
      </Btn>
    )}
  </div>
);

const EssentialCard = ({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: React.ReactNode;
}) => (
  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
    <div
      className="text-xs uppercase tracking-widest mb-3"
      style={{ ...fontBody, color: COLORS.burgundy }}
    >
      {label}
    </div>
    <div className="text-base leading-relaxed" style={{ ...fontBody, color: COLORS.text }}>
      {value}
    </div>
    {sub && (
      <div className="mt-3 text-xs" style={{ ...fontBody, color: COLORS.muted }}>
        {sub}
      </div>
    )}
  </div>
);

export default function ConfirmationPage() {
  const { destination } = useParams<{ destination: string }>();
  const [searchParams] = useSearchParams();
  const config = useMemo(() => getConfirmDestination(destination), [destination]);

  useEffect(() => {
    const params = {
      name: searchParams.get("name") ?? "",
      email: searchParams.get("email") ?? "",
      phone: searchParams.get("phone") ?? "",
    };
    fireWebhooks(config, params);
  }, [config, searchParams]);

  const clock = useLiveClock(config.timeZone);
  const rate = useExchangeRate(config.essentials.currencyCode);

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.text, ...fontBody }} className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center">
          <img src={MIT_LOGO} alt="Maximum Impact Travel" className="h-10 w-auto" />
        </div>
      </header>

      {/* 2. Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${config.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 md:py-36 text-center">
          <div
            className="text-xs uppercase tracking-[0.3em] mb-6"
            style={{ color: COLORS.muted }}
          >
            Maximum Impact Travel
          </div>
          <h1
            className="text-5xl md:text-7xl mb-6 leading-tight"
            style={{ ...fontHeading, color: COLORS.text }}
          >
            Your Spot Is Secure
          </h1>
          <div
            className="text-xl md:text-2xl mb-3"
            style={{ ...fontHeading, color: COLORS.text }}
          >
            {config.eventLabel}
          </div>
          <p className="text-base md:text-lg mb-10" style={{ color: COLORS.muted }}>
            {config.confirmationLine}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Btn onClick={() => openLink(config.calendarLink)} disabled={!config.calendarLink}>
              Add to Calendar
            </Btn>
            <Btn variant="muted" disabled>
              Not Live Yet
            </Btn>
          </div>
        </div>
      </section>

      {/* 3. Jay's Welcome */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            {config.jayVideo ? (
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src={config.jayVideo}
                  title="Jay's Welcome"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={config.jayPhoto}
                  alt="Jay Cameron"
                  className="w-full h-[28rem] object-cover"
                />
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full"
                  style={{ backgroundColor: "rgba(0,0,0,0.6)", color: COLORS.text }}
                >
                  Video Coming Soon
                </div>
              </div>
            )}
          </div>
          <div>
            {config.welcomeLetter.map((line, i) => (
              <p
                key={i}
                className={`mb-5 leading-relaxed ${
                  i === 0 ? "text-2xl" : "text-base"
                }`}
                style={{
                  ...(i === 0 ? fontHeading : fontBody),
                  color: i === 0 ? COLORS.text : COLORS.muted,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Photo strip */}
      <PhotoStrip images={config.images.strip} />

      {/* 5. Session access */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl mb-4" style={{ ...fontHeading, color: COLORS.text }}>
          When It's Time, Come Back Here
        </h2>
        <p className="mb-10" style={{ color: COLORS.muted }}>
          Your session link lives right here. No hunting through emails.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">
          <Btn
            onClick={() => openLink(config.watchLink)}
            disabled={!config.watchLink}
            className="text-base px-10 py-4"
          >
            Watch The Session Live
          </Btn>
          <p className="mt-6 text-xs" style={{ color: COLORS.muted }}>
            <span
              onClick={() => openLink(config.calendarLink)}
              className={config.calendarLink ? "cursor-pointer underline underline-offset-4" : ""}
            >
              Add it to your calendar so you don't miss it
            </span>
          </p>
        </div>
      </section>

      {/* 6. Welcome gifts */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ ...fontHeading, color: COLORS.text }}>
            While You Wait — Start Here
          </h2>
          <p style={{ color: COLORS.muted }}>
            Jay put these together for you. No waiting required.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <GiftCard
            title="Digital Cookbook"
            desc="Taste the destination before you arrive"
            url={config.gifts.cookbook}
          />
          <GiftCard
            title="Passport to Freedom"
            desc="Jay's blueprint for traveling with purpose"
            url={config.gifts.passportToFreedom}
          />
          <GiftCard
            title="Do's & Don'ts Guide"
            desc="Everything they don't tell you before you go"
            url={config.gifts.dosAndDonts}
          />
          <GiftCard
            title="Children's Book Collection"
            desc="Pass the legacy to the next generation"
            url={config.gifts.childrensBook}
          />
        </div>
      </section>

      {/* 7. Quick essentials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className="text-4xl md:text-5xl text-center mb-14"
          style={{ ...fontHeading, color: COLORS.text }}
        >
          What You Need to Know
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <EssentialCard label="Visa" value={config.essentials.visa} />
          <EssentialCard label="Passport" value={config.essentials.passport} />
          <EssentialCard label="Vaccines" value={config.essentials.vaccines} />
          <EssentialCard
            label="Currency"
            value={config.essentials.currency}
            sub={
              rate ? (
                <>
                  1 USD = {rate.toFixed(2)} {config.essentials.currencyCode}
                  <span className="ml-2 opacity-60">live rate</span>
                </>
              ) : null
            }
          />
        </div>
      </section>

      {/* 8. Fun facts */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ ...fontHeading, color: COLORS.text }}>
            {config.funFactsHeading}
          </h2>
          <p style={{ color: COLORS.muted }}>{config.funFactsSubheading}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {config.funFacts.map((fact, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg min-h-[18rem] p-10 flex items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${
                  config.images.strip[i % config.images.strip.length] ?? config.heroImage
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p
                className="text-2xl md:text-3xl leading-snug"
                style={{ ...fontHeading, color: COLORS.text }}
              >
                "{fact}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Destination clock */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: COLORS.muted }}>
          Current Time in {config.name}
        </div>
        <div
          className="text-6xl md:text-7xl tabular-nums mb-6"
          style={{ ...fontHeading, color: COLORS.text }}
        >
          {clock}
        </div>
        <p className="italic" style={{ color: COLORS.muted }}>
          Your journey starts the moment you say yes.
        </p>
      </section>

      {/* 10. Book CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${config.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h2
            className="text-4xl md:text-6xl mb-5"
            style={{ ...fontHeading, color: COLORS.text }}
          >
            Ready to Make It Official?
          </h2>
          <p className="text-lg mb-10" style={{ color: COLORS.muted }}>
            Your $199 deposit secures your spot.
          </p>
          <Btn
            onClick={() => openLink(config.bookingLink)}
            disabled={!config.bookingLink}
            className="text-base px-10 py-4"
          >
            Book Your Trip
          </Btn>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-3">
          <img src={MIT_LOGO} alt="Maximum Impact Travel" className="h-8 w-auto opacity-80" />
          <div className="text-xs" style={{ color: COLORS.muted }}>
            © {new Date().getFullYear()} Maximum Impact Travel
          </div>
          <div className="text-xs" style={{ color: COLORS.muted }}>
            info@maximumimpacttravel.com
          </div>
        </div>
      </footer>
    </div>
  );
}