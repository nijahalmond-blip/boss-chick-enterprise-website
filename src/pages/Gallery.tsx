import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollSection from "@/components/ScrollSection";
import { Button } from "@/components/ui/button";
import { InlineTestimonial, TestimonialStrip } from "@/components/Testimonials";
import { Sparkles, ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import galleryBabyshower from "@/assets/gallery-babyshower.jpg";
import booth360 from "@/assets/360-booth.jpg";
import selfieBooth from "@/assets/selfie-booth.jpg";
import glamBooth from "@/assets/glam-booth.jpg";
import audioGuestbook from "@/assets/audio-guestbook.jpg";
import heroImage from "@/assets/hero-event.jpg";
import eventRedDress from "@/assets/event-red-dress-360.jpg";
import eventRedSuit from "@/assets/event-red-suit-360.jpg";
import eventPropsTable from "@/assets/event-props-table.jpg";
import eventDuo from "@/assets/event-duo-360.jpg";

const categories = ["All", "Weddings", "Birthdays", "Corporate", "Baby Showers"];

type MediaItem = {
  src: string;
  category: string;
  alt: string;
  type?: "image" | "video" | "vimeo";
  poster?: string;
  vimeoId?: string;
};

const images: MediaItem[] = [
  { src: "", vimeoId: "1188258251", category: "Weddings", alt: "Wedding 360 photo booth experience", type: "vimeo", poster: galleryWedding },
  { src: "/videos/360-highlight-reel.mp4", category: "Weddings", alt: "Boss Chick 360 photo booth highlight reel featuring multiple events", type: "video", poster: booth360 },
  { src: eventRedDress, category: "Birthdays", alt: "Guest in red dress on the 360 photo booth platform" },
  { src: eventDuo, category: "Birthdays", alt: "Two guests striking a pose on the 360 photo booth" },
  { src: eventRedSuit, category: "Corporate", alt: "Guest in red suit on the 360 photo booth at an upscale venue" },
  { src: eventPropsTable, category: "Birthdays", alt: "Boss Chick prop table setup with custom signs" },
  { src: galleryWedding, category: "Weddings", alt: "Wedding photo booth event" },
  { src: galleryBirthday, category: "Birthdays", alt: "Birthday celebration with photo booth" },
  { src: galleryCorporate, category: "Corporate", alt: "Corporate event photo booth" },
  { src: galleryBabyshower, category: "Baby Showers", alt: "Baby shower photo booth" },
  { src: booth360, category: "Weddings", alt: "360 photo booth at wedding" },
  { src: selfieBooth, category: "Birthdays", alt: "Selfie booth at birthday party" },
  { src: glamBooth, category: "Corporate", alt: "Glam booth at corporate event" },
  { src: audioGuestbook, category: "Weddings", alt: "Audio guestbook at wedding" },
  { src: heroImage, category: "Birthdays", alt: "Photo booth celebration" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="pt-20">
      <section className="section-padding bg-surface-elevated text-center relative overflow-hidden">
        <Sparkles className="absolute top-10 right-12 text-primary/10 animate-spin-slow" size={32} />
        <div className="absolute bottom-6 left-8 w-2 h-2 rounded-full bg-primary/30 animate-float" />
        <div className="container mx-auto">
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block animate-fade-in">Gallery</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Real Events, <span className="text-gradient-gold">Real Moments</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            See the magic in action. Browse our collection of unforgettable events.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover-lift ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <div
                key={`${active}-${i}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer hover-lift hover-tilt"
                style={{
                  opacity: 0,
                  transform: "scale(0.95)",
                  animation: `scale-in 0.4s ease-out ${i * 0.05}s forwards`,
                }}
                onClick={() => setLightbox(i)}
              >
                {img.type === "video" ? (
                  <>
                    <video
                      src={img.src}
                      poster={img.poster}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full shadow-lg">
                      ▶ Video
                    </div>
                  </>
                ) : img.type === "vimeo" ? (
                  <>
                    <img
                      src={img.poster}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl shadow-primary/40">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary-foreground ml-0.5">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full shadow-lg">
                      ▶ Video
                    </div>
                  </>
                ) : (
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                )}
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollSection>
        <section className="section-padding bg-surface-elevated relative overflow-hidden">
          <Sparkles className="absolute top-8 right-10 text-primary/10 animate-spin-slow" size={36} />
          <Sparkles className="absolute bottom-8 left-10 text-primary/10 animate-spin-slow" size={28} style={{ animationDirection: "reverse" }} />
          <div className="container mx-auto max-w-3xl text-center relative">
            <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block">
              Ready to Book?
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Let's Make Your Event <span className="text-gradient-gold">Unforgettable</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tell us about your event and we'll put together a custom photo booth experience your guests will be talking about for years.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="hover-lift group">
                  Inquire Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="hover-lift">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollSection>

      <InlineTestimonial index={2} direction="left" />

      <TestimonialStrip />

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {filtered[lightbox]?.type === "video" ? (
              <video
                src={filtered[lightbox]?.src}
                poster={filtered[lightbox]?.poster}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[85vh] object-contain rounded-xl animate-scale-in bg-black"
              />
            ) : filtered[lightbox]?.type === "vimeo" ? (
              <div className="w-full aspect-video max-h-[85vh] rounded-xl overflow-hidden animate-scale-in bg-black">
                <iframe
                  src={`https://player.vimeo.com/video/${filtered[lightbox]?.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                  title={filtered[lightbox]?.alt}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <img
                src={filtered[lightbox]?.src}
                alt={filtered[lightbox]?.alt}
                className="w-full h-full object-contain rounded-xl animate-scale-in"
              />
            )}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <X size={18} />
            </button>
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                {filtered[lightbox]?.category}
              </span>
            </div>
            {filtered.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length); }}
                  className="w-10 h-10 rounded-full bg-card/80 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 pointer-events-auto hover:scale-110"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length); }}
                  className="w-10 h-10 rounded-full bg-card/80 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 pointer-events-auto hover:scale-110"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
