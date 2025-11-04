import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TruckSearch } from "@/components/TruckSearch";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

// Background image
import trucksBackground from "@/assets/truck15-scania.jpg";

// Category images
import tractorImg from "@/assets/z3track.jpg";
import dumpTruckImg from "@/assets/Dump Truck E91.jpg";
import specialVehicleImg from "@/assets/x6sprinkler1.jpg";
import cargoTruckImg from "@/assets/cargo1.jpg";
import onRoadTruckImg from "@/assets/truck1-npr.jpg";
import newEnergyImg from "@/assets/E3Track.jpg";

const Trucks = () => {
  const { t } = useLanguage();
  const heroAnim = useScrollAnimation();
  const categoriesAnim = useScrollAnimation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  const categories = [
    {
      name: "Tractors",
      path: "/trucks/tractors",
      image: tractorImg,
      description: t("tractorsDesc"),
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Dump Trucks",
      path: "/trucks/dump-trucks",
      image: dumpTruckImg,
      description: t("dumpTrucksDesc"),
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      name: "Special Vehicles",
      path: "/trucks/special-vehicles",
      image: specialVehicleImg,
      description: t("specialVehiclesDesc"),
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Cargo Trucks",
      path: "/trucks/cargo-trucks",
      image: cargoTruckImg,
      description: t("cargoTrucksDesc"),
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "On-road Trucks",
      path: "/trucks/on-road-trucks",
      image: onRoadTruckImg,
      description: t("onroadTrucksDesc"),
      gradient: "from-yellow-500/20 to-amber-500/20"
    },
    {
      name: "New Energy",
      path: "/trucks/new-energy",
      image: newEnergyImg,
      description: t("newEnergyDesc"),
      gradient: "from-teal-500/20 to-green-500/20"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${trucksBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div 
          ref={heroAnim.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent drop-shadow-lg">
            {t("ourTruckFleet")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            {t("browseByCategory")}
          </p>
          <div className="mt-8 flex justify-center">
            <TruckSearch />
          </div>
        </div>

        {/* Categories Grid */}
        <div 
          ref={categoriesAnim.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-1000 delay-200 ${
            categoriesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => {
            return (
              <Link 
                key={category.path} 
                to={category.path}
                className="group animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full overflow-hidden border-2 transition-all duration-500 hover:border-accent hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className={`relative bg-gradient-to-br ${category.gradient} h-64 overflow-hidden`}>
                      {/* Category Image */}
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Category name on image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                        {t("viewCategory")}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trucks;
