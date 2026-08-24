import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Boss Chick Enterprises" className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform duration-300" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-md ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  location.pathname === link.path ? "w-6" : "w-0"
                }`}
              />
            </Link>
          ))}
          {location.pathname !== "/" && (
            <Link to="/">
              <Button variant="outline" size="sm" className="ml-2 gap-2">
                <Home size={16} />
                Back to Home
              </Button>
            </Link>
          )}
          <Link to="/contact">
            <Button variant="default" size="sm" className="ml-2 hover-lift">
              Book Now
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden -mr-2 p-3 text-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-background border-t border-border overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-md transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          {location.pathname !== "/" && (
            <Link to="/" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full mt-2 gap-2">
                <Home size={16} />
                Back to Home
              </Button>
            </Link>
          )}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <Button variant="default" className="w-full mt-2 hover-lift">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
