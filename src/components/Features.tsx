import { CheckCircle, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="w-12 h-12 text-accent" />,
      title: "Wide Selection",
      description: "Tractors, Dump Trucks, Cargo Trucks & Specialized Equipment",
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Quality Assured",
      description: "Every machine inspected & certified",
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Easy Process",
      description: "Fast, transparent, and customer-first",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Equipment King Incorporated
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With operations across Liberia, Mali, Guinea, and Sierra Leone, Equipment King Incorporated 
            is your trusted partner for reliable, high-performance heavy-duty trucks and specialized equipment. 
            We deliver quality, transparency, and exceptional service throughout West Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
