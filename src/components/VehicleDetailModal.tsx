import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Vehicle } from "@/data/vehicles";
import { Badge } from "@/components/ui/badge";
import { Phone, Gauge, Settings, MapPin, Calendar, Fuel, Cog } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VehicleDetailModal = ({ vehicle, open, onOpenChange }: VehicleDetailModalProps) => {
  if (!vehicle) return null;

  const handleCall = () => {
    window.location.href = "tel:0720496076";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            <span>{vehicle.name}</span>
            <Badge variant={vehicle.type === "Car" ? "default" : "secondary"} className="text-sm">
              {vehicle.type}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden aspect-video bg-muted">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Price */}
          <div className="bg-accent/10 rounded-lg p-6 border-2 border-accent">
            <p className="text-sm text-muted-foreground mb-1">Price</p>
            <p className="text-4xl font-bold text-accent">{vehicle.price}</p>
          </div>

          {/* Key Specifications */}
          <div>
            <h3 className="text-lg font-bold mb-4">Key Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Gauge className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Engine</p>
                  <p className="font-semibold">{vehicle.engine}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Settings className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Transmission</p>
                  <p className="font-semibold">{vehicle.transmission}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Mileage</p>
                  <p className="font-semibold">{vehicle.mileage}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Calendar className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-semibold">{vehicle.year}</p>
                </div>
              </div>
              {vehicle.fuelType && (
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Fuel className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p className="font-semibold">{vehicle.fuelType}</p>
                  </div>
                </div>
              )}
              {vehicle.drivetrain && (
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Cog className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Drivetrain</p>
                    <p className="font-semibold">{vehicle.drivetrain}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-bold mb-3">Vehicle Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {vehicle.description || `This ${vehicle.name} is in excellent condition and ready for immediate delivery. 
              All our vehicles undergo rigorous inspection to ensure quality and reliability. 
              Contact us today to schedule a test drive or for more information.`}
            </p>
          </div>

          {vehicle.features && vehicle.features.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-lg font-bold mb-3">Features & Equipment</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <Separator />

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleCall}
              size="lg"
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0720 496 076
            </Button>
            <Button 
              onClick={() => {
                onOpenChange(false);
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              size="lg"
              className="flex-1 border-2 font-semibold text-lg py-6"
            >
              Send Enquiry
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetailModal;
