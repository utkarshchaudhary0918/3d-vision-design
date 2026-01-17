import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">KE</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Karni Enterprises</h3>
                <p className="text-xs text-muted-foreground">The Plating Experts</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Industry leaders in electroplating and surface finishing solutions, 
              delivering quality and precision since our establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/clients" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Clients
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">Blue Zinc Plating</span>
              <span className="text-sm text-muted-foreground">White Zinc Plating</span>
              <span className="text-sm text-muted-foreground">Green Zinc Plating</span>
              <span className="text-sm text-muted-foreground">Black Zinc Plating</span>
              <span className="text-sm text-muted-foreground">Trivalent Zinc Plating</span>
              <span className="text-sm text-muted-foreground">Manganese Phosphating</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Plot No. 495, Electroplating Zone<br />
                  Sector 58, Ballabgarh<br />
                  Faridabad, Haryana
                </p>
              </div>
              <a 
                href="tel:+917988516142" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} className="text-primary flex-shrink-0" />
                +91 7988516142
              </a>
              <a 
                href="mailto:karnienterprises18@gmail.com" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary flex-shrink-0" />
                karnienterprises18@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Karni Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
