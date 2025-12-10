import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import content from "@/data/content.json";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Common <span className="text-gradient-tropical">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before your visit
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {content.faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* More Questions CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14092097696">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium btn-press hover:bg-primary/90 transition-colors">
                Call Us
              </button>
            </a>
            <a 
              href="https://www.facebook.com/thenutritionhangout"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 border border-border rounded-lg font-medium btn-press hover:bg-muted transition-colors">
                Message on Facebook
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
