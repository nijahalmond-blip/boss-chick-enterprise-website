import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ScrollSection from "@/components/ScrollSection";
import { InlineTestimonial, FloatingTestimonialBadge } from "@/components/Testimonials";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import booth360 from "@/assets/360-booth.jpg";
import booth360_2 from "@/assets/360-booth-2.jpg";
import booth360_3 from "@/assets/360-booth-3.jpg";
import booth360_4 from "@/assets/360-booth-4.jpg";
import selfieBooth from "@/assets/selfie-booth.jpg";
import audioGuestbook from "@/assets/audio-guestbook.jpg";
import glamBooth from "@/assets/glam-booth.jpg";

const booth360Gallery = [
  { src: booth360, label: "Red Carpet Glam" },
  { src: booth360_2, label: "Boss Backdrop" },
  { src: booth360_3, label: "VIP Suite Vibes" },
  { src: booth360_4, label: "Squad Goals" },
];

const services = [
  {
    title: "360 Photo Booth",
    tagline: "The showstopper your guests won't stop sharing.",
    description: "Step onto the platform and let the camera orbit around you, capturing a cinematic slow-motion video from every angle. Add music, overlays, and effects for a social-ready clip that goes viral.",
    features: ["Cinematic slow-mo video", "Custom overlays & music", "Instant digital sharing", "Red carpet setup available", "On-site attendant included"],
    image: booth360,
    testimonialIndex: 0,
  },
  {
    title: "Selfie Photo Booth",
    tagline: "Classic fun with a modern, polished twist.",
    description: "A sleek interactive kiosk that lets guests take stunning photos with custom branded overlays. Instant prints and digital sharing keep the party going.",
    features: ["Touchscreen interface", "Branded photo overlays", "Instant print options", "Digital sharing via text/email", "Fun props included"],
    image: selfieBooth,
    testimonialIndex: 1,
  },
  {
    title: "Audio Guestbook",
    tagline: "Hear the love, not just see it.",
    description: "Guests pick up a vintage-style phone, leave a heartfelt voice message, and you keep those cherished recordings forever. Perfect for weddings and milestone celebrations.",
    features: ["Vintage telephone design", "High-quality audio recording", "Personalized greeting", "Digital file delivery", "Unique keepsake"],
    image: audioGuestbook,
    testimonialIndex: 4,
  },
  {
    title: "Glam Photo Booth",
    tagline: "Red carpet energy at your event.",
    description: "Hollywood-style lighting, a glamorous backdrop, and premium props make every photo feel like a magazine cover. Your guests will feel like stars.",
    features: ["Hollywood mirror lighting", "Premium backdrops", "Curated prop collection", "High-resolution photos", "On-site attendant"],
    image: glamBooth,
    testimonialIndex: 6,
  },
];

const addOns = [
  "Custom Branded Overlays",
  "Premium Backdrops",
  "Extended Hours ($175/hr)",
  "Enclosure Upgrades",
  "Red Carpet Setup",
  "On-Site Print Station",
];

const Booth360Gallery = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover-tilt bg-black">
        <img
          key={active}
          src={booth360Gallery[active].src}
          alt={`360 Photo Booth — ${booth360Gallery[active].label}`}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 animate-fade-in"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-3">
        {booth360Gallery.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`View ${img.label}`}
            aria-pressed={active === idx}
            className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
              active === idx
                ? "border-primary glow-primary scale-[1.03]"
                : "border-border hover:border-primary/50 opacity-70 hover:opacity-100"
            }`}
          >
            <img src={img.src} alt={img.label} loading="lazy" className="w-full h-16 sm:h-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-surface-elevated text-center relative overflow-hidden">
        <Sparkles className="absolute top-12 right-8 text-primary/10 animate-spin-slow" size={36} />
        <Sparkles className="absolute bottom-8 left-10 text-primary/10 animate-spin-slow" size={24} style={{ animationDirection: "reverse" }} />
        <div className="container mx-auto">
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block animate-fade-in">Our Services</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Setting the Scene for{" "}
            <span className="text-gradient-gold">Unforgettable Moments</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Whether you want glam, nostalgic, interactive, or full-on show-stopping energy, we've got a photobooth experience to match your event.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto space-y-12">
          {services.map((service, i) => (
            <div key={i}>
              <ScrollSection direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    {i === 0 ? (
                      <Booth360Gallery />
                    ) : (
                      <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover-tilt">
                        <img src={service.image} alt={service.title} loading="lazy" width={800} height={800} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    )}
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                    <p className="text-primary font-semibold mb-4">{service.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 group/item">
                          <Check size={18} className="text-primary shrink-0 group-hover/item:scale-125 group-hover/item:rotate-12 transition-transform duration-300" />
                          <span className="group-hover/item:text-primary group-hover/item:translate-x-1 transition-all duration-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="default" size="lg" className="hover-lift glow-primary group">
                        Get a Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollSection>
              {i < services.length - 1 && (
                <InlineTestimonial index={service.testimonialIndex} direction={i % 2 === 0 ? "right" : "left"} />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface-elevated relative">
        <FloatingTestimonialBadge index={3} className="top-16 right-8 z-10" />
        <div className="container mx-auto">
          <ScrollSection>
            <SectionHeading label="Enhance Your Experience" title="Popular Add-Ons" description="Take your event to the next level with our premium add-ons." />
          </ScrollSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {addOns.map((addon, i) => (
              <ScrollSection key={i} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-card rounded-xl p-5 text-center border border-border hover:border-primary/30 transition-all duration-300 hover-lift hover-tilt cursor-default group">
                  <p className="font-semibold group-hover:text-primary transition-colors">{addon}</p>
                </div>
              </ScrollSection>
            ))}
          </div>
          <ScrollSection delay={300}>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="default" size="lg" className="hover-lift glow-primary group">
                  Book Your Experience <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
