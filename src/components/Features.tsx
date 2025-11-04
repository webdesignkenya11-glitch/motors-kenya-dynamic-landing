import { Award, Shield, Truck, Wrench, MapPin, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Truck,
      titleKey: "wideSelection",
      descKey: "wideSelectionText",
      color: "text-blue-500",
    },
    {
      icon: Shield,
      titleKey: "qualityAssured",
      descKey: "qualityAssuredText",
      color: "text-green-500",
    },
    {
      icon: Award,
      titleKey: "expertService",
      descKey: "expertServiceText",
      color: "text-yellow-500",
    },
    {
      icon: Wrench,
      titleKey: "maintenanceSupport",
      descKey: "maintenanceSupportText",
      color: "text-red-500",
    },
    {
      icon: MapPin,
      titleKey: "regionalCoverageTitle",
      descKey: "regionalCoverageText",
      color: "text-purple-500",
    },
    {
      icon: DollarSign,
      titleKey: "competitivePricingTitle",
      descKey: "competitivePricingText",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 opacity-5 animate-pulse">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Accent gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("whyChooseEquipmentKing")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t("deliveringExcellence")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent transition-all duration-500 animate-fade-in hover-scale relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: 'var(--shadow-md)',
                transition: 'var(--transition-bounce)'
              }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="mb-4 relative">
                <div className={`absolute inset-0 ${feature.color} opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500 rounded-full`} 
                     style={{ animation: 'float 3s ease-in-out infinite', animationDelay: `${index * 200}ms` }} />
                <feature.icon className={`w-12 h-12 ${feature.color} relative z-10 group-hover:scale-125 transition-all duration-500 group-hover:rotate-6`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors relative z-10">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
