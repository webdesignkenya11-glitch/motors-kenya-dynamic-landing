import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import VehicleDetailModal from "@/components/VehicleDetailModal";
import { Vehicle } from "@/data/vehicles";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CargoTrucksPage = () => {
  const { t } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const cargoTrucks = vehicles.filter(v => v.type === "Cargo Truck");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 to-background pt-20 pb-12">
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
            {t("cargoTrucks")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("cargoTrucksDesc")}
          </p>
          <div className="mt-4 text-accent font-semibold">
            {cargoTrucks.length} {t("vehiclesAvailable")}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {cargoTrucks.map((vehicle, index) => (
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

export default CargoTrucksPage;
