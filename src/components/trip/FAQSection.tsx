import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  sectionLabel: string;
  headline: string;
  items: FAQItem[];
}

const FAQSection = ({ sectionLabel, headline, items }: FAQSectionProps) => {
  return (
    <section className="bg-background py-16 md:py-24 px-5 md:px-15">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="text-primary font-medium tracking-widest text-sm mb-4 text-center">
          {sectionLabel}
        </p>
        
        {/* Headline */}
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
          {headline}
        </h2>
        
        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-none overflow-hidden rounded-xl"
            >
              <AccordionTrigger className="bg-primary/70 text-white px-6 py-5 hover:no-underline hover:bg-primary/60 rounded-xl data-[state=open]:rounded-b-none font-semibold text-left text-xl md:text-2xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="bg-primary/20 text-white px-6 py-5 text-lg md:text-xl rounded-b-xl">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
