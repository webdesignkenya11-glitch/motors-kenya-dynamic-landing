import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in">
            Power Your Business Forward
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Leading supplier of heavy-duty trucks and specialized equipment across West Africa
          </p>
          
          {/* Countries Badge */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full">
              <span className="text-primary-foreground font-semibold text-sm">🇱🇷 Liberia (HQ)</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full">
              <span className="text-primary-foreground font-semibold text-sm">🇲🇱 Mali</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full">
              <span className="text-primary-foreground font-semibold text-sm">🇬🇳 Guinea</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 rounded-full">
              <span className="text-primary-foreground font-semibold text-sm">🇸🇱 Sierra Leone</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('inventory')}
            >
              Browse Trucks
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
