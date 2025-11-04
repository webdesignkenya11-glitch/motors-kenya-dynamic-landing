import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Search } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { TruckSearch } from "@/components/TruckSearch";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Better Visibility */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Lighter overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Enhanced Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full animate-ping opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/80 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-accent rounded-full animate-ping opacity-60" style={{ animationDelay: '4s', animationDuration: '3.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white/60 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s', animationDuration: '5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/60 rounded-full animate-ping opacity-40" style={{ animationDelay: '3s', animationDuration: '4.5s' }} />
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-accent/70 rounded-full animate-ping opacity-50" style={{ animationDelay: '2.5s', animationDuration: '3s' }} />
        <div className="absolute bottom-1/2 right-1/2 w-3 h-3 bg-white/50 rounded-full animate-ping opacity-30" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge with animation */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full mb-4 animate-fade-in shadow-lg hover:bg-white/20 transition-all duration-300">
            <Truck className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">{t("servingWestAfrica")}</span>
          </div>

          {/* Main Heading with enhanced styling */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in delay-100 drop-shadow-2xl">
            {t("equipmentKing")} 
            <br />
            <span className="text-white/95 bg-clip-text">{t("incorporated")}</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-medium animate-fade-in delay-200 drop-shadow-lg max-w-3xl mx-auto">
            {t("westAfricaPremier")}
          </p>
          
          {/* Search Bar - Prominently Positioned */}
          <div className="max-w-2xl mx-auto pt-6 pb-4 animate-fade-in delay-300">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/50 hover:shadow-accent/20 hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-3">
                <Search className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">
                  {t("findPerfectTruck")}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t("searchInventory")}
              </p>
              <TruckSearch />
            </div>
          </div>
          
          {/* Countries Badge with enhanced styling */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in delay-400">
            <div className="bg-white/10 backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105">
              <span className="text-white font-semibold text-sm">🇱🇷 Liberia (HQ)</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105">
              <span className="text-white font-semibold text-sm">🇲🇱 Mali</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105">
              <span className="text-white font-semibold text-sm">🇬🇳 Guinea</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105">
              <span className="text-white font-semibold text-sm">🇸🇱 Sierra Leone</span>
            </div>
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in delay-500">
            <Link to="/trucks">
              <Button 
                size="lg" 
                variant="default"
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 group border-2 border-accent/20"
              >
                {t("browseEquipment")}
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/90 bg-white/10 text-white hover:bg-white hover:text-foreground font-bold px-10 py-7 text-lg transition-all duration-300 hover:scale-110 backdrop-blur-md shadow-xl"
              >
                {t("contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
