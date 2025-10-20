import logo from "@/assets/equipment-king-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Equipment King Incorporated" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold">Equipment King Inc.</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-2">
              Leading supplier of heavy-duty trucks and specialized equipment across West Africa.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              Liberia 🇱🇷 | Mali 🇲🇱 | Guinea 🇬🇳 | Sierra Leone 🇸🇱
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
              <li>info@equipmentking.com</li>
              <li>Monrovia, Liberia (HQ)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Equipment King Incorporated. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
