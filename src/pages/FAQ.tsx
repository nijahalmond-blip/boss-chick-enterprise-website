import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";
import { InlineTestimonial } from "@/components/Testimonials";

const faqs = [
  {
    category: "Booking",
    items: [
      { q: "How do I book Boss Chick Enterprises?", a: "Simply fill out our contact form or reach out via email or phone. We'll discuss your event details, recommend the best service, and send over a custom quote. A 25% non-refundable retainer secures your date." },
      { q: "How far in advance should I book?", a: "We recommend booking at least 4–6 weeks in advance, especially for peak season (spring and summer). Popular dates fill up fast!" },
    ],
  },
  {
    category: "Travel & Setup",
    items: [
      { q: "How far do you travel?", a: "We primarily serve the DMV area. Events located more than 30 miles from Fort Washington, Maryland may include an additional travel fee." },
      { q: "How early do you arrive for setup?", a: "We typically arrive 60 to 90 minutes before your event begins to make sure everything is fully set up and running smoothly. Earlier arrival or service pauses can be arranged for an additional fee." },
      { q: "How much space do you need?", a: "Space requirements vary by booth type. Generally, we need a minimum 10x10 ft area with access to a power outlet. We'll confirm exact requirements based on your selected service." },
    ],
  },
  {
    category: "Payments & Policies",
    items: [
      { q: "What is your cancellation policy?", a: "A non-refundable 25% retainer is required to reserve your event date. Final payment is due 15 days before the event. All payments are final and non-refundable unless otherwise stated in your agreement." },
      { q: "Can I reschedule my event?", a: "Yes, with at least 30 days' notice and based on availability. A $100 rescheduling fee applies. If the new date is unavailable, the original retainer remains non-refundable." },
      { q: "What if my event runs over?", a: "Additional booth time may be added at $175 per hour, based on availability. Payment for extra time must be arranged before the extension begins." },
    ],
  },
  {
    category: "Insurance & Liability",
    items: [
      { q: "Are you insured?", a: "Yes. Boss Chick Enterprises carries liability insurance for our services. Any damage caused to equipment during the event is the responsibility of the client, as outlined in our contract." },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-surface-elevated text-center relative overflow-hidden">
        <Sparkles className="absolute top-10 left-8 text-primary/10 animate-spin-slow" size={28} />
        <div className="absolute bottom-8 right-10 w-2 h-2 rounded-full bg-primary/20 animate-float" />
        <div className="container mx-auto">
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block animate-fade-in">FAQ</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Got questions? We've got answers. If you don't see what you're looking for, reach out and we'll be happy to help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          {faqs.map((group, i) => (
            <div key={i}>
              <ScrollSection delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="mb-10">
                  <h2 className="font-heading text-2xl font-bold mb-4 text-primary">{group.category}</h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {group.items.map((faq, j) => (
                      <AccordionItem key={j} value={`${i}-${j}`} className="bg-card rounded-xl border border-border px-6 hover:border-primary/30 transition-all duration-300 hover-lift">
                        <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 hover:text-primary transition-colors">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollSection>
              {i === 1 && <InlineTestimonial index={3} direction="right" />}
            </div>
          ))}

          <ScrollSection delay={200} direction="scale">
            <div className="text-center mt-12 p-10 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover-lift">
              <h3 className="font-heading text-2xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">We're here to help. Reach out and let's talk about your event.</p>
              <Link to="/contact">
                <Button variant="default" size="lg" className="hover-lift glow-primary group">
                  Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
