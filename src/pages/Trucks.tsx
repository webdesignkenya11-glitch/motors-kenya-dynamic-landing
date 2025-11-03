import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Truck, Wrench, Package, Construction, Leaf, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Trucks = () => {
  const { t } = useLanguage();

  const categories = [
    {
      name: "Tractors",
      path: "/trucks/tractors",
      icon: Construction,
      description: t("tractorsDesc"),
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      name: "Dump Trucks",
      path: "/trucks/dump-trucks",
      icon: Truck,
      description: t("dumpTrucksDesc"),
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500"
    },
    {
      name: "Special Vehicles",
      path: "/trucks/special-vehicles",
      icon: Wrench,
      description: t("specialVehiclesDesc"),
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      name: "Cargo Trucks",
      path: "/trucks/cargo-trucks",
      icon: Package,
      description: t("cargoTrucksDesc"),
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      name: "On-road Trucks",
      path: "/trucks/on-road-trucks",
      icon: Truck,
      description: t("onroadTrucksDesc"),
      gradient: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-600"
    },
    {
      name: "New Energy",
      path: "/trucks/new-energy",
      icon: Leaf,
      description: t("newEnergyDesc"),
      gradient: "from-teal-500/20 to-green-500/20",
      iconColor: "text-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 pt-20 pb-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {t("ourTruckFleet")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("browseByCategory")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.path} 
                to={category.path}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full overflow-hidden border-2 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:-translate-y-2 animate-fade-in">
                  <CardContent className="p-0">
                    <div className={`relative bg-gradient-to-br ${category.gradient} p-8 h-48 flex items-center justify-center overflow-hidden`}>
                      {/* Animated background effect */}
                      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
                      
                      {/* Icon */}
                      <div className="relative">
                        <Icon className={`w-20 h-20 ${category.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
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
