import { Star, Quote } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";

interface TestimonialData {
  name: string;
  event: string;
  text: string;
  rating: number;
}

const allTestimonials: TestimonialData[] = [
  { name: "Jasmine R.", event: "Wedding", text: "Boss Chick Enterprises made our wedding SO much fun. The 360 booth was the highlight of the night — everyone was obsessed!", rating: 5 },
  { name: "Tasha M.", event: "Birthday Party", text: "Professional, on time, and the energy they brought was unmatched. My guests are STILL talking about the photo booth!", rating: 5 },
  { name: "Crystal W.", event: "Corporate Event", text: "We hired them for our company holiday party and it was a hit. The branded overlays were a great touch. Booking them again next year.", rating: 5 },
  { name: "DeAndre J.", event: "Graduation", text: "The glam booth made everyone feel like a celebrity. My mom wouldn't stop taking pictures — best graduation party ever!", rating: 5 },
  { name: "Brianna L.", event: "Baby Shower", text: "The audio guestbook was such a unique touch. Hearing my family's voices and wishes for the baby makes me tear up every time.", rating: 5 },
  { name: "Marcus T.", event: "Corporate Gala", text: "Seamless setup, incredible quality, and our employees loved the instant sharing feature. Already rebooked for next quarter.", rating: 5 },
  { name: "Keisha D.", event: "Anniversary", text: "They brought Hollywood vibes to our 25th anniversary. The photos were magazine-quality and the props were top-tier!", rating: 5 },
  { name: "Aisha P.", event: "Sweet 16", text: "My daughter and her friends had the best time! The 360 booth videos went viral on TikTok. Worth every penny!", rating: 5 },
];

export const InlineTestimonial = ({ index = 0, direction = "left" as "left" | "right" }: { index?: number; direction?: "left" | "right" }) => {
  const t = allTestimonials[index % allTestimonials.length];
  return (
    <ScrollSection direction={direction} delay={100}>
      <div className="py-10 md:py-14 px-4">
        <div className={`container mx-auto max-w-4xl flex ${direction === "right" ? "justify-end" : "justify-start"}`}>
          <div className="relative max-w-lg group">
            <div className={`absolute top-0 bottom-0 ${direction === "right" ? "right-0" : "left-0"} w-1 rounded-full bg-gradient-to-b from-pop via-pop/60 to-transparent`} />
            <div className={`absolute ${direction === "right" ? "-right-4 md:-right-6" : "-left-4 md:-left-6"} -top-4 md:-top-5`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pop/20 flex items-center justify-center backdrop-blur-sm border border-pop/40 group-hover:bg-pop/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Quote size={16} className="text-pop fill-pop/40" />
              </div>
            </div>
            <blockquote className={`${direction === "right" ? "pr-6 text-right" : "pl-6"} font-heading text-lg md:text-xl italic leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-300`}>
              {t.text}
            </blockquote>
            <div className={`mt-5 flex items-center gap-3 ${direction === "right" ? "justify-end pr-6" : "pl-6"}`}>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">{t.name}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={10} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{t.event}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export const FloatingTestimonialBadge = ({ index = 0, className = "" }: { index?: number; className?: string }) => {
  const t = allTestimonials[index % allTestimonials.length];
  return (
    <div className={`hidden lg:block absolute animate-float ${className}`}>
      <div className="relative bg-card/95 backdrop-blur-md border border-primary/20 rounded-2xl px-5 py-4 max-w-[260px] shadow-xl shadow-primary/5 hover:border-primary/40 hover:shadow-primary/10 transition-all duration-500 hover:scale-105 cursor-default overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pop to-transparent" />
        <Quote size={14} className="text-pop fill-pop/30 mb-2" />
        <p className="text-xs text-foreground/80 italic leading-relaxed line-clamp-3">{t.text}</p>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-border">
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[9px] font-bold">
            {t.name.charAt(0)}
          </div>
          <span className="text-xs font-bold text-foreground">{t.name}</span>
          <div className="flex gap-0.5 ml-auto">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={8} className="fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialStrip = () => {
  const doubled = [...allTestimonials, ...allTestimonials];
  return (
    <div className="overflow-hidden py-6 border-y border-primary/10 bg-primary/[0.03]">
      <div className="flex animate-marquee-slow gap-6">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-3 rounded-xl border border-primary/15 border-l-2 border-l-pop bg-card/70 backdrop-blur-sm shrink-0 hover:border-primary/30 hover:border-l-pop hover:bg-card transition-all duration-300 group cursor-default">
            <Quote size={12} className="text-pop fill-pop/30 shrink-0" />
            <p className="text-xs text-foreground/70 italic whitespace-nowrap font-heading">{t.text.slice(0, 55)}...</p>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[8px] font-bold">
                {t.name.charAt(0)}
              </div>
              <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TestimonialGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {allTestimonials.slice(0, 3).map((t, i) => (
        <ScrollSection key={i} delay={i * 120} direction="up">
          <div className="relative bg-card rounded-2xl p-8 border border-primary/10 hover:border-pop/40 transition-all duration-500 hover-lift h-full group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pop via-primary to-pop" />
            <Quote size={28} className="text-pop fill-pop/25 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 origin-bottom-left" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 leading-relaxed mb-6 font-heading italic text-base">{t.text}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">{t.event}</p>
              </div>
            </div>
          </div>
        </ScrollSection>
      ))}
    </div>
  );
};

export { allTestimonials };
