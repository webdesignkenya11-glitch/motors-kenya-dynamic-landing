import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    home: "Home",
    trucks: "Trucks",
    variants: "Variants",
    about: "About",
    contact: "Contact",
    getStarted: "Get Started",
    
    // Hero
    servingWestAfrica: "Serving West Africa Since 2010",
    equipmentKing: "Equipment King",
    incorporated: "Incorporated",
    westAfricaPremier: "West Africa's Premier Heavy Equipment Supplier",
    qualityTrucks: "Quality trucks and heavy equipment for construction, mining, and transportation across Liberia, Mali, Guinea, and Sierra Leone.",
    browseEquipment: "Browse Equipment",
    contactUs: "Contact Us",
    
    // Variants Page
    vehicleVariants: "Vehicle Variants",
    exploreRange: "Explore our comprehensive range of heavy equipment variants tailored for West African markets",
    searchPlaceholder: "Search by name, type, or engine...",
    showing: "Showing",
    vehicles: "vehicles",
    all: "All",
    viewDetails: "View Details",
    noVehiclesFound: "No vehicles found",
    tryAdjusting: "Try adjusting your search or filter criteria",
    
    // About Page
    aboutEquipmentKing: "About Equipment King",
    trustedPartner: "West Africa's trusted partner in heavy equipment supply since 2010",
    ourMission: "Our Mission",
    missionText: "To provide West Africa with world-class heavy equipment solutions that drive infrastructure development, economic growth, and prosperity across the region. We are committed to delivering quality vehicles and exceptional service to our valued customers.",
    ourVision: "Our Vision",
    visionText: "To become the premier heavy equipment supplier across West Africa, recognized for our reliability, integrity, and commitment to customer success. We envision a future where our equipment powers every major development project in the region.",
    yearsExperience: "Years Experience",
    vehiclesSold: "Vehicles Sold",
    countriesServed: "Countries Served",
    customerSatisfaction: "Customer Satisfaction",
    regionalCoverage: "Regional Coverage",
    equipmentRange: "Equipment Range",
    whyChooseUs: "Why Choose Equipment King?",
    preferredSupplier: "We stand out as the preferred heavy equipment supplier in West Africa",
    qualityAssurance: "Quality Assurance",
    qualityText: "All vehicles undergo rigorous inspection to ensure top quality and reliability",
    competitivePricing: "Competitive Pricing",
    pricingText: "Best value for money with transparent pricing and flexible payment options",
    expertSupport: "Expert Support",
    supportText: "Dedicated team providing guidance from selection to after-sales service",
    ourCoreValues: "Our Core Values",
    integrity: "Integrity",
    integrityText: "Honest and transparent in all dealings",
    excellence: "Excellence",
    excellenceText: "Committed to the highest standards",
    reliability: "Reliability",
    reliabilityText: "Dependable partner you can trust",
    innovation: "Innovation",
    innovationText: "Embracing new solutions and technologies",
    
    // Vehicle Types
    dumpTruck: "Dump Truck",
    cargoTruck: "Cargo Truck",
    specialVehicle: "Special Vehicle",
    tractor: "Tractor",
    onRoadTruck: "On-road Truck",
    newEnergy: "New Energy",
    
    // Specs
    engine: "Engine",
    transmission: "Transmission",
    fuelType: "Fuel Type",
    status: "Status",
    year: "Year",
    mileage: "Mileage",
    drivetrain: "Drivetrain",
    
    // Contact
    price: "Price",
    callNow: "Call Now: 0720 496 076",
    sendEnquiry: "Send Enquiry",
    keySpecifications: "Key Specifications",
    equipmentDescription: "Equipment Description",
    featuresEquipment: "Features & Equipment",
    cargoTrucks: "Cargo Trucks",
    specialVehicles: "Special Vehicles",
    contactPrice: "Contact for price",
    
    // Features
    whyChooseEquipmentKing: "Why Choose Equipment King",
    deliveringExcellence: "Delivering excellence in heavy equipment across West Africa",
    wideSelection: "Wide Selection",
    wideSelectionText: "Comprehensive inventory of heavy-duty trucks and specialized equipment across all categories",
    qualityAssured: "Quality Assured",
    qualityAssuredText: "All equipment undergoes rigorous inspection to ensure reliability and performance",
    expertService: "Expert Service",
    expertServiceText: "Professional support team with decades of combined experience in heavy equipment",
    maintenanceSupport: "Maintenance Support",
    maintenanceSupportText: "Comprehensive after-sales service and maintenance support across West Africa",
    regionalCoverageTitle: "Regional Coverage",
    regionalCoverageText: "Strategic locations in 4 countries to serve you better across West Africa",
    competitivePricingTitle: "Competitive Pricing",
    competitivePricingText: "Best value for money with flexible payment options and financing solutions",
    
    // Featured Trucks
    featuredEquipment: "Featured Equipment",
    discoverPremium: "Discover our premium selection of heavy-duty trucks and specialized machinery",
    viewFullInventory: "View Full Inventory",
    
    // Testimonials
    whatClientsSay: "What Our Clients Say",
    trustedByCompanies: "Trusted by leading companies across West Africa",
    
    // Contact
    getInTouch: "Get In Touch",
    readyToFind: "Ready to find your perfect equipment? Contact us today",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    message: "Message",
    sendMessage: "Send Message",
    phone: "Phone",
    email: "Email",
    headquarters: "Headquarters",
    monroviaHQ: "Monrovia, Liberia (HQ)",
    alsoServing: "Also serving Mali, Guinea & Sierra Leone",
    followUs: "Follow Us",
    mapLocation: "Map Location",
    messageSent: "Message Sent!",
    thankYouMessage: "Thank you for contacting Equipment King Incorporated. We'll get back to you soon.",
    tellUsRequirements: "Tell us about your requirements...",
  },
  fr: {
    // Header
    home: "Accueil",
    trucks: "Camions",
    variants: "Variantes",
    about: "À Propos",
    contact: "Contact",
    getStarted: "Commencer",
    
    // Hero
    servingWestAfrica: "Au service de l'Afrique de l'Ouest depuis 2010",
    equipmentKing: "Equipment King",
    incorporated: "Incorporated",
    westAfricaPremier: "Premier Fournisseur d'Équipement Lourd d'Afrique de l'Ouest",
    qualityTrucks: "Camions et équipements lourds de qualité pour la construction, l'exploitation minière et le transport au Libéria, au Mali, en Guinée et en Sierra Leone.",
    browseEquipment: "Parcourir l'Équipement",
    contactUs: "Nous Contacter",
    
    // Variants Page
    vehicleVariants: "Variantes de Véhicules",
    exploreRange: "Explorez notre gamme complète de variantes d'équipements lourds adaptées aux marchés d'Afrique de l'Ouest",
    searchPlaceholder: "Rechercher par nom, type ou moteur...",
    showing: "Affichage de",
    vehicles: "véhicules",
    all: "Tous",
    viewDetails: "Voir Détails",
    noVehiclesFound: "Aucun véhicule trouvé",
    tryAdjusting: "Essayez d'ajuster vos critères de recherche ou de filtre",
    
    // About Page
    aboutEquipmentKing: "À Propos d'Equipment King",
    trustedPartner: "Partenaire de confiance de l'Afrique de l'Ouest en fourniture d'équipements lourds depuis 2010",
    ourMission: "Notre Mission",
    missionText: "Fournir à l'Afrique de l'Ouest des solutions d'équipement lourd de classe mondiale qui favorisent le développement des infrastructures, la croissance économique et la prospérité dans toute la région. Nous nous engageons à fournir des véhicules de qualité et un service exceptionnel à nos précieux clients.",
    ourVision: "Notre Vision",
    visionText: "Devenir le principal fournisseur d'équipements lourds en Afrique de l'Ouest, reconnu pour notre fiabilité, notre intégrité et notre engagement envers le succès de nos clients. Nous envisageons un avenir où nos équipements alimentent tous les grands projets de développement de la région.",
    yearsExperience: "Années d'Expérience",
    vehiclesSold: "Véhicules Vendus",
    countriesServed: "Pays Servis",
    customerSatisfaction: "Satisfaction Client",
    regionalCoverage: "Couverture Régionale",
    equipmentRange: "Gamme d'Équipements",
    whyChooseUs: "Pourquoi Choisir Equipment King?",
    preferredSupplier: "Nous nous distinguons comme le fournisseur d'équipements lourds préféré en Afrique de l'Ouest",
    qualityAssurance: "Assurance Qualité",
    qualityText: "Tous les véhicules subissent une inspection rigoureuse pour garantir qualité et fiabilité",
    competitivePricing: "Prix Compétitifs",
    pricingText: "Meilleur rapport qualité-prix avec des prix transparents et des options de paiement flexibles",
    expertSupport: "Support Expert",
    supportText: "Équipe dédiée fournissant des conseils de la sélection au service après-vente",
    ourCoreValues: "Nos Valeurs Fondamentales",
    integrity: "Intégrité",
    integrityText: "Honnête et transparent dans toutes les transactions",
    excellence: "Excellence",
    excellenceText: "Engagé aux normes les plus élevées",
    reliability: "Fiabilité",
    reliabilityText: "Partenaire fiable en qui vous pouvez avoir confiance",
    innovation: "Innovation",
    innovationText: "Adopter de nouvelles solutions et technologies",
    
    // Vehicle Types
    dumpTruck: "Camion Benne",
    cargoTruck: "Camion de Fret",
    specialVehicle: "Véhicule Spécial",
    tractor: "Tracteur",
    onRoadTruck: "Camion Routier",
    newEnergy: "Nouvelle Énergie",
    
    // Specs
    engine: "Moteur",
    transmission: "Transmission",
    fuelType: "Type de Carburant",
    status: "Statut",
    year: "Année",
    mileage: "Kilométrage",
    drivetrain: "Transmission",
    
    // Contact
    price: "Prix",
    callNow: "Appeler: 0720 496 076",
    sendEnquiry: "Envoyer Demande",
    keySpecifications: "Spécifications Clés",
    equipmentDescription: "Description de l'Équipement",
    featuresEquipment: "Caractéristiques & Équipement",
    cargoTrucks: "Camions de Fret",
    specialVehicles: "Véhicules Spéciaux",
    contactPrice: "Contactez pour le prix",
    
    // Features
    whyChooseEquipmentKing: "Pourquoi Choisir Equipment King",
    deliveringExcellence: "Excellence dans les équipements lourds en Afrique de l'Ouest",
    wideSelection: "Large Sélection",
    wideSelectionText: "Inventaire complet de camions lourds et d'équipements spécialisés dans toutes les catégories",
    qualityAssured: "Qualité Assurée",
    qualityAssuredText: "Tous les équipements subissent une inspection rigoureuse pour garantir fiabilité et performance",
    expertService: "Service Expert",
    expertServiceText: "Équipe de support professionnelle avec des décennies d'expérience combinée en équipements lourds",
    maintenanceSupport: "Support de Maintenance",
    maintenanceSupportText: "Service après-vente complet et support de maintenance à travers l'Afrique de l'Ouest",
    regionalCoverageTitle: "Couverture Régionale",
    regionalCoverageText: "Emplacements stratégiques dans 4 pays pour mieux vous servir en Afrique de l'Ouest",
    competitivePricingTitle: "Prix Compétitifs",
    competitivePricingText: "Meilleur rapport qualité-prix avec options de paiement flexibles et solutions de financement",
    
    // Featured Trucks
    featuredEquipment: "Équipements en Vedette",
    discoverPremium: "Découvrez notre sélection premium de camions lourds et de machines spécialisées",
    viewFullInventory: "Voir l'Inventaire Complet",
    
    // Testimonials
    whatClientsSay: "Ce Que Disent Nos Clients",
    trustedByCompanies: "Approuvé par les principales entreprises d'Afrique de l'Ouest",
    
    // Contact
    getInTouch: "Contactez-Nous",
    readyToFind: "Prêt à trouver votre équipement parfait? Contactez-nous aujourd'hui",
    fullName: "Nom Complet",
    phoneNumber: "Numéro de Téléphone",
    emailAddress: "Adresse Email",
    message: "Message",
    sendMessage: "Envoyer le Message",
    phone: "Téléphone",
    email: "Email",
    headquarters: "Siège Social",
    monroviaHQ: "Monrovia, Libéria (Siège)",
    alsoServing: "Servant également le Mali, la Guinée et la Sierra Leone",
    followUs: "Suivez-Nous",
    mapLocation: "Emplacement sur la Carte",
    messageSent: "Message Envoyé!",
    thankYouMessage: "Merci d'avoir contacté Equipment King Incorporated. Nous vous répondrons bientôt.",
    tellUsRequirements: "Parlez-nous de vos besoins...",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
