import { Sparkles, Mail, Phone } from "lucide-react";
import tonyaPhoto from "@/assets/tonya-d.jpg";

interface TonyaCardProps {
  variant?: "full" | "compact";
}

const TonyaCard = ({ variant = "full" }: TonyaCardProps) => {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 p-5 bg-card rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover-lift">
        <img
          src={tonyaPhoto}
          alt="Tonya D., Client Success Manager at Boss Chick Enterprises"
          className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-primary shadow-lg shadow-primary/20"
        />
        <div className="min-w-0">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">Your Point of Contact</p>
          <h3 className="font-heading text-lg font-bold leading-tight">Tonya D.</h3>
          <p className="text-muted-foreground text-sm">Client Success Manager</p>
          <a
            href="tel:+12025718158"
            className="inline-flex items-center gap-1.5 mt-1 text-sm text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            <Phone size={13} /> (202) 571-8158
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Sparkles className="absolute -top-4 -right-4 text-primary/20 animate-spin-slow" size={32} />
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 p-8 md:p-10 bg-card rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover-lift">
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-2 border-primary/40">
            <img
              src={tonyaPhoto}
              alt="Tonya D., Client Success Manager at Boss Chick Enterprises"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <span className="text-primary font-body text-xs font-semibold uppercase tracking-widest mb-2">
            Client Success Manager
          </span>
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-3">Tonya D.</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Tonya is the friendly voice behind every Boss Chick booking. From your first inquiry to the final guest leaving the dance floor, she makes sure every detail is handled with care, every question gets a quick answer, and every event feels effortless.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm">
            <a
              href="tel:+12025718158"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <Phone size={14} /> (202) 571-8158
            </a>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground">
              <Mail size={14} className="text-primary" /> Inquiries & Bookings
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground">
              <Phone size={14} className="text-primary" /> Day-of Coordination
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TonyaCard;
