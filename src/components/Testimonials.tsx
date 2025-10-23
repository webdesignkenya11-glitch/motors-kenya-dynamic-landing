import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Mwangi",
      company: "Mwangi Construction Ltd",
      location: "Monrovia, Liberia",
      text: "Got my dump truck from Equipment King — smooth process and great service! The team was professional and transparent throughout.",
      rating: 5,
      avatar: "JM",
    },
    {
      name: "Fatou Diallo",
      company: "Diallo Logistics Group",
      location: "Bamako, Mali",
      text: "Honest people, quality equipment, no hidden costs. Equipment King is our trusted partner for all heavy-duty truck needs.",
      rating: 5,
      avatar: "FD",
    },
    {
      name: "Mohamed Kamara",
      company: "Kamara Transport Co.",
      location: "Freetown, Sierra Leone",
      text: "We purchased three cargo trucks for our transport company. Excellent quality and competitive pricing. Very satisfied!",
      rating: 5,
      avatar: "MK",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Trusted by leading companies across West Africa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 animate-fade-in hover-scale hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author info */}
              <div className="border-t border-border pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
