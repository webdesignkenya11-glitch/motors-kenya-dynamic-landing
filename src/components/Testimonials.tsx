import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Mwangi",
      role: "Construction Manager, Liberia",
      content: "Got my dump truck from Equipment King — smooth process and great service! The team was professional and transparent throughout.",
    },
    {
      name: "Fatou Diallo",
      role: "Logistics Director, Mali",
      content: "Honest people, quality equipment, no hidden costs. Equipment King is our trusted partner for all heavy-duty truck needs.",
    },
    {
      name: "Mohamed Kamara",
      role: "Fleet Manager, Sierra Leone",
      content: "We purchased three cargo trucks for our transport company. Excellent quality and competitive pricing. Very satisfied!",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-accent mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
