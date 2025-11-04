import { Link } from "react-router-dom";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import VehicleDetailModal from "./VehicleDetailModal";
import { Vehicle } from "@/data/vehicles";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturedTrucks = () => {
  const { t } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  // Get 3 featured trucks from different categories
  const featuredTrucks = [
    vehicles.find(v => v.type === "Tractor"),
    vehicles.find(v => v.type === "Dump Truck"),
    vehicles.find(v => v.type === "Special Vehicle"),
  ].filter(Boolean) as Vehicle[];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t("featuredEquipment")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 animate-fade-in delay-100">
            {t("discoverPremium")}
          </p>
        </div>

        {/* Featured Trucks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTrucks.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <VehicleCard 
                vehicle={vehicle} 
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center animate-fade-in delay-500">
          <Link to="/trucks">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {t("viewFullInventory")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <VehicleDetailModal 
        vehicle={selectedVehicle}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default FeaturedTrucks;
