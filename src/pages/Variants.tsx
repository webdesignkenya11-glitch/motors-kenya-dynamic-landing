import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, Settings, Gauge, Fuel, Calendar, Package, Wrench } from "lucide-react";
import VehicleDetailModal from "@/components/VehicleDetailModal";
import { useLanguage } from "@/contexts/LanguageContext";
import truck1 from "@/assets/truck1-npr.jpg";
import truck2 from "@/assets/truck2-fuso.jpg";
import truck3 from "@/assets/truck3-hilux.jpg";
import truck4 from "@/assets/truck4-navara.jpg";
import truck5 from "@/assets/truck5-hino.jpg";

// Categorized trucks
const cargoTrucks = [
  {
    id: 1,
    name: "Premium Dump Truck X6",
    category: "cargo" as const,
    type: "Dump Truck" as const,
    engine: "6.7L Diesel 220HP",
    transmission: "Manual 9-Speed",
    mileage: "New",
    images: [truck1],
    year: "2024",
    fuelType: "Diesel",
    description: "High-performance dump truck with 220 horsepower, perfect for construction sites and material transport.",
    features: ["220 HP", "4x2 Drive", "860 N·M Torque", "15 Ton Capacity", "Hydraulic Tipper"],
  },
  {
    id: 2,
    name: "Heavy Cargo Transporter",
    category: "cargo" as const,
    type: "Cargo Truck" as const,
    engine: "9.7L Diesel 340HP",
    transmission: "Manual 12-Speed",
    mileage: "New",
    images: [truck2],
    year: "2024",
    fuelType: "Diesel",
    description: "Heavy-duty cargo truck with maximum payload capacity for commercial freight operations.",
    features: ["340 HP", "6x4 All-Wheel Drive", "25 Ton Capacity", "Reinforced Chassis"],
  },
  {
    id: 5,
    name: "Versatile Multi-Purpose Truck",
    category: "cargo" as const,
    type: "On-road Truck" as const,
    engine: "6.7L Diesel 220HP",
    transmission: "Manual 9-Speed",
    mileage: "New",
    images: [truck5],
    year: "2024",
    fuelType: "Diesel",
    description: "Versatile on-road truck for general freight and regional transportation needs.",
    features: ["220 HP", "12 Ton Payload", "Comfortable Cabin", "LED Lights"],
  },
];

const specialVehicles = [
  {
    id: 3,
    name: "Off-Road Specialist 4x4",
    category: "special" as const,
    type: "Special Vehicle" as const,
    engine: "4.3L Diesel 160HP",
    transmission: "Automatic 6-Speed",
    mileage: "New",
    images: [truck3],
    year: "2024",
    fuelType: "Diesel",
    description: "Compact and powerful off-road vehicle ideal for challenging terrain and remote locations.",
    features: ["160 HP", "4x4 Drive", "All-Terrain Capability", "Automatic Transmission"],
  },
  {
    id: 4,
    name: "Industrial Workhorse Pro",
    category: "special" as const,
    type: "Tractor" as const,
    engine: "11.6L Diesel 380HP",
    transmission: "Automatic 12-Speed",
    mileage: "New",
    images: [truck4],
    year: "2024",
    fuelType: "Diesel",
    description: "Top-tier tractor with automatic transmission for heavy-duty industrial operations.",
    features: ["380 HP", "8x4 Configuration", "Auto Transmission", "Air Suspension"],
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

  const renderVehicleCard = (vehicle: any) => (
    <Card 
      key={vehicle.id} 
      className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-accent/5"
    >
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay z-10" />
        <img
          src={vehicle.images[0]}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20" />
        
        <Badge className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground font-bold shadow-lg text-sm px-4 py-2 z-30">
          {vehicle.type}
        </Badge>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-white/80 text-base font-medium">{vehicle.year} Model • {vehicle.mileage}</p>
        </div>
      </div>

      <CardContent className="p-6 space-y-5">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {vehicle.description}
        </p>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-3 border border-accent/20 hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Settings className="w-4 h-4 text-accent" />
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">{t("engine")}</p>
            </div>
            <p className="text-xs font-bold text-foreground">{vehicle.engine}</p>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-3 border border-accent/20 hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Gauge className="w-4 h-4 text-accent" />
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">{t("transmission")}</p>
            </div>
            <p className="text-xs font-bold text-foreground">{vehicle.transmission}</p>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-3 border border-accent/20 hover:border-accent/40 transition-colors col-span-2">
            <div className="flex items-center gap-2 mb-1">
              <Fuel className="w-4 h-4 text-accent" />
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">{t("fuelType")}</p>
            </div>
            <p className="text-xs font-bold text-foreground">{vehicle.fuelType}</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{t("featuresEquipment")}</p>
          <div className="flex flex-wrap gap-1.5">
            {vehicle.features.map((feature: string, idx: number) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="border-accent/30 bg-accent/5 text-foreground text-xs px-2 py-0.5 hover:bg-accent/10 transition-colors"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-accent">$</div>
            <span className="text-xs text-muted-foreground">{t("contactPrice")}</span>
          </div>
          <Button 
            onClick={() => handleViewDetails(vehicle)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Truck className="w-4 h-4 mr-2" />
            {t("viewDetails")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="bg-accent/20 text-accent border-accent/50 mb-4 text-sm px-6 py-2 font-bold uppercase tracking-wide">
            {t("showing")} 5 {t("vehicles")}
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            {t("vehicleVariants")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("exploreRange")}
          </p>
        </div>

        {/* Tabbed Categories */}
        <Tabs defaultValue="cargo" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 h-14 bg-accent/10 p-1">
            <TabsTrigger 
              value="cargo" 
              className="text-base font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground flex items-center gap-2"
            >
              <Package className="w-5 h-5" />
              {t("cargoTrucks")} ({cargoTrucks.length})
            </TabsTrigger>
            <TabsTrigger 
              value="special" 
              className="text-base font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground flex items-center gap-2"
            >
              <Wrench className="w-5 h-5" />
              {t("specialVehicles")} ({specialVehicles.length})
            </TabsTrigger>
          </TabsList>

          {/* Cargo Trucks Tab */}
          <TabsContent value="cargo" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cargoTrucks.map(renderVehicleCard)}
            </div>
          </TabsContent>

          {/* Special Vehicles Tab */}
          <TabsContent value="special" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {specialVehicles.map(renderVehicleCard)}
            </div>
          </TabsContent>
        </Tabs>
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
