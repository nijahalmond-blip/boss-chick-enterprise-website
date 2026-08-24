import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-sunken border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src={logo} alt="Boss Chick Enterprises LLC" className="h-14 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div>
                <h3 className="font-heading text-lg font-bold leading-tight">
                  Boss Chick <span className="text-primary">Enterprises</span>
                </h3>
                <p className="text-xs text-muted-foreground font-semibold tracking-wider">LLC</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bold, unforgettable photobooth experiences for weddings, birthdays, corporate events, and celebrations across the DMV.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@bosschickenterprise.com" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Gallery", "Blog", "FAQ", "Contact"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary hover:translate-x-1 text-sm transition-all duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {["360 Photo Booth", "Selfie Photo Booth", "Glam Photo Booth", "Audio Guestbook", "Custom Overlays"].map((item) => (
                <span key={item} className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-default">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 group cursor-default">
                <MapPin size={16} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">Fort Washington, Maryland</span>
              </div>
              <a href="tel:+12025718158" className="flex items-center gap-2 group">
                <Phone size={16} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors">(202) 571-8158</span>
              </a>
              <a href="mailto:info@bosschickenterprise.com" className="flex items-center gap-2 group">
                <Mail size={16} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors break-all">info@bosschickenterprise.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Boss Chick Enterprises LLC. All rights reserved.
          </p>
          <address className="text-muted-foreground text-xs not-italic leading-relaxed">
            919 W 34th St #50278, SMB#84124<br />
            Baltimore, MD 21211
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
