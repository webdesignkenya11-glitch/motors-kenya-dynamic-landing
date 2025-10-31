import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Fuel, Gauge, Settings, Search } from "lucide-react";
import VehicleDetailModal from "@/components/VehicleDetailModal";

const Variants = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const handleViewDetails = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const vehicleTypes = ["All", ...Array.from(new Set(vehicles.map(v => v.type)))];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesFilter = filter === "All" || vehicle.type === filter;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.engine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Vehicle <span className="text-accent">Variants</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of heavy equipment variants tailored for West African markets
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, type, or engine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg border-2 border-border focus:border-accent transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {vehicleTypes.map((type) => (
              <Button
                key={type}
                onClick={() => setFilter(type)}
                variant={filter === type ? "default" : "outline"}
                className={`font-semibold transition-all duration-300 ${
                  filter === type 
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" 
                    : "hover:bg-accent/10 hover:text-accent hover:border-accent"
                }`}
              >
                {type}
              </Button>
            ))}
          </div>

          {/* Results Counter */}
          <p className="text-center text-muted-foreground">
            Showing <span className="font-bold text-accent">{filteredVehicles.length}</span> vehicles
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-accent">
              <CardHeader className="p-0 relative">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vehicle.images[0]}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold shadow-lg">
                    {vehicle.type}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                    <p className="text-white/90 text-sm">{vehicle.year}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Settings className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Engine</p>
                      <p className="text-sm font-semibold text-foreground">{vehicle.engine}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Gauge className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Transmission</p>
                      <p className="text-sm font-semibold text-foreground">{vehicle.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Fuel className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Fuel Type</p>
                      <p className="text-sm font-semibold text-foreground">{vehicle.fuelType || "Diesel"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Truck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="text-sm font-semibold text-foreground">{vehicle.mileage}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <div className="text-3xl font-bold text-accent">$</div>
                <Button 
                  onClick={() => handleViewDetails(vehicle)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-16">
            <Truck className="w-24 h-24 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">No vehicles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default Variants;
