import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/equipment-king-logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <img src={logo} alt="Equipment King Incorporated" className="w-12 h-12 object-contain transition-transform group-hover:scale-105" />
            <span className="text-base md:text-lg font-bold text-primary-foreground">
              Equipment King Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md text-primary-foreground font-medium transition-all duration-300 relative group ${
                isActive("/") ? "text-accent" : "hover:text-accent"
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ${
                isActive("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
            <Link
              to="/trucks"
              className={`px-4 py-2 rounded-md text-primary-foreground font-medium transition-all duration-300 relative group ${
                isActive("/trucks") ? "text-accent" : "hover:text-accent"
              }`}
            >
              Trucks
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ${
                isActive("/trucks") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md text-primary-foreground font-medium transition-all duration-300 relative group ${
                isActive("/contact") ? "text-accent" : "hover:text-accent"
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ${
                isActive("/contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
            <Link to="/contact">
              <Button
                className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-md text-primary-foreground font-medium text-left transition-colors ${
                  isActive("/") ? "bg-accent/20 text-accent" : "hover:bg-primary-foreground/10"
                }`}
              >
                Home
              </Link>
              <Link
                to="/trucks"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-md text-primary-foreground font-medium text-left transition-colors ${
                  isActive("/trucks") ? "bg-accent/20 text-accent" : "hover:bg-primary-foreground/10"
                }`}
              >
                Trucks
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-md text-primary-foreground font-medium text-left transition-colors ${
                  isActive("/contact") ? "bg-accent/20 text-accent" : "hover:bg-primary-foreground/10"
                }`}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={closeMobileMenu}>
                <Button
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
