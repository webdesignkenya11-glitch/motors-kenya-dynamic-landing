import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import VehicleDetailModal from "./VehicleDetailModal";
import { Vehicle } from "@/data/vehicles";

const VehicleGrid = () => {
  const [filter, setFilter] = useState<"All" | "Car" | "Truck">("All");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const filteredVehicles = filter === "All" 
    ? vehicles 
    : vehicles.filter(v => v.type === filter);

  return (
    <section id="inventory" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Vehicles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our carefully selected inventory of quality cars and commercial trucks
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {(["All", "Car", "Truck"] as const).map((type) => (
            <Button
              key={type}
              onClick={() => setFilter(type)}
              variant={filter === type ? "default" : "outline"}
              className={`px-8 py-6 text-base font-semibold transition-all duration-300 ${
                filter === type 
                  ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-md' 
                  : 'hover:border-accent hover:text-accent'
              }`}
            >
              {type === "All" ? "All Vehicles" : `${type}s`}
              <span className="ml-2 text-sm opacity-75">
                ({type === "All" ? vehicles.length : vehicles.filter(v => v.type === type).length})
              </span>
            </Button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard 
              key={vehicle.id} 
              vehicle={vehicle} 
              onViewDetails={handleViewDetails}
            />
          ))}
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

export default VehicleGrid;
