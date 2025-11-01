import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("messageSent"),
      description: t("thankYouMessage"),
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("getInTouch")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("readyToFind")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border border-border animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">
                  {t("fullName")} *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">
                  {t("phoneNumber")} *
                </label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+254 700 000 000"
                  className="border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">
                  {t("emailAddress")} *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">
                  {t("message")} *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("tellUsRequirements")}
                  rows={5}
                  className="border-border resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-base transition-all duration-300 hover:scale-[1.02]"
              >
                {t("sendMessage")}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="p-6 bg-card border border-border flex items-start gap-4 hover:shadow-md transition-all duration-300">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground mb-1">{t("phone")}</h3>
                <a href="tel:0720496076" className="text-muted-foreground hover:text-accent transition-colors">0720 496 076</a>
                <p className="text-muted-foreground">+254 711 111 111</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border border-border flex items-start gap-4 hover:shadow-md transition-all duration-300">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground mb-1">{t("email")}</h3>
                <p className="text-muted-foreground">info@equipmentking.com</p>
                <p className="text-muted-foreground">sales@equipmentking.com</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border border-border flex items-start gap-4 hover:shadow-md transition-all duration-300">
              <div className="bg-accent/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground mb-1">{t("headquarters")}</h3>
                <p className="text-muted-foreground font-semibold">{t("monroviaHQ")}</p>
                <p className="text-sm text-muted-foreground mt-2">{t("alsoServing")}</p>
              </div>
            </Card>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="font-bold text-card-foreground mb-4">{t("followUs")}</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-accent/10 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/10 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/10 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="p-4 bg-card border border-border overflow-hidden">
              <div className="bg-muted rounded-lg h-64 flex flex-col items-center justify-center gap-2">
                <MapPin className="w-12 h-12 text-accent" />
                <p className="text-foreground font-semibold">{t("mapLocation")}</p>
                <p className="text-muted-foreground text-sm">{t("monroviaHQ")}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
