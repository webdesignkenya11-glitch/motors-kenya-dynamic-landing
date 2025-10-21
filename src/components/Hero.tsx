import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping opacity-75" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-ping opacity-75" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 py-2 rounded-full mb-4 animate-fade-in">
            <Truck className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-primary-foreground">Serving West Africa Since 2010</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in delay-100">
            Equipment King <span className="text-accent">Incorporated</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium animate-fade-in delay-200">
            West Africa's Premier Heavy Equipment Supplier
          </p>
          
          {/* Countries Badge */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in delay-300">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
              <span className="text-primary-foreground font-semibold text-sm">🇱🇷 Liberia (HQ)</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
              <span className="text-primary-foreground font-semibold text-sm">🇲🇱 Mali</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
              <span className="text-primary-foreground font-semibold text-sm">🇬🇳 Guinea</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
              <span className="text-primary-foreground font-semibold text-sm">🇸🇱 Sierra Leone</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in delay-400">
            <Link to="/trucks">
              <Button 
                size="lg" 
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Browse Equipment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
