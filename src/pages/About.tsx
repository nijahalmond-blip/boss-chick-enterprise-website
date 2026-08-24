import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ScrollSection from "@/components/ScrollSection";
import { InlineTestimonial, FloatingTestimonialBadge } from "@/components/Testimonials";
import { Heart, Star, MapPin, ArrowRight, Clock } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import TonyaCard from "@/components/TonyaCard";

const values = [
  { icon: Heart, title: "Heart First", text: "We treat every event like it's our own family celebration." },
  { icon: Star, title: "Quality Always", text: "Premium equipment, polished presentation, flawless execution." },
  { icon: MapPin, title: "Rooted in Community", text: "Proudly serving the DMV area with local love and professionalism." },
  { icon: Clock, title: "4+ Years Strong", text: "Over four years of bringing unforgettable experiences to hundreds of events." },
];

const About = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-surface-elevated text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary/30 animate-float" />
        <div className="absolute bottom-10 right-12 w-3 h-3 rounded-full bg-primary/20 animate-float-delayed" />
        <div className="container mx-auto">
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block animate-fade-in">About Us</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Meet the <span className="text-gradient-gold">Boss Chicks</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A mother-daughter duo on a mission to make every celebration bold, memorable, and full of magic — for over 4 years and counting.
          </p>
        </div>
      </section>

      <section className="section-padding relative">
        <FloatingTestimonialBadge index={6} className="top-10 right-6 z-10" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollSection direction="left">
              <div className="relative group">
                <img src={aboutTeam} alt="Boss Chick Enterprises team" loading="lazy" width={800} height={1000} className="rounded-2xl w-full max-h-[70vh] object-cover border border-border hover:border-primary/30 transition-all duration-500" />
                <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg hidden md:block animate-float">
                  <p className="font-heading text-xl font-bold">4+ Years</p>
                  <p className="text-xs opacity-80">Making Memories</p>
                </div>
              </div>
            </ScrollSection>
            <ScrollSection direction="right" delay={150}>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Boss Chick Enterprises LLC started with Nijah and her mom, Tonya, and a shared love of throwing a good party. Based in Fort Washington, Maryland, we saw room to bring something different to the DMV event scene.</p>
                  <p>We invested in real equipment early and built a setup process we run the same way every time, so the event stays on schedule and actually feels fun instead of managed.</p>
                  <p>Today, that's <span className="text-primary font-semibold">over 4 years of experience</span> and <span className="text-primary font-semibold">200+ events</span> — weddings, birthdays, corporate events, baby showers, graduations, and everything in between. A 360 booth spinning or an audio guestbook filling up with real voices: same team, same heart, hustle, and a whole lot of fun behind it.</p>
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      <InlineTestimonial index={5} direction="right" />

      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto">
          <ScrollSection>
            <SectionHeading label="Our Values" title="What Makes Us Different" description="We're not just vendors — we're part of the celebration." />
          </ScrollSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollSection key={i} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover-lift hover-tilt h-full">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <v.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      <InlineTestimonial index={7} direction="left" />

      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollSection>
            <SectionHeading
              label="Meet the Team"
              title="The Faces Behind the Magic"
              description="A close-knit team dedicated to making every Boss Chick experience unforgettable — from your first hello to the last spin on the booth."
            />
          </ScrollSection>
          <ScrollSection delay={150}>
            <TonyaCard variant="full" />
          </ScrollSection>
        </div>
      </section>

      <section className="section-padding">
        <ScrollSection>
          <div className="container mx-auto text-center max-w-3xl">
            <SectionHeading label="Service Area" title="Proudly Serving the DMV" description="Based in Fort Washington, Maryland, we serve events throughout DC, Maryland, and Virginia. Events beyond 30 miles may include a travel fee." />
            <Link to="/contact">
              <Button variant="default" size="lg" className="hover-lift glow-primary group">
                Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </ScrollSection>
      </section>
    </div>
  );
};

export default About;
