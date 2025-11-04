import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logoImage from "@/assets/equipmentking-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

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
          ? "bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 backdrop-blur-md shadow-md border-b border-accent/20" 
          : "bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 backdrop-blur-md shadow-md border-b border-accent/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity group"
          >
            <img src={logoImage} alt="Equipment King Incorporated" className="w-14 h-14 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-105" />
            <span className="text-base md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">
              Equipment King Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 relative group ${
                isActive("/") ? "text-white bg-white/20 shadow-lg" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("home")}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ${
                isActive("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
            <Link
              to="/trucks"
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 relative group ${
                isActive("/trucks") ? "text-white bg-white/20 shadow-lg" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("trucks")}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ${
                isActive("/trucks") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 relative group ${
                isActive("/about") ? "text-white bg-white/20 shadow-lg" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("about")}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ${
                isActive("/about") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 relative group ${
                isActive("/contact") ? "text-white bg-white/20 shadow-lg" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("contact")}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ${
                isActive("/contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="ml-2 font-semibold border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <a href="https://wa.me/0720496076" target="_blank" rel="noopener noreferrer">
              <Button
                className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t("getStarted")}
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20 animate-fade-in bg-gradient-to-b from-primary/95 to-secondary/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-md font-medium text-left transition-colors ${
                  isActive("/") ? "bg-white/20 text-white shadow-lg" : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t("home")}
              </Link>
              <Link
                to="/trucks"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-md font-medium text-left transition-colors ${
                  isActive("/trucks") ? "bg-white/20 text-white shadow-lg" : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t("trucks")}
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-md font-medium text-left transition-colors ${
                  isActive("/about") ? "bg-white/20 text-white shadow-lg" : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t("about")}
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-md font-medium text-left transition-colors ${
                  isActive("/contact") ? "bg-white/20 text-white shadow-lg" : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t("contact")}
              </Link>
              <Button
                onClick={toggleLanguage}
                variant="outline"
                className="w-full font-semibold border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language.toUpperCase()}
              </Button>
              <a href="https://wa.me/0720496076" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                <Button
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2"
                >
                  {t("getStarted")}
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
