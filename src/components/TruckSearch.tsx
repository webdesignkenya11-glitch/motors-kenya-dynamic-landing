import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { vehicles, Vehicle } from "@/data/vehicles";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

export const TruckSearch = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Vehicle[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = vehicles.filter(
      (vehicle) =>
        vehicle.name.toLowerCase().includes(query.toLowerCase()) ||
        vehicle.type.toLowerCase().includes(query.toLowerCase()) ||
        vehicle.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleVehicleClick = (vehicle: Vehicle) => {
    const categoryMap: { [key: string]: string } = {
      "Tractor": "/trucks/tractors",
      "Dump Truck": "/trucks/dump-trucks",
      "Special Vehicle": "/trucks/special-vehicles",
      "Cargo Truck": "/trucks/cargo-trucks",
      "On-road Truck": "/trucks/on-road-trucks",
      "New Energy": "/trucks/new-energy",
    };
    
    const route = categoryMap[vehicle.type] || "/trucks";
    setIsOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    navigate(route);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="gap-2"
      >
        <Search className="w-4 h-4" />
        {t("searchTrucks")}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-2xl">{t("searchTrucks")}</DialogTitle>
          </DialogHeader>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-10 text-lg h-12"
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => handleSearch("")}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto mt-4">
            {searchQuery && searchResults.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                {t("noResults")}
              </p>
            )}
            
            {searchResults.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {searchResults.length} {t("vehiclesFound")}
                </p>
                <div className="grid gap-4">
                  {searchResults.map((vehicle) => (
                    <Card
                      key={vehicle.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => handleVehicleClick(vehicle)}
                    >
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img
                            src={vehicle.images[0]}
                            alt={vehicle.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">
                              {vehicle.name}
                            </h3>
                            <p className="text-sm text-accent mb-2">
                              {vehicle.type}
                            </p>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {vehicle.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
