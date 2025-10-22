import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Vehicle } from "@/data/vehicles";
import { Badge } from "@/components/ui/badge";
import { Phone, Gauge, Settings, MapPin, Calendar, Fuel, Cog, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VehicleDetailModal = ({ vehicle, open, onOpenChange }: VehicleDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!vehicle) return null;

  const handleCall = () => {
    window.location.href = "tel:0720496076";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            <span>{vehicle.name}</span>
            <Badge 
              variant={vehicle.type === "Tractor" || vehicle.type === "New Energy" ? "default" : "secondary"} 
              className="text-sm"
            >
              {vehicle.type}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative rounded-lg overflow-hidden aspect-video bg-muted group">
              <img
                src={vehicle.images[currentImageIndex]}
                alt={`${vehicle.name} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation arrows */}
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {vehicle.images.length}
                  </div>
                </>
              )}
            </div>
            
            {/* Thumbnail navigation */}
            {vehicle.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {vehicle.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-accent scale-105'
                        : 'border-transparent hover:border-muted-foreground/30'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${vehicle.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
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
            <h3 className="text-lg font-bold mb-3">Equipment Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {vehicle.description || `This ${vehicle.name} is in excellent condition and ready for immediate deployment. 
              All our equipment undergoes rigorous inspection to ensure quality and reliability. 
              Contact us today to schedule a viewing or for more information.`}
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
