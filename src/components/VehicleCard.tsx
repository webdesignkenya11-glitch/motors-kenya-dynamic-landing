import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Vehicle } from "@/data/vehicles";
import { Badge } from "@/components/ui/badge";
import { Gauge, Settings, MapPin, Eye } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
}

const VehicleCard = ({ vehicle, onViewDetails }: VehicleCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => onViewDetails(vehicle)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <Badge 
          variant={vehicle.type === "Tractor" || vehicle.type === "New Energy" ? "default" : "secondary"}
          className="absolute top-4 right-4 font-semibold text-xs"
        >
          {vehicle.type}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-card-foreground">{vehicle.name}</h3>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4 text-accent" />
            <span>{vehicle.engine}</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="w-4 h-4 text-accent" />
            <span>{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{vehicle.mileage}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-2xl font-bold text-accent">{vehicle.price}</p>
          </div>
          <Button 
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(vehicle);
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VehicleCard;
