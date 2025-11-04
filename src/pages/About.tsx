import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Globe, Users, Award, Target, CheckCircle } from "lucide-react";
import logoImage from "@/assets/equipmentking-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const About = () => {
  const { t } = useLanguage();
  const heroAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
  const servicesAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div 
          ref={heroAnim.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-6">
            <img 
              src={logoImage} 
              alt="Equipment King Incorporated" 
              className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t("aboutEquipmentKing")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("trustedPartner")}
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-accent transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t("ourMission")}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("missionText")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t("ourVision")}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("visionText")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsAnim.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            statsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: "15+", label: t("yearsExperience"), delay: "0ms" },
            { value: "500+", label: t("vehiclesSold"), delay: "100ms" },
            { value: "4", label: t("countriesServed"), delay: "200ms" },
            { value: "100%", label: t("customerSatisfaction"), delay: "300ms" }
          ].map((stat, index) => (
            <Card 
              key={index}
              className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              style={{ animationDelay: stat.delay }}
            >
              <CardContent className="p-0">
                <div className="text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services & Coverage */}
        <div 
          ref={servicesAnim.ref}
          className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-300 ${
            servicesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Globe className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t("regionalCoverage")}</h2>
              </div>
              <div className="space-y-3">
                {["Liberia", "Mali", "Guinea", "Sierra Leone"].map((country, index) => (
                  <div 
                    key={country} 
                    className="flex items-center gap-3 hover:translate-x-2 transition-transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-lg text-foreground">{country}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Truck className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t("equipmentRange")}</h2>
              </div>
              <div className="space-y-3">
                {["Dump Trucks", "Cargo Trucks", "Special Vehicles", "Tractors", "On-road Trucks", "New Energy Vehicles"].map((type, index) => (
                  <div 
                    key={type} 
                    className="flex items-center gap-3 hover:translate-x-2 transition-transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-lg text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <Card className="border-2 bg-gradient-to-br from-accent/5 to-transparent">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Users className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">{t("whyChooseUs")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("preferredSupplier")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Badge className="bg-accent text-accent-foreground mb-4 text-lg px-4 py-2">{t("qualityAssurance")}</Badge>
                <p className="text-muted-foreground">
                  {t("qualityText")}
                </p>
              </div>
              <div className="text-center p-6">
                <Badge className="bg-accent text-accent-foreground mb-4 text-lg px-4 py-2">{t("competitivePricing")}</Badge>
                <p className="text-muted-foreground">
                  {t("pricingText")}
                </p>
              </div>
              <div className="text-center p-6">
                <Badge className="bg-accent text-accent-foreground mb-4 text-lg px-4 py-2">{t("expertSupport")}</Badge>
                <p className="text-muted-foreground">
                  {t("supportText")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Values */}
        <div 
          ref={valuesAnim.ref}
          className={`mt-16 text-center transition-all duration-1000 delay-400 ${
            valuesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-8">{t("ourCoreValues")}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { titleKey: "integrity", descKey: "integrityText" },
              { titleKey: "excellence", descKey: "excellenceText" },
              { titleKey: "reliability", descKey: "reliabilityText" },
              { titleKey: "innovation", descKey: "innovationText" }
            ].map((value, index) => (
              <Card 
                key={value.titleKey} 
                className="border-2 hover:border-accent transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">{t(value.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
