import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedTrucks from "@/components/FeaturedTrucks";
import Testimonials from "@/components/Testimonials";
import { TruckSearch } from "@/components/TruckSearch";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Hero />
      
      {/* Search Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-10 mb-20">
        <div className="max-w-2xl mx-auto bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-2 border-accent/20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
            {t("findPerfectTruck")}
          </h2>
          <p className="text-center text-muted-foreground mb-6">
            {t("searchInventory")}
          </p>
          <div className="flex justify-center">
            <TruckSearch />
          </div>
        </div>
      </div>
      
      <Features />
      <FeaturedTrucks />
      <Testimonials />
    </>
  );
};

export default Home;
