import { Check } from "lucide-react";

const InvestmentSection = () => {
  const bonuses = [
    { name: "All Meals Included", value: "$700 value" },
    { name: "ATV + Camel Experience", value: "$250 value" },
    { name: "Moroccan Digital Cookbook", value: "$60 value" },
    { name: "International Travel Guide", value: "$50 value" },
  ];

  return (
    <section className="py-16 md:py-20 px-5 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <span className="block text-center text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4">
          YOUR INVESTMENT
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-center mb-8">
          Everything You Need for Morocco
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pricing Card */}
          <div className="bg-card border border-border p-6 md:p-8">
            <h3 className="font-heading text-xl mb-4">Secure Your Spot</h3>
            <div className="mb-4">
              <span className="text-4xl font-heading text-primary">$199</span>
              <span className="text-muted-foreground ml-2">deposit</span>
            </div>
            <p className="text-foreground/80 mb-4">
              Payment plans available through Sezzle
            </p>
            <p className="text-sm text-muted-foreground">
              Your deposit guarantees your spot and is fully applied to your trip total.
            </p>
          </div>

          {/* Bonuses Card */}
          <div className="bg-card border border-border p-6 md:p-8">
            <h3 className="font-heading text-xl mb-2">Exclusive Bonuses</h3>
            <p className="text-primary font-semibold mb-4">$1,060 in added value</p>
            <ul className="space-y-3">
              {bonuses.map((bonus, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground">{bonus.name}</span>
                    <span className="text-muted-foreground text-sm ml-2">({bonus.value})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
