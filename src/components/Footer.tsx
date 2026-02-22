import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">
              <span className="text-primary">VALA</span> GYM
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your body and mind at Ahmedabad's premier fitness destination.
              Where strength meets discipline.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/programs", label: "Programs" },
                { to: "/membership", label: "Membership" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-foreground">Programs</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Weight Training</span>
              <span>Fat Loss Programs</span>
              <span>Personal Training</span>
              <span>Strength & Conditioning</span>
              <span>Cardio Training</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>info@valagym.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vala Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
