import car1 from "@/assets/car1-corolla.jpg";
import car2 from "@/assets/car2-note.jpg";
import car3 from "@/assets/car3-demio.jpg";
import car4 from "@/assets/car4-fit.jpg";
import car5 from "@/assets/car5-forester.jpg";
import car6 from "@/assets/car6-axio.jpg";
import car7 from "@/assets/car7-golf.jpg";
import truck1 from "@/assets/truck1-npr.jpg";
import truck2 from "@/assets/truck2-fuso.jpg";
import truck3 from "@/assets/truck3-hilux.jpg";
import truck4 from "@/assets/truck4-navara.jpg";
import truck5 from "@/assets/truck5-hino.jpg";
import truck6 from "@/assets/truck6-frr.jpg";
import truck7 from "@/assets/truck7-landcruiser.jpg";
import truck8 from "@/assets/truck8-actros.jpg";

export interface Vehicle {
  id: number;
  name: string;
  type: "Car" | "Truck";
  engine: string;
  transmission: string;
  mileage: string;
  price: string;
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Toyota Corolla 2021",
    type: "Car",
    engine: "1.8 L",
    transmission: "Auto",
    mileage: "45,000 km",
    price: "KSh 2,300,000",
    image: car1,
  },
  {
    id: 2,
    name: "Nissan Note 2020",
    type: "Car",
    engine: "1.5 L",
    transmission: "Auto",
    mileage: "37,000 km",
    price: "KSh 1,800,000",
    image: car2,
  },
  {
    id: 3,
    name: "Mazda Demio 2019",
    type: "Car",
    engine: "1.3 L",
    transmission: "Auto",
    mileage: "41,000 km",
    price: "KSh 1,600,000",
    image: car3,
  },
  {
    id: 4,
    name: "Honda Fit 2021",
    type: "Car",
    engine: "1.5 L Hybrid",
    transmission: "Auto",
    mileage: "28,000 km",
    price: "KSh 1,900,000",
    image: car4,
  },
  {
    id: 5,
    name: "Subaru Forester 2020",
    type: "Car",
    engine: "2.0 L AWD",
    transmission: "Auto",
    mileage: "50,000 km",
    price: "KSh 3,500,000",
    image: car5,
  },
  {
    id: 6,
    name: "Toyota Axio 2018",
    type: "Car",
    engine: "1.5 L",
    transmission: "Auto",
    mileage: "60,000 km",
    price: "KSh 1,700,000",
    image: car6,
  },
  {
    id: 7,
    name: "Volkswagen Golf 2021",
    type: "Car",
    engine: "1.4 L Turbo",
    transmission: "Auto",
    mileage: "30,000 km",
    price: "KSh 2,600,000",
    image: car7,
  },
  {
    id: 8,
    name: "Isuzu NPR 2019",
    type: "Truck",
    engine: "4.3 L Diesel",
    transmission: "Manual",
    mileage: "120,000 km",
    price: "KSh 4,800,000",
    image: truck1,
  },
  {
    id: 9,
    name: "Mitsubishi Fuso Canter 2020",
    type: "Truck",
    engine: "Diesel",
    transmission: "Manual",
    mileage: "95,000 km",
    price: "KSh 5,200,000",
    image: truck2,
  },
  {
    id: 10,
    name: "Toyota Hilux 2022",
    type: "Truck",
    engine: "2.4 L Diesel",
    transmission: "Auto",
    mileage: "22,000 km",
    price: "KSh 6,000,000",
    image: truck3,
  },
  {
    id: 11,
    name: "Nissan Navara 2021",
    type: "Truck",
    engine: "2.5 L Diesel",
    transmission: "Auto",
    mileage: "35,000 km",
    price: "KSh 5,700,000",
    image: truck4,
  },
  {
    id: 12,
    name: "Hino Dutro 2020",
    type: "Truck",
    engine: "Diesel",
    transmission: "Manual",
    mileage: "88,000 km",
    price: "KSh 5,500,000",
    image: truck5,
  },
  {
    id: 13,
    name: "Isuzu FRR 2018",
    type: "Truck",
    engine: "Diesel",
    transmission: "Manual",
    mileage: "145,000 km",
    price: "KSh 6,500,000",
    image: truck6,
  },
  {
    id: 14,
    name: "Toyota Land Cruiser Pickup 2022",
    type: "Truck",
    engine: "4.5 L Diesel",
    transmission: "Manual",
    mileage: "18,000 km",
    price: "KSh 8,500,000",
    image: truck7,
  },
  {
    id: 15,
    name: "Mercedes Actros 2019",
    type: "Truck",
    engine: "Diesel",
    transmission: "Manual",
    mileage: "165,000 km",
    price: "KSh 9,500,000",
    image: truck8,
  },
];
