import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VehicleDetailModal from "./VehicleDetailModal";
import { Vehicle } from "@/data/vehicles";
import { Search } from "lucide-react";

const VehicleGrid = () => {
  const [filter, setFilter] = useState<"All" | "Tractor" | "Dump Truck" | "Special Vehicle" | "Cargo Truck" | "On-road Truck" | "New Energy">("All");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const filteredVehicles = vehicles.filter(v => {
    const matchesFilter = filter === "All" || v.type === filter;
    const matchesSearch = searchQuery === "" || 
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.engine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="inventory" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Truck Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our comprehensive inventory of heavy-duty trucks and specialized equipment available across West Africa
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search trucks by name, type, or engine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base border-2 focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(["All", "Tractor", "Dump Truck", "Special Vehicle", "Cargo Truck", "On-road Truck", "New Energy"] as const).map((type) => (
            <Button
              key={type}
              onClick={() => setFilter(type)}
              variant={filter === type ? "default" : "outline"}
              className={`px-6 py-5 text-sm md:text-base font-semibold transition-all duration-300 ${
                filter === type 
                  ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-md' 
                  : 'hover:border-accent hover:text-accent'
              }`}
            >
              {type === "All" ? "All Equipment" : type}
              <span className="ml-2 text-xs md:text-sm opacity-75">
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
