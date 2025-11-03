import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import VehicleDetailModal from "@/components/VehicleDetailModal";
import { Vehicle } from "@/data/vehicles";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OnRoadTrucksPage = () => {
  const { t } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const onRoadTrucks = vehicles.filter(v => v.type === "On-road Truck");

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50/50 to-background pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/trucks">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t("backToCategories")}
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("onroadTrucks")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("onroadTrucksDesc")}
          </p>
          <div className="mt-4 text-accent font-semibold">
            {onRoadTrucks.length} {t("vehiclesAvailable")}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {onRoadTrucks.map((vehicle, index) => (
            <div key={vehicle.id} style={{ animationDelay: `${index * 100}ms` }}>
              <VehicleCard 
                vehicle={vehicle} 
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>
      </div>

      <VehicleDetailModal 
        vehicle={selectedVehicle}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default OnRoadTrucksPage;
