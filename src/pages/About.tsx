import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Globe, Users, Award, Target, CheckCircle } from "lucide-react";
import logoImage from "@/assets/equipmentking-logo.png";

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logoImage} alt="Equipment King Incorporated" className="w-32 h-32 object-contain" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            About <span className="text-accent">Equipment King</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            West Africa's trusted partner in heavy equipment supply since 2010
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
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide West Africa with world-class heavy equipment solutions that drive infrastructure development, 
                economic growth, and prosperity across the region. We are committed to delivering quality vehicles and 
                exceptional service to our valued customers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the premier heavy equipment supplier across West Africa, recognized for our reliability, 
                integrity, and commitment to customer success. We envision a future where our equipment powers 
                every major development project in the region.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Vehicles Sold</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="text-5xl font-bold text-accent mb-2">4</div>
              <p className="text-muted-foreground font-medium">Countries Served</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground font-medium">Customer Satisfaction</p>
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
                <h2 className="text-3xl font-bold text-foreground">Regional Coverage</h2>
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
                <h2 className="text-3xl font-bold text-foreground">Equipment Range</h2>
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
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Equipment King?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We stand out as the preferred heavy equipment supplier in West Africa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Badge className="bg-accent text-accent-foreground mb-4 text-lg px-4 py-2">Quality Assurance</Badge>
                <p className="text-muted-foreground">
                  All vehicles undergo rigorous inspection to ensure top quality and reliability
                </p>
              </div>
              <div className="text-center p-6">
                <Badge className="bg-accent text-accent-foreground mb-4 text-lg px-4 py-2">Competitive Pricing</Badge>
                <p className="text-muted-foreground">
                  Best value for money with transparent pricing and flexible payment options
                </p>
              </div>
              <div className="text-center p-6">
                <Badge className="bg-accent text-accent-foreground mb-4 text-lg px-4 py-2">Expert Support</Badge>
                <p className="text-muted-foreground">
                  Dedicated team providing guidance from selection to after-sales service
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Values */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Honest and transparent in all dealings" },
              { title: "Excellence", desc: "Committed to the highest standards" },
              { title: "Reliability", desc: "Dependable partner you can trust" },
              { title: "Innovation", desc: "Embracing new solutions and technologies" }
            ].map((value) => (
              <Card key={value.title} className="border-2 hover:border-accent transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-accent mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
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
