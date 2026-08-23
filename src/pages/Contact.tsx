import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Instagram, Facebook, Sparkles, Send, CheckCircle2 } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";
import { InlineTestimonial, FloatingTestimonialBadge } from "@/components/Testimonials";
import { supabase } from "@/integrations/supabase/client";
import TonyaCard from "@/components/TonyaCard";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [eventType, setEventType] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const formMountedAt = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("website") as string)?.trim()) {
      setSubmitted(true);
      return;
    }
    if (Date.now() - formMountedAt.current < 2000) {
      toast({ title: "Please take a moment to fill out the form.", variant: "destructive" });
      return;
    }

    const fullName = (data.get("fullName") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim() || null;
    const eventDate = (data.get("eventDate") as string) || null;
    const guestCountRaw = (data.get("guestCount") as string)?.trim();
    const guestCount = guestCountRaw ? parseInt(guestCountRaw, 10) : null;
    const venue = (data.get("venue") as string)?.trim() || null;
    const message = (data.get("message") as string)?.trim() || null;

    if (!fullName || !email || !eventDate || !eventType) {
      toast({ title: "Please complete all required fields.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const id = crypto.randomUUID();
      const { error: insertError } = await supabase.from("contact_inquiries").insert({
        id,
        full_name: fullName,
        email,
        phone,
        event_date: eventDate,
        event_type: eventType,
        guest_count: guestCount,
        service_interest: serviceInterest || null,
        venue,
        referral_source: referralSource || null,
        message,
      });
      if (insertError) throw insertError;

      const sharedData = {
        fullName, email, phone, eventDate, eventType,
        guestCount, serviceInterest, venue, referralSource, message,
      };
      await Promise.allSettled([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-notification",
            recipientEmail: "info@bosschickenterprise.com",
            idempotencyKey: `contact-notify-${id}`,
            templateData: sharedData,
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-confirmation",
            recipientEmail: email,
            idempotencyKey: `contact-confirm-${id}`,
            templateData: { name: fullName, eventDate, eventType, message },
          },
        }),
      ]);

      setSubmitted(true);
      form.reset();
      setEventType(""); setServiceInterest(""); setReferralSource("");
      toast({
        title: "Inquiry Sent! 🎉",
        description: "Thank you! We'll get back to you within 24 hours.",
      });
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: err?.message || "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-surface-elevated text-center relative overflow-hidden">
        <Sparkles className="absolute top-8 right-10 text-primary/10 animate-spin-slow" size={30} />
        <div className="absolute bottom-10 left-12 w-2 h-2 rounded-full bg-primary/30 animate-float" />
        <div className="container mx-auto">
          <video
            src="/videos/logo-animation-gift.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto mb-6 w-32 md:w-40 h-auto animate-fade-in"
            aria-hidden="true"
          />
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block animate-fade-in">Contact</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Get in Touch & <span className="text-gradient-gold">Get Snapping</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Planning a celebration that deserves a little extra wow? Tell us what you're planning and we'll help you find the best fit.
          </p>
        </div>
      </section>

      <InlineTestimonial index={5} direction="right" />

      <section className="section-padding relative">
        <FloatingTestimonialBadge index={7} className="top-8 right-6 z-10" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollSection direction="left">
              <div className="space-y-8">
                <TonyaCard variant="compact" />
                <h2 className="font-heading text-2xl font-bold">Let's Connect</h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Location", text: "Fort Washington, Maryland\nServing the DMV Area" },
                    { icon: Mail, title: "Email", text: "info@bosschickenterprise.com", href: "mailto:info@bosschickenterprise.com" },
                    { icon: Phone, title: "Phone", text: "(202) 571-8158", href: "tel:+12025718158" },
                  ].map((item, i) => (
                    <ScrollSection key={i} delay={i * 100} direction="left">
                      <div className="flex items-start gap-4 group hover-lift">
                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <item.icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold group-hover:text-primary transition-colors">{item.title}</p>
                          {item.href ? (
                            <a href={item.href} className="text-muted-foreground hover:text-primary text-sm whitespace-pre-line transition-colors break-all">
                              {item.text}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                          )}
                        </div>
                      </div>
                    </ScrollSection>
                  ))}
                </div>
                <div>
                  <p className="font-semibold mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-6">
                      <Instagram size={20} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-rotate-6">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollSection>

            <ScrollSection direction="right" delay={150} className="lg:col-span-2">
              {submitted ? (
                <div className="bg-card rounded-2xl p-10 md:p-14 border border-primary/30 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center">
                    <CheckCircle2 className="text-primary" size={36} />
                  </div>
                  <h2 className="font-heading text-3xl font-bold">Inquiry Received!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thanks so much for reaching out — we've sent a confirmation to your inbox
                    and our team will get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 border border-border space-y-6 hover:border-primary/20 transition-colors duration-500">
                  <h2 className="font-heading text-2xl font-bold mb-2">Tell Us About Your Event</h2>

                  <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                    <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                      <Input name="fullName" required placeholder="Your name" />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-1.5">Email *</label>
                      <Input name="email" required type="email" placeholder="your@email.com" />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                      <Input name="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-1.5">Event Date *</label>
                      <Input name="eventDate" required type="date" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Event Type *</label>
                      <Select value={eventType} onValueChange={setEventType} required>
                        <SelectTrigger><SelectValue placeholder="Select event type" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Wedding">Wedding</SelectItem>
                          <SelectItem value="Birthday">Birthday</SelectItem>
                          <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                          <SelectItem value="Baby Shower">Baby Shower</SelectItem>
                          <SelectItem value="Graduation">Graduation</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-1.5">Estimated Guest Count</label>
                      <Input name="guestCount" type="number" placeholder="e.g. 100" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Interested In</label>
                    <Select value={serviceInterest} onValueChange={setServiceInterest}>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="360 Photo Booth">360 Photo Booth</SelectItem>
                        <SelectItem value="Selfie Photo Booth">Selfie Photo Booth</SelectItem>
                        <SelectItem value="Audio Guestbook">Audio Guestbook</SelectItem>
                        <SelectItem value="Glam Photo Booth">Glam Photo Booth</SelectItem>
                        <SelectItem value="Multiple Services">Multiple Services</SelectItem>
                        <SelectItem value="Not Sure Yet">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5">Venue / Location</label>
                    <Input name="venue" placeholder="Venue name or city" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">How Did You Hear About Us?</label>
                    <Select value={referralSource} onValueChange={setReferralSource}>
                      <SelectTrigger><SelectValue placeholder="Select one" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Instagram">Instagram</SelectItem>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Google">Google</SelectItem>
                        <SelectItem value="Referral">Referral</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5">Tell Us About Your Event</label>
                    <Textarea name="message" placeholder="What's the vibe? Any special requests?" rows={4} />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="w-full hover-lift glow-primary group" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Inquiry <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </ScrollSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
