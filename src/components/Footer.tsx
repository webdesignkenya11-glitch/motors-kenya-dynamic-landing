import logo from "@/assets/equipment-king-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Equipment King Incorporated" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold">Equipment King Inc.</span>
            </div>
            <p className="text-primary-foreground/80 text-xs">
              Leading supplier of heavy-duty trucks across West Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/trucks" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Inventory
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Contact</h3>
            <ul className="space-y-1.5 text-xs text-primary-foreground/80">
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

        <div className="border-t border-primary-foreground/20 pt-4 text-center text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Equipment King Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
