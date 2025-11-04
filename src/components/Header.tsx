import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logoImage from "@/assets/equipmentking-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled
          ? "bg-neutral-900/80 backdrop-blur-lg shadow-lg border-b border-neutral-700"
          : "bg-neutral-800/70 backdrop-blur-md border-b border-neutral-700"`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <img
              src={logoImage}
              alt="Equipment King Incorporated"
              className="w-14 h-14 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-base md:text-xl lg:text-2xl font-bold text-gray-900">
              Equipment King Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { to: "/", label: t("home") },
              { to: "/trucks", label: t("trucks") },
              { to: "/about", label: t("about") },
              { to: "/contact", label: t("contact") },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 relative group ${
                  isActive(item.to)
                    ? "text-gray-900 bg-gray-200 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="ml-2 font-semibold border-gray-300 text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-900"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>

            <a href="https://wa.me/0720496076" target="_blank" rel="noopener noreferrer">
              <Button className="ml-4 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-md">
                {t("getStarted")}
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-800 p-2 hover:bg-gray-200 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {[{ to: "/", label: t("home") }, { to: "/trucks", label: t("trucks") }, { to: "/about", label: t("about") }, { to: "/contact", label: t("contact") }].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-md font-medium text-left transition-colors ${
                    isActive(item.to)
                      ? "bg-gray-200 text-gray-900 shadow-sm"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Language Toggle */}
              <Button
                onClick={toggleLanguage}
                variant="outline"
                className="w-full font-semibold border-gray-300 text-gray-800 bg-white hover:bg-gray-200"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language.toUpperCase()}
              </Button>

              <a href="https://wa.me/0720496076" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full mt-2">
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
