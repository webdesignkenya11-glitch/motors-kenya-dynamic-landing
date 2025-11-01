import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Globe, Users, Award, Target, CheckCircle } from "lucide-react";
import logoImage from "@/assets/equipmentking-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logoImage} alt="Equipment King Incorporated" className="w-32 h-32 object-contain" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground font-medium">{t("yearsExperience")}</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground font-medium">{t("vehiclesSold")}</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="text-5xl font-bold text-accent mb-2">4</div>
              <p className="text-muted-foreground font-medium">{t("countriesServed")}</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground font-medium">{t("customerSatisfaction")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Services & Coverage */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t("regionalCoverage")}</h2>
              </div>
              <div className="space-y-3">
                {["Liberia", "Mali", "Guinea", "Sierra Leone"].map((country) => (
                  <div key={country} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-lg text-foreground">{country}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Truck className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t("equipmentRange")}</h2>
              </div>
              <div className="space-y-3">
                {["Dump Trucks", "Cargo Trucks", "Special Vehicles", "Tractors", "On-road Trucks", "New Energy Vehicles"].map((type) => (
                  <div key={type} className="flex items-center gap-3">
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
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">{t("ourCoreValues")}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { titleKey: "integrity", descKey: "integrityText" },
              { titleKey: "excellence", descKey: "excellenceText" },
              { titleKey: "reliability", descKey: "reliabilityText" },
              { titleKey: "innovation", descKey: "innovationText" }
            ].map((value) => (
              <Card key={value.titleKey} className="border-2 hover:border-accent transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-accent mb-2">{t(value.titleKey)}</h3>
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
