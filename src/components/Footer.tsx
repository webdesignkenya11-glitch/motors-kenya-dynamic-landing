import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">Equipment NKing</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Kenya's trusted source for heavy-duty trucks and specialized equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#inventory" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Inventory
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="tel:0720496076" className="hover:text-accent transition-colors">
                  0720 496 076
                </a>
              </li>
              <li>info@equipmentnking.co.ke</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Equipment NKing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
