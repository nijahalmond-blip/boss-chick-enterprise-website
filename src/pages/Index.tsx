import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ScrollSection from "@/components/ScrollSection";
import { useCountUp } from "@/hooks/useCountUp";
import { InlineTestimonial, FloatingTestimonialBadge, TestimonialStrip, TestimonialGrid } from "@/components/Testimonials";
import { Star, ArrowRight, Sparkles, ShieldCheck, Award, Clock4, HeartHandshake, BadgeCheck, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-event-v2.jpg";
import booth360 from "@/assets/360-booth.jpg";
import selfieBooth from "@/assets/selfie-booth.jpg";
import audioGuestbook from "@/assets/audio-guestbook.jpg";
import glamBooth from "@/assets/glam-booth.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import dprLogo from "@/assets/dpr-logo.png";
import cafyLogo from "@/assets/cafy-logo.png";
import seiuLogo from "@/assets/seiu-logo.png";
import givingBackPoster from "@/assets/giving-back-poster.jpg";
import promoPoster from "@/assets/promo-360-poster.jpg";
import logo from "@/assets/logo.png";

const services = [
  { title: "360 Photo Booth", description: "Step onto the platform and let the camera spin around you for a cinematic slow-mo video your guests will share everywhere.", image: booth360 },
  { title: "Selfie Photo Booth", description: "A sleek, interactive kiosk with custom overlays, instant prints, and digital sharing that keeps your guests entertained all night.", image: selfieBooth },
  { title: "Audio Guestbook", description: "Guests pick up the vintage phone, leave a heartfelt voice message, and you keep those memories forever.", image: audioGuestbook },
  { title: "Glam Photo Booth", description: "Hollywood-style setup with premium lighting, props, and a glamorous backdrop that makes every photo feel like a magazine cover.", image: glamBooth },
];

const Index = () => {
  const eventsCounter = useCountUp(200, 2000);
  const guestsCounter = useCountUp(10500, 2500);
  const yearsCounter = useCountUp(4, 1500);
  const ratingsCounter = useCountUp(5, 1500);

  const featuredRef = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [promoPlaying, setPromoPlaying] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const handleMouse = (e: MouseEvent) => {
      const el = featuredRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / rect.width;
      const ny = (e.clientY - cy) / rect.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setMouse({ x: nx, y: ny }));
    };
    const handleScroll = () => {
      const el = featuredRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(Math.max(0, Math.min(1, progress))));
    };
    handleScroll();
    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Boss Chick Enterprises photo booth event" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/40 animate-float" />
        <div className="absolute top-40 right-16 w-3 h-3 rounded-full bg-primary/20 animate-float-delayed" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 rounded-full bg-primary/30 animate-float" />
        <Sparkles className="absolute top-32 right-10 text-primary/15 animate-spin-slow" size={40} />
        <Sparkles className="absolute bottom-48 left-8 text-primary/10 animate-spin-slow" size={28} style={{ animationDirection: "reverse" }} />

        <FloatingTestimonialBadge index={0} className="bottom-32 right-8 z-20" />
        <FloatingTestimonialBadge index={4} className="top-40 left-6 z-20" />

        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="flex flex-col items-center gap-4 mb-6 animate-fade-in">
            <img
              src={logo}
              alt="Boss Chick Enterprises LLC — premium 360, selfie, glam, and audio guestbook photobooth rentals serving the DMV"
              className="h-20 md:h-28 w-auto drop-shadow-[0_4px_20px_hsl(var(--primary)/0.4)] hover:scale-105 hover:rotate-3 transition-transform duration-500 cursor-pointer"
            />
            <div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold leading-tight">
                Boss Chick <span className="text-gradient-gold">Enterprises</span>
                <span className="text-primary text-lg md:text-xl font-semibold tracking-widest ml-2">LLC</span>
              </h2>
              <p className="text-primary font-body font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mt-3">
                The Queens of Captured Moments
              </p>
            </div>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto animate-fade-in-up">
            Bold, Unforgettable{" "}
            <span className="text-gradient-gold">Photobooth Experiences</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            From 360 booths to selfie stations and audio guestbooks, we turn ordinary events into iconic memories with style, personality, and a whole lot of photo magic.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="hover-lift glow-primary cta-breathe hover-sheen group">
                Book Your Experience
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl" className="hover-lift hover-sheen">View Our Services</Button>
            </Link>
          </div>
          <div className="mt-10 animate-fade-in flex flex-col items-center gap-4" style={{ animationDelay: "0.6s" }}>
            <div className="flex flex-wrap justify-center gap-3">
              {["Weddings", "Birthdays", "Corporate", "Baby Showers", "Graduations"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary/10 hover:border-primary/60 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-2 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm md:text-base font-bold uppercase tracking-[0.2em] animate-pulse-glow">
              📍 Serving the DMV Area
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients — interactive marquee */}
      <ScrollSection>
        <section
          ref={featuredRef as any}
          className="relative py-12 md:py-16 bg-background overflow-hidden border-y border-primary/10"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 opacity-80 transition-transform duration-300 ease-out will-change-transform"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 40%, hsl(var(--primary) / 0.12), transparent 60%), radial-gradient(ellipse at 70% 60%, hsl(var(--accent) / 0.10), transparent 60%)",
                transform: `translate3d(${mouse.x * -12}px, ${mouse.y * -8 + (scrollY - 0.5) * 30}px, 0)`,
              }}
            />
            <div
              className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl will-change-transform"
              style={{
                transform: `translate3d(calc(-50% + ${mouse.x * 30}px), calc(-50% + ${mouse.y * 20 + (scrollY - 0.5) * 60}px), 0)`,
                transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            <div
              className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl will-change-transform"
              style={{
                transform: `translate3d(calc(50% + ${mouse.x * -40}px), calc(-50% + ${mouse.y * -25 + (scrollY - 0.5) * -80}px), 0)`,
                transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                transform: `translate3d(${mouse.x * 50}px, ${mouse.y * 30 + (scrollY - 0.5) * 100}px, 0)`,
                transition: "transform 200ms ease-out",
              }}
            >
              <Sparkles className="absolute top-6 left-8 text-primary/25" size={24} />
              <Sparkles className="absolute bottom-6 right-8 text-accent/30" size={20} />
              <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-accent/40" />
            </div>
          </div>

          <div className="relative text-center mb-8">
            <p className="text-primary font-body text-xs font-semibold uppercase tracking-[0.3em]">
              <span className="inline-block w-8 h-px bg-primary/40 align-middle mr-3" />
              Trusted By
              <span className="inline-block w-8 h-px bg-primary/40 align-middle ml-3" />
            </p>
          </div>

          <div
            className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          >
            <div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24 animate-marquee-slow group-hover:[animation-play-state:paused]">
              {[
                { src: dprLogo, alt: "DC Department of Parks and Recreation", h: "h-16 md:h-20" },
                { src: cafyLogo, alt: "CAFY", h: "h-12 md:h-14" },
                { src: seiuLogo, alt: "SEIU Local 722", h: "h-16 md:h-20" },
              ].concat([
                { src: dprLogo, alt: "DC Department of Parks and Recreation", h: "h-16 md:h-20" },
                { src: cafyLogo, alt: "CAFY", h: "h-12 md:h-14" },
                { src: seiuLogo, alt: "SEIU Local 722", h: "h-16 md:h-20" },
              ]).map((logo, i) => (
                <div key={i} className="relative shrink-0 group/logo cursor-pointer">
                  <div className="absolute inset-0 -m-4 rounded-2xl bg-primary/0 group-hover/logo:bg-primary/10 blur-xl transition-all duration-500" />
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`relative ${logo.h} w-auto object-contain transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:drop-shadow-[0_0_20px_hsl(var(--primary)/0.6)]`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24 animate-marquee-slow group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[
                { src: dprLogo, alt: "", h: "h-16 md:h-20" },
                { src: cafyLogo, alt: "", h: "h-12 md:h-14" },
                { src: seiuLogo, alt: "", h: "h-16 md:h-20" },
                { src: dprLogo, alt: "", h: "h-16 md:h-20" },
                { src: cafyLogo, alt: "", h: "h-12 md:h-14" },
                { src: seiuLogo, alt: "", h: "h-16 md:h-20" },
              ].map((logo, i) => (
                <div key={`dup-${i}`} className="relative shrink-0 group/logo cursor-pointer">
                  <div className="absolute inset-0 -m-4 rounded-2xl bg-primary/0 group-hover/logo:bg-primary/10 blur-xl transition-all duration-500" />
                  <img
                    src={logo.src}
                    alt=""
                    aria-hidden="true"
                    className={`relative ${logo.h} w-auto object-contain transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:drop-shadow-[0_0_20px_hsl(var(--primary)/0.6)]`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* Stats Bar */}
      <ScrollSection>
        <section className="py-10 px-4 border-b border-border">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center" ref={eventsCounter.ref}>
              <div className="group cursor-default">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{eventsCounter.count}+</p>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">Events Served</p>
              </div>
              <div ref={guestsCounter.ref} className="group cursor-default">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{guestsCounter.count.toLocaleString()}+</p>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">Happy Guests</p>
              </div>
              <div ref={yearsCounter.ref} className="group cursor-default">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{yearsCounter.count}+</p>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">Years in Business</p>
              </div>
              <div ref={ratingsCounter.ref} className="group cursor-default">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{ratingsCounter.count}.0</p>
                <div className="flex gap-0.5 justify-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* Trust Proof */}
      <ScrollSection>
        <section className="section-padding bg-surface-elevated relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pop/40 to-transparent" />
          <div className="container mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pop/10 border border-pop/30 text-pop text-xs font-bold uppercase tracking-widest mb-4 hover:bg-pop/20 hover:scale-105 transition-all duration-300 cursor-default">
                <BadgeCheck size={14} /> Why Clients Trust Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                Booked With <span className="text-gradient-gold">Confidence</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A licensed, insured, mother-daughter team with the receipts to back up the hype.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 max-w-6xl mx-auto">
              {[
                { icon: ShieldCheck, label: "Licensed & Insured", sub: "LLC in Maryland" },
                { icon: Award, label: "200+ Events", sub: "Across the DMV" },
                { icon: Star, label: "5-Star Rated", sub: "Verified reviews" },
                { icon: Clock4, label: "On-Time Setup", sub: "Every event, guaranteed" },
                { icon: HeartHandshake, label: "Woman-Owned", sub: "Mother-daughter team" },
                { icon: MapPin, label: "Local DMV", sub: "Fort Washington, MD" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="group relative bg-card border border-border rounded-xl p-5 text-center hover:border-pop/40 hover:-translate-y-1 transition-all duration-500 cursor-default overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pop/0 via-transparent to-primary/0 group-hover:from-pop/5 group-hover:to-primary/5 transition-all duration-500" />
                  <div className="relative w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-pop/15 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <badge.icon size={22} className="text-primary group-hover:text-pop transition-colors duration-500" />
                  </div>
                  <p className="relative font-heading font-bold text-sm md:text-base leading-tight">{badge.label}</p>
                  <p className="relative text-xs text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-300">{badge.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border/50 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-primary/80 mb-2">Trusted By</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">Premier venues, organizations &amp; officials across the DMV</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
                {[
                  "National Harbor",
                  "Gaylord National Resort",
                  "Martin's Crosswinds",
                  "DC & PG County Government",
                  "DC Parks & Recreation",
                ].map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-center min-h-[64px] px-4 py-3 rounded-xl border border-border/60 bg-card/40 hover:bg-card/70 hover:border-primary/40 transition-all duration-300 cursor-default group"
                  >
                    <span className="font-heading italic text-sm md:text-[15px] text-foreground/70 group-hover:text-foreground text-center leading-snug">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      <InlineTestimonial index={0} direction="left" />

      <ScrollSection>
        <section className="py-10 md:py-14 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-4">
              The Boss Chick Difference
            </p>
            <p className="font-heading text-lg md:text-2xl leading-relaxed text-warm">
              We're a <span className="text-primary font-bold">heart-driven</span> mother-daughter team with{" "}
              <span className="text-primary font-bold">premium equipment</span>,{" "}
              <span className="text-primary font-bold">unforgettable energy</span>, and a{" "}
              <span className="text-primary font-bold">guest-focused</span> approach — with{" "}
              <span className="text-primary font-bold">custom everything</span> tailored to your vision.
            </p>
          </div>
        </section>
      </ScrollSection>

      {/* Services Preview */}
      <section className="section-padding bg-surface-elevated relative">
        <div className="container mx-auto">
          <ScrollSection>
            <SectionHeading
              label="Our Services"
              title="Setting the Scene for Unforgettable Moments"
              description="Whether you want glam, nostalgic, interactive, or full-on show-stopping energy, we've got a photobooth experience to match your event."
            />
          </ScrollSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollSection key={i} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover-lift hover-tilt">
                  <img src={service.image} alt={service.title} loading="lazy" width={800} height={800} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:translate-y-[-4px] transition-transform duration-500">
                    <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">{service.description}</p>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
          <ScrollSection delay={200}>
            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline" size="lg" className="hover-lift group">
                  View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>

      <InlineTestimonial index={1} direction="right" />

      {/* 360 Highlight Reel */}
      <ScrollSection>
        <section className="section-padding bg-surface-elevated relative overflow-hidden">
          <Sparkles className="absolute top-10 right-10 text-primary/10 animate-spin-slow" size={40} />
          <Sparkles className="absolute bottom-10 left-10 text-primary/10 animate-spin-slow" size={32} style={{ animationDirection: "reverse" }} />
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block">
                360 Highlight Reel
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Press Play on the <span className="text-gradient-gold">Boss Chick Experience</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A cinematic look at the events, the energy, and the unforgettable moments our 360 photo booth has captured across the DMV.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden hover-lift bg-black">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl opacity-60 pointer-events-none" />
              <div className="relative w-full aspect-video">
                {promoPlaying ? (
                  <iframe
                    src="https://player.vimeo.com/video/1188255701?autoplay=1&title=0&byline=0&portrait=0"
                    title="Boss Chick 360 Photo Booth Promo"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPromoPlaying(true)}
                    aria-label="Play 360 photo booth promo video"
                    className="absolute inset-0 w-full h-full group"
                  >
                    <img
                      src={promoPoster}
                      alt="Guest in red dress on the Boss Chick 360 photo booth"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, transparent 55%, hsl(var(--background) / 0.55) 90%, hsl(var(--background)) 100%)",
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 transition-transform group-hover:scale-110">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact">
                <Button size="lg" className="hover-lift group">
                  Book Your 360 Experience <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* Gallery Preview */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <ScrollSection>
            <SectionHeading
              label="Our Work"
              title="Real Events, Real Moments"
              description="See the magic in action. From intimate gatherings to grand celebrations."
            />
          </ScrollSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: galleryWedding, label: "Weddings" },
              { img: galleryBirthday, label: "Birthdays" },
              { img: galleryCorporate, label: "Corporate" },
            ].map((item, i) => (
              <ScrollSection key={i} delay={i * 120} direction="scale">
                <div className="group relative overflow-hidden rounded-xl aspect-[4/3] border border-border hover:border-primary/40 transition-all duration-500 hover-lift hover-tilt cursor-pointer">
                  <img src={item.img} alt={item.label} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-primary/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
          <ScrollSection delay={200}>
            <div className="text-center mt-12">
              <Link to="/gallery">
                <Button variant="outline" size="lg" className="hover-lift group">
                  View Full Gallery <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>

      <TestimonialStrip />

      {/* About Preview */}
      <section className="section-padding bg-surface-elevated relative">
        <FloatingTestimonialBadge index={2} className="top-20 right-6 z-10" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollSection direction="left">
              <div className="relative group">
                <img src={aboutTeam} alt="Boss Chick Enterprises mother-daughter team" loading="lazy" width={800} height={1000} className="rounded-2xl w-full max-h-[70vh] object-cover border border-border group-hover:border-primary/30 transition-all duration-500" />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg hidden md:block animate-float">
                  <p className="font-heading text-2xl font-bold">4+</p>
                  <p className="text-sm opacity-80">Years Strong</p>
                </div>
              </div>
            </ScrollSection>
            <ScrollSection direction="right" delay={150}>
              <div>
                <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block">Meet the Boss Chicks</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-6">
                  A Mother-Daughter Team That Brings Heart to Every Event
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Boss Chick Enterprises was born from a shared love for celebration, creativity, and making people feel special. As a mother-daughter team, we bring a unique blend of warmth, professionalism, and high-energy fun to every event.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're not just setting up equipment — we're creating moments. From the first consultation to the final photo, we pour our hearts into making sure your event is everything you dreamed of and more.
                </p>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="hover-lift group">
                    Our Full Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* Giving Back */}
      <section className="section-padding relative overflow-hidden">
        <Sparkles className="absolute top-10 left-10 text-primary/10 animate-spin-slow" size={36} />
        <Sparkles className="absolute bottom-10 right-12 text-primary/10 animate-spin-slow" size={28} style={{ animationDirection: "reverse" }} />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollSection direction="left">
              <div>
                <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block">
                  Giving Back
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-6">
                  More Than a Booth — <span className="text-gradient-gold">A Heart for Community</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe celebration is meant to be shared. That's why we proudly give back to our DMV community —
                  showing up for the events, causes, and people that make this area home.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From community gatherings to youth events and local fundraisers, we love using our craft to spread joy
                  and create memories where they matter most.
                </p>
              </div>
            </ScrollSection>
            <ScrollSection direction="right" delay={150}>
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden border border-border group-hover:border-primary/40 transition-all duration-500 aspect-[9/16] max-w-sm mx-auto bg-black">
                  <video
                    src="/videos/giving-back.mp4"
                    poster={givingBackPoster}
                    className="w-full h-full object-contain bg-black"
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pop text-pop-foreground px-5 py-3 rounded-xl shadow-lg hidden md:block animate-float">
                  <p className="font-heading text-sm font-bold uppercase tracking-wider">💛 DMV Strong</p>
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      <InlineTestimonial index={3} direction="left" />

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollSection>
            <SectionHeading
              label="Testimonials"
              title="What Our Clients Are Saying"
              description="Don't just take our word for it — hear from the people who've experienced the magic."
            />
          </ScrollSection>
          <TestimonialGrid />
        </div>
      </section>

      {/* CTA Banner */}
      <ScrollSection direction="scale">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-8 left-[10%] w-20 h-20 rounded-full border border-primary-foreground/10 animate-spin-slow" />
          <div className="absolute bottom-8 right-[15%] w-14 h-14 rounded-full border border-primary-foreground/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
              Let's talk about your vision. We'll help you find the perfect photobooth experience for your celebration.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="xl" className="hover-lift group">
                Book Your Experience <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </ScrollSection>
    </div>
  );
};

export default Index;
