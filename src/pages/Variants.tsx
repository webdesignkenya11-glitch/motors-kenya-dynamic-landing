import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Settings, Gauge, Fuel, Calendar } from "lucide-react";
import VehicleDetailModal from "@/components/VehicleDetailModal";
import { useLanguage } from "@/contexts/LanguageContext";
import truck1 from "@/assets/truck1-npr.jpg";
import truck2 from "@/assets/truck2-fuso.jpg";
import truck3 from "@/assets/truck3-hilux.jpg";
import truck4 from "@/assets/truck4-navara.jpg";
import truck5 from "@/assets/truck5-hino.jpg";

// Custom 5 trucks max for variants page
const customTrucks = [
  {
    id: 1,
    name: "Premium Dump Truck X6",
    type: "Dump Truck" as const,
    engine: "6.7L Diesel 220HP",
    transmission: "Manual 9-Speed",
    mileage: "New",
    price: "$32,000",
    images: [truck1],
    year: "2024",
    fuelType: "Diesel",
    description: "High-performance dump truck with 220 horsepower, perfect for construction sites and material transport.",
    features: ["220 HP", "4x2 Drive", "860 N·M Torque", "15 Ton Capacity", "Hydraulic Tipper"],
  },
  {
    id: 2,
    name: "Heavy Cargo Transporter",
    type: "Cargo Truck" as const,
    engine: "9.7L Diesel 340HP",
    transmission: "Manual 12-Speed",
    mileage: "New",
    price: "$48,500",
    images: [truck2],
    year: "2024",
    fuelType: "Diesel",
    description: "Heavy-duty cargo truck with maximum payload capacity for commercial freight operations.",
    features: ["340 HP", "6x4 All-Wheel Drive", "25 Ton Capacity", "Reinforced Chassis"],
  },
  {
    id: 3,
    name: "Off-Road Specialist 4x4",
    type: "Special Vehicle" as const,
    engine: "4.3L Diesel 160HP",
    transmission: "Automatic 6-Speed",
    mileage: "New",
    price: "$24,500",
    images: [truck3],
    year: "2024",
    fuelType: "Diesel",
    description: "Compact and powerful off-road vehicle ideal for challenging terrain and remote locations.",
    features: ["160 HP", "4x4 Drive", "All-Terrain Capability", "Automatic Transmission"],
  },
  {
    id: 4,
    name: "Industrial Workhorse Pro",
    type: "Tractor" as const,
    engine: "11.6L Diesel 380HP",
    transmission: "Automatic 12-Speed",
    mileage: "New",
    price: "$62,000",
    images: [truck4],
    year: "2024",
    fuelType: "Diesel",
    description: "Top-tier tractor with automatic transmission for heavy-duty industrial operations.",
    features: ["380 HP", "8x4 Configuration", "Auto Transmission", "Air Suspension"],
  },
  {
    id: 5,
    name: "Versatile Multi-Purpose Truck",
    type: "On-road Truck" as const,
    engine: "6.7L Diesel 220HP",
    transmission: "Manual 9-Speed",
    mileage: "New",
    price: "$29,500",
    images: [truck5],
    year: "2024",
    fuelType: "Diesel",
    description: "Versatile on-road truck for general freight and regional transportation needs.",
    features: ["220 HP", "12 Ton Payload", "Comfortable Cabin", "LED Lights"],
  },
];

const Variants = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleViewDetails = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-accent/20 text-accent border-accent/50 mb-4 text-sm px-4 py-2">
            {t("showing")} {customTrucks.length} {t("vehicles")}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            <span className="text-accent">Premium</span> {t("vehicleVariants")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("exploreRange")}
          </p>
        </div>

        {/* Premium Vehicle Grid - Max 5 Trucks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {customTrucks.map((vehicle, index) => (
            <Card 
              key={vehicle.id} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-2 hover:border-accent/50 bg-card/50 backdrop-blur-sm ${
                index === customTrucks.length - 1 && customTrucks.length % 2 !== 0 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''
              }`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <Badge className="absolute top-6 right-6 bg-accent text-accent-foreground font-bold shadow-2xl text-base px-4 py-2">
                  {vehicle.type}
                </Badge>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-white/90 text-lg">{vehicle.year} Model</p>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                {/* Key Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-accent" />
                      <p className="text-xs text-muted-foreground font-semibold">{t("engine")}</p>
                    </div>
                    <p className="text-sm font-bold text-foreground">{vehicle.engine}</p>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Gauge className="w-5 h-5 text-accent" />
                      <p className="text-xs text-muted-foreground font-semibold">{t("transmission")}</p>
                    </div>
                    <p className="text-sm font-bold text-foreground">{vehicle.transmission}</p>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Fuel className="w-5 h-5 text-accent" />
                      <p className="text-xs text-muted-foreground font-semibold">{t("fuelType")}</p>
                    </div>
                    <p className="text-sm font-bold text-foreground">{vehicle.fuelType}</p>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-accent" />
                      <p className="text-xs text-muted-foreground font-semibold">{t("status")}</p>
                    </div>
                    <p className="text-sm font-bold text-foreground">{vehicle.mileage}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">{t("featuresEquipment")}</p>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="border-accent/30 text-foreground">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-4xl font-bold text-accent">$</div>
                  <Button 
                    onClick={() => handleViewDetails(vehicle)}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl px-8"
                  >
                    <Truck className="w-5 h-5 mr-2" />
                    {t("viewDetails")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
