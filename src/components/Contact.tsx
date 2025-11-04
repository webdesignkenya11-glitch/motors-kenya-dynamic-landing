import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import contactTruckBg from "@/assets/contact-truck-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const formAnim = useScrollAnimation();
  const contactInfoAnim = useScrollAnimation();
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Truck background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactTruckBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
            {t("getInTouch")}
          </h2>
          <p className="text-lg text-foreground/80">
            {t("readyToFind")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="p-8 bg-card/95 backdrop-blur-sm rounded-2xl border border-border shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">{t("sendMessage")}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
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
                <label className="block text-sm font-semibold text-foreground mb-2">
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
                <label className="block text-sm font-semibold text-foreground mb-2">
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
                <label className="block text-sm font-semibold text-foreground mb-2">
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
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="p-6 bg-card/95 backdrop-blur-sm rounded-2xl border border-border shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t("contactInformation")}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{t("phone")}</h4>
                    <a href="tel:0720496076" className="text-muted-foreground hover:text-accent transition-colors block">0720 496 076</a>
                    <p className="text-muted-foreground">+254 711 111 111</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{t("email")}</h4>
                    <p className="text-muted-foreground">info@equipmentking.com</p>
                    <p className="text-muted-foreground">sales@equipmentking.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{t("headquarters")}</h4>
                    <p className="text-muted-foreground font-semibold">{t("monroviaHQ")}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t("alsoServing")}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 mt-6 border-t border-border">
                <h4 className="font-bold text-foreground mb-4">{t("followUs")}</h4>
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
            </div>

            {/* Interactive Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-card/95 backdrop-blur-sm">
              <div className="p-4 bg-accent/10 border-b border-border">
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Our Location
                </h4>
              </div>
              <div className="relative h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819527894841!2d-10.8051508!3d6.290743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTcnMjYuNyJOIDEwwrA0OCcxOC41Ilc!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Equipment King Location - Monrovia, Liberia"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
